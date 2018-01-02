<template>
  <div id="app">
    <div class="your-class">
      <Product classItem="col-md-3" :priceProduct="134000" :originalPriceProduct="140000" :showPercentSale="true" :prefix="false" titleProduct="    asus pro 2017 new    " classOuter="img-product-outer" src="./../../src/assets/imgs/asus.jpg" alt=""></Product>
      <Product classItem="col-md-3" :priceProduct="135000" :originalPriceProduct="140000" :showPercentSale="true" :prefix="false" titleProduct="    asus pro 2017 new    " classOuter="img-product-outer" src="./../../src/assets/imgs/asus.jpg" alt=""></Product>
      <Product classItem="col-md-3" :priceProduct="122000" :originalPriceProduct="140000" :showPercentSale="true" :prefix="false" titleProduct="    asus pro 2017 new    " classOuter="img-product-outer" src="./../../src/assets/imgs/asus.jpg" alt=""></Product>
      <Product classItem="col-md-3" :priceProduct="98000" :originalPriceProduct="140000" :showPercentSale="true" :prefix="false" titleProduct="    asus pro 2017 new    " classOuter="img-product-outer" src="./../../src/assets/imgs/asus.jpg" alt=""></Product>
      <Product classItem="col-md-3" :priceProduct="45000" :originalPriceProduct="140000" :showPercentSale="true" :prefix="false" titleProduct="    asus pro 2017 new    " classOuter="img-product-outer" src="./../../src/assets/imgs/asus.jpg" alt=""></Product>
    </div>
    <!--<div class="list-book col-md-3" v-for="item in items" >-->
      <!--<ImageBook  :item="item" :key="item.id" ></ImageBook>-->
    <!--</div>-->
    <!--<Alert type="warning" classAlert="alert-custom" icon="fas fa-exclamation" message="test dasd" dismissible="true"></Alert>-->
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
        items: [{
          id: "5a44c3f80ad769d7475ce574",
          itemOuter: "anim",
          bookImage: "irure",
          bookItem: "id",
          alt: "amet",
          src: "http://placehold.it/32x32",
          imgCoverBook: "laborum"
      },
          {
              id: "5a44c3f80d2ae09c159a8cf5",
              itemOuter: "elit",
              bookImage: "fugiat",
              bookItem: "culpa",
              alt: "ut",
              src: "http://placehold.it/32x32",
              imgCoverBook: "dolore"
          }]
    }
  }
}
</script>

<style>

</style>
