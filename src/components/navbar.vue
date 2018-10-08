<template>
  <!--Navbar-->
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-dark bg-transparent mb-5">
      <a class="navbar-brand" href="#">AgoraMesh</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto text-center">
          <li class="nav-item">
            <a class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Application</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
    export default {
        name: "navbar"
    }
</script>

<style scoped>
  .navbar{
    padding: 15px 0;
  }
  .navbar-dark .navbar-nav .nav-link{
    color: #ffffff;
    font-weight: bold;
    font-size:12px;
  }
  .navbar-dark .navbar-brand{
    font-weight: bold;
    font-size: 18px;
  }
  .navbar-dark .navbar-toggler{
    border: none;
    color: #ffffff;
  }
</style>
