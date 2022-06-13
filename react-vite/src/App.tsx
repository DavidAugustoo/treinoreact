import { Button } from '../src/components/Button';
const App = () => {
  let textoDoBotao = 'clicar no botão';

  const botaoEventAction = (frase: string) => {
    alert("Frase do app: " + frase);
  }

  return (
    <div>
      <Button text={textoDoBotao} clickFn={botaoEventAction}/>
    </div>
  );
}

export default App;