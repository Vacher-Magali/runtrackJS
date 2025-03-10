function jourTravaille(date) {
  const joursFeries2024 = [
    new Date('2024-01-01'),  // Jour de l'An
    new Date('2024-04-01'),  // Lundi de Pâques (exemple)
    new Date('2024-05-01'),  // Fête du Travail
    new Date('2024-05-08'),  // Victoire 1945
    new Date('2024-07-14'),  // Fête Nationale
    new Date('2024-08-15'),  // Assomption
    new Date('2024-11-01'),  // Toussaint
    new Date('2024-12-25')   // Noël
  ];

  // Formater la date au format "jour, mois, année" pour l'affichage
  const jour = date.getDate();
  const mois = date.getMonth() + 1; // Les mois commencent à 0, donc on ajoute 1
  const annee = date.getFullYear();

  // Vérification si la date est un jour férié
  const estJourFerie = joursFeries2024.some(ferie => 
    ferie.getDate() === jour && ferie.getMonth() === date.getMonth() && ferie.getFullYear() === annee
  );

  if (estJourFerie) {
    console.log(`Le ${jour} ${mois} ${annee} est un jour férié`);
  } else {
    const jourSemaine = date.getDay(); // 0 = Dimanche, 6 = Samedi
    if (jourSemaine === 0 || jourSemaine === 6) {
      console.log(`Non, ${jour} ${mois} ${annee} est un week-end`);
    } else {
      console.log(`Oui, ${jour} ${mois} ${annee} est un jour travaillé`);
    }
  }
}

// Exemple d'appel
jourTravaille(new Date('2024-05-01')); // Exemple de jour férié
jourTravaille(new Date('2024-07-13')); // Exemple de jour travaillé
jourTravaille(new Date('2024-07-14')); // Exemple de week-end
