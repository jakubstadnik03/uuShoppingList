import UuShoppingList from "uu_shopping_list-hi";
import { testProperties } from "uu5g05-test";

const CONFIG = {
  props: {
    // left: {
    //   values: ["Left as text", <span key="l">Left as JSX</span>, 0],
    // },
  },
  requiredProps: {
    // children: "Children content",
  },
};

describe(`UuShoppingList.Bricks.Test.Tile`, () => {
  testProperties(UuShoppingList.Bricks.Test.Tile, CONFIG);
});
