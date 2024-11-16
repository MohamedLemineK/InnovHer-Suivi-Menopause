"use client";

import { useState } from "react";
import { Element, scroller } from "react-scroll";

export default function Chatbot() {
    const [messages, setMessages] = useState([
        {
            sender: "bot",
            text: "Bonjour ! Avez-vous des bouffées de chaleur ?",
        },
    ]);
    const [step, setStep] = useState(0);

    const steps = [
        {
            text: "Avez-vous des bouffées de chaleur ?",
            options: [
                { text: "Oui", nextStep: 1 },
                { text: "Parfois", nextStep: 1 },
                { text: "Non", nextStep: 4 },
            ],
        },
        {
            text: "Avez-vous des cycles menstruels irréguliers ?",
            options: [
                { text: "Oui, complètement irréguliers", nextStep: 2 },
                { text: "Oui, moins réguliers", nextStep: 2 },
                { text: "Normal", nextStep: 3 },
            ],
        },
        {
            text: "Comment est votre humeur ?",
            options: [
                { text: "Rire aux larmes", nextStep: 6 },
                { text: "Ça arrive", nextStep: 6 },
                { text: "Pas du tout", nextStep: 3 },
            ],
        },
        {
            text: "Diagnostic : Peu de symptômes.",
            options: [{ text: "Fin", nextStep: -1 }],
        },
        {
            text: "Diagnostic : Peu de symptômes.",
            options: [{ text: "Fin", nextStep: -1 }],
        },
        {
            text: "Avez-vous des douleurs articulaires ?",
            options: [
                { text: "Oui, souvent", nextStep: 7 },
                { text: "Parfois", nextStep: 7 },
                { text: "Non", nextStep: 3 },
            ],
        },
        {
            text: "Avez-vous de la sécheresse intime ?",
            options: [
                { text: "Oui, inquiétude", nextStep: 8 },
                { text: "Parfois", nextStep: 8 },
                { text: "Non", nextStep: 3 },
            ],
        },
        {
            text: "Diagnostic : Symptômes intenses. Découvrez le Kit Ménopause.",
            options: [{ text: "Fin", nextStep: -1 }],
        },
        {
            text: "Diagnostic : Symptômes modérés.",
            options: [{ text: "Fin", nextStep: -1 }],
        },
    ];

    const handleAnswerChange = (index, value) => {
        const nextStep = steps[step].options.find(option => option.text === value)?.nextStep;

        setMessages((prevMessages) => [
            ...prevMessages,
            { sender: "user", text: value },
        ]);

        if (nextStep !== undefined) {
            setTimeout(() => {
                if (nextStep === -1) {
                    setMessages((prevMessages) => [
                        ...prevMessages,
                        { sender: "bot", text: "Merci pour votre participation." },
                    ]);
                } else {
                    setMessages((prevMessages) => [
                        ...prevMessages,
                        { sender: "bot", text: steps[nextStep].text },
                    ]);
                    setStep(nextStep);

                    // Défilement vers la prochaine question
                    scroller.scrollTo(`step-${nextStep}`, {
                        duration: 500,
                        delay: 0,
                        smooth: "easeInOutQuart",
                        offset: -80,
                    });
                }
            }, 500);
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
            <div className="flex flex-col items-center mt-20">
                {steps.map((stepData, index) => (
                    <Element
                        key={index}
                        name={`step-${index}`}
                        className="w-full h-screen flex flex-col items-center justify-center bg-white shadow-lg p-8"
                    >
                        <h1 className="text-4xl font-bold text-center mb-6">
                            {stepData.text}
                        </h1>
                        <div className="flex flex-col space-y-4 w-3/4">
                            {stepData.options.map((option, i) => (
                                <label
                                    key={i}
                                    className={`flex items-center space-x-4 p-4 border border-gray-300 rounded-md ${
                                        messages.find((m) => m.text === option.text)
                                            ? "bg-purpleAccent text-white"
                                            : ""
                                    }`}
                                    onClick={() => handleAnswerChange(index, option.text)}
                                >
                                    <input
                                        type="radio"
                                        name={`step-${index}`}
                                        value={option.text}
                                        className="hidden"
                                        checked={messages.some(
                                            (m) => m.sender === "user" && m.text === option.text
                                        )}
                                        onChange={() => {}}
                                    />
                                    <span className="text-lg">{option.text}</span>
                                </label>
                            ))}
                        </div>
                    </Element>
                ))}
            </div>

            {/* Footer */}
            <footer className="bg-gray-800 text-white text-center py-4 mt-10">
                <p className="text-sm">
                    Ventilo, c'est un espace en ligne pour accompagner les femmes en périménopause avec une approche pluridisciplinaire.
                    <br />
                    Notre souhait : faire de votre ménopause un second printemps digne de ce nom.
                </p>
                <div className="flex justify-center space-x-4 mt-2">
                    <a href="mailto:floriane@ventilo.care" className="text-purpleAccent hover:underline">
                        Contact
                    </a>
                    <a href="https://www.instagram.com/ventilo.care" target="_blank" rel="noopener noreferrer" className="text-purpleAccent hover:underline">
                        Instagram
                    </a>
                    <a href="https://ventilo.substack.com/" target="_blank" rel="noopener noreferrer" className="text-purpleAccent hover:underline">
                        Newsletter
                    </a>
                </div>
                <p className="text-xs mt-2">
                    &copy; 2024 Ventilo | <a href="/conditions-d-utilisation" className="text-purpleAccent hover:underline">Conditions d'utilisation</a> | <a href="/mentions-légales" className="text-purpleAccent hover:underline">Mentions légales</a>
                </p>
            </footer>
        </div>
    );
}