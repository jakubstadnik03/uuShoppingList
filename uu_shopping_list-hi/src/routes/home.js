//@@viewOn:imports
import { Utils, createVisualComponent, useState } from "uu5g05";
import { withRoute } from "uu_plus4u5g02-app";
import Config from "./config/config.js";
import ShoppingList from "../bricks/shopping-list.js";
import ListProvider from "../bricks/list-provider.js";
import RouteBar from "../core/route-bar.js";

//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
  icon: () =>
    Config.Css.css({
      fontSize: 48,
      lineHeight: "1em",
    }),
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

let Home = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Home",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props);
    return (
      <>
        <RouteBar />

        <div>
          <h2>My shopping lists</h2>
          <ListProvider>
            {({ shoppingLists }) => {
              // Filter the shoppingLists to include only those with ownerId === 1
              const shoppingListsOwnerId1 = shoppingLists.filter((list) => list.ownerId === 1);

              return <ShoppingList data={shoppingListsOwnerId1} />;
            }}
          </ListProvider>
        </div>
        <div>
          <h2>Shopping lists that I have access to</h2>
          <ListProvider>
            {({ shoppingLists }) => {
              // Filter the shoppingLists to include only those with ownerId === 1
              const shoppingListsOwnerId1 = shoppingLists.filter((list) => list.ownerId !== 1);

              return <ShoppingList data={shoppingListsOwnerId1} />;
            }}
          </ListProvider>
        </div>
      </>
    );
    //@@viewOff:render
  },
});

Home = withRoute(Home, { authenticated: true });

//@@viewOn:exports
export { Home };
export default Home;
//@@viewOff:exports
