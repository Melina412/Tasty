import { useState } from "react";
import styles from "./Circle.module.css";
const Circle = (props) => {
  let color;
  switch (props.categorie) {
    case "Beef":
      color = "#70B9BE";
      break;
    case "Lamb":
      color = "#FcFcFc";
      break;
    case "Pork":
      color = "#1245Fc";
      break;
    case "Starter":
      color = "#Ea1Ea1";
      break;
    case "Lamb":
      color = "#FcFcFc";
      break;
    case "Breakfast":
      color = "#c4c4c4";
      break;
    case "Chicken":
      color = "#ddc252";
      break;
    case "Miscellaneous":
      color = "#113399";
      break;
    case "Miscellaneous":
      color = "#56fc31";
      break;
    case "Seafood":
      color = "#0000f4";
      break;
    case "Vegan":
      color = "#009000";
      break;
    case "Goat":
      color = "#a89a91";
      break;
    case "Dessert":
      color = "#c1121c";
      break;
    case "Pasta":
      color = "#b9b9a8";
      break;
    case "Side":
      color = "#A8D8B9";
      break;
    case "Vegetarian":
      color = "#22aa00";
      break;
    default:
      color = "transparent";
      break;
  }
  const circleStyle = {
    backgroundColor: color,
  };
  return (
    <>
      <div style={circleStyle} className={styles.circle}></div>
    </>
  );
};

export default Circle;
