import React, { Component } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns"

export default class ProgramExpertise extends Component {
  render() {
    return (
      <div>
          <Row>
            <Col>
              <Button variant="primary" className="mb-4">
                Add Expertise
              </Button>
              <CardColumns>
                <Card className="text-center">
                  <Card.Body>
                    <Card.Title>Radiology</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      Medical
                    </Card.Subtitle>
                    <Card.Text>
                      <Form className="justify-content-between text-center">
                        <Form.Check
                          inline
                          defaultChecked
                          type="switch"
                          id="item1-audio"
                          label="audio"
                        />
                        <Form.Check
                          inline
                          defaultChecked
                          type="switch"
                          id="item1-video"
                          label="video"
                        />
                        <Button variant="link">
                          <i className="text-danger oi oi-trash"></i>
                        </Button>
                      </Form>
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card className="text-center">
                  <Card.Body>
                    <Card.Title>Emergency Medicine</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      Medical
                    </Card.Subtitle>
                    <Card.Text>
                      <Form className="justify-content-between text-center">
                        <Form.Check
                          inline
                          defaultChecked
                          type="switch"
                          id="item2-audio"
                          label="audio"
                        />
                        <Form.Check
                          inline
                          defaultChecked
                          type="switch"
                          id="item2-video"
                          label="video"
                        />
                        <Button variant="link">
                          <i className="text-danger oi oi-trash"></i>
                        </Button>
                      </Form>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </CardColumns>
            </Col>
          </Row>
      </div>
    );
  }
}