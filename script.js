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

        let readBadge = document.createElement('div');
        readBadge.classList.add('read-badge');
        // if(currentBook.read = false) {
        //     readBadge.classList.add('invisible');
        // }
        readBadge.innerText = 'UNREAD';

        card.appendChild(deleteBtn);
        card.appendChild(readCheck);
        card.appendChild(readBadge);
        info.appendChild(title);
        info.appendChild(author);
        info.appendChild(pages);
        card.appendChild(cover);
        card.appendChild(info);
        list.appendChild(card);
        updateCards();
    }
}

function createBook(e) {
    e.preventDefault();
    let entry = new Book()
    entry.title = document.querySelector('#title').value;
    entry.author = document.querySelector('#author').value;
    entry.pages = document.querySelector('#pages').value;
    entry.read = document.querySelector('#read').value;
    //If the cover-page url input is not empty, set the cover to the url value in the input
    if (document.querySelector('#cover-page').value != '') {
        entry.cover = document.querySelector('#cover-page').value;
    } 
    addToLibrary(entry);
    //hide and clear the form, update the library
    formBox.classList.add('invisible');
    document.querySelector('form').reset();
    displayLibrary();
}

function updateCards() {
    let cards = document.querySelectorAll('.card');
    
    for (let el of cards) {
    let delBtn = el.querySelector('.delete');
    delBtn.addEventListener('click', function(){
        let cardIndex = el.id;
        delete myLibrary[cardIndex];
        displayLibrary();
        });
    
    let readBtn = el.querySelector('.read-button');
    let badge = el.querySelector('.read-badge');

    readBtn.addEventListener('click', function() {
        let read = myLibrary[el.id].read;
        if (read) {
            badge.classList.add('invisible');
        }
    });
    }   
}

const list = document.querySelector('.list');
let submit = document.querySelector('#add');
let killBox = document.querySelector('#kill-box');
let formBox = document.querySelector('#form-box');
let addBtn = document.querySelector('#new-book');

killBox.addEventListener('click', function () { formBox.classList.add('invisible') });
addBtn.addEventListener('click', function () { formBox.classList.remove('invisible') });
submit.addEventListener('click', createBook);

let myLibrary = [];

let coding = new Book('Think Like a Programmer', 'V. Anton Spraul', 233, true);

let cooking = new Book('Cooking with Tomatoes', 'C. Boyardee', 12, false);

let book3 = new Book();

addToLibrary(coding);
addToLibrary(cooking);

displayLibrary();






