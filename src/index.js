import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const numbers = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div>
      {numbers.map((number) => (
        <p key={number}>{number}</p>
      ))}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));