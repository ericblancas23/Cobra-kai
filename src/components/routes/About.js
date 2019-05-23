import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
     <React.Fragment>
         <div className="row">
            <p className="float-left font-weight-bold" style={{marginTop: "2cm", marginLeft: "2cm"}}><h1>About Cobra Kai</h1> <br /><br />
            Cobra Kai is one of the best Karate Dojo in the valley.<br />
            We live and train by the code: Strike First, Strike Hard, No Mercy.<br />
            Do you think you have what it takes to learn the way of the fist?
            <br />
            <br/>
            Click on our sign up page for one free class
            <br />
            <br />
            <h1>About Sensei Lawrence</h1>
            <br />
            
            Sensei Johnny Lawrence is a former All-Valley Tournament Champion.<br />
            In fact, he didn't lose a single point his junior year!. He currently resides in <br />
            Reseda,  and when he's not teaching Karate, you can find him jamming out to 80's<br />
            rock in his firebird.
            </p>
            <img className="mx-auto d-block"src={require('../assets/sensei2.jpg')} style={{marginTop: "2cm"}}/>
         </div>
     </React.Fragment>
    )
  }
}
