let myLibrary = [];
const booksContainer = document.querySelector('.booksContainer')
const submit = document.querySelector('#submit');

function Book(title, author, pages, read) {
   
    this.title=title,
    this.author=author,
    this.pages=pages,
    this.read=read;

}


function addBookToLibrary() {
    const title = document.querySelector('#bookTitle').value;
    const author = document.querySelector('#bookAuthor').value;
    const pages = document.querySelector('#bookPages').value;
    const book = new Book(title, author, pages);
    myLibrary.push(book);
}

function displayBookOnCard() {
    booksContainer.textContent = ''; //clears the container of cards so that it won't double up
    myLibrary.forEach((book) => {
        const bookCard = document.createElement('div');

        const bookTitle = document.createElement('p');
        const bookAuthor = document.createElement('p');
        const bookPages = document.createElement('p');
        bookCard.append(bookTitle, bookAuthor, bookPages);

        bookTitle.textContent = `\"${book.title}\"`;
        bookAuthor.textContent = `by ${book.author}`;
        bookPages.textContent = `${book.pages} pages`;

        booksContainer.appendChild(bookCard).className = 'test';
    })  
};

submit.addEventListener('click', addBookToLibrary);
submit.addEventListener('click', displayBookOnCard);
