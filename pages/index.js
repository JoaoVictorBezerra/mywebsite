import Head from 'next/head'
import Image from 'next/image'
import Footer from '../src/Components/Footer'
import styles from '../styles/Home/Home.module.css'
import Link from '../src/Components/Links'
import Button from '../src/Components/Buttons'
import Cards from '../src/Components/Cards'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>João Victor - Início</title>
        <meta name="description" content="Portfólio - João Victor" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.main}>
        <div className={styles.presentation}>
          <Image src="/letterj.png" alt="João Victor" width={215} height={215} />
          <div className={styles.presentationText}>
            <h1> João Victor </h1>
            <p>Desenvolvedor Front-End.</p>
            <div className={styles.presentationIcons}>
            <Link href="https://github.com/JoaoVictorBezerra" target="_blank"><Image src="/github.png" alt="João Victor" width={30} height={30} /></Link>
              <Link href="https://instagram.com/jvic01_" target="_blank"><Image src="/instagram.png" alt="João Victor" width={30} height={30} /></Link>
              <Link href="https://www.linkedin.com/in/joão-victor-a62b62204/" target="_blank"><Image src="/linkedin.png" alt="João Victor" width={30} height={30} /></Link>
            </div>
          </div>
        </div>
        <div className={styles.experience}>
          <div className={styles.gridExperience}>
            <h3>4° Ciclo</h3>
            <p>Sistemas de Informação</p>
          </div>
          <div className={styles.gridExperience}>
            <h3>1° Ano</h3>
            <p>Atuando como Analista de DB</p>
          </div>
          <div className={styles.gridExperience}>
            <h3>5+</h3>
            <p>Ferramentas utilizadas</p>
          </div>
        </div>
        <div className={styles.buttons}>
          <Link href="https://www.google.com" target="_blank"><Button>Download CV <Image src="/download.png" alt="Download Icon" width={15} height={13} /></Button></Link>
          <Link href="https://www.google.com" target="_blank"><Button>Contato</Button></Link>
        </div>
        <div className={styles.menuChoice}>
           <Link href="www.google.com"><p>Portfólio</p></Link>
           <Link href="www.google.com"><p>Habilidades</p></Link>
        </div>
        <Cards/>
      </main>
      <Footer />
    </div>
  )
}