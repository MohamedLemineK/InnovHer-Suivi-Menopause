"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full bg-purpleAccent text-white z-50 shadow-md">
            <div className="flex justify-between items-center px-8 py-4">
                {/* Logo */}
                <Link href="/">
                    <Image
                        src="/logo.jpg"
                        alt="Ventilo Care"
                        width={137}
                        height={83}
                        className="cursor-pointer rounded-full object-cover shadow-lg" // Added rounded and shadow
                    />
                </Link>

                {/* Navigation */}
                <nav>
                    <ul className="flex space-x-6 font-semibold">
                        <li>
                            <Link href="/" className="hover:underline">
                                Accueil
                            </Link>
                        </li>
                        <li>
                            <Link href="/diagnostic" className="hover:underline">
                                Diagnostic
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:underline">
                                À Propos
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:underline">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Bouton d'aide */}
                <button className="bg-white text-purpleAccent px-4 py-2 rounded-full hover:bg-gray-200 shadow-md">
                    Besoin d'aide
                </button>
            </div>
        </header>
    );
}
