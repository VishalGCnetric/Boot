import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const healthPicksData = [
    {
      id: 1,
      category: 'Top health picks',
      title: 'Boots vitamins',
      description: '1/2 price on selected Boots brand vitamins with Advantage Card*',
      buttonLabel: 'SHOP NOW',
      imageUrl: 'p13a-0708-homepage-25-wellness-save15pc-healthtabdam8x9x360ts3d1722843032428jpg@2x.png',
      discount: 'Price Advantage',
    },
    {
      id: 2,
      category: 'Top health picks',
      title: 'Sexual wellbeing',
      description: 'Save 15% on selected sexual wellbeing with code SWB15',
      buttonLabel: 'SHOP NOW',
      imageUrl: 'p13a-0708-homepage-25-wellness-save15pc-healthtabdam8x9x360ts3d1722843032428jpg@2x.png',
      discount: 'Save 15%',
    },
    {
      id: 3,
      category: 'Top health picks',
      title: 'Hayfever relief',
      description: 'Beat those summer sneezes & save 20% on selected hayfever relief',
      buttonLabel: 'SHOP NOW',
      imageUrl: 'p13a-0708-homepage-25-wellness-save15pc-healthtabdam8x9x360ts3d1722843032428jpg@2x.png',
      discount: 'Save 20%',
    },
    {
      id: 4,
      category: 'Top health picks',
      title: 'Travel health',
      description: 'Prep for summer holidays & save 20% on selected travel health',
      buttonLabel: 'SHOP NOW',
      imageUrl: 'p13a-0708-homepage-25-wellness-save15pc-healthtabdam8x9x360ts3d1722843032428jpg@2x.png',
      discount: 'Save 20%',
    },
    {
      id: 5,
      category: 'Buy 1 get 2nd 1/2 price',
      title: 'Hayfever',
      description: 'Prep for pollen! Buy 1 get 2nd 1/2 price on selected hayfever',
      buttonLabel: 'SHOP NOW',
      imageUrl: 'p13a-0708-homepage-25-wellness-save15pc-healthtabdam8x9x360ts3d1722843032428jpg@2x.png',
      discount: null,
    },
    {
      id: 6,
      category: 'Buy 1 get 2nd 1/2 price',
      title: 'Footcare',
      description: 'Treat your feet this summer with buy 1 get 2nd 1/2 price on selected footcare',
      buttonLabel: 'SHOP NOW',
      imageUrl: 'p13a-0708-homepage-25-wellness-save15pc-healthtabdam8x9x360ts3d1722843032428jpg@2x.png',
      discount: null,
    },
    {
      id: 7,
      category: 'Buy 1 get 2nd 1/2 price',
      title: 'Summer health',
      description: 'Buy 1 get 2nd 1/2 price on selected summer health must-haves',
      buttonLabel: 'SHOP NOW',
      imageUrl: 'p13a-0708-homepage-25-wellness-save15pc-healthtabdam8x9x360ts3d1722843032428jpg@2x.png',
      discount: null,
    },
    {
      id: 8,
      category: 'Buy 1 get 2nd 1/2 price',
      title: 'First aid',
      description: 'Take care of scrapes & buy 1 get 2nd 1/2 price on selected first aid',
      buttonLabel: 'SHOP NOW',
      imageUrl: 'p13a-0708-homepage-25-wellness-save15pc-healthtabdam8x9x360ts3d1722843032428jpg@2x.png',
      discount: null,
    },
    {
        id: 3,
        category: 'Top health picks',
        title: 'Hayfever relief',
        description: 'Beat those summer sneezes & save 20% on selected hayfever relief',
        buttonLabel: 'SHOP NOW',
        imageUrl: 'p13a-0708-homepage-25-wellness-save15pc-healthtabdam8x9x360ts3d1722843032428jpg@2x.png',
        discount: 'Save 20%',
      },
      {
        id: 4,
        category: 'Top health picks',
        title: 'Travel health',
        description: 'Prep for summer holidays & save 20% on selected travel health',
        buttonLabel: 'SHOP NOW',
        imageUrl: 'p13a-0708-homepage-25-wellness-save15pc-healthtabdam8x9x360ts3d1722843032428jpg@2x.png',
        discount: 'Save 20%',
      },
      {
        id: 5,
        category: 'Buy 1 get 2nd 1/2 price',
        title: 'Hayfever',
        description: 'Prep for pollen! Buy 1 get 2nd 1/2 price on selected hayfever',
        buttonLabel: 'SHOP NOW',
        imageUrl: 'p13a-0708-homepage-25-wellness-save15pc-healthtabdam8x9x360ts3d1722843032428jpg@2x.png',
        discount: null,
      },
      {
        id: 6,
        category: 'Buy 1 get 2nd 1/2 price',
        title: 'Footcare',
        description: 'Treat your feet this summer with buy 1 get 2nd 1/2 price on selected footcare',
        buttonLabel: 'SHOP NOW',
        imageUrl: 'p13a-0708-homepage-25-wellness-save15pc-healthtabdam8x9x360ts3d1722843032428jpg@2x.png',
        discount: null,
      },
  ];
  
const HealthPicksSlider = () => {
  const [selectedCategory, setSelectedCategory] = useState('Top health picks');

  const filteredData = healthPicksData.filter(item => item.category === selectedCategory);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="p-4">
      <div className="flex justify-center gap-8  mb-4">
        <button 
          className={` py-2 ${selectedCategory === 'Top health picks' ? 'border-b-4 border-black' : ''}`} 
          onClick={() => setSelectedCategory('Top health picks')}
        >
          Top health picks
        </button>
        <button 
          className={` py-2 ${selectedCategory === 'Buy 1 get 2nd 1/2 price' ? 'border-b-4 border-black' : ''}`} 
          onClick={() => setSelectedCategory('Buy 1 get 2nd 1/2 price')}
        >
          Buy 1 get 2nd 1/2 price
        </button>
      </div>
      <Slider {...settings}>
        {filteredData.map(item => (
          <div key={item.id} className="p-2">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="relative">
                <img src={item.imageUrl} alt={item.title} className="w-full" />
                {item.discount && (
                  <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-xs rounded">
                    {item.discount}
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                <button className="mt-4 w-full py-2 bg-white border border-wwwbootscom-deep-cove text-wwwbootscom-deep-cove font-semibold rounded hover:text-white hover:bg-wwwbootscom-deep-cove">
                  {item.buttonLabel}
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="slick-arrow slick-next"
      style={{ right: '10px' }}
      onClick={onClick}
    >
      <img src="next-arrow.png" alt="Next" />
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="slick-arrow slick-prev"
      style={{ left: '10px', zIndex: '1' }}
      onClick={onClick}
    >
      <img src="prev-arrow.png" alt="Previous" />
    </div>
  );
};

export default HealthPicksSlider;
