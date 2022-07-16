import { Trash, ThumbsUp } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment({content, onDeleteComment}) {

    const [likeCount, setlikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content);
    }

    function handleLikeComment() {
        setlikeCount(likeCount + 1);
    }

    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} source="https://media-exp1.licdn.com/dms/image/C4E03AQGl-4pJk9Zpbw/profile-displayphoto-shrink_800_800/0/1642889729830?e=1662595200&v=beta&t=5bOEzleINWi8VNuOvD8CWBT6V4SZktwUvKQHMOrN1xs" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>David Augusto</strong>
                            <time title="9 de Julho às 19:37" dateTime="2022-07-11 19:36:45">Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar Comentário">
                            <Trash size={20}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp size={20}/> Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}