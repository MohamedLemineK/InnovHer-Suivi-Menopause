"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full bg-transparent text-purple-700 z-50 #f3e8ff">
            <div className="flex items-center justify-between px-6 py-4 shadow-sm">
                {/* Logo */}
                <Link href="/">
                    <h1 className="text-2xl font-bold text-purple-700 hover:text-purple-900 transition">
                        VENTILO <span className="font-light">Care</span>
                    </h1>
                </Link>

                {/* Navigation */}
                <nav className="hidden md:flex space-x-8">
                    <Link href="/" className="text-gray-700 hover:text-purple-700 font-medium transition">
                        Accueil
                    </Link>
                    <Link href="/about" className="text-gray-700 hover:text-purple-700 font-medium transition">
                        À Propos
                    </Link>
                    <Link href="/contact" className="text-gray-700 hover:text-purple-700 font-medium transition">
                        Contact
                    </Link>
                </nav>

                {/* Bouton d'action */}
                <button
                    className="hidden md:inline-block bg-purple-700 text-white px-4 py-2 rounded-full shadow-md hover:bg-purple-600 transition">
                    Besoin d'aide
                </button>

                {/* Menu mobile */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-purple-700 focus:outline-none"
                    >
                        ☰
                    </button>
                </div>
            </div>

            {/* Menu mobile */}
            {isMenuOpen && (
                <div className="md:hidden bg-white shadow-md py-4">
                    <nav className="flex flex-col space-y-4 items-center">
                        <Link href="/" className="text-gray-700 hover:text-purple-700 font-medium transition">
                            Accueil
                        </Link>
                        <Link href="/diagnostic" className="text-gray-700 hover:text-purple-700 font-medium transition">
                            Diagnostic
                        </Link>
                        <Link href="/about" className="text-gray-700 hover:text-purple-700 font-medium transition">
                            À Propos
                        </Link>
                        <Link href="/contact" className="text-gray-700 hover:text-purple-700 font-medium transition">
                            Contact
                        </Link>
                        <button
                            className="bg-purple-700 text-white px-4 py-2 rounded-full shadow-md hover:bg-purple-600 transition">
                            Besoin d'aide
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
}
