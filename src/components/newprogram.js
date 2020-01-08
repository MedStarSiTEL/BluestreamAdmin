import React, { Component, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import ProgramWorkflow from "./program_workflow";
import ProgramBasic from "./program_basic";
import ProgramRequestGeneration from "./program_requestGeneration";
import ProgramExpertise from "./program_expertise";
import ProgramSites from "./program_sites";
import Nav from "react-bootstrap/Nav";

export default class NewProgram extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row className="p-3 justify-content-md-center bg-secondary">
            <Col xs={12}>
              {/* this should be h2, need to adjust Header sizes in css */}
              <h4 className="text-white">
                New Program{" "}
                <small>
                  (this should change to program title once there is one)
                </small>
              </h4>
            </Col>
          </Row>
          <Tab.Container id="left-tabs-example" defaultActiveKey="basic">
            <Row>
              <Col sm={2} className="bg-white pt-4">
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="basic">Basic</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="requestGeneration">
                      Request Generation
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="expertise">Expertise</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="workflow">Workflow</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="sites">Sites</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={10} className="bg-light px-5 py-4 border-left">
                <Tab.Content>
                  <Tab.Pane eventKey="basic">
                    <ProgramBasic />
                  </Tab.Pane>
                  <Tab.Pane eventKey="requestGeneration">
                    <ProgramRequestGeneration />
                  </Tab.Pane>
                  <Tab.Pane eventKey="expertise">
                    <ProgramExpertise />
                  </Tab.Pane>
                  <Tab.Pane eventKey="workflow">
                    <ProgramWorkflow />
                  </Tab.Pane>
                  <Tab.Pane eventKey="sites"></Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </div>
    );
  }
}
