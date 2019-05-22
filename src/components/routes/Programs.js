import React, { Component } from 'react'
import '../../App.css'

export default class Programs extends Component {
  render() {
    return (
      <React.Fragment style={{ flex: "row"}}>
        <div className="card text-danger" style={{width: "35rem"}}>
            <div className="card-box">
                <div className="card-header">
                <h5 className="card-title">Under 18 Karate Class</h5>
                <a className="btn btn-dark" href="https://www.youtube.com/watch?v=IcGDS93A0i8">Click here</a> for a class demonstration
                </div>
                <p className="card-text float-left">Come have your child participate in the top karate school in valley!</p>
                <img src={require('../assets/under-18-karate.jpg')} alt="uner18karate" className="card-img-top"/>
            </div>
        </div>
        <div className="card text-danger" style={{width: "35rem"}}>
            <div className="card-box">
                <div className="card-header">
                <h5 className="card-title">Under 18 Karate Class</h5>
                <a className="btn btn-dark" href="https://www.youtube.com/watch?v=IcGDS93A0i8">Click here</a> for a class demonstration
                </div>
                <p className="card-text float-left">Come have your child participate in the top karate school in valley!</p>
                <img src={require('../assets/under-18-karate.jpg')} alt="uner18karate" className="card-img-top"/>
            </div>
        </div>
      </React.Fragment>
    )
  }
}
