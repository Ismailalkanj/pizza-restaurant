import { CartContext } from "@/contexts/CartContext";
import axios from "axios";
import Image from "next/image";
import { useContext } from "react";

const ProductCard = (
  { key,
    imageSrc,
    title,
    description,
    price,
    id
  }
) => {

  const { addToCart } = useContext(CartContext);
  
  const handleAdd = async (event) => {
    event.preventDefault();
    await addToCart(id)
  }

  return (
    <div className="card w-72 h-96 bg-base-100 shadow-xl card-effects">
      <figure>
        <Image
          src={imageSrc}
          alt={title}
          width={300}
          height={200}
          layout="responsive"
          className="rounded-t-lg"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <p className="italic text-3xl">{price}</p>
          <button className="btn btn-primary" onClick={handleAdd}>Add to cart</button>
        </div>
      </div>
    </div>

  );


};

export default ProductCard;
