import React, { Component } from 'react';
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Dropdown from "react-bootstrap/Dropdown";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


export default class ProgramReports extends Component {
  render() {
    return (
      <div>
      	<Container className="bg-white">
						<Row className="pt-4">
							<Col className="mb-4">
								<h3 className="mb-3">Call Log</h3>
							</Col>
						</Row>
            <Row>
              <Col md={9} className="mb-3">
              <Dropdown style={{display: 'inline'}}>
              <Dropdown.Toggle variant="outline-dark" id="dropdown-type-availability">
                Program
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Prompt Care</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Program 2</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown  className="ml-1" style={{display: 'inline'}}>
              <Dropdown.Toggle variant="outline-dark" id="dropdown-type-availability">
                Expertise
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Prompt Care</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Program 2</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown  className="ml-1" style={{display: 'inline'}}>
              <Dropdown.Toggle variant="outline-dark" id="dropdown-type-availability">
                Site
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Prompt Care</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Program 2</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown  className="ml-1" style={{display: 'inline'}}>
              <Dropdown.Toggle variant="outline-dark" id="dropdown-type-availability">
                Expert
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Prompt Care</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Program 2</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown  className="ml-1" style={{display: 'inline'}}>
              <Dropdown.Toggle variant="outline-dark" id="dropdown-type-availability">
                Type
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Video</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Audio</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Form.Group className="ml-5"  style={{display: 'inline'}} controlId="idNumber">
                <Form.Label>Start Time</Form.Label>
                <Form.Control className="ml-1" style={{display: 'inline', width:'140px'}} type="input" />
            </Form.Group>
            <Form.Group className="ml-3"  style={{display: 'inline'}} controlId="idNumber">
                <Form.Label>End Time</Form.Label>
                <Form.Control className="ml-1" style={{display: 'inline', width:'140px'}} type="input" />
            </Form.Group>
              </Col>
              <Col md={3} className="mb-3 text-right">
                <Button variant="primary"><i className="oi oi-data-transfer-download mr-2"></i>Export</Button>
                <Button className="ml-2" variant="secondary"><i className="oi oi-cog"></i></Button>
              </Col>
            </Row>
            <Row>
              <Col className="mb-4">
                <Table class="bg-white">
                <thead>
                    <tr>
                      <th scope="col">Program</th>
                      <th scope="col">Expertise</th>
                      <th scope="col">Site</th>
                      <th scope="col">Expert</th>
                      <th scope="col">Type</th>
                      <th scope="col">Start Time</th>
                      <th scope="col">Duration</th>
                      <th scope="col">Cust Rate</th>
                      <th scope="col">Exp Rate</th>
                      <th scope="col">Cmt</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Prompt Care</td>
                      <td>EM Physician</td>
                      <td>MWHC</td>
                      <td>Dave Bauer</td>
                      <td>
                        <i className="text-secondary oi oi-video mr-2"></i>
                      </td>
                      <td>
                      2/3/2020 11:43
                      </td>
                      <td>
                        <div className="line line-8 bg-warning"></div>
                        <div className="line line-3 bg-secondary"></div>
                        <div className="line line-6 bg-success"></div>
                      </td>
                      <td>
                        5<i className="text-warning small oi oi-star mr-2"></i>
                        4
                        <i className="text-primary small oi oi-star mr-2"></i>
                        3
                        <i className="text-grey small oi oi-star"></i>
                      </td>
                      <td>
                        4<i className="text-warning small oi oi-star mr-2"></i>
                        3<i className="text-primary small oi oi-star mr-2"></i>
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                    <td>Prompt Care</td>
                      <td>EM Physician</td>
                      <td>MWHC</td>
                      <td>Dave Bauer</td>
                      
                      <td>
                        <i className="text-secondary oi oi-video mr-2"></i>
                        <i className="text-secondary oi oi-wrench mr-2"></i>
                      </td>
                      <td>1/27/2020 13:45</td>
                      <td>
                        <div className="line line-2 bg-warning"></div>
                        <div className="line line-2 bg-secondary"></div>
                        <div className="line line-4 bg-success"></div>
                      </td>
                      <td>
                        1<i className="text-warning small oi oi-star mr-2"></i>
                        2
                        <i className="text-primary small oi oi-star mr-2"></i>
                        2
                        <i className="text-grey small oi oi-star"></i>
                      </td>
                      <td>
                        4<i className="text-warning small oi oi-star mr-2"></i>
                        3<i className="text-primary small oi oi-star mr-2"></i>
                      </td>
                      <td><i className="text-secondary small oi oi-comment-square"></i></td>
                    </tr>
                    <tr>
                    <td>Prompt Care</td>
                      <td>EM Physician</td>
                      <td>MWHC</td>
                      <td>Dave Bauer</td>
                      <td>
                        <i className="text-secondary oi oi-microphone mr-2"></i>
                      </td>
                      <td>1/26/2020 23:37</td>
                      <td>
                        <div className="line line-4 bg-warning"></div>
                        <div className="line line-2 bg-secondary"></div>
                        <div className="line line-10 bg-success"></div>
                      </td>
                      <td>
                        5<i className="text-warning small oi oi-star mr-2"></i>
                        4
                        <i className="text-primary small oi oi-star mr-2"></i>
                        5
                        <i className="text-grey small oi oi-star"></i>
                      </td>
                      <td>
                        5<i className="text-warning small oi oi-star mr-2"></i>
                        4<i className="text-primary small oi oi-star mr-2"></i>
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                    <td>Prompt Care</td>
                      <td>EM Physician</td>
                      <td>MWHC</td>
                      <td>Dave Bauer</td>
                      <td>
                        <i className="text-secondary oi oi-video mr-2"></i>
                      </td>
                      <td>1/26/2020 22:37</td>
                      <td>
                        <div className="line line-2 bg-warning"></div>
                        <div className="line line-4 bg-secondary"></div>
                        <div className="line line-1 bg-success"></div>
                        <i className="text-danger small oi oi-x ml-1 mb-2"></i>
                      </td>
                      <td>
                        3<i className="text-warning small oi oi-star mr-2"></i>
                        2
                        <i className="text-primary small oi oi-star mr-2"></i>
                        3
                        <i className="text-grey small oi oi-star"></i>
                      </td>
                      <td>
                        4<i className="text-warning small oi oi-star mr-2"></i>
                        2<i className="text-primary small oi oi-star mr-2"></i>
                      </td>
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