function getTotalBooksCount(books) {
  return books.length
 }
 
 function getTotalAccountsCount(accounts) {
   return accounts.length
 }
 
 function getBooksBorrowedCount(books) {
   let counter = 0
   for (i = 0; i < books.length; i++) {
     let checkedOut = books[i].borrows.find(
        (borrow) => borrow.returned === false
      )
if (checkedOut)
counter++
   }
   return counter
 }
 
 function getMostCommonGenres(books) {
  let genres = []
  // loop over books
  for (i = 0; i < books.length; i++) {
  // if book is in container, increment ++, if not you must add to container
    const found = genres.find((genre) => genre.name === books[i].genre)
    if (!found) {
      // name and count are keys
    genres.push({name:books[i].genre, count:1})
    }
 else { found.count++
      }
  }
    //sort
    genres.sort((genreA, genreB) => 
    (genreA.count < genreB.count ? 1 : -1));
  // no more than 5 objects
   return genres.slice(0,5)
  
}
 
 function getMostPopularBooks(books) {

  let result = [];
// loop thru books, create correct format and push into new array
  const borrows = books.reduce((acc, book) => {
    result.push({ name: book.title, count: book.borrows.length });
  })
  
//sort popular by greatest to leastPic
result.sort((titleA, titleB) => titleB.count - titleA.count)

// limit to 5 
return result.slice(0,5)

 }
 
 function getMostPopularAuthors(books, authors) {
   let popularAuthors = [];
   let counter = 0
  // loop through authors and make author format
    for (let author of authors) {
    const names = `${author.name.first} ${author.name.last}`
    
    // loop through books to get book count
    for (let book of books) {
      if (author.id === book.authorId) {
        counter = book.borrows.length
    }
 }
  
// make new container for correct format
const container = {
  name: names, 
  count: counter 
}
  popularAuthors.push(container)
 }
   
   //sort
    popularAuthors.sort((authorA, authorB) => 
    (authorA.count < authorB.count ? 1 : -1));

console.log(popularAuthors)
 //limit to 5
 return popularAuthors.slice(0,5)
 }

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
