<div align="center">

[English](../README.md) · [Български](bg_README.md) · [Magyar](hu_README.md) · [Tiếng Việt](vi_README.md) · [Ελληνικά](el_README.md) · [Dansk](da_README.md) · [Bahasa Indonesia](id_README.md) · [Español (España)](es-ES_README.md) · [Español (Latinoamérica)](es-419_README.md) · [Italiano](it_README.md) · [繁體中文](zh-TW_README.md) · [简体中文](zh-CN_README.md) · [한국어](ko_README.md) · [Deutsch](de_README.md) · [Nederlands](nl_README.md) · [Norsk](no_README.md) · [Polski](pl_README.md) · [Português (Portugal)](pt-PT_README.md) · [Português (Brasil)](pt-BR_README.md) · [Română](ro_README.md) · [Русский](ru_README.md) · [ไทย](th_README.md) · [Türkçe](tr_README.md) · [Українська](uk_README.md) · [Suomi](fi_README.md) · **Français** · [Čeština](cs_README.md) · [Svenska](sv_README.md) · [日本語](ja_README.md)

# DemoScope — CS2 Review Toolkit

![Version](https://img.shields.io/badge/version-1.0.0-blue) ![License](https://img.shields.io/badge/license-MIT-green) ![Userscript](https://img.shields.io/badge/Tampermonkey%20%7C%20Violentmonkey-userscript-orange)

**Boîte à outils userscript centrée sur le clavier pour les relecteurs CS2 VACNet : verdicts prédéfinis, lecteur vidéo conscient du segment, améliorations de la page d'invitation, effets sonores et historique local privé — en 29 langues.**

</div>

## Présentation

DemoScope améliore les pages de révision de Counter-Strike VACNet (`counter-strike.net/vacnet`). Au lieu de cliquer sur quatre groupes de verdict (aim assist, wallhack, auto-bhop, bot) pour chaque court clip, vous disposez d'un flux de travail centré sur le clavier : verdicts prédéfinis, barre de recherche limitée au segment examiné, avance image par image, accélération temporaire, confirmation d'envoi en deux étapes et historique privé de vos propres verdicts. Tout s'exécute localement dans votre navigateur.

## Fonctionnalités principales

- **Verdicts prédéfinis** – 5 préréglages rapides sur les touches `1`–`5` et 15 combinaisons étendues (aim, wallhack, bhop, bot et leurs mélanges, y compris les variantes « incertain »).
- **Lecteur conscient du segment** – barre de recherche, affichage du temps, sauts de ±5 s et pas de 1/64 s limités au début et à la fin du clip.
- **Accélération par maintien** – maintenez `Shift` pour lire à une vitesse configurable (0,5×–4×, 2× par défaut).
- **Envoi sécurisé en deux étapes** – `Enter` arme le bouton, un second `Enter` envoie les verdicts ; les cibles de formulaire d'une autre origine sont bloquées.
- **Interface en 29 langues** – suit le paramètre `?l=` de Steam, votre choix enregistré ou la langue du navigateur, avec un sélecteur de langue dans la page.
- **Historique de révision local** – historique par clip et par partie dans `localStorage` ; export/import JSON, rapport HTML et fusion de nombreuses sauvegardes en un seul rapport.
- **Page d'invitation améliorée** – `/vacnet/createinvite` repensée avec affichage/masquage et copie en un clic du lien d'invitation, plus un récapitulatif des conditions.
- **Effets sonores** – sons synthétisés avec Web Audio, avec activation/désactivation, volume et écoute préalable.
- **Boîte de dialogue des réglages** – s'ouvre avec `F2` (modifiable) : sons, raccourci, limites de l'historique, sauvegardes, réinitialisation.
- **Confort** – écran de chargement après l'envoi, notifications, bouton pour masquer le nom du compte, boîte de dialogue des règles de révision et randomiseur de verdicts facultatif (désactivé par défaut).

## Installation

1. Installez un gestionnaire de userscripts tel que [Tampermonkey](https://www.tampermonkey.net/) ou [Violentmonkey](https://violentmonkey.github.io/) (le script utilise `GM_addStyle` et `unsafeWindow`).
2. [Installez DemoScope](https://raw.githubusercontent.com/ebayybe/DemoScope/main/DemoScope.user.js) et confirmez l'installation dans votre gestionnaire.
3. Connectez-vous à Steam et ouvrez <https://www.counter-strike.net/vacnet/>.
4. Ouvrez un clip à réviser — DemoScope se charge automatiquement (la page `/vacnet/join` est exclue).

## Utilisation

Les raccourcis fonctionnent sur les pages de révision tant que le focus n'est pas dans un champ de saisie, un bouton, un lien ou une liste de sélection.

| Touche | Action |
|---|---|
| `1` … `5` | Appliquer un verdict prédéfini : 1 bot + aim + wallhack, 2 aim + wallhack, 3 rage, 4 joueur clean, 5 incertain |
| `Shift` (hold) | Maintenir pour accélérer (0,5×–4×, 2× par défaut, sélectionnable dans la page) |
| `←` `→` | Sauter de 5 secondes en arrière / en avant |
| `,` `.` | Une image (1/64 s) en arrière / en avant |
| `Space` | Lecture / pause |
| `M` / `F` | Couper le son / plein écran (un double-clic sur la vidéo bascule aussi le plein écran) |
| `Enter` ×2 | Appuyer une fois pour armer le bouton d'envoi, une seconde fois pour envoyer les verdicts |
| `F2` | Ouvrir la boîte de dialogue des réglages (modifiable) |

## Architecture et détail des fonctions

DemoScope est une unique fonction auto-invoquée (`@run-at document-start`, `@noframes`). `init()` choisit entre la page d'invitation et la page de révision, puis relie les modules ci-dessous. La référence complète des 143 fonctions — nom, rôle, paramètres et valeur de retour — se trouve dans [fr_FUNCTIONS.md](https://github.com/ebayybe/DemoScope/blob/main/docs/fr_FUNCTIONS.md).

| Module | Rôle | Fonctions clés |
|---|---|---|
| `Localization` | Détermine la langue de l'interface, recherche les textes, dessine les drapeaux et le sélecteur de langue | `getActiveLocale`, `tr`, `settingText`, `inviteText`, `getPresetLabel`, `installLanguageSelector` |
| `Segment & player` | Lit le début/la fin du clip depuis la page, encapsule la lecture Video.js/HTML5, désactive le minuteur natif de boucle de segment du site | `parseSegmentBounds`, `createPlayerAdapter`, `waitForPlayerAdapter`, `blockSegmentLoopGuard` |
| `Player enhancements` | Barre de recherche personnalisée, aide aux touches, accélération avec Shift, avance image par image, raccourcis clavier | `installCustomControls`, `installPlayerEnhancements`, `isShortcutBlocked` |
| `Verdict presets` | Table des préréglages, état de la sélection, application des préréglages avec ordre et délais aléatoires facultatifs | `applyPreset`, `detectActivePreset`, `syncPresetButtons`, `applyDefaultVerdicts`, `buildEnhancementBar` |
| `Submit flow` | Enter en deux étapes, construit `verdict_labels[]`, contrôle de même origine, écran de chargement | `invokeProceedAction`, `prepareVerdictFormForSubmit`, `submitVerdictForm`, `isSafeSubmitTarget`, `finishSubmitLoadingWhenReady` |
| `Local history` | Stocke, élague et affiche l'historique par clip et par partie dans `localStorage` | `readClipHistoryStore`, `writeClipHistoryStore`, `appendReviewHistory`, `renderClipHistory` |
| `Backups & reports` | Export/import JSON, rapport HTML, rapport fusionné à partir de nombreuses sauvegardes | `exportLocalHistory`, `importLocalHistory`, `exportReadableHistory`, `exportCombinedHistoryReports` |
| `Settings & sound` | Boîte de dialogue des réglages, raccourci modifiable, signaux sonores Web Audio | `ensureSettingsDialog`, `openSettingsDialog`, `installSettingsUi`, `playUiSound` |
| `Invite page` | `/vacnet/createinvite` repensée : afficher/masquer et copier le lien, conditions | `installInvitePage` |
| `Layout & UI helpers` | Notifications, masquage du pied de page, observateurs de mise en page, bascule du nom du compte | `enhanceLayout`, `showToast`, `watchProceedFooter`, `installAccountNameControl` |
| `Bootstrap` | Point d'entrée : choisit le type de page et démarre les modules | `init` |

## Données locales et confidentialité

DemoScope n’envoie pas de télémétrie. Les réglages et l'historique restent dans le `localStorage` du navigateur (clés commençant par `demoscope`) et dans le `sessionStorage`. Utilisez l'option d'effacement de l'historique dans la boîte de dialogue des réglages pour le supprimer.

## Avertissement

DemoScope est un projet communautaire non officiel, sans affiliation ni approbation de Valve Corporation. Il ne prend jamais de verdict à votre place — examinez chaque clip vous-même et respectez les règles du programme de révision. Utilisation à vos propres risques.

## License

Publié sous licence [MIT](../LICENSE).