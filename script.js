let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.cover = 'images/green-book-hi.png'
}

function addToLibrary(book) {
    myLibrary.push(book);
}

let coding = new Book('Think Like a Programmer', 'V. Anton Spraul', 233, false);

addToLibrary(coding);


function displayLibrary() {
    for(let index in myLibrary) {
        let currentBook = myLibrary[index];
        let card = document.createElement('div');
        card.classList.add('card');

        let cover = document.createElement('img');
        cover.classList.add('bookCover');
        cover.src = currentBook.cover;

        let title = document.createElement('div');
        title.classList.add('title');
        title.innerText = currentBook.title;

        let author = document.createElement('div');
        author.classList.add('author');
        author.innerText = currentBook.author;

        let pages = document.createElement('div');
        pages.classList.add('pages');
        pages.innerText = `${currentBook.pages} pages`;

        
        card.appendChild(cover);
        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        list.appendChild(card);
    }
}

const list = document.querySelector('.list');
displayLibrary();