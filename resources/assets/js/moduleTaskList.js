export default {
    namespaced: true,
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
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    commit('increment');
                    resolve("incremnted");
                }, 1000);
            });
        },
        decrement({commit}) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    commit('decrement');
                    resolve("count was decremented");
                }, 1000);
            });
        },
        async msgIncrement({commit, dispatch}) {
            commit('msg', await dispatch('increment'));
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