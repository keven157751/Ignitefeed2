import { Comment } from './Comment';
import styles from './Post.module.css';


export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/keven157751.png" />
                    <div className={styles.authorInfo}>
                        <strong>Keven Willian</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title='06 de Maio às 08:13h' dateTime="2023-08-06 08:13:30">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p>👉{' '}<a href="">KevenWill157</a></p>
                <p>
                    <a href="">  #novoprojeto </a>{' '}
                    <a href=""> #nlw </a>{' '}
                    <a href=""> #rocketseat</a>{' '}
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe Seu feedback</strong>

                <textarea
                    placeholder='Deixe um comentário'
                />
                <button type='submit'>Publicar</button>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>

        </article>
    )
}