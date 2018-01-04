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
    <!--/header-fixing-->

    <!--<Gallery classGallery="gallery-custom">-->
        <!--<div slot="preview" class="slider-for">-->
          <!--<ImageScaleCenter v-for="product in products"-->
                            <!--:key="product.id"-->
                            <!--:id="product.id"-->
                            <!--:titleProduct="product.title"-->
                            <!--:src="product.image"-->
                            <!--:alt="product.title"-->
                            <!--:originalPriceProduct="product.price"-->
                            <!--:salePrice="product.price_sale"-->
                            <!--:prefix="false"-->
                            <!--:showPercentSale="true"></ImageScaleCenter>-->
        <!--</div>-->
      <!--<div slot="thumbnail" class="slider-nav">-->
        <!--<ImageScaleCenter v-for="product in products"-->
                          <!--:key="product.id"-->
                          <!--:id="product.id"-->
                          <!--:titleProduct="product.title"-->
                          <!--:src="product.image"-->
                          <!--:alt="product.title"-->
                          <!--:originalPriceProduct="product.price"-->
                          <!--:salePrice="product.price_sale"-->
                          <!--:prefix="false"-->
                          <!--:showPercentSale="true"></ImageScaleCenter>-->
      <!--</div>-->
    <!--</Gallery>-->
    <!--<SlideItem :options="{-->
            <!--dots: true,-->
        <!--infinite: true,-->
        <!--slidesToScroll: 1,-->
        <!--autoplay: true,-->
        <!--autoplaySpeed: 4000,-->
        <!--speed: 500-->
    <!--}" classSlider="slider1" titleSlider="Title Slider" textAlign="center">-->
      <!--<ItemImageCenter classItem="helloworld" v-for="product in products"-->
                       <!--:key="product.id"-->
                       <!--:id="product.id"-->
                       <!--:titleProduct="product.title"-->
                       <!--:src="product.image"-->
                       <!--:alt="product.title"-->
                       <!--:originalPriceProduct="product.price"-->
                       <!--:salePrice="product.price_sale"-->
                       <!--:prefix="false"-->
                       <!--:showPercentSale="true">-->
        <!--<div slot="leftColumn" class="left-custom">-->
          <!--<h6 class="title-item-slide">-->
            <!--<a :href="product.image" class="link-story">-->
              <!--{{ product.title }}-->
            <!--</a>-->
          <!--</h6>-->
        <!--</div>-->
        <!--<div class="right-custom" slot="rightColumn">-->
          <!--<div class="short-description-slider">-->
            <!--{{ product.price }}-->
          <!--</div>-->
        <!--</div>-->
      <!--</ItemImageCenter>-->
      <!--<div slot="title">-->
        <!--<hr/>-->
      <!--</div>-->
    <!--</SlideItem>-->
    <!--<SlideItem :options="{-->
            <!--centerMode: true,-->
            <!--centerPadding: '60px',-->
            <!--infinite: true,-->
            <!--slidesToScroll: 1,-->
            <!--autoplay: true,-->
            <!--autoplaySpeed: 2000,-->
            <!--slidesToShow: 5,-->
            <!--responsive: [-->
                <!--{-->
                    <!--breakpoint: 768,-->
                    <!--settings: {-->
                        <!--arrows: false,-->
                        <!--centerMode: true,-->
                        <!--centerPadding: '40px',-->
                        <!--slidesToShow: 3-->
                    <!--}-->
                <!--},-->
                <!--{-->
                    <!--breakpoint: 480,-->
                    <!--settings: {-->
                        <!--arrows: false,-->
                        <!--centerMode: true,-->
                        <!--centerPadding: '40px',-->
                        <!--slidesToShow: 1-->
                    <!--}-->
                <!--}-->
            <!--]-->
        <!--}" classSlider="test">-->
      <!--<Product-->
              <!--v-for="product in products"-->
              <!--:key="product.id"-->
              <!--:id="product.id"-->
              <!--:titleProduct="product.title"-->
              <!--:src="product.image"-->
              <!--:alt="product.title"-->
              <!--:originalPriceProduct="product.price"-->
              <!--:salePrice="product.price_sale"-->
              <!--:prefix="false"-->
              <!--:showPercentSale="true"-->
      <!--/>-->
    <!--</SlideItem>-->
  </div>
</template>

<script>
  import App from './assets/js/App'
  export default App
</script>

<style>
  @import "./assets/css/App.css";
</style>
