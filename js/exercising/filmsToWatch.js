const app = Vue.createApp({
  data() {
    return {
      films: [],
      added: false,
      enteredValue: "",
    };
  },

  methods: {
    addFilm() {
      this.films.push(this.enteredValue);
      this.enteredValue = "";
      this.added = true;
      console.log(this.added);
    },

    resetList() {
      this.films = [];
      this.added = false;
    },
  },
});

app.mount("#films");
