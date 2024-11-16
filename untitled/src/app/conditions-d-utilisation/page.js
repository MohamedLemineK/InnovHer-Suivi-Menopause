import Link from "next/link";
export default function ConditionsUtilisation() {
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
                    Conditions d'utilisation
                </h1>
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-purpleAccent mb-3">Introduction</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Bienvenue sur le site de Ventilo Care. En accédant ou en utilisant ce site, vous acceptez les
                        conditions générales d'utilisation décrites ci-dessous.
                    </p>
                </section>
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-purpleAccent mb-3">Droits et responsabilités</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Le contenu de ce site est fourni uniquement à des fins informatives. Ventilo Care n'est pas
                        responsable des décisions prises en fonction des informations disponibles sur ce site.
                    </p>
                </section>
                <p className="text-sm text-gray-600 text-center mt-8">
                    Date d'entrée en vigueur : 2024
                </p>
            </div>
        </div>
    );
}
