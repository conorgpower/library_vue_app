<template>
  <div id="app1" class="hero">
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <form @submit.prevent="submit" class="text">
            <div class="form-group">
              <label class="form-control-label" name="bookName">Enter the Book's Name </label>
              <input class="form__input" v-model.trim="$v.bookName.$model"/>
            </div>
            <div class="form-group">
              <label class="form-control-label" name="author">Enter the Book Authors Name </label>
              <input class="form__input" v-model.trim="$v.author.$model"/>
            </div>
            <div class="form-group">
              <label class="form-control-label" name="stock">Enter the amount to return </label>
              <input class="form__input" type="number" v-model.trim="$v.stock.$model"/>
            </div>
            <p>
              <button class="btn btn-primary btn1" type="submit" :disabled="submitStatus === 'PENDING'">{{ bookBtnTitle }}</button>
            </p>
            <p>
              <a href="#/books" class="btn btn-primary btn1" role="button">Manage Books</a>
            </p>
            <p class="typo__p" v-if="submitStatus === 'OK'">Thanks for your time!</p>
            <p class="typo__p" v-if="submitStatus === 'ERROR'">Please Fill in the Form Correctly.</p>
            <p class="typo__p" v-if="submitStatus === 'PENDING'">Returning...</p>
          </form>
        </div><!-- /col -->
      </div><!-- /row -->
    </div><!-- /container -->
  </div>
</template>

<script>
import Vue from 'vue'
import VueForm from 'vueform'
import Vuelidate from 'vuelidate'
import VueSweetalert from 'vue-sweetalert'
import { required, minLength, between } from 'vuelidate/lib/validators'

Vue.use(VueForm, {
  inputClasses: {
    valid: 'form-control-success',
    invalid: 'form-control-danger'
  }
})

Vue.use(Vuelidate)
Vue.use(VueSweetalert)

export default {
  name: 'FormData',
  props: ['bookBtnTitle'],
  data () {
    return {
      messagetitle: ' Return Book ',
      bookName: '',
      author: '',
      stock: null,
      books: {},
      submitStatus: null
    }
  },
  validations: {
    bookName: {
      required,
      minLength: minLength(5)
    },
    author: {
      required,
      minLength: minLength(5)
    },
    stock: {
      required,
      between: between(1, 1000)
    }
  },
  methods: {
    submit () {
      console.log('submit!')
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        // do your submit logic here
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
          var book = {
            bookName: this.bookName,
            author: this.author,
            stock: this.stock,
            message: this.message
          }
          this.book = book
          console.log('Submitting in BookForm : ' + JSON.stringify(this.book, null, 5))
          this.$emit('book-is-created-updated', this.book)
        }, 500)
      }
    }
  }
}
</script>

<style scoped>
  .text {
    color: white;
    text-shadow:
      -1px -1px 0 rgb(0,0,0),
      1px -1px 0 rgb(0,0,0),
      -1px 1px 0 rgb(0,0,0),
      1px 1px 0 rgb(0,0,0);
  }
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }
  #app1 {
    width: 95%;
    margin: 0 auto;
  }
  .required-field > label::after {
    content: '*';
    color: red;
    margin-left: 0.25rem;
  }
  .donate-form .form-control-label.text-left{
    text-align: left;
  }

  label {
    display: inline-block;
    width: 540px;
    text-align: left;
    font-size: x-large;
  }
  .typo__p {
    width: 540px;
    font-size: x-large;
  }
  .btn1 {
    width: 300px;
    font-size: x-large;
  }
  p {
    margin-top: 20px;
  }

  input {
    border: 1px solid silver;
    border-radius: 4px;
    background: white;
    padding: 5px 10px;
    width: 540px;
  }

  .dirty {
    border-color: #5A5;
    background: #EFE;
  }

  .dirty:focus {
    outline-color: #8E8;
  }

  .error {
    border-color: red;
    background: #157ffb;
    color: whitesmoke;
  }

  .error:focus {
    outline-color: #ffa519;
  }
</style>
