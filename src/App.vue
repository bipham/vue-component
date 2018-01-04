<template>
  <div id="app">
    <ShoppingCart />
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
    <router-view class="container"></router-view>
  </div>
</template>

<script>
    import axios from 'axios';
export default {
  name: 'app',

    computed: {
        products() { return this.$store.getters.products; },
        inCart() { return this.$store.getters.inCart;}
    }
}
</script>

<style>
  .slick-slide img {
    display: inline-block;
  }
  .slick-prev:before, .slick-next:before {
    font-size: 50px;
    color: #f84545;
  }
</style>
