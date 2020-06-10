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

}

void loop() {

    digitalWrite(D6,HIGH);
    delay(1000);
    digitalWrite(D6,LOW);
    delay(1000);
 
}
