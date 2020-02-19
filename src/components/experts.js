import React, { Component } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ExpertList from './expertList';
import Button from 'react-bootstrap/Button';
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import ExpertTemplates from './expertTemplates';

export default class Experts extends Component {
  render() {
    return (
      <div>
      		<Container className="bg-light">
				<Row className="pt-4">
							<Col className="mb-4">
								<h2 className="mb-3">Experts</h2>
							</Col>
						</Row>
		    	<Row>
					<Col>
						<Tabs defaultActiveKey="experts" id="expert-tabs">
							<Tab eventKey="experts" title="Experts">
								<ExpertList/>
							</Tab>
							<Tab eventKey="programs" title="Templates">
							<ExpertTemplates/>
							</Tab>
						
						</Tabs>
					</Col>
		    	</Row>
				</Container>
      </div>
      )
  }
}