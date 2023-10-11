import ShopCard from "./ShopCard";
import { milkshakes } from "./Body";
import { useState } from "react";
import Body from "./Body";
 const Header = () => //component name must start with caps
{
    
  return (
    <nav className='head'>
      
    <img className='shopLogo'  
    src="https://img.freepik.com/premium-vector/milkshake-logo_713663-88.jpg?w=2000" alt ="logo">
    
    </img>
    
    
    <ul className='Nav'>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
    </nav>
  );
};

export default Header;