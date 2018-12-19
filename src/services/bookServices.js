import Api from '@/services/api'

export default {
  fetchBooks () {
    return Api().get('/books')
  },
  postBook (book) {
    return Api().post('/books', book,
      { headers: {'Content-type': 'application/json'} })
  }
}
