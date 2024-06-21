import React from 'react'
import Link from 'next/link'
import {spaceMono} from './fonts'
import styles from './Nav.module.css'

export default function Nav() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link href="/">
          <span className={`${styles.accent} ${spaceMono.className}`}>
            &lt;Dev&gt;
          </span>
        </Link>
      </div>
    </nav>
  )
}
