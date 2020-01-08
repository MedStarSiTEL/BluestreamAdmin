import React, { Component } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

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
            <Col md={10} lg={7}>
            <h4>Expertise: Emergency Medicine</h4>
            <p className="text-secondary">description of subsection</p>
              <Card style={{ width: "100%" }} className="mt-4">
                <Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>
                      00:00
                      {"  "}
                      <b className="">Notify Expert</b> where{" "}
                      <b>Role</b> is <b>Physician</b>
                    </ListGroupItem>
                    <ListGroupItem>
                      01:00
                      {"  "}
                      <b>Notify Expert</b> where{" "}
                      <b>Role</b> is <b>Physician Assistant</b>, if not answered
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
                      If <b className="">expert</b> with{" "}
                      <b>Role</b> of <b>Physician</b> is available, notify them
                    </ListGroupItem>
                    <ListGroupItem>
                      If expert with Role of Physician is not available or 1 min has elapsed,
                      {"  "}
                      escalate to <b>Expert</b> where{" "}
                      <b>Role</b> is <b>Physician Assistant</b>
                    </ListGroupItem>
                    <ListGroupItem>
                      If expert with Role of Physician Assistant is not available or 3 min have elapsed, 
                      {"  "}
                     escalate to <b>National EM Provider Group</b>
                    </ListGroupItem>
                    <ListGroupItem>
                      If National EM Provider Group is not available of 5 min have elapsed, 
                      send alert <b className="text-info">Julia McSorley</b> by <b>Text</b>
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