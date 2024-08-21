import React from "react";
import Card from "react-bootstrap/Card";
import "../pages/Menu.css";
import resimg1 from "../utils/img/resimg1.jpg";
import resimg2 from "../utils/img/resimg2.jpg";
import resimg3 from "../utils/img/resimg3.jpg";
import resimg4 from "../utils/img/resimg4.jpg";
import resimg5 from "../utils/img/resimg5.jpg";
import resimg6 from "../utils/img/resimg6.jpg";
import resimg7 from "../utils/img/resimg7.jpg";
import resimg8 from "../utils/img/resimg8.jpg";
import resimg9 from "../utils/img/resimg9.jpg";
import resimg10 from "../utils/img/resimg10.jpg";
import resimg11 from "../utils/img/resimg11.jpg";
import resimg12 from "../utils/img/resimg12.jpg";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";


function Menu() {
  const restuarantData = [
    { title: "Spicy restuarant", slogan: "asdfas asdfdfgs dfsdf df " },
    
  ];
  return (
    <div className="menu-page">
      <header className="mt-5">
        <div className="container h-100 d-flex align-items-center justify-content-center">
         
            <h1 className="text-light menuhead">RESTAURANTS</h1>
        
        </div>
      </header>
      <Container>
        <Row>
          <Col>
           
              <Card className="ca" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={resimg1} className="img-fluid " />
                <Card.Body>
                  <Card.Title className="d-flex justify-content-center">
                    Spicy Restaurant
                  </Card.Title>
                  <Card.Text className="d-flex justify-content-center">
                    A Gastronomic Journey Awaits
                  </Card.Text>
                  <Link to="/restaurants">
                    <button type="button" className=" btn btn-outline-success ">
                      View
                    </button>
                  </Link>
                </Card.Body>
              </Card>
            
          </Col>
          <Col>
            
              <Card className="ca" xs={5} style={{ width: "18rem" }}>
                <Card.Img variant="top" src={resimg2} className="img-fluid " />
                <Card.Body>
                  <Card.Title className="d-flex justify-content-center">
                    Jungle Food Restaurant
                  </Card.Title>
                  <Card.Text className="d-flex justify-content-center">
                    Where Flavor and Ambiance Unite
                  </Card.Text>
                  <button type="button" className=" btn btn-outline-success ">
                    View
                  </button>
                </Card.Body>
              </Card>
            
          </Col>
          <Col>
            
              <Card className="ca" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={resimg3} className="img-fluid " />
                <Card.Body>
                  <Card.Title className="d-flex justify-content-center">
                    Annai Restaurant
                  </Card.Title>
                  <Card.Text className="d-flex justify-content-center">
                    Where Flavor and Ambiance Unite
                  </Card.Text>
                  <button type="button" className=" btn btn-outline-success ">
                    View
                  </button>
                </Card.Body>
              </Card>
            
          </Col>
        </Row>
        <Row>
          <Col>
            
              <Card className="ca" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={resimg4} className="img-fluid " />
                <Card.Body>
                  <Card.Title className="d-flex justify-content-center">
                    V4 Dhabba
                  </Card.Title>
                  <Card.Text className="d-flex justify-content-center">
                    Fulfill your comfort food cravings
                  </Card.Text>
                  <button type="button" className=" btn btn-outline-success ">
                    View
                  </button>
                </Card.Body>
              </Card>
                      </Col>
          <Col>
                          <Card className="ca" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={resimg8} className="img-fluid " />
                <Card.Body>
                  <Card.Title className="d-flex justify-content-center">
                    Coffee Time
                  </Card.Title>
                  <Card.Text className="d-flex justify-content-center">
                    Coffee with a side of life
                  </Card.Text>
                  <button type="button" className=" btn btn-outline-success ">
                    View
                  </button>
                </Card.Body>
              </Card>
            
          </Col>
          <Col>
            
              <Card className="ca" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={resimg12} className="img-fluid " />
                <Card.Body>
                  <Card.Title className="d-flex justify-content-center">
                    Indian Cafe
                  </Card.Title>
                  <Card.Text className="d-flex justify-content-center">
                    Coffee Makes Everything Possible
                  </Card.Text>
                  <button type="button" className=" btn btn-outline-success ">
                    View
                  </button>
                </Card.Body>
              </Card>
            
          </Col>
        </Row>

        <Row>
          <Col>
            
              <Card className="ca" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={resimg5} className="img-fluid  " />
                <Card.Body>
                  <Card.Title className="d-flex justify-content-center">
                    FoodCart Restaurant
                  </Card.Title>
                  <Card.Text className="d-flex justify-content-center">
                    Feel the joy of mouthwatering food
                  </Card.Text>
                  <button type="button" className=" btn btn-outline-success ">
                    View
                  </button>
                </Card.Body>
              </Card>
            
          </Col>
          <Col>
            
              <Card className="ca" xs={5} style={{ width: "18rem" }}>
                <Card.Img variant="top" src={resimg6} className="img-fluid " />
                <Card.Body>
                  <Card.Title className="d-flex justify-content-center">
                    FoodStation Restaurants
                  </Card.Title>
                  <Card.Text className="d-flex justify-content-center">
                    Food that’s good for your heart
                  </Card.Text>
                  <button type="button" className=" btn btn-outline-success ">
                    View
                  </button>
                </Card.Body>
              </Card>
            
          </Col>
          <Col>
            
              <Card className="ca" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={resimg7} className="img-fluid " />
                <Card.Body>
                  <Card.Title className="d-flex justify-content-center">
                    FoodAlert Restaurant
                  </Card.Title>
                  <Card.Text className="d-flex justify-content-center">
                    Nothing brings people together like good food
                  </Card.Text>
                  <button type="button" className=" btn btn-outline-success ">
                    View
                  </button>
                </Card.Body>
              </Card>
            
          </Col>
        </Row>
        <Row>
          <Col>
            
              <Card className="ca" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={resimg9} className="img-fluid " />
                <Card.Body>
                  <Card.Title className="d-flex justify-content-center">
                    Classic Food Restaurant
                  </Card.Title>
                  <Card.Text className="d-flex justify-content-center">
                    Creativity is always on our menu
                  </Card.Text>
                  <button type="button" className=" btn btn-outline-success ">
                    View
                  </button>
                </Card.Body>
              </Card>
            
          </Col>
          <Col>
            
              <Card className="ca" xs={5} style={{ width: "18rem" }}>
                <Card.Img variant="top" src={resimg10} className="img-fluid " />
                <Card.Body>
                  <Card.Title className="d-flex justify-content-center">
                    Curry in a Hurry
                  </Card.Title>
                  <Card.Text className="d-flex justify-content-center">
                    Where Flavor and Ambiance Unite
                  </Card.Text>
                  <button type="button" className=" btn btn-outline-success ">
                    View
                  </button>
                </Card.Body>
              </Card>
            
          </Col>
          <Col>
            
              <Card className="ca" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={resimg11} className="img-fluid " />
                <Card.Body>
                  <Card.Title className="d-flex justify-content-center">
                    Gravity Restaurant
                  </Card.Title>
                  <Card.Text className="d-flex justify-content-center">
                    We have the best food in town
                  </Card.Text>
                  <button type="button" className=" btn btn-outline-success ">
                    View
                  </button>
                </Card.Body>
              </Card>
            
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Menu;
