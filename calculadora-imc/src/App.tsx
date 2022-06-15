import { useState } from 'react';
import styles from './App.module.css';
import poweredImage from './assets/powered.png';

import {levels, calculateImc} from './helpers/imc';

const App = () => {

  const [heightField, setheightField] = useState<number>(0);
  const [weightField, setweight] = useState<number>(0);

  const handleCalculateButton = () => {
    if(weightField && heightField) {
      
    } else {
      alert("Digite todos os campos!")
    }
  }

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} alt="" width={150}/>
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC</h1>
          <p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>

          <input 
            type="number" 
            placeholder="Digite a sua altura. Exemplo: 1.5 (em métros)" 
            value={heightField > 0 ? heightField : ''} 
            onChange={e => setheightField(parseFloat(e.target.value))}
          />

          <input 
            type="number" 
            placeholder="Digite o seu peso. Exemplo: 75.3 (em kg)" 
            value={weightField > 0 ? weightField : ''} 
            onChange={e => setweight(parseFloat(e.target.value))}
          />

          <button onClick={handleCalculateButton}>Calcular</button>
        </div>
        <div className={styles.rightSide}>
          ...
        </div>
      </div>
    </div>
  );
}

export default App;