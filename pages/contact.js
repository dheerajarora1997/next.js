import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'

function Contact() {
  return (
    <div>
      <nav className={styles.mainNav}>
          <ul>
            <Link href="/"><li><a>Home</a></li></Link>
            <Link href="/about"><li><a>About</a></li></Link>
            <Link href="/blog"><li><a>Blog</a></li></Link>
            <Link href="/contact"><li><a>Contact</a></li></Link>
          </ul>
        </nav>
    </div>
  )
}

export default Contact