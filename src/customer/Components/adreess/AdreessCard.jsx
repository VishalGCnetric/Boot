import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";

const AddressCard = ({ heading, address }) => {
  const {
    phoneNumber,
    streetLine1,
    streetLine2,
    city,
    state,
    postalCode,
    country,
  } = address || {};

  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      {/* <h1 className="text-xl text-indigo-900 font-bold mb-4">
        {heading || "Delivery Address"}
      </h1> */}
      <hr className="mb-4" />
      <div className="space-y-4">
        <div>
          <p className="text-lg font-semibold capitalize">
            {address?.fullName ||
              `${address?.firstName || "Vishal"} ${address?.lastName || "Giri"}` ||
              "N/A"}
          </p>
        </div>
        <div className="flex items-start space-x-2">
          <HomeIcon className="w-5 h-5 text-indigo-900 mt-1" />
          <div>
            <p className="text-lg font-semibold capitalize">Address</p>
            <p className="text-sm capitalize">{streetLine1 || "New one Streat"}</p>
            {streetLine2 && (
              <p className="text-sm capitalize">{streetLine2}</p>
            )}
            <p className="text-sm capitalize">
              {`${city || "LA"}, ${state || "flourida"} ${postalCode || "453423"}`}
            </p>
            <p className="text-sm capitalize">{country || "US"}</p>
          </div>
        </div>
        <div className="flex items-start space-x-2">
          <PhoneIcon className="w-5 h-5 text-indigo-900 mt-1" />
          <div>
            <p className="text-lg font-semibold capitalize">Phone Number</p>
            <p className="text-sm capitalize">{phoneNumber || "987654321"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
