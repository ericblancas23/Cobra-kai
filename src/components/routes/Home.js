import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../../App.css'
import '../assets/cobra.jpg'

export default class Home extends Component {
  render() {
    return (
      <div className="fader">
          <Link to="/auth"><img src={require('../assets/cobra.jpg')}  alt="bad-ass cobra"className="img-fluid center-block"/></Link>
      </div>
    )
  }
}
