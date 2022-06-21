import { ChangeEvent, useEffect, useState } from "react";
import { PostForm } from "./components/PostForm";
import { Post } from './types/Movie';
import { PostItem } from './components/PostItem';

const App = () => {
  const [post, setPost] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  const loadMovies = async () => {
    try {
      setLoading(true);
      let response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
      let json = await response.json();
      setLoading(false);
      setPost(json);
    } catch (e) {
      setLoading(false);
      alert("Erro! Tente mais tarde");
    }

  }

  useEffect(() => {
    loadMovies();
  }, [])

  const handleAddPost = async (title: string, body: string) => {
    if (title && body) {
      let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({ body, title, userId: 1 }),
        headers: { 'Content-Type': 'aplication/json' }
      });
      let json = await response.json();

      if (json.id) {
        alert('Post Adicionado!');
      } else {
        alert('Preencha os dados!');
      }
    }
  }

  return (
    <div>

      <PostForm onAdd={handleAddPost} />

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
          return <PostItem data={item}/>
        })}
      </div>
    </div>
  );
}
export default App;