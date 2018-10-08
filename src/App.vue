<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  /*Main styling*/
  body{
    font-size: 16px;
    color: #ffffff;
    font-family: 'Open Sans', sans-serif;
  }
  b, strong{
    font-weight: bold;
  }
  .dark-text{
    color: #5a5a5a;
  }
  .blue-text{
    color: #56b8d7;
  }
  .font-weight-500{
    font-weight: 500;
  }
  .default-text{
    color: #747474;
  }

  /*Media queries*/
  /*Extra small devices (portrait phones, less than 576px)*/
  @media (max-width: 575.98px) {
    br{
      display: none;
    }

    .first-section-container .main-title{
      margin-top: 30px;
    }
  }

  /*Small devices (landscape phones, 576px and up)*/
  @media (min-width: 576px) and (max-width: 767.98px) {
    br{
      display: none;
    }
  }

  /*Medium devices (tablets, 768px and up)*/
  @media (min-width: 768px) and (max-width: 991.98px) {
    br{
      display: none;
    }
  }

  /*Large devices (desktops, 992px and up)*/
  @media (min-width: 992px) and (max-width: 1199.98px) {

  }

  /*Extra large devices (large desktops, 1200px and up)*/
  @media (min-width: 1200px) {

  }
</style>
