"use client";

import { useState } from "react";
import { Element, scroller } from "react-scroll";
import questionnaire from "../../public/data/questionsData.json";
import Link from "next/link";
import Bilan from "../app/components/Bilan";
import Header from "../app/components/Header";
import Footer from "@/app/components/Footer";

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
        <div className="min-h-screen bg-gradient-to-br #f3e8ff">

            <Header />

            {/* Questions Section */}
            {!isComplete ? (
                <div className="flex flex-col items-center mt-16">
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
                                        className={`p-4 border rounded-full transition-all duration-300 text-center ${
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

            <Footer />
        </div>
    );
}
