import { useState } from 'react';

const App = () => {

  const [clicked, setCliked] =  useState(false);

  const handleClick = () => {
    setCliked(!clicked);
  }

  return (
    <div>
      <button style={{backgroundColor: clicked == true ? 'red' : 'blue'}} onClick={handleClick}>Clique Aqui</button>
    </div>
  );
}

export default App;