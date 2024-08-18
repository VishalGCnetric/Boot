import React from 'react';

const OrderSummaryPage = () => {
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
        <div className="w-full lg:w-2/3 rounded-lg p-6 shadow-xl ">
          <h2 className="text-xl font-semibold mb-4">Delivery Address</h2>
          <div className="text-gray-700">
            <p>{address.name}</p>
            <p>{address.addressLine1}</p>
            <p>{address.city}, {address.state}, {address.zip}</p>
            <p>{address.country}</p>
          </div>
        </div>

        {/* Right Side - Order Details */}
        <div className="w-full lg:w-1/3 p-6 rounded-lg shadow-xl ">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="text-gray-700">
            <div className="flex justify-between mb-2">
              <span>Items:</span>
              <span>{orderDetails.items}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Delivery:</span>
              <span>{orderDetails.delivery}</span>
            </div>
            <div className="flex justify-between font-semibold text-lg text-red-600">
              <span>Total:</span>
              <span>{orderDetails.total}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummaryPage;
