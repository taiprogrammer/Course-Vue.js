const app = Vue.createApp({
    data() {
        return {
            users = Array,
            user = Object
        }
    },
    methods: {
        signUp() {
            console.log('funcionando')
        }
    }
})

app.mount(".signUp");