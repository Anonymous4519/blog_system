import Mock from "mockjs";

import headList from "./headList.json";

Mock.mock("/mock/headList", {
  code: "200",
  data: headList,
});
