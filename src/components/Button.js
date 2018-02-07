import React from 'react';
import cn from 'classnames';

const Button = ({ children, onClick, disabled, className }) => (
  <button className={cn("bg-green-dark border-0", className)} disabled={disabled} onClick={onClick}>{children}</button>
);

export default Button;