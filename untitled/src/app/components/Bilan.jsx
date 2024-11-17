import React, { useEffect, useState } from "react";
import { calculateResultsFromUserData } from "../scoring";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile, faExclamationCircle, faHeart } from "@fortawesome/free-solid-svg-icons";

function Button(props) {
    return null;
}

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

    // Déterminer la couleur et l'icône en fonction du score
    const diagnosticColor =
        scoreTotal >= 13
            ? "bg-red-100 text-red-800"
            : scoreTotal >= 6
                ? "bg-yellow-100 text-yellow-800"
                : "bg-green-100 text-green-800";

    const diagnosticIcon =
        scoreTotal >= 13 ? faExclamationCircle : scoreTotal >= 6 ? faSmile : faHeart;

    return (
        <div className="min-h-screen  p-8 mt-20">
            <h1 className="text-4xl font-bold text-center text-purple-700 mb-8">
                Mon Bilan
            </h1>

            <div className={`p-6 rounded-lg shadow-lg ${diagnosticColor} animate-fade-in`}>
                <h2 className="text-2xl font-bold flex items-center mb-4">
                    <FontAwesomeIcon icon={diagnosticIcon} className="mr-3 text-3xl"/>
                    En résumé
                </h2>
                <p className="text-lg font-medium">{diagnostic.bilan}</p>
            </div>


            <div className="bg-white shadow-md rounded-lg p-6 mt-6">
                <h3 className="text-xl font-semibold text-purple-700 mb-4">
                    Recommandations
                </h3>
                {diagnostic.recommandations.map((rec, index) => (
                    <details key={index} className="mb-4 group">
                        <summary
                            className="cursor-pointer text-purple-700 font-semibold hover:text-purple-500 transition-all">
                            {rec.title}
                        </summary>
                        <ul className="ml-4 mt-2 list-disc text-gray-600 pl-4 border-l-2 border-purple-200">
                            {rec.items.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </details>

                ))}

                <h3 className="text-xl font-semibold text-purple-700 mt-6 text-center">
                    <span>{diagnostic.message_final}</span>
                </h3>


            </div>
            <a
                href={"/packs"}
                className="mt-3 block text-center bg-gradient-to-r from-purple-500 to-purple-700 text-white px-6 py-3 rounded-lg shadow-lg hover:from-purple-600 hover:to-purple-800 transition-all duration-300"
            >
                Découvrir les solutions !
            </a>
        </div>
    );
}
