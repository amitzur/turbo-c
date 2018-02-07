import React, { Component } from 'react';
import { observer } from 'mobx-react';
import cn from 'classnames';
import { SIZE_UNIT } from '../data/constants'

class Window extends Component {

  onMouseDown = (e) => {
    const { store } = this.props;

    if (e.target === this.topLeftEl) {
      store.resize = { top: true, left: true };
    } else if (e.target === this.topRightEl) {
      store.resize = { top: true, right: true };
    } else if (e.target === this.bottomLeftEl) {
      store.resize = { bottom: true, left: true };
    } else if (e.target === this.bottomRightEl) {
      store.resize = { bottom: true, right: true };
    } else if (e.target === this.topEl) {
      store.resize = false;
    }

    if (store.resize !== undefined) {
      store.onStartDrag(e);

      document.addEventListener('mousemove', this.onMouseMove, true);
      document.addEventListener('mouseup', this.onMouseUp, true);
    }

    store.onMouseDown(store);
  };

  onMouseUp = (e) => {
    document.removeEventListener('mousemove', this.onMouseMove, true);
    document.removeEventListener('mouseup', this.onMouseUp, true);
    this.props.store.setState({ dragging: false, resize: undefined });
  };

  onMouseMove = (e) => {
    const { pageY, pageX } = e;
    const { store } = this.props;
    store.onDrag(store, { pageX, pageY });
  };

  render() {
    const { children, store } = this.props;
    const { top, left, width, height, zIndex, onClose, name, dragging } = store;
    return (
      <div
        onMouseDown={this.onMouseDown}
        className="pos-absolute bg-blue py-2 px-1"
        style={{ top, left, width, height, zIndex, userSelect: 'none' }}
        ref={el => this.el = el}
      >
        <div className={cn({ 'border border-green': dragging, 'border-double border-white': !dragging }, "h-100 text-white p-2")}>
          <div className="window-top pos-absolute text-center" ref={el => this.topEl = el} style={{ top: 0, left: SIZE_UNIT, right: SIZE_UNIT, height: 2*SIZE_UNIT}}>
            {!dragging && <span className="bg-blue text-white px-2">{name}</span>}
          </div>
          <div className="window-top-left pos-absolute" ref={el => this.topLeftEl = el} style={{ top: 0, left: 0, height: 2*SIZE_UNIT, width: SIZE_UNIT}}/>
          <div className="window-top-right pos-absolute" ref={el => this.topRightEl = el} style={{ top: 0, right: 0, width: SIZE_UNIT, height: 2*SIZE_UNIT}}/>
          <div className="window-bottom-right pos-absolute" ref={el => this.bottomRightEl = el} style={{ bottom: 0, right: 0, width: 2*SIZE_UNIT, height: 2*SIZE_UNIT}}/>
          <div className="window-bottom-left pos-absolute" ref={el => this.bottomLeftEl = el} style={{ bottom: 0, left: 0, width: SIZE_UNIT, height: 2*SIZE_UNIT }}/>
          {!dragging && <div className="pos-absolute text-white bg-blue clickable" onClick={() => onClose(store)} style={{ top: 0, left: SIZE_UNIT * 3 }}>[<span className="text-green">{'\u25A0'}</span>]</div>}
          {children}
        </div>
      </div>
    );
  }

}

export default observer(Window);