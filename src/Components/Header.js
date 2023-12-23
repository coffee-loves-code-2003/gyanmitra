import React from 'react';
import logo from '../Images/Gyanmitra_24_logo.png';
function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light " id="navbar">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} width="225px" alt="Logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-expanded="false"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#" style={{ fontFamily: 'Poppins' }}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ fontFamily: 'Poppins' }}>
                About Us
              </a>
            </li>
          </ul>
          <button className="btn p-2 my-lg-0 my-2" id="login" style={{ fontFamily: 'Poppins' }}>
            Login
          </button>
          <button className="btn" id="Register" style={{ fontFamily: 'Poppins' }}>
            Register
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
