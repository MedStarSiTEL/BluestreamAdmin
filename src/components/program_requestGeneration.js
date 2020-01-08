import React, { Component, useState  } from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

function AccessCode() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/*Change this to show/hide on selected instead of click*/}
      <Form.Group controlId="accessCodeCheckbox">
        <Form.Check
          custom
          onClick={() => setOpen(!open)}
          aria-controls="accessCodeDetails"
          aria-expanded={open}
          type="checkbox"
          label="Access Code"
        />
      </Form.Group>

      <Collapse in={open}>
        <div id="accessCodeDetails">
          <Row>
            <Col md={{ span: 12, offset: 2 }} className="">
              <label htmlFor="defaultAccessCode">Default Access Code</label>
              <InputGroup className="mb-3">
                <FormControl
                  type="password"
                  id="defaultAccessCode"
                  aria-describedby="showAccessCodeText"
                />
                <InputGroup.Append>
                  <Button variant="outline-secondary">
                    <span className="oi oi-eye"></span>
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </Col>
          </Row>
        </div>
      </Collapse>
    </>
  );
}

export default class ProgramRequestGeneration extends Component {
  render() {
    return (
      <div>
        <Row className="mb-4">
          <Col>
            <h3>Request Generation</h3>
            <p className="lead">description of section</p>
          </Col>
        </Row>

        {/* this is a component - subsection*/}
        <Row className="mb-4">
          <Col>
            {/* this is a component - subsection header */}
            <h4>Request Generation Template</h4>
            <p className="text-secondary">description of subsection</p>
            {/* this is a component - subsection content */}
            <CardDeck>
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
          </Col>
        </Row>

        <Row className="mb-4">
          <Col>
            <h4>Authentication</h4>
            <p className="text-secondary">description of subsection</p>
            <div key={`custom-checkbox`} className="mb-3">
              <Form.Check
                custom
                disabled
                type="checkbox"
                id={`ssoCheckbox`}
                label={`Single Sign-On`}
              />

              <Form.Check
                custom
                type="checkbox"
                label={`User login`}
                id={`userLoginCheckbox`}
              />
              <Form.Check
                custom
                type="checkbox"
                label={`Shared login`}
                id={`sharedLoginCheckbox`}
              />
              <AccessCode />
            </div>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col>
            <h4>Pre-Call Settings</h4>
            <p className="text-secondary">description of subsection</p>
            <div key={`custom-checkbox`} className="mb-3">
              <Form.Check
                custom
                type="checkbox"
                id={`externalDataCheckbox`}
                label={`External system will provide data`}
              />

              <Form.Check
                custom
                type="checkbox"
                label={`Manually data entry`}
                id={`ManualDataCheckbox`}
              />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}