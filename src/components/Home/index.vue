<template>
    <div>
      <div class="first-section-styling">
        <Navbar/>
        <FirstSection/>
      </div>
      <div class="second-section-styling">
        <SecondSection/>
      </div>
      <div class="third-section-styling">
        <ThirdSection/>
        <FourthSection/>
      </div>
      <div class="">
        <FifthSection/>
      </div>
      <div class="sixth-section-styling">
        <SixthSection/>
      </div>
      <Footer/>
    </div>
</template>

<script>
  import Navbar from "@/components/navbar"
  import FirstSection from "@/components/Home/firstSection"
  import SecondSection from "@/components/Home/secondSection"
  import ThirdSection from "@/components/Home/thirdSection"
  import FourthSection from "@/components/Home/fourthSection"
  import FifthSection from "@/components/Home/fifthSection"
  import SixthSection from "@/components/Home/sixthSection"
  import Footer from "@/components/footer"


  export default {
    components: {
      Navbar, FirstSection, SecondSection, ThirdSection, FourthSection,
      FifthSection, SixthSection, Footer
    },
    name: "index"
  }
</script>

<style scoped>
  .first-section-styling{
    background: url("../../assets/background1.png") no-repeat;
    background-size: cover;

  }

  .third-section-styling{
    position: relative;
    overflow: hidden;
  }

  .third-section-styling{
    position: relative;
    overflow: hidden;
  }

  .sixth-section-styling{
    margin: 150px 0;
  }

  /*Media queries*/
  /*Extra small devices (portrait phones, less than 576px)*/
  @media (max-width: 575.98px) {
    .sixth-section-styling{
      margin: 100px 0;
    }
  }

  /*Small devices (landscape phones, 576px and up)*/
  @media (min-width: 576px) and (max-width: 767.98px) {
    .sixth-section-styling{
      margin: 100px 0;
    }
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
