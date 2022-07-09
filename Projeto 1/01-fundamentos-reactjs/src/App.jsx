import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
       <Sidebar />
        <main>
          <Post 
            author="David Augusto" 
            content=" Odit, ducimus orem, ipsum dolor sit amet Lconsectetur adipisicing elit.?"
          />

          <Post 
            author="Lucas Amadeu" 
            content="Lconsectetur adipisicing elit. Odit, ducimus orem, ipsum dolor sit amet ?"
          />
        </main>
      </div>
    </div>
  )
}

export default App
