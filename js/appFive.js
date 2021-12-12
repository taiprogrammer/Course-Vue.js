const app = Vue.createApp({
    data() {
        return {
            enteredValue: "",
            sumResult: "",
            subtractResult: ""
        }
    },
    methods: {
        sum(number) {
            number = Number(this.enteredValue)
            this.sumResult = number + 5
            console.log(number + 5)
        },

        subtract(number) {
            number = Number(this.enteredValue)
            this.subtractResult = number - 5
            console.log(number - 5)
        }
    },
})

app.mount('.section-sum-subtract')