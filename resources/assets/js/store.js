export default {
    state: {
        count: 0,
        msg: "hello you"
    },
    getters: {
        sqrt(state) {
            return Math.sqrt(state.count);
        }
    },
    actions: {
        increment({commit, state}, text) {
            commit('increment');
            commit('msg', text);
        },
        decrement(context) {
            setTimeout(() => {
                context.commit('decrement');
            }, 2000);
        }
    },
    mutations: {
        increment(state) {
            state.count++;
        },
        decrement(state) {
            state.count--;
        },
        msg(state, msg) {
            state.msg = msg;
        }
    }
}