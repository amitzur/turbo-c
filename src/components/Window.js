import React, { Component } from 'react';
import { observer } from 'mobx-react';
import cn from 'classnames';
import { SIZE_UNIT } from '../data/constants'

class Window extends Component {

  state = {
    dragging: false,
    top: this.props.top,
    left: this.props.left,
    width: this.props.width,
    height: this.props.height,
    zIndex: this.props.zIndex,
  };

  componentWillReceiveProps(nextProps) {
    const newState = {};
    ['left', 'top', 'width', 'height', 'zIndex'].forEach(prop => {
      if (prop in nextProps) newState[prop] = nextProps[prop];
    });
    this.setState(newState);
  }

  onMouseDown = (e) => {
    const newState = { dragging: true };
    if (e.target === this.topLeftEl) {
      newState.resize = { top: true, left: true };
    } else if (e.target === this.topRightEl) {
      newState.resize = { top: true, right: true };
    } else if (e.target === this.bottomLeftEl) {
      newState.resize = { bottom: true, left: true };
    } else if (e.target === this.bottomRightEl) {
      newState.resize = { bottom: true, right: true };
    } else if (e.target === this.topEl) {
      newState.resize = false;
    }

    if (newState.resize !== undefined) {
      this.setState(newState);

      document.addEventListener('mousemove', this.onMouseMove, true);
      document.addEventListener('mouseup', this.onMouseUp, true);

      const { pageX, pageY } = e;
      this.deltaX = pageX - this.state.left;
      this.deltaY = pageY - this.state.top;
      this.startHeight = this.state.height;
      this.startWidth = this.state.width;
    }

    this.props.onMouseDown && this.props.onMouseDown(this.props.name);
  };

  onMouseUp = (e) => {
    document.removeEventListener('mousemove', this.onMouseMove, true);
    document.removeEventListener('mouseup', this.onMouseUp, true);
    this.setState({
      dragging: false,
      resize: null,
    });

  };

  onMouseMove = (e) => {
    this.setState((prevState) => {
      const { pageY, pageX } = e;
      let { top, left, width, height, resize } = prevState;

      if (resize !== undefined) {
        if (resize.top) {
          const bottom = top + height;
          top = pageY - this.deltaY;
          height = bottom - top;
        }

        if (resize.left) {
          const right = left + width;
          left  = pageX - this.deltaX;
          width = right - left;
        }

        if (resize.bottom) {
          height = this.startHeight - (top + this.deltaY - pageY);
        }

        if (resize.right) {
          width = this.startWidth - (left + this.deltaX - pageX);
        }

        if (resize === false) {
          top = pageY - this.deltaY;
          left  = pageX - this.deltaX
        }
      }

      return { top, left, width, height };
    }, () => {
      const { top, left, width, height } = this.state;
      this.props.onDrag && this.props.onDrag(this.props.name, { top, left, width, height });
    });
  };

  render() {
    const { onClose, children, name } = this.props;
    const { top, left, width, height, zIndex, dragging } = this.state;
    return (
      <div
        onMouseDown={this.onMouseDown}
        className="pos-absolute bg-blue py-2 px-1"
        style={{ top, left, width, height, zIndex, userSelect: 'none' }}
        ref={el => this.el = el}
      >
        <div className={cn({ 'border border-green': dragging, 'border-double border-white': !dragging }, "h-100")}>
          <div className="window-top pos-absolute text-center" ref={el => this.topEl = el} style={{ top: 0, left: SIZE_UNIT, right: SIZE_UNIT, height: 2*SIZE_UNIT}}>
            {!dragging && <span className="bg-blue text-white px-2">{name}</span>}
          </div>
          <div className="window-top-left pos-absolute" ref={el => this.topLeftEl = el} style={{ top: 0, left: 0, height: 2*SIZE_UNIT, width: SIZE_UNIT}}/>
          <div className="window-top-right pos-absolute" ref={el => this.topRightEl = el} style={{ top: 0, right: 0, width: SIZE_UNIT, height: 2*SIZE_UNIT}}/>
          <div className="window-bottom-right pos-absolute" ref={el => this.bottomRightEl = el} style={{ bottom: 0, right: 0, width: 2*SIZE_UNIT, height: 2*SIZE_UNIT}}/>
          <div className="window-bottom-left pos-absolute" ref={el => this.bottomLeftEl = el} style={{ bottom: 0, left: 0, width: SIZE_UNIT, height: 2*SIZE_UNIT }}/>
          {!dragging && <div className="pos-absolute text-white bg-blue clickable" onClick={() => onClose(name)} style={{ top: 0, left: SIZE_UNIT * 3 }}>[<span className="text-green">{'\u25A0'}</span>]</div>}
          {children}
        </div>
      </div>
    );
  }

}

export default Window;