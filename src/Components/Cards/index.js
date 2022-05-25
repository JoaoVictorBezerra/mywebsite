import styles from '../../../styles/Cards/Cards.module.css'

export default function Cards() {
    return(
        <div className={styles.grid}>
            <div className={styles.row}>
                <div className={styles.card}>
                    <h1>Lorem Ipsum</h1>
                    <p>aa</p>
                </div>
                <div className={styles.card}>
                    <h1>Lorem Ipsum</h1>
                    <p>aa</p>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.card}>
                    <h1>Lorem Ipsum</h1>
                    <p>aa</p>
                </div>
                <div className={styles.card}>
                    <h1>Lorem Ipsum</h1>
                    <p>aa</p>
                </div>
            </div>
        </div>
    )
}