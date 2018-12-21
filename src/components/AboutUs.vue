<template>
  <div class="hero">
    <h3 class="vue-title"><i class="fa fa-info" style="padding: 3px"></i>{{messagetitle}}</h3>
    <p>WIT is the major provider of higher education in the South East region of Ireland and one of the largest IOT's in Ireland. The Institute's range and scope reflect the changing needs of the southeast as well as the country as a whole.
      The range of academic programmes is exceptionally extensive, ranging from Higher Certificate right through to post-doctoral research and covering the Humanities, Health and Nursing, Science and Informatics, Engineering and Architecture, Business and Education.
    </p>
    <div class="videowrapper">
      <iframe src="https://www.youtube.com/embed/8l6uUrCMFQ0?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutUs',
  data () {
    return {
      messagetitle: ' About Us '
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
  .videowrapper {
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 25px;
    height: 0px;
    margin-left: 18%;
  }
  .videowrapper iframe {
    position: absolute;
    left: 0px;
    top: 0px;
    right: 0px;
    bottom: 0px;
    height: 80%;
    width: 80%;
  }
  p {
    text-align: left;
    margin-left: 2%;
  }
</style>
