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
    };
  },

  methods: {
    convertUsdToBrl() {
      if (this.enteredValueUsd.length < 0) {
        alert("Please enter a value");
      } else {
        this.resultOne = (this.enteredValueUsd * 5.72).toFixed(2);
      }
    },

    convertBrlToUsd() {
        if (this.enteredValueBrl.length < 0) {
            alert("Please enter a value");
        }
        else {
            this.resultTwo = (this.enteredValueBrl / 5.72).toFixed(2)
        }
    },

    convertCadToBrl() {
        if (this.enteredValueCad < 0) {
            alert("Please enter a value");
        }
        else {
            this.resultThree = (this.enteredValueCad * 4.45).toFixed(2);
        }
    }
  },
});

app.mount(".boxes");
