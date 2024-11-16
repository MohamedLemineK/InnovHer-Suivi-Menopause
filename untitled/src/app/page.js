"use client";

import { useState } from "react";
import { Element, scroller } from "react-scroll";
import questionnaire from "../../src/app/data/questionsData.json";
import Link from "next/link"; // Importing Link for navigation

export default function Chatbot() {
    const [messages, setMessages] = useState([]);
    const [step, setStep] = useState(0);

    // Extract questions from JSON
    const steps = questionnaire.questions.map((q) => ({
        text: q.question,
        options: q.options.map((option) => ({
            text: option.text,
        })),
        isMultiple: q.type === "multiple_choice",
    }));

    const handleAnswerChange = (value) => {
        const nextStep = step + 1 < steps.length ? step + 1 : -1;

        // Handle multiple choice answers
        if (steps[step].isMultiple) {
            const currentAnswers = messages.filter((m) => m.sender === "user").map((m) => m.text);
            if (currentAnswers.includes(value)) {
                setMessages((prevMessages) => prevMessages.filter((m) => m.text !== value));
            } else {
                setMessages((prevMessages) => [
                    ...prevMessages,
                    { sender: "user", text: value },
                ]);
            }
        } else {
            setMessages((prevMessages) => [
                ...prevMessages,
                { sender: "user", text: value },
            ]);
        }

        // Move to the next step with a delay
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

                    // Scroll to the next question
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
            {/* Header */}
            <header className="fixed top-0 left-0 w-full bg-purpleAccent text-white z-50 shadow-md">
                <div className="flex justify-between items-center px-8 py-4">
                    {/* Logo */}
                    <Link href="/">
                        <img
                            src="/logo.jpg" // Ensure the logo file is placed in the public folder as "logo.jpg"
                            alt="Ventilo Care"
                            className="w-32 h-auto object-cover rounded-full shadow-lg" // Added rounded and shadow
                        />
                    </Link>
                    {/* Navigation */}
                    <nav>
                        <ul className="flex space-x-6 font-semibold">
                            <li>
                                <Link href="/" className="hover:underline">
                                    Accueil
                                </Link>
                            </li>
                            <li>
                                <Link href="/diagnostic" className="hover:underline">
                                    Diagnostic
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:underline">
                                    À Propos
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:underline">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <button className="bg-white text-purpleAccent px-4 py-2 rounded-full hover:bg-gray-200 shadow-md">
                        Besoin d'aide
                    </button>
                </div>
            </header>

            {/* Questions Content */}
            <div className="flex flex-col items-center mt-32">
                {steps.map((stepData, index) => (
                    <Element
                        key={index}
                        name={`step-${index}`}
                        className="w-full h-screen flex flex-col items-center justify-center bg-white shadow-lg p-8 rounded-lg" // Rounded cards
                    >
                        <h1 className="text-4xl font-bold text-center mb-6">
                            {stepData.text}
                        </h1>
                        <div className="flex flex-col space-y-4 w-3/4">
                            {stepData.options.map((option, i) => (
                                <label
                                    key={i}
                                    className={`flex items-center space-x-4 p-4 border border-gray-300 rounded-full ${
                                        messages.some((m) => m.sender === "user" && m.text === option.text)
                                            ? "bg-purpleAccent text-white shadow-lg"
                                            : "hover:bg-gray-100"
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

            {/* Footer */}
            <footer className="bg-gray-800 text-white text-center py-4 mt-10 rounded-t-lg">
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
                    </Link> |
                    <Link href="/mentions-legales/" className="text-purpleAccent hover:underline">
                        Mentions légales
                    </Link>
                </div>
            </footer>
        </div>
    );
}
