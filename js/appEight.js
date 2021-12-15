const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            state: "",
            notThereYet: "Not there yet",
            tooMuch: "Too much"
        }
    },

    methods: {

        add(number) {
            this.state = this.counter += number
            console.log(this.state)
            if (this.state < 37) {
                return this.state = this.notThereYet
            } else if (this.state > 37) {
                return this.state = this.tooMuch
            } else {
                return this.state
            } 
        },
    },

    watch: {
        state() {
            const that = this;
            setTimeout(function() {
                that.state = 0
            }, 5000)
        }
    }
})

app.mount("#assignment")