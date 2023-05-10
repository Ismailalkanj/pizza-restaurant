import Image from "next/image";
import { useState } from "react";
import { GiFullPizza } from "react-icons/gi";

const Product = () => {
  const [size, setSize] = useState(0);
  const pizza = {
    id: 1,
    img: "img/pepperoni.png",
    name: "Pepperoni",
    price: [9.9, 12.9, 15.9],
    desc: "Pepperoni pizza is a popular type of pizza with a thin crust, tomato sauce, cheese, and spicy slices of pepperoni",
  };

  return (
    <div className="mt-36 mb-10 justify-items-center align-middle flex mx-auto ">
      <Image
        className="w-fit mx-auto"
        src="/img/pepperoni.png"
        width={400}
        height={400}
      />
      <div className=" w-2/6 mx-auto">
        <h1 className="text-3xl">{pizza.name}</h1>
        <p className="text-white bg-teal-500 w-fit px-1 rounded-md justify-center text-center text-2xl font-bold">
          € {pizza.price[size]}
        </p>
        <p className="">{pizza.desc}</p>
        <h3 className="">Choose your size</h3>
        <div className="flex justify-center justify-evenly align-middle text-center cursor-pointer">
          <div className="flex" onClick={() => setSize(0)}>
            <GiFullPizza size={35} className="" />
            <span className="bg-teal-500 h-fit px-1 -ml-4 rounded-md text-base text-white bg cursor-pointer">
              Small
            </span>
          </div>
          <div className="flex" onClick={() => setSize(1)}>
            <GiFullPizza size={43} className="" />
            <span className="bg-teal-500 h-fit px-1 -ml-4 rounded-md text-base  text-white bg cursor-pointer">
              Medium
            </span>
          </div>
          <div className="flex" onClick={() => setSize(2)}>
            <GiFullPizza size={50} className="" />
            <span className="bg-teal-500 h-fit px-1 -ml-4 rounded-md text-base  text-white bg">
              Large{" "}
            </span>
          </div>
        </div>
        <h3 className="">Choose additional ingredients</h3>
        <div className="ingredients grid grid-cols-2 gap-2 ">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="double"
              name="double"
              className="h-5 w-5"
            />
            <label htmlFor="double" className="ml-1">
              Double Ingredients
            </label>
          </div>
          <div className="flex  items-center">
            <input
              type="checkbox"
              id="cheese"
              name="cheese"
              className="h-5 w-5"
            />
            <label htmlFor="cheese" className="ml-1">
              Extra Cheese
            </label>
          </div>
          <div className="flex  items-center">
            <input
              type="checkbox"
              id="salami"
              name="salami"
              className="h-5 w-5"
            />
            <label htmlFor="salami" className="ml-1">
              Extra Salami
            </label>
          </div>
          <div className="flex  items-center">
            <input
              type="checkbox"
              id="garlic"
              name="garlic"
              className="h-5 w-5"
            />
            <label htmlFor="garlic" className="ml-1">
              Garlic Sauce
            </label>
          </div>
          <div className="flex  items-center">
            <input
              type="checkbox"
              id="spicy"
              name="spicy"
              className="h-5 w-5"
            />
            <label htmlFor="spicy" className="ml-1">
              Spicy Sauce
            </label>
          </div>
        </div>
        <div className="Quantity flex justify-center  items-baseline mx-auto">
  <div>
    <input
      type="number"
      defaultValue={1}
      min={0}
      className="mt-2 w-12 h-8 border text-center border-stone-950"
    />
  </div> 
  <div>
    <button className="ml-2 h-8 items-center hover:bg-red-600 transition-all ease-in hover:text-white bg-teal-500 h-fit px-1 rounded-md text-base  text-white">Add to Cart</button>
  </div>
</div>

      </div>
    </div>
  );
};

export default Product;
