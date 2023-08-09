import { ThumbsUp, Trash } from '@phosphor-icons/react';
import styles from './Comment.module.css';

export function Comment() {
    return(
        <div className={styles.comment}>
            <img className={styles.commentImg} src="https://github.com/keven157751.png" alt="" />


            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div clasName={styles.authorAndTime}>
                            <strong>Keven Willian</strong>
                            <time title='11 de Maio às 08:13h' dateTime='2023-08-08 08:13:30'>Cerca de 1H atrás</time>
                        </div>

                        <button title='Deletar Comentário'>
                            <Trash size={20} />
                        </button>

                    </header>

                    <p>Muito bom Devon, parabéns!!</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}