function Library(name, books, address) {
    this.name = name;
    this.books = books === undefined ? [] : books;
    this.address = address === undefined ? "Skopje" : address;
    this.numberOfBooks = this.books.length * 15;
    this.printBooks = function () {
        if (this.books.length > 0) {
            this.books.forEach(book => console.log(book))
        }
        else {
            console.log("There are no books in this particular library!")
        }
    }
    this.addBook = function (book) {
        if (!!book && book instanceof Book) {
            let newBook = Object.create(book);
            this.books.push(newBook);
        }
        else{
            throw new Error("Invalid input of book");
    }
}

function Book(title, genre, libraries, authors) {
    this.title = title;
    this.genre = genre;
    this.libraries = libraries === undefined ? [] : libraries;
    this.authors = authors === undefined ? [] : authors;
    this.addLibrary = function (library) {
        if (!!library) {
            this.libraries.push(library);
            library.books.push(this);
        }
        else {
            throw new Error("Invalid library object!")
        }
    }
    this.removeLibrary = function (library) {
        for(let lib of this.libraries){
            if(lib.name.toLowerCase()===library.name.toLowerCase()){
                this.libraries.splice(this.libraries.indexOf(lib), 1);
            }
        }
        for(let b of library.books){
            if(b.title.toLowerCase()===this.title.toLowerCase()){
                library.books.splice(library.books.indexOf(b), 1);
            }
        }}
    
}

function Author(firstName, lastName, yearOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.books = [];
    this.currentBook = null;
    this.startBook = function (bookObject) {
        if (!!bookObject) {
            if (this.currentBook !== null) {
                this.books.push(this.currentBook);
            }
            this.currentBook = bookObject;
            this.books.push(bookObject);
        }
        else {
            throw new Error("Invalid book object!");
        }
    }
}


let author1 = new Author("Dan", "Brown", 1964);
let author2 = new Author("Harlan", "Coben", 1962);
let author3 = new Author("Khaled", "Hosseini", 1965);

let book1 = new Book("Inferno", "Mystery", [], [author1]);
let book2 = new Book("The Woods", "Thriller", []);
let book3 = new Book("The Kite Runner", "Drama", [], author3);

let library1 = new Library("Library 1", [book1, book2], "Skopje");
let library2 = new Library("Library 2", [book2, book3], "Manchester");


//TESTING THE METHODS

 book3.addLibrary(library1);
 library1.printBooks();

book2.removeLibrary(library1);
library1.printBooks();

author2.startBook(book2);
console.log(author2.currentBook)

 library2.addBook(book1);
 library2.printBooks();









