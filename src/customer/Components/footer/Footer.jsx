import React from 'react';
import NewsLetter from './NewsLetter';

const Footer = () => {
  return (
    <>
    <NewsLetter/>
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-4 gap-8">
        <div>
          <h5 className="text-blue-800 font-semibold mb-4">shopping with us</h5>
          <ul>
            <li><a href="#" className="text-gray-600 hover:text-blue-800">A-Z Brands</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-800">A-Z Store</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-800">Boots Advantage Card</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-800">Boots app</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-800">sitemap</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-blue-800 font-semibold mb-4">customer services</h5>
          <ul>
            <li><a href="#" className="text-gray-600 hover:text-blue-800">help & FAQs</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-800">delivery information</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-800">returns & exchange</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-800">product recall</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-800">contact us</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-blue-800 font-semibold mb-4">about Boots</h5>
          <ul>
            <li><a href="#" className="text-gray-600 hover:text-blue-800">company information</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-800">environmental, social & governance</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-800">modern slavery & human trafficking</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-800">careers</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-800">privacy & cookies</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-800">terms & conditions</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-800">accessibility</a></li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8">
        <h3 className='mb-3 text-blue-600'>Our Partner sites</h3>
      <div className="flex mb-5 space-x-4">
            <a href="#"><img src="https://www.boots.com/wcsstore/eBootsStorefrontAssetStore/Footer_Updated_Images/Boots_Macmillian_2019.png" alt="Partner 1" className="h-8" /></a>
            <a href="#"><img src="https://www.boots.com/wcsstore/eBootsStorefrontAssetStore/Footer_Updated_Images/hgienebank_x_boots_logov3.png" alt="Partner 2" className="h-8" /></a>
           
          </div>
        <div className="border-t border-gray-200 pt-4 flex flex-col sm:flex-row justify-between items-center">
          
          <p className="text-gray-600 text-sm text-center sm:text-left mt-4 sm:mt-0">
          Copyright © The Boots Company PLC. All rights reserved. Boots.com is a trading name of Boots UK Limited. Registered office: Nottingham NG2 3AA.Registered in England: company number 928555. Registered VAT number 116300129. For details of Boots online pharmacy services see Using Our Pharmacy Services page.
          </p>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
