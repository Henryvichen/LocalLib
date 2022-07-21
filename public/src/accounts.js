function findAccountById(accounts, id) {
  let find = accounts.find((account) => account.id === id)
return find
}

function sortAccountsByLastName(accounts) {
return accounts.sort((accountA, accountB) => {
    return accountA.name.last.toLowerCase() < accountB.name.last.toLowerCase() ? -1 : 1;
  });
}

function getTotalNumberOfBorrows(account, books) {
  // helper function to filter array
  function borrowsById(book, {id}) {
  return book.borrows.filter(borrow => borrow.id === id);
}
  // 
let counter = 0
// for each book, filter to only getting id we want

books.forEach(book => {
    const borrowedById = borrowsById(book, account);
    counter += borrowedById.length;
  });
  return counter;
}


function getBooksPossessedByAccount(account, books, authors) {
 let bookContainer = []
	for (let i = 0; i < books.length; i++) {
		const borrowed = books[i].borrows.find((book) => 
	
			book.id === account.id && book.returned === false
        )
        console.log(borrowed)
        const authorInfo = authors.find(bookz => bookz.id === books[i].authorId)
        if (borrowed) {
            books[i].author = authorInfo
            bookContainer.push(books[i])
        }
	}
  console.log (bookContainer)
	return bookContainer


  }



module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
