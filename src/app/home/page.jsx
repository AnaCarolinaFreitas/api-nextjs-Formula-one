import React from 'react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen p-2 flex flex-col items-center justify-center bg-[#020206]">
        <div className="max-w-3xl p-8 bg-white rounded-lg shadow-md text-center hover:shadow-gray-300 transition-shadow duration-800">
            <div>
                <Image src="/images/AnaCarolinaFreitas.jpg" alt="Ana Carolina" width={200} height={200} className="mx-auto mb-2 rounded-full" />

                <h1 className="text-2xl font-bold mb-2">By: Ana Carolina Garcia Freitas</h1>
                <h2 className="text-gray-500 font-bold mb-4">2TDS1 - SENAI Valinhos</h2>
            </div>
            <h3 className="text-2xl font-bold mb-8 text-[#aa1663]">Sobre mim</h3>
            <p className="text-lg max-w-2xl text-center"><span className="text-[#CE227A] font-bold">Olá!</span> Meu nome é Ana, sou estudante de desenvolvimeto de sistemas no SENAI Valinhos e por meio desse site lhes apresento meu projeto final, com a tematica <span className="text-[#CE227A] font-bold">Formula 1</span></p>

            <blockquote className="italic text-gray-500 mt-6 border-l-4 border-[#CE227A] pl-4">
                <span className="font-bold text-gray-700">Michael Schumacher:</span> "Sempre acreditei que você nunca deve desistir e deve sempre continuar lutando, mesmo quando há apenas uma pequena chance."
            </blockquote>
        
            <div className="mt-8 gap-4 flex justify-center">
                <a href="/sobre" className="bg-[#CE227A] text-white px-6 py-3 rounded-lg hover:bg-pink-900 font-semibold transition-colors duration-200 ml-4">Veja mais</a>
                <a href="/drivers" className="bg-[#CE227A] text-white px-6 py-3 rounded-lg hover:bg-pink-900 font-semibold transition-colors duration-200">Ver Pilotos</a>
            </div>
        </div>
    </div>
  )
}
