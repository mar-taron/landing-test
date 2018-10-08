<template>
    <div class="container-fluid second-section-container">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="row d-flex align-items-center">
              <div class="col-12 col-sm-4 col-md-4 col-lg-4 py-4 py-sm-5">
                <div class="d-flex justify-content-around">
                  <a class="partners-items text-center" href="javascript:void(0)">
                    <h4 class="title-2">PARTNERS AND AFFILIATES</h4>
                  </a>
                </div>
              </div>
              <div class="col-12 col-sm-4 col-md-4 col-lg-4 py-4 py-sm-5">
                <div class="d-flex justify-content-around">
                  <a href="javascript:void(0)">
                    <img src="../../assets/chainsprount.png" alt="Partners">
                  </a>
                </div>
              </div>
              <div class="col-12 col-sm-4 col-md-4 col-lg-4 py-4 py-sm-5">
                <div class="d-flex justify-content-around">
                  <a href="javascript:void(0)">
                    <img src="../../assets/applied.png" alt="Partners">
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "secondSection"
    }
</script>

<style scoped>
    .second-section-container{
      border-bottom: 1px solid #f3f3f3;
    }

    .title-2{
      font-weight: 600;
      font-size: 14px;
      color: #bdbdbd;
    }

    .partners-items{
      text-decoration: none;
    }

    /*Media queries*/
    /*Extra small devices (portrait phones, less than 576px)*/
    @media (max-width: 575.98px) {
      .first-section-container .main-title{
        margin-top: 30px;
      }
    }

    /*Small devices (landscape phones, 576px and up)*/
    @media (min-width: 576px) and (max-width: 767.98px) {

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
