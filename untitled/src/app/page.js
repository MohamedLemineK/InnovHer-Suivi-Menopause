"use client";

import { useState } from "react";
import { Element, scroller } from "react-scroll";
import questionnaire from "../../src/app/data/questionsData.json";
import Link from "next/link"; // Importer le JSON

export default function Chatbot() {
    const [userAnswers, setUserAnswers] = useState({});
    const [currentStep, setCurrentStep] = useState(0);
    const [maxStepReached, setMaxStepReached] = useState(0);

    // Extraction des questions depuis le JSON
    const steps = questionnaire.questions.map((q) => ({
        text: q.question,
        options: q.options.map((option) => ({
            text: option.text,
        })),
        isMultiple: q.type === "multiple_choice",
    }));

    const handleAnswerChange = (stepIndex, value) => {
        const isMultiple = steps[stepIndex].isMultiple;
        setUserAnswers((prevAnswers) => {
            const newAnswers = { ...prevAnswers };
            if (isMultiple) {
                // Pour les choix multiples, ajouter ou supprimer la sélection
                const existingAnswers = newAnswers[stepIndex] || [];
                if (existingAnswers.includes(value)) {
                    newAnswers[stepIndex] = existingAnswers.filter(
                        (answer) => answer !== value
                    );
                } else {
                    newAnswers[stepIndex] = [...existingAnswers, value];
                }
            } else {
                // Pour les autres types de questions, écraser la réponse
                newAnswers[stepIndex] = value;
            }
            return newAnswers;
        });

        // Pour les questions à choix unique, passer automatiquement à la prochaine question
        if (!isMultiple && stepIndex === currentStep) {
            goToNextStep();
        }
    };

    const goToNextStep = () => {
        const nextStep = currentStep + 1;
        if (nextStep < steps.length) {
            setCurrentStep(nextStep);
            setMaxStepReached((prevMax) => Math.max(prevMax, nextStep));
            // Défilement vers la prochaine question
            scroller.scrollTo(`step-${nextStep}`, {
                duration: 500,
                delay: 0,
                smooth: "easeInOutQuart",
                offset: -80,
            });
        } else {
            // Questionnaire terminé
            setCurrentStep(-1);
            // Vous pouvez ajouter une logique supplémentaire ici si nécessaire
        }
    };

    const goToPreviousStep = () => {
        const prevStep = currentStep - 1;
        if (prevStep >= 0) {
            setCurrentStep(prevStep);
            // Défilement vers la question précédente
            scroller.scrollTo(`step-${prevStep}`, {
                duration: 500,
                delay: 0,
                smooth: "easeInOutQuart",
                offset: -80,
            });
        }
    };

    return (
        <div className="min-h-screen bg-lightGray">
            {/* Barre de navigation */}
            <header className="fixed top-0 left-0 w-full bg-purpleAccent text-white z-50 shadow-md">
                <div className="flex justify-between items-center px-8 py-4">
                    <nav>
                        <ul className="flex space-x-4 font-semibold">
                            <li>Accueil</li>
                            <li>Diagnostic</li>
                            <li>À Propos</li>
                        </ul>
                    </nav>
                    <button className="bg-white text-purpleAccent px-4 py-2 rounded-md">
                        Besoin d'aide
                    </button>
                </div>
            </header>

            {/* Contenu des questions */}
            {currentStep === -1 ? (
                <div className="min-h-screen flex items-center justify-center">
                    <h1 className="text-4xl font-bold">
                        Merci pour votre participation
                    </h1>
                </div>
            ) : (
                <div className="flex flex-col items-center mt-20">
                    {steps.map((stepData, index) => (
                        <Element
                            key={index}
                            name={`step-${index}`}
                            className={`w-full min-h-screen flex flex-col items-center justify-center p-8 ${
                                index !== currentStep
                                    ? "hidden"
                                    : ""
                            }`}
                        >
                            <h1 className="text-4xl font-bold text-center mb-6">
                                {stepData.text}
                            </h1>
                            <div className="flex flex-col space-y-4 w-3/4">
                                {stepData.options.map((option, i) => {
                                    const selectedAnswers = userAnswers[index];
                                    const isSelected = stepData.isMultiple
                                        ? (selectedAnswers || []).includes(option.text)
                                        : selectedAnswers === option.text;

                                    return (
                                        <div
                                            key={i}
                                            className={`p-4 border border-gray-300 rounded-md cursor-pointer ${
                                                isSelected
                                                    ? "bg-purpleAccent text-white"
                                                    : ""
                                            }`}
                                            onClick={() =>
                                                handleAnswerChange(
                                                    index,
                                                    option.text
                                                )
                                            }
                                        >
                                            {/* Input caché */}
                                            <input
                                                type={
                                                    stepData.isMultiple
                                                        ? "checkbox"
                                                        : "radio"
                                                }
                                                name={`step-${index}`}
                                                value={option.text}
                                                className="hidden"
                                                checked={isSelected}
                                                readOnly
                                            />
                                            <span className="text-lg">
                                                {option.text}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                            {/* Boutons de navigation */}
                            <div className="flex justify-between mt-6 w-3/4">
                                {currentStep > 0 && (
                                    <button
                                        onClick={goToPreviousStep}
                                        className="bg-gray-500 text-white px-4 py-2 rounded-md"
                                    >
                                        Précédent
                                    </button>
                                )}
                                <div className="flex-1"></div>
                                <button
                                    onClick={goToNextStep}
                                    className="bg-purpleAccent text-white px-4 py-2 rounded-md"
                                >
                                    Suivant
                                </button>
                            </div>
                        </Element>
                    ))}
                </div>
            )}

            {/* Footer */}
            <footer className="bg-gray-800 text-white text-center py-4 mt-10">
                <p className="text-sm">
                    Ventilo, c'est un espace en ligne pour accompagner les femmes en périménopause avec une approche
                    pluridisciplinaire.
                    <br />
                    Notre souhait : faire de votre ménopause un second printemps digne de ce nom.
                </p>
                <div className="flex justify-center space-x-4 mt-2">
                    <a href="mailto:floriane@ventilo.care" className="text-purpleAccent hover:underline">
                        Contact
                    </a>
                    <a href="https://www.instagram.com/ventilo.care" target="_blank" rel="noopener noreferrer"
                        className="text-purpleAccent hover:underline">
                        Instagram
                    </a>
                    <a href="https://ventilo.substack.com/" target="_blank" rel="noopener noreferrer"
                        className="text-purpleAccent hover:underline">
                        Newsletter
                    </a>
                </div>
                <div className="text-xs mt-2">
                    <span>© 2024 Ventilo | </span>
                    <Link href="/conditions-d-utilisation/" className="text-purpleAccent hover:underline">
                        Conditions d'utilisation
                    </Link>{" "}
                    |
                    <Link href="/mentions-legales/" className="text-purpleAccent hover:underline">
                        Mentions légales
                    </Link>
                </div>
            </footer>
        </div>
    );
}
