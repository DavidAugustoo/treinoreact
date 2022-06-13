import React, { useState } from "react";

const App = () => {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [idade, setIdade] = useState('');

  const changeInputNome = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNome(event.target.value);
  }

  const changeInputSobrenome = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSobrenome(event.target.value);
  }

  const changeInputIdade = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIdade(event.target.value);
  }

  return (
    <div>
      <div>
        Nome:
        <input type="text" value={nome} onChange={changeInputNome} />
      </div>

      <div>
        Sobrenome:
        <input type="text" value={sobrenome} onChange={changeInputSobrenome} />
      </div>

      <div>
        Idade:
        <input type="text" value={idade} onChange={changeInputIdade} />
      </div>

      <hr/>

      Olá {nome} {sobrenome}, tudo bem?<br/>
      Você tem {idade} anos.
    </div>
  );
}

export default App;