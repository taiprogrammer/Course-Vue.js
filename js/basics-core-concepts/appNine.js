const app = Vue.createApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
      highlited: "palevioletred",
      notHighlited: "#ccc",
    };
  },

  methods: {
    boxSelected(box) {
      if (box === "A") {
        this.boxASelected = true;
        this.boxBSelected = false;
        this.boxCSelected = false;
      } else if (box === "B") {
        this.boxBSelected = true;
        this.boxASelected = false;
        this.boxCSelected = false;
      } else if (box === "C") {
        this.boxCSelected = true;
        this.boxBSelected = false;
        this.boxASelected = false;
      }
    },
  },

  computed: {
    boxAClasses() {
      return { active: this.boxASelected };
    },

    boxBClasses() {
      return { active: this.boxBSelected };
    },

    boxCClasses() {
      return { active: this.boxCSelected };
    },
  },
});

app.mount("#styling");
