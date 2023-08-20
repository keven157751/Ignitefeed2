import { Header } from "./components/header.jsx";
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';


const posts = [
  {
      id: 1,
      author: {
          avatarUrl: 'https://github.com/keven157751.png',
          name: 'Keven Willian',
          role: 'CTO @ Rocketseat',
      },

      content: [
              { type: 'paragraph', content: 'Fala galeraa 👋' },
              { type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
              { type: 'link', content:'KevenWill157'},
      ],
      publishedAt: new Date('2023-08-19 20:00:00'),
  },
  {

  id: 2,
  author: {
      avatarUrl: 'https://github.com/keven157751.png',
      name: 'Mayk Brito',
      role: 'Educador @ Rocketseat',
  },

  content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content:'KevenWill157'},
  ],
  publishedAt: new Date('2023-08-21 20:00:00'),
  },
];


export function App() {
  return (
    <div>
    <Header />

    <div className={styles.wrapper}>
    <Sidebar />
    <main>
      {post.map(post => {
        return <Post />;
      })}
    </main>
    
     </div>
    </div>
  )
}

export default App


