import SliderComponent from "../../components/Slider/index.vue";
import Loader from "../../components/Loader/index.vue";
export default {
  components: {
    SliderComponent,
    Loader,
  },
  data() {
    return {
      activeCat: "place",
      filteredTravel: null,
      change: false,
      searchObj: {
        placeHolder: "search",
        value: "",
      },
      travels: null,
      categories: null,
      showLoader: true,
    };
  },
  methods: {
    activeCategoryClass(cat) {
      this.activeCat = cat.text;
      this.change = true;
      this.generateTravels();
    },
    generateTravels() {
      let data = [];
      this.filteredTravel = null;
      this.travels.map((tr) => {
        if (tr.category === this.activeCat) {
          data.push(tr);
        }
      });
      this.filteredTravel = data;
    },
    search() {
      alert(this.searchObj.value);
    },
  },
  computed: {
    getAllData() {
      return this.$store.getters["getAllTravels/travels"]();
    },
    getAllCategories() {
      return this.$store.getters["getAllTravels/categories"]();
    },
  },
  created() {
    this.$store.dispatch("getAllTravels/getAllData", {});
    this.$store.dispatch("getAllTravels/getAllCategories", {});
  },
  watch: {
    getAllData(newVal) {
      this.showLoader = false;
      this.travels = newVal.data;
      this.generateTravels();
    },
    getAllCategories(newVal) {
      this.categories = newVal.data;
    },
  },
};
