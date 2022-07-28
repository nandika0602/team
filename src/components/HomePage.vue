<template>
    <div class="homePage">
        <div>

            <NavBar></NavBar>

        </div>
        <div class="row">
            <div class="col-12 col-sm-6 col-md-2" id="one">





            </div>
            <br>
            <div class="col-12 col-sm-6 col-md-10">
                <i class="bi bi-search"></i>
                <div class="form-group has-search">
                    <span class="fa fa-search form-control-feedback"></span>
                    <input type="text" class="form-control" placeholder="Search">
                </div>
                <div class="card" v-for="item in dummyData" v-bind:key="'item.id'"
                    style="display:flex; flex-wrap: wrap; flex-direction: row;">
                    <div class="card" style="width: 18rem; ">
                        <img :src="item.images[0]" class="card-img-top" width="500px" alt="...">
                        <div class="card-body">
                            <button type="button" class="btn btn-danger w-100">Offer</button>
                            <button type="submit" class="add"> Add to cart

                            </button>
                            <br>
                            <br>

                            <h5 class="card-title">{{ item.title }}</h5>
                            <span class="discount">Discount Percentage: {{ item.discountPercentage }}</span>

                        </div>
                    </div>

                    <!-- <img :src="item.images[0]" alt="Image"> -->
                    <!-- <h1>{{ item.title }}</h1> -->
                    <!-- <p>Price: ${{ item.price }}</p> -->
                    <!-- <p>Description: {{ item.description }}</p> -->
                    <!-- <p>Rating: {{ item.rating }}</p> -->
                    <!-- <span class="discount">Discount Percentage: {{ item.discountPercentage }}</span> -->
                    <!-- <p>Brand: {{ item.brand }}</p> -->
                    <!-- <p>Category: {{ item.category }}</p> -->



                </div>
            </div>
        </div>
    </div>
</template>

<script>

import NavBar from "./NavBar.vue";
import { mapGetters } from 'vuex'
export default {
    name: 'HomePage',
    components: {
        NavBar
    },
    data() {
        return {
            product: [],
            dummyData: [],
            users1: []
        }
    },

    computed: {
        ...mapGetters(['actionToGetProductList', 'getProductList']),

    },
    beforeMount: function () {
        this.$store.dispatch('actionToGetProductList', {
            success: (res) => {
                this.dummyData = res['products']
            }
        })
        this.product = this.getProductList
        console.log(this.product)
    }
}


</script>

<style>
.row {
    /* margin-top: 30px; */
    z-index: -1;
}

#one {
    background-color: antiquewhite;
}

.image {

    margin-left: 35%;
    margin-top: 2%;
}

.card-title {
    text-align: center;
}

.add {
    border: 2px solid black;
    /* margin-left: 45px; */
    margin-top: 5px;
    border-radius: 8px;
    padding: 6px;
    height: 40px;
    /* width: 120px; */
    width: 100%;
}

span {
    text-align: center;
    margin-left: 30px;

}
</style>