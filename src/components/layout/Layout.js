import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import Container from "react-bootstrap/Container";

import Home from "../../pages/Home";

const Layout = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [icon, setIcon] = useState("fas fa-moon");
  const [iconColor, setIconColor] = useState("white");

  const toggleDark = () => {
    setDarkMode(!darkMode);
    if (darkMode === true) {
      setIcon("fas fa-sun");
      setIconColor("black");
    } else {
      setIcon("fas fa-moon");
      setIconColor("white");
    }
  };

  return (
    <Router>
      <Navbar
        bg={darkMode ? "dark" : "light"}
        variant={darkMode ? "dark" : "light"}
        expand="lg"
      >
        <Navbar.Brand href="/">Dark Mode</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to="/" exact className="nav-link">
              Home
            </NavLink>
          </Nav>
          <Nav inline="true">
            <i
              className={icon}
              style={{
                fontSize: "30px",
                marginRight: "10px",
                color: iconColor,
                cursor: "pointer",
              }}
              onClick={toggleDark}
            ></i>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className={darkMode ? "dark" : "light"}>
        <div className="tw-bg-white dark:bg-gray-800">
          <Container>
            <Switch>
              <Route path="/" exact component={Home} />
            </Switch>
          </Container>
        </div>
      </div>
    </Router>
  );
};

export default Layout;
