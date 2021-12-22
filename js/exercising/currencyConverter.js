const app = Vue.createApp({
  data() {
    return {
      enteredValueUsd: "",
      enteredValueBrl: "",
      enteredValueCad: "",
      enteredValueBrlToCad: "",
      enteredValueEur: "",
      enteredValueBrlToEur: "",
      resultOne: "",
      resultTwo: "",
      resultThree: "",
      resultFour: "",
      resultFive: "",
      resultSix: ""
    };
  },

  methods: {
    convertUsdToBrl() {
      if (this.enteredValueUsd.length <= 0) {
        alert("Please enter a value");
      } else {
        this.resultOne = 'R$ '.concat((this.enteredValueUsd * 5.72).toFixed(2));
      }
    },

    convertBrlToUsd() {
      if (this.enteredValueBrl.length <= 0) {
        alert("Please enter a value");
      } else {
        this.resultTwo = '$ '.concat((this.enteredValueBrl / 5.72).toFixed(2));
      }
    },

    convertCadToBrl() {
      if (this.enteredValueCad <= 0) {
        alert("Please enter a value");
      } else {
        this.resultThree = "R$ ".concat(
          (this.enteredValueCad * 4.45).toFixed(2)
        );
      }
    },

    convertBrlToCad() {
      if (this.enteredValueBrlToCad <= 0) {
        alert('Please enter a value');
      }
      else {
        this.resultFour = 'C$ '.concat((this.enteredValueBrlToCad / 4.45).toFixed(2))
      }
    },

    convertEurToBrl() {
      if (this.enteredValueEur <= 0) {
        alert('Please enter a value');
      }
      else {
        this.resultFive = 'R$ '.concat((this.enteredValueEur * 6.43).toFixed(2));
      }
    },

    convertBrlToEur() {
      if (this.enteredValueBrlToEur <= 0) {
        alert('Please enter a value');
      }
      else {
        this.resultSix = '€ '.concat((this.enteredValueBrlToEur / 6.43).toFixed(2))
      }
    }
  },
});

app.mount(".boxes");
