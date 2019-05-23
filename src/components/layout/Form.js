import React from 'react';

export const Form = props => (
    <React.Fragment>
    <h1>Contact Sensei Lawrence for any questions</h1>
<form style={{marginTop: "2cm"}}>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control col-sm-5" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
  <textarea class="form-control col-sm-5" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <div className="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </React.Fragment>
);