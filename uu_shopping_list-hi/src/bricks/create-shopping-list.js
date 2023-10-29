//@@viewOn:imports
import { createVisualComponent, Utils, Content } from "uu5g05";
import { Modal, Box, Line, Text, DateTime } from "uu5g05-elements";
import Config from "./config/config.js";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
  main: () => Config.Css.css({}),
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const CreateShoppingList = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "CreateShoppingList",
  nestingLevel: ["areaCollection", "area"],
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const { children } = props;
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props, Css.main());
    const currentNestingLevel = Utils.NestingLevel.getNestingLevel(props, CreateShoppingList);

    return (
      <Modal onClose={props.onClose} actionList={getActions()} open>
        {(modal) => <div className={Css.content()}>Ahoj</div>}
      </Modal>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { CreateShoppingList };
export default CreateShoppingList;
//@@viewOff:exports
