#include <ArduinoJson.h>
#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <DHTesp.h>

#define INT_MAX 2147483647
DHTesp dht;

String ssid="Honor7x";
String password="12345678";
String url="http://home-automation-9875.herokuapp.com/switch";
int gasThres=570;

void setup() {
  
    pinMode(D0,OUTPUT);     //light1
    pinMode(D1,OUTPUT);     //light2
    pinMode(D2,OUTPUT);     //light3
    pinMode(D3,OUTPUT);     //fan
    pinMode(D4,OUTPUT);     //cooler
    pinMode(D5,OUTPUT);     //LED
    pinMode(D6,OUTPUT);     //Buzzer
    pinMode(A0,INPUT);      //MQ
    pinMode(D7,INPUT);      //PIR
    pinMode(D8,INPUT);      //DHT11
    Serial.begin(115200);
    dht.setup(D8, DHTesp::DHT11);
    WiFi.begin(ssid,password);
    while(WiFi.status()!=WL_CONNECTED)
    {
      Serial.println("connecting...");
      digitalWrite(D5,HIGH);
      delay(500);
      digitalWrite(D5,LOW);
      delay(500);
    }

}

void loop() {
  
  
   if(WiFi.status()==WL_CONNECTED)
   {
     digitalWrite(D5,HIGH);
     HTTPClient http;
     http.begin(url);
     DynamicJsonDocument doc(2048);
     if(dht.getTemperature()!=INT_MAX&&dht.getTemperature()!=NULL)
        doc["temperature"]=dht.getTemperature();
     if(dht.getHumidity()!=INT_MAX&&dht.getHumidity()!=NULL)
        doc["humidity"]=dht.getHumidity();
     int gas_level=analogRead(A0);
     if(gas_level!=0&&gas_level!=INT_MAX)
       doc["gas_level"]=gas_level;
      if(gas_level>gasThres)
         digitalWrite(D0,HIGH);
      else
         digitalWrite(D0,LOW);   
     http.addHeader("Content-Type", "application/json"); 
     String json;
     serializeJson(doc,json);
     int httpcode = http.POST(json);
     if(httpcode>0)
     {
         DynamicJsonDocument doc1(2048);                 //get request
         deserializeJson(doc1, http.getStream()); 
         bool light1=doc1["light1"].as<bool>();
         bool light2=doc1["light2"].as<bool>();
         bool light3=doc1["light3"].as<bool>();
         bool fan=doc1["fan"].as<bool>();
         bool cooler=doc1["cooler"].as<bool>();
         Serial.println(light1);
         Serial.println(light2);
         Serial.println(fan);
         
     }
    http.end();
   }
   else
   {
    WiFi.begin(ssid,password);
    while(WiFi.status()!=WL_CONNECTED)
    {
      delay(500);
      Serial.println("connecting...");
      digitalWrite(D5,HIGH);
      delay(500);
      digitalWrite(D5,LOW);
    }
   }
  
   
   delay(1000);
 
}
