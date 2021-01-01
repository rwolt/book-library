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
        cover.addEventListener('mouseOver', showInterface);
        cover.addEventListener('mouseOut', hideInterface);

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
        deleteBtn.addEventListener('click', deleteBook);
  
        let readCheck = document.createElement('button');
        readCheck.classList.add('read-button');
        readCheck.innerText = '✓';
        readCheck.addEventListener('click', readBook);

        let interface = document.createElement('div');
        interface.classList.add('interface');
        interface.addEventListener('mouseover', showInterface);
        interface.addEventListener('mouseout', hideInterface);
        
        card.appendChild(cover);
        card.appendChild(readBadge);
        card.appendChild(deleteBtn);
        card.appendChild(readCheck);
        info.appendChild(title);
        info.appendChild(author);
        info.appendChild(pages);
        card.appendChild(info);
        card.appendChild(interface);
        list.appendChild(card);
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

function deleteBook(e) {
    let parent = e.target.parentNode;
    delete myLibrary[parent.id];
    displayLibrary();
}

function readBook(e) {
    let parent = e.target.parentNode;
    let badge = parent.querySelector('.read-badge');
    if (!(myLibrary[parent.id].read)) {
        badge.classList.add('invisible');
        myLibrary[parent.id].read = true;
    } else {
        badge.classList.remove('invisible');
        myLibrary[parent.id].read = false;
    }
}

function showInterface(e) {
    let parent = e.target.parentNode;
    let cover = parent.querySelector('.bookCover');
    let badge = parent.querySelector('.read-badge');
    let readBtn = parent.querySelector('.read-button');
    let delBtn = parent.querySelector('.delete');
    readBtn.classList.remove('invisible');
    delBtn.classList.remove('invisible');
    badge.classList.add('low-brightness');

    cover.classList.add('low-brightness');

}

function hideInterface(e) {
    let parent = e.target.parentNode;
    let cover = parent.querySelector('.bookCover');
    let badge = parent.querySelector('.read-badge');
    let readBtn = parent.querySelector('.read-button');
    let delBtn = parent.querySelector('.delete');
    readBtn.classList.add('invisible');
    delBtn.classList.add('invisible');
    cover.classList.remove('low-brightness');
    badge.classList.remove('low-brightness');
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





