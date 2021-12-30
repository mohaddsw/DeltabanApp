import _nav from "../_nav";
export default {
  name: "TheCountainer",
  data() {
    return {
      activeClass: "Home",
    };
  },
  computed: {
    nav() {
      return _nav;
    },
  },
  methods: {
    activeClassFunc(item) {
      this.activeClass = item.name;
    },
  },
};
