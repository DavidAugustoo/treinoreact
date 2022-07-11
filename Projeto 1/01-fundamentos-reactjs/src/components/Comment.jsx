import { Trash, ThumbsUp } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
    return(
        <div className={styles.comment}>
            <img src="https://media-exp1.licdn.com/dms/image/C4E03AQGl-4pJk9Zpbw/profile-displayphoto-shrink_800_800/0/1642889729830?e=1662595200&v=beta&t=5bOEzleINWi8VNuOvD8CWBT6V4SZktwUvKQHMOrN1xs" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>David Augusto</strong>
                            <time title="9 de Julho às 19:37" dateTime="2022-07-11 19:36:45">Cerca de 1h atrás</time>
                        </div>

                        <button title="Deletar Comentário">
                            <Trash size={20}/>
                        </button>
                    </header>
                    <p>Muito bom, devan! parabéns!!</p>
                </div>

                <footer>
                    <button >
                        <ThumbsUp size={20}/> Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>

            
        </div>
    )
}