import Links from '../src/Components/Links'
import styles from '../styles/Home/Home.module.css'

function Title({ children }) {
    return (
        <h1>{children}</h1>
    )
}

export default function ErrorPage() {
    return (
        <div className={styles.container}>
            <Title>Você se perdeu e acabou tropeçando no erro 404.</Title>
            <Links href="/">Voltar para a página principal</Links>
        </div>
    )
}