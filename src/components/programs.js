import React, { Component } from 'react'

export default class Programs extends Component {
  render() {
    return (
         <div>
    <section className="bg-light">
    <div className="container">
      <div className="row pt-4">
        <div className="col-md-12 mb-4">
          <h2 className="mb-3">Programs</h2>
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
            
             <a type="button" className="btn btn-primary" href="/newprogram">New Program</a>
          </div>
      </div>
      <div className="row">
        <div className="col-md-12 mb-4">
          <table className="table bg-white">
            <thead>
              <tr>
                <th scope="col">Program</th>
                <th scope="col">Facilities</th>
                <th scope="col">ID</th>
                <th scope="col">Status</th>
                <th scope="col">URL</th>
                <th scope="col">Contact</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">NRH</th>
                <td>54</td>
                <td>MedStar_NRH_01</td>
                <td>Active</td>
                <td>"https://call-center-admin.medstar-test.com/"</td>
                <td>Julia McSorley</td>
              </tr>
              <tr>
                <th scope="row">NRH</th>
                <td>54</td>
                <td>MedStar_NRH_01</td>
                <td>Active</td>
                <td>"https://call-center-admin.medstar-test.com/"</td>
                <td>Julia McSorley</td>
              </tr>
              <tr>
                <th scope="row">NRH</th>
                <td>54</td>
                <td>MedStar_NRH_01</td>
                <td>Active</td>
                <td>"https://call-center-admin.medstar-test.com/"</td>
                <td>Julia McSorley</td>
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