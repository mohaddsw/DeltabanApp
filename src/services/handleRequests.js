import axios from "axios";
const travels = [
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
];
const categories = [
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
];

export async function handleGetTravelsRequest(url) {
  let result = {};
  try {
    await axios
      .get(url)
      .then((res) => {
        if (res.status === 200) {
          result = {
            data: travels,
            type: true,
          };
        }
      })
      .catch((err) => {
        throw `${err}`;
      });
  } catch (error) {
    result = {
      message: error,
      type: false,
    };
  }
  return result;
}
export async function handleGetCategoriesRequest(url) {
  let result = {};
  try {
    await axios
      .get(url)
      .then((res) => {
        if (res.status === 200) {
          result = {
            data: categories,
            type: true,
          };
        }
      })
      .catch((err) => {
        throw `${err}`;
      });
  } catch (error) {
    result = {
      message: error,
      type: false,
    };
  }
  return result;
}
