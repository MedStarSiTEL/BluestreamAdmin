import React, { Component } from 'react';
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

export default class OverviewReports extends Component {
  render() {
    return (
      <div>
      	<Container className="bg-white">
						<Row className="pt-4">
							<Col className="mb-4">
								<h3 className="mb-3">Overview Reports</h3>
							</Col>
						</Row>
            <Row>
              <Col md={3}>
              <Form.Group controlId="searchProgram">
                <Form.Control type="input" />
              </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
              <div className="custom-control custom-checkbox">
                    	<input type="checkbox" class="custom-control-input" id="customCheck1"/>
                    	<label className="custom-control-label" for="customCheck1">Show inactive</label>
                  	</div>
              </Col>
              <Col md={3} className="mb-3 text-right">
                <Button variant="primary">New Template</Button>
              </Col>
            </Row>
            <Row>
              <Col className="mb-4">
                <Table class="bg-white">
                <thead>
                    <tr>
                      <th scope="col">Program</th>
                      <th scope="col">Expert</th>
                      <th scope="col">ID</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
					</Container>
      </div>
      )
  }
}