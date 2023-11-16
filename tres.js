/*
3-Escribe una clase que permita crear distintos objetos 
“rectángulos”, con las propiedades de alto y 
ancho,
 mas los métodos necesarios para modificar 
 y mostrar sus propiedades, calcular el perímetro y el área


*/

class Rectangulo{
    constructor(base,ancho){
        this.base = base;
        this.ancho = ancho;
    }

    perimetro(base,ancho){
        return console.log(`El perimetro de un rectangulo de 2 lado es: ${(base * 2) + (ancho * 2)}`)
    }

    area(base,ancho){
        return console.log(`El area de un rectangulo de 2 lados es: ${base * ancho}`)
    }

    mostrarPropiedad(){
        return console.log(`La base del triangulo es ${this.base} y su anchura es ${this.ancho}`)
    }
}