import "react-multi-carousel/lib/styles.css";
import CategoriesCarousel from "./CategoriesCarousel";
import PizzaCarousel from "./PizzaCarousel";
import { useState } from "react";

const ProductList = () => {
  

  return (
    <>
      <div className="text-center mt-36 ">
        <div className="mt-2 text-5xl main-title font-bold italic drop-shadow-lg shadow-red-600">Best Pizza In Berlin </div>
        <p className=" flex mx-auto justify-center mt-2 w-3/6 mb-2 text-xl">
          Enjoy and nurture your body with what you love and crave for
        </p>
      </div>

      <CategoriesCarousel />
      <PizzaCarousel />
    </>
  );
};

export default ProductList;
