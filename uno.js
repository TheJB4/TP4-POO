/*
1- Crea un objeto llamado auto que tenga algunas características 
como el color, marca, 
modelo y si está encendido o apagado. 
Crea los métodos necesarios para permitir encender 
y apagar el auto.

*/

class Auto{
    constructor(color,marca,modelo){
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
        this.encendido = false;
    }

    encender(){
        this.encendido = true;
        console.log('Auto encendido')
    }

    apagar(){
        this.encendido = false;
        console.log('Auto apagado')
    }
}