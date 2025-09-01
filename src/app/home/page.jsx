import React from 'react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen p-2 flex flex-col items-center justify-center bg-[#020206]">
        <div className="max-w-3xl p-8 bg-white rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-100">
            <div>
                <Image src="/images/AnaCarolinaFreitas.jpg" alt="Ana Carolina" width={200} height={200} className="mx-auto mb-4 rounded-full hover:shadow-lg" />

            <h1 className="text-3xl font-bold mb-4">By: Ana Carolina Freitas</h1>
            <h2 className="text-2xl font-bold mb-8 text-red-900">Sobre mim</h2>
            <p className="text-lg max-w-2xl text-center"><span className="text-red-700 font-bold">Olá!</span> Meu nome é Ana, sou estudante de desenvolvimeto de sistemas no SENAI Valinhos e por meio desse site lhes apresento meu projeto final, com a tematica <span className="text-red-700 font-bold">Formula 1</span></p>
            
            <h2 className="text-2xl font-bold mb-8 text-red-900 mt-8">O que é Formula 1?</h2>
            <p className="text-lg max-w-2xl text-center">O intuito desse projeto é exatamente esse, explicar esse esporte amado por muitos! Através desse site você poderá acessar informações sobre os circuitos, pilotos, <span className="text-red-700 font-bold">e muito mais!</span></p>
        </div>

        <div className="mt-8 gap-4 flex justify-center">
            <a href="/sobre" className="bg-red-700 text-white px-6 py-3 rounded-lg hover:bg-red-800 font-semibold transition-colors duration-200 ml-4">Veja mais</a>
            <a href="/drivers" className="bg-red-700 text-white px-6 py-3 rounded-lg hover:bg-red-800 font-semibold transition-colors duration-200">Ver Pilotos</a>
                 
            </div>
        </div>
    </div>
  )
}
