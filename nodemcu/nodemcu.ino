#include <ArduinoJson.h>
#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <DHTesp.h>

#define INT_MAX 2147483647

String ssid="Honor7x";
String password="12345678";

DHTesp dht;
String url="https://home-automation-9875.herokuapp.com/status?type=humidity";

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

 
   int temperature;
   int humidity=dht.getHumidity();
   if(dht.getTemperature()!=INT_MAX)
     temperature=dht.getTemperature();
   if(dht.getHumidity()!=INT_MAX)
     humidity=dht.getHumidity();  
   if(WiFi.status()==WL_CONNECTED)
   {
     Serial.println("connected");
     digitalWrite(D5,HIGH);
     HTTPClient http;
     http.begin(url);
     int httpcode=http.GET();
     if(httpcode>0)
     {
           Serial.println("Ab");
           String h=http.getString();
           Serial.println(h);
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
  
   
   delay(5000);
 
}
