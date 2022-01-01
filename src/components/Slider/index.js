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
    };
  },
  mounted() {
    this.slider = this.$refs["slider"];
  },
  methods: {
    sliderDrag(e) {
      console.log(e);
    },
    end() {
      this.isDown = false;
    },

    start(e) {
      this.isDown = true;

      this.startX = e.pageX;
      this.scrollLeft = this.slider.scrollLeft;
    },

    move(e) {
      if (!this.isDown) return;
      e.preventDefault();
      const x = e.pageX;
      const dist = x + this.startX;
      this.marginStyle["margin-left"] = this.scrollLeft + dist;
      console.log(this.marginStyle);
    },
  },
};
