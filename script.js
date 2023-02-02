let myLibrary = [];

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
    titleField.value = '';
    authorField.value = '';
    pagesField.value = '';
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
  removeButton.textContent = "Remove";
  haveReadButton.classList.add("btn", "have-read");
  removeButton.classList.add("btn", "remove");
  bookDiv.append(titleDiv, authorDiv, pagesDiv, haveReadButton, removeButton);
  library.appendChild(bookDiv);
}


/* 
function displayLibrary() {
  library.textContent = '';
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
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
    removeButton.textContent = "Remove";
    haveReadButton.classList.add("btn", "have-read");
    if (book['have_read'] === false) {
      haveReadButton.classList.add('false');
      haveReadButton.textContent = 'Not Read';
    }
    removeButton.classList.add("btn", "remove");
    bookDiv.append(titleDiv, authorDiv, pagesDiv, haveReadButton, removeButton);
    library.appendChild(bookDiv);
  }
  prepareButtons();
}
*/

prepareButtons();

function prepareButtons() {
  let haveReadButtons = document.querySelectorAll(".have-read");
  let removeButtons = document.querySelectorAll(".remove");
  haveReadButtons.forEach((button) => {
    button.addEventListener("click", () => {
      changeReadStatus(button);
    }); 
  });
  removeButtons.forEach((button) => {
    button.addEventListener("click", deleteBook);
  });
  console.log(haveReadButtons);
}

function changeReadStatus(button) {
  button.classList.toggle("false");
  if (button.textContent === "Read") {
    button.textContent = "Not Read"

  } else {
    button.textContent = "Read"
  }
}

function deleteBook() {
  console.log("hello");
}

function openForm() {
  form.style.display = "flex";
}

function closeForm() {
  form.style.display = "none";
}

// need a way for the read status to NOT be changed when a new book is added. 

// form - to submit the data. Need a popup form that appears with JavaScript
// data is submitted somehow to this script.
// script takes the data and puts it into a NEW object called Book
// That Book is appended to myLibrary array

// a SEPARATE function takes the Books in the array and displays them on the page
// This function needs to take the data and DISPLAY it.
