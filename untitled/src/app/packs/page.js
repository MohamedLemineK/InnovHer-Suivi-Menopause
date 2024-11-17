"use client";

import React from 'react';
import {
    FaBox,
    FaLeaf,
    FaPhone,
    FaUserTie,
    FaCalendarAlt,
    FaRunning,
    FaBoxOpen,
} from 'react-icons/fa';
import ImageWithFallback from '../components/ImageWithFallback';
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PacksPage() {
    const allPacks = [
        {
            title: 'Le Kit Physique',
            description: 'Un kit complet pour vous accompagner durant la ménopause, incluant des produits naturels, des guides et des accessoires pour votre bien-être.',
            image: 'kit.png',
            icons: [<FaBox key="box" />, <FaLeaf key="leaf" />],
            link: '/packs/kit-physique',
            benefits: ['Produits 100% naturels', 'Guide d’utilisation détaillé', 'Support en ligne 24/7'],
        },
        {
            title: 'Appel avec le Coach',
            description: 'Une session personnalisée avec notre coach spécialisé pour répondre à toutes vos questions.',
            image: 'coach.png',
            icons: [<FaPhone key="phone" />, <FaUserTie key="tie" />],
            link: '/packs/appel-coach',
            benefits: ['Conseils personnalisés', 'Plan d’action sur mesure', 'Suivi après l’appel'],
        },
        {
            title: 'Programme 360 sur 1 mois',
            description: 'Un programme complet sur 30 jours pour un bien-être optimal, incluant des exercices, des conseils nutritionnels et plus encore.',
            image: 'calendar.png',
            icons: [<FaCalendarAlt key="calendar" />, <FaRunning key="running" />],
            link: '/packs/programme-360',
            benefits: ['Plan complet sur 30 jours', 'Accès à une communauté privée', 'Mises à jour régulières'],
        },
    ];

    return (
        <>
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 p-8 ">
            <Header />
            <h1 className="text-5xl font-extrabold text-center text-purple-700 mb-12 mt-16">
                Découvrez Nos Packs Exclusifs
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allPacks.map((pack, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-3xl overflow-hidden transform hover:-translate-y-2 transition-transform duration-500"
                    >
                        <div className="relative bg-gradient-to-br from-purple-100 to-purple-50 p-6">
                            <ImageWithFallback
                                src={pack.image}
                                alt={pack.title}
                                className="h-32 w-32 mx-auto rounded-full shadow-lg"
                                fallbackIcon={
                                    <FaBoxOpen className="text-gray-300 text-6xl mx-auto" />
                                }
                            />
                        </div>
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold text-purple-800 mb-4">
                                {pack.title}
                            </h2>
                            <p className="text-gray-600 mb-6">{pack.description}</p>
                            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                                {pack.benefits.map((benefit, idx) => (
                                    <li key={idx}>{benefit}</li>
                                ))}
                            </ul>
                            <div className="flex justify-center space-x-4 mb-6 text-purple-600 text-2xl">
                                {pack.icons.map((IconComponent, idx) => (
                                    <div key={idx} className="hover:text-purple-800 transition-colors">
                                        {IconComponent}
                                    </div>
                                ))}
                            </div>
                            <a
                                href={pack.link}
                                className="block text-center bg-gradient-to-r from-purple-500 to-purple-700 text-white px-6 py-3 rounded-lg shadow-lg hover:from-purple-600 hover:to-purple-800 transition-all duration-300"
                            >
                                Je le veux !
                            </a>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    <Footer />
    </>
    );
}
