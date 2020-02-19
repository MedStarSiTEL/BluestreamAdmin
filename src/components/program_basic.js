import React, { Component} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Dropdown from "react-bootstrap/Dropdown";

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
        <Row className="mb-5">
          <Col>
            {/* this is a component - subsection header */}
             <h4>Request Generation Template</h4>
            <p className="text-secondary">Select a Request Generation Template</p>
            <Row><Col md={3}>
              <Form.Group controlId="searchRGT">
                <Form.Control type="input" />
              </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
              <Dropdown  className="ml-1" style={{display: 'inline'}}>
              <Dropdown.Toggle variant="outline-dark" id="dropdown-type-availability">
                All Types
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Base</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Custom</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown  className="ml-1" style={{display: 'inline'}}>
              <Dropdown.Toggle variant="outline-dark" id="dropdown-type-availability">
                All UI
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Queue Manager</Dropdown.Item>
                <Dropdown.Item href="#/action-2">On Demand</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Direct link</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
              </Col>
              </Row>
            <Row>
              <Col>
            {/* this is a component - subsection content */}
            <CardDeck  className="mt-3">
              <Card>
								<Card.Body>
                  <Card.Title>Prompt Care <Badge variant="secondary float-right">List</Badge></Card.Title>
                  <Card.Text>
                    Used for Prompt Care expert consult programs  
                  </Card.Text>
									<Button variant="primary">Use</Button>
									<Button variant="link ml-1">Preview</Button>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title>Sports Medicine <Badge variant="secondary float-right">Ad hoc</Badge></Card.Title>
                  <Card.Text>
                    This card has supporting text below as a natural lead-in to
                    additional content.{" "}
                  </Card.Text>
									<Button variant="primary">Use</Button>
									<Button variant="link ml-1">Preview</Button>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title>Maternal Fetal Medicine <Badge variant="secondary float-right">Link</Badge></Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                  </Card.Text>
									<Button variant="primary">Use</Button>
									<Button variant="link ml-1">Preview</Button>
                </Card.Body>
              </Card>
              </CardDeck>
              <CardDeck className="mt-3">
              <Card>
                <Card.Body>
                  <Card.Title>Queue Manager Base<Badge variant="secondary float-right">List</Badge></Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                  </Card.Text>
									<Button variant="primary">Use</Button>
									<Button variant="link ml-1">Preview</Button>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title>On-Demand Base <Badge variant="secondary float-right">Ad hoc</Badge></Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                  </Card.Text>
									<Button variant="primary">Use</Button>
									<Button variant="link ml-1">Preview</Button>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title>Direct Base <Badge variant="secondary float-right">Link</Badge></Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                  </Card.Text>
									<Button variant="primary">Use</Button>
									<Button variant="link ml-1">Preview</Button>
                </Card.Body>
              </Card>
            </CardDeck>
            </Col>
            </Row>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col>
            {/* this is a component - subsection header */}
             <h4>Expert Template</h4>
            <p className="text-secondary">Select a Remote Expert Template</p>
            <Row><Col md={3}>
              <Form.Group controlId="searchRGT">
                <Form.Control type="input" />
              </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
              <Dropdown  className="ml-1" style={{display: 'inline'}}>
              <Dropdown.Toggle variant="outline-dark" id="dropdown-type-availability">
                All Types
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Base</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Custom</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown  className="ml-1" style={{display: 'inline'}}>
              <Dropdown.Toggle variant="outline-dark" id="dropdown-type-availability">
                All UI
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Queue Manager</Dropdown.Item>
                <Dropdown.Item href="#/action-2">On Demand</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Direct link</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
              </Col>
              </Row>
            <Row>
              <Col>
            {/* this is a component - subsection content */}
            <CardDeck  className="mt-3">
              <Card>
								<Card.Body>
                  <Card.Title>EM Bunker <Badge variant="secondary float-right">List</Badge></Card.Title>
                  <Card.Text>
                    Used for all EM bunker queue manager programs  
                  </Card.Text>
									<Button variant="primary">Use</Button>
									<Button variant="link ml-1">Preview</Button>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title>Sports Medicine Providers<Badge variant="secondary float-right">Ad hoc</Badge></Card.Title>
                  <Card.Text>
                    This card has supporting text below as a natural lead-in to
                    additional content.{" "}
                  </Card.Text>
									<Button variant="primary">Use</Button>
									<Button variant="link ml-1">Preview</Button>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title>Maternal Fetal Medicine Providers<Badge variant="secondary float-right">Link</Badge></Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                  </Card.Text>
									<Button variant="primary">Use</Button>
									<Button variant="link ml-1">Preview</Button>
                </Card.Body>
              </Card>
              </CardDeck>
            
            </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}