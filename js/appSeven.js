const app = Vue.createApp({
    data() {
        return {
            outputTyped: "",
            confirmedOutput: ""
        }
    },
    methods: {
        showAlert() {
            alert('Hello there!')
        },

        output(event) {
            this.outputTyped = event.target.value;
        },
        outputEnterPressed(event) {
            this.outputTyped = event.target.value;
            this.confirmedOutput = this.outputTyped;
        }
    }
})

app.mount("#assignment")