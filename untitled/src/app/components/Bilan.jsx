import { useEffect, useState } from "react";
import { calculateResultsFromUserData } from "../scoring";

export default function Bilan({ userAnswers }) {
    const [results, setResults] = useState(null);

    useEffect(() => {
        const calculateResults = async () => {
            try {
                console.log("Réponses utilisateur transmises à Bilan :", userAnswers);
                const res = await calculateResultsFromUserData(userAnswers);
                setResults(res);
            } catch (error) {
                console.error("Erreur dans Bilan :", error.message);
            }
        };

        calculateResults();
    }, [userAnswers]);

    if (!results) {
        return <p className="text-center">Chargement du bilan...</p>;
    }

    const { scoreTotal, symptomsDetected, diagnostic } = results;

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <h1 className="text-4xl font-bold text-center text-purple-700 mb-8">
                Votre Bilan
            </h1>

            <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Résumé des Résultats</h2>
                <p className="text-gray-600 mb-4">
                    <strong>Score Total :</strong> {scoreTotal}
                </p>
                <p className="text-gray-600">
                    <strong>Symptômes détectés :</strong>{" "}
                    {symptomsDetected.length > 0 ? symptomsDetected.join(", ") : "Aucun symptôme détecté"}
                </p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Diagnostic</h2>
                <p className="text-gray-600 mb-4">{diagnostic.bilan}</p>

                <h3 className="text-xl font-semibold text-gray-800 mb-4">Recommandations</h3>
                {diagnostic.recommandations.map((rec, index) => (
                    <details key={index} className="mb-4">
                        <summary className="cursor-pointer text-purple-700 font-semibold">
                            {rec.title}
                        </summary>
                        <ul className="ml-4 mt-2 list-disc text-gray-600">
                            {rec.items.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </details>
                ))}

                <h3 className="text-xl font-semibold text-gray-800 mb-4">Message Final</h3>
                <p className="text-gray-600">{diagnostic.message_final}</p>
            </div>
        </div>
    );
}
