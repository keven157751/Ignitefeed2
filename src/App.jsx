import { Header } from "./components/header.jsx";
import { Post} from './components/Post.jsx'
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar';




import './global.css';

export function App() {
  return (
    <div>
    <Header />

    <div className={styles.wrapper}>

    <Sidebar />

    <main>
    <Post />
    <Post />
    </main>
    
     </div>
    </div>
  )
}

export default App


