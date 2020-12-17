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

let cooking = new Book('Cooking with Tomatoes', 'C. Boyardee', 12, true);

let book3 = new Book();

addToLibrary(coding);
addToLibrary(cooking);

function displayLibrary() {
    list.innerHTML = '';
    for (let index in myLibrary) {
        let currentBook = myLibrary[index];
        let card = document.createElement('div');
        card.classList.add('card');
        card.id = index;

        let cover = document.createElement('img');
        cover.classList.add('bookCover');
        cover.src = currentBook.cover;

        let info = document.createElement('div');
        info.classList.add('info');

        let title = document.createElement('div');
        title.classList.add('title');
        title.innerText = currentBook.title;

        let author = document.createElement('div');
        author.classList.add('author');
        author.innerText = currentBook.author;

        let pages = document.createElement('div');
        pages.classList.add('pages');
        pages.innerText = `${currentBook.pages} pages`;

        let deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete');
        deleteBtn.innerText = '-'

        let readCheck = document.createElement('button');
        readCheck.classList.add('read-button');
        readCheck.innerText='✔';

        card.appendChild(readCheck);
        card.appendChild(deleteBtn);
        info.appendChild(title);
        info.appendChild(author);
        info.appendChild(pages);
        card.appendChild(cover);
        card.appendChild(info);
        list.appendChild(card);
    }
}
function createBook(e) {
    e.preventDefault();
    let entry = new Book()
    entry.title = document.querySelector('#title').value;
    entry.author = document.querySelector('#author').value;
    entry.pages = document.querySelector('#pages').value;
    entry.read = document.querySelector('#read').value;
    if (document.querySelector('#cover-page').value != undefined) {
        entry.cover = document.querySelector('#cover-page').value;
    }
    addToLibrary(entry);
    formBox.classList.add('invisible');
    document.querySelector('form').reset();
    displayLibrary();
}
const list = document.querySelector('.list');
displayLibrary();

let submit = document.querySelector('#add');
submit.addEventListener('click', createBook);

let killBox = document.querySelector('#kill-box');
let formBox = document.querySelector('#form-box');
let addBtn = document.querySelector('#new-book');

killBox.addEventListener('click', function () { formBox.classList.add('invisible') });
addBtn.addEventListener('click', function () { formBox.classList.remove('invisible') });