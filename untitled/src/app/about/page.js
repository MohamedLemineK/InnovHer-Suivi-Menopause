"use client";

import { useRouter } from "next/navigation";

export default function AboutPage() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-lightGray p-8">
            {/* Barre de navigation */}
            <header className="text-center py-6 bg-purpleAccent text-white shadow-md flex justify-between items-center px-4">
                <button
                    onClick={() => router.back()}
                    className="text-purpleAccent bg-white px-4 py-2 rounded-md hover:bg-gray-200"
                >
                    ← Retour
                </button>
                <h1 className="text-4xl font-bold">À propos de Ventilo Care</h1>
                <div className="w-16"></div> {/* Placeholder for alignment */}
            </header>

            {/* Contenu principal */}
            <main className="max-w-5xl mx-auto bg-white p-8 shadow-lg rounded-md mt-8">
                <section>
                    <p className="mb-4 text-lg">
                        Il y a une réalité qu’on ignore avant qu’elle ne nous arrive sur le coin de la figure :
                        quand la périménopause pointe le bout de son nez, ce n’est pas juste 2-3 bouffées de chaleur
                        par-ci par-là et la peau qui s’assèche, c’est parfois un 3 tonnes qui nous passe dessus.
                    </p>
                    <p className="mb-4 text-lg">
                        Vous le saviez vous, qu’il existe au moins 48 symptômes liés à la ménopause ? Que chez
                        certaines, l’ostéoporose est si forte qu’elles se cassent une côte en éternuant ?
                    </p>
                    <p className="mb-4 text-lg">
                        C'est pour ça que nous avons créé Ventilo Care :
                    </p>
                    <ul className="list-disc ml-6 mb-4 text-lg">
                        <li>Un espace informatif gratuit via notre blog et chatbot spécialisé.</li>
                        <li>Un accompagnement personnalisé avec des coachs en ménopause.</li>
                        <li>Un soutien pour faire de la ménopause un enjeu politique.</li>
                    </ul>
                    <p className="text-lg">
                        Avec tout ça, nous espérons vous aider à vivre votre second printemps sereinement.
                    </p>
                </section>
            </main>
        </div>
    );
}
