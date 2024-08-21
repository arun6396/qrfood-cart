// Menulist.js
import React from "react";
import { Card, Col, Container, Fade, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from '../ProductSlice';
import "../components/Menulist.css";
import menuGaller1 from "../utils/img/Gallery6.png";
import menuGallery2 from "../utils/img/Gallery7.png";
import menuGallery3 from "../utils/img/Gallery8.png";
import menuGallery4 from "../utils/img/Gallery9.jpg";
import menuGallery5 from "../utils/img/Gallery10.jpg";
import menuGallery6 from "../utils/img/Gallery11.png";
import menuGallery7 from "../utils/img/Gallery12.jpg";
import menuGallery8 from "../utils/img/Gallery13.png";
import menuGallery9 from "../utils/img/Gallery14.png";
import menuGallery10 from "../utils/img/Gallery15.png";
import menuGallery11 from "../utils/img/Gallery16.png";
import menuGallery12 from "../utils/img/Gallery17.png";
import FadeIn from "react-fade-in/lib/FadeIn";



const products = [
  { id: 1, name: "White Rice", Price: 80, FoodImage: menuGaller1 },
  { id: 2, name: "Veg Fried Rice", Price: 100, FoodImage: menuGallery2 },
  { id: 3, name: "Veg Noodles", Price: 140, FoodImage: menuGallery3 },
  { id: 4, name: "Panner Fried Rice", Price: 120, FoodImage: menuGallery4 },
  { id: 5, name: "Butter Chicken rice", Price: 130, FoodImage: menuGallery5 },
  { id: 6, name: "Chicken 65", Price: 80, FoodImage: menuGallery6 },
  { id: 7, name: "Barbeque Chicken", Price: 300, FoodImage: menuGallery7 },
  { id: 8, name: "Chicken Biriyani", Price: 100, FoodImage: menuGallery8 },
  { id: 9, name: "Chicken tikka", Price: 130, FoodImage: menuGallery9 },
  { id: 10, name: "Boneless Fish", Price: 110, FoodImage: menuGallery10 },
  { id: 11, name: "Mutton Biriyani", Price: 180, FoodImage: menuGallery11 },
  { id: 12, name: "Chicken Fried Rice", Price: 120, FoodImage: menuGallery12 },
];

const Menulist = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate

  const handleAddProduct = (product) => {
    dispatch(addToCart({ ...product, quantity: 1 })); 
    navigate('/cart'); 
  };

  return (
    <div>
      <Container>
        <h4 className="d-flex justify-content-center align-items-center text-uppercase text-danger">
          Order now
        </h4>
        <Row>
        
          {products.map((product) => (
            <Col key={product.id}>
           
              <Card className="ca-menu" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={product.FoodImage} className="img-fluid" />
                <Card.Body>
                  <Card.Title className="d-flex justify-content-center">
                    {product.name}
                  </Card.Title>
                  <Card.Text className="d-flex justify-content-center">
                    ₹{product.Price}
                  </Card.Text>
                  <button
                    type="button"
                    className="btns btn btn-secondary fw-bold"
                    onClick={() => handleAddProduct(product)}
                  >
                    Add to Cart
                  </button>
                </Card.Body>
              </Card>
              
            </Col>
          ))}
         
        </Row>
      </Container>
    </div>
  );
};

export default Menulist;
