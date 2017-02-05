/**
 * Created by Andreas on 2017-01-19.
 */

/**
 * Creates and returns a book object to the user. No Error handling
 * is yet to be made.
 * @param id of the book.
 * @param title of the book.
 * @param author of the book.
 * @param genre the book belongs to.
 * @param publishDate when the books was published.
 * @param decription short decription of the books plot.
 * @param price Price of the book.
 * return statements returns a book object contaning the above data.
 * @returns {{id: *, title: *, author: *, genre: *, publishDate: *, description: *, price: *}}
 */

function book(id, title, author, genre, publishDate, decription, price){

return {
        id: id,
        title: title,
        author: author,
        genre: genre,
        publishDate: publishDate,
        description: decription,
        price: price
    }
}

module.exports = book;