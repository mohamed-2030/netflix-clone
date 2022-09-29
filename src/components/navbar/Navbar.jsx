import {
  faBell,
  faCaretDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "./navbar.scss";

const Navbar = () => {
  const [isScrolled, setIsScroled] = useState(false);
  window.onscroll = () => {
    window.pageYOffset > 300 ? setIsScroled(true) : setIsScroled(false);
  };
  return (
    <div
      className="navbar"
      style={{ backgroundColor: isScrolled ? "#000000" : "transparent" }}
    >
      <div className="container">
        <div className="left">
          <div className="logo">
            <img
              src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
              alt=""
            />
          </div>
          <div className="nav-link">
            <span>Homepage</span>
            <span>Series</span>
            <span>Movies</span>
            <span>New and popular</span>
            <span>My List</span>
          </div>
        </div>
        <div className="right">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
          <span>KID</span>
          <FontAwesomeIcon icon={faBell} className="icon" />
          <img
            src="https://images.pexels.com/photos/10406699/pexels-photo-10406699.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
          />
          <div className="profil">
            <FontAwesomeIcon icon={faCaretDown} className="icon" />
            <div className="settings">
              <div className="settings-info">
                <span>Setting</span>
                <span>Logout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
