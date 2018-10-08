<template>
  <div class="container-fluid fourth-section-container">
    <div class="container">
      <div class="row">
          <div class="col-12">
              <div class="row">
                  <div class="col-12 fourth-section-items" id="fourth-item-first">
                    <div class="d-flex align-items-center" >
                      <div class="d-none d-sm-none d-md-flex d-lg-flex col-12 col-sm-12 col-md-5 col-lg-5 align-items-start flex-column first-screen"
                           data-aos="fade-right"
                           data-aos-duration="1000"
                           data-aos-offset="150"
                           data-aos-easing="ease-in-sine"
                           data-aos-once="true"
                           data-anchor="#fourth-item-first"
                      >
                        <img class="img-fluid screens" src="../../assets/screen-1.png" alt="Screen">
                      </div>
                      <div class="col-12 col-sm-12 col-md-7 col-lg-7"
                           data-aos="flip-up"
                           data-aos-duration="1500"
                           data-aos-once="true"
                           data-anchor="#fourth-item-first"
                      >
                        <div>
                          <img class="img-fluid mr-1" src="../../assets/chat.png" alt="Screen">
                          <div class="col-9 col-sm-10 col-md-10 col-lg-10 float-right float-sm-right float-md-right">
                            <h3 class="dark-text font-weight-light mb-4 mt-1 desc-title">Chat <span class="blue-text font-weight-normal">securely.</span></h3>
                            <p class="dark-text desc-service">
                              We don’t store your data, we don’t share it and <br> we couldn’t even sell it if we wanted to. Chat <br> with your contacts and rest assured that your <br> chat data is fully encrypted.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 d-flex fourth-section-items" id="fourth-item-second">
                      <div class="d-none d-sm-none d-md-flex d-lg-flex col-12 col-sm-12 col-md-5 col-lg-5 align-items-end flex-column second-screen"
                           data-aos="fade-left"
                           data-aos-duration="1000"
                           data-aos-offset="150"
                           data-aos-easing="ease-in-sine"
                           data-aos-once="true"
                           data-anchor="#fourth-item-second"
                          >
                        <img class="img-fluid screens" src="../../assets/screen-2.png" alt="Screen">
                      </div>
                      <div class="col-12 col-sm-12 col-md-7 col-lg-7 second-screen-body"
                           data-aos="flip-up"
                           data-aos-duration="1500"
                           data-aos-once="true"
                           data-anchor="#fourth-item-second">
                        <div >
                          <img class="img-fluid" src="../../assets/friends.png" alt="Screen">
                          <div class="col-9 col-sm-10 col-md-10 col-lg-10 float-left float-sm-right float-md-right">
                            <h3 class="font-weight-light mb-4 mt-1 desc-title blue-text">Find <span class="dark-text font-weight-light">your Friends.</span></h3>
                            <p class="dark-text desc-service">
                              Festivals, expos, outdoor events -- it’s all great<br> fun until you’re lost in the crowd and can’t find<br> your friends.
                              Turn on geolocation sharing with<br> your contacts and find out exactly where your<br> buddies are standing!<br><br>
                              Don’t worry though - you decide who can see<br> you and who can’t.
                            </p>
                          </div>
                        </div>
                      </div>
                  </div>
                  <div class="col-12 d-flex fourth-section-items" id="fourth-item-third">
                      <div class="d-none d-sm-none d-md-flex d-lg-flex col-12 col-sm-12 col-md-5 col-lg-5 align-items-start flex-column third-screen"
                           data-aos="fade-right"
                           data-aos-duration="1000"
                           data-aos-offset="50"
                           data-aos-easing="ease-in-sine"
                           data-aos-once="true"
                           data-anchor="#fourth-item-third">
                          <img class="img-fluid screens" src="../../assets/screen-3.png" alt="Screen">
                      </div>
                      <div class="col-12 col-sm-12 col-md-7 col-lg-7 third-screen-body"
                           data-aos="flip-up"
                           data-aos-duration="1500"
                           data-aos-once="true"
                           data-anchor="#fourth-item-third">
                        <div>
                            <img class="img-fluid" src="../../assets/group.png" alt="Screen">
                          <div class="col-9 col-sm-10 col-md-10 col-lg-10 float-right float-sm-right float-md-right">
                            <h3 class="font-weight-light mb-6 desc-title dark-text">Group chats <span class="font-weight-light blue-text">for the occasion.</span></h3>
                            <p class="dark-text desc-service">
                              Planning a trip to the festival of a lifetime with your buddies?<br> Get the group chat going to coordinate your plans and get<br> everybody sharing geolocation within the group.<br><br>
                              Isn’t it great to see how far away the cupbearer is?
                            </p>
                          </div>
                        </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
    <div class="cycle-background-1"></div>
    <div class="row">
      <div class="col-12 mobile-apps"
           data-aos="slide-up"
           data-aos-once="true"
           data-aos-duration="1000"
           data-aos-offset="100"
           data-aos-easing="ease-in-sine"
           data-anchor="#fourth-item-third">
        <div class="row">
          <div class="col-12 d-flex justify-content-center mb-4">
            <div class="d-inline px-4">
              <a href="javascript:void(0)">
                <img class="img-fluid" src="../../assets/apple.png" alt="Icons">
              </a>
            </div>
            <div class="d-inline px-4">
              <a href="javascript:void(0)">
                <img class="img-fluid" src="../../assets/android.png" alt="Icons">
              </a>
            </div>
          </div>
          <div class="col-12 text-center mobile-types">
            <h3 class="dark-text font-weight-light mb-3">Available on App Stores Now!</h3>
            <h4 class="dark-text font-weight-light">Get started today!</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "fourthSection"
    }
