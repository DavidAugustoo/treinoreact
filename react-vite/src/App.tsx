// Primeiro forma de criar componentes
import { Button } from './components/Button'
// Segunda forma de criar compnentes
import * as C from './AppStyles';

const App = () => {

  return (
      <C.Container bgColor="green">
        <Button bg="red">Inscreva-se</Button>
        <Button bg="grey" small>Cancelar</Button>
        <C.Paragraph>Para se inscrever, clique no botão inscreva-se</C.Paragraph>
      </C.Container>
  );
}

export default App;