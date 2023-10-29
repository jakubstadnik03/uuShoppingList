import { createVisualComponent, Utils, Content } from "uu5g05";
import { Box, Text, Line, Button } from "uu5g05-elements";
import Config from "./config/config.js";

const Css = {
  shoppingListContainer: () =>
    Config.Css.css({
      display: "flex",
      flexDirection: "row",
      overflowX: "auto",
      scrollBehavior: "smooth",
    }),

  shoppingList: () => Config.Css.css({}),
  shoppingListBox: () =>
    Config.Css.css({
      border: "1px solid #ccc",
      padding: "10px",
      margin: "10px",
      borderRadius: "5px",
      backgroundColor: "#f9f9f9",
      display: "grid",

      width: "200px",
      height: "200px",
    }),

  shoppingListTitle: () =>
    Config.Css.css({
      fontSize: "18px",
      color: "#00CB45",
      textAlign: "center",
      margin: "0",
      textDecoration: "none",
    }),

  shoppingListDescription: () =>
    Config.Css.css({
      fontSize: "14px",
    }),

  shoppingListItems: () =>
    Config.Css.css({
      display: "flex",
      flexWrap: "wrap",
      gap: "5px",
      TextDecoder: "none",
    }),
  shoppingListItemsBox: () =>
    Config.Css.css({
      display: "grid", // Wrapped "grid" in double quotes
      gridTemplateColumns: "repeat(2, 1fr)", // Corrected property names and values
      gridTemplateRows: "repeat(2, 1fr)",
      gridColumnGap: "10px", // Corrected property names
      gridRowGap: "10px", // Corrected property names
      padding: "0",
    }),

  shoppingListItemsList: () =>
    Config.Css.css({
      listStyleType: "disc",
      padding: "0",
      margin: "0",
    }),

  moreItems: () =>
    Config.Css.css({
      color: "#007bff",
      cursor: "pointer",
      fontWeight: "bold",
      marginTop: "10px",
    }),
};

// Use the Css object in your component as before

const ShoppingList = createVisualComponent({
  uu5Tag: Config.TAG + "ShoppingList",
  nestingLevel: ["areaCollection", "area"],
  propTypes: {},
  defaultProps: {},

  render(props) {
    return (
      <div className={Css.shoppingListContainer()}>
        {props.data.map((list) => (
          <div key={list.id} className={Css.shoppingList()}>
            <Box className={Css.shoppingListBox()}>
              <div className={Css.shoppingListItemsList()}>
                <ul className={Css.shoppingListItemsBox()}>
                  {list.items.slice(0, 3).map((item, index) => (
                    <li key={index} className={Css.shoppingListItems()}>
                      {item.name}
                    </li>
                  ))}
                  {list.items.length > 3 && (
                    <li className={Css.moreItems()} className={Css.shoppingListItems()}>
                      + {list.items.length - 3}
                    </li>
                  )}
                </ul>
              </div>
            </Box>
            <a href={`/shopping-list/${list.id}`} className={Css.shoppingListTitle()}>
              <h3 className={Css.shoppingListTitle()}>{list.title}</h3>
            </a>
          </div>
        ))}
      </div>
    );
  },
});

export { ShoppingList };
export default ShoppingList;
