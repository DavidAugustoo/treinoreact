import { ChangeEvent, useEffect, useState } from "react";
import { Movie } from './types/Movie'

const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const loadMovies = () => {
    fetch(`https://api.b7web.com.br/cinema/`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setMovies(json);
      });
  }

  useEffect(() => {
    loadMovies();
  },[])
    
  return ( 
    <div>
      <button className="block bg-blue-400 p-2 rounded" onClick={loadMovies}>Carregar Filmes</button>

      Total de filmes: {movies.length}
      <div className="grid grid-cols-6 gap-3">
        {movies.map((item, key) => {
          return <div key={key}>
            <img src={item.avatar} alt="" className="w-32 block"/>
            {item.titulo}
          </div>
        })}
      </div>
    </div>
  );
}

export default App;