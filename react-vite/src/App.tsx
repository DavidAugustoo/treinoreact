// Primeiro forma de criar componentes
import { Button } from './components/Button'
// Segunda forma de criar compnentes
import * as C from './AppStyles';

const App = () => {

  return (
    <div>
      <C.Container>
        <Button>Inscreva-se</Button>
        <C.Paragraph>Para se inscrever, clique no botão inscreva-se</C.Paragraph>
      </C.Container>
    </div>
  );
}

export default App;