import React, { useState } from 'react';
import AddressCard from './AdreessCard';

const addressData = [
    {
        lastName: "Garcia",
        zipCode: "12345",
        firstName: "Juan",
        email1: "juang@example.com",
        city: "Mexico City",
        addressType: "ShippingAndBilling",
        state: "Mexico City",
        addressLine: ["Av. Insurgentes Sur 123", "Col. Condesa", ""],
        addressId: "3074457365572057425",
        primary: "true",
        phone1: "5543219876"
    },
    {
        lastName: "Smith",
        zipCode: "54321",
        firstName: "John",
        email1: "johnsmith@example.com",
        city: "Los Angeles",
        addressType: "Shipping",
        state: "California",
        addressLine: ["123 Main St", "Suite 400", ""],
        addressId: "3074457365572057426",
        primary: "false",
        phone1: "2139876543"
    },
    {
        lastName: "Kumar",
        zipCode: "110001",
        firstName: "Raj",
        email1: "rajkumar@example.com",
        city: "New Delhi",
        addressType: "Billing",
        state: "Delhi",
        addressLine: ["45 Janpath", "Connaught Place", ""],
        addressId: "3074457365572057427",
        primary: "false",
        phone1: "911234567890"
    }
];

const AddressBook = () => {
    const [addresses, setAddresses] = useState(addressData);
    const [newAddress, setNewAddress] = useState({
        lastName: "",
        zipCode: "",
        firstName: "",
        email1: "",
        city: "",
        addressType: "ShippingAndBilling",
        state: "",
        addressLine: ["", "", ""],
        addressId: "",
        primary: "false",
        phone1: ""
    });

    const [selectedAddressId, setSelectedAddressId] = useState(addressData[0]?.addressId || '');
    const [isFormVisible, setIsFormVisible] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewAddress({ ...newAddress, [name]: value });
    };

    const handleAddressLineChange = (e, index) => {
        const newAddressLines = [...newAddress.addressLine];
        newAddressLines[index] = e.target.value;
        setNewAddress({ ...newAddress, addressLine: newAddressLines });
    };

    const handleAddAddress = () => {
        const newId = `3074457365572057${Math.floor(Math.random() * 1000)}`;
        const updatedNewAddress = { ...newAddress, addressId: newId, primary: "true" };
        setAddresses([updatedNewAddress, ...addresses.map(addr => ({ ...addr, primary: "false" }))]);
        setSelectedAddressId(newId);
        setIsFormVisible(false);
        setNewAddress({
            lastName: "",
            zipCode: "",
            firstName: "",
            email1: "",
            city: "",
            addressType: "ShippingAndBilling",
            state: "",
            addressLine: ["", "", ""],
            addressId: "",
            primary: "false",
            phone1: ""
        });
    };

    const handleShowForm = () => {
        setIsFormVisible(!isFormVisible);
    };

    const selectedAddress = addresses.find(address => address.addressId === selectedAddressId);

    return (
        <div>
            <h2 className="text-xl font-bold py-2 text-indigo-900">My Address Book</h2>
<p>Select primary address from hear</p>
            {/* Select Address Dropdown */}
            <select
                className="p-2 border my-2 rounded w-full mb-4"
                value={selectedAddressId}
                onChange={(e) => setSelectedAddressId(e.target.value)}
            >
                <option value="">Select Address</option>
                {addresses.map((address) => (
                    <option key={address.addressId} value={address.addressId}>
                        {`${address.firstName} ${address.lastName} - ${address.city}`}
                    </option>
                ))}
            </select>

            {/* Display Selected Address Details */}
            <h2 className="text-xl font-bold py-2 text-indigo-900">Primary Address</h2>
            {selectedAddress && (
                <div className="border-2 border-indigo-900">
                <AddressCard address={selectedAddress}/>
                </div>
            )}

            {/* Address Cards */}

            <h2 className="text-xl font-bold py-2 mt-4 text-indigo-900">All Addresses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {addresses.map((address) => (
                    <div className={`cursor-pointer`} onClick={()=>{setSelectedAddressId(address.addressId)}}>
                                   <AddressCard address={address}/>
                                   </div>

                ))}
            </div>

            {/* Add New Address Form */}
            {!isFormVisible && <button
                onClick={handleShowForm}
                className="bg-indigo-900 text-white py-2 px-4 rounded mb-4"
            >
                Add New Address
            </button>
}
            {isFormVisible && (
                <div>
                    <h3 className="text-xl text-indigo-900 font-semibold mb-2">Add New Address</h3>
                    <input
                        type="text"
                        name="firstName"
                        value={newAddress.firstName}
                        onChange={handleInputChange}
                        className="p-2 border rounded w-full mb-2"
                        placeholder="First Name"
                    />
                    <input
                        type="text"
                        name="lastName"
                        value={newAddress.lastName}
                        onChange={handleInputChange}
                        className="p-2 border rounded w-full mb-2"
                        placeholder="Last Name"
                    />
                    <input
                        type="text"
                        value={newAddress.addressLine[0]}
                        onChange={(e) => handleAddressLineChange(e, 0)}
                        className="p-2 border rounded w-full mb-2"
                        placeholder="Address Line 1"
                    />
                    <input
                        type="text"
                        value={newAddress.addressLine[1]}
                        onChange={(e) => handleAddressLineChange(e, 1)}
                        className="p-2 border rounded w-full mb-2"
                        placeholder="Address Line 2"
                    />
                    <input
                        type="text"
                        value={newAddress.addressLine[2]}
                        onChange={(e) => handleAddressLineChange(e, 2)}
                        className="p-2 border rounded w-full mb-2"
                        placeholder="Address Line 3"
                    />
                    <input
                        type="text"
                        name="city"
                        value={newAddress.city}
                        onChange={handleInputChange}
                        className="p-2 border rounded w-full mb-2"
                        placeholder="City"
                    />
                    <input
                        type="text"
                        name="state"
                        value={newAddress.state}
                        onChange={handleInputChange}
                        className="p-2 border rounded w-full mb-2"
                        placeholder="State"
                    />
                    <input
                        type="text"
                        name="zipCode"
                        value={newAddress.zipCode}
                        onChange={handleInputChange}
                        className="p-2 border rounded w-full mb-2"
                        placeholder="Zip Code"
                    />
                    <input
                        type="text"
                        name="phone1"
                        value={newAddress.phone1}
                        onChange={handleInputChange}
                        className="p-2 border rounded w-full mb-2"
                        placeholder="Phone Number"
                    />
                    <input
                        type="email"
                        name="email1"
                        value={newAddress.email1}
                        onChange={handleInputChange}
                        className="p-2 border rounded w-full mb-2"
                        placeholder="Email"
                    />
                    <button
                        onClick={handleAddAddress}
                        className="bg-indigo-900 text-white py-2 px-4 rounded mt-4 hover:bg-indigo-950"
                    >
                        Add Address
                    </button>
                    <button
onClick={handleShowForm}                        className="text-indigo-900 border-2 border-indigo-900 ml-10 bg-white hover:bg-red-500 hover:text-white py-2 px-4 rounded mt-4"
                    >
Cancle                    </button>
                </div>
            )}
        </div>
    );
};

export default AddressBook;
