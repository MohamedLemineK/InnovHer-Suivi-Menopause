"use client";

import { useState } from "react";
import { Element, scroller } from "react-scroll";
import questionnaire from "../../public/data/questionsData.json";
import Link from "next/link";
import Bilan from "../app/components/Bilan";

export default function Chatbot() {
    const [userAnswers, setUserAnswers] = useState({});
    const [currentStep, setCurrentStep] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    const steps = questionnaire.questions.map((q) => ({
        text: q.question,
        options: q.options.map((option) => ({
            text: option.text,
        })),
        isMultiple: q.type === "multiple_choice",
    }));

    const handleAnswerChange = (stepIndex, value) => {
        setUserAnswers((prevAnswers) => {
            const newAnswers = { ...prevAnswers };
            if (steps[stepIndex].isMultiple) {
                const existingAnswers = newAnswers[stepIndex] || [];
                if (existingAnswers.includes(value)) {
                    newAnswers[stepIndex] = existingAnswers.filter((answer) => answer !== value);
                } else {
                    newAnswers[stepIndex] = [...existingAnswers, value];
                }
            } else {
                newAnswers[stepIndex] = value;
            }
            return newAnswers;
        });

        if (!steps[stepIndex].isMultiple) {
            goToNextStep();
        }
    };

    const goToNextStep = () => {
        const nextStep = currentStep + 1;
        if (nextStep < steps.length) {
            setCurrentStep(nextStep);
            scroller.scrollTo(`step-${nextStep}`, {
                duration: 500,
                delay: 0,
                smooth: "easeInOutQuart",
                offset: -80,
            });
        } else {
            setIsComplete(true);
        }
    };

    const goToPreviousStep = () => {
        const prevStep = currentStep - 1;
        if (prevStep >= 0) {
            setCurrentStep(prevStep);
            scroller.scrollTo(`step-${prevStep}`, {
                duration: 500,
                delay: 0,
                smooth: "easeInOutQuart",
                offset: -80,
            });
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-100 to-purple-200">
            {/* Header */}
            <header className="fixed top-0 left-0 w-full bg-purple-700 text-white z-50 shadow-lg">
                <div className="flex justify-between items-center px-8 py-4">
                    <Link href="/">
                        <img
                            src="/logo.png"
                            alt="Ventilo Care"
                            className="w-32 h-auto object-cover rounded-full shadow-md"
                        />
                    </Link>
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
                    <button className="bg-white text-purple-700 px-4 py-2 rounded-full hover:bg-purple-100 shadow-md">
                        Besoin d'aide
                    </button>
                </div>
            </header>

            {/* Questions Section */}
            {!isComplete ? (
                <div className="flex flex-col items-center mt-28">
                    {steps.map((step, index) => (
                        <Element
                            key={index}
                            name={`step-${index}`}
                            className={`w-full ${
                                index !== currentStep ? "hidden" : ""
                            } min-h-screen flex flex-col items-center justify-center p-8`}
                        >
                            <h1 className="text-3xl md:text-4xl font-bold text-purple-800 text-center mb-6">
                                {step.text}
                            </h1>
                            <div className="flex flex-col space-y-4 w-3/4">
                                {step.options.map((option, i) => (
                                    <button
                                        key={i}
                                        onClick={() => handleAnswerChange(index, option.text)}
                                        className={`p-4 border rounded-full transition-all duration-300 text-left ${
                                            (userAnswers[index] || []).includes(option.text)
                                                ? "bg-purple-700 text-white"
                                                : "bg-white hover:bg-purple-100"
                                        }`}
                                    >
                                        {option.text}
                                    </button>
                                ))}
                            </div>
                            <div className="flex justify-between mt-6 w-3/4">
                                {currentStep > 0 && (
                                    <button
                                        onClick={goToPreviousStep}
                                        className="bg-gray-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-600 transition"
                                    >
                                        Précédent
                                    </button>
                                )}
                                <div className="flex-1"></div>
                                {currentStep < steps.length - 1 && (
                                    <button
                                        onClick={goToNextStep}
                                        className="bg-purple-700 text-white px-4 py-2 rounded-md shadow-md hover:bg-purple-800 transition"
                                    >
                                        Suivant
                                    </button>
                                )}
                            </div>
                        </Element>
                    ))}
                </div>
            ) : (
                <Bilan userAnswers={userAnswers} />
            )}

            {/* Footer */}
            <footer className="bg-purple-800 text-white text-center py-4 mt-10 rounded-t-lg">
                <p className="text-sm">
                    Ventilo Care : Un espace pour accompagner les femmes en périménopause avec une approche
                    pluridisciplinaire.
                </p>
                <div className="flex justify-center space-x-4 mt-2">
                    <a href="mailto:floriane@ventilo.care" className="hover:underline">
                        Contact
                    </a>
                    <a
                        href="https://www.instagram.com/ventilo.care"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                    >
                        Instagram
                    </a>
                    <a
                        href="https://ventilo.substack.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                    >
                        Newsletter
                    </a>
                </div>
                <div className="text-xs mt-2">
                    <span>© 2024 Ventilo Care | </span>
                    <Link href="/conditions-d-utilisation" className="hover:underline">
                        Conditions d'utilisation
                    </Link>{" "}
                    |{" "}
                    <Link href="/mentions-legales" className="hover:underline">
                        Mentions légales
                    </Link>
                </div>
            </footer>
        </div>
    );
}
