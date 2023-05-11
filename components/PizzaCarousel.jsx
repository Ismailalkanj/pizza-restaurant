import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductCard from './ProductCard';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const Test = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://ismail-api.onrender.com/api/products/all')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error('Error fetching pizzas data:', error);
      });
  }, []);

  return (
    <div className="my-16 px-4">
      <Carousel
        className="custom-carousel"
        responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={false}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={6000}
        keyBoardControl={true}
        customTransition="all .5s"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={['tablet', 'mobile']}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-10-px px-7"
      >
        {products.map((product, index) => (
          <ProductCard
            key={index}
            imageSrc={product['img_url']}
            title={product.name}
            description={product.description}
            price={product.price}
            id={product.id}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default Test;
