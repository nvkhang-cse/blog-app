import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Logo from "../img/logo.png";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="links">
          <Link className="link" to="/?cat=art">
            <h6>ART</h6>
          </Link>
          <Link className="link" to="/?cat=science">
            <h6>SCIENCE</h6>
          </Link>
          <Link className="link" to="/?cat=technology">
            <h6>TECHNOLOGY</h6>
          </Link>
          <Link className="link" to="/?cat=cinema">
            <h6>CINEMA</h6>
          </Link>
          <Link className="link" to="/?cat=design">
            <h6>DESIGN</h6>
          </Link>
          <Link className="link" to="/?cat=food">
            <h6>FOOD</h6>
          </Link>
          <span
            style={{
              marginLeft: "50px",
              fontWeight: "bold",
              fontSize: "18px",
              textTransform: "uppercase",
            }}
          >
            {currentUser?.username}
          </span>
          {currentUser ? (
            <span
              onClick={() => {
                logout();
                navigate("/");
              }}
            >
              Logout
            </span>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )}
          <span
            className="write"
            onClick={() => {
              currentUser ? navigate("/write") : navigate("/login");
            }}
          >
            Write
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
