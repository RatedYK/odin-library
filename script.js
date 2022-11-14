//Data structures
let myLibrary = [];

function Book(title, author, pages, read) { //constructor for new Books
   
    this.title=title,
    this.author=author,
    this.pages=pages,
    this.read=read;

}

Book.prototype.changeStatus = function() {
    this.read === 'Read' ? this.read = 'Not Read' : this.read = 'Read'; 
}


//DOM 

const booksContainer = document.querySelector('.booksContainer')
const submit = document.querySelector('#submit');
const formOptions = {
    openForm: () => document.querySelector('.formPop').style.display = "block",
    closeForm: () => document.querySelector('.formPop').style.display = "none",
    clearForm: () => {
                    document.querySelector('#bookTitle').textContent = "";
                    document.querySelector('#bookAuthor').textContent = "";
                    document.querySelector('#bookPages').textContent = "";
                    document.querySelector('#ReadYes').checked = true;
    }
}

const form = document.querySelector(".formContainer").addEventListener("submit", (e) => {
    e.preventDefault();
    addBookToLibrary();
    displayBookOnCard();
    formOptions.clearForm();
  });


function addBookToLibrary() {
    const title = document.querySelector('#bookTitle').value;
    const author = document.querySelector('#bookAuthor').value;
    const pages = document.querySelector('#bookPages').value;
    const read = document.querySelector("input[name='read']:checked").value;
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

function displayBookOnCard() {
    booksContainer.textContent = ''; //clears the container of cards so that it won't double up
    myLibrary.forEach((book, index, myLibrary) => { //pass in each book, the index in the myLibrary array plus myLibrary
        const bookCard = document.createElement('div');

        const bookTitle = document.createElement('p');
        const bookAuthor = document.createElement('p');
        const bookPages = document.createElement('p');
        const bookRead = document.createElement('button')
        const bookDelete = document.createElement('button');
        bookCard.append(bookTitle, bookAuthor, bookPages, bookRead, bookDelete);

        bookRead.addEventListener('click', ()=> { //add a toggleable function for read and not read
            book.changeStatus();
            bookRead.textContent = `${book.read}`;
        })

        bookDelete.addEventListener('click', ()=> { //take out the book and redisplay all books
            myLibrary.splice(index, 1);
            displayBookOnCard();
        })

        bookTitle.textContent = `\"${book.title}\"`;
        bookAuthor.textContent = `by ${book.author}`;
        bookPages.textContent = `${book.pages} pages`;
        bookRead.textContent = `${book.read}`;
        bookDelete.textContent = 'Delete';


        booksContainer.appendChild(bookCard).className = 'test';
    })
}

