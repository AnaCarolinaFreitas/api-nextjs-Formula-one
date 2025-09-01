import React from 'react'
import styles from './Sobre.module.css'
import Header from '@/components/Header'

export default function page() {
  return (
    <div className={styles.container}>
        <Header />
      <h1 className={styles.title}>Sobre</h1>
      <p className={styles.description}>Esta é a página sobre nós.</p>
    </div>
  )
}
