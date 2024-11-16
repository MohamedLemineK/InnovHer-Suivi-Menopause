async function loadData() {
  try {
    const response = await fetch('/data/questionsData.json'); // Chemin relatif au fichier JSON
    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`); // Vérification du statut HTTP
    }
    return await response.json();
  } catch (error) {
    console.error("Erreur lors du chargement des données JSON :", error.message);
    return null;
  }
}

async function poserQuestions(userResponses) {
  const data = await loadData();
  if (!data) {
    throw new Error("Impossible de charger les données JSON.");
  }

  let scoreTotal = 0;
  let symptomsDetected = [];

  userResponses.forEach((response, index) => {
    const question = data.questions[index];
    const selectedOption = question.options[response];

    if (selectedOption) {
      scoreTotal += selectedOption.points;

      if (
          selectedOption.text.includes('Sécheresse intime') ||
          selectedOption.text.includes('Douleurs articulaires')
      ) {
        symptomsDetected.push(question.title);
      }
    }
  });

  return { scoreTotal, symptomsDetected };
}

async function donnerDiagnostic(scoreTotal) {
  const data = await loadData();
  if (!data) {
    throw new Error("Impossible de charger les données JSON.");
  }

  let diagnostic = null;

  data.diagnostics.forEach((d) => {
    if (scoreTotal >= 13 && d.conditions.total_score === '13+') {
      diagnostic = d;
    } else if (scoreTotal >= 6 && scoreTotal <= 12 && d.conditions.total_score === '6-12') {
      diagnostic = d;
    } else if (scoreTotal <= 5 && d.conditions.total_score === '0-5') {
      diagnostic = d;
    }
  });

  return diagnostic;
}

export async function calculateResults(userResponses) {
  const { scoreTotal, symptomsDetected } = await poserQuestions(userResponses);
  const diagnostic = await donnerDiagnostic(scoreTotal);

  return { scoreTotal, symptomsDetected, diagnostic };
}
