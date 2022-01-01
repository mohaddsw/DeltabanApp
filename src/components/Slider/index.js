export default {
  data() {
    return {
      isDown: false,
      startX: null,
      scrollLeft: null,
      slider: null,
      marginStyle: {
        "margin-left": null,
      },
      position: 0,
    };
  },
  props: ["filteredData", "change"],
  mounted() {
    this.slider = this.$refs["slider"];
  },
  computed: {},
  methods: {
    move(e, pos, count = null) {
      let w = count * 200;
      if (pos === "next") {
        if (this.position < w) {
          this.position -= 200;
        }
        if (this.position * -1 === w) {
          this.position = 0;
        }
      } else {
        if (this.position < 0) {
          this.position += 200;
        }
      }
      this.marginStyle["margin-left"] = this.position + "px";
    },
  },
  watch: {
    change(val) {
      if (val === true) {
        this.marginStyle["margin-left"] = "0px";
        this.position = 0;
        this.$emit("changeCat");
      }
    },
  },
};
