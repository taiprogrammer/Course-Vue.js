const app = Vue.createApp({
  data() {
    return {
      enteredValue: "",
      logged: "",
      confirmedName: "",
    };
  },
  methods: {
    submitForm() {
      alert("Olá ".concat(this.enteredValue));
      console.log("Submitted");
    },
    confirmInput() {
      this.logged = this.enteredValue = this.confirmedName;
    },
  },
});

app.mount("#form");
