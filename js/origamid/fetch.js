const app = Vue.createApp({
  data() {
    return {
      apple: new Object(),
      google: new Object(),
      fedido: false,
      taiza: false,
    };
  },
  mounted() {
    console.log(this.fedido);
    fetch("https://api.origamid.dev/stock/googl/quote")
      .then((response) => response.json())
      .then((google) => (this.google = google));

    fetch("https://api.origamid.dev/stock/aapl/quote")
      .then((response) => response.json())
      .then((apple) => (this.apple = apple));
  },
  methods: {
    setSmell() {
      if (!this.fedido) {
        this.fedido = true;
      } else {
        this.fedido = false;
      }
    },
    setSmellTaiza() {
      if (!this.taiza) {
        this.taiza = true;
      } else {
        this.taiza = false;
      }
    },
  },
});

app.mount("#app");
