"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Header from "@/components/Header";
import styles from "./Drivers.module.css";

export default function Page() {
  const [pilotos, setPilotos] = useState([]);
  const [loading, setLoading] = useState(false);

  const buscarPilotos = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://api.openf1.org/v1/drivers");
      const data = response.data;
      setPilotos(data);
    } catch (error) {
      console.error("Erro ao buscar pilotos:", error);
    } finally {
      setLoading(false);
    }
  };

  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
     const scrollTop = window.scrollY; // quanto a página já rolou
    const docHeight = document.documentElement.scrollHeight - window.innerHeight; // altura total - altura da tela
    const scrolled = (scrollTop / docHeight) * 100; // porcentagem do scroll
    setScrollPercent(scrolled); // salva no estado
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header />
      <section className={styles.banner}>
        <div className={styles.imagebg}>
          <Image
            src={"/images/pilotosBg.png"}
            alt="Escrito Pilotos"
            className={styles.image}
            width={1920}
            height={1080}
            priority
          />
        </div>
        <div className={styles.linha}>
          <div className={styles.linhaPontilhada}></div>

          <div
            className={styles.car}
            style={{
              transform: `translateX(${scrollPercent * 2}%)`, // Mexer aqui para ajustar a velocidade do carro
            }}
          >
            <Image
              src={"/images/carro-visão-topo.png"}
              alt="Carro de Fórmula 1"
              className={styles.carImg}
              width={900}
              height={520}
              priority
            />
          </div>
        </div>
      </section>
      <div className="min-h-screen p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8 text-white">
            Pilotos
          </h1>

          <div className="text-center mb-8">
            <div className="mb-6">
              <button
                onClick={buscarPilotos}
                disable={loading}
                className="bg-[#CE227A] text-white px-8 py-3 rounded-lg hover:bg-[#A61D5D] disabled:bg-gray-400 font-semibold"
              >
                {loading ? "Carregando..." : "🔍 Buscar Pilotos"}
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {pilotos.map((piloto) => (
            <div key={piloto.id} className="bg-white p-10 rounded-lg shadow-md">
              <Image
                src={piloto.headshot_url || "https://placehold.co/150"}
                alt={piloto.full_name || "Piloto"}
                width={150}
                height={150}
                className="mx-auto mb-4 rounded-full"
              />
              <h3 className="font-bold text-lg">{piloto.full_name}</h3>
              <p className="text-gray-600">{piloto.driver_number}</p>
              <p className="text-gray-600">{piloto.country_code}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
