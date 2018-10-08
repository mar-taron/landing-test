<template>
  <div class="container-fluid fourth-section-container">
    <div class="container">
      <div class="row">
          <div class="col-12">
              <div class="row">
                  <div class="col-12 fourth-section-items">
                    <div class="row d-flex align-items-center">
                      <div class="col-12 col-sm-12 col-md-5 col-lg-5 d-flex align-items-start flex-column first-screen order-12 order-sm-12 order-md-1">
                        <img class="img-fluid screens" src="../../assets/screen-1.png" alt="Screen">
                      </div>
                      <div class="col-12 col-sm-12 col-md-7 col-lg-7 order-1 order-sm-1 order-md-12">
                        <div class="mobile-right">
                          <img class="img-fluid mr-1" src="../../assets/chat.png" alt="Screen">
                          <div class="col-10">
                            <h3 class="dark-text font-weight-light mb-4 mt-1 desc-title">Chat <span class="blue-text font-weight-normal">securely.</span></h3>
                            <p class="dark-text desc-service">
                              We don’t store your data, we don’t share it and <br> we couldn’t even sell it if we wanted to. Chat <br> with your contacts and rest assured that your <br> chat data is fully encrypted.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 d-flex">
                      <div class="col-5 d-flex align-items-end flex-column second-screen">
                        <img class="img-fluid screens" src="../../assets/screen-2.png" alt="Screen">
                      </div>
                      <div class="col-7  second-screen-body">
                        <div class="mobile-right">
                          <img class="img-fluid" src="../../assets/friends.png" alt="Screen">
                          <div class="col-10">
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
                  <div class="col-12 d-flex ">
                      <div class="col-5 d-flex align-items-start flex-column third-screen">
                          <img class="img-fluid screens" src="../../assets/screen-3.png" alt="Screen">
                      </div>
                      <div class="col-7 third-screen-body">
                        <div class="mobile-right">
                            <img class="img-fluid" src="../../assets/group.png" alt="Screen">
                          <div class="col-10">
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
          <div class="col-12 mobile-apps">
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
    <div class="cycle-background-1"></div>
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
    margin: 0 0 140px 0;
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
  .fourth-section-items>.row{
    width: 100%;
  }
  .mobile-apps{
    background: url("../../assets/background3.png") no-repeat;
    background-size: cover;
  }
</style>
