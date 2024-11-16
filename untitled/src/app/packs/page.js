// Créez un fichier nommé PacksPage.js ou packs.js selon votre structure de dossiers
// Assurez-vous que ce fichier est accessible via une URL distincte

"use client";

import React from 'react';

export default function PacksPage() {
    // Définir les packs disponibles
    const allPacks = [
        {
            title: 'Le Kit Physique',
            description:
                'Un kit complet pour vous accompagner durant la ménopause, incluant des produits naturels, des guides et des accessoires pour votre bien-être.',
            image: '/images/kit-physique.jpg',
            icons: ['/icons/kit.svg', '/icons/health.svg'],
            link: '/packs/kit-physique',
            benefits: [
                'Produits 100% naturels',
                'Guide d’utilisation détaillé',
                'Support en ligne 24/7',
            ],
        },
        {
            title: 'Appel avec le Coach',
            description:
                'Une session personnalisée avec notre coach spécialisé pour répondre à toutes vos questions.',
            image: '/images/appel-coach.jpg',
            icons: ['/icons/coach.svg', '/icons/phone.svg'],
            link: '/packs/appel-coach',
            benefits: [
                'Conseils personnalisés',
                'Plan d’action sur mesure',
                'Suivi après l’appel',
            ],
        },
        {
            title: 'Programme 360 sur 1 mois',
            description:
                'Un programme complet sur 30 jours pour un bien-être optimal, incluant des exercices, des conseils nutritionnels et plus encore.',
            image: '/images/programme-360.jpg',
            icons: ['/icons/program.svg', '/icons/calendar.svg'],
            link: '/packs/programme-360',
            benefits: [
                'Plan complet sur 30 jours',
                'Accès à une communauté privée',
                'Mises à jour régulières',
            ],
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-300 via-pink-300 to-yellow-200 p-6">
            {/* Titre de la page */}
            <h1 className="text-4xl font-bold text-center text-purple-700 mb-10">
                Découvrez Nos Packs Exclusifs
            </h1>

            {/* Conteneur des packs */}
            <div className="flex flex-wrap justify-center gap-8">
                {allPacks.map((pack, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-2xl rounded-lg max-w-sm overflow-hidden transform hover:scale-105 transition duration-300"
                    >
                        {/* Image du pack */}
                        <img
                            src={pack.image}
                            alt={pack.title}
                            className="w-full h-48 object-cover"
                        />
                        {/* Contenu du pack */}
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold text-purple-700 mb-4">
                                {pack.title}
                            </h2>
                            <p className="text-gray-700 mb-4">{pack.description}</p>
                            {/* Liste des avantages */}
                            <ul className="list-disc list-inside text-gray-600 mb-6">
                                {pack.benefits.map((benefit, idx) => (
                                    <li key={idx}>{benefit}</li>
                                ))}
                            </ul>
                            {/* Icônes du pack */}
                            <div className="flex space-x-4 mb-6">
                                {pack.icons.map((icon, idx) => (
                                    <img key={idx} src={icon} alt="" className="w-8 h-8" />
                                ))}
                            </div>
                            {/* Bouton d'action */}
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

            {/* Section témoignages */}
            <div className="mt-16">
                <h2 className="text-3xl font-semibold text-center text-purple-700 mb-8">
                    Ce que disent nos clientes
                </h2>
                <div className="flex flex-wrap justify-center gap-8">
                    {/* Témoignage 1 */}
                    <div className="max-w-md bg-white p-6 rounded-lg shadow-md">
                        <p className="text-gray-700 italic">
                            "Le Kit Physique m'a vraiment aidée à gérer mes symptômes. Les produits sont de grande qualité !"
                        </p>
                        <div className="mt-4 flex items-center">
                            <img
                                src="/images/client1.jpg"
                                alt="Client 1"
                                className="w-12 h-12 rounded-full mr-4"
                            />
                            <div>
                                <p className="text-purple-700 font-semibold">Marie Dupont</p>
                                <p className="text-gray-500 text-sm">45 ans</p>
                            </div>
                        </div>
                    </div>
                    {/* Témoignage 2 */}
                    <div className="max-w-md bg-white p-6 rounded-lg shadow-md">
                        <p className="text-gray-700 italic">
                            "L'appel avec le coach a été une révélation. Je me sens enfin comprise et soutenue."
                        </p>
                        <div className="mt-4 flex items-center">
                            <img
                                src="/images/client2.jpg"
                                alt="Client 2"
                                className="w-12 h-12 rounded-full mr-4"
                            />
                            <div>
                                <p className="text-purple-700 font-semibold">Sophie Martin</p>
                                <p className="text-gray-500 text-sm">50 ans</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section CTA */}
            <div className="mt-16 text-center">
                <h2 className="text-3xl font-semibold text-purple-700 mb-6">
                    Prête à transformer votre vie ?
                </h2>
                <p className="text-gray-700 mb-8">
                    Ne laissez pas la ménopause dicter votre quotidien. Choisissez le pack qui vous convient et reprenez le contrôle !
                </p>
                <a
                    href="#"
                    className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full shadow-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 text-lg font-medium"
                >
                    Je choisis mon pack
                </a>
            </div>

            {/* Footer */}
            <footer className="mt-16 text-center">
                <p className="text-gray-700 text-sm">
                    Suivez-nous sur Instagram :{' '}
                    <a
                        href="https://www.instagram.com/ventilo.care/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-700 hover:underline"
                    >
                        @ventilo.care
                    </a>
                </p>
                <p className="text-gray-500 text-xs mt-2">
                    © 2024 Ventilo Care. Tous droits réservés.
                </p>
            </footer>
        </div>
    );
}
