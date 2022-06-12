import { Header } from "./components/header";
import { Photo } from './components/photo'

function App() {
  return (
    <div>
      <Header title="planeta terra" />

      <Photo legend="Google"> 
        <img src="https://www.google.com.br/google.jpg" alt="" />
      </Photo>
    </div>
  );
}

export default App;