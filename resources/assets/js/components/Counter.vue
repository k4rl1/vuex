<template>
    <div class="container">
        {{count}}
        <p>
            <button @click="increment">+1</button>
        </p>
    </div>
</template>

<script>
    export default {
        computed: {
            count() {
                return this.$store.state.count;
            }
        },
        methods: {
            increment() {
                this.$store.commit('increment');
            }
        }
    }
</script>