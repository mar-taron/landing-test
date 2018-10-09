<template>
  <div class="container first-section-container">
    <div class="row">
      <div class="col-12 col-sm-12 col-md-7 col-lg-7"
           data-aos="zoom-out-right"
           data-aos-duration="1000"
           data-aos-once="true">
        <h1 class="mb-5 main-title">
          The next generation of<br>
          mobile communication.
        </h1>
        <p class="mb-4 title-desc">
          Chat with friends, create group chats and track your friends<br> locations. All of this and more - <b>and it’s fully encrypted</b>!
        </p>
        <form class="col-12 col-sm-12 col-md-8 col-lg-8 p-0">
          <div class="form-group " >
            <input type="email"  v-bind:class="{ active : active}" class="form-control email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Sign up to our newsletter!">
            <button class="btn mail-btn" v-on:click="activeInput"></button>
            <small id="emailHelp" class="form-text text-muted d-none">We'll never share your email with anyone else.</small>
          </div>
        </form>
      </div>
      <div class="d-none d-sm-none d-md-block col-md-5 col-lg-5 col-xl-5 top-mobile">
        <div class="mobile-1"
             data-aos="fade-down"
             data-aos-duration="1000"
             data-aos-once="true">
          <img src="../../assets/mobile1.png" class="img-fluid" alt="">
        </div>
        <div class="mobile-2"
             data-aos="fade-up"
             data-aos-duration="1000"
             data-aos-once="true">
          <img src="../../assets/mobile2.png" class="img-fluid" alt="">
        </div>
      </div>
      <div class="col-12 col-sm-12 col-md-12 col-lg-12 mb-4">
        <div class="d-inline-block social" v-bind:class="{'blink': blink}" v-bind:key="n" v-for="n in icons">
          <a href="javascript:void(0)" v-bind:class="'social-icon ic' + n">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "firstSection",
        data(){
          return {
            active:false,
            icons: 5, 
            blink: true
          }
        },
        methods:{
          activeInput(e){
            e.preventDefault();
            this.active = !this.active;
          }
        },
        mounted: function () {
          setTimeout(()=>{
            this.blink = false
          }, 2000)
          
        }

    }
</script>

<style scoped>
  .social{
    display: inline-block !important;
    background: #4397b2;
    border-radius: 20px;
    width: 35px;
    height: 35px;
    margin-right: 15px;
  }

 .social:hover {
    transition: transform 0.4s ease-out;
    transform: rotateZ(360deg);
    background: #3e8ba4;
    border-radius: 0;
    // padding: 3px;
    // width: 40px;
    // height: 40px;
  }

  .first-section-container .form-group{
    position: relative;
  }

  .first-section-container .form-group input{
    height: 50px;
    border-radius: 50px;
    padding: 5px 25px 5px 24px;
    border: none;
  }

  .first-section-container .form-group input.active{
    width: 100%
  }

   .first-section-container .form-group input.active + button{
    right: 0;
  }

  .first-section-container .email{
    font-size: 14px;
    font-family: 'Open Sans Light';
    border-radius: 36px;
    position: absolute;
    width: 45px;
    height: 64px;
    transition: all 0.5s cubic-bezier(.87, -.41, .19, 1.44);

  }

  .first-section-container .mail-btn{
    position: absolute;
    top: 0;
    right: calc(100% - 50px);
    width: 35px;
    height: 35px;
    margin: 7.5px;
    background: #56b8d7;
    border: none;
    border-radius: 30px;
    transition: all 0.5s cubic-bezier(.87, -.41, .19, 1.44);
  }

  .mail-btn:after{
    content: '';
    position: absolute;
    top: 6px;
    left: 5px;
    width: 25px;
    height: 20px;
    background: url('../../assets/send-message.png') no-repeat;
  }

  .first-section-container .main-title{
    margin-top: 100px;
    font-family: 'Open Sans Light';
    font-size: 42px;
  }

  .social-icon{
    display: inline-block;
    width: 35px;
    height: 35px;
    background: url('../../assets/social-icons.png') no-repeat;
    background-size: cover;
  }

  .ic1{
    background-position: 6px center;
  }

  .ic2{
    background-position: -36px center;
  }

  .ic3{
    background-position: -80px center;
  }

  .ic4{
    background-position: -123px center;
  }

  .ic5{
    background-position: -166px center;
  }

  .mobile-1 img,    .mobile-2 img{
    /*box-shadow: 5px 4px 11px 7px #ccc;*/
    /*width: 300px;*/
  }

  .top-mobile {
    height: 535px;
  }

  .mobile-1{
    position: absolute;
    top: 0;
    left: 75px;
  }

  .mobile-2{
    position: absolute;
    bottom: 0;
    right: 15px;
  }

  .title-desc{
    font-size: 18px;
    font-family: 'Open Sans Light'
  }


  @keyframes blink {  
    from { opacity: 1; }
    to { opacity: 0; }
  }

  .blink.ic1 {
    animation: blink 2000ms steps(5, start) infinite;
    -webkit-animation: blink 1s steps(5, start) infinite;
  }

  .first-section-container form{
    height: 50px;
    margin-bottom: 30px;
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
    .first-section-container .main-title{
      margin-top: 20px;
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
