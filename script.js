let myLibrary = [];

function Book(title, author, pages, have_read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.have_read = Boolean(have_read);
}

let library = document.querySelector(".main-content");
let form = document.querySelector(".form");
let submit_form_button = document.querySelector(".form-btn");

submit_form_button.addEventListener("click", closeForm());

/* function addBookToLibrary() {
  let book = new Book(title, author, pages, have_read);
} */

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
