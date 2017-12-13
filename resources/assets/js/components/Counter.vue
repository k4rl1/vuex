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
        data() {
            return {
                count: 0
            }
        },
        methods: {
            increment() {
                this.count++;
            }
        }
    }
</script>