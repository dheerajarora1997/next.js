import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Coding Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script src="./track.js" strategy="lazyOnload" />

      <main className={styles.main}>
        <nav className={styles.mainNav}>
          <ul>
            <Link href="/"><li><a>Home</a></li></Link>
            <Link href="/about"><li><a>About</a></li></Link>
            <Link href="/blog"><li><a>Blog</a></li></Link>
            <Link href="/contact"><li><a>Contact</a></li></Link>
          </ul>
        </nav>
        <h1 className={styles.title}>Coding Blog</h1>
        <p className=""></p>
        <div className="blogs">
          <h2>Popular B</h2>
          <div className="blogItem">
            <h3>Coding blog in Next.js</h3>
            <p className="">Coding Blog in Next.js framework.</p>
            <Image layout="responsive" width="100" height="100" src="/orange-car.jpg" lazyRoot="lazyRoot"></Image>
          </div>
        </div>
      </main>
    </div>
  )
}
