import questionnaire from "../../public/data/questionsData.json";

export async function calculateResultsFromUserData(userAnswers) {
  try {
    console.log("Données reçues pour le calcul :", userAnswers);

    let scoreTotal = 0;
    const symptomsDetected = [];

    // Calcul du score total et détection des symptômes
    Object.entries(userAnswers).forEach(([questionIndex, answer]) => {
      const questionId = parseInt(questionIndex, 10) + 1;
      const question = questionnaire.questions.find((q) => q.id === questionId);

      if (question) {
        if (Array.isArray(answer)) {
          answer.forEach((ans) => {
            const option = question.options.find(
                (opt) => opt.text.trim().toLowerCase() === ans.trim().toLowerCase()
            );
            if (option) {
              scoreTotal += option.points || 0;
              symptomsDetected.push(option.text);
            }
          });
        } else {
          const option = question.options.find(
              (opt) => opt.text.trim().toLowerCase() === answer.trim().toLowerCase()
          );
          if (option) {
            scoreTotal += option.points || 0;
            symptomsDetected.push(option.text);
          }
        }
      }
    });

    console.log("Score calculé :", scoreTotal);
    console.log("Symptômes détectés :", symptomsDetected);

    // Calcul du diagnostic
    const diagnostic = calculateDiagnostic(scoreTotal, symptomsDetected);
    console.log("Diagnostic :", diagnostic);

    return {
      scoreTotal,
      symptomsDetected,
      diagnostic,
    };
  } catch (error) {
    console.error("Erreur dans calculateResultsFromUserData :", error);
    throw error;
  }
}

function calculateDiagnostic(scoreTotal, symptomsDetected) {
  const diagnostic = questionnaire.diagnostics.find((diag) => {
    const scoreConditionMet =
        diag.conditions.total_score &&
        ((diag.conditions.total_score === "13+" && scoreTotal >= 13) ||
            (diag.conditions.total_score === "6-12" &&
                scoreTotal >= 6 &&
                scoreTotal <= 12) ||
            (diag.conditions.total_score === "0-5" && scoreTotal <= 5));

    return scoreConditionMet;
  });

  return (
      diagnostic || {
        bilan: "Aucun diagnostic correspondant.",
        recommandations: [],
        message_final: "N'hésitez pas à consulter un professionnel pour plus de conseils.",
      }
  );
}
