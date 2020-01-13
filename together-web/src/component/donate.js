import React, { Component } from 'react';
class Donate extends Component {
  state = {}
  render() {
    return (
      <div className="introduction">
        <p>每月...$</p>
        <button>信用卡</button>
        <button>100$</button>
        <button>50$</button>
        <button>25$</button>
      </div>
    );
  }
}

export default Donate;