import {
  SET_ALL_DATA,
  SET_ERROR_MESSAGE,
  SET_ALL_CATEGORIES,
} from "../mutesionTypes";
import {
  handleGetTravelsRequest,
  handleGetCategoriesRequest,
} from "../../services/handleRequests";

export const state = {
  travels: null,
  categories: null,
  errorMessag: null,
};
export const getters = {
  travels: (state) => () => state.travels,
  categories: (state) => () => state.categories,
  errorMessag: (state) => state.errorMessag,
};
export const mutations = {
  [SET_ALL_DATA](state, { value }) {
    state.travels = value;
  },
  [SET_ERROR_MESSAGE](state, { value }) {
    state.errorMessag = value;
  },
  [SET_ALL_CATEGORIES](state, { value }) {
    state.categories = value;
    console.log(state.categories);
  },
};
export const actions = {
  async getAllData({ state, commit }, { value }) {
    console.log(state);
    const url = `${process.env.VUE_APP_TRAVEL}posts`;
    let result = await handleGetTravelsRequest(url);
    value = result;
    commit(SET_ALL_DATA, { value });
  },
  async getAllCategories({ state, commit }, { value }) {
    console.log(state);
    const url = `${process.env.VUE_APP_TRAVEL}posts`;
    let result = await handleGetCategoriesRequest(url);
    value = result;
    commit(SET_ALL_CATEGORIES, { value });
  },
};