</script>

<style scoped>
  .fourth-section-container{
    position: relative;
    overflow: hidden;
  }
  .fourth-section-container .screens{
      box-shadow: 0 0 10px 5px #f0f0f0;
      border-radius: 5px;
  }
  .fourth-section-container .first-screen{
      z-index: 1;
  }
  .fourth-section-container .second-screen{
      top: -60px;
      z-index: 2;
  }
  .fourth-section-container .third-screen{
      top: -130px;
      z-index: 3;
  }
  .fourth-section-container .mobile-apps{
    padding: 100px 0 140px 0;
  }
  .fourth-section-container .desc-service{
      line-height: 16px;
  }
  .mobile-right>img{
    float: left;
  }
  .mobile-right>div{
    float: left;
  }
  .second-screen{
    margin-right:160px;
  }
  .second-screen-body .mobile-right{
    margin-top: 100px;
  }
  .third-screen-body .mobile-right{
    margin-top: 70px;
  }
  .cycle-background-1{
    display: block;
    width: 50%;
    height: 50%;
    background-color: #fafafa;
    border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
    position: absolute;
    left: -25%;
    top: 20px;
    z-index: -1;
  }
  .mobile-types h3{
    font-family: Open Sans Light;
    font-size: 32px;
  }
  .mobile-types h4{
    font-size: 22px;
    font-family: Open Sans Light;
  }
  .mobile-apps{
    background: url("../../assets/background3.png") no-repeat;
    background-size: cover;
  }
  /*Media queries*/
  /*Extra small devices (portrait phones, less than 576px)*/
  @media (max-width: 575.98px) {
    .second-screen-body>.mobile-right>img{
      float: right;
    }
    .fourth-section-container .mobile-apps {
      padding: 60px 0 60px 0;
    }
    .fourth-section-items{
      margin-bottom: 80px;
    }
  }

  /*Small devices (landscape phones, 576px and up)*/
  @media (min-width: 576px) and (max-width: 767.98px) {
    .fourth-section-container .mobile-apps{
      padding: 60px 0 100px 0;
    }

    .fourth-section-items{
      margin-bottom: 80px;
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
