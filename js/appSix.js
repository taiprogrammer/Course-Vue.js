const app = Vue.createApp({
    data() {
        return {}
    },
    methods: {
        submitForm() {
            alert('Submitted')
        }
    }
})

app.mount('#form')