const app = Vue.createApp({
  data() {
    return {
      goal: "Finish the course and learn Vue!",
      notGoal: "Master Vue and building amazing apps!",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        console.log(randomNumber);
        return this.goal;
      } else {
        console.log(randomNumber);
        return this.notGoal;
      }
    },
  },
});

const appTwo = Vue.createApp({
  data() {
    return {
      yourGoal: "You have to finish the course",
    };
  },
});

app.mount(".user-goal");

appTwo.mount(".user-goal-two");

// items: [
//     { courseGoal: 'Finish the course and learn Vue!' },
//     { courseGoal: 'Finish the course of Kotlin!' },
//     { courseGoal: 'Finish the course of Modern Web!' },
//     { courseGoal: 'Finish the course of React!' },
//     { courseGoal: 'Finish the course of React Native!' }
// ],
