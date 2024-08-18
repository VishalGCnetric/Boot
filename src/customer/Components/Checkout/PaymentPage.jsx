import React, { useState } from 'react';
import { Link , useNavigate} from 'react-router-dom';

const PaymentPage = () => {
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState('');

  const handleNewOrder = () => {
    navigate(`/checkout?step=${4}`);
  };

  return (
    <div className="p-4 max-w-7xl mx-auto ">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Side: Payment Methods */}
        <div className="w-full lg:w-2/3 p-6 rounded-lg shadow-xl">
          <h2 className="text-xl font-semibold mb-4">Select a payment method</h2>

          <div className="mb-4">
            <label className="block mb-2">Your available balance</label>
            <div className="flex items-center">
              <input type="text" className="flex-grow border p-2 rounded" placeholder="Enter Code" />
              <button className="ml-2 bg-gray-200 p-2 rounded">Apply</button>
            </div>
          </div>

          <h3 className="font-semibold mb-2">Another payment method</h3>

          {/* Payment Options */}
          <div className="space-y-4">
            <div>
              <input
                type="radio"
                id="card"
                name="payment"
                value="card"
                checked={selectedMethod === 'card'}
                onChange={() => setSelectedMethod('card')}
              />
              <label htmlFor="card" className="ml-2">Credit or debit card</label>
            </div>
            <div>
              <input
                type="radio"
                id="netBanking"
                name="payment"
                value="netBanking"
                checked={selectedMethod === 'netBanking'}
                onChange={() => setSelectedMethod('netBanking')}
              />
              <label htmlFor="netBanking" className="ml-2">Net Banking</label>
              {selectedMethod === 'netBanking' && (
                <select className="mt-2 border p-2 rounded w-full">
                  <option>Choose an Option</option>
                  <option>Bank 1</option>
                  <option>Bank 2</option>
                </select>
              )}
            </div>
            <div>
              <input
                type="radio"
                id="upi"
                name="payment"
                value="upi"
                checked={selectedMethod === 'upi'}
                onChange={() => setSelectedMethod('upi')}
              />
              <label htmlFor="upi" className="ml-2">Other UPI Apps</label>
            </div>
            <div>
              <input
                type="radio"
                id="emi"
                name="payment"
                value="emi"
                disabled
              />
              <label htmlFor="emi" className="ml-2 text-gray-400">EMI (Unavailable)</label>
            </div>
            <div>
              <input
                type="radio"
                id="cod"
                name="payment"
                value="cod"
                disabled
              />
              <label htmlFor="cod" className="ml-2 text-gray-400">Cash on Delivery/Pay on Delivery (Unavailable)</label>
            </div>
          </div>
        </div>

        {/* Right Side: Order Summary */}
        <div className="w-full lg:w-1/3 ">
          <div className="bg-white p-6 rounded-lg shadow-xl ">
            <button  onClick={handleNewOrder} className="bg-wwwbootscom-congress-blue hover:bg-btn-hover text-white py-2 px-4 rounded-md w-full mb-4">
             Use this Payment Method
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

export default PaymentPage;
