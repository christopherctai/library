let myLibrary = [];

let library = document.querySelector(".main-content");
const form = document.querySelector(".form");
const close_button = document.querySelector(".close");
const add_book_button = document.querySelector(".add-book");
const submit_button = document.querySelector(".form-btn");
close_button.addEventListener("click", closeForm);
add_book_button.addEventListener("click", openForm);
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
    myLibrary.push(book);
    form.style.display = "none";
  }
  displayLibrary();
}

function displayLibrary() {
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookDiv = document.createElement("div");
    bookDiv.classList.add('book');
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
    haveReadButton.classList.add("btn");
    removeButton.classList.add("btn");
    bookDiv.append(titleDiv, authorDiv, pagesDiv, haveReadButton, removeButton);
    library.appendChild(bookDiv);
  }
}

function openForm() {
  form.style.display = "flex";
}

function closeForm() {
  form.style.display = "none";
}

// form - to submit the data. Need a popup form that appears with JavaScript
// data is submitted somehow to this script.
// script takes the data and puts it into a NEW object called Book
// That Book is appended to myLibrary array

// a SEPARATE function takes the Books in the array and displays them on the page
// This function needs to take the data and DISPLAY it.
