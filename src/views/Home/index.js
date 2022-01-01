import SliderComponent from "../../components/Slider/index.vue";
export default {
  components: {
    SliderComponent,
  },
  data() {
    return {
      travels: [
        {
          id: 1,
          category: "place",
          image: "1.jpeg",
          name: "maldive",
        },
        {
          id: 2,
          category: "hotel",
          image: "3.jpeg",
          name: "maldive",
        },
        {
          id: 3,
          category: "hotel",
          image: "4.jpeg",
          name: "maldive",
        },
        {
          id: 4,
          category: "food",
          image: "5.jpeg",
          name: "maldive",
        },
        {
          id: 5,
          category: "place",
          image: "2.jpeg",
          name: "maldive",
        },
        {
          id: 6,
          category: "food",
          image: "1.jpeg",
          name: "maldive",
        },
        {
          id: 7,
          category: "flight",
          image: "2.jpeg",
          name: "maldive",
        },
        {
          id: 8,
          category: "flight",
          image: "5.jpeg",
          name: "maldive",
        },
        {
          id: 9,
          category: "place",
          image: "3.jpeg",
          name: "maldive",
        },
        {
          id: 10,
          category: "flight",
          image: "4.jpeg",
          name: "maldive",
        },
        {
          id: 11,
          category: "food",
          image: "1.jpeg",
          name: "maldive",
        },
        {
          id: 12,
          category: "place",
          image: "2.jpeg",
          name: "maldive",
        },
      ],
      categories: [
        {
          value: 1,
          text: "place",
          icon: "fas fa-place-of-worship",
        },
        {
          value: 2,
          text: "flight",
          icon: "fas fa-plane",
        },
        {
          value: 3,
          text: "hotel",
          icon: "fas fa-hotel",
        },
        {
          value: 4,
          text: "food",
          icon: "fas fa-concierge-bell",
        },
      ],
      activeCat: "place",
      filteredTravel: null,
      change: false,
      searchObj: {
        placeHolder: "search",
        value: "",
      },
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
  mounted() {
    this.generateTravels();
  },
};
