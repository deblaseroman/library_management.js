class Book {
    constructor(title, author, ISBN){
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this._isAvailable = true;
    }
    getDetails() {
        return `${this.title}, by ${this.author}, ISBN: ${this.ISBN}`;
    }
    get isAvailable() {
        return this._isAvailable;
    }
    set isAvailable(status) {
        this._isAvailable = status;
    }
}                   // Create Book class with properties and methods

 
class section {
    constructor(name) {
        this.name = name;
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    getAvailableBooks() {
        return this.books.filter(book => book.isAvailable).length;
    
    }
    listBooks() {
        return this.books.map(book => `${book.getDetails()} - ${book.isAvailable ? 'Available' : 'Borrowed'}`);
    }
}
const fictionSection = new Section("Fiction");
const scienceSection = new Section("Science");


const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "974");
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", "973");
const book3 = new Book("A Brief History of Time", "Stephen Hawking", "972");
const book4 = new Book("Your Brain is a Time Machine", "Dean Buonomano", "971");

fictionSection.addBook(book1);
fictionSection.addBook(book2);
scienceSection.addBook(book3);
scienceSection.addBook(book4);
 // Create Section class to manage books and availability

 class Patron {
    constructor(name) {
        this.name = name;
        this.borrowedBooks = [];
    }
    borrowBook(book) {
        if (book.isAvailable) {
            book.isAvailable = false;
            this.borrowedBooks.push(book);
            return true;
        }
        return false;
    }
 }
 // “Create Patron class to borrow and return books”

 class VIPPatron extends Patron {
    constructor(name) {
        super(name);
        this.priority = true;
    }
         borrowBook(book) {
            if (book.isAvailable) {
        return super.borrowBook(book);
    }
    else {
        console.log(`${this.name} wanted '${book}', but it is borrowed`);
        return false;
      }
    }
 }
 //Calculate total available books in the section
 calculateTotalBooksAvailable() {
    return this.getAvailableBooks();
}
