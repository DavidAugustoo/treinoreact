import { useState } from 'react';

const App = () => {
  let [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  }

  return (
    <>
      <button onClick={handleClick}>{show ? 'Ocultar' : 'Mostrar'}</button>

      {show == true &&
        <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, consequatur...
      </div>
      }
      
    </>
  );
}

export default App;