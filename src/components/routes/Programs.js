import React, { Component } from 'react'
import '../../App.css'

export default class Programs extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="card text-danger d-block" style={{width: "35rem"}}>
            <div className="card-box">
                <div className="card-header">
                <h5 className="card-title">Under 18 Karate Class</h5>
                <a className="btn btn-dark" href="https://www.youtube.com/watch?v=_rB36UGoP4Y&list=PLxm--8AYWEDelTYpYi2zulMEw-0T-M5IH">Click here</a> for a class demonstration
                </div>
                <p className="card-text float-left">Come have your child participate in the top karate school in valley!</p>
                <img src={require('../assets/under-18-karate.jpg')} alt="uner18karate" className="card-img-top"/>
            </div>
        </div>
        <div className="card text-danger d-block" style={{width: "35rem"}}>
            <div className="card-box">
                <div className="card-header">
                <h5 className="card-title">Adult Karate Class</h5>
                <a className="btn btn-dark" href="https://www.youtube.com/watch?v=eKc-SxD0HZE&list=PLxm--8AYWEDf9J7QzSE8rM-dFFSVt1xTQ">Click here</a> for a class demonstration
                </div>
                <p className="card-text float-left">Living the daily 9 to 5 adult life can be harsh, Come to Cobra Kai Adult Class to stand up and fight against life! No Mercy style!</p>
                <img src={require('../assets/Adult-Karate.jpg')} alt="uner18karate" className="card-img-top"/>
            </div>
        </div>
      </React.Fragment>
    )
  }
}
