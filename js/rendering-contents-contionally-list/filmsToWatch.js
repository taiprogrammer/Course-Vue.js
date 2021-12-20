const app = Vue.createApp({
  data() {
    return {
      films: [],
      enteredValue: "",
    };
  },

  methods: {
    addFilm() {
      if (this.enteredValue === "") {
        alert("You can't add an empty value");
      } else {
        this.films.push(this.enteredValue);
        this.enteredValue = "";
      }
    },

    resetList() {
      this.films = [];
    },
  },
});

app.mount("#films");
