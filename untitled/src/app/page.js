"use client";

import { useState } from "react";

export default function Chatbot() {
    const [messages, setMessages] = useState([
        {
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
        },
    ];

    const handleResponse = (answer) => {
        setMessages((prevMessages) => [
            ...prevMessages,
            { sender: "user", text: answer },
        ]);

        const nextStep = steps[step].options.find(option => option.text === answer)?.nextStep;

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
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-300 via-pink-300 to-yellow-200 p-6">
            {/* Chatbot Container */}
            <div className="bg-white shadow-2xl rounded-lg w-full max-w-3xl h-[80vh] flex flex-col overflow-hidden border-4 border-purple-400">
                {/* Header */}
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xl font-bold p-4 flex items-center justify-between shadow-md">
                    <span>Ventilo Care - Chatbot</span>
                    <img
                        src="https://static.wixstatic.com/media/6bd675_3c1a203542d944b9a8b0e6a66f738f75~mv2.png/v1/crop/x_0,y_211,w_1035,h_634/fill/w_137,h_83,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Ventilo%20Care.png"
                        alt="Ventilo Care"
                        className="w-12 h-auto"
                    />
                </div>

                {/* Chat Window */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-white to-gray-100">
                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`flex ${
                                msg.sender === "user" ? "justify-end" : "justify-start"
                            }`}
                        >
                            <div
                                className={`max-w-[75%] p-4 rounded-xl shadow-md ${
                                    msg.sender === "user"
                                        ? "bg-purple-500 text-white"
                                        : "bg-gray-300 text-gray-800"
                                }`}
                            >
                                {msg.text}
                            </div>
                        </div>
                    ))}
                    {userTyping && (
                        <div className="flex justify-start">
                            <div className="bg-gray-300 text-gray-800 max-w-[75%] p-4 rounded-xl shadow-md">
                                Le bot écrit...
                            </div>
                        </div>
                    )}
                </div>

                {/* Response Buttons */}
                <div className="bg-gradient-to-r from-yellow-300 to-pink-400 p-4 flex flex-wrap gap-4 justify-center">
                    {steps[step].options.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => handleResponse(option.text)}
                            className="bg-purple-600 text-white px-6 py-2 rounded-full shadow-lg hover:bg-purple-700 transition-all duration-300 text-sm font-medium"
                        >
                            {option.text}
                        </button>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <footer className="mt-6 text-center">
                <p className="text-gray-700 text-sm">
                    Suivez-nous sur Instagram :{" "}
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
