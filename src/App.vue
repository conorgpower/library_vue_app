<template>
  <div id="app" class="backgroundPic">
    <b-navbar toggleable="md" variant="dark" type="dark">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <img src="../../wit_library_vue_app/src/assets/book.png" width="60" height="60" class="img-circle" style="padding: 1px">
      <b-navbar-brand to="/">WIT Library Web App</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item to="/#"><i class="fa fa-home" style="padding: 5px"> Home</i></b-nav-item>
          <b-nav-item to="/books"><i class="fa fa-list" style="padding: 5px"> Manage Books</i></b-nav-item>
          <b-nav-item to="/returnBook"><i class="fa fa-book" style="padding: 5px"> Return Book</i></b-nav-item>
          <b-nav-item to="/map"><i class="fa fa-globe" style="padding: 5px"> Map</i></b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/aboutUs"><i class="fa fa-info" style="padding: 5px"> About Us</i></b-nav-item>
          <b-nav-item to="/contactUs"><i class="fa fa-comment" style="padding: 5px"> Contact Us</i></b-nav-item>
          <i class="fa fa-pied-piper-alt fa-1x" style="padding: 5px; color: white;"></i>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    font-size: 20px;
    color: white;
    padding-top: 20px;
    padding-bottom: 400px;
    overflow: hidden;
  }
  .backgroundPic {
    width: 100%;
    height: 100%;
    background-size: 400% 400%;
    background: url("assets/background.png") fixed;
    -moz-background-size: cover;
    -webkit-background-size: cover;
    background-size: cover;
    background-position: top center !important;
    background-repeat: no-repeat !important;
    background-attachment: fixed;
  }
  .VueTables__sortable {
    cursor: pointer;
  }
</style>
