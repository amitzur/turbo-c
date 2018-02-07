import React, { Component } from 'react';
import { SIZE_UNIT } from '../data/constants';

const WIDTH = SIZE_UNIT;
const HEIGHT = SIZE_UNIT * 2;

class Cursor extends Component {

  constructor(props) {
    super(props);
    this.styleEl = document.createElement('style');
    this.styleEl.textContent = '*{cursor:none !important}';
  }

  componentDidMount() {
    document.addEventListener('mousemove', this.onMouseMove, true);
    document.head.appendChild(this.styleEl);
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.onMouseMove, true);
    document.head.removeChild(this.styleEl);
  }

  onMouseMove = (e) => {
    const x = Math.max(0, Math.min(window.innerWidth - WIDTH, e.pageX));
    const y = Math.max(0, Math.min(window.innerHeight - HEIGHT, e.pageY));
    this.el.style.top = `${y}px`;
    this.el.style.left = `${x}px`;
  };

  elStyle = { position: 'absolute', width: WIDTH, height: HEIGHT, background: 'rgba(170,0,0,0.5)', zIndex: 10000, pointerEvents: 'none' };

  render() {
    return <div ref={el => this.el = el} style={this.elStyle}/>
  }
}

export default Cursor;