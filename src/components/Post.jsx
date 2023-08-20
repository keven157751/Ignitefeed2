import { Comment } from './Comment';
import { Avatar } from './Avatar';

import styles from './Post.module.css';

// autohr { avatar_url: "", name: "", role: "" }
// publishedAt: Date
// content: String


export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/keven157751.png" />
                    <div className={styles.authorInfo}>
                        <strong>Keven Willian</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title='06 de Maio às 08:13h' dateTime="2023-08-06 08:13:30">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe Seu feedback</strong>

                <textarea
                    placeholder='Deixe um comentário'
                />
               <footer>
                 <button type='submit'>Publicar</button>
               </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>

        </article>
    )
}