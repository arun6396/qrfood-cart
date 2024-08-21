import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Restaurants from "./pages/Restaurants";
import { updateQuantity } from './ProductSlice';
import { useSelector, useDispatch } from 'react-redux';
import cartimg from "./utils/img/Cart.png";
import { Cart } from "./Cart";
import React from "react";
import { Fade } from "react-bootstrap";

function App() {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  return (
    <div>
      <Navbar expand="lg" className="fixed-top bg-body-tertiary shadow">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="navbar-brand text-success fw-semibold">
              QR Restaurant
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto justify-content-end w-100">
           
            <Nav.Link as={Link} to="/" className="text-uppercase link text-danger ">
            <strong>
                Home
                </strong>
              </Nav.Link>
              
              <Nav.Link as={Link} to="/menu" className="text-uppercase link text-danger">
              <strong> Menu</strong>
               
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="text-uppercase link text-danger">
                 <strong>About</strong>
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" className="text-uppercase link text-danger">
                <strong>Contact</strong> 
              </Nav.Link>
              <Nav.Link as={Link} to="/cart" className="text-uppercase link text-danger">
                <img className="cart" src={cartimg} alt="Cart" />
                {cart.length > 0 && (
                  <span className="bag-quantity">
                    <span>{cart.reduce((acc, item) => acc + item.quantity, 0)}</span>
                  </span>
                )}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <footer className="bg-body-tertiary">
        <div className="text-center">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </a>
          <a href="mailto:arunsiva160@gmail.com">
            <i className="fa fa-envelope"></i>
          </a>
        </div>
        <p className="p-3 m-0 text-center">&copy; Food Restaurant 2023</p>
      </footer>
    </div>
  );
}

export default App;
