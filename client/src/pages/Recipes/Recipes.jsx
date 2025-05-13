import React from "react";
import Layout from "../../component/Layout";
import Random from "../../component/Recipes/Random";
import Vegetarian from "../../component/Recipes/Vegetarian";
import DishOfTheDay from "./Recipe-page";
import MenuSection from "./Recipe-page";

function Recipes() {
  return (
    <Layout>
      {/* <Random /> */}
      {/* <Vegetarian /> */}
      {/* <DishOfTheDay /> */}
      {/* <Recomendedmenu/> */}
      <MenuSection/>
     </Layout>
  );
}

export default Recipes;
