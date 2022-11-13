let myLibrary = [];
let books = 0;
const booksContainer = document.querySelector('.booksContainer')

const bookFactory = (title, author, pages, read) => {
   
    const getTitle = () => title;
    const getAuthor = () => author;
    const getPages = () => pages;
    const haveRead = () => read;

    return {getTitle, getAuthor, getPages, haveRead}

}

function addBookToLibrary(book) {
    myLibrary[books] = book;
    books++;
}

function displayBookOnCard() {
    myLibrary.forEach((book) => {
        const bookCard = document.createElement('div');
        booksContainer.appendChild(newBook).className = 'test';
        const bookTitle = document.createElement('span').textContent = book.getTitle();
        const bookAuthor = document.createElement('span').textContent = book.getAuthor();
        const bookPages = document.createElement('span').textContent = book.getPages();
        bookCard.append(bookTitle, bookAuthor, bookPages);
    }
}