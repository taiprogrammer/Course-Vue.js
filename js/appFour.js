const app = Vue.createApp({
  data() {
    return {
      counter: 0
    };
  },
  methods: {
    addCounter() {
      this.counter ++;
    },

    removeCounter() {
      if (this.counter <= 0) {
        this.counter = 0;
      } else {
        this.counter--;
      }
      
    },
  },
});

app.mount("#events");
