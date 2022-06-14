// Primeiro forma de criar componentes
import { Button } from './components/Button'
// Segunda forma de criar compnentes
import * as C from './AppStyles';

const App = () => {

  return ( 
    <div className="bg-indigo-700 text-white p-2 flex flex-col gap-4 items-center	">
      <p className="text-center text-xl">Primeiros passos com Tailwind</p>
      <button className="bg-cyan-500 hover:bg-cyan-600 px-2 py-1 rounded-lg text-sm w-full md:w-auto">Clique Aqui</button>
    </div>
  );
}

export default App;