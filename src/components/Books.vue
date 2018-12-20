<template>
  <div class="hero">
    <h3 class="vue-title"><i class="fa fa-list" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div id="app1">
      <v-client-table :columns="columns" :data="books" :options="options">
        <a slot="increaseStock" slot-scope="props" class="fa fa-thumbs-up fa-2x" @click="increaseStock(props.row._id)"></a>
        <a slot="delete" slot-scope="props" class="fa fa-trash-o fa-2x" @click="deleteBook(props.row._id)"></a>
        <a slot="editBookName" slot-scope="props" class="fa fa-edit fa-2x" @click="editBook(props.row._id)"></a>
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
      props: ['_id'],
      books: [{ '_id': String, 'bookName': String, 'author': String, 'stock': Number }],
      errors: [],
      columns: ['_id', 'bookName', 'author', 'stock', 'increaseStock', 'editBookName', 'delete'],
      options: {
        perPage: 10,
        filterable: ['bookName', 'author', 'stock'],
        sortable: ['stock'],
        headings: {
          _id: 'ID',
          bookName: 'Book Name',
          author: 'Author',
          stock: 'Stock',
          increaseStock: 'Return Book',
          editBookName: 'Edit',
          delete: 'Delete Book'
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
    },
    // Fetches Donations when the component is created.
    increaseStock: function (id) {
      bookServices.increaseStock(id)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    deleteBook: function (id) {
      bookServices.deleteBook(id)
        .then(response => {
          this.loadBooks()
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    editBook: function (id) {
      this.$router.params = id
      this.$router.push('edit')
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
