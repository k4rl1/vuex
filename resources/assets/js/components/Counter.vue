<template>
    <div class="container">
        {{count}} the square root of this number is {{sqrt}}
        <p>
            <input type="text" :value="msg" @input="updateMsg">{{msg}}
        </p>
        <p>
            <button @click="increment">+1</button>
            <button @click="decrement">-1</button>
        </p>
    </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex';
    export default {
        computed: {
            count() {
                return this.$store.state.count;
            },
            sqrt() {
                return this.$store.getters.sqrt;
            },
            msg() {
                return this.$store.state.msg;
            }
        },
        methods: {
            increment() {
                this.$store.dispatch('increment');
            },
            decrement() {
                this.$store.dispatch('decrement');
            },
            updateMsg(e) {
                this.$store.dispatch('increment', e.target.value);
            }
        }
    }
</script>