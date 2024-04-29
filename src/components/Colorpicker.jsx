import React from 'react';


function ColorInfo({ colorName, colorCode, backgroundColor }) {
  return (
    <div className='color-info'>
      <p>{colorName}</p>
      <p>{colorCode}</p>
      <style>{`html { background-color: ${backgroundColor}; }`}</style>
    </div>
  );
}

export default ColorInfo;
