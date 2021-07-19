export const namespaced = true;

export const state = {
  user: null,
};

export const mutations = {
  SET_USER(state, payload) {
    state.user = payload;
  },
};

export const getters = {};
