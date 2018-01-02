<template>
  <div id="app">
    <Product classItem="col-md-3" priceProduct="100000" titleProduct="    asus pro 2017 new    "></Product>
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
