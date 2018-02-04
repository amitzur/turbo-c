import React from 'react';

const Rectangle = ({ bg, color }) => (
  <div
    className={`bg-${bg} text-${color} d-flex align-items-center justify-content-center mr-2 mb-2`}
    style={{ width: 100, height: 100 }}
  >{bg}</div>
);

const colors = [
  { bg: 'black', color: 'white' },
  { bg: 'white', color: 'black' },
  { bg: 'gray', color: 'black' },
  { bg: 'blue', color: 'white' },
  { bg: 'yellow', color: 'black' },
  { bg: 'red', color: 'white' },
  { bg: 'green', color: 'black' },
  { bg: 'cyan', color: 'black' },
  { bg: 'gray-dark', color: 'black' },
  { bg: 'green-dark', color: 'black' },
  { bg: 'cyan-dark', color: 'black' },
];

export default () => <div className="d-flex flex-wrap m-5">{colors.map(color => <Rectangle key={color.bg} {...color} />)}</div>;