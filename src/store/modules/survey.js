import RS from "../../data/Result";

const state = {
  results: []
};

const mutations = {
  setResult(state, results) {
    state.results = results;
  }
};

const actions = {
  dbInit({ commit }) {
    const data = RS;
    commit("setResult", data);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
