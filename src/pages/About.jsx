import React from "react";


import AboutGallery1 from "../utils/img/AboutGallery1.png";
import "../pages/About.css";
import AboutGallery2 from "../utils/img/AboutGallery2.png";
import AboutGallerymain from "../utils/img/AboutGallerymain.png";
import { Col, Container, Row } from "react-bootstrap";
function About() {
  return (
    <div className="about">
      <div className="about_head">
        <Container>
          <Row>
            <Col>
              {" "}
            
                <img src={AboutGallerymain} className="imgfluid " alt="" />
             
            </Col>
          </Row>
        </Container>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6 d-flex justify-content-center d-none d-lg-flex">
            <img
              src={require("../utils/img/AboutGallery2.png")}
              className="imgfluid w-50 App-logo  aboutim"
              alt="about img"
            />
          </div>

          <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center">
           
              <h2 className="fs-1 mb-5 text-uppercase fw-bold abouthead ">
                About us
              </h2>
            
              <p>
                Welcome to QR Restaurant, where culinary excellence
                meets a warm and inviting atmosphere. Our passion for creating
                memorable dining experiences drives everything we do.
              </p>
            
              <h5 className="d-flex justify-content-center align-item-center">
                Our Story
              </h5>
           
              <p className="mb-5">
                At QR Restaurant, our journey began with a shared
                love for exquisite flavors and a commitment to providing
                unparalleled service. Established in [Year], we set out to
                create a haven for food enthusiasts, a place where each dish
                tells a story and every visit feels like a culinary adventure.
              </p>
            
          </div>
          <Container>
            <Row>
              <Col>
                
                  <h5 className="d-flex justify-content-center align-item-center">
                    Ambiance
                  </h5>
               
                
                  <p className="mb-5">
                    Step into QR Restaurant and discover a space
                    designed to evoke a sense of comfort and sophistication. Our
                    ambiance is thoughtfully crafted to enhance your dining
                    experience, whether you're enjoying a romantic evening, a
                    family celebration, or a casual get-together with friends.
                  </p>
                
              </Col>
              <Col>
                
                  <h5 className="d-flex justify-content-center align-item-center">
                    Culinary Philosophy
                  </h5>
                
                  <p className="mb-5">
                    Our chefs meticulously curate each menu item, sourcing the
                    freshest ingredients to ensure every bite is a celebration
                    of taste. We take pride in blending traditional flavors with
                    innovative techniques, creating a menu that reflects our
                    dedication to culinary excellence.
                  </p>
                
              </Col>
            </Row>
            <Row>
              <Col>
                
                  <h5 className="d-flex justify-content-center align-item-center">
                    Community Commitment
                  </h5>
                
                  <p className="mb-5">
                    Beyond the kitchen, we are committed to giving back to the
                    community that has embraced us. Through partnerships with
                    local farmers and charities, we strive to contribute to the
                    well-being of our neighborhood.
                  </p>
                
              </Col>
              <Col>
                
                  <h5 className="d-flex justify-content-center align-item-center">
                    Customer Reviews
                  </h5>
                
                  <p className="mb-5">
                    Your feedback is invaluable to us. We invite you to share
                    your thoughts and experiences on our review page. Your
                    reviews guide us on our quest for continuous improvement,
                    ensuring that every visit exceeds your expectations. Scan
                    the QR code below or visit to leave a review and let us know
                    how we're doing. Thank you for being a part of the{" "}
                    QR Restaurant family!
                  </p>
                
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}
export default About;
