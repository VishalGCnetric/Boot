import React from 'react';

const ProductDetails = () => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center p-4 bg-white space-y-4 md:space-y-0 md:space-x-8 max-w-4xl mx-auto gap-10">
      {/* Product Image */}
      <div className="w-full md:w-1/2">
        <div className="relative">
          <img
            src="https://m.media-amazon.com/images/I/614aGdFgIxL._SX679_.jpg"
            alt="Philips Series 9000 Trimmer"
            className="w-full h-auto rounded-md shadow-lg"
          />
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold py-1 px-2 rounded">Offer</span>
        </div>
        <div className="flex space-x-2 mt-2">
          {/* Thumbnails */}
          {/* Example Thumbnails (replace with actual images) */}
          <img src="https://m.media-amazon.com/images/I/41+eSSimK7L._SS40_.jpg" alt="Thumbnail 1" className="w-12 h-12 rounded-md" />
          <img src="https://m.media-amazon.com/images/I/61NzXho-nFL.SS40_BG85,85,85_BR-120_PKdp-play-icon-overlay__.jpg" alt="Thumbnail 2" className="w-12 h-12 rounded-md" />
          <img src="https://m.media-amazon.com/images/I/41KYbtB-jOL._SS40_.jpg" alt="Thumbnail 3" className="w-12 h-12 rounded-md" />
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
        
        {/* Payment Options */}
        <div className="flex flex-col space-y-2">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-gray-700">Klarna</span>
            <p className="text-sm text-gray-500">Make 3 payments of £28.33. <a href="#" className="text-blue-500">Learn more</a></p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-bold text-gray-700">PayPal</span>
            <p className="text-sm text-gray-500">Pay in 3 interest-free payments of £28.33. <a href="#" className="text-blue-500">Learn more</a></p>
          </div>
          <button className="bg-purple-600 text-white font-bold py-2 px-4 rounded-md hover:bg-purple-700">
            Collect 252 points with this purchase
          </button>
        </div>

        {/* Find in Store Button */}
        <button className="mt-4 bg-gray-800 text-white font-bold py-2 px-4 rounded-md hover:bg-gray-900 flex items-center space-x-2">
          <span>Find in store</span>
          {/* You can use an icon here for better UI */}
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
