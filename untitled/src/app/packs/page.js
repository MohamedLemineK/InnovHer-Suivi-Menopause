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
    FaUserCircle,
} from 'react-icons/fa';
import ImageWithFallback from '../components/ImageWithFallback';

export default function PacksPage() {
    const allPacks = [
        {
            title: 'Le Kit Physique',
            description: 'Un kit complet pour vous accompagner durant la ménopause, incluant des produits naturels, des guides et des accessoires pour votre bien-être.',
            image: '/images/kit-physique.jpg',
            icons: [<FaBox key="box" />, <FaLeaf key="leaf" />],
            link: '/packs/kit-physique',
            benefits: ['Produits 100% naturels', 'Guide d’utilisation détaillé', 'Support en ligne 24/7'],
        },
        {
            title: 'Appel avec le Coach',
            description: 'Une session personnalisée avec notre coach spécialisé pour répondre à toutes vos questions.',
            image: '/images/appel-coach.jpg',
            icons: [<FaPhone key="phone" />, <FaUserTie key="tie" />],
            link: '/packs/appel-coach',
            benefits: ['Conseils personnalisés', 'Plan d’action sur mesure', 'Suivi après l’appel'],
        },
        {
            title: 'Programme 360 sur 1 mois',
            description: 'Un programme complet sur 30 jours pour un bien-être optimal, incluant des exercices, des conseils nutritionnels et plus encore.',
            image: '/images/programme-360.jpg',
            icons: [<FaCalendarAlt key="calendar" />, <FaRunning key="running" />],
            link: '/packs/programme-360',
            benefits: ['Plan complet sur 30 jours', 'Accès à une communauté privée', 'Mises à jour régulières'],
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-300 via-pink-300 to-yellow-200 p-6">
            <h1 className="text-4xl font-bold text-center text-purple-700 mb-10">Découvrez Nos Packs Exclusifs</h1>

            <div className="flex flex-wrap justify-center gap-8">
                {allPacks.map((pack, index) => (
                    <div key={index} className="bg-white shadow-2xl rounded-lg max-w-sm overflow-hidden transform hover:scale-105 transition duration-300">
                        <ImageWithFallback
                            src={pack.image}
                            alt={pack.title}
                            className="w-full h-48 object-cover"
                            fallbackIcon={<FaBoxOpen className="text-gray-400 text-6xl" />}
                        />
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold text-purple-700 mb-4">{pack.title}</h2>
                            <p className="text-gray-700 mb-4">{pack.description}</p>
                            <ul className="list-disc list-inside text-gray-600 mb-6">
                                {pack.benefits.map((benefit, idx) => (
                                    <li key={idx}>{benefit}</li>
                                ))}
                            </ul>
                            <div className="flex space-x-4 mb-6 text-purple-700 text-3xl">
                                {pack.icons.map((IconComponent, idx) => (
                                    <div key={idx}>{IconComponent}</div>
                                ))}
                            </div>
                            <a
                                href={pack.link}
                                className="block text-center bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full shadow-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300"
                            >
                                Je le veux !
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-16">
                <h2 className="text-3xl font-semibold text-center text-purple-700 mb-8">Ce que disent nos clientes</h2>
                <div className="flex flex-wrap justify-center gap-8">
                    <div className="max-w-md bg-white p-6 rounded-lg shadow-md">
                        <p className="text-gray-700 italic">
                            "Le Kit Physique m'a vraiment aidée à gérer mes symptômes. Les produits sont de grande qualité !"
                        </p>
                        <div className="mt-4 flex items-center">
                            <ImageWithFallback
                                src="/personne1.jpeg"
                                alt="Client 1"
                                className="w-12 h-12 rounded-full mr-4"
                                fallbackIcon={<FaUserCircle className="text-gray-400 text-4xl" />}
                            />
                            <div>
                                <p className="text-purple-700 font-semibold">Marie Dupont</p>
                                <p className="text-gray-500 text-sm">45 ans</p>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-md bg-white p-6 rounded-lg shadow-md">
                        <p className="text-gray-700 italic">
                            "L'appel avec le coach a été une révélation. Je me sens enfin comprise et soutenue."
                        </p>
                        <div className="mt-4 flex items-center">
                            <ImageWithFallback
                                src="/personne2.jpeg"
                                alt="Client 2"
                                className="w-12 h-12 rounded-full mr-4"
                                fallbackIcon={<FaUserCircle className="text-gray-400 text-4xl" />}
                            />
                            <div>
                                <p className="text-purple-700 font-semibold">Sophie Martin</p>
                                <p className="text-gray-500 text-sm">50 ans</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
