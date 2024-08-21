import React from "react";
import "../pages/Restaurants.css";
import { useState } from "react";
// import { MenuBtn } from "../components/MenuBtn";
import { MenuSlogan } from "../components/MenuSlogan";

import Gallery1 from "../utils/img/Gallery1.png";
import Gallery2 from "../utils/img/Gallery2.png";
import Gallery3 from "../utils/img/Gallery3.png";
import Gallery4 from "../utils/img/Gallery4.png";
import Gallery5 from "../utils/img/Gallery5.png";
import Gallery6 from "../utils/img/Gallery6.png";

import Menulist from "../components/Menulist";

import ReviewPage from "../components/Review";




function Restaurants() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div>
        <header className="h-100 min-vh-100 d-flex align-items-center text-light shadow ">
          <div className="container">
            <div className="row">
             
                <h2 className="d-flex align-items-center justify-content-center text-white spicy">
                  SPICY RESTAURANT
                </h2>
              
            </div>
          </div>
        </header>
        <div className="menus">
          <div className="menu-section py-5 text-light shadow menucard ">
            <div className="container d-flex flex-column align-items-center">
             
                <h2 className="fs-1 mb-5 text-uppercase fw-bold">
                  Our Favorites
                </h2>
             
              <div className="row mb-5 w-100">
                <div className="col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0">
                  
                    <h3 className="fs-2 mb-5">Chinese Main Course</h3>
                 
                  <ul className="px-0">
                    <li className="d-flex justify-content-between">
                     
                        <p className="fs-3 mx-2">White Rice</p>
                        <p className="fs-3 mx-2 text-success fw-nold">₹80</p>
                    
                    </li>
                    <li className="d-flex justify-content-between">
                      
                        <p className="fs-3 mx-2">Veg Fried Rice / Noodles</p>
                        <p className="fs-3 mx-2 text-success fw-nold">₹139</p>
                   
                    </li>
                    <li className="d-flex justify-content-between">
                     
                        <p className="fs-3 mx-2">
                          Mushroom Fried Rice / Noodles
                        </p>
                        <p className="fs-3 mx-2 text-success fw-nold">₹149</p>
                    
                    </li>
                    <li className="d-flex justify-content-between">
                     
                        <p className="fs-3 mx-2">Panner Fried Rice / Noodles</p>
                        <p className="fs-3 mx-2 text-success fw-nold">₹149</p>
                     
                    </li>
                    <li className="d-flex justify-content-between">
                     
                        <p className="fs-3 mx-2">
                          Mexican Fried Rice / Noodles
                        </p>
                        <p className="fs-3 mx-2 text-success fw-nold">₹159</p>
                   
                    </li>
                    <li className="d-flex justify-content-between">
                    
                        <p className="fs-3 mx-2">Gobi Fried Rice / Noodles</p>
                        <p className="fs-3 mx-2 text-success fw-nold">₹159</p>
                      
                    </li>
                    <li className="d-flex justify-content-between">
                     
                        <p className="fs-3 mx-2">
                          Bell Pepper Fried Rice / Noodles
                        </p>
                        <p className="fs-3 mx-2 text-success fw-nold">₹159</p>
                     
                    </li>
                    <li className="d-flex justify-content-between">
                    
                        <p className="fs-3 mx-2">
                          Mixed Veg Fried Rice / Noodles
                        </p>
                        <p className="fs-3 mx-2 text-success fw-nold">₹159</p>
                     
                    </li>
                    <li className="d-flex justify-content-between">
                     
                        <p className="fs-3 mx-2">..Manchown Style</p>
                        <p className="fs-3 mx-2 text-success fw-nold">₹19</p>
                    
                    </li>
                    <li className="d-flex justify-content-between">
                      
                        <p className="fs-3 mx-2">..Schezwan Style</p>
                        <p className="fs-3 mx-2 text-success fw-nold">₹19</p>
                    
                    </li>
                    <li className="d-flex justify-content-between">
                      
                        <p className="fs-3 mx-2">..Hong Kong Style</p>
                        <p className="fs-3 mx-2 text-success fw-nold">₹19</p>
                    
                    </li>
                    <li className="d-flex justify-content-between">
                    
                        <p className="fs-3 mx-2">..Hakka Style</p>
                        <p className="fs-3 mx-2 text-success fw-nold">₹19</p>
                     
                    </li>
                    <li className="d-flex justify-content-between">
                     
                        <p className="fs-3 mx-2">..Chettinad Style</p>
                        <p className="fs-3 mx-2 text-success fw-nold">₹19</p>
                     
                    </li>
                    <li className="d-flex justify-content-between">
                     
                        <p className="fs-3 mx-2">..Singapore Style</p>
                        <p className="fs-3 mx-2 text-success fw-nold">₹19</p>
                     
                    </li>
                    <li className="d-flex justify-content-between">
                     
                        <p className="fs-3 mx-2">..Shangai Style</p>
                        <p className="fs-3 mx-2 text-success fw-nold">₹19</p>
                      
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0 ">
                 
                    <h3 className="fs-2 mb-5">Non Veg Starters</h3>
                 
                  <ul className="px-0">
                    <li className="d-flex justify-content-between">
                 
                        <p className="fs-3 mx-2">Boneless Fish</p>
                        <p className="fs-3 mx-2 text-success fw-nold">₹100</p>
                      
                    </li>
                    <li className="d-flex justify-content-between">
                     
                        <p className="fs-3 mx-2">Chicken Roll</p>
                        <p className="fs-3 mx-2 text-success fw-nold">₹80</p>
                     
                    </li>
                    <li className="d-flex justify-content-between">
                    
                        <p className="fs-3 mx-2">Mutton Roll</p>
                        <p className="fs-3 mx-2 text-success fw-nold">₹100</p>
                     
                    </li>
                    <li className="d-flex justify-content-between">
                     
                        <p className="fs-3 mx-2">Butter Chicken</p>
                        <p className="fs-3 mx-2 text-success fw-nold">₹250</p>
                     
                    </li>
                    <li className="d-flex justify-content-between">
                     
                        <p className="fs-3 mx-2">Chicken Roasted</p>
                        <p className="fs-3 mx-2 text-success fw-nold">₹180</p>
                      
                    </li>
                    <li className="d-flex justify-content-between">
                     
                        <p className="fs-3 mx-2">Chicken Briyani</p>
                        <p className="fs-3 mx-2 text-success fw-nold">₹250</p>
                      
                    </li>
                    <li className="d-flex justify-content-between">
                    
                        <p className="fs-3 mx-2">Mutton Biriyani</p>
                        <p className="fs-3 mx-2 text-success fw-nold">₹300</p>
                     
                    </li>
                    <li className="d-flex justify-content-between">
                      
                        <p className="fs-3 mx-2">Chicken Fried Rice/Noodles</p>
                        <p className="fs-3 mx-2 text-success fw-nold">₹150</p>
                    
                    </li>
                    <li className="d-flex justify-content-between">
                     
                        <p className="fs-3 mx-2">Egg Fried Rice/Noodles</p>
                        <p className="fs-3 mx-2 text-success fw-nold">₹100</p>
                     
                    </li>
                  </ul>
                </div>
              </div>
            
                <MenuSlogan />
             
            </div>
          </div>

          <marquee>
            <section className="sec">
              <div>
                <img className="img-fluid" src={Gallery1} alt="" />
              </div>
              <div>
                <img className="img-fluid" src={Gallery2} alt="" />
              </div>
              <div>
                <img className="img-fluid" src={Gallery3} alt="" />
              </div>
              <div>
                <img className="img-fluid" src={Gallery4} alt="" />
              </div>
              <div>
                <img className="img-fluid" src={Gallery5} alt="" />
              </div>
              <div>
                <img className="img-fluid" src={Gallery6} alt="" />
              </div>
            </section>
          </marquee>
        </div>
      <Menulist/>
      
      <ReviewPage/>
      </div>
    </>
  );
}
export default Restaurants;
