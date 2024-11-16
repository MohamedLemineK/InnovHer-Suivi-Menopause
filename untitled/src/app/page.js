"use client";

import { useState } from "react";

export default function Questionnaire() {
  const questions = [
    { text: "Vous préférez travailler seul ou en équipe ?", options: ["Seul", "En équipe", "Indifférent"] },
    { text: "Prenez-vous des décisions rapidement ?", options: ["Oui", "Non", "Parfois"] },
    { text: "Préférez-vous la logique ou les émotions ?", options: ["Logique", "Émotions", "Les deux"] },
    { text: "Appréciez-vous les grands rassemblements sociaux ?", options: ["Oui", "Non", "Occasionnellement"] },
    { text: "Préférez-vous planifier ou improviser ?", options: ["Planifier", "Improviser", "Un mélange des deux"] },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
    if (currentQuestion < questions.length - 1) {
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 300); // Delay for transition effect
    } else {
      alert("Merci pour vos réponses !");
    }
  };

  return (
      <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-purple-300 to-blue-400 text-white font-sans py-10">
        <header className="w-full max-w-4xl text-center mb-8">
          <h1 className="text-3xl font-bold">Test de Personnalité</h1>
          <p className="text-lg mt-2">Répondez aux questions pour mieux vous comprendre</p>
        </header>

        <div className="relative w-full max-w-2xl bg-white text-gray-800 p-8 rounded-xl shadow-lg">
          <div className="absolute top-0 left-0 h-2 bg-purpleAccent rounded-t-xl transition-all" style={{ width: `${progress}%` }}></div>
          <h2 className="text-xl font-bold mb-6">{questions[currentQuestion].text}</h2>

          <div className="space-y-4">
            {questions[currentQuestion].options.map((option, i) => (
                <button
                    key={i}
                    onClick={() => handleAnswer(option)}
                    className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition-all"
                >
                  {option}
                </button>
            ))}
          </div>
        </div>

        <footer className="mt-10 text-sm text-white opacity-75">
          Question {currentQuestion + 1} sur {questions.length}
        </footer>
      </div>
  );
}
