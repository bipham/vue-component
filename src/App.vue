<template>
  <div id="app">
    <!--header-->
    <header id="header" class="primary-header header-custom">
      <div class="container">
        <div class="header-top">
          <div class="right-custom float-left">
            <ul id="navigation-my-web" class="navigation-custom col-md-12 col-sm-12 hidden-xs">
              <li class="nav-item">
                <a class="nav-link" href="#">ABOUT US</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">CONTACT US</a>
              </li>
            </ul>
          </div>
          <div class="center-class logo-webstite">
            <router-link :to="{ name: 'Home' }">
                <ImageScaleCenter src="./src/assets/imgs/original/logo.png" height="65px"></ImageScaleCenter>
            </router-link>
          </div>
          <div class="left-custom float-right">
            <ShoppingCart />
          </div>
        </div>
        <div class="header-bottom">
          <div id="main-nav">
            <ul id="main-navigation" class="navigation-custom col-md-12 col-sm-12 hidden-xs">
              <li class="nav-item">
                <div class="nav-link">
                  <router-link :to="{ name: 'Home' }">
                    Home
                  </router-link>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Book</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Hi-tech</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Fashion</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header><!-- /header -->
    <!--header-fixing-->
    <div class="menu menu-header row">
      <div class="col-md-4 logo-area float-left">
        <div class="logo-reading-menu img-thumbnail-middle float-left">
          <div class="img-thumbnail-inner">
            <a href="/" class="brand-web">
              <ImageScaleCenter src="./src/assets/imgs/original/logo.png" height="65px"></ImageScaleCenter>
            </a>
          </div>
        </div>
      </div>
      <div class="col-md-4 menu-nav-header float-left">
          <ul class="navigation-custom col-md-12 col-sm-12 hidden-xs">
            <li class="nav-item">
              <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Book</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Hi-tech</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Fashion</a>
            </li>
          </ul>
      </div>
      <div class="col-md-4 menu-nav-header float-right">
        <ShoppingCart />
      </div>
    </div>

    <div role="main" class="main main-page">
      <router-view></router-view>
    </div>

    <footer class="navbar-fixed-bottom panel-footer navbar-account">
        <div class="container-fluid">
          <p class="copyright"> Copyright © VueShop 2017. All right reserved. </p>
        </div>
    </footer>
  </div>
</template>

<script>
  import App from './assets/js/App'
  export default App
</script>

<style>
  @import "./assets/css/App.css";
</style>
