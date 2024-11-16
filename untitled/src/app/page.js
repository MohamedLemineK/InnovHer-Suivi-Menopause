"use client";

import { useState } from "react";
import { Element, scroller } from "react-scroll";
import questionnaire from "../../src/app/data/questionsData.json";
import Link from "next/link"; // Import Link for navigation

export default function Chatbot() {
    const [userAnswers, setUserAnswers] = useState({});
    const [currentStep, setCurrentStep] = useState(0);
    const [maxStepReached, setMaxStepReached] = useState(0);

    // Extract questions from JSON
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
                // Handle multiple selections
                const existingAnswers = newAnswers[stepIndex] || [];
                if (existingAnswers.includes(value)) {
                    newAnswers[stepIndex] = existingAnswers.filter(
                        (answer) => answer !== value
                    );
                } else {
                    newAnswers[stepIndex] = [...existingAnswers, value];
                }
            } else {
                // Handle single selection
                newAnswers[stepIndex] = value;
            }
            return newAnswers;
        });

        // Automatically move to next step for single selection
        if (!isMultiple && stepIndex === currentStep) {
            goToNextStep();
        }
    };

    const goToNextStep = () => {
        const nextStep = currentStep + 1;
        if (nextStep < steps.length) {
            setCurrentStep(nextStep);
            setMaxStepReached((prevMax) => Math.max(prevMax, nextStep));

            scroller.scrollTo(`step-${nextStep}`, {
                duration: 500,
                delay: 0,
                smooth: "easeInOutQuart",
                offset: -80,
            });
        } else {
            // End of questionnaire
            setCurrentStep(-1);
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
        <div className="min-h-screen bg-lightGray">
            {/* Header */}
            <header className="fixed top-0 left-0 w-full bg-purpleAccent text-white z-50 shadow-md">
                <div className="flex justify-between items-center px-8 py-4">
                    {/* Logo */}
                    <Link href="/">
                        <img
                            src="/logo.png" // Ensure the logo file is placed in the public folder as "logo.jpg"
                            alt="Ventilo Care"
                            className="w-32 h-auto object-cover rounded-full shadow-lg"
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
            {currentStep === -1 ? (
                <div className="min-h-screen flex items-center justify-center">
                    <h1 className="text-4xl font-bold">
                        Merci pour votre participation
                    </h1>
                </div>
            ) : (
                <div className="flex flex-col items-center mt-32">
                    {steps.map((stepData, index) => (
                        <Element
                            key={index}
                            name={`step-${index}`}
                            className={`w-full min-h-screen flex flex-col items-center justify-center p-8 ${
                                index !== currentStep ? "hidden" : ""
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
                                            className={`p-4 border border-gray-300 rounded-full cursor-pointer ${
                                                isSelected
                                                    ? "bg-purpleAccent text-white shadow-lg"
                                                    : "hover:bg-gray-100"
                                            }`}
                                            onClick={() =>
                                                handleAnswerChange(
                                                    index,
                                                    option.text
                                                )
                                            }
                                        >
                                            {/* Hidden Input */}
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
                            {/* Navigation Buttons */}
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
                                {currentStep < steps.length - 1 && (
                                    <button
                                        onClick={goToNextStep}
                                        className="bg-purpleAccent text-white px-4 py-2 rounded-md"
                                    >
                                        Suivant
                                    </button>
                                )}
                            </div>
                        </Element>
                    ))}
                </div>
            )}

            {/* Footer */}
            <footer className="bg-gray-800 text-white text-center py-4 mt-10 rounded-t-lg">
                <p className="text-sm">
                    Ventilo, c'est un espace en ligne pour accompagner les femmes en périménopause avec une approche
                    pluridisciplinaire.
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
                <div className="text-xs mt-2">
                    <span>© 2024 Ventilo | </span>
                    <Link href="/conditions-d-utilisation/" className="text-purpleAccent hover:underline">
                        Conditions d'utilisation
                    </Link>{" "}
                    |{" "}
                    <Link href="/mentions-legales/" className="text-purpleAccent hover:underline">
                        Mentions légales
                    </Link>
                </div>
            </footer>
        </div>
    );
}
