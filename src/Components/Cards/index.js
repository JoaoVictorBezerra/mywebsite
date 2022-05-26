import styles from '../../../styles/Cards/Cards.module.css'
import Link from '../Links'

export default function Cards() {
    return (
        <div className={styles.grid}>
            <div className={styles.row}>
                <Link href="https://github.com/JoaoVictorBezerra/mywebsite" target="_blank">
                    <div className={styles.card}>
                        <h1>Portfólio João Victor</h1>
                        <p>Esse projeto foi o primeiro projeto feito por mim, foi construído a partir das linguagens HTML, CSS e Javascript, contando com o framework Next.js</p>
                    </div>
                </Link>
                <div className={styles.card}>
                    <h1>Lorem Ipsum</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.card}>
                    <h1>Lorem Ipsum</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>
                <div className={styles.card}>
                    <h1>Lorem Ipsum</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>
            </div>
        </div>
    )
}