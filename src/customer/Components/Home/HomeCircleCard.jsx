import React from 'react';

const buttonClasses = 'bg-zinc-200 p-2 rounded-full focus:outline-none';
const containerClasses = 'flex items-center justify-between p-4';
const innerContainerClasses = 'flex space-x-6 overflow-x-auto';
const cardContainerClasses = 'flex flex-col items-center';
const imageClasses = 'rounded-full border border-zinc-300';
const textClasses = 'mt-2 text-center text-zinc-700';

const cardData = [
  {
    alt: 'photo-printing',
    text: 'Photo printing',
    src: 'https://placehold.co/100x100?text=🖼',
  },
  {
    alt: 'skincare',
    text: 'Skincare',
    src: 'https://placehold.co/100x100?text=💧',
  },
  {
    alt: 'health-hub-skin-advice',
    text: 'Health Hub skin advice',
    src: 'https://placehold.co/100x100?text=💁‍♀️',
  },
  {
    alt: 'trending',
    text: 'Trending',
    src: 'https://placehold.co/100x100?text=🔥',
  },
  {
    alt: 'prescriptions',
    text: 'Prescriptions',
    src: 'https://placehold.co/100x100?text=📋',
  },
  {
    alt: 'advantage-card',
    text: 'Sign up to Advantage Card',
    src: 'https://placehold.co/100x100?text=🎟️',
  },
];

const HomeCircleCard = () => {
  return (
    <div className={containerClasses}>
      <button className={buttonClasses}>
        <span className="text-zinc-600">&lt;</span>
      </button>
      
      <div className={innerContainerClasses}>
        {cardData.map((card, index) => (
          <div key={index} className={cardContainerClasses}>
            <img
              aria-hidden="true"
              alt={card.alt}
              src={card.src}
              className={imageClasses}
            />
            <span className={textClasses}>{card.text}</span>
          </div>
        ))}
      </div>
      
      <button className={buttonClasses}>
        <span className="text-zinc-600">&gt;</span>
      </button>
    </div>
  );
};

export default HomeCircleCard;
