const app = Vue.createApp({
    data() {
        return {
            name: 'Morgana',
            age: 'My age is '.concat(21),
            ageInFiveYears: 'My age in five years will be: '.concat(26),
            image: 'https://i.pinimg.com/originals/59/44/0b/59440b32af377c7c14f7234526a5f2f9.png',
            enteredValue: ""
        }
    },
    methods: {
        showFavoriteNumber() {
            const randomNumber = Math.random();
            if (randomNumber >= 0 && randomNumber <= 5) {
                return `${randomNumber.toFixed(2)}`
            } else {
                return 'This is not your favorite number'
            }
        },

        changeName() {
            this.name = this.enteredValue

            if (this.image === 'https://i.pinimg.com/originals/59/44/0b/59440b32af377c7c14f7234526a5f2f9.png')  {
                this.image = 'https://criticalhits.com.br/wp-content/uploads/2021/03/Lux_16-910x537.jpg'
            } else {
                this.image = 'https://i.pinimg.com/originals/59/44/0b/59440b32af377c7c14f7234526a5f2f9.png'
            }
            
        }
    }
})

app.mount(".my-info")