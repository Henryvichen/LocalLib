function findAuthorById(authors, id) {
  /*  for (i = 0, i < authors.length, i++) {
      if (authors[i].id === id)
        return authors
    }
    */
    let find = authors.find((author) => author.id === id);
    return find
  }
  
  function findBookById(books, id) {
    let find = books.find((book) => book.id === id);
    return find
  }
  
  function partitionBooksByBorrowedStatus(books) {
    // set up containers for data
    let allCheckedOut = []
    let returnedBooks = []
    // loop through books
    for (i = 0; i < books.length; i++) {
      // is the book checked out?
      let checkedOut = books[i].borrows.find(
        (borrow) => borrow.returned === false
      )
      // if the book is checked out, add it to the allCheckedOut array
      if (checkedOut) {
        allCheckedOut.push(books[i])
      }
      // else add it to the returnedBooks array
      else {
        returnedBooks.push(books[i])
      }
      }
      
      return [allCheckedOut, returnedBooks] 
  }
  
  
  function getBorrowersForBook(book, accounts) {
    // make array of book borrows
    const borrowers = book.borrows
    // helper? function that finds ID
    function findByID(accounts, id) {
      return accounts.find((account) => account.id === id)
    }
    
    // use map to add id's account info
    let result = borrowers.map((borrower) => {
      let info = findByID(accounts, borrower.id);
      const result = {
        ...borrower,
        ...info,
      }
      return result
    })
  // only 10 accounts
  return result.slice(0,10)

    
  }
module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
