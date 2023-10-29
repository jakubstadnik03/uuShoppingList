//@@viewOn:imports
import { createVisualComponent, Utils } from "uu5g05";
import Uu5Elements from "uu5g05-elements";
import Plus4U5 from "uu_plus4u5g02";
import Plus4U5App from "uu_plus4u5g02-app";
import Config from "./config/config.js";
import Home from "../routes/home.js";
import ListProvider from "../bricks/list-provider.js";
//@@viewOff:imports

//@@viewOn:constants
const InitAppWorkspace = Utils.Component.lazy(() => import("../routes/init-app-workspace.js"));
const ControlPanel = Utils.Component.lazy(() => import("../routes/control-panel.js"));
const ShoppingListView = Utils.Component.lazy(() => import("../routes/shopping-list-view.js"));

const ROUTE_MAP = {
  "": { redirect: "home" },
  home: (props) => <Home {...props} />,
  "sys/uuAppWorkspace/initUve": (props) => <InitAppWorkspace {...props} />,
  controlPanel: (props) => <ControlPanel {...props} />,
  "*": () => (
    <Uu5Elements.Text category="story" segment="heading" type="h1">
      Not Found
    </Uu5Elements.Text>
  ),
};
for (let i = 1; i <= 10; i++) {
  ROUTE_MAP[`shopping-list/${i}`] = (props) => (
    <ListProvider>
      {({ shoppingLists }) => {
        // Find the shopping list with the matching ID
        const shoppingList = shoppingLists.find((list) => list.id === i);

        return shoppingList ? (
          <ShoppingListView {...props} shoppingList={shoppingList} />
        ) : (
          // Render a message if the shopping list with the provided ID doesn't exist
          <Uu5Elements.Text category="error" segment="content">
            Shopping List with ID {i} not found.
          </Uu5Elements.Text>
        );
      }}
    </ListProvider>
  );
}
//@@viewOff:constants

//@@viewOn:css
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const Spa = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Spa",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render() {
    //@@viewOn:private
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    return (
      <Plus4U5.SpaProvider initialLanguageList={["en", "cs"]}>
        <Uu5Elements.ModalBus>
          <Plus4U5App.Spa routeMap={ROUTE_MAP} />
        </Uu5Elements.ModalBus>
      </Plus4U5.SpaProvider>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { Spa };
export default Spa;
//@@viewOff:exports
