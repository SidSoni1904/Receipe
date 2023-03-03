import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Skeleton from "react-loading-skeleton";
import "./Menu.css"
import ShimmerUI from "./ShimmerUI";

// import { Link , Outlet} from 'react-router-dom'

export default function Menu() {
  const [isLoading, setisLoading] = useState(true)
  const [response, setresponse] = useState();
  const [filter, setfilter] = useState("gujarati");
  const [modal, setModal] = useState(false);
  const [modalData, setmodalData] = useState();





  function recData(data) {
    setmodalData(data);
  }
  const toggle = () => {
    setModal(!modal);
  };
  useEffect(() => {
      setTimeout(() => {
        getRecipe();
      }, 3000);
    }, [filter]);
  const getRecipe = async () => {
    const response = await axios.get(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${filter}&app_id=f5205240&app_key=2d49b6abdd06529e740a6f1b11e889fe`
    );
    setresponse(response.data.hits);
    setisLoading(false)
    // console.log(response)
  };
  return (
    <>
      <div className="mybtns">
        <Navbar expand="lg">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link id="navhead">
                  <button onClick={() => setfilter("Gujarati")}>
                    Gujarati
                  </button>
                </Nav.Link>
                <Nav.Link id="navhead">
                  <button onClick={() => {
                    if (isLoading) {
                      return (
                        <ShimmerUI/>
                      )
                    } else {   
                      setfilter("South Indian");
                    }
                  } }>
                    South Indian
                  </button>
                </Nav.Link>
                <Nav.Link id="navhead">
                  <button onClick={() => setfilter("North Indian")}>
                    North Indian
                  </button>
                </Nav.Link>
                <Nav.Link id="navhead">
                  <button onClick={() => setfilter("Chinese")}>Chinese</button>
                </Nav.Link>
                <Nav.Link id="navhead">
                  <button onClick={() => setfilter("Egg")}>Eggeterian</button>
                </Nav.Link>
                <Nav.Link id="navhead">
                  <button onClick={() => setfilter("veg")}>Veg Special</button>
                </Nav.Link>
                <Nav.Link id="navhead">
                  <button onClick={() => setfilter("non veg")}>
                    Non Veg Special
                  </button>
                </Nav.Link>
                <Nav.Link id="navhead">
                  <button onClick={() => setfilter("Mexican")}>Mexican</button>
                </Nav.Link>
                <Nav.Link id="navhead">
                  <button onClick={() => setfilter("Italian")}>Italian</button>
                </Nav.Link>
                <Nav.Link id="navhead">
                  <button onClick={() => setfilter("milk")}>Shakes</button>
                </Nav.Link>
                <Nav.Link id="navhead">
                  <button onClick={() => setfilter("ice cream")}>Desert</button>
                </Nav.Link>
                <Nav.Link id="navhead">
                  <button onClick={() => setfilter("cocktail")}>
                    Cocktail
                  </button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      {/* filtered Cards */}
      <div className="mycards">
        {
          isLoading ? (
            <>
              <ShimmerUI />
              <ShimmerUI />
              <ShimmerUI />
              <ShimmerUI/>
            </>
          ) :
            (
              response &&
          response.map((e) => (
            <Row xs={1} md={1}>
              <Col>
                <Card id="cards">
                  <Card.Img variant="top" src={e.recipe.image} />
                  <Card.Body>
                    <Card.Title>
                      {e.recipe.label.slice(0, 20).toUpperCase()}...
                    </Card.Title>
                    <Card.Text>
                      <h6>Cuisine Type : {e.recipe.cuisineType[0]}</h6>
                    </Card.Text>
                    <Card.Text>
                      <h6>Diet Label : {e.recipe.dietLabels[0]}</h6>
                    </Card.Text>
                    <Card.Text>
                      <h6>Calories : {Math.floor(e.recipe.calories)}</h6>
                    </Card.Text>
                    <Button
                      style={{
                        backgroundColor: "brown",
                        borderColor: "transparent",
                      }}
                      onClick={() => {
                        toggle();
                        recData(e.recipe.ingredients);
                      }}
                    >
                      Show Recipe
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          ))
            )
      }




        

        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle} className="modalbody">
            Recipe
          </ModalHeader>
          <ModalBody className="modalbody">
            <ol>{modalData && modalData.map((e) => <li>{e.text}</li>)}</ol>
          </ModalBody>
        </Modal>
      </div>
    </>
  );
}
