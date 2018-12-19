<template>
  <div class="hero">
    <h3 class="vue-title"><i class="fa fa-list" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div id="app1">
      <v-client-table :columns="columns" :data="books" :options="options">
      </v-client-table>
    </div>
  </div>
</template>

<script>
import bookServices from '@/services/bookServices'
import Vue from 'vue'
import VueTables from 'vue-tables-2'

Vue.use(VueTables.ClientTable, {compileTemplates: true, filterByColumn: true})

export default {
  name: 'Books',
  data () {
    return {
      messagetitle: ' Book List ',
      books: [{ '_id': String, 'bookName': String, 'author': String, 'stock': Number }],
      errors: [],
      columns: ['_id', 'bookName', 'author', 'stock'],
      options: {
        headings: {
          _id: 'ID',
          bookName: 'Book Name',
          author: 'Author',
          stock: 'Stock'
        }
      }
    }
  },
  // Fetches Books when the component is created.
  created () {
    this.loadBooks()
  },
  methods: {
    loadBooks: function () {
      bookServices.fetchBooks()
        .then(response => {
          // JSON responses are automatically parsed.
          this.books = response.data
          console.log(this.books)
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
    width: 60%;
    margin: 0 auto;
  }
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }
</style>
