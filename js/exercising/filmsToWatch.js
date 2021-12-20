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
      if (this.enteredValue === "") {
        alert("You can't add an empty value");
      } else {
        this.films.push(this.enteredValue);
        this.enteredValue = "";
        this.added = true;
      }

      console.log(this.added);
    },

    resetList() {
      this.films = [];
      this.added = false;
      console.log(this.added);
    },
  },
});

app.mount("#films");
