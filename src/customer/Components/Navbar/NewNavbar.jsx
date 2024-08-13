import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import CartItem from "../Cart/CartItem";
import ShoppingCart from "./ShoppingCart";

const NewNavbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <>
      <nav className="bg-white w-full shadow-md pb-4">
        <div className="w-full mx-auto px-4 flex justify-between items-center py-4">
          {/* Logo and Search Bar */}
          <div className="flex w-[90%] justify-between items-center gap-4 space-x-4">
            <img src="/bvi20logo20v2png@2x.png" alt="Boots Logo" className="w-24" />
            <div className="relative w-full m-2">
              <input
                type="text"
                placeholder="Search products, brands and services..."
                className="border border-gray-300 py-2 px-4 w-full"
              />
              <button className="absolute right-2 top-2 w-5 h-5 text-wwwbootscom-deep-cove">
                <img src="button--search@3x.png" alt="" />
              </button>
            </div>
          </div>

          {/* Right side links */}
          <div className="flex items-center space-x-6">
            <div className="relative">
              <IconButton onClick={toggleDrawer(true)}>
                <img
                  className="h-[26px] w-[26px] relative"
                  alt="bag"
                  src="/img.svg"
                />
              </IconButton>
              <span className="absolute -top-1 -right-1 bg-blue-300  text-wwwbootscom-deep-cove text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-start pt-2.5 px-4 pb-0 text-mid text-wwwbootscom-congress-blue w-full p-4">
          <ul className="flex flex-row items-center justify-start gap-8 font-semibold ">
            <li className="relative group">
              <a href="#" className="text-[inherit]">
                Shop by department
              </a>
              {/* Dropdown */}
              <div className="absolute left-0 top-full hidden group-hover:flex flex-col space-y-2 bg-white shadow-lg py-2 px-4">
                <a href="#" className="hover:bg-blue-50">
                  Health & Pharmacy
                </a>
                <a href="#" className="hover:bg-blue-50">
                  Beauty & Skincare
                </a>
              </div>
            </li>
            <li className="relative group">
              <a href="#" className="text-[inherit]">
                Prescriptions
              </a>
              <div className="absolute left-0 top-full hidden group-hover:flex flex-col space-y-2 bg-white shadow-lg py-2 px-4">
                <a href="#" className="hover:bg-blue-50">
                  Medicines
                </a>
                <a href="#" className="hover:bg-blue-50">
                  Treatments
                </a>
              </div>
            </li>
            <li>
              <a href="#" className="text-[inherit]">
                Health hub
              </a>
            </li>
            <li>
              <a href="#" className="text-[inherit]">
                Inspire Me
              </a>
            </li>
            <li>
              <a href="#" className="text-[inherit]">
                Offers No7
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Drawer for bag content */}
      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <div
          className="w-[100%] p-4"
          role="presentation"
          // onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
    {/* <CartItem/> */}
    {/* <Basket/> */}
    <ShoppingCart toggleDrawer={toggleDrawer}/>
        </div>
      </Drawer>
    </>
  );
};

export default NewNavbar;
