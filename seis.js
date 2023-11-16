/*
6- Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”
Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.

*/

class Libro{
    #isbn;
    #titulo;
    #autor;
    #numPaginas
    constructor(isbn,titulo,autor,numPaginas){
        this.#isbn = isbn;
        this.#titulo = titulo;
        this.#autor = autor;
        this.#numPaginas = numPaginas;
    }

    get isbn(){
        return this.#isbn
    }

    get titulo(){
        return this.#titulo
    }

    get autor(){
        return this.#autor
    }

    get numPaginas(){
        return this.#numPaginas
    }

    set isbn(isbn){
        this.#isbn = isbn
    }

    set titulo(titulo){
        this.#titulo = titulo
    }

    set autor(autor){
         this.#autor = autor
    }

    set numPaginas(numPaginas){
         this.#numPaginas = numPaginas
    }

    mostrarDatos(){
        return `“El libro ${this.#titulo} con ISBN ${this.#isbn} creado por el autor ${this.#autor} tiene páginas ${this.#numPaginas}”`
    }
}

let libro1 = new Libro(211515,'El Principito','Antoine de Saint-Exupéry',61)
let libro2 = new Libro(56115156,'1984','George Orwell',326)

function mayorLibro(libro1,libro2){
    return `${libro1.numPaginas > libro2.numPaginas ? `El libro ${libro1.titulo} tiene mas paginas que ${libro2.titulo}`:`El libro ${libro2.titulo} tiene mas paginas que ${libro1.titulo}`}`
}

console.log(mayorLibro(libro1,libro2))