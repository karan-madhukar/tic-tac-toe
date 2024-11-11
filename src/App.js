import React, { useState } from 'react';
import './App.css';

function App() {
  const [matrix, setMatrix] = useState(Array(9).fill(null));

  const [toggleUser, setToggleUser] = useState(true);

  const updateMatrix = (index) =>
  {
    if (matrix[index] || calculateWinner(matrix))  return;
   
    const newMatrix = matrix.slice();
    newMatrix[index] = toggleUser ? 'X' : 'O';
    setMatrix(newMatrix);
    setToggleUser(!toggleUser);
  }

  const calculateWinner = (matrix) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], 
      [0, 3, 6], [1, 4, 7], [2, 5, 8], 
      [0, 4, 8], [2, 4, 6]             
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (matrix[a] && matrix[a] === matrix[b] && matrix[a] === matrix[c]) {
        return matrix[a]; 
      }
    }
    return null; 
  };

  const winner = calculateWinner(matrix);

  const status = winner ? `Winner: ${winner}` : `Next player: ${toggleUser ? 'X' : 'O'}`;

  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <div className='Board'>
        <div className="Status">{status}</div>
        <div className='Row'>
          <div className='Square' onClick={() => updateMatrix(0)}>{matrix[0]}</div>
          <div className='Square' onClick={() => updateMatrix(1)}>{matrix[1]}</div>
          <div className='Square' onClick={() => updateMatrix(2)}>{matrix[2]}</div>
        </div>
        <div className='Row'>
          <div className='Square' onClick={() => updateMatrix(3)}>{matrix[3]}</div>
          <div className='Square' onClick={() => updateMatrix(4)}>{matrix[4]}</div>
          <div className='Square' onClick={() => updateMatrix(5)}>{matrix[5]}</div>
        </div>
        <div className='Row'>
          <div className='Square' onClick={() => updateMatrix(6)}>{matrix[6]}</div>
          <div className='Square' onClick={() => updateMatrix(7)}>{matrix[7]}</div>
          <div className='Square' onClick={() => updateMatrix(8)}>{matrix[8]}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
