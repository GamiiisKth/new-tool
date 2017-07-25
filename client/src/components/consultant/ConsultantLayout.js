import React, { Component } from 'react'
import ConsultantNav from './ConsultantNav';

class ConsultantLayout extends Component {
  render () {
    const  {location}= this.props;
    console.log(this.props.children);
    return (
      <div>
        <ConsultantNav location={location}/>
      </div>
    )
  }
}


export default ConsultantLayout

