const app = Vue.createApp({
  data() {
    return {
      enteredValue: "",
      secondEnteredValue: "",
      sumResult: "",
      subtractResult: "",
      numberTyped: "",
      nameTyped: "",
      confirmedName: "",
    };
  },
  methods: {
    sum(number) {
      number = Number(this.enteredValue);
      this.sumResult = number + 5;
      console.log(number + 5);
    },

    subtract(number) {
      number = Number(this.enteredValue);
      this.subtractResult = number - 5;
      console.log(number - 5);
    },

    setNumber(event) {
      // this.numberTyped = this.enteredValue
      this.numberTyped = event.target.value;
    },

    tellMeName(event, lastName) {
      this.nameTyped = event.target.value;
    },

    outputFullName() {
      console.log("Running again")
      if (this.nameTyped === '') {
        return ''
      } else {
        return this.nameTyped.concat(" ").concat("Marques")
      }
    },

    confirmInput() {
      this.confirmedName = this.nameTyped;
    },

    resetInput() {
      this.nameTyped = ''
    }
  },
});

app.mount(".section-sum-subtract");
