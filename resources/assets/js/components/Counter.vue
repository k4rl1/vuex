<template>
    <div class="container">
        {{count}} the square root of this number is {{sqrt}}
        <p>
            <input type="text" v-model="msg">{{msg}}
        </p>
        <p>
            <button @click="msgIncrement">+1</button>
            <button @click="decrement">-1</button>
        </p>
    </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex';
    export default {
        computed: {
            count() {
                return this.$store.state.counter.count;
            },
            sqrt() {
                return this.$store.getters.sqrt;
            },
            msg: {
                get() {
                    return this.$store.state.counter.msg;
                },
                set(value) {
                    this.$store.commit('msg', value);
                }
            }
        },
        methods: {
            increment() {
                console.log(this.$store);
                this.$store.dispatch('increment');
            },
            decrement() {
                var vue = this;
                vue.$store.dispatch('decrement').then(function(response) {
                    vue.$store.commit('msg', response);
                });
            },
            msgIncrement() {
                this.$store.dispatch('msgIncrement');
            }
        }
    }
</script>