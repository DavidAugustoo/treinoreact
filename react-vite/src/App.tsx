import { useState } from 'react'

const App = () => {

  // name - Nome da variavel
  // setName - Nome da função que será usada para trocar o nome da variavel
  // 'David' - valor padrão da variavel 
  const [name, setName] = useState('David');

  const handleButtomClick = () => {
    setName("Augusto")
  }

  return (
    <div>
      Meu nome é {name}.
      <button onClick={handleButtomClick}>Clique Aqui</button>
    </div>
  );
}

export default App;