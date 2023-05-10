import React, { useEffect, useState } from 'react';
import ProductCard from "../../components/ProductCard"
import ProductList from '../../components/ProductList'


function Speisekarte() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('/pizzas.json')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => {
        console.error('Error fetching pizzas data:', error);
      });
  }, []);

return (
  <>  
  <div className="flex justify-center mt-60">
        <div className="grid lg:grid-cols-3 mt-200 gap-7 md:grid-cols-2 sm:grid-cols-1 ">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            imageSrc={product.imageUrl}
            title={product.name}
            description={product.description}
            price={product.price}
          />
        ))}
        </div>
      </div> 
    
  </>
  )
  };

export default Speisekarte