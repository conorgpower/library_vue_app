<template>
  <div id="app1" class="hero">
    <h3 class="vue-title"><i class="fa fa-edit" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <template v-if="childDataLoaded">
            <book-form :book="book" bookBtnTitle="Update Book"
                       @book-is-created-updated="updateBook"></book-form>
          </template>
        </div><!-- /col -->
      </div><!-- /row -->
    </div><!-- /container -->
  </div>
</template>

<script>
import bookServices from '@/services/bookServices'
import UpdateAuthorForm from '@/components/UpdateAuthorForm'

export default {
  data () {
    return {
      book: {},
      childDataLoaded: false,
      temp: {},
      messagetitle: ' Update Author '
    }
  },
  components: {
    'book-form': UpdateAuthorForm
  },
  created () {
    this.getBook()
  },
  methods: {
    getBook: function () {
      bookServices.fetchBooks(this.$router.params)
        .then(response => {
          this.temp = response.data
          this.book = this.temp[0]
          this.childDataLoaded = true
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    updateBook: function (book) {
      bookServices.putBookAuthor(this.$router.params, book)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
  #app1 {
    width: 95%;
    margin: 0 auto;
  }
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }
</style>
