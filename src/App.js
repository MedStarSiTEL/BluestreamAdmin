import React, { Component } from 'react';
import './App.css';
import Programs from './components/programs';
import Dashboard from './components/dashboard';
import Experts from './components/experts';
import Reports from './components/reports';
import Users from './components/users';
import Templates from './components/templates';
import NewProgram from './components/newprogram';
import NewExpert from './components/newExpert';
import CustomNav from './components/custom_nav';
import ProgramBasic from './components/program_basic';
import ProgramRequestGeneration from './components/program_requestGeneration';
import ProgramExpertise from './components/program_expertise';
import ProgramWorkflow from './components/program_workflow';
import ProgramSites from './components/program_sites';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
  render(){
    return (
      <Router>
        <div>
          <CustomNav />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/programs" component={Programs} />
          <Route path="/experts" component={Experts} />
          <Route path="/reports" component={Reports} />
          <Route path="/users" component={Users} />
          <Route path="/templates" component={Templates} />
          <Route path="/newprogram" component={NewProgram} />
          <Route path="/program_basic" component={NewProgram} />
          <Route
            path="/program_requestGeneration"
            component={ProgramRequestGeneration}
          />
          <Route path="/program_expertise" component={ProgramExpertise} />
          <Route path="/newExpert" component={NewExpert} />
          <Route path="/program_workflow" component={ProgramWorkflow} />
          <Route path="/program_sites" component={ProgramSites} />
        </div>
      </Router>
    );
  }
}

export default App;
