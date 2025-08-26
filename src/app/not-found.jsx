'use client';

import Link from 'next/link';
import styles from './not-found.module.css';
import { useEffect } from 'react';

export default function NotFound() {
  
  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>
      
      <div className={styles.content}>
        <div className={styles.errorBox}>
          <h1 className={styles.title}>404</h1>
          <div className={styles.redFlag}></div>
        </div>
        
        <h2 className={styles.subtitle}>
          <span className={styles.animateFlag}>🚩</span> 
          Bandeira Vermelha! Página não encontrada 
          <span className={styles.animateFlag}>🚩</span>
        </h2>
        
        <div className={styles.messageBox}>
          <p className={styles.message}>Parece que você saiu da pista e entrou em uma área de escape.</p>
          <p className={styles.message}>Esta página não existe ou foi movida para outro circuito.</p>
        </div>
        
        <Link href="/home" className={styles.linkWrapper}>
          <button className={styles.button}>
            <span className={styles.buttonIcon}>🏎️</span>
            Voltar para o Grid
          </button>
        </Link>
        
        <div className={styles.quoteContainer}>
          <p className={styles.infoText}>
            "Se você não vai para um espaço que não existe, você não é um piloto de corrida."
          </p>
          <p className={styles.attribution}>- adaptado de Ayrton Senna</p>
        </div>
      </div>
    </div>
  );
}