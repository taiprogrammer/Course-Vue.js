const app = Vue.createApp({
  data() {
    return {
      enteredValue: "",
      secondEnteredValue: "",
      sumResult: "",
      subtractResult: "",
      numberTyped: "",
      nameTyped: "",
      lastNameTyped: "",
      confirmedName: "",
      //fullname: ""
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

    // outputFullName() {
    //   if (this.nameTyped === '') {
    //     return ''
    //   } else {
    //     return this.nameTyped.concat(" ").concat("Marques")
    //   }
    // },

    confirmInput() {
      this.confirmedName = this.nameTyped;
    },

    resetInput() {
      this.nameTyped = "";
      this.lastNameTyped = "";
    },
  },

  computed: {
    fullName() {
      console.log("Running again");
      if (this.nameTyped === "" && this.lastNameTyped === "") {
        return "";
      } else {
        return this.nameTyped.concat(" ").concat(this.lastNameTyped);
      }
    },
  },

  watch: {
    // nameTyped(value) {
    //   if (value === '') {
    //     this.fullName = ''
    //   } else {
    //     this.fullName = value.concat(" ").concat(this.lastNameTyped)
    //   }
    // },
    // lastNameTyped(value) {
    //   if (value === '') {
    //     this.fullname = ''
    //   } else {
    //     this.fullName = this.nameTyped.concat(" ").concat(value)
    //   }
    // }
    // nameTyped(newValue, oldValue) {...}
  },
});

app.mount(".section-sum-subtract");
