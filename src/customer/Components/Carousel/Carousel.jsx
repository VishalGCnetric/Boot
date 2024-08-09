import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

// Sample products data
const products = [
  { id: 1, name: 'ALICE', image: 'https://india.ray-ban.com/media/catalog/product/cache/ecdbd5a50e6b93b224fc4aacce3c4ac7/0/r/0rx7239_2012_6.png' },
  { id: 2, name: 'AVIATOR TITANIUM', image: 'https://india.ray-ban.com/media/catalog/product/cache/ecdbd5a50e6b93b224fc4aacce3c4ac7/0/r/0rx7239_2012_6.png' },
  { id: 3, name: 'ALAIN', image: 'https://india.ray-ban.com/media/catalog/product/cache/ecdbd5a50e6b93b224fc4aacce3c4ac7/0/r/0rx7239_2012_6.png' },
  { id: 1, name: 'ALICE', image: 'https://india.ray-ban.com/media/catalog/product/cache/ecdbd5a50e6b93b224fc4aacce3c4ac7/0/r/0rx7239_2012_6.png' },
  { id: 2, name: 'ALAIN', image: 'https://india.ray-ban.com/media/catalog/product/cache/ecdbd5a50e6b93b224fc4aacce3c4ac7/0/r/0rx7239_2012_6.png' },
  { id: 3, name: 'Product 3', image: 'https://india.ray-ban.com/media/catalog/product/cache/ecdbd5a50e6b93b224fc4aacce3c4ac7/0/r/0rx7239_2012_6.png' },
  { id: 1, name: 'Product 1', image: 'https://india.ray-ban.com/media/catalog/product/cache/ecdbd5a50e6b93b224fc4aacce3c4ac7/0/r/0rx7239_2012_6.png' },
  { id: 2, name: 'Product 2', image: 'https://india.ray-ban.com/media/catalog/product/cache/ecdbd5a50e6b93b224fc4aacce3c4ac7/0/r/0rx7239_2012_6.png' },
  { id: 3, name: 'Product 3', image: 'https://india.ray-ban.com/media/catalog/product/cache/ecdbd5a50e6b93b224fc4aacce3c4ac7/0/r/0rx7239_2012_6.png' },
  // Add more products here
];

const CarouselContainer = styled.div`
  width: 95%;
  margin: auto;
  
  
`;

const ProductCard = styled.div`
  padding: 20px;
  position: relative;
  margin: 10px; // Adjusted margin to create space between cards
  background-color: aliceblue;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  /* text-align: center; // Center text content */

  img {
    width: 100%;
    height: auto;
    border-radius: 8px; // Add border-radius to the image
  }

  p {
    margin: 10px 0; // Increased margin for better spacing
  }
`;

const Arrow = styled.div`
  font-size: 3rem;
  color: black;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const PrevArrow = styled(Arrow)`
  left: 10px;
`;

const NextArrow = styled(Arrow)`
  right: 10px;
`;

const Carousel = ({text}) => {
  const settings = {
    infinite: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768, // Adjusted breakpoint for mobile view
        settings: {
          slidesToShow: 3, // Show 3 items per row on mobile
        },
      },
      {
        breakpoint: 480, // Adjusted breakpoint for mobile view
        settings: {
          slidesToShow: 2, // Show 3 items per row on mobile
        },
      },
    ],
  };

  return (
    <CarouselContainer>
      <Slider {...settings}>
        {products.map((product) => (

          <ProductCard key={product.id}>

            {text &&<h3 style={{ color: 'red' ,position:'absolute',top:'10px',left:'35%'}}>New Arrivals</h3>}

            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <p>$2000.00</p>
          </ProductCard>
        ))}
      </Slider>
      <PrevArrow />
      <NextArrow />
    </CarouselContainer>
  );
};

export default Carousel;
