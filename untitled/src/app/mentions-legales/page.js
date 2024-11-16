import Link from "next/link";
export default function MentionsLegales() {
    return (
        <div className="min-h-screen bg-lightGray p-8">
            <div className="max-w-4xl mx-auto bg-white shadow-md p-8 rounded-md border border-gray-200">
                {/* Header pour revenir */}
                <header className="mb-6">
                    <Link href="/" className="text-purpleAccent font-semibold hover:underline">
                        ← Retour à l'accueil
                    </Link>
                </header>
                <h1 className="text-4xl font-bold text-purpleAccent text-center mb-6">
                    Mentions légales
                </h1>
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-purpleAccent mb-3">Propriété Intellectuelle</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Le contenu de ce blog, y compris mais sans s'y limiter, les textes, les images, les vidéos,
                        les graphiques, les logos et les marques de commerce, est la propriété de Ventilo Care ou de ses
                        concédants de licence, et est protégé par les lois sur le droit d'auteur et les autres lois sur
                        la propriété intellectuelle. Toute reproduction, distribution, modification ou utilisation non autorisée
                        du contenu est strictement interdite.
                    </p>
                </section>
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-purpleAccent mb-3">Responsabilité</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Les informations fournies sur cet espace sont destinées à des fins d'information générale uniquement.
                        Nous nous efforçons de fournir des informations précises et à jour, mais nous ne garantissons pas
                        l'exactitude, l'exhaustivité ou la pertinence de ces informations. En aucun cas, Ventilo Care ne pourra
                        être tenu responsable de tout dommage direct, indirect, accessoire, spécial, consécutif ou exemplaire
                        découlant de l'utilisation ou de l'incapacité à utiliser cet espace.
                    </p>
                </section>
                <section>
                    <h2 className="text-2xl font-semibold text-purpleAccent mb-3">Modifications des Mentions Légales</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Nous nous réservons le droit de modifier ces mentions légales à tout moment, et il est de votre responsabilité
                        de consulter périodiquement les mentions légales pour vous tenir au courant de toute modification. En continuant
                        à accéder ou à utiliser ce blog après la publication de modifications des mentions légales, vous acceptez
                        d'être lié par ces modifications.
                    </p>
                </section>
                <p className="text-sm text-gray-600 text-center mt-8">
                    Date d'entrée en vigueur : 2024
                </p>
                <p className="text-sm text-gray-600 text-center">
                    Ventilo Care - Faire de votre ménopause un second printemps digne de ce nom.
                </p>
            </div>
        </div>
    );
}
