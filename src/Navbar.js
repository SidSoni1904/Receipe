import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import "./nav.css"
import Form from "react-bootstrap/Form";
import { Img } from "./images/Img";
import "./MyBody.css"
function Navbars() {
  const [theme, settheme] = useState("dark")
  
  function changeTheme() {
    if (theme === "light") {
      settheme("dark")
    } else if (theme === "dark") {
      settheme("light")
    }
    document.body.dataset.theme = theme;
  }
  

  return (
    //   main div
    <div id="nav">
      <Navbar expand="lg" >
        <Container>
          <Navbar.Brand>
            <img
              src={Img.Logo}
              alt="logo"
              style={{ height: "6rem", width: "6rem" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link id="navhead">
                <NavLink to="/">Home</NavLink>
              </Nav.Link>
              <Nav.Link id="navhead">
                <NavLink to="/menu">Explore</NavLink>
              </Nav.Link>
              <Nav.Link href="#link" id="navhead">
                <NavLink to="/about">About</NavLink>
              </Nav.Link>
            </Nav>
            <Form>
              <Form.Check
                type="switch"
                id="custom-switch"
                onClick={changeTheme}
                label={
                  theme === "light" ? (
                    <span
                      style={{
                        color: "brown",
                        fontFamily: "poppins",
                        fontWeight: "bolder",
                        fontSize: "larger",
                      }}
                    >
                      Switch to Light mode
                    </span>
                  ) : (
                    <span
                      style={{
                        color: "brown",
                        fontFamily: "poppins",
                        fontWeight: "bolder",
                        fontSize: "larger",
                      }}
                    >
                      Switch to Dark mode
                    </span>
                  )
                }
              />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbars;
