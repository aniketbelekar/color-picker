import React from 'react';

function History({ colorHistory }) {
  return (
    <div className="history-container">
      <h2>Color History</h2>
      <div className="history">
        {colorHistory.map((color, index) => (
          <div key={index} className="history-item" style={{ backgroundColor: color }}>
            {color}
          </div>
        ))}
      </div>
    </div>
  );
}

export default History;
