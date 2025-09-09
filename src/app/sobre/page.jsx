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

      <section className={styles.content}>
        <h2 className={styles.contentTitle}>API escolhida: <span className={styles.span}>OpenF1</span></h2>
        <p className={styles.contentParagraph}>A OpenF1 é uma API pública que fornece dados detalhados sobre a Fórmula 1, incluindo informações sobre tempos de volta, telemetria dos carros, comunicações de rádio e muito mais. O endpoint /drivers disponibiliza informações completas sobre os pilotos, como nome, equipe, número do carro e país. A API é conhecida por sua facilidade de uso e pela riqueza de dados que oferece, tornando-a uma escolha popular para projetos relacionados à Fórmula 1.</p>

        <h2 className={styles.contentTitle}>Link externo para a documentação oficial:</h2>
        <code className={styles.code}><a href="https://openf1.org/" target='_blank' className={styles.contentLink}>https://openf1.org/</a></code>

        <h2 className={styles.contentTitle}>URL base usada para o axios/fetch:</h2>
        <code className={styles.code}>https://api.openf1.org/v1/</code>

        <h2 className={styles.contentTitle}>Endpoint escolhido para buscar os dados:</h2>
        <code className={styles.code}>/drivers</code>

        <h3 className={styles.listTitle}>Atributos recebidos na resposta da API:</h3>
        <ul className={styles.list}>
          <li><strong>driver_number:</strong> O número único designado a cada piloto</li>
          <li><strong>broadcast_name:</strong> Como o nome do piloto aparece na transmissão</li>
          <li><strong>full_name:</strong> Nome completo do piloto</li>
          <li><strong>name_acronym:</strong> Sigla de três letras do nome do piloto</li>
          <li><strong>team_name:</strong> Nome da equipe do piloto</li>
          <li><strong>team_colour:</strong> Cor hexadecimal da equipe do piloto</li>
          <li><strong>first_name:</strong> Primeiro nome do piloto</li>
          <li><strong>last_name:</strong> Sobrenome do piloto</li>
          <li><strong>headshot_url:</strong> Foto do piloto</li>
          <li><strong>country_code</strong> Código do país</li>
        </ul>
      </section>
    </div>
  )
}