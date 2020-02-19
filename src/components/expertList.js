import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Dropdown from "react-bootstrap/Dropdown";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Modal from "react-bootstrap/Modal";


const popover = (
  <Popover id="popover-basic" style={{'max-width':"450px"}}>
    <Popover.Title as="h2">Additional Details
</Popover.Title>
    <Popover.Content>
    <ListGroup>
  <ListGroup.Item><b>Last Call Id:</b> 82d18f2c-e103-4480-a979-e052144a5329<i className="text-primary small oi oi-share-boxed ml-2"></i></ListGroup.Item>
  <ListGroup.Item><b>Location:</b> Union Memorial Hospital
</ListGroup.Item>
  <ListGroup.Item><b>Gender:</b> Male</ListGroup.Item>
  <ListGroup.Item><b>Tier</b> 2</ListGroup.Item>
  <ListGroup.Item><Button variant="primary" size="sm">
                        Edit
                      </Button>
                      <Button variant="outline-primary" size="sm" className="ml-2">
                       
                        Logout
                      </Button>
                      <Button
                        variant="outline-primary"
                        className="ml-2"
                        size="sm"
                      >
                        <span
                          title="email invite"
                          class="small oi oi-envelope-closed mr-2"
                        ></span>
                        Invite
                      </Button>
                      <Button variant="outline-primary" size="sm" className="ml-2">
                      <span
                          title="logout"
                          class="small oi oi-video mr-1"
                        ></span>
                        Call
                      </Button>
                      <Button variant="outline-primary" size="sm" className="ml-2">
                        <span
                          title="logout"
                          class="small oi oi-phone mr-1"
                        ></span>
                        Call
                      </Button>
                      
                      </ListGroup.Item>
</ListGroup>
    </Popover.Content>
  </Popover>
);

const newExpertModal = (
<Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title>New Expert</Modal.Title>
  </Modal.Header>

  <Modal.Body style={{'max-height': 'calc(100vh - 210px)', 'overflow-y': 'auto'}}>
  <Row className="mb-4">
          <Col>
           <Form>
              <Row>
                <Col>
                  <Form.Group controlId="expertFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="input" />
                    <Form.Text className="text-muted"></Form.Text>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="expertLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="input" />
                    <Form.Text className="text-muted"></Form.Text>
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group controlId="expertId">
                <Form.Label>ID</Form.Label>
                <Form.Control type="input" />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              <Form.Group controlId="expertEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              <Form.Group controlId="expertPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="phone" />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              
             
                <Form.Label>Notifications</Form.Label><br />
                <Form.Check inline
                  type="checkbox"
                  label="Email"
                />
                <Form.Check
                inline
                  type="checkbox"
                  label="Phone"
                />
                <Form.Check
                inline
                  type="checkbox"
                  label="Text"
                />
           
              <Form.Group className="mt-3">
              <Form.Label>Template</Form.Label>
              <Dropdown>
              <Dropdown.Toggle variant="outline-primary" id="dropdown-type">
                Choose template
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Type</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Expert Property 2</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Expert Property 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            </Form.Group>
            <Form.Group controlId="templateProp1">
            <Form.Label>Gender</Form.Label>
            <Dropdown>
              <Dropdown.Toggle variant="outline-primary" id="dropdown-type">
                Choose Gender
              </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">select</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Female</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Male</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Other</Dropdown.Item>
              </Dropdown.Menu>
              </Dropdown>
              </Form.Group>

              <Form.Group controlId="expertLocation">
                <Form.Label>Location</Form.Label>
                <Form.Control type="input" />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              <Form.Group controlId="expertProperty3">
                <Form.Label>Property 3</Form.Label>
                <Form.Control type="input" />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
            </Form>
          </Col>
        </Row>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary">Close</Button>
    <Button variant="primary">Save changes</Button>
  </Modal.Footer>
</Modal.Dialog>
);

const expertModal = (
  <Modal.Dialog>
    <Modal.Header closeButton>
      <Modal.Title>Dave Bauer</Modal.Title>
    </Modal.Header>
  
    <Modal.Body style={{'max-height': 'calc(100vh - 210px)', 'overflow-y': 'auto'}}>
    <Row className="mb-4">
            <Col>
            <p>
             ID: 4343423<br />
             dave@bauer.com<br />
             555-444-3333
             </p>
            <p>
            Notifications: email, phone, text
            </p>
            <p>
            Template: Emergency Med    
            </p>
            <p>
            Gender: Male
            </p>
            <p>
            Location: MWHC
            </p>
            <p> 
           <b>Last Call Id:</b> 82d18f2c-e103-4480-a979-e052144a5329<i className="text-primary small oi oi-share-boxed ml-2"></i>
           </p>
            </Col>
          </Row>
    </Modal.Body>
  
    <Modal.Footer>
      <Button variant="secondary">Close</Button>
      <Button variant="primary">Save changes</Button>
    </Modal.Footer>
  </Modal.Dialog>
  );
  

export default class ExpertList extends Component {
  render() {
    return (
      <div>
        <Container className="bg-white">
          <Row className="pt-4">
            <Col className="mb-4">
              {/* <h3 className="mb-3">Overview Reports</h3> */}
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <Form.Group controlId="searchProgram">
                <Form.Control type="input" />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Dropdown className="ml-2" style={{ display: "inline" }}>
                <Dropdown.Toggle
                  variant="outline-dark"
                  id="dropdown-type-availability"
                >
                  All Expertise
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Prompt Care</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Program 2</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown className="ml-1" style={{ display: "inline" }}>
                <Dropdown.Toggle
                  variant="outline-dark"
                  id="dropdown-type-availability"
                >
                  All Templates
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Prompt Care</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Program 2</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <div
                className="custom-control custom-checkbox ml-3"
                style={{ display: "inline" }}
              >
                <input
                  type="checkbox"
                  class="custom-control-input"
                  checked
                  id="customCheck1"
                />
                <label className="custom-control-label" for="customCheck1">
                  Show inactive
                </label>
              </div>

              <div
                className="custom-control custom-checkbox ml-3"
                style={{ display: "inline" }}
              >
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" for="customCheck1">
                  Only logged in
                </label>
              </div>
            </Col>
            <Col md={3} className="mb-3 text-right">
            <OverlayTrigger trigger="click" placement="top" overlay={newExpertModal} rootClose>
              <Button variant="primary">New Expert</Button>
              
                 {/* <a type="button" className="btn btn-primary" href="/newExpert">New Expert</a>  */}
                </OverlayTrigger>
            </Col>
          </Row>
          <Row>
            <Col className="mb-4">
              <Table classNmae="bg-white" hover>
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Contact</th>
                    <th scope="col">Expertise</th>
                    <th scope="col">Template</th>
                    <th scope="col">Notification</th>
                    <th scope="col">Last Program</th>
                    <th scope="col">Last Call</th>
                    <th scope="col">Last Login</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <OverlayTrigger trigger="click" placement="top" overlay={popover} rootClose>
                      <a href="#">Bauer, Dave</a> 
                      </OverlayTrigger>
                      <div className="text-secondary small">133355</div>
                    </td>

                    <td>
                      555-324-5555
                      <div className="text-secondary small">dave@bauer.com</div>
                    </td>
                    <td>Emergency Medicine</td>
                    <td>Teletriage Default</td>
                    <td>
                      <i class="small oi oi-envelope-closed ml-2"></i>
                      <i class="small oi oi-phone ml-2"></i>
                      <i class="small oi oi-chat ml-2"></i>
                    </td>
                    <td>
                      Test-Teletriage
                      <div className="text-secondary small">
                        Emergency Physician
                      </div>
                    </td>
                    <td>
                      2019-07-19
                      <div className="text-secondary small">14:38:11<Badge variant="success" className="ml-1">In call</Badge></div>
                      
                    </td>
                    <td>
                      2019-07-19 <div className="text-secondary small">14:38:00 <Badge variant="success" className="ml-1">Logged in</Badge></div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="#">Moav, Itay</a>
                      <div className="text-secondary small">1356755</div>
                    </td>

                    <td>
                      555-666-7765{" "}
                      <div className="text-secondary small">itay@moav.com</div>
                    </td>
                    <td>MFM Physician</td>
                    <td>
                      MFM
                      <div className="text-secondary small">MFM Physician</div>
                    </td>
                    <td>
                    <i class="text-light small oi oi-envelope-closed ml-2"></i>
                      <i class="small oi oi-phone ml-2"></i>
                      <i class="small oi oi-chat ml-2"></i>
                    </td>
                    <td></td>
                    <td>2019-12-10 
                    <div className="text-secondary small">17:23:59</div></td>
                    <td>2020-02-10 
                    <div className="text-secondary small">12:10:35<Badge variant="success" className="ml-1">Logged in</Badge></div></td>

                  </tr>
                  <tr className="table-secondary">
                    <td>
                      <a href="#">Bowersonlongname, Davelongfirst</a>
                      <div className="text-secondary small">155555</div>
                    </td>

                    <td>
                      <div className="text-secondary small">dave@bauer.com</div>
                    </td>
                    <td>Emergency Medicine</td>
                    <td></td>

                    <td>
                      <i class="small oi oi-envelope-closed ml-2"></i>
                      <i class="small oi oi-phone ml-2"></i>
                      <i class="text-light small oi oi-chat ml-2"></i>
                    </td>
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
    );
  }
}
