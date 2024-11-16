function decisionTree() {
    let bouffeesDeChaleur = prompt("Bonjour ! Bouffées de chaleur ? (Oui/Parfois/Non)");
    
    if (bouffeesDeChaleur === "Non") {
        alert("Diagnostic : Peu de symptômes");
        return;
    }

    let cyclesMenstruels = prompt("Cycles menstruels ? (Complètement irréguliers/ Moins régulières/ Normal)");

    if (cyclesMenstruels === "Normal") {
        alert("Diagnostic : Peu de symptômes");
        return;
    }

    let humeur = prompt("Côté humeur ? (Rire aux larmes/ Ça arrive/ Pas du tout)");

    if (humeur === "Pas du tout") {
        alert("Diagnostic : Peu de symptômes");
        return;
    }

    let douleursArticulaires = prompt("Douleurs articulaires ? (Oui, souvent/ Parfois/ Non)");

    if (douleursArticulaires === "Non") {
        alert("Diagnostic : Symptômes modérés");
        return;
    }

    let secheresseIntime = prompt("Sécheresse intime ? (Oui, inquiétude/ Parfois/ Non)");

    if (secheresseIntime === "Oui, inquiétude") {
        alert("Diagnostic : Symptômes intenses");
        alert("Découvrez le Kit Ménopause");
        return;
    } else if (secheresseIntime === "Parfois") {
        alert("Diagnostic : Symptômes modérés");
        alert("Découvrez le Bootcamp");
        return;
    } else {
        alert("Diagnostic : Symptômes modérés");
        return;
    }
}

// Call the function to run the decision tree
decisionTree();
