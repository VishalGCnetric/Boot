import React from "react";

const NewNavbar = () => {
  return (<>
    <nav className="bg-white w-full shadow-md pb-4">
      <div className="w-full  mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo and Search Bar */}
        <div className="flex w-[90%]  justify-between items-center gap-4 space-x-4">
          <img  src="/bvi20logo20v2png@2x.png" alt="Boots Logo" className="w-24" />
          <div className="relative w-full m-2 ">
            <input
              type="text"
              placeholder="Search products, brands and services..."
              className="border border-gray-300  py-2 px-4 w-full"
            />
            <button className="absolute right-2 top-2 w-5 h-5 text-blue-500">
                <img src="button--search@3x.png" alt="" />
              
            </button>
          </div>
        </div>

        {/* Right side links */}
        <div className="flex items-center space-x-6">
       
          <div className="relative">
          <img
                  className="h-[26px] w-[26px] relative"
                  alt=""
                  src="/img.svg"
                />
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h18v2H3V3zm1 4h16v14H4V7z"
              />
            </svg> */}
            <span className="absolute -top-3 -right-3 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              3
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start justify-start  pt-2.5 px-4 pb-0 text-mid text-wwwbootscom-congress-blue w-full p-4">
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
              {/* Add more links as needed */}
            </div>
          </li>
          <li className="relative group">
            <a href="#" className="text-[inherit]">
              Prescriptions
            </a>
            {/* Dropdown */}
            <div className="absolute left-0 top-full hidden group-hover:flex flex-col space-y-2 bg-white shadow-lg py-2 px-4">
              <a href="#" className="hover:bg-blue-50">
                Medicines
              </a>
              <a href="#" className="hover:bg-blue-50">
                Treatments
              </a>
              {/* Add more links as needed */}
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
  
   </>
  );
};

export default NewNavbar;
