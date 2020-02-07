import React, { Component } from 'react'
import RequestGeneration from './requestgeneration'
import Escalation from './escalation'
import Expertise from './expertise'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";


export default class Templates extends Component {
  render() {
    return (
      <div>
				<Container className="bg-light">
				<Row className="pt-4">
							<Col className="mb-4">
								<h2 className="mb-3">Templates</h2>
							</Col>
						</Row>
		    	<Row>
					<Col>
						<Tabs defaultActiveKey="request" id="templates-tabs">
							<Tab eventKey="request" title="Request Generation">
								<RequestGeneration/>
							</Tab>
							<Tab eventKey="escalation" title="Escalation">
								<Escalation/>
							</Tab>
							<Tab eventKey="expertise" title="Expertise">
								<Expertise/>
							</Tab>
						</Tabs>
					</Col>
		    	</Row>
				</Container>
      </div>
    )
  }
}