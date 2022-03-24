const app = Vue.createApp({
  data() {
    return {
      kilometers: 0,
      meters: 0,
    };
  },
  watch: {
    kilometers(value) {
      Number((this.kilometers = value));
      Number((this.meters = value * 1000));
    },
    meters(value) {
      Number((this.meters = value));
      Number((this.kilometers = value / 1000));
    },
  },
});

app.mount("#app");
