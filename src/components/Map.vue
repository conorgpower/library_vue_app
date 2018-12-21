<template>
  <div class="hero">
    <h3 class="vue-title"><i class="fa fa-globe" style="padding: 3px"></i>{{messagetitle}}</h3>
    <p>Visit us at the Cork Road Campus.</p>
    <iframe width="80%" height="500" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=Cork%20Rd%20Waterford%20Ireland+(%20Waterford%20Institute%20of%20Technology)&amp;ie=UTF8&amp;t=&amp;z=13&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
  </div>
</template>
<script>
export default {
  name: 'Map',
  data () {
    return {
      messagetitle: ' Map '
    }
  }
}
</script>

<style scoped>
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }
</style>
