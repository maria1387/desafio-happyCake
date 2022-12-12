import { Link } from "react-router-dom";
import { FcHome } from "react-icons/fc";
import { FcContacts } from "react-icons/fc";
import { GiCakeSlice } from "react-icons/gi";
import { useState } from "react";
import BurguerButton from "./BurguerButton";
const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <nav className="">
      <div className="navContainer contenedor">
        <div className="burguer">
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <div className={`links ${clicked ? "active" : ""}`}>
          <Link to="/"  onClick={handleClick}className="navLink">
            <FcHome className="icon" /> Home
          </Link>
          <Link to="/contact"  onClick={handleClick} className="navLink">
            <FcContacts className="icon" /> Contact
          </Link>
        </div>

        <h3 className="h3" to="/">
          Happy Cake <GiCakeSlice />
        </h3>
      </div>

      <div className={`inicial ${clicked ? "active" : ""}`}></div>
    </nav>
  );
};

export default Navbar;
