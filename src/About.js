import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Img } from "./images/Img";

function hello() {
  return (
    <Container>
      <Row>
        <Col>
          <img src={Img.Logo} />
        </Col>
        <Col
          style={{
            fontFamily: "poppins",
            color: "brown",
            paddingTop: "7rem",
            fontWeight: "bolder",
          }}
        >
          <h1>CHEF'S PLACE 👨‍🍳</h1>
          <p>Find Your Favourite Dish Receipe ....</p>
          <p></p>
          <br></br>
          <div style={{ fontSize: "20px"}}>
            <ul>
              <li>
                Getting Stuck again and again how to cook your favourite food ? 🙆‍♂️
              </li>
              <li>
                Getting Problems with ingredients ? 🙆‍♂️
              </li>
              <li>
                Don't Worry Here We are 💁‍♂️ <br></br>
                Here you will get receipe of each dish you wish to cook , So
                what you are waiting for , find your favourite dish receipe and
                show others you are expert in cooking 👩‍🍳{" "}
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default hello;
