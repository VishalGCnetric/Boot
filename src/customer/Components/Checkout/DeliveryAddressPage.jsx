import React, { useState } from "react";
import AddAddressModal from "./AddAddressModal";

const DeliveryAddressPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="p-4 max-w-7xl mx-auto ">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Addresses Section */}
        <div className="w-full lg:w-2/3 p-6 rounded-lg shadow-xl">
          <h2 className="text-xl font-semibold mb-4">Select a delivery address</h2>
          <div className="bg-white p-4 rounded shadow-md">
            <h3 className="text-lg font-bold mb-4">Your addresses</h3>

            {/* Address List */}
            <ul className="space-y-4">
              <li className="border rounded p-3 flex items-start justify-between">
                <div>
                  <input type="radio" name="address" className="mr-2" checked />
                  <span>Sajjak Yellareddy circy, FCI Main Road, kadugodi, BENGALURU, KARNATAKA, 560067, India</span>
                  <div className="text-sm text-blue-600 mt-2">
                    <a href="#">Edit address</a> | <a href="#">Add delivery instructions</a>
                  </div>
                </div>
              </li>
              {/* Repeat for other addresses */}
            </ul>

            <button
              onClick={openModal}
              className="text-blue-600 mt-4 flex items-center"
            >
              <span className="text-2xl mr-2">+</span> Add a new address
            </button>
          </div>
        </div>

        {/* Order Summary Section */}
        <div className="w-full lg:w-1/3 p-6 rounded-lg shadow-xl">
          <div className="bg-white p-4 rounded shadow-md">
            <button className="bg-yellow-500 text-white py-2 px-4 rounded-md w-full mb-4">
              Use this address
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

      {/* Modal for Adding New Address */}
      <AddAddressModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default DeliveryAddressPage;
