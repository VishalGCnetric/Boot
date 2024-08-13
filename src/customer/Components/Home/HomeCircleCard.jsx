import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cardData = [
  {
    alt: 'photo-printing',
    text: 'Photo printing',
    src: 'https://assets.boots.com/content/dam/boots/seasonal-campaigns/christmas/2024/13a_advent_calendar/13a_Advent_Calendar_Nav_withoutsg.dam.ts%3D1723106048701.png',
  },
  {
    alt: 'skincare',
    text: 'Skincare',
    src: 'https://assets.boots.com/content/dam/boots/homepage/2023-2024/9--may/wc-0605/P10a_Homepage_CircleNav_SunHoliday.dam.ts%3D1716208803095.png',
  },
  {
    alt: 'health-hub-skin-advice',
    text: 'Health Hub skin advice',
    src: 'https://assets.boots.com/content/dam/boots/homepage/2023-2024/9--may/wc-0605/P10a_Homepage_CircleNav_Pollen.dam.ts%3D1715087584705.png',
  },
  {
    alt: 'trending',
    text: 'Trending',
    src: 'https://assets.boots.com/content/dam/boots/shop-by-department/photo/2020-2021/11b/Photo11b_PhotoPrinting_CircleNav_Prints_Supplied.dam.ts%3D1621523495789.jpg',
  },
  {
    alt: 'prescriptions',
    text: 'Prescriptions',
    src: 'https://assets.boots.com/content/dam/boots/shop-by-department/beauty-and-skincare/2023-2024/p10a/circle-navs/10a_Beauty_CircleNav_Skincare_10343758_Summer24.dam.ts%3D1714732997964.png',
  },
  {
    alt: 'advantage-card',
    text: 'Sign up to Advantage Card',
    src: 'https://assets.boots.com/content/dam/boots/shop-by-department/photo/2020-2021/11b/Photo11b_PhotoPrinting_CircleNav_Prints_Supplied.dam.ts%3D1621523495789.jpg',
  },
];

const HomeCircleCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div className="relative w-full mx-auto">
      <Slider {...settings}>
        {cardData.map((card, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              aria-hidden="true"
              alt={card.alt}
              src={card.src}
              className="rounded-full border border-zinc-300 w-12 h-12 object-cover"
            />
            <span className="mt-2 text-center text-zinc-700">{card.text}</span>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className + " custom-arrow next-arrow"}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <span className="text-zinc-600 text-xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </span>
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className + " custom-arrow prev-arrow"}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <span className="text-zinc-600 text-xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </span>
    </div>
  );
};

// CSS for custom arrow styling
const styles = `
.custom-arrow {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  z-index: 1;
}
.custom-arrow:hover {
  background-color: rgba(0, 0, 0, 0.8);
}
.next-arrow {
  right: 10px;
}
.prev-arrow {
  left: 10px;
}
`;

// Inject custom styles
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default HomeCircleCard;
