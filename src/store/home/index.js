import { reqGetHeadList } from "@/api";

const state = {
  // 是否显示top栏
  isShow: false,
  // 初始化---headList数据
  headList: [],
};
const mutations = {
  CHANGESHOW(state, value) {
    state.isShow = value;
  },

  GETHEADLIST(state, value) {
    state.headList.unshift(value);
  },
};
const actions = {
  // 发请求获取headlist数据
  async getHeadList(state) {
    const result = await reqGetHeadList();
    if (result.code === "200") {
      state.commit("GETHEADLIST", result.data);
    }
  },
};
const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
};
