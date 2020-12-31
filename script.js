function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

Book.prototype.cover = 'images/green-book-hi.png';
Book.prototype.read = true;

function addToLibrary(book) {
    myLibrary.push(book);
}

function displayLibrary() {
    list.innerHTML = '';
    for (const index in myLibrary) {
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

        let readBadge = document.createElement('div');
        readBadge.classList.add('read-badge');
        readBadge.innerText = 'UNREAD';
        if (currentBook.read) {
            readBadge.classList.add('invisible');
        }

        let deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete');
        deleteBtn.innerText = '-';

        let readCheck = document.createElement('button');
        readCheck.classList.add('read-button');
        readCheck.innerText = '✓';


        card.appendChild(readBadge);
        card.appendChild(deleteBtn);
        card.appendChild(readCheck);
        card.appendChild(cover);
        info.appendChild(title);
        info.appendChild(author);
        info.appendChild(pages);
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
    entry.read = document.querySelector('#read').checked;
    // entry.read = true;
    // } else {
    //     entry.read = false;
    // }
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
        if (!(myLibrary[el.id].read)){
            badge.classList.add('invisible');
            myLibrary[el.id].read = true;
        } else {
            badge.classList.remove('invisible');
            myLibrary[el.id].read = false;
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

let lordOfRing = new Book('The Fellowship of the Ring', 'J.R.R. Tolkein', 423, true);
lordOfRing.cover = 'https://images-na.ssl-images-amazon.com/images/I/91jBdaRVqML.jpg';
addToLibrary(lordOfRing);
let networkCert = new Book('CompTIA Network+ Exam Guide', 'Mike Meyers', 960, false);
networkCert.cover = 'https://www.mheducation.com/cover-images/Jpeg_400-high/1260458091.jpeg';
addToLibrary(networkCert);
let macro = new Book('Macroeconomics, 6th Edition', 'N. Gregory Mankiw', 608, false);
macro.cover = 'https://images-na.ssl-images-amazon.com/images/I/51bY5RHQLrL._SX391_BO1,204,203,200_.jpg';
addToLibrary(macro);
displayLibrary();





