<template>
    <div class="home-page">
        <Section idSection="homeSlider" classInnerSection="primary-slider">
            <SlideItem
                    :options="{
                        dots: true,
                        infinite: true,
                        slidesToScroll: 1,
                        autoplay: false,
                        autoplaySpeed: 4000,
                        speed: 500
                        }"
                    titleSlider="Top Products"
                    textAlign="left"
                    colorTitle="white"
                    classSlider="top-slider">
                <ItemImageCenter
                        classItem="item-top-slider"
                        v-for="product in topProducts"
                        :key="product.id"
                        :id="product.reId"
                        :titleProduct="product.title"
                        :src="product.img_feature"
                        :alt="product.title"
                        :originalPriceProduct="product.price"
                        :salePrice="product.price_sale"
                        :prefix="false"
                        :showPercentSale="true"
                        height="360px">
                    <div slot="leftColumn" class="left-info-item-slider float-left">
                        <h6 class="title-item-slide">
                            <a href="#" class="link-story">
                                {{ product.title }}
                            </a>
                        </h6>
                        <div class="author-item-slide">
                            by <a href="#" class="link-author">{{ product.author.name }}</a>
                        </div>
                    </div>
                    <div class="right-info-item-slider float-right" slot="rightColumn">
                        <div class="short-description-slider">
                            {{ product.description }}
                        </div>
                    </div>
                </ItemImageCenter>
            </SlideItem>
        </Section>
        <Section idSection="newSlider" classInnerSection="new-slider">
            <SlideItem :options="{
            centerMode: true,
            centerPadding: '60px',
            infinite: true,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 3,
            responsive: [
            {
            breakpoint: 768,
            settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
            }
            },
            {
            breakpoint: 480,
            settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
            }
            }
            ]
            }"
                       classSlider="slider-top">
                <Product
                        v-for="product in phoneProducts"
                        :key="product.id"
                        :id="product.reId"
                        :titleProduct="product.title"
                        :src="product.img_feature"
                        :alt="product.title"
                        :originalPriceProduct="product.price"
                        :salePrice="product.price_sale"
                        :prefix="false"
                        :showPercentSale="true"
                        classItem="item-slider"
                />
            </SlideItem>
        </Section>

        <Section idSection="hotBookSlider" classInnerSection="hot-book-slider">
            <SlideItem
                       classSlider="slider-hot">
                <ImageBook
                        v-for="product in topProducts"
                        :key="product.id"
                        :id="product.reId"
                        :src="product.img_feature"
                        :alt="product.title"
                />
            </SlideItem>
        </Section>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data () {
            return {
                topProducts: [],
                phoneProducts: []
            }
        },
        computed: {
            products() { return this.$store.getters.products; },
            inCart() { return this.$store.getters.inCart;}
        },
        mounted () {
            axios.get('https://api.mlab.com/api/1/databases/vue-online-shop/collections/Product?q={%22category.name%22:%20%22book%22}&l=3&apiKey=DqZnVxBibhCJwhNpj3XRwP7N5SuXaazT&pretty=true')
                .then(response => {
                    this.topProducts = response.data
                })
                .catch(e => {
                    this.errors.push(e)
                })
            axios.get('https://api.mlab.com/api/1/databases/vue-online-shop/collections/Product?q={%22category.name%22:%20%22Phone%22}&l=7&apiKey=DqZnVxBibhCJwhNpj3XRwP7N5SuXaazT&pretty=true')
                .then(response => {
                    this.phoneProducts = response.data
                })
                .catch(e => {
                    this.errors.push(e)
                })
        },
    }
</script>

<style scoped>
    @import "./../css/Home.css";
</style>