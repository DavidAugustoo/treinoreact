import { ChangeEvent, useEffect, useState } from "react";
import { PostForm } from "./components/PostForm";
import { Post } from './types/Movie';
import { PostItem } from './components/PostItem';
import { api } from './api';

const App = () => {
  const [post, setPost] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  const loadPosts = async () => {
    try {
      setLoading(true);
      let json = await api.getAllPosts();
      setLoading(false);
      setPost(json);
      
    } catch (e) {
      setLoading(false);
      alert("Erro! Tente mais tarde");
    }

  }

  useEffect(() => {
    loadPosts();
  }, [])

  const handleAddPost = async (title: string, body: string) => {
    if (title && body) {
      let json = await api.addNewPost(title, body, 1);
      
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