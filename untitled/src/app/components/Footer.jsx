"use client";

import Link from "next/link";

export default function Footer() {

    return (
        <footer className="bg-gray-900 text-white py-6 mt-10">
            <div className="container mx-auto px-6 md:px-12">
                {/* Description */}
                <p className="text-sm text-center md:text-left">
                    Ventilo Care : Un espace pour accompagner les femmes en périménopause avec une approche
                    pluridisciplinaire.
                </p>

                {/* Liens sociaux et contact */}
                <div className="flex flex-col md:flex-row items-center justify-between mt-4">
                    <div className="flex space-x-6">
                        <a
                            href="mailto:floriane@ventilo.care"
                            className="hover:underline text-sm"
                        >
                            Contact
                        </a>
                        <a
                            href="https://www.instagram.com/ventilo.care"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline text-sm"
                        >
                            Instagram
                        </a>
                        <a
                            href="https://ventilo.substack.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline text-sm"
                        >
                            Newsletter
                        </a>
                    </div>
                    {/* Copyright */}
                    <p className="text-xs mt-4 md:mt-0 text-center md:text-left">
                        © 2024 Ventilo Care |{" "}
                        <Link href="/conditions-d-utilisation" className="hover:underline">
                            Conditions d'utilisation
                        </Link>{" "}
                        |{" "}
                        <Link href="/mentions-legales" className="hover:underline">
                            Mentions légales
                        </Link>
                    </p>
                </div>

                {/* Logo et design */}
                <div className="flex justify-center mt-6">
                    <Link href="/">
                        <img
                            src="/logo.png"
                            alt="Ventilo Care Logo"
                            className="w-16 h-16 object-cover rounded-full shadow-lg"
                        />
                    </Link>
                </div>
            </div>
        </footer>

    )
}