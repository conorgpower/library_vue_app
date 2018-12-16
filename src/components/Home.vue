<template>
  <div class="hero">
    <h1 class="vue-title">WIT Library</h1>

    <table align="center">
      <tr>
        <td>
          <p class="lead"><b><i>Online Library Service</i></b>
          <p>With online library services, studying has never been so easy.</p>
          <p>Just click <a href ="/donate">here</a> to go to</p>
          <p>the Book Management page and return or withdraw a book.</p>
        </td>
        <td>
          <img src="../assets/book.gif" alt="description here" />
        </td>
      </tr>
    </table>

    <p></p>
    <p class="lead">This is the homepage of your Library Web app</p>
  </div>
</template>

<style>
  .hero {
    height: 100vh;
    margin-top: 30px;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .hero .lead {
    font-weight: 200;
    font-size: 2.5rem;
  }
  #app1 {
    width: 60%;
    margin: 0 auto;
  }
  .vue-title {
    font-size: 70pt;
    margin-bottom: 10px;
  }
</style>
