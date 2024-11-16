"use client";

import { useState } from "react";
import { Element, scroller } from "react-scroll";

export default function Questionnaire() {
    const questions = [
        {
<<<<<<< HEAD
            question: "Comment vous sentez-vous aujourd'hui ?",
            options: ["Bien", "Fatigué", "Stressé"],
        },
        {
            question: "Quelle est votre couleur préférée ?",
            options: ["Bleu", "Rouge", "Vert"],
        },
        {
            question: "Quelle est votre saison favorite ?",
            options: ["Printemps", "Été", "Hiver"],
        },
        {
            question: "Préférez-vous travailler seul ou en équipe ?",
            options: ["Seul", "En équipe", "Peu importe"],
        },
        {
            question: "Quelle est votre activité de détente préférée ?",
            options: ["Lire", "Regarder un film", "Faire du sport"],
        },
        {
            question: "Comment gérez-vous le stress ?",
            options: ["Méditation", "Sortir marcher", "Discuter avec un ami"],
=======
            sender: "bot",
            text: "Bonjour ! Avez-vous des bouffées de chaleur ?",
        },
    ]);
    const [userTyping, setUserTyping] = useState(false);
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
>>>>>>> 84e1f62abf23bebbdf90df4f9d843975ec9a3bdc
        },
    ];

    const [answers, setAnswers] = useState(Array(questions.length).fill(null));

    const handleAnswerChange = (index, value) => {
        const newAnswers = [...answers];
        newAnswers[index] = value;
        setAnswers(newAnswers);

<<<<<<< HEAD
        // Passer automatiquement à la question suivante
        if (index < questions.length - 1) {
            scroller.scrollTo(`question-${index + 1}`, {
                duration: 500,
                delay: 0,
                smooth: "easeInOutQuart",
                offset: -80, // Décalage pour compenser la hauteur de la barre de navigation
            });
        } else {
            // Si c'est la dernière question
            alert("Merci d'avoir complété le questionnaire !");
            console.log("Réponses : ", newAnswers);
        }
=======
        setUserTyping(true);
        setTimeout(() => {
            if (nextStep !== undefined) {
                // Vérifiez si c'est un diagnostic final
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
                }
            }
            setUserTyping(false);
        }, 2000);
>>>>>>> 84e1f62abf23bebbdf90df4f9d843975ec9a3bdc
    };

    return (
        <div className="min-h-screen bg-lightGray">
            {/* Barre de navigation fixée */}
            <header className="fixed top-0 left-0 w-full bg-purpleAccent text-white z-50 shadow-md">
                <div className="flex justify-between items-center px-8 py-4">
                    <nav>
                        <ul className="flex space-x-4 font-semibold">
                            <li>Accueil</li>
                            <li>Besoin de réponse</li>
                            <li>Vive vous !</li>
                            <li>Blog</li>
                            <li>À Propos</li>
                        </ul>
                    </nav>
                    <button className="bg-white text-purpleAccent px-4 py-2 rounded-md">
                        Faire un point
                    </button>
                </div>
            </header>

            {/* Contenu des questions */}
            <div className="flex flex-col items-center mt-20"> {/* Ajout d'un espace en haut */}
                {questions.map((q, index) => (
                    <Element
                        key={index}
                        name={`question-${index}`}
                        className="w-full h-screen flex flex-col items-center justify-center bg-white shadow-lg p-8"
                    >
                        <h1 className="text-4xl font-bold text-center mb-6">
                            {q.question}
                        </h1>
                        <div className="flex flex-col space-y-4 w-3/4">
                            {q.options.map((option, i) => (
                                <label
                                    key={i}
                                    className={`flex items-center space-x-4 p-4 border border-gray-300 rounded-md ${
                                        answers[index] === option ? "bg-purpleAccent text-white" : ""
                                    }`}
                                    onClick={() => handleAnswerChange(index, option)}
                                >
                                    <input
                                        type="radio"
                                        name={`question-${index}`}
                                        value={option}
                                        className="hidden"
                                        checked={answers[index] === option}
                                        onChange={() => {}}
                                    />
                                    <span className="text-lg">{option}</span>
                                </label>
                            ))}
                        </div>
                    </Element>
                ))}
            </div>
        </div>
    );
}