import { useReducer } from "react";
import { UseContagem } from "./reducers/Contagem";

const App = () => {
  const [state, dispatch] = UseContagem();
  
  return (
    <div>
      Contagem: {state.count}
      <hr />
      <button onClick={() =>dispatch({type: 'ADD'})}>Adicionar</button>
      <button onClick={() =>dispatch({type: 'DEL'})}>Deletar</button>
      <button onClick={() =>dispatch({type: 'RESET'})}>Reseat</button>
    </div>
  );
}
export default App;