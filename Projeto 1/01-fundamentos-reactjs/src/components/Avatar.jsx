
import styles from '../components/Avatar.module.css';

export function Avatar({hasBorder = true, source}) {
    return(
        <img
            className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
            src={source} 
        />
    );
}