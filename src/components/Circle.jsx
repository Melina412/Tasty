import { useState } from "react";
import styles from "./Circle.module.css";
const Circle = (props) => {
  let color;
  switch (props.categorie) {
    case "Beef":
      color = "#70B9BE";
      break;
    case "Lamb":
      color = "#80414e";
      break;
    case "Pork":
      color = "#e8bac3";
      break;
    case "Starter":
      color = "#a7ad2a";
      break;
    case "Breakfast":
      color = "#737272";
      break;
    case "Chicken":
      color = "#ddc252";
      break;
    case "Miscellaneous":
      color = "#901199";
      break;
    case "Seafood":
      color = "#0039f5";
      break;
    case "Vegan":
      color = "#0f4701";
      break;
    case "Goat":
      color = "#4a3c32";
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
      color = "#32f002";
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
