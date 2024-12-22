const state = {
  // 是否显示top栏
  isShow: false,
};
const mutations = {
  CHANGESHOW(state, value) {
    state.isShow = value;
  },
};
const actions = {};
const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
};
