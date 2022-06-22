import { usePeopleList } from './reducers/peopleList';
import { ChangeEvent, useState } from 'react';

const App = () => {
  const [list, dispatch] = usePeopleList();
  const [nameInput, setNameInput] = useState('');

  const handleAddButton = () => {
    if(nameInput) {
      dispatch({
        type: "ADD",
        payload: {
          name: nameInput
        }
      });
      setNameInput('');
    }
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNameInput(e.target.value);
  }

  const deletePerson = (id: string) => {
    dispatch({
      type: "DEL",
      payload: { id }
    })
  }

  const handleOrderButton = () => {
    dispatch({
      type: "ORDER"
    })
  }
  
  return (
  <div>

    <input type="text" value={nameInput} onChange={handleInputChange}/>
    <button onClick={handleAddButton}>Adicionar</button>

    <hr />

    <button onClick={handleOrderButton}>Ordenar Nomes</button>

    {list.map((item, index) => {
        return <div>
          <li key={index}>{item.name}</li>
          <button onClick={() => deletePerson(item.id)}>Deletar</button>
        </div>
      })}
  </div>
  );
}
export default App;