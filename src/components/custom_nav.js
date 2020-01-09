import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default class CustomNav extends Component {
  render() {
    return (
      <div>
        <Navbar bg="white" expand="lg">
          <Navbar.Brand href="/dashboard" style={{ width: "100px" }}>
            <img src="msh_logo.png" height="90%" width="90%" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/dashboard">Dashboard</Nav.Link>
              <Nav.Link href="/programs">Programs</Nav.Link>
              <Nav.Link href="/experts">Experts</Nav.Link>
              <Nav.Link href="/reports">Reports</Nav.Link>
              <Nav.Link href="/users">Users</Nav.Link>
              <Nav.Link href="/templates">Templates</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      )
  }
}