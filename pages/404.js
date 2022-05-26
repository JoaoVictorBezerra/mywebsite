import Links from '../src/Components/Links'
import styles from '../styles/Erro404/Erro404.module.css'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../src/Components/Footer'

function Title({ children }) {
    return (
        <h1>{children}</h1>
    )
}

export default function ErrorPage() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Página não encontrada - 404</title>
                <meta name="description" content="Erro 404 - Página não encontrada!" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <main className={styles.main}>
            <Title>Você se perdeu e acabou tropeçando no erro 404.</Title>
            <Image src="/erro404.png" alt="Erro 404" width={215} height={215}/>
            <Links className={styles.link} href="/">Voltar para a página principal</Links>
            </main>
            <Footer/>
        </div>
    )
}