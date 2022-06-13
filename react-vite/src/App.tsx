import { Person } from './components/Person';

const App = () => {
  let list = [
    {
      name: "David",
      age: 18
    },
    {
      name: "Rafael",
      age: 20
    },
    {
      name: "Samanta",
      age: 22
    },
    {
      name: "Maria Eduarda",
      age: 32
    },
  ];


  return (
    <div>
      <h2>Lista de presença</h2>
      <ul>
        {list.map( (item, index) => {
          return <Person data={item} key={index}/>
        })}
      </ul>
    </div>
  );
}

export default App;