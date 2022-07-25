import React from "react";
import Marketplace from "./Marketplace";
import 'bootstrap/dist/css/bootstrap.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/App.css'
import { NavDropdown } from "react-bootstrap";
import Profile from "./Profile";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CompanionMarket from "../pages/CompanionMarket";
import CompanionProfile from "../pages/CompanionProfile";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import {useParams} from 'react-router-dom'
import Classes from "../pages/Classes";

function App() {
  let username = useParams();
  return (
    <Router>
      <div className = "page">
        <Navbar sticky = "top" expand = "md" 
        bg = "dark" variant = "dark" collapseOnSelect>
          <Container>
            <Navbar.Brand>
              {/* <img
                
                width="40"
                height="40"
                style = {{marginRight: "20px"}}
                className="d-inline-block align-top"
                //alt="React Bootstrap logo"
              /> */}
              eSeniors
            </Navbar.Brand>

            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav className = "me-auto">
                <NavDropdown title = "Home">
                  <NavDropdown.Item href = "/">App Page</NavDropdown.Item>
                  <NavDropdown.Item href = "/home/aboutus">About Us</NavDropdown.Item>
                  <NavDropdown.Item href = "/home/mission">Mission</NavDropdown.Item>
                  <NavDropdown.Item href = "/home/meetteam">Meet the Team</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href = "/findcompanion">Find Companion</Nav.Link>
                <Nav.Link href = "connections">Connections Dashboard</Nav.Link>
                <Nav.Link href = "/classes">Live Classes</Nav.Link>
                <Nav.Link href = "customerservice">Customer Service</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar> 
        <div className="non-nav">
          <Routes>
            <Route path = "/" element = {<Home/>}/>
            <Route path = "/findcompanion" element = {<CompanionMarket/>}/>
            <Route path = "/classes" element = {<Classes/>}/>
            <Route path = "/profile/:username" element = {<CompanionProfile/>}/>
            <Route path = "*" element = {<ErrorPage/>}/>
          </Routes>
        </div>       
      </div>
    </Router>
    
  );
}

export default App;
