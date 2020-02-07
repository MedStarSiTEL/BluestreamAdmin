import React, { Component } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class Escalation extends Component {
  render() {
    return (
      <div>
      	<Container className="bg-white">
						<Row className="pt-4">
							<Col className="mb-4">
								<h3 className="mb-3">Escalation Scheme Templates</h3>
							</Col>
						</Row>
					</Container>
      </div>
      )
  }
}