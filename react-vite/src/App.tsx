import { ChangeEvent, useEffect, useState } from "react";
import { Post } from './types/Movie'

const App = () => {
  const [post, setPost] = useState<Post[]>([]);
  const[loading, setLoading] = useState(false);

  const [addTitle, setAddTitle] = useState('');
  const [addBody, setAddBody] = useState('');

  const loadMovies = async () => {
    try {
      setLoading(true);
      let response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
      let json = await response.json();
      setLoading(false);
      setPost(json);
    } catch(e) {
      setLoading(false);
      alert("Erro! Tente mais tarde");
    }
    
  }

  const handleAddTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAddTitle(e.target.value);
  }

  const handleAddBodyChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setAddBody(e.target.value);
  }

  const handleAddClick = async () => {
    if(addTitle && addBody) {
      let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: addTitle,
          body: addBody,
          userId: 1
        }),
        headers: {
          'Content-Type': 'aplication/json'
        }
      });

      let json = await response.json();
      console.log(json);
    } else {
      alert('Preencha os dados!');
    }
  }

  useEffect(() => {
    loadMovies();
  },[])
    
  return ( 
    <div>
      
      <fieldset className="border-2 mb-3">
          <legend>Adicionar novo post</legend>
          <input value={addTitle} onChange={handleAddTitleChange} className="border block" type="text" placeholder="Digite um Título"/>
          <textarea value={addBody} onChange={handleAddBodyChange} className="border block p-3" name=""></textarea>
          <button className="border block" onClick={handleAddClick}>Adicionar</button>

      </fieldset>

     {!loading && 
      <div>
        Total de filmes: {post.length}
      </div>
     }
    
      {loading && 
        <div>Carregando...</div>
      }

      <div className="flex flex-col gap-4 p-5">        
        {post.map((item, key) => {
          return <div key={key}>
            <h1 className="font-bold">{item.title}</h1>
            <p>{item.body}</p>
          </div>
        })}
      </div>
    </div>
  );
}

export default App;