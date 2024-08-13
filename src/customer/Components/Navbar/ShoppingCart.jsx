import React, { useState } from 'react';
import CartItem from '../Cart/CartItem';

const ShoppingCart = ({toggleDrawer}) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-lg font-semibold">Your basket (1 item)</h2>
        <span className="font-bold">999 points</span>
        <button className="text-2xl" onClick={toggleDrawer(false)}>&times;</button>
      </div>

      <div className="p-4 bg-blue-50 text-sm">
        <p className="mb-1">Spend 501 points more for FREE Click & Collect</p>
        <p>Spend 1501 points more for FREE standard delivery</p>
      </div>
     
      <CartItem />
      <CartItem/>
{/* 
      <div className="p-4 flex">
        <img src="product-image.jpg" alt="Product" className="w-24 h-24 object-cover mr-4" />
        <div>
          <h3 className="font-semibold">MyHealthChecked Sperm Concentration Rapid Test</h3>
          <p className="my-2">
            <span className="font-bold">999 points</span>
            <span className="text-green-600 ml-2">Save 250 points</span>
          </p>
          <div className="flex items-center mb-2">
            <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-2 py-1 border">-</button>
            <input type="number" value={quantity} readOnly className="w-12 text-center border-t border-b" />
            <button onClick={() => setQuantity(quantity + 1)} className="px-2 py-1 border">+</button>
          </div>
          <a href="#" className="text-red-600 text-sm">Remove</a>
        </div>
      </div> */}

      <div className="p-4 bg-purple-50">
        <p className="text-sm mb-2">You will not collect points if you choose to pay with points</p>
        <div className="flex justify-between text-blue-600 text-sm">
          <a href="#">Link Advantage Card</a>
          <a href="#">Sign up</a>
        </div>
      </div>

      <div className="p-4 flex">
        <input type="text" placeholder="Offer code" className="flex-grow border p-2 mr-2" />
        <button className="bg-wwwbootscom-deep-cove text-white px-4 py-2 rounded">APPLY</button>
      </div>

      <div className="p-4 flex justify-between items-center">
        <span>Convert basket to points</span>
        <label className="switch relative inline-block w-12 h-6">
          <input type="checkbox" className="opacity-0 w-0 h-0" />
          <span className="slider absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-300 rounded-full before:absolute before:h-5 before:w-5 before:left-0.5 before:bottom-0.5 before:bg-white before:rounded-full before:transition-all"></span>
        </label>
      </div>

      <div className="p-4 border-t">
        <p className="flex justify-between mb-1"><span>Subtotal</span><span>1249 points</span></p>
        <p className="flex justify-between text-green-600 mb-1"><span>Savings</span><span>-250 points</span></p>
        <p className="flex justify-between font-bold mb-1"><span>Total (1 item)</span><span>999 points</span></p>
        <p className="text-sm text-gray-500 mb-1">Excludes delivery</p>
        <p className="text-sm text-gray-500">You will not collect points when paying with points</p>
      </div>

      <button className="w-full bg-wwwbootscom-deep-cove text-white py-3 font-bold">CHECKOUT NOW</button>

      <div className="p-4 flex justify-between">
        {['visa', 'mastercard', 'amex', 'paypal@2x', 'applepay', 'kalarna@2x', 'payment-icon-v2damts3d1691146448583@2x'].map((method) => (
          <img key={method} src={`${method}.png`} alt={method} className="h-6" />
        ))}
      </div>
    </div>
  );
};

export default ShoppingCart;