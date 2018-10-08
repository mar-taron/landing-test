<template>
    <div class="container-fluid footer">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-6 col-sm-6 col-md-4 col-lg-4 text-left text-sm-left text-md-left">
            <h3 class="font-weight-bold mb-3">AgoraMesh</h3>
            <p>The next generaion mobile<br>communication.</p>
            <small>&copy; agoramesh. all rights reserved.</small>
          </div>
          <div class="col-6 col-sm-6 col-md-4 col-lg-4 text-right text-sm-right text-md-center">
            <div class="d-inline px-2">
              <a href="javascript:void(0)">
                <img class="img-fluid twitter-logo" src="../assets/twitter.png" alt="Icons">
              </a>
            </div>
            <div class="d-inline px-2">
              <a href="javascript:void(0)">
                <img class="img-fluid" src="../assets/instagram.png" alt="Icons">
              </a>
            </div>
            <div class="d-inline px-2">
              <a href="javascript:void(0)">
                <img class="img-fluid" src="../assets/discord-logo.png" alt="Icons">
              </a>
            </div>
            <div class="d-inline px-2">
              <a href="javascript:void(0)">
                <img class="img-fluid" src="../assets/plane.png" alt="Icons">
              </a>
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-4 col-lg-4 text-center text-sm-center text-md-right pt-4 pt-sm-4 pt-md-0">
            <a href="javascript:void(0)" class="footer-download font-weight-bold">Download Whitepaper</a>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
  .footer{
    padding: 70px 0;
    background: url("../assets/footer-background.png") no-repeat;
    background-size: cover;
  }
  .footer h3{
    font-size: 24px;
  }
  .text-left p{
    font-size: 12px;
    font-family: Open Sans Light;
    margin-bottom: 15px;
  }
  .text-left small{
    font-size: 8px;
  }
  .footer small{
    text-transform: uppercase;
  }
  .footer .footer-download{
    text-decoration: none;
    color: #ffffff;
    font-size: 12px;
  }
  .twitter-logo{
    width:17px;
  }
  /*Media queries*/
  /*Extra small devices (portrait phones, less than 576px)*/
  @media (max-width: 575.98px) {
    .d-inline{
      display: block!important;
    }
  }

  /*Small devices (landscape phones, 576px and up)*/
  @media (min-width: 576px) and (max-width: 767.98px) {

  }

  /*Medium devices (tablets, 768px and up)*/
  @media (min-width: 768px) and (max-width: 991.98px) {

  }

  /*Large devices (desktops, 992px and up)*/
  @media (min-width: 992px) and (max-width: 1199.98px) {

  }

  /*Extra large devices (large desktops, 1200px and up)*/
  @media (min-width: 1200px) {

  }
</style>
