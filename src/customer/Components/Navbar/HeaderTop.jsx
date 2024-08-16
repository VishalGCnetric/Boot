import { Link } from "react-router-dom";

const HeaderTop = () => {
  return (
    <div className="flex justify-end w-full text-xs">
      <div className="flex justify-between w-full bg-gray-100 p-2">
        <div className="flex gap-5">
          <div className="flex items-center gap-2">
            <a href="#" className="text-black">
              Ship to
            </a>
            <img
              className="w-5 h-3 object-cover"
              alt="Ship to"
              src="/image@2x.png"
            />
          </div>
          <div className="flex items-center gap-2 border-r border-gray-300 pr-3">
            <a href="#" className="text-black">
              Find a store
            </a>
            <img
              className="w-5 h-5"
              alt="Find a store"
              src="/image-1.svg"
            />
          </div>
          <div className="flex items-center gap-2">
            <a href="#" className="text-black">
              Help
            </a>
            <img
              className="w-8 h-8  pt-2"
              alt="Help"
              src="/image-2.svg"
            />
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <Link to="/login" className="text-black">
              Log in/register
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-2 border-l border-gray-300 pl-3 text-red-500">
            <a href="#" className="text-red-500">
              Boots Advantage Card
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
