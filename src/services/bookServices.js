import Api from '@/services/api'

export default {
  fetchBooks () {
    return Api().get('/books')
  },
  postBook (book) {
    return Api().post('/books', book,
      { headers: {'Content-type': 'application/json'} })
  },
  increaseStock (id) {
    return Api().put(`/books/${id}/returnExistingBook`)
  },
  deleteBook (id) {
    return Api().delete(`/books/${id}`)
  },
  putBookAuthor (id, book) {
    console.log('REQUESTING ' + book._id + ' ' +
      JSON.stringify(book, null, 5))
    return Api().put(`/books/${id}/updateBookAuthor`, book,
      { headers: {'Content-type': 'application/json'} })
  }
}
