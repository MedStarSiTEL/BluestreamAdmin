import React, { Component } from 'react'

export default class RequestGeneration extends Component {
  render() {
    return (
      <div>
      	 <section className="bg-white">
		    <div className="container">
		      	<div className="row pt-4">
		        	<div className="col-md-12 mb-4">
		          		<h3 className="mb-3">Request Generation Templates</h3>
		       		</div>
		      	</div>
            	<div className="row">
                	<div className="col-md-3 mb-3">
                      <input type="text" className="form-control" id="searchProgram" placeholder="" value="" required />
                	</div>
                	<div className="col-md-6 mb-3">
                  		<div className="custom-control custom-checkbox">
                    	<input type="checkbox" class="custom-control-input" id="customCheck1"/>
                    	<label className="custom-control-label" for="customCheck1">Show inactive</label>
                  	</div>
                </div>
                <div className="col-md-3 mb-3 text-right">
                   <a type="button" className="btn btn-primary" href="/newprogram">New Template</a>
                </div>
            </div>
            <div className="row">
              <div className="col-md-12 mb-4">
                <table className="table bg-white">
                  <thead>
                    <tr>
                      <th scope="col">Template</th>
                      <th scope="col">UI</th>
                      <th scope="col">ID</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><a href="#">Queue Manager Basic</a> <span class="badge badge-primary">33</span></td>
                      <td>Queue Manager</td>
                      <td>global_QM_basic</td>
                      <td>Active</td>
                    </tr>
                    <tr>
                      <td><a href="#">On-Demand Basic</a> <span class="badge badge-primary">11</span></td>
                      <td>On-Demand</td>
                      <td>global_OD_basic</td>
                      <td>Active</td>
                    </tr>
                    <tr>
                      <td><a href="#">Direct Connection Basic</a> <span class="badge badge-primary">2</span></td>
                      <td>Direct</td>
                      <td>global_DC_basic</td>
                      <td>Active</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
	     </section>	
      </div>
      )
  }
}