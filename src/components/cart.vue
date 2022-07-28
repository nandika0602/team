<template>
    <div class="cart">
        <NavBar></NavBar>
        <div class="image">
            <div class="card" style="width: 18rem;">
                <img src="https://www.peta.org/wp-content/uploads/2016/07/iStock_50573756_Zelenenka-768x516.jpg"
                    class="card-img-top" width="500px" alt="...">
                <div class="card-body">
                    <button type="button" class="btn btn-danger w-100">Offer</button>
                    <button type="submit" class="add"> Add to cart

                    </button>
                    <br>
                    <br>

                    <h5 class="card-title">Card title</h5>
                    <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
                    <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
                </div>
            </div>
        </div>
    </div>

</template>
<script>

import NavBar from "./NavBar.vue";
export default {
    components: {
        NavBar
    },

    data() {
        return {

        }

    }
}


</script>


<style scoped>
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
</style>