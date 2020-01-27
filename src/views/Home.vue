<template>
  <div class="home">
    <div>
      <img src="../assets/images/home1.jpg" />
    </div>
    <div class="row">
      <div class="col-8">
        <div class="row">
          <div class="col-6">
            <h5>O nás</h5>
          </div>
          <div class="col-6">
            <h5>Nadcházející akce</h5>
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <h5>O nás</h5>
          </div>
          <div class="col-6">
            <h5>O nás</h5>
          </div>
        </div>
        <div class="row">
          <div class="col-6"></div>
          <div class="col-6"></div>
        </div>
        <div class="row">
          <div class="col-6"></div>
          <div class="col-6"></div>
        </div>
      </div>
      <div class="col-4">
        <div class="row">
         <h5>Kalendář</h5>
       </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "home",
  components: {}
};
</script>
<style lang="stylus" scoped>
.home
    max-width: 1200px;
    margin: auto;
    img
      max-width: 1200px;
      margin: 0 auto;
</style>
