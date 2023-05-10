import { useState } from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link.js";
import { BsSearch } from 'react-icons/bs';
function HamburgerMenu() {
const [isActive, setIsActive] = useState(false);

const handleToggle = () => {
    setIsActive(!isActive);
};

return (
    <div className="hamburger-menu ">
    <div className={`hamburger-icon  ${isActive ? 'active' : ''}`} onClick={handleToggle}>
        <span></span>
        <span></span>
        <span></span>
    </div>
    
    <ul className={`menu-items   ${isActive ? 'active' : ''}`}>

        <Link href="/">Homepage</Link>
        
        <Link href="/speisekarte">SpeiseKarte</Link>
        
        <Link href="/contact">Contact us</Link>

        

        <li><AiOutlineShoppingCart size={40} className="cart  text-black ml-20"/></li>
        
    </ul>
    
    </div>
);
}

export default HamburgerMenu;

