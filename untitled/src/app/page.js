"use client";

import { useState } from "react";
import { Element, scroller } from "react-scroll";

export default function Questionnaire() {
  const questions = [
    {
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
    },
  ];

  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  const handleAnswerChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);

    // Passer automatiquement à la question suivante
    if (index < questions.length - 1) {
      scroller.scrollTo(`question-${index + 1}`, {
        duration: 500,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    } else {
      // Si c'est la dernière question
      alert("Merci d'avoir complété le questionnaire !");
      console.log("Réponses : ", newAnswers);
    }
  };

  return (
      <div className="min-h-screen bg-lightGray">
        <header className="flex justify-between items-center px-8 py-4 bg-purpleAccent text-white">
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
        </header>

        <div className="flex flex-col items-center">
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
