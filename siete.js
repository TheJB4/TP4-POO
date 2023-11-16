/*
7- Nos piden realizar una agenda telefónica de contactos
Un contacto está definido por un nombre y un teléfono. 
Se considera que un contacto es igual a otro cuando sus nombres son iguales.
Una agenda de contactos está formada por un conjunto de contactos. 
Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).
Los métodos de la agenda serán los siguientes:
aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
existeContacto(Contacto): indica si el contacto pasado existe o no.
listarContactos(): Lista toda la agenda
buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
agendaLlena(): indica si la agenda está llena.
huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y  por consola.
*/


class Agenda{
    constructor(tamaño = 10){
        this.contactos = new Array(tamaño)
    }

    aniadirContacto(contacto){
        for (let index = 0; index < this.contactos.length; index++) {
            if(this.contactos[index] === undefined){
                this.contactos[index] = contacto
                break
            }
            
        }
    }

    existeContacto(contacto){
        for (let index = 0; index < this.contactos.length; index++) {
            if(this.contactos[index].nombre === contacto.nombre){
                console.log('El contacto existe')
                break
            }else{
                this.aniadirContacto(contacto)
            }
        }
    }

    listarContactos(){
        for (let index = 0; index < this.contactos.length; index++) {
            if(this.contactos[index] !== undefined){
                console.log(this.contactos[index])
            }
        }
    }

    buscarContacto(nombre){
        for (let index = 0; index < this.contactos.length; index++) {
            if (nombre === this.contactos[index].nombre) {
                console.log(this.contactos[index]);
                return; // Termina la función si encuentra el contacto
            }
        }
        console.log(`El contacto no existe`);
    }

    eliminarContacto(nombre){
        for (let index = 0; index < this.contactos.length; index++) {
            if (nombre === this.contactos[index].nombre) {
                this.contactos[index] = undefined
                console.log(`El contacto ${nombre} se ha eliminado correctamente`)
                return; // Termina la función si encuentra el contacto
            }
        }
    }

    agendaLlena(){
        let contador = 0;
        for (let index = 0; index < this.contactos.length; index++) {
            if (this.contactos[index] !== undefined) {
                contador += 1
            }
        }

        if(contador >= this.contactos.length){
            console.log('Agenda llena')
        }else{
            console.log('Todavia te queda lugar amigoo')
        }
    }

    huecosLibres(){
        let contador = 0;
        for (let index = 0; index < this.contactos.length; index++) {
            if (this.contactos[index] === undefined) {
                contador += 1
            }
        }

        console.log(`Te quedan ${contador} espacios para agregar`)
    }

    
}

let agenda1 = new Agenda(10)


console.log('Añadiendo contacto')
agenda1.aniadirContacto({
    nombre:'Juan',
    numero:3816306433
})

// agenda1.existeContacto({
//     nombre:'Juan',
//     numero:3816306433
// })

console.log('Existe el contacto?')
agenda1.existeContacto({
    nombre:'Flor',
    numero:3816306433
})


console.log('Buscando contacto')
agenda1.buscarContacto('Flor')

console.log('Eliminando contacto')
agenda1.eliminarContacto('Flor')

agenda1.listarContactos()


console.log('Mostrando agenda llena')
agenda1.aniadirContacto({
    nombre:'Juan2',
    numero:3816306433
})
agenda1.aniadirContacto({
    nombre:'Florencia',
    numero:3816306433
})
agenda1.aniadirContacto({
    nombre:'Luciano',
    numero:3816306433
})
agenda1.aniadirContacto({
    nombre:'Martin',
    numero:3816306433
})
agenda1.aniadirContacto({
    nombre:'roberto',
    numero:3816306433
})

agenda1.aniadirContacto({
    nombre:'maria',
    numero:3816306433
})

agenda1.aniadirContacto({
    nombre:'braian',
    numero:3816306433
})

agenda1.aniadirContacto({
    nombre:'dina',
    numero:3816306433
})


// agenda1.aniadirContacto({
//     nombre:'dina2',
//     numero:3816306433
// })
agenda1.agendaLlena()

console.log('Mostrando espacios')
agenda1.huecosLibres()
