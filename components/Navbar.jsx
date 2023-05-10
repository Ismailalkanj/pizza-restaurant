import { BsSearch, BsTelephone } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiFullPizza } from "react-icons/gi";
import HamburgerMenu from "../components/HamburgerMenu.jsx";
import { faBars, FaTimes } from "react-icons/fa";
import Link from "next/link.js";

const Navbar = () => {
  return (
    <>
      <section
        id="navbar"
        className=" fixed top-0 z-10 w-full h-28  bg-green-500 px-6 items-center flex justify-between custome-bg rounded- drop-shadow-xl "
      >
        <div className="flex  w-2/12 items-center text-white ">
          <div className="ml-0 mr-2">
            <BsTelephone
              size={20}
              color="red"
              className="bg-white rounded-full w-14 h-14 py-3"
            />
          </div>
          <div>
            <div className="uppercase">Order Now</div>
            <div className="uppercase">123456 78</div>
          </div>
        </div>

        <div className="text-white w-8/12 invisible md:visible">
          <ul className="flex justify-between items-center navbar-list ">
            <li className="hover:text-red-600 hover:bg-white rounded-full p-4 text-lg">
              <Link href="/">Homepage</Link>
            </li>
            {/* <li className="hover:text-red-600 hover:bg-white rounded-full p-4">Products</li> */}
            <li className="hover:text-red-600 hover:bg-white rounded-full p-4 text-lg">
              <Link href="/speisekarte">Speisekarte</Link>
            </li>
            <GiFullPizza size={100} color="white" />
            <li className="hover:text-red-600 hover:bg-white rounded-full p-4 text-lg">
              <Link href="/contact">Contact us</Link>
            </li>
            
            <li className="bg-white rounded-full p-2 text-md font-medium  flex items-center ">
              <input
                className="outline-none text-gray-600"
                placeholder="Search"
              ></input>
              {/* <BsSearch className="text-gray-600"/> */}
              <BsSearch className="text-black" />
            </li>

            {/* <li className="hover:text-red-600 hover:bg-white rounded-full p-4">Login</li> */}
          </ul>
        </div>
        <div className="text-white w-1/12 items-center flex"></div>

        <AiOutlineShoppingCart
          size={40}
          className="ml-auto items-center text-white invisible md:visible"
        />
        <div className="bg-white h-6 w-6 text-center text-red-500 rounded-full  invisible md:visible">
          2
        </div>
        <HamburgerMenu />
      </section>
    </>
  );
};

export default Navbar;
