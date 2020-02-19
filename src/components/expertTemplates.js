import React, { Component } from 'react';
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';

export default class ExpertTemplates extends Component {
  render() {
    return (
      <div>
      	<Container className="bg-white">
						<Row className="pt-4">
							<Col className="mb-4">
								<h3 className="mb-3">Expert Templates</h3>
							</Col>
						</Row>
            <Row>
              <Col md={3}>
              <Form.Group controlId="searchTemplates">
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
                <Button variant="primary">New Expert Template</Button>
              </Col>
            </Row>
            <Row>
              <Col className="mb-4">
                <Table class="bg-white">
                <thead>
                    <tr>
                      <th scope="col">Template</th>
                      <th scope="col">Type</th>
                      <th scope="col">UI</th>
                      <th scope="col">ID</th>
                      <th scope="col">Created</th>
                      <th scope="col">Modified</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr>
                      <td><a href="#">Bunker Provider</a></td>
                      <td>Custom</td>
                      <td>Queue Manager</td>
                      <td>custom_bunker_provider</td>
                      <td></td>
                      <td></td>
                      <td>Active</td>
                    </tr>
                    <tr>
                      <td><a href="#">Call Center Provider</a></td>
                      <td>Base</td>
                      <td>Queue Manager</td>
                      <td>global_QM_basic</td>
                      <td></td>
                      <td></td>
                      <td>Active</td>
                    </tr>
                  
                    <tr>
                      <td><a href="#">On-Demand Provider</a></td>
                      <td>Base</td>
                      <td>On-Demand</td>
                      <td>global_OD_basic</td>
                      <td></td>
                      <td></td>
                      <td>Active</td>
                    </tr>
                    <tr className="table-secondary">
                      <td><a href="#">Interpretor</a></td>
                      <td>Base</td>
                      <td>Queue Manager</td>
                      <td>global_QM_basic</td>
                      <td></td>
                      <td></td>
                      <td>Inactive</td>
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