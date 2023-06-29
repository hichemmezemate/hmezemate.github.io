// import { Link } from "react-router-dom";

import '../App.css';
import myImage from "./pictt.png";
import { ImHome3, ImBriefcase, ImMail4 } from "react-icons/im";
import { Link } from 'react-router-dom';


const Navbar = () => {
  let div = "<div>"
  let div2 = "</div>"
  return (
    <nav className="navbar">
      <div className="wrapper">
        <div className="div_style">{div}</div>
        <div className="navbar_logo">
          <img src={myImage} alt="" />
          <div className="overlay">I hope you enjoy my web site</div>
        </div>
        <ul className="navbar_links">
          <Link to="/">
            <li className="navbar_item">
              <ImHome3/>
            </li>
          </Link>
          <Link to="/Projects">
            <li className="navbar_item">
              <ImBriefcase/>
            </li>
          </Link>
          <Link to="/Contact">
            <li className="navbar_item">
              <ImMail4/>
            </li>
          </Link>
        </ul>
        <div className="div_style2">{div2}</div>

      </div>
      
    </nav>
  )

};

export default Navbar;
