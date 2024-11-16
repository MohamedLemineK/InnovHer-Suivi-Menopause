"use client";

import { useState } from "react";
import { Element, scroller } from "react-scroll";

export default function Questionnaire() {
  const questions = [
<<<<<<< HEAD
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
=======
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
  };

  const handleNext = (currentIndex) => {
    if (currentIndex < questions.length - 1) {
      scroller.scrollTo(`question-${currentIndex + 1}`, {
        duration: 500,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    } else {
      alert("Merci d'avoir complété le questionnaire !");
      console.log("Réponses :", answers);
>>>>>>> origin/chirine
    }
  };

  return (
<<<<<<< HEAD
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
=======
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
                      >
                        <input
                            type="radio"
                            name={`question-${index}`}
                            value={option}
                            className="hidden"
                            checked={answers[index] === option}
                            onChange={() => handleAnswerChange(index, option)}
                        />
                        <span className="text-lg">{option}</span>
                      </label>
                  ))}
                </div>
                <button
                    onClick={() => handleNext(index)}
                    className="bg-purpleAccent text-white px-6 py-3 rounded-md mt-6"
                >
                  {index < questions.length - 1 ? "Suivant" : "Terminer"}
                </button>
              </Element>
          ))}
>>>>>>> origin/chirine
        </div>

        <footer className="mt-10 text-sm text-white opacity-75">
          Question {currentQuestion + 1} sur {questions.length}
        </footer>
      </div>
  );
}
