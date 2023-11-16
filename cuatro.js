/*

4- Escribe una clase Producto para crear objetos. 
Estos objetos, deben presentar las propiedades código, 
nombre y precio, además del método imprime datos, 
el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y
 guárdalas en un array.
Por último, utilice el método imprime datos
 para mostrar por pantalla los valores de los 
 tres objetos instanciados.

*/

class Producto{
    constructor(codigo,nombre,precio){
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }

    imprimeDatos(){
        console.log(`el codigo es: ${this.codigo} ${this.nombre} ${this.precio}`)
    }
}

let vaso = new Producto(6454564541,'vaso vidrio',45.65)
let pantalla = new Producto(5626526561,'Monitor 24 pulgadas',147.000)
let mouse = new Producto(56445564465,'Steel Series Mouse Rival 300',12.000)

let productos = [vaso,pantalla,mouse]

productos.forEach(e => e.imprimeDatos())