import React, { Component } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default class ProgramWorkflow extends Component {
  render() {
    return (
      <div>
        <Row className="mb-4">
          <Col>
            <h3>Workflow</h3>
            <p className="lead">description of section</p>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col xs={9}>
          <ListGroup>
          <ListGroup.Item> 
            1. If experts with
            <Dropdown style={{display: 'inline'}}>
              <Dropdown.Toggle variant="link" id="dropdown-type">
                Type
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Type</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Expert Property 2</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Expert Property 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            of
            <Dropdown style={{display: 'inline'}}>
              <Dropdown.Toggle variant="link" id="dropdown-type-value">
                Internal
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Internal</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Tier 1</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Tier 2</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Tier 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            are
            <Dropdown style={{display: 'inline'}}>
              <Dropdown.Toggle variant="link" id="dropdown-type-availability">
                Available
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">available</Dropdown.Item>
                <Dropdown.Item href="#/action-2">not available</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            ,
            <Dropdown style={{display: 'inline'}}>
              <Dropdown.Toggle variant="link" id="dropdown-type-action1">
                Notify
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">notify</Dropdown.Item>
                <Dropdown.Item href="#/action-2">alert</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            them and wait 
            <Dropdown style={{display: 'inline'}}>
              <Dropdown.Toggle variant="link" id="dropdown-type-delay">
                15
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">10</Dropdown.Item>
                <Dropdown.Item href="#/action-2">15</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Custom</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            seconds
            </ListGroup.Item>
            <ListGroup.Item>
            2. If
            <Dropdown style={{display: 'inline'}}>
              <Dropdown.Toggle variant="link" id="dropdown-type">
                call time
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">call time</Dropdown.Item>
                <Dropdown.Item href="#/action-2">call location</Dropdown.Item>
                <Dropdown.Item href="#/action-3">call Property 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown style={{display: 'inline'}}>
              <Dropdown.Toggle variant="link" id="dropdown-type">
                is not
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">is</Dropdown.Item>
                <Dropdown.Item href="#/action-2">is not</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown style={{display: 'inline'}}>
              <Dropdown.Toggle variant="link" id="dropdown-type-value">
                between
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">before</Dropdown.Item>
                <Dropdown.Item href="#/action-2">after</Dropdown.Item>
                <Dropdown.Item href="#/action-3">between</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown style={{display: 'inline'}}>
              <Dropdown.Toggle variant="link" id="dropdown-type-availability">
                6 am
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">available</Dropdown.Item>
                <Dropdown.Item href="#/action-2">not available</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            and 
            <Dropdown style={{display: 'inline'}}>
              <Dropdown.Toggle variant="link" id="dropdown-type-action1">
                9 pm
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">notify</Dropdown.Item>
                <Dropdown.Item href="#/action-2">alert</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            , Alert
            <Dropdown style={{display: 'inline'}}>
              <Dropdown.Toggle variant="link" id="dropdown-type-delay">
                Admins
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Admins</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Experts?</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Button variant="secondary" size="sm">Edit Alert</Button>
            </ListGroup.Item>
            <ListGroup.Item>
            3. If no experts are available,
            <Dropdown style={{display: 'inline'}}>
              <Dropdown.Toggle variant="link" id="dropdown-type-delay">
                Alert
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Alert</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Notify</Dropdown.Item>
                <Dropdown.Item href="#/action-2">?</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown style={{display: 'inline'}}>
              <Dropdown.Toggle variant="link" id="dropdown-type-delay">
                Admins
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Admins</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Experts?</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Button variant="secondary" size="sm">Edit Alert</Button>
            </ListGroup.Item>
            <ListGroup.Item> 
            4. Notify experts with
            <Dropdown style={{display: 'inline'}}>
              <Dropdown.Toggle variant="link" id="dropdown-type">
                Type
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Type</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Expert Property 2</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Expert Property 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            of
            <Dropdown style={{display: 'inline'}}>
              <Dropdown.Toggle variant="link" id="dropdown-type-value">
                Tier 1
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Internal</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Tier 1</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Tier 2</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Tier 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            </ListGroup.Item>
            <ListGroup.Item> 
            5. If experts with
            <Dropdown style={{display: 'inline'}}>
              <Dropdown.Toggle variant="link" id="dropdown-type">
                Type
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Type</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Expert Property 2</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Expert Property 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            of
            <Dropdown style={{display: 'inline'}}>
              <Dropdown.Toggle variant="link" id="dropdown-type-value">
                Tier 1
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Internal</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Tier 1</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Tier 2</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Tier 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            are
            <Dropdown style={{display: 'inline'}}>
              <Dropdown.Toggle variant="link" id="dropdown-type-availability">
                Available
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">available</Dropdown.Item>
                <Dropdown.Item href="#/action-2">not available</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            ,
            <Dropdown style={{display: 'inline'}}>
              <Dropdown.Toggle variant="link" id="dropdown-type-action1">
                Notify
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">notify</Dropdown.Item>
                <Dropdown.Item href="#/action-2">alert</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            them and wait 
            <Dropdown style={{display: 'inline'}}>
              <Dropdown.Toggle variant="link" id="dropdown-type-delay">
                7
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">10</Dropdown.Item>
                <Dropdown.Item href="#/action-2">15</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Custom</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            seconds
            </ListGroup.Item>
            <ListGroup.Item> 
            6. Notify experts with
            <Dropdown style={{display: 'inline'}}>
              <Dropdown.Toggle variant="link" id="dropdown-type">
                Type
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Type</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Expert Property 2</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Expert Property 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            of
            <Dropdown style={{display: 'inline'}}>
              <Dropdown.Toggle variant="link" id="dropdown-type-value">
                Tier 2
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Internal</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Tier 1</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Tier 2</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Tier 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            </ListGroup.Item>
            <ListGroup.Item> 
            7. If experts with
            <Dropdown style={{display: 'inline'}}>
              <Dropdown.Toggle variant="link" id="dropdown-type">
                Type
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Type</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Expert Property 2</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Expert Property 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            of
            <Dropdown style={{display: 'inline'}}>
              <Dropdown.Toggle variant="link" id="dropdown-type-value">
                Tier 2
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Internal</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Tier 1</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Tier 2</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Tier 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            are
            <Dropdown style={{display: 'inline'}}>
              <Dropdown.Toggle variant="link" id="dropdown-type-availability">
                Available
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">available</Dropdown.Item>
                <Dropdown.Item href="#/action-2">not available</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            ,
            <Dropdown style={{display: 'inline'}}>
              <Dropdown.Toggle variant="link" id="dropdown-type-action1">
                Notify
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">notify</Dropdown.Item>
                <Dropdown.Item href="#/action-2">alert</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            them and wait 
            <Dropdown style={{display: 'inline'}}>
              <Dropdown.Toggle variant="link" id="dropdown-type-delay">
                8
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">10</Dropdown.Item>
                <Dropdown.Item href="#/action-2">15</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Custom</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            seconds
            </ListGroup.Item>
            <ListGroup.Item> 
            8. Notify experts with
            <Dropdown style={{display: 'inline'}}>
              <Dropdown.Toggle variant="link" id="dropdown-type">
                Type
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Type</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Expert Property 2</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Expert Property 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            of
            <Dropdown style={{display: 'inline'}}>
              <Dropdown.Toggle variant="link" id="dropdown-type-value">
                Tier 3
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Internal</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Tier 1</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Tier 2</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Tier 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            </ListGroup.Item>
            <ListGroup.Item> 
            9. If customer
            <Dropdown style={{display: 'inline'}}>
              <Dropdown.Toggle variant="link" id="dropdown-type">
                has
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Type</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Expert Property 2</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Expert Property 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            rollover, initate rollover
            </ListGroup.Item>
            <ListGroup.Item> 
            10. If experts with
            <Dropdown style={{display: 'inline'}}>
              <Dropdown.Toggle variant="link" id="dropdown-type">
                Type
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Type</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Expert Property 2</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Expert Property 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            of
            <Dropdown style={{display: 'inline'}}>
              <Dropdown.Toggle variant="link" id="dropdown-type-value">
                Tier 3
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Internal</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Tier 1</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Tier 2</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Tier 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            are
            <Dropdown style={{display: 'inline'}}>
              <Dropdown.Toggle variant="link" id="dropdown-type-availability">
                Available
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">available</Dropdown.Item>
                <Dropdown.Item href="#/action-2">not available</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            ,
            <Dropdown style={{display: 'inline'}}>
              <Dropdown.Toggle variant="link" id="dropdown-type-action1">
                Notify
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">notify</Dropdown.Item>
                <Dropdown.Item href="#/action-2">alert</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            them and wait 
            <Dropdown style={{display: 'inline'}}>
              <Dropdown.Toggle variant="link" id="dropdown-type-delay">
                15
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">10</Dropdown.Item>
                <Dropdown.Item href="#/action-2">15</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Custom</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            seconds
            </ListGroup.Item>
            <ListGroup.Item> 
            11. If customer has 3rd party enabled, initate 3rd party
            </ListGroup.Item>
            <ListGroup.Item> 
            12. If experts with
            <Dropdown style={{display: 'inline'}}>
              <Dropdown.Toggle variant="link" id="dropdown-type">
                Type
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Type</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Expert Property 2</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Expert Property 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            of
            <Dropdown style={{display: 'inline'}}>
              <Dropdown.Toggle variant="link" id="dropdown-type-value">
                Tier 3
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Internal</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Tier 1</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Tier 2</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Tier 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            are
            <Dropdown style={{display: 'inline'}}>
              <Dropdown.Toggle variant="link" id="dropdown-type-availability">
                Available
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">available</Dropdown.Item>
                <Dropdown.Item href="#/action-2">not available</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            ,
            <Dropdown style={{display: 'inline'}}>
              <Dropdown.Toggle variant="link" id="dropdown-type-action1">
                Notify
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">notify</Dropdown.Item>
                <Dropdown.Item href="#/action-2">alert</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            them and wait 
            <Dropdown style={{display: 'inline'}}>
              <Dropdown.Toggle variant="link" id="dropdown-type-delay">
                15
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">10</Dropdown.Item>
                <Dropdown.Item href="#/action-2">15</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Custom</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            seconds,
            else wait 
            <Dropdown style={{display: 'inline'}}>
              <Dropdown.Toggle variant="link" id="dropdown-type-delay">
                30
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">10</Dropdown.Item>
                <Dropdown.Item href="#/action-2">15</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Custom</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
             seconds
            </ListGroup.Item>
            <ListGroup.Item> 
            13. Alert 
            <Dropdown style={{display: 'inline'}}>
              <Dropdown.Toggle variant="link" id="dropdown-type-delay">
                Admins
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Admins</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Experts?</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Button variant="secondary" size="sm">Edit Alert</Button>
            , and wait 
            <Dropdown style={{display: 'inline'}}>
              <Dropdown.Toggle variant="link" id="dropdown-type-delay">
                3
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">10</Dropdown.Item>
                <Dropdown.Item href="#/action-2">15</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Custom</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            minutes          
            </ListGroup.Item>
            <ListGroup.Item> 
            14. Send call to CSR
            </ListGroup.Item>
            </ListGroup> 
          </Col>
        </Row>
        
        
        
        <Row className="mb-4">
          <Col md={10} lg={7}>
            <h4>Expertise: Emergency Medicine</h4>
            <p className="text-secondary">description of subsection</p>
            <Card style={{ width: "100%" }} className="mt-4">
              <Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>
                    00:00
                    {"  "}
                    <b className="">Notify Expert</b> where <b>Role</b> is{" "}
                    <b>Physician</b>
                  </ListGroupItem>
                  <ListGroupItem>
                    01:00
                    {"  "}
                    <b>Notify Expert</b> where <b>Role</b> is{" "}
                    <b>Physician Assistant</b>, if not answered
                  </ListGroupItem>
                  <ListGroupItem>
                    03:00
                    {"  "}
                    <b>Send</b> to <b>National EM Provider Group</b>
                  </ListGroupItem>
                  <ListGroupItem>
                    <span class="badge badge-warning mr-1">5 min</span>
                    {"  "}
                    <span className="text-danger oi oi-warning"></span>
                    {"  "}
                    <b className="text-info">Julia McSorley</b> by <b>Text</b>
                  </ListGroupItem>
                  <Card.Link href="#" className="pt-2">
                    add action
                  </Card.Link>{" "}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col md={10} lg={7}>
            <h4>Expertise: Emergency Medicine</h4>
            <p className="text-secondary">description of subsection</p>
            <Card style={{ width: "100%" }} className="mt-4">
              <Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>
                    If <b className="">expert</b> with <b>Role</b> of{" "}
                    <b>Physician</b> is available, notify them
                  </ListGroupItem>
                  <ListGroupItem>
                    If expert with Role of Physician is not available or 1 min
                    has elapsed,
                    {"  "}
                    escalate to <b>Expert</b> where <b>Role</b> is{" "}
                    <b>Physician Assistant</b>
                  </ListGroupItem>
                  <ListGroupItem>
                    If expert with Role of Physician Assistant is not available
                    or 3 min have elapsed,
                    {"  "}
                    escalate to <b>National EM Provider Group</b>
                  </ListGroupItem>
                  <ListGroupItem>
                    If National EM Provider Group is not available of 5 min have
                    elapsed, send alert{" "}
                    <b className="text-info">Julia McSorley</b> by <b>Text</b>
                  </ListGroupItem>
                  <Card.Link href="#" className="pt-2">
                    add action
                  </Card.Link>{" "}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md={10} lg={7}>
            <h4>Expertise: Radiology</h4>
            <p className="text-secondary">description of subsection</p>

            <Card style={{ width: "100%" }} className="mt-4">
              <Card.Body>
                <Card.Title>
                  If <b>Request Location</b>...
                </Card.Title>
                <Card bg="light" className="mt-3">
                  <Card.Body>
                    <Card.Title>
                      is <b>North</b>
                    </Card.Title>
                    <ListGroup className="list-group-flush">
                      <ListGroupItem>
                        <span className="text-dark oi oi-bell"></span>{" "}
                        <b className="text-info">Emergency Medicine</b> where{" "}
                        <b>Expert Location</b> is <b>North</b>
                      </ListGroupItem>
                      <ListGroupItem>
                        <span class="badge badge-warning mr-1">30 sec</span>{" "}
                        <span className="text-dark oi oi-bell"></span>{" "}
                        <b className="text-info">Emergency Medicine</b> where{" "}
                        <b>Expert Location</b> is <b>South</b>
                      </ListGroupItem>
                      <ListGroupItem>
                        <span class="badge badge-warning mr-1">5 min</span>{" "}
                        <span className="text-danger oi oi-warning"></span>{" "}
                        <b className="text-info">Julia McSorley</b> by{" "}
                        <b>Text</b>
                      </ListGroupItem>
                      <Card.Link href="#" className="pt-2">
                        add action
                      </Card.Link>
                    </ListGroup>
                  </Card.Body>
                </Card>
                <Card bg="light" className="mt-3">
                  <Card.Body>
                    <Card.Title>
                      is <b>South</b>
                    </Card.Title>
                    <ListGroup className="list-group-flush">
                      <ListGroupItem>
                        <span className="text-dark oi oi-bell"></span>{" "}
                        <b className="text-info">Emergency Medicine</b> where{" "}
                        <b>Expert Location</b> is <b>South</b>
                      </ListGroupItem>
                      <ListGroupItem>
                        <span class="badge badge-warning mr-1">30 sec</span>{" "}
                        <span className="text-dark oi oi-bell"></span>{" "}
                        <b className="text-info">Emergency Medicine</b> where{" "}
                        <b>Expert Location</b> is <b>North</b>
                      </ListGroupItem>
                      <ListGroupItem>
                        <span class="badge badge-warning mr-1">5 min</span>{" "}
                        <span className="text-danger oi oi-warning"></span>{" "}
                        <b className="text-info">Julia McSorley</b> by{" "}
                        <b>Text</b>
                      </ListGroupItem>
                      <Card.Link href="#" className="pt-2">
                        add action
                      </Card.Link>
                    </ListGroup>
                  </Card.Body>
                </Card>
                <Card bg="light" className="mt-3">
                  <Card.Body>
                    <Card.Title>Else</Card.Title>
                    <ListGroup className="list-group-flush">
                      <ListGroupItem>
                        <span className="text-dark oi oi-bell"></span>{" "}
                        <b className="text-info">Emergency Medicine</b> where{" "}
                        <b>Expert Location</b> is <b>North</b>
                      </ListGroupItem>
                      <ListGroupItem>
                        <span class="badge badge-warning mr-1">30 sec</span>{" "}
                        <span className="text-dark oi oi-bell"></span>{" "}
                        <b className="text-info">Emergency Medicine</b> where{" "}
                        <b>Expert Location</b> is <b>South</b>
                      </ListGroupItem>
                      <ListGroupItem>
                        <span class="badge badge-warning mr-1">5 min</span>{" "}
                        <span className="text-danger oi oi-warning"></span>{" "}
                        <b className="text-info">Julia McSorley</b> by{" "}
                        <b>Text</b>
                      </ListGroupItem>
                      <Card.Link href="#" className="pt-2">
                        add action
                      </Card.Link>
                    </ListGroup>
                  </Card.Body>
                </Card>
                <Card.Link href="#" className="pt-2">
                  add condition
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
  
      </div>
    );
  }
}