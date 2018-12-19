import Api from '@/services/api'

export default {
  fetchBooks () {
    return Api().get('/books')
  }
}
