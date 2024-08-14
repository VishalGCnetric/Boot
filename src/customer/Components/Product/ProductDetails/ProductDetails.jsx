import React, { useRef, useState } from 'react';
import StoreStockModal from './StoreStockModal';

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState('https://m.media-amazon.com/images/I/614aGdFgIxL._SX679_.jpg');
  const [storeModal,setStoreModal] = useState(false)

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const imageContainerRef = useRef(null);

  const scrollLeft = () => {
    imageContainerRef.current.scrollBy({
      left: -100, // Adjust the scroll distance as needed
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    imageContainerRef.current.scrollBy({
      left: 100, // Adjust the scroll distance as needed
      behavior: 'smooth',
    });
  };

  return (
    <>
    {storeModal&&<StoreStockModal isTrue={storeModal} setIsTrue={setStoreModal}/>}
      <div className="flex flex-col md:flex-row items-start md:items-center p-4 bg-white space-y-4 md:space-y-0 md:space-x-8 max-w-5xl mx-auto gap-10">
        {/* Product Image */}
        <div className="w-full md:w-1/2">
          <div className="relative h-96"> {/* Adjusted to a fixed height */}
            <img
              src={mainImage}
              alt="Philips Series 9000 Trimmer"
              className="w-full h-full object-cover rounded-md shadow-lg" // Fixed height with h-full
            />
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold py-1 px-2 rounded">Offer</span>
          </div>
          <div className="flex space-x-2 mt-2 w-full items-center">
            {/* Left Button */}
            <button onClick={scrollLeft} className="mr-5 bg-gray-200 p-2 rounded">
              &lt;
            </button>

            {/* Thumbnails */}
            <div
              ref={imageContainerRef}
              className="flex space-x-2 overflow-x-auto scrollbar-hide"
              style={{ scrollBehavior: 'smooth' }}
            >
              <img
                onClick={() => setMainImage("https://m.media-amazon.com/images/I/61SFjHNtYgL._SX679_.jpg")}
                src="https://m.media-amazon.com/images/I/61SFjHNtYgL._SX679_.jpg"
                alt="Thumbnail 1"
                className="w-20 h-20 object-cover rounded-md border" // Static height and width
              />
              <img
                onClick={() => setMainImage("https://m.media-amazon.com/images/I/61NzXho-nFL.SS40_BG85,85,85_BR-120_PKdp-play-icon-overlay__.jpg")}
                src="https://m.media-amazon.com/images/I/61NzXho-nFL.SS40_BG85,85,85_BR-120_PKdp-play-icon-overlay__.jpg"
                alt="Thumbnail 2"
                className="w-20 h-20 object-cover rounded-md border"
              />
              <img
                onClick={()=>setMainImage('https://m.media-amazon.com/images/I/41KYbtB-jOL._SS40_.jpg')}
                src="https://m.media-amazon.com/images/I/41KYbtB-jOL._SS40_.jpg"
                alt="Thumbnail 3"
                className="w-20 h-20 object-cover rounded-md border"
              />
              <img
              onClick={()=>setMainImage('https://m.media-amazon.com/images/I/41+eSSimK7L._SS40_.jpg')}
                src="https://m.media-amazon.com/images/I/41+eSSimK7L._SS40_.jpg"
                alt="Thumbnail 4"
                className="w-20 h-20 object-cover rounded-md border"
              />
              <img
                src="https://m.media-amazon.com/images/I/61NzXho-nFL.SS40_BG85,85,85_BR-120_PKdp-play-icon-overlay__.jpg"
                alt="Thumbnail 5"
                className="w-20 h-20 object-cover rounded-md border"
              />
              {/* Add more images here */}
            </div>

            {/* Right Button */}
            <button onClick={scrollRight} className="ml-5 bg-gray-200 p-2 rounded">
              &gt;
            </button>
          </div>
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-2xl font-bold">Philips Series 9000, 20-in-1 Ultimate Multi Grooming Trimmer for Face, Head, and Body MG9555/15</h2>
          <div className="flex items-center space-x-2">
            <span className="text-yellow-500 text-lg font-bold">4.5</span>
            <span className="text-gray-500">(131 reviews)</span>
          </div>
          <div className="text-3xl font-bold text-gray-800">£84.99</div>
          <div className="text-green-600 font-bold">Save £45.00 Was £129.99</div>
          <button className="bg-red-500 text-white font-bold py-2 px-4 rounded-md hover:bg-red-600">Great savings on selected Electrical Beauty - online only</button>
          <div className="text-gray-600 text-lg">Stock coming soon</div>
          <p className="text-gray-500">This product is temporarily unavailable online. Use 'Find in store' below to see if it’s in stock near you.</p>

          <div className="flex items-center space-x-4">
            {/* Quantity Selector */}
            <div className="flex items-center p-1 border rounded">
              <button
                onClick={decreaseQuantity}
                className="px-3 py-1 bg-gray-100 border-r"
              >
                -
              </button>
              <input
                type="text"
                value={quantity}
                readOnly
                className="w-12 text-center border-r"
              />
              <button
                onClick={increaseQuantity}
                className="px-3 py-1 bg-gray-100"
              >
                +
              </button>
            </div>

            {/* Add to Basket Button */}
            <button className="px-6 py-2 bg-blue-700 w-full text-white font-semibold rounded">
              Add to basket
            </button>
          </div>

          {/* Payment Options */}
          <div className="flex flex-col space-y-2">
            {/* Payment options can be added here */}
          </div>

          {/* Find in Store Button */}
          <button onClick={()=>setStoreModal(true)} className="mt-4 bg-gray-800 text-white font-bold py-2 px-4 rounded-md hover:bg-gray-900 flex items-center space-x-2">
            <span>Find in store</span>
            {/* You can use an icon here for better UI */}
          </button>
        </div>
      </div>
<hr className='border-2 sm:mx-20 mt-5'/>
      <div className="p-6 bg-white max-w-5xl mx-auto">
        {/* Points Section */}
        <div className="text-pink-600 text-sm mb-4">
          Collect <span className="font-bold">15 Boots Advantage Card points</span> with this purchase
        </div>

        {/* Main Container */}
        <div className="flex flex-col lg:flex-row justify-between gap-6">
          {/* Product Details */}
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-4">Product details</h2>
            <div className="mb-6">
              <h3 className="font-bold">Opticrom Hayfever Eye Drops - 10ml</h3>
              <p>For the relief of eye symptoms of hayfever only and the following symptoms:</p>
              <ul className="list-disc ml-6 mt-2">
                <li>Itching</li>
                <li>Redness</li>
                <li>Soreness</li>
                <li>Watering</li>
              </ul>
            </div>

            <div className="mb-4">
              <h3 className="font-bold">Suitable for</h3>
              <p>Adults and children over 6 years</p>
            </div>

            <div className="mb-4">
              <h3 className="font-bold">Age Restriction</h3>
              <p>You must be at least 16 years old to purchase this product.</p>
            </div>

            <div className="mb-4">
              <h3 className="font-bold">How to use</h3>
              <p>
                Please read the enclosed leaflet carefully before use. Patient Information Leaflets are updated periodically by the manufacturer.
              </p>
              <p className="mt-2">
                Check that the cap seal is not broken before first use.
              </p>
              <p className="mt-2">
                Adults and children over 6 years: Gently squeeze 1 or 2 drops into each eye, 4 times a day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
