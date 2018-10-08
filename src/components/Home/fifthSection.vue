<template>
  <div class="container-fluid fifth-section-container">
    <div class="container">
      <div class="row">
          <div class="col-10 text-center mx-auto">
              <h2 class="mb-4">The Future is <span>Bright</span>.</h2>
              <p class="main-desc mb-4">Agoramesh is more than just our app, it’s going to be a platform that enables communication<br> and data sharing around the world and <b>without needed constant direct internet access.</b><br> How cool is that?</p>
              <p class="secondary-desc">No more governments blocking cell coverage during demonstrations, no more third parties sifting through your<br> personal data, no ad companies targeting you based on your conversations -- this is the future we are building towards.</p>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "fifthSection"
    }
</script>

<style scoped>
    .fifth-section-container{
      padding: 150px 0;
      background: url('../../assets/background2.png') no-repeat;
      background-size: cover;
      color: #ffffff;
    }

    .fifth-section-container h2{
      font-family: Open Sans Light;
      font-size: 32px;
    }

    .fifth-section-container h2 span{
      font-family: Open Sans;
      font-size: 32px;
    }

    fifth-section-container p{
      font-size: 18px;
    }

    /*Media queries*/
    /*Extra small devices (portrait phones, less than 576px)*/
    @media (max-width: 575.98px) {
      .fifth-section-container{
        padding: 100px 0;
      }
    }

    /*Small devices (landscape phones, 576px and up)*/
    @media (min-width: 576px) and (max-width: 767.98px) {
      .fifth-section-container{
        padding: 100px 0;
      }
    }

    /*Medium devices (tablets, 768px and up)*/
    @media (min-width: 768px) and (max-width: 991.98px) {
      .second-screen{
        margin-right: 0;
      }
    }

    /*Large devices (desktops, 992px and up)*/
    @media (min-width: 992px) and (max-width: 1199.98px) {

    }

    /*Extra large devices (large desktops, 1200px and up)*/
    @media (min-width: 1200px) {

    }
</style>
