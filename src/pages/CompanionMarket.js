import React from 'react'
import '../styles/CompanionMarket.css'
import Profile from '../components/Profile'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
export default function CompanionMarket() {
  return (
    
    <div>
      <div className="header">
        <h1>Companion Marketplace</h1>
      </div>
      <div className = "filter">
        <Form>
          <Form.Group className = 'filter-form'controlId = "formFilter">
            <Form.Label>Filter for Companion</Form.Label>
            <Form.Control placeholder = "Enter filters"></Form.Control>
            <Form.Text className = "text-muted">Enter your companion 
            preferences to find the right fit</Form.Text>
          </Form.Group>
        </Form>
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
