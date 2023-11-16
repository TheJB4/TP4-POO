/*
2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta


*/

class Cuenta{
    constructor(){
        this.titular = 'Alex'
        this.saldo = 0
    }

    ingresar(cantidad){
        this.saldo += cantidad;
    }

    extraer(cantidad){
        this.saldo -= cantidad;
    }

    informar(){
        return console.log(this.saldo,this.titular)
    }
}

let cuenta = new Cuenta()

cuenta.informar()
cuenta.ingresar(50)
cuenta.extraer(25)
cuenta.informar()