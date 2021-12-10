const app = Vue.createApp({
  data() {
    return {
      name: "Morgana",
      age: "My age is ".concat(21),
      ageInFiveYears: "My age in five years will be: ".concat(26),
      image: "../assets/morgana.png",
      enteredValue: "",
    };
  },
  methods: {
    showFavoriteNumber() {
      const randomNumber = Math.random();
      if (randomNumber >= 0 && randomNumber <= 5) {
        return `${randomNumber.toFixed(2)}`;
      } else {
        return "This is not your favorite number";
      }
    },

    changeName() {
      this.name = this.enteredValue;

      if (this.image === "../assets/morgana.png") {
        this.image = "../assets/lux.jpg";
      } else {
        this.image = "../assets/morgana.png";
      }
    },
  },
});

app.mount(".my-info");

//https://i.pinimg.com/originals/59/44/0b/59440b32af377c7c14f7234526a5f2f9.png
