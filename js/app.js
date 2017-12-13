new Vue({
    el: '#app',
    computed: {
        count () {
            return store.state.count;
        }
    },
    methods: {
        increment () {
            store.commit('increment');
        },
        decrement () {
            store.commit('decrement');
        }
    }
});