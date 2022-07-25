import React from 'react'
import '../styles/Marketplace.css'
import Profile from './Profile'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap'
export default function Marketplace() {
  return (
    
    <div>
      <div className="header">
        <h1>Companion Marketplace</h1>
      </div>
      <div className = "cs-grid">
        <Container>
          <Row>
            <Col><Profile name = "Jacob Abraham"/></Col>
            <Col><Profile name = "Abhiram Tadepalli"/></Col>
            <Col><Profile name = "Aravind Sridhar"/></Col>
            <Col><Profile name = "A Abraham"/></Col>
            <Col><Profile name = "AbhiSram Tadepalli"/></Col>
            <Col><Profile name = "S Sridhar"/></Col>
            <Col><Profile name = "Jacob AA"/></Col>
            <Col><Profile name = "Abhiram s"/></Col>
            <Col><Profile name = "Aravind V"/></Col>
          </Row>
       </Container>
        
      </div>
    </div>
  )
}
