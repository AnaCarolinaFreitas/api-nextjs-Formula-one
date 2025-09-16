import React from 'react';
import styles from '../styles/Card.module.css';
import Image from 'next/image';
import Link from 'next/link';
// Importe os objetos de mapeamento que você criou
import { teamLogos } from '../utils/teamLogos';


export default function driversCard({ piloto }) {
    // Obtenha o URL do logo e a cor da equipe usando o nome
    const teamLogoUrl = teamLogos[piloto.team_name] || '/logos/default.svg';
    const teamColor = `#${piloto.team_colour}`;

    return (
        <div className={styles.card}>
            {/* Imagem do Piloto */}
            <Image
                src={piloto.headshot_url}
                alt={piloto.full_name}
                className={styles.driverImage}
                width={300}
                height={300}
                priority
            />

            {/* Número do Piloto */}
            <div className={styles.driverNumber}>
                <p>{piloto.driver_number}</p>
            </div>

            {/* Faixa com o nome e o logo */}
            <div className={styles.infoBand} style={{ backgroundColor: teamColor }}>
                {/* Logo da Equipe */}
                <Image
                    src={teamLogoUrl} // Use o URL do mapeamento
                    alt={piloto.team_name}
                    className={styles.teamLogo}
                    width={50}
                    height={50}
                />
                <h3 className={styles.driverName}>{piloto.full_name.toUpperCase()}</h3>
            </div>

            {/* Link para mais informações */}
            <div className={styles.moreInfo}>
                <Link href={`/drivers/${piloto.id}`} className={styles.link}>
                    Veja Mais
                </Link>
            </div>
        </div>
    );
}