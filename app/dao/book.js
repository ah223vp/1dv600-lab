/**
 * Created by Andreas on 2017-01-19.
 */

function book(id, title, author, genre, publishDate, decription){

return {
        id: id,
        title: title,
        author: author,
        genre: genre,
        publishDate: publishDate,
        description: decription
    }
}

module.exports = book;