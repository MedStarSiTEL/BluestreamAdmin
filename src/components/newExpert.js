import React, { Component} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";


export default class NewExpert extends Component {
  render() {
    return (
      <div>
        <Container className="bg-light px-5 py-4">
        <Row className="mb-4">
          <Col md={6} lg={4}>
            <a type="button" className="btn btn-link" href="/expertList">cancel</a>
            <h4 className="my-3">New Expert</h4>
           <Form>
              <Row>
                <Col>
                  <Form.Group controlId="contactFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="input" />
                    <Form.Text className="text-muted"></Form.Text>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="contactLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="input" />
                    <Form.Text className="text-muted"></Form.Text>
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group controlId="contactEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              <Form.Group controlId="contactPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="phone" />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              
              
              <Form.Group controlId="notificationOptions">
                <Form.Label>Notifications</Form.Label>
                <Form.Check
                  type="checkbox"
                  label="Email"
                />
                <Form.Check
                  type="checkbox"
                  label="Phone"
                />
                <Form.Check
                  type="checkbox"
                  label="Text"
                />
              </Form.Group>
            
            </Form>
          </Col>
        </Row>
        </Container>
      </div>
    );
  }
}