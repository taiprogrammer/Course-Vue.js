const app = Vue.createApp({
  data() {
    return {
      films: [],
      enteredValue: "",
      object: {"name": "Taiza", age: "21"},
      products: [
        {
          "id": 1,
          "name": "Secador",
          "price": 70.0,
          "stock": 200
        },
        {
          "id": 2,
          "name": "Chapinha",
          "price": 70.0,
          "stock": 200
        },
      ],
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
    remover(index) {
      this.products.splice(index, 1);
      // this.products[index].name = "";
    },
    removeFilm(index) {
      this.films.splice(index, 1);
    },
    resetList() {
      this.films = [];
    },
  },
});

app.mount("#films");
