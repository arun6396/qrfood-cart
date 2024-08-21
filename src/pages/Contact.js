import React from "react";
import Contactmain from "../components/Contactmain";
import "../pages/Contact.css";
import { Col, Container, Row } from "react-bootstrap";
import QRCode from "qrcode.react";
import QRCodeGenerator from "../components/Qrcode";
import Contactcontent from "../components/Contactcontent";
import StarRating from "../components/StarRating";
import ReviewPage from "../components/Review";
import ContactGallery1 from "../utils/img/contactGallery1.jpg";


function Contact() {
  return (
    <div className="contact">
      <Container>
        <Row>
          <Col>
            
              <img src={ContactGallery1} className="w-100" alt="" />
           {" "}
          </Col>
          <Col className="contactgallery">
            <Contactcontent />
            <StarRating totalStars={5} />
          </Col>
        </Row>
        <div className="contactmain">
          <Contactmain />
        </div>
      </Container>
    </div>
  );
}
export default Contact;
