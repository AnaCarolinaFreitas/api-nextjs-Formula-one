import React from 'react'
import styles from './Sobre.module.css'
import Header from '@/components/Header'
import Image from 'next/image'

export default function page() {
  return (
    <div className={styles.container}>
        <Header />
      <section className={styles.banner}>
        <div className={styles.videoBg}>
          <video
            className={styles.video}
            src="/videos/f1background.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
        </div>
          <div className={styles.textSection}>
            <h1 className={styles.title}>LightsOut — Seu ponto de largada no mundo da F1.</h1>
            <p className={styles.paragraph}>Aqui você encontra tudo o que precisa saber sobre a Fórmula 1: quem são os pilotos, como funciona o campeonato e os detalhes que fazem desse esporte uma paixão mundial.</p>
        </div>
        <div className={styles.line}></div>
<div className={styles.carWrap}>
          <Image src="/images/Carro de Fórmula 1.png" alt="Carro de Fórmula 1" className={styles.carImage} width={900} height={520} priority />
        </div>
      </section>
    </div>
  )
}