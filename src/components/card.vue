<template>
    <div>
        <div class="row">
            <div class="col-12 col-sm-6 col-md-2">
                <p>image</p>
                <img src="https://www.peta.org/wp-content/uploads/2016/07/iStock_50573756_Zelenenka-768x516.jpg"
                    class="card-img-top" width="500px" alt="...">
            </div>
            <div class="col-12 col-sm-6 col-md-4">
                <p>desc</p>
                <p>Rabbits have a specialized digestive system. Their distinctive ability to process fiber and nutrients
                    makes them adaptable to many different environments, but their unique digestive systems mean that
                    their guardians must be extra-cautious when feeding them.
                </p>
            </div>
            <div class="col-12 col-sm-6 col-md-2">
                <p> price</p>
                <p>$499</p>
            </div>
            <div class="col-12 col-sm-6 col-md-2">
                <p>quantity</p>
                <div class="container">
                    <button @click="decrement()">-</button>
                    <input :value="amount" class="in" />
                    <button @click="increment()">+</button>
                </div>
            </div>
            <div class="col-12 col-sm-6 col-md-2">
                <p>total</p>
                <p>$499</p>
            </div>
            <hr>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            amount: 0,
        };
    },
    methods: {
        increment() {
            this.amount++;
        },

        decrement() {
            this.amount--;
        },
    },
}
</script>
<style>
.in {
    width: 30px;
}
</style>
