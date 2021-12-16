const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    addCounter() {
      this.counter++;
    },

    removeCounter() {
      if (this.counter <= 0) {
        this.counter = 0;
      } else {
        this.counter--;
      }
    },
  },

  watch: {
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      //  const that = this
      //  setTimeout(function() {
      //   that.counter = 0
      //  }, 2000)
      }
    }
  }
});

app.mount("#events");
