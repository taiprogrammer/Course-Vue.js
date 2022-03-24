const app = Vue.createApp({
  data() {
    return {
      apple: new Object(),
      google: new Object(),
    };
  },
  mounted() {
    fetch("https://api.origamid.dev/stock/googl/quote")
      .then((response) => response.json())
      .then((google) => (this.google = google));

    fetch("https://api.origamid.dev/stock/aapl/quote")
      .then((response) => response.json())
      .then((apple) => (this.apple = apple));
  },
});

app.mount("#app");
