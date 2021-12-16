const app = Vue.createApp({
  data() {
    return {
      enteredValue: "",
      enteredValueTwo: "",
      style: false,
    };
  },
  methods: {
    toggle() {
      if (this.enteredValueTwo != "") {
        this.style = true;
      } else {
        this.style = false;
      }
    },
  },

  computed: {
    // styleClass() {
    //     { user1: this.style }
    // }
  },
});

app.mount("#assignment");
