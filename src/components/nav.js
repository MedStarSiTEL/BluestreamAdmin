import React, { Component } from 'react'

export default class Nav extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <a className="navbar-brand" href="/"  style={{width: '100px'}}><img src="msh_logo.png" height="90%" width="90%"/>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active mx-1">
                <a className="nav-link" href="/dashboard">Dashboard<span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item mx-1">
                <a className="nav-link" href="/programs">Programs</a>
              </li>
              <li className="nav-item mx-1">
                <a className="nav-link" href="/experts">Experts</a>
              </li>
              <li className="nav-item mx-1">
                <a className="nav-link" href="/reports">Reports</a>
              </li>
              <li className="nav-item mx-1">
                <a className="nav-link" href="/users">Users</a>
              </li>
              <li className="nav-item mx-1">
                <a className="nav-link" href="/templates">Templates</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      )
  }
}