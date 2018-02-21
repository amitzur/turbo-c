import React from 'react';

class Shortcut extends React.Component {
  componentDidMount() {
    const { meta, ctrl, alt, shift } = this.props;
    if (meta || ctrl || alt || shift) {
      document.addEventListener('keyup', this.onKeyUp, true);
    }
  }

  componentWilUnmount() {
    document.removeEventListener('keyup', this.onKeyUp, true);
  }

  onKeyUp = (e) => {
    const { text, meta, ctrl, alt, shift } = this.props;
    const keyCode = text.charCodeAt(0);
    const metaPassed = !meta || (meta && e.metaKey);
    const ctrlPassed = !ctrl || (ctrl && e.ctrlKey);
    const shiftPassed = !shift || (shift && e.shiftKey);
    const altPassed = !alt || (alt && e.altKey);

    if (e.keyCode === keyCode && metaPassed && ctrlPassed && altPassed && shiftPassed) {
      e.preventDefault();
      this.props.onAction();
    }
  };

  render() {
    const { charColor, textColor, text } = this.props;
    const firstChar = text[0];
    const restChars = text.slice(1);
    return <span className={`text-${textColor}`}><span className={`text-${charColor}`}>{firstChar}</span>{restChars}</span>;
  }
}

export default Shortcut;