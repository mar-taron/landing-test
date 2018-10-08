<template>
  <div class="container-fluid">
    <div class="container">
      <div class="row">
        <div class="col-12 third-section-container">
          <div class="row d-flex align-items-center">
            <div class="col-12 col-sm-8 col-md-8 col-lg-8"
                 data-aos="zoom-out-right"
                 data-aos-duration="1000"
                 data-aos-once="true">
              <h2 class="mb-3 dark-text">
                AgoraMesh is a fully secure anonymous <br>
                communication platform. <span class="blue-text">Fast, secure <br>
                </span>and<span class="blue-text"> useful every day</span>.
              </h2>
              <p class="dark-text text-justify">
                The app is the heart of AgoraMesh and it`s here to provide you with a<br>
                suite of communication and sharing options that doesn`t exist in any<br>
                other messaging app.
              </p>
            </div>
            <div class="col-12 col-sm-4 col-md-4 col-lg-4 mt-5 mt-sm-4 d-flex align-items-center"
                 data-aos="zoom-out-left"
                 data-aos-duration="1000"
                 data-aos-once="true">
              <div class="third-section-icon">
                <img src="../../assets/element-1.png" class="img-fluid" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cycle-background"></div>
  </div>
</template>

<script>
    export default {
        name: "thirdSection"
    }
</script>

<style scoped>
    .cycle-background{
      display: block;
      width: 50%;
      height: 30%;
      background-color: #f5fbfd;
      border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
      position: absolute;
      right: -25%;
      top: 20px;
      z-index: -1;
    }

    .third-section-container{
        margin: 190px 0;
    }

    .third-section-container h2{
      font-family: 'Open Sans Light';
      font-size: 32px;
    }
    .third-section-container h2 .blue-text{
      color: #86d0e8;
      font-family: Open Sans;
      color: #86d0e8;
    }
    .third-section-container p{
      font-size: 18px;
      font-family: Open Sans Light;
    }

    /*Media queries*/
    /*Extra small devices (portrait phones, less than 576px)*/
    @media (max-width: 575.98px) {
      .third-section-container{
        margin: 80px 0;
      }
      .third-section-icon{
        width: 50%;
        margin: auto;
      }
      .cycle-background{
        display: block;
        width: 100%;
        height: 30%;
        background-color: #f5fbfd;
        border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
        position: absolute;
        right: -50%;
        top: 20px;
        z-index: -1;
      }
    }

    /*Small devices (landscape phones, 576px and up)*/
    @media (min-width: 576px) and (max-width: 767.98px) {
      .third-section-container{
        margin: 100px 0;
      }
    }

    /*Medium devices (tablets, 768px and up)*/
    @media (min-width: 768px) and (max-width: 991.98px) {
      .first-section-container .main-title{
        margin-top: 60px;
      }

      .mobile-1{
        left: 0;
      }
    }

    /*Large devices (desktops, 992px and up)*/
    @media (min-width: 992px) and (max-width: 1199.98px) {

    }

    /*Extra large devices (large desktops, 1200px and up)*/
    @media (min-width: 1200px) {

    }
</style>
