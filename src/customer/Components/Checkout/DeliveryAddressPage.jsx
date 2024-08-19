import React, { useEffect, useState } from "react";
import AddAddressModal from "./AddAddressModal";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../../../config/api";
import axios from "axios";
import { getCartItems } from "../../../action/cart";
import { useDispatch, useSelector } from "react-redux";

const DeliveryAddressPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [allAddress, setAllAddress] = useState([]);
  const [selectedAddressId, setSelectedAddressId] = useState(null);
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cartItems.cartItems);

  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);

  const navigate = useNavigate();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleNewOrder = () => {
    if(selectedAddressId){

      navigate(`/checkout?step=${2}`);
    }else{

    }
  };

  const handleSetDeliveryAddress = (address) => {
    localStorage.setItem("deliveryAddress", JSON.stringify(address));
    setSelectedAddressId(address.addressId);
  };

  console.log(selectedAddressId)

  useEffect(() => {
    const fetchAddresses = async () => {
      const wt = localStorage.getItem("wt");
      const wtt = localStorage.getItem("wtt");
      try {
        const res = await axios.get(`${API_BASE_URL}addresses`, {
          headers: {
            wt: wt,
            wtt: wtt,
          },
        });
        // Assuming the addresses are in res.data.contact
        setAllAddress(res.data.contact || []);

      } catch (error) {
        console.error("Error fetching addresses:", error);
      }
    };

    fetchAddresses();
  }, []);

  function formatToTwoDecimalPlaces(number) {
    let strNumber = number.toString();
    let [integerPart, decimalPart] = strNumber.split('.');

    // If there's no decimal part, add ".00"
    if (!decimalPart) {
        return integerPart + '.00';
    }

    // If decimal part is less than 2 digits, pad with zeros
    if (decimalPart.length < 2) {
        return integerPart + '.' + decimalPart.padEnd(2, '0');
    }

    // If decimal part is more than 2 digits, slice to 2 digits
    return integerPart + '.' + decimalPart.slice(0, 2);
}

  return (
    <div className="p-4 max-w-7xl mx-auto ">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Addresses Section */}
        <div className="w-full lg:w-2/3 p-6 rounded-lg shadow-xl">
          <h2 className="text-xl font-semibold mb-4">Select a delivery address</h2>
          <button
            onClick={openModal}
            className="text-blue-600 mt-4 flex items-center"
          >
            <span className="text-2xl mr-2">+</span> Add a new address
          </button>
          <div className="bg-white p-4">
            <h3 className="text-lg font-bold mb-4">Your addresses</h3>

            {/* Address List */}
            <ul className="space-y-4">
              {allAddress.map((address, index) => (
                <li
                  key={address.addressId}
                  className="border rounded p-3 flex items-start justify-between"
                >
                  <div>
                    <input
                      onClick={() => handleSetDeliveryAddress(address)}
                      type="radio"
                      name="address"
                      className="mr-2"
                      checked={selectedAddressId === address.addressId}
                      onChange={() => handleSetDeliveryAddress(address)}
                    />
                    <span>
                      {address.firstName} {address.lastName}, {address.addressLine?.join(", ")}{" "}
                      {address.city}, {address.state}, {address.zipCode}, {address.country || "India"}
                    </span>
                    {/* <div className="text-sm text-blue-600 mt-2">
                      <a href="#" onClick={() => handleEditAddress(address)}>Edit address</a> |{" "}
                      <a href="#" onClick={() => handleAddDeliveryInstructions(address)}>
                        Add delivery instructions
                      </a>
                    </div> */}
                  </div>
                </li>
              ))}
            </ul>


          </div>
        </div>

        {/* Order Summary Section */}
        <div className="w-full lg:w-1/3 p-6 h-full rounded-lg shadow-xl">
          <div className="bg-white p-4 ">
            <button onClick={handleNewOrder} className="bg-wwwbootscom-congress-blue hover:bg-btn-hover text-white py-2 px-4 rounded-md w-full mb-4">
              Use this address
            </button>
            
            <div className="border-t pt-4">
              <h3 className="text-lg font-semibold mb-2">Order Summary</h3>
              <p>Items: --</p>
              <p>Delivery: --</p>
              <p className="text-lg font-bold text-red-600 mt-4">Order Total: ₹{formatToTwoDecimalPlaces(cart?.grandTotal)}</p>
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
