import React from "react";
import { MenuBtn } from "../components/MenuBtn";
import "./Home.css";
import ContactInfo from "../components/ContactInfo";
import Contactimg from "../utils/img/ContactInfo.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import TextA from "../components/TextA";


function Home() {
  return (
    <div className="home-page">
      <header className="h-100 min-vh-100 d-flex align-items-center text-light shadow">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 d-flex d-sm-block flex-column align-items-center">
              
                <h2 className="mb-0 text-black  fw-bold   "> Welcome To</h2>
              
             
                <h1 className="mb-5 text-black fw-bold text-center text-sm-start">
                  <TextA />
                </h1>
             
            
                <MenuBtn />
              
            </div>
          </div>
        </div>
      </header>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6 d-flex justify-content-center d-none d-lg-flex">
          
              <img
                src={require("../utils/img/about.png")}
                className="imgfluid w-50"
                alt="about img"
              />
           
          </div>
          <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center">
           
              <h2 className="fs-1 mb-5 text-uppercase fw-bold">About us</h2>
            
            
              <p>
                Welcome to QR Restaurant, where culinary excellence
                meets a warm and inviting atmosphere. Our passion for creating
                memorable dining experiences drives everything we do.
              </p>
            
            
              <p className="mb-5">
                At QR Restaurant, our journey began with a shared
                love for exquisite flavors and a commitment to providing
                unparalleled service. Established in 1999, we set out to create
                a haven for food enthusiasts, a place where each dish tells a
                story and every visit feels like a culinary adventure.
              </p>
            
            <Link to="/about">
              
                <button
                  type="button"
                  className="btn btn-outline-success btn-lg"
                >
                  More About us
                </button>
              
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-dark text-light py-5 shadow">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-cloumn align-items-center justify-content-center mb-5 mb-lg-0">
              
                <ContactInfo />
              
            </div>
            <div className="col-lg-6 d-flex justify-content-center">
              <img src={Contactimg} className="img-fluid w-50" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
