import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddAddressModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate()
  // Prevent background scrolling when the modal is open

const handleAddress = ()=>{
  navigate(`/checkout?step=${1}`);
  alert('hello world')
}

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; // Ensure scrolling is reset on component unmount
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-2xl p-6 rounded-md shadow-md overflow-y-auto max-h-screen">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Enter a new delivery address</h2>
          <button onClick={onClose} className="text-2xl font-semibold">
            &times;
          </button>
        </div>

        <h3 className="text-lg font-semibold mb-4">Add a new address</h3>

        <button className="bg-blue-100 text-blue-700 py-2 px-4 rounded-md mb-4 flex items-center">
          <span>Save time. Autofill your current location.</span>
          <button className="ml-2 bg-blue-200 text-blue-700 py-1 px-2 rounded-md">Autofill</button>
        </button>

        {/* Form Inputs */}
        <form  className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Country/Region</label>
            <select className="w-full border border-gray-300 rounded-md p-2 mt-1">
              <option>India</option>
              {/* Add more options as needed */}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium">Full name (First and Last name)</label>
            <input type="text" className="w-full border border-gray-300 rounded-md p-2 mt-1" />
          </div>

          <div>
            <label className="block text-sm font-medium">Mobile number</label>
            <input type="text" className="w-full border border-gray-300 rounded-md p-2 mt-1" placeholder="May be used to assist delivery" />
          </div>

          <div>
            <label className="block text-sm font-medium">Pincode</label>
            <input type="text" className="w-full border border-gray-300 rounded-md p-2 mt-1" placeholder="6 digits [0-9] PIN code" />
          </div>

          <div>
            <label className="block text-sm font-medium">Flat, House no., Building, Company, Apartment</label>
            <input type="text" className="w-full border border-gray-300 rounded-md p-2 mt-1" />
          </div>

          <div>
            <label className="block text-sm font-medium">Area, Street, Sector, Village</label>
            <input type="text" className="w-full border border-gray-300 rounded-md p-2 mt-1" />
          </div>

          <div>
            <label className="block text-sm font-medium">Landmark</label>
            <input type="text" className="w-full border border-gray-300 rounded-md p-2 mt-1" placeholder="E.g. near Apollo hospital" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Town/City</label>
              <input type="text" className="w-full border border-gray-300 rounded-md p-2 mt-1" />
            </div>
            <div>
              <label className="block text-sm font-medium">State</label>
              <select className="w-full border border-gray-300 rounded-md p-2 mt-1">
                <option>Choose a state</option>
                {/* Add more options as needed */}
              </select>
            </div>
          </div>

          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <label className="text-sm">Make this my default address</label>
          </div>

          <div className="text-blue-600 text-sm mt-4">
            <a href="#" className="hover:underline">
              Add preferences, notes, access codes and more
            </a>
          </div>

          <button   className="bg-wwwbootscom-congress-blue hover:bg-btn-hover text-white py-2 px-4 rounded-md mt-4 w-full">
            <Link to=''> Use this address</Link>
           
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddAddressModal;
