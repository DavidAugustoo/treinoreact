import { Post } from './Post';
import { Header } from './components/Header';

import './styles.css'

function App() {
  return (
    <div>
      <Header />

      <Post 
        author="David Augusto" 
        content=" Odit, ducimus orem, ipsum dolor sit amet Lconsectetur adipisicing elit.?"
      />

      <Post 
        author="Lucas Amadeu" 
        content="Lconsectetur adipisicing elit. Odit, ducimus orem, ipsum dolor sit amet ?"
      />
    </div>
    
  )
}

export default App
