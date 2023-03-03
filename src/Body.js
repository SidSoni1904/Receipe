
import React, { useEffect, useState } from 'react'
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
// import { useNavigate } from 'react-router-dom';
import "./MyBody.css"
import axios from 'axios';
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import ShimmerUI from './ShimmerUI';

function Body() {
    
  const [isLoading, setisLoading] = useState(true)
  const [search, setsearch] = useState('')
  const [modal, setModal] = useState(false);
  const [modalData, setmodalData] = useState()
  const [query, setquery] = useState("chinese")
  function recData(data) {
    setmodalData(data);
  }
  const toggle = () => {
    setModal(!modal)
  };
  const [recipes, setrecipes] = useState();

  useEffect(() => {
    setTimeout(() => {
      axios.get(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=f5205240&app_key=2d49b6abdd06529e740a6f1b11e889fe`
      ).then(res => 
      {
        setrecipes(res.data.hits)
        setisLoading(false)
      }
        )
    }, 2000);
  }, [query]);
  

  function handleClick() {
    setquery(search)
  }
    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <InputGroup
            className="mb-3"
            style={{
              width: "25rem",
              marginTop: "2rem",
              borderColor: "transparent",
            }}
          >
            <Form.Control
              placeholder="search your favourite dish"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              value={search}
              onChange={(e) => setsearch(e.target.value)}
            />
            <Button
              style={{ backgroundColor: "brown" }}
              id="btnclick"
              onClick={handleClick}
            >
              🔍
            </Button>
          </InputGroup>
        </div>
        {/* main content section */}
        <div className="mycards">
          {isLoading ? (
            <>
              <ShimmerUI />
              <ShimmerUI />
              <ShimmerUI />
              <ShimmerUI />
            </>
          ) : (
            recipes &&
            recipes.map((e) => (
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

export default Body