import React from 'react'
import styles from './Sobre.module.css'
import Header from '@/components/Header'

export default function page() {
  return (
    <div className={styles.container}>
        <Header />
        <div className={styles.banner}>
          <div className={styles.textSection}>
            <h1 className={styles.title}>OpenF1 — Fórmula 1 em Tempo Real na Ponta do Seu Código!</h1>
            <p className={styles.paragraph}> Dados históricos e ao vivo, entregues com velocidade e precisão — acelere seus projetos F1 agora mesmo!</p>
        </div>
        <div className={styles.line}></div>
    </div>
    </div>
  )
}
