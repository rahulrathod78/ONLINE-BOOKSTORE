//create  the Author constructor
function Author(name,birthYear,nationality){
    this.name=name;
    this.birthYear=birthYear;
    this.nationality=nationality;
}
function Book(title,author,genre,price){
    this.title=title;
    this.author=author;
    this.genre=genre;
    this.price=price;
}
//Implement methods in the Book prototype
Book.prototype.getBookInfo=function(){
    console.log(`Title:${this.title}`);
    console.log(`Author:${this.author.name}`);
    console.log(`Price:${this.price}`);

}
//Create instances of Author and Book
let author1=new Author('J.K. Rowling',1965,'British');
let author2=new Author('George Orwell', 1903, 'British');

//creating book
let book1=new Book('harry pooter', author1,'Fantasy',20);
let book2=new Book('1984',author2,'Dystopian',15)

//Display book details for each book in the bookstore

book1.getBookInfo();
book2.getBookInfo()