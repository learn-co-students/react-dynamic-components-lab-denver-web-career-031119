import React, { Component } from 'react';

export default class ColorBox extends Component {
  
  render() {
      let newValue = this.props.opacity - 0.033
      if( newValue >= 0.2 ) {
      return (
        <div className="color-box" style={{opacity: 2}}>
        <ColorBox opacity={newValue}/>
        </div>
      )
    }
    else {
      return null;
    }
  }
  
}
