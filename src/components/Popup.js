import React, { Component } from 'react';
import ClickOutside from 'react-click-outside';

class Popup extends Component {

  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen
    }));
  };

  close = () => {
    this.setState({ isOpen: false });
  };

  onClickOutside = (e) => {
    if (e.target !== this.el && !this.el.contains(e.target)) {
      this.close();
    }
  };

  render() {
    const { text, className, render } = this.props;
    return (
        <div className={className}>
          <div ref={el => this.el = el} onClick={this.toggle} className="clickable px-2">{text}</div>
          <ClickOutside onClickOutside={this.onClickOutside}>
            {this.state.isOpen && <div className="pos-absolute">
              {render({ close: this.close })}
            </div>}
          </ClickOutside>
        </div>
    );
  }

}

export default Popup;