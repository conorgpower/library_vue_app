<template>
  <div class="hero">
    <h3 class="vue-title"><i class="fa fa-comment" style="padding: 3px"></i>{{messagetitle}}</h3>
    <p>You can keep up to date with all things WIT by following our Twitter and Facebook pages or by dropping to see us at the Cork Road Campus.</p>
    <p><a class="twitter-timeline" href="https://twitter.com/waterfordit?ref_src=twsrc%5Etfw">Tweets by waterfordit</a></p>
    <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fwaterfordit%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
    <iframe width="50%" height="500" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=Cork%20Rd%20Waterford%20Ireland+(%20Waterford%20Institute%20of%20Technology)&amp;ie=UTF8&amp;t=&amp;z=13&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
  </div>
</template>

<script>
export default {
  name: 'ContactUs',
  data () {
    return {
      messagetitle: ' Contact Us '
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
