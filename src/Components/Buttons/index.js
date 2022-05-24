import styles from '../../../styles/Buttons/Buttons.module.css'

export default function Button({ children, ...props }) {
    return (
        <p className={styles.button}>{children}</p>
    )
}
