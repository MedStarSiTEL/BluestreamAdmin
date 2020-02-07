import React, { Component } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import OverviewReports from './overviewReports';
import CallLog from './callLog';
import ExpertsReports from './expertsReports';
import ProgramReports from './programReports';

export default class Reports extends Component {
  render() {
    return (
      <div>
      		<Container className="bg-light">
						<Row className="pt-4">
							<Col className="mb-4">
								<h2 className="mb-3">Reports</h2>
							</Col>
						</Row>
		    	<Row>
					<Col>
						<Tabs defaultActiveKey="overview" id="reports-tabs">
							<Tab eventKey="overview" title="Overview">
								<OverviewReports />
							</Tab>
							<Tab eventKey="callLog" title="Call Log">
								<CallLog/>
							</Tab>
							<Tab eventKey="programs" title="Programs">
								<ProgramReports />
							</Tab>
							<Tab eventKey="experts" title="Experts">
								<ExpertsReports />
							</Tab>
						</Tabs>
					</Col>
		    	</Row>
				</Container>
      </div>
      )
  }
}