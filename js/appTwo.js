// items: [
            //     { courseGoal: 'Finish the course and learn Vue!' },
            //     { courseGoal: 'Finish the course of Kotlin!' },
            //     { courseGoal: 'Finish the course of Modern Web!' },
            //     { courseGoal: 'Finish the course of React!' },
            //     { courseGoal: 'Finish the course of React Native!' }
            // ],
const app = Vue.createApp({
    data() {
        return {
            goal: 'Finish the course and learn Vue!',
            notGoal: 'You finished the course and learned Vue, you are a Master Vue!'
            // vueLink: 'https://vuejs.org/'
        }
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                console.log(randomNumber)
                return this.goal
            } else {
                console.log(randomNumber)
                return this.notGoal
            }
        }
    }
});

app.mount('.user-goal');