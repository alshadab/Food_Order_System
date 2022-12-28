import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../images/favicon.png"

const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/"><img src={logo} alt="logo" style={{maxWidth:"40px"}}/></Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse "  id="navbarNav">
            <ul class="navbar-nav ms-auto ">
              <li class="nav-item">
                <Link class="nav-link" aria-current="page" to="/">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/about">About US</Link>
              </li>
              <li class="nav-item">
              <Link class="nav-link" to="/contact">Contact US</Link>
              </li>
              <li class="nav-item">
              <Link class="nav-link" to="/t&c">Terms and Condition</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
};

export default Header;