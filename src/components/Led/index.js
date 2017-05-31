import React, { Component } from 'react';

import './styles.css';

class Led extends Component {
  getStyles() {
    return {
      backgroundColor: this.getBackgroundColor(),
      height: 20,
      width: 20,
    }
  }

  getBackgroundColor() {
    return "red";
  }

  render() {
    return (
      <div className="led" style={this.getStyles()} />
    );
  }
}

export default Led;
