"use client";

import { useState } from "react";
import { Element, scroller } from "react-scroll";
import questionnaire from "../../data/questionnaire-ventilo-care.json"; // Importer le JSON

export default function Chatbot() {
    const [messages, setMessages] = useState([]);
    const [step, setStep] = useState(0);

    // Extraction des questions depuis le JSON
    const steps = questionnaire.questions.map((q) => ({
        text: q.question,
        options: q.options.map((option) => ({
            text: option.text,
        })),
        isMultiple: q.type === "multiple_choice" || false,
    }));

    const handleAnswerChange = (value) => {
        const nextStep = step + 1 < steps.length ? step + 1 : -1;

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
                                    onClick={() => handleAnswerChange(option.text)}
                                >
                                    <input
                                        type={stepData.isMultiple ? "checkbox" : "radio"}
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
        </div>
    );
}
