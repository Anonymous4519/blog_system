// 接口统一管理
import mockAxios from "@/utils/mockAxios";

export const reqGetHeadList = () =>
  mockAxios({
    url: "/headList",
    method: "get",
  });
