<template>
    <!--<div class="sites-carousel">
        <slick ref="slick" :options="slickOptions">
            <a href="https://speedqueencommercial.com" class="portfolio-carousel-item">
                <div class="site-listing-img carousel-slide" id="sqc-site-listing"></div>
            </a>
            <a href="https://www.icanthrive.org/">
                <div class="site-listing-img carousel-slide" id="thrive-site-listing"></div>
            </a>
        </slick>
    </div>-->
    <div id="portfolioCarousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#portfolioCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#portfolioCarousel" data-slide-to="1"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <a href="https://speedqueencommercial.com">
                    <img class="d-block w-100" src="/dist/assets/img/SpeedQueenCommercial.JPG" alt="Speedqueen Commercial link">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Speedqueen Commercial</h5>
                        <p>Nominated for Kentico Site of the Year</p>
                    </div>
                </a>
            </div>
            <div class="carousel-item">
                <a href="https://www.icanthrive.org/">
                    <img class="d-block w-100" src="/dist/assets/img/ICanThrive.JPG" alt="Thrive Non-profit site">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Thrive</h5>
                        <p>Awesome non-profit throughout central Mass.</p>
                    </div>
                </a>
            </div>
        </div>
        <a class="carousel-control-prev" href="#portfolioCarousel" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#portfolioCarousel" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
</template>

<script>
    //import Slick from 'vue-slick'

    export default {
        name: "PageSites",
        data() {
            return {
                slickOptions: {
                    slidesToShow: 1,
                    infinite: true,
                    adaptiveHeight: false,
                    dots: true,
                    arrows: false,
                    draggable: true,
                    swipe: true
                }
            }
        },
        /*methods: {
            next() {
                this.$refs.slick.next()
            },
            prev() {
                this.$refs.slick.prev()
            },
            reInit() {
                // Helpful if you have to deal with v-for to update dynamic lists
                this.$refs.slick.reSlick()
            }
        },
        components: {
            'slick': Slick
        },*/
    }
</script>
