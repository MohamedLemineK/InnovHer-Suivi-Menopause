// Fonction pour charger le fichier JSON contenant les données
async function loadData() {
  const response = await fetch('questionsData.json');
  const data = await response.json();
  return data;
}

// Fonction pour poser les questions et calculer le score
async function poserQuestions() {
  const data = await loadData();
  let scoreTotal = 0;
  let symptomsDetected = [];

  // Parcours des questions pour poser à l'utilisateur
  data.questions.forEach(question => {
    const optionsText = question.options.map((opt, index) => `${index + 1}. ${opt.text}`).join('\n');
    const userAnswer = prompt(`${question.question}\n${optionsText}`);
    
    const selectedOption = question.options[parseInt(userAnswer) - 1];
    
    if (selectedOption) {
      scoreTotal += selectedOption.points;
      if (selectedOption.text.includes('Sécheresse intime') || selectedOption.text.includes('Douleurs articulaires')) {
        symptomsDetected.push(question.title);
      }
    }
  });

  return { scoreTotal, symptomsDetected };
}

// Fonction pour déterminer et afficher le diagnostic
function donnerDiagnostic(scoreTotal, symptomsDetected) {
  loadData().then(data => {
    let diagnostic = null;

    // Vérification du diagnostic en fonction du score
    data.diagnostics.forEach(d => {
      if (scoreTotal >= 13 && d.conditions.total_score === "13+") {
        diagnostic = d;
      } else if (scoreTotal >= 6 && scoreTotal <= 12 && d.conditions.total_score === "6-12") {
        diagnostic = d;
      } else if (scoreTotal <= 5 && d.conditions.total_score === "0-5") {
        diagnostic = d;
      }
    });

    if (diagnostic) {
      alert(diagnostic.message);
      diagnostic.buttons.forEach(btn => {
        alert(`${btn.text}: ${btn.link}`);
      });
    } else {
      alert("Aucun diagnostic correspondant.");
    }
  });
}

// Lancer le questionnaire et donner le diagnostic
poserQuestions().then(result => {
  donnerDiagnostic(result.scoreTotal, result.symptomsDetected);
});

