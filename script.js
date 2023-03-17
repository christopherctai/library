// CLASS REFACTOR 

let myLibrary = []; 

class displayController {
  openForm() {
    form.style.display = "flex";
  } 
  closeForm() {
    form.style.display = "none";
  }
  displayLibrary = () => {
    let library = document.querySelector(".main-content");
    library.textContent = '';
    for (let i = 0; i < myLibrary.length; i++) {
      let bookDiv = bookDisplayer.createBookDisplay(myLibrary[i]);
      library.appendChild(bookDiv);
    }
  }
  addBook = (e) => {
    e.preventDefault();
    let titleField = document.getElementById("title");
    let authorField = document.getElementById("author");
    let pagesField = document.getElementById("pages");
    let haveReadField = document.getElementById("have_read");
    if (checkValidInputs) {
      
    }
    if (titleField.value && authorField.value && pagesField.value) {
      let book = new Book(titleField.value, authorField.value, pagesField.value, haveReadField.checked);
      titleField.value = "";
      authorField.value = "";
      pagesField.value = "";
      haveReadField.checked = false;
      myLibrary.push(book);
      form.style.display = "none";
    }
    this.displayLibrary();
  }

  checkValidInputs(title, author, pages) {
  
  }

  deleteBook(book) {
    myLibrary.splice(myLibrary.indexOf(book), 1);
    this.displayLibrary();
  }

  changeReadStatus(book) {
    if (book.have_read) {
      book.have_read = false;
    } else {
      book.have_read = true; 
    }
    this.displayLibrary();
  }
}

class bookDisplay {
  createBookDisplay = (book) => {
    // Createa book div 
    let bookDiv = document.createElement("div");
    bookDiv.classList.add("book");
    // Create the book internals 
    let titleDiv = document.createElement("div");
    let authorDiv = document.createElement("div");
    let pagesDiv = document.createElement("div");
    let haveReadButton = document.createElement("button");
    let removeButton = document.createElement("button");
    titleDiv.textContent = `${book["title"]}`;
    authorDiv.textContent = `${book["author"]}`;
    pagesDiv.textContent = `${book["pages"]} Pages`;
    if (book.have_read) {
      haveReadButton.textContent = "Read";
      haveReadButton.classList.add("btn", "have-read");
    } else {
      haveReadButton.textContent = "Not Read"; 
      haveReadButton.classList.add('btn', 'have-read', 'false');
    }
    removeButton.textContent = "Remove";
    removeButton.classList.add("btn", "remove");
    // Put the book internals into the book 
    bookDiv.append(titleDiv, authorDiv, pagesDiv, haveReadButton, removeButton);
    // Prepare the buttons by adding event listeners 
    this.prepareButtons(haveReadButton, removeButton, book);
    return bookDiv;
  }
  prepareButtons(haveReadButton, removeButton, book) {
    haveReadButton.addEventListener("click", () => {
      libraryDisplay.changeReadStatus(book);
    });
    removeButton.addEventListener("click", () => {
      libraryDisplay.deleteBook(book);
    });
  }
}

class Book {
  constructor(title, author, pages, have_read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.have_read = have_read;
  }
}

const form = document.querySelector(".form");
const closeButton = document.querySelector(".close");
const addBookButton = document.querySelector(".add-book");
const submitButton = document.querySelector('.form-btn');
const libraryDisplay = new displayController();
const bookDisplayer = new bookDisplay();
console.log(libraryDisplay);

submitButton.addEventListener("click", libraryDisplay.addBook);
closeButton.addEventListener("click", () => {
  libraryDisplay.closeForm();
});
addBookButton.addEventListener("click", () => {
  libraryDisplay.openForm();
});



// OLD CONSTRUCTOR CODE

/* let myLibrary = [];

let library = document.querySelector(".main-content");
const form = document.querySelector(".form");
const close_button = document.querySelector(".close");
const add_book_button = document.querySelector(".add-book");
const submit_button = document.querySelector(".form-btn");
close_button.addEventListener("click", () => {
  closeForm();
});
add_book_button.addEventListener("click", () => {
  openForm();
});
submit_button.addEventListener("click", addBookToLibrary);

let title;
let author;
let pages;
let have_read;

function Book(title, author, pages, have_read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.have_read = Boolean(have_read);
}

function addBookToLibrary(e) {
  e.preventDefault();
  let titleField = document.getElementById("title");
  let authorField = document.getElementById("author");
  let pagesField = document.getElementById("pages");
  let haveReadField = document.getElementById("have_read");
  if (titleField.value && authorField.value && pagesField.value) {
    title = titleField.value;
    author = authorField.value;
    pages = pagesField.value;
    have_read = haveReadField.checked;
    let book = new Book(title, author, pages, have_read);
    titleField.value = "";
    authorField.value = "";
    pagesField.value = "";
    myLibrary.push(book);
    form.style.display = "none";
    let index = myLibrary.indexOf(book);
    displayBook(index);
  }
}

function displayBook(index) {
  let book = myLibrary[index];
  let bookDiv = document.createElement("div");
  bookDiv.classList.add("book");
  let titleDiv = document.createElement("div");
  let authorDiv = document.createElement("div");
  let pagesDiv = document.createElement("div");
  let haveReadButton = document.createElement("button");
  let removeButton = document.createElement("button");
  titleDiv.textContent = `${book["title"]}`;
  authorDiv.textContent = `${book["author"]}`;
  pagesDiv.textContent = `${book["pages"]} Pages`;
  haveReadButton.textContent = "Read";
  haveReadButton.classList.add("btn", "have-read");
  if (book["have_read"] === false) {
    haveReadButton.textContent = "Not Read";
    haveReadButton.classList.add("false");
  }
  removeButton.textContent = "Remove";
  removeButton.classList.add("btn", "remove");
  bookDiv.append(titleDiv, authorDiv, pagesDiv, haveReadButton, removeButton);
  library.appendChild(bookDiv);
  prepareButtons(haveReadButton, removeButton, bookDiv);
}

function prepareButtons(haveReadButton, removeButton, bookDiv) {
  haveReadButton.addEventListener("click", () => {
    changeReadStatus(haveReadButton);
  });
  removeButton.addEventListener("click", () => {
    deleteBook(bookDiv);
  });
}

function changeReadStatus(button) {
  button.classList.toggle("false");
  if (button.textContent === "Read") {
    button.textContent = "Not Read";
  } else {
    button.textContent = "Read";
  }
}

function deleteBook(bookDiv) {
  bookDiv.remove();
}

function openForm() {
  form.style.display = "flex";
}

function closeForm() {
  form.style.display = "none";
}

*/