/*
5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. 
Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:
esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.

*/

class Persona{
    #generacion;
    #rasgoCaracteristico;
    constructor(nombre,edad,dni = 0,sexo,peso,altura,añoNacimiento){
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo === 'H' ? 'Hombre' : 'Mujer';
        this.peso = peso;
        this.altura = altura;
        this.añoNacimiento = añoNacimiento;


        switch (true) {
            case  (this.añoNacimiento>= 1944 ) && (this.añoNacimiento <= 2010):
                this.#generacion = 'Generacion Z'
                this.#rasgoCaracteristico = 'Irreverencia'
                break;
            case  (this.añoNacimiento >= 1981 ) && (this.añoNacimiento <= 1993):
                this.#generacion = 'Generacion Y "Milennials"'
                this.#rasgoCaracteristico = 'Frustracion'
                break;
            case  (this.añoNacimiento >= 1969 ) && (this.añoNacimiento <= 1980):
                this.#generacion = 'Generacion X'
                this.#rasgoCaracteristico = 'Obsesion por el exito'
                break;
            case  (this.añoNacimiento >= 1949 ) && (this.añoNacimiento <= 1968):
                this.#generacion = 'Baby Boom'
                this.#rasgoCaracteristico = 'Ambicion'
                break;
            case  (this.añoNacimiento >= 1930 ) && (this.añoNacimiento <= 1948):
                this.#generacion = 'Silent Generation "Niños posguerra" '
                this.#rasgoCaracteristico = 'Austeridad'
                break;
            default:
                break;
        }
    }

    mostrarGeneracion(){
        return console.log(`El rasgo caracteristico es: ${this.#generacion} y su rasgo caracteristico es: ${this.#rasgoCaracteristico}`)
    }

    esMayorDeEdad(){
        return console.log(`la persona ${this.edad >= 18 ? 'Es mayor de edad' : 'Es menor'}`)
    }

    mostrarDatos(){
        return this
    }

    generaDNI(){
        if(this.dni >= 0){
            let nuevoDni = ''

            let i = 1
            while(i <= 8){
                nuevoDni += Math.floor(Math.random() * 10)
                i++
            }
            
            this.dni = nuevoDni
            return nuevoDni
        }

        return 
    }
}

let juan = new Persona('Juan',22,0,'H',73,1.70,2000)

juan.mostrarGeneracion()
juan.esMayorDeEdad()
console.log(juan.mostrarDatos())
console.log(juan.generaDNI())