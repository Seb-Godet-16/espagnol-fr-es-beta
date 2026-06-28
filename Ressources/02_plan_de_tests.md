# ✅ PLAN DE TESTS — VACHÉBO
*Version Juin 2026 — À réaliser sur mobile ET desktop*

**Légende :** ✅ OK · ❌ KO · ⚠️ Partiel · N/A Non applicable

---

## PRÉREQUIS

- Tester sur **Chrome Android** et **Safari iOS** (priorité) + Firefox Desktop
- Vider le cache avant la première session : *Paramètres navigateur → Vider les données*
- Connexion internet disponible pour le premier lancement

---

## MODULE 1 — LANCEMENT & CHOIX DE LANGUE

| # | Test | Résultat | Commentaire |
|---|---|---|---|
| 1.1 | L'application se charge sans erreur (console vide) | | |
| 1.2 | Le logo VACHÉBO s'affiche correctement | | |
| 1.3 | Clic sur "Apprendre le Français" → affiche le sélecteur de variante | | |
| 1.4 | Clic sur "Apprendre l'Espagnol" → affiche le sélecteur de variante | | |
| 1.5 | Le bouton ← Retour ramène aux cartes de langue | | |
| 1.6 | Sélection d'une variante régionale (ex : 🇲🇽 Mexique) | | |
| 1.7 | Clic "Continuer" → ouvre le Guide utilisateur | | |

---

## MODULE 2 — GUIDE UTILISATEUR

| # | Test | Résultat | Commentaire |
|---|---|---|---|
| 2.1 | Le Guide s'affiche dans la bonne langue (FR ou ES) | | |
| 2.2 | Les accordéons s'ouvrent/ferment correctement | | |
| 2.3 | Bouton ▶ Commencer → va aux Modules | | |
| 2.4 | Bouton 📄 PDF → ouvre la fenêtre d'impression | | |

---

## MODULE 3 — ÉCRAN DES MODULES

| # | Test | Résultat | Commentaire |
|---|---|---|---|
| 3.1 | La grille des thèmes s'affiche (Niveau 1 — Vocabulaire) | | |
| 3.2 | Onglet "Niveau 2 — Dialogues" bascule la grille | | |
| 3.3 | La barre de progression globale est visible | | |
| 3.4 | Clic sur un thème → ouvre la leçon | | |
| 3.5 | Les étoiles ★ s'affichent sur les modules déjà complétés | | |
| 3.6 | Bouton 🔄 Recommencer visible sur un module complété | | |
| 3.7 | Confirmation avant réinitialisation → annuler fonctionne | | |
| 3.8 | Confirmation → les étoiles disparaissent après reset | | |

---

## MODULE 4 — FLASHCARDS

| # | Test | Résultat | Commentaire |
|---|---|---|---|
| 4.1 | La carte s'affiche avec le mot dans les deux langues | | |
| 4.2 | Clic sur la carte → retournement (flip) | | |
| 4.3 | Bouton ▶ Suivant → passe à la carte suivante | | |
| 4.4 | Bouton ◀ Précédent → revient à la carte précédente | | |
| 4.5 | Bouton 🔊 → prononce le mot à voix haute | | |
| 4.6 | La vitesse de lecture est modifiable (lent/normal/rapide) | | |

---

## MODULE 5 — VOCABULAIRE (Lexique)

| # | Test | Résultat | Commentaire |
|---|---|---|---|
| 5.1 | Les "chips" de vocabulaire s'affichent | | |
| 5.2 | Clic sur un chip → prononce le mot | | |
| 5.3 | Bouton 📄 PDF → exporte le vocabulaire du module | | |

---

## MODULE 6 — QUIZ (10 questions)

| # | Test | Résultat | Commentaire |
|---|---|---|---|
| 6.1 | 10 questions QCM s'affichent une par une | | |
| 6.2 | La bonne réponse s'affiche en vert, les mauvaises en rouge | | |
| 6.3 | Score final et étoiles affichés à la fin | | |
| 6.4 | 100% → animation de confettis | | |
| 6.5 | Les étoiles sont sauvegardées (fermer + rouvrir l'app) | | |
| 6.6 | Bouton "Rejouer" → nouveau quiz différent | | |
| 6.7 | Si quiz interrompu → reprise proposée à la réouverture | | |

---

## MODULE 7 — ONGLET RÉPÈTE (Répétition orale)

| # | Test | Résultat | Commentaire |
|---|---|---|---|
| 7.1 | L'onglet Répète s'affiche | | |
| 7.2 | Bouton 🔊 → prononce le mot | | |
| 7.3 | Bouton 🎤 → demande l'autorisation microphone | | |
| 7.4 | Bonne prononciation → feedback vert | | |
| 7.5 | Mauvaise prononciation → feedback orange | | |
| 7.6 | Bouton "Passer" → mot suivant sans micro | | |
| 7.7 | Sur Firefox mobile → message d'indisponibilité affiché | | |

---

## MODULE 8 — DIALOGUES (Niveau 2)

| # | Test | Résultat | Commentaire |
|---|---|---|---|
| 8.1 | Les bulles de dialogue s'affichent correctement | | |
| 8.2 | Bouton 🔊 sur chaque bulle → lecture audio | | |
| 8.3 | Sélecteur de situation (ex : pharmacie, taxi) fonctionne | | |
| 8.4 | Mini-quiz de fin de dialogue fonctionne | | |
| 8.5 | Bouton 📄 PDF → exporte le dialogue | | |

---

## MODULE 9 — NAVIGATION GÉNÉRALE

| # | Test | Résultat | Commentaire |
|---|---|---|---|
| 9.1 | Barre de navigation basse visible sur tous les écrans | | |
| 9.2 | Bouton ❓ Guide → ouvre le guide depuis n'importe où | | |
| 9.3 | Bouton 📚 Modules → retour à la grille | | |
| 9.4 | Bouton 💌 Infos → ouvre les remerciements | | |
| 9.5 | Bouton 🌍 Langue → retour au lanceur | | |
| 9.6 | Boutons ‹ › dans la leçon → navigation entre modules | | |

---

## MODULE 10 — VARIANTES RÉGIONALES

| # | Test | Résultat | Commentaire |
|---|---|---|---|
| 10.1 | Changer de variante (ex : ES → AR) → thème visuel change | | |
| 10.2 | La voix espagnole s'adapte à la variante sélectionnée | | |
| 10.3 | Badge de région affiché dans le guide | | |

---

## MODULE 11 — PWA & HORS-LIGNE

| # | Test | Résultat | Commentaire |
|---|---|---|---|
| 11.1 | Bannière d'installation PWA proposée (Chrome Android) | | |
| 11.2 | App installée sur l'écran d'accueil | | |
| 11.3 | App fonctionne en mode avion (après 1ère visite) | | |
| 11.4 | Mise à jour automatique au retour en ligne | | |

---

## MODULE 12 — ACCESSIBILITÉ

| # | Test | Résultat | Commentaire |
|---|---|---|---|
| 12.1 | Navigation au clavier (Tab) fonctionne | | |
| 12.2 | Zoom à 200% → contenu lisible, pas de débordement | | |
| 12.3 | Mode sombre OS → pas de régression visuelle majeure | | |

---

## RÉSUMÉ

| Module | Nb tests | ✅ OK | ❌ KO | ⚠️ Partiel |
|---|---|---|---|---|
| 1. Lancement | 7 | | | |
| 2. Guide | 4 | | | |
| 3. Modules | 8 | | | |
| 4. Flashcards | 6 | | | |
| 5. Vocabulaire | 3 | | | |
| 6. Quiz | 7 | | | |
| 7. Répète | 7 | | | |
| 8. Dialogues | 5 | | | |
| 9. Navigation | 6 | | | |
| 10. Variantes | 3 | | | |
| 11. PWA | 4 | | | |
| 12. Accessibilité | 3 | | | |
| **TOTAL** | **63** | | | |
