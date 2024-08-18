import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderSummaryPage = () => {
const navigate = useNavigate()

const handleNewOrder =()=>{
  navigate('/checkout?step=3')
}

  const address = {
    name: 'Sajjak',
    addressLine1: 'Yellareddy Circle, FCI Main Road, Kadugodi',
    city: 'Bengaluru',
    state: 'Karnataka',
    zip: '560067',
    country: 'India',
  };

  const orderDetails = {
    items: 3,
    delivery: 'Free',
    total: '₹200.00',
  };

  return (
    <div className="p-4 max-w-7xl mx-auto ">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Side - Chosen Address */}
        <div className="w-full lg:w-2/3  ">
          <h2 className="text-xl font-semibold mb-4">Delivery Address</h2>
          <div className="text-gray-700 rounded-lg shadow-xl  p-6">
            <p>{address.name}</p>
            <p>{address.addressLine1}</p>
            <p>{address.city}, {address.state}, {address.zip}</p>
            <p>{address.country}</p>
          </div>
        </div>

        {/* Right Side - Order Details */}
        <div className="w-full lg:w-1/3 p-6 rounded-lg shadow-xl">
          <div className="bg-white p-4 ">
            <button onClick={handleNewOrder} className="bg-wwwbootscom-congress-blue hover:bg-btn-hover text-white py-2 px-4 rounded-md w-full mb-4">
              Proceed to Payment
            </button>
            <div className="border-t pt-4">
              <h3 className="text-lg font-semibold mb-2">Order Summary</h3>
              <p>Items: --</p>
              <p>Delivery: --</p>
              <p className="text-lg font-bold text-red-600 mt-4">Order Total: ₹200.00</p>
            </div>
            <a href="#" className="text-blue-600 text-sm mt-4 inline-block">
              How are delivery costs calculated?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummaryPage;
