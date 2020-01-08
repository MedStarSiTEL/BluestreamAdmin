import React, { Component} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";

export default class ProgramBasic extends Component {
  render() {
    return (
      <div>
        {/* this is a compontent - section header */}
        <Row className="mb-4">
          <Col>
            <h3>Basic Information</h3>
            <p className="lead">description of section</p>
          </Col>
        </Row>
        {/* this is a compontent - form content? It's the main content panel when there are form fields so the fields are not too wide. */}
        <Row className="mb-4">
          <Col md={9} lg={6}>
            <Form>
              <Form.Group controlId="programName">
                <Form.Label>Program Name</Form.Label>
                <Form.Control type="input" />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group controlId="url">
                <Form.Label>URL</Form.Label>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="urlPrepend">https://</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    type="text"
                    aria-describedby="urlPrepend"
                    required
                  />
                  <InputGroup.Append>
                    <InputGroup.Text id="urlAppend">
                      .medstar.com
                    </InputGroup.Text>
                  </InputGroup.Append>
                  <Form.Control.Feedback type="invalid">
                    Please choose a subdomain
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group controlId="idNumber">
                <Form.Label>Program ID (optional)</Form.Label>
                <Form.Control type="input" />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group controlId="logoUpload">
                <Form.Label>Program Logo (optional)</Form.Label>
                <Form.Text className="text-muted"></Form.Text>
                <Button variant="secondary">Choose file</Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col md={9} lg={6}>
            <h4>Contact</h4>
            <p className="text-secondary">description of subsection</p>
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
              <Form.Group controlId="defaultContact">
                <Form.Check
                  type="checkbox"
                  label="Set as default contact for program sites"
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}