import styles from '../components/Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img 
                        className={styles.author}
                        src="https://media-exp1.licdn.com/dms/image/C4E03AQGl-4pJk9Zpbw/profile-displayphoto-shrink_800_800/0/1642889729830?e=1662595200&v=beta&t=5bOEzleINWi8VNuOvD8CWBT6V4SZktwUvKQHMOrN1xs" 
                    />
                    <div className={styles.authorInfo}>
                        <strong>David Augusto</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                
                <time title="9 de Julho às 19:37" dateTime="2022-07-11 19:36:45">Publicado há 1h</time>
            </header>


            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉{' '}<a>jane.design/doctorcare</a></p>
                <p>
                    <a>#novoprojeto</a>{' '}
                    <a>#nlw</a>{' '}
                    <a>#rocketseat</a>{' '}
                </p>
            </div>


            <form className={styles.commentForm}> 
                <strong>Deixe seu feedback</strong>
                <textarea 
                    placeholder="Deixe seu comentário"
                />
                
                <footer>
                    <button type="submit">Comentar</button> 
                </footer>
                
            </form>
        </article>
    )
}