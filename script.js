/* Variable Declarations */
const userTitleInput = document.querySelector(".user-title-input");
const userAuthorInput = document.querySelector(".user-author-input");
const userPagesInput = document.querySelector(".user-pages-input");
const userBookStatusInput = document.querySelector(".user-book-status-input");
const addNewBookBtn = document.querySelector(".add-new-book-button");
const bookGridContainer = document.querySelector(".book-grid-container");
const bookCount = document.querySelector(".book-count");
const bookReadCounter = document.querySelector(".books-read-counter");
const bookUnreadCounter = document.querySelector(".books-unread-counter");
const bookTotalCounter = document.querySelector(".book-total-counter");
const bookReadCount = document.querySelector(".book-read-count");
const bookUnreadCount = document.querySelector(".book-unread-count");
const bookTotalCount = document.querySelector(".book-total-count");
const bookItem = document.querySelector(".book");
const deleteAllBtn = document.querySelector(".delete-all");
const deleteBtn = document.querySelector(".delete-book");
let titleInput;
let authorInput;
let pagesInput;
let bookStatusInput;

/* List of  books */
let bookShelf = [];
let booksReadShelf = [];
let booksUnreadShelf = [];

////////////////////////////////////////////////////////////////////////
const gettingUserInput = addNewBookBtn.addEventListener("click", function () {
  /* User Input Values */
  titleInput = userTitleInput.value;
  authorInput = userAuthorInput.value;
  pagesInput = userPagesInput.value;
  bookStatusInput = userBookStatusInput.checked;

  /* Creating new Books */
  const newBookItem = document.createElement("div");
  newBookItem.classList.add("book");
  bookGridContainer.appendChild(newBookItem);

  const newTitle = document.createElement("h2");
  newTitle.textContent = ` Title: ${titleInput}`;
  newBookItem.appendChild(newTitle);

  const newAuthor = document.createElement("h2");
  newAuthor.textContent = `Author: ${authorInput}`;
  newBookItem.appendChild(newAuthor);

  const newPages = document.createElement("h2");
  newPages.textContent = `Pages: ${pagesInput}`;
  newBookItem.appendChild(newPages);

  const newBookStatus = document.createElement("h2");
  newBookStatus.textContent = `Did I read this book: ${bookStatusInput}`;
  newBookItem.appendChild(newBookStatus);

  const newDeleteBtn = document.createElement("button");
  newDeleteBtn.classList.add("delete-book");
  newDeleteBtn.textContent = "Delete";
  newBookItem.appendChild(newDeleteBtn);

  // Read Book Shelf
  bookShelf.push(titleInput);
  if (bookStatusInput == true) {
    booksReadShelf.push(titleInput);
  }

  // Unread Book Shelf
  if (bookStatusInput == false) {
    booksUnreadShelf.push(titleInput);
  }

  // Total
  let totalNumBooks = 0;

  for (let i = 0; i <= bookShelf.length; i++) {
    totalNumBooks = i;
  }
  // console.log(totalNumBooks);

  bookTotalCount.textContent = `${totalNumBooks}`;

  //Books Read

  let numBooksRead = 0;
  let numBooksUnread = 0;

  for (let i = 0; i <= booksReadShelf.length; i++) {
    numBooksRead += 1;
    bookReadCount.textContent = `${numBooksRead}`;
  }

  for (let i = 0; i <= booksUnreadShelf.length; i++) {
    numBooksUnread += 1;
    bookUnreadCount.textContent = `${numBooksUnread}`;
  }

  newDeleteBtn.addEventListener("click", function () {
    newBookItem.remove();
  });

  deleteAllBtn.addEventListener("click", function () {
    for (let i = 0; i <= bookShelf.length; i++) {
      bookItem.remove();
      newBookItem.remove();

      // bookTotalCount.textContent = `${totalNumBooks}`
      // bookTotalCount.textContent = `${totalNumBooks}`
    }

    bookShelf = [];
    booksReadShelf = [];
    booksUnreadShelf = [];

    numBooksRead = 0;
    numBooksUnread = 0;
    totalNumBooks = 0;
    bookTotalCount.textContent = `${totalNumBooks}`;
    bookReadCount.textContent = `${numBooksRead}`;
    bookUnreadCount.textContent = `${numBooksUnread}`;
    // booksUnreadShelf = [];
  });
});
