"use client";
import { useState } from "react";

export default function Navbar() {
  return (
  <header className="w-full px-8 py-4 flex items-center justify-between bg-gradient-to-r from-[#161714] to-[#1A1A37] text-white">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <img src="/images/logo.png" alt="F1 For You Logo" className="h-15" />
      </div>

      {/* Links */}
      <nav className="hidden md:flex gap-8 font-medium">
        <a href="/" className="hover:text-gray-500 transition">Home</a>
        <a href="/sobre" className="hover:text-gray-500 transition">About</a>
        <a href="/drivers" className="hover:text-gray-500 transition">Drivers</a>
      </nav>
    </header>
  );
}