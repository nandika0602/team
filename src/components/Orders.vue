<template>
    <div class="container">
        <div>
            <NavBar></NavBar>
        </div>
        <br><br>
        <div class="header">

            PURCHASE HISTORY
        </div>
        <br><br>
        <div class="row">
            <div class="col-12 col-sm-6 col-md-2">
                N*20

            </div>
            <div class="col-12 col-sm-6 col-md-2">
               
                <button type="button" @click="date" btn btn-warning w-100>date</button>
                <p>{{message}}</p>

            </div>
            <div class="col-12 col-sm-6 col-md-2">

                Status: Delivered
            </div>
            <div class="col-12 col-sm-6 col-md-2">

                Address
            </div>
            <div class="col-12 col-sm-6 col-md-2">

                Payment method: Cash
            </div>
            <div class="col-12 col-sm-6 col-md-2">

                $19.25
            </div>



        </div>
        <hr>
        <div class="row">
            <div class="col-12 col-sm-6 col-md-2">

                <div class="card" v-for="item in arr" v-bind:key="'item.id'"
                    style="display:flex; flex-wrap: wrap; flex-direction: row;">
                    <div class="card" style="width: 18rem; ">
                        <img :src="item.img[0]" class="card-img-top" width="500px" height="80px" alt="...">

                        <br>
                    </div>
                </div>
            </div>
            <div class="col-12 col-sm-6 col-md-2 ">
                <div v-for="item in arr" v-bind:key="'item.id'">
                <div class="box">

                    <h5 class="card-title">{{ item.name }}</h5>

                    <p class="card-para">Quantity:</p>
                </div>
                </div>
            </div>
            <div class="col-12 col-sm-6 col-md-6 ">
            </div>
            <div class="col-12 col-sm-6 col-md-2 ">
           
                    <div v-for="item in arr" v-bind:key="'item.id'">
                    <div class="box1">
                        
                        <h5 class="card-title1">${{ item.price }}</h5>
                        </div>
                   
                </div>
                <br>
                <br>
            </div>
            <hr>
            <div class="row">
                <div class="col-12 col-sm-6 col-md-6">

                </div>
                <div class="col-12 col-sm-6 col-md-2 ">

                </div>
                <div class="col-12 col-sm-6 col-md-2 ">
                    TOTAL: $19.25
                </div>

                <div class="col-12 col-sm-6 col-md-2 ">
                    <button type="button" class="btn btn-warning w-100">Reorder</button>

                </div>

            </div>
        </div>
    </div>







</template>
<script>
import NavBar from "./NavBar.vue";
export default {
    name: 'Orders',
    components: {
        NavBar
    },
    data() {
        return {
            arr: [
                {
                    id: 0,
                    name: 'OnePlus Nord CE 2 Lite 5G',
                    img: 'https://www.peta.org/wp-content/uploads/2016/07/iStock_50573756_Zelenenka-768x516.jpg',
                    offer: 30,
                    price: '19,299',
                    camera: '20',
                    brand: 'oneplus',
                    rating: 4,
                    storage: 128
                },
                {
                    id: 1,
                    name: 'Samsung Galaxy M52 5G',
                    img: 'https://m.media-amazon.com/images/I/81-tqKsrTuL._AC_UY436_FMwebp_QL65_.jpg',
                    offer: 25,
                    price: '19,799',
                    camera: '10',
                    brand: 'samsung',
                    rating: 5,
                    storage: 128
                },
                {
                    id: 2,
                    name: 'realme narzo 50i',
                    img: 'https://m.media-amazon.com/images/I/81HJ4pkOsiL._AC_UY436_FMwebp_QL65_.jpg',
                    offer: 30,
                    price: '8,999',
                    camera: '50',
                    brand: 'realme',
                    rating: 4,
                    storage: 128
                },
                {
                    id: 3,
                    name: 'vivo iQOO Z6 5G',
                    img: 'https://m.media-amazon.com/images/I/61cU9G3nwVL._AC_UY436_FMwebp_QL65_.jpg',
                    offer: 35,
                    price: '16,999',
                    camera: '70',
                    brand: 'vivo',
                    rating: 4,
                    storage: 128
                },
                {
                    id: 4,
                    name: 'Apple iPhone 13 Pro (1TB)',
                    img: 'https://m.media-amazon.com/images/I/61sDyXAepuL._AC_UY436_FMwebp_QL65_.jpg',
                    offer: 30,
                    price: '1,60,900',
                    camera: '120',
                    brand: 'apple',
                    rating: 5,
                    storage: 500
                },
                {
                    id: 5,
                    name: 'Redmi 9A Sport',
                    img: 'https://m.media-amazon.com/images/I/81p+EkIvUUL._AC_UY436_FMwebp_QL65_.jpg',
                    offer: 30,
                    price: '1,60,900',
                    camera: '50',
                    brand: 'redmi',
                    rating: 5,
                    storage: 500
                },
                {
                    id: 6,
                    name: 'OPPO A57',
                    img: 'https://m.media-amazon.com/images/I/81Ww9bOGRfL._AC_UY436_FMwebp_QL65_.jpg',
                    offer: 30,
                    price: '19,900',
                    camera: '90',
                    brand: 'oppo',
                    rating: 5,
                    storage: 500
                },
                {
                    id: 7,
                    name: 'Nokia 5.4',
                    img: 'https://m.media-amazon.com/images/I/51IwfsTS9yS._AC_UY436_FMwebp_QL65_.jpg',
                    offer: 30,
                    price: '8,900',
                    camera: '20',
                    brand: 'nokia',
                    rating: 5,
                    storage: 500
                },
                {
                    id: 8,
                    name: 'realme narzo 50',
                    img: 'https://m.media-amazon.com/images/I/81X85GWtYHL._AC_UY436_FMwebp_QL65_.jpg',
                    offer: 30,
                    price: '16,900',
                    camera: '50',
                    brand: 'realme',
                    rating: 5,
                    storage: 500
                },
                {
                    id: 9,
                    name: 'Samsung Galaxy M52 5G',
                    img: 'https://m.media-amazon.com/images/I/81-tqKsrTuL._AC_UY436_FMwebp_QL65_.jpg',
                    offer: 30,
                    price: '18,999',
                    camera: '70',
                    brand: 'samsung',
                    rating: 5,
                    storage: 500
                },
                {
                    id: 10,
                    name: 'vivo Y15s Mystic Blue',
                    img: 'https://m.media-amazon.com/images/I/71Irb1PBFCL._AC_UY436_FMwebp_QL65_.jpg',
                    offer: 30,
                    price: '13,900',
                    camera: '20',
                    brand: 'vivo',
                    rating: 5,
                    storage: 500
                },
                {
                    id: 11,
                    name: 'OPPO F21 Pro 5G',
                    img: 'https://m.media-amazon.com/images/I/71XcMiRMC1L._AC_UL640_FMwebp_QL65_.jpg',
                    offer: 30,
                    price: '26,900',
                    camera: '90',
                    brand: 'oppo',
                    rating: 5,
                    storage: 500
                }],
                message:null
        }
    },
        methods: {
            date(){
                this.message=Date()
            }
        }

    }







</script>
<style>
.header {
    font-size: 50px;
    font-weight: bolder;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.card {
    height: 90px;
}

.card-para {
    padding-bottom: 5px;
}

/* .card-title1 {
    text-align: center;
    height: 90px;
} */
.box1{
    height: 90px;
}
.box{
height: 90px;
}

</style>