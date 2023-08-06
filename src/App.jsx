import { Header } from "./components/header"

import styles from './App.module.css';

import './global.css';

function App() {
  return (
    <div>
    <Header />

    <div className={styles.wrapper}>
    <aside>
      sidebar
    </aside>
    <main>
      <Post 
      author="Keven Willian" 
      content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione in aliquam, officiis possimus voluptate asperiores facilis dolore laborum cupiditate magni, officia voluptatum harum. Illo consequatur enim debitis possimus repellendus voluptates." 
     />
      <Post 
      author="Junior templa"  
      content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo veritatis facilis magni quod hic recusandae ipsum voluptatem aperiam nisi. Eaque, libero dicta. Quibusdam cupiditate quisquam autem eaque nisi possimus hic."
     />
      </main>
     </div>
    </div>
  )
}

export default App


