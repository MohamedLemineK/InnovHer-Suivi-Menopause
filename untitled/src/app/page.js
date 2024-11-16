// pages/index.js
"use client";

import { useState } from "react";

export default function Questionnaire() {
  const [answers, setAnswers] = useState(["", "", ""]);

  const handleInputChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    const handleSubmit = () => {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    };

  };

  return (
      <div className="min-h-screen bg-lightGray text-center py-10">
        <header className="flex justify-between items-center px-8 pb-6">
          <nav>
            <ul className="flex space-x-4 text-purpleAccent font-semibold">
              <li>Accueil</li>
              <li>Besoin de réponse</li>
              <li>Vive vous !</li>
              <li>Blog</li>
              <li>À Propos</li>
            </ul>
          </nav>
          <button className="bg-purpleAccent text-white px-4 py-2 rounded-md">
            Faire un point
          </button>
        </header>

        <div className="bg-white shadow-lg mx-auto p-8 rounded-xl w-full max-w-xl">
          <h1 className="text-3xl font-bold mb-6">Salut, comment ça va ?</h1>
          {answers.map((answer, index) => (
              <input
                  key={index}
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-2 mb-4"
                  placeholder={`Et on répond à la question ici les amis ...`}
                  value={answer}
                  onChange={(e) => handleInputChange(index, e.target.value)}
              />
          ))}
          <button
              onClick={handleSubmit}
              className="bg-purpleAccent text-white px-6 py-2 rounded-md mt-4"
          >
            Suivant
          </button>
        </div>
      </div>
  );
}
