<div align="center">

[English](https://github.com/ebayybe/DemoScope/blob/main/README/README.md) · [Български](https://github.com/ebayybe/DemoScope/blob/main/README/bg_README.md) · [Magyar](https://github.com/ebayybe/DemoScope/blob/main/README/hu_README.md) · [Tiếng Việt](https://github.com/ebayybe/DemoScope/blob/main/README/vi_README.md) · [Ελληνικά](https://github.com/ebayybe/DemoScope/blob/main/README/el_README.md) · [Dansk](https://github.com/ebayybe/DemoScope/blob/main/README/da_README.md) · [Bahasa Indonesia](https://github.com/ebayybe/DemoScope/blob/main/README/id_README.md) · [Español (España)](https://github.com/ebayybe/DemoScope/blob/main/README/es-ES_README.md) · [Español (Latinoamérica)](https://github.com/ebayybe/DemoScope/blob/main/README/es-419_README.md) · [Italiano](https://github.com/ebayybe/DemoScope/blob/main/README/it_README.md) · [繁體中文](https://github.com/ebayybe/DemoScope/blob/main/README/zh-TW_README.md) · [简体中文](https://github.com/ebayybe/DemoScope/blob/main/README/zh-CN_README.md) · [한국어](https://github.com/ebayybe/DemoScope/blob/main/README/ko_README.md) · [Deutsch](https://github.com/ebayybe/DemoScope/blob/main/README/de_README.md) · [Nederlands](https://github.com/ebayybe/DemoScope/blob/main/README/nl_README.md) · [Norsk](https://github.com/ebayybe/DemoScope/blob/main/README/no_README.md) · [Polski](https://github.com/ebayybe/DemoScope/blob/main/README/pl_README.md) · [Português (Portugal)](https://github.com/ebayybe/DemoScope/blob/main/README/pt-PT_README.md) · [Português (Brasil)](https://github.com/ebayybe/DemoScope/blob/main/README/pt-BR_README.md) · [Română](https://github.com/ebayybe/DemoScope/blob/main/README/ro_README.md) · [Русский](https://github.com/ebayybe/DemoScope/blob/main/README/ru_README.md) · [ไทย](https://github.com/ebayybe/DemoScope/blob/main/README/th_README.md) · [Türkçe](https://github.com/ebayybe/DemoScope/blob/main/README/tr_README.md) · [Українська](https://github.com/ebayybe/DemoScope/blob/main/README/uk_README.md) · [Suomi](https://github.com/ebayybe/DemoScope/blob/main/README/fi_README.md) · **Français** · [Čeština](https://github.com/ebayybe/DemoScope/blob/main/README/cs_README.md) · [Svenska](https://github.com/ebayybe/DemoScope/blob/main/README/sv_README.md) · [日本語](https://github.com/ebayybe/DemoScope/blob/main/README/ja_README.md)

</div>

<br>

<div align="center">

# DemoScope

**La boîte à outils de révision CS2 VACNet pensée pour le clavier.**<br>
Préréglages de verdict · lecteur adapté aux limites des clips · raccourcis remappables · historique local privé · 29 langues.

<br>

[![Version](https://img.shields.io/badge/version-1.2.0-3b82f6?style=flat-square)](https://github.com/ebayybe/DemoScope/releases)
[![Licence](https://img.shields.io/badge/license-GPL--3.0-22c55e?style=flat-square)](https://github.com/ebayybe/DemoScope/blob/main/LICENSE)
[![Userscript](https://img.shields.io/badge/Tampermonkey%20%7C%20Violentmonkey-userscript-f59e0b?style=flat-square)](#installation)
[![Langues](https://img.shields.io/badge/languages-29-8b5cf6?style=flat-square)](#langues)
[![Confidentialité](https://img.shields.io/badge/telemetry-none-64748b?style=flat-square)](#confidentialité)

<br>

[**⬇ Installer DemoScope**](https://raw.githubusercontent.com/ebayybe/DemoScope/main/DemoScope.user.js)

[Fonctionnalités](#fonctionnalités) · [Installation](#installation) · [Raccourcis clavier](#raccourcis-clavier) · [Personnalisation](#personnalisation) · [Documentation](https://github.com/ebayybe/DemoScope/blob/main/docs/fr_FUNCTIONS.md) · [Historique des versions](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/fr_CHANGELOG.md)

</div>

<br>

## Captures d’écran

<table>
  <tr>
    <td align="center" width="33%"><a href="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Welcome.png"><img src="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Welcome.png" alt="Écran d’accueil de DemoScope"></a><br><sub><b>Écran d’accueil</b></sub></td>
    <td align="center" width="33%"><a href="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope.png"><img src="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope.png" alt="Interface principale de DemoScope"></a><br><sub><b>Interface principale</b></sub></td>
    <td align="center" width="33%"><a href="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Invite_a_friend.png"><img src="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Invite_a_friend.png" alt="Page d’invitation de DemoScope"></a><br><sub><b>Inviter un ami</b></sub></td>
  </tr>
</table>

## Présentation

DemoScope améliore les pages de révision Counter-Strike VACNet (`counter-strike.net/vacnet`). Au lieu de cliquer dans le formulaire de verdict pour chaque court clip, vous travaillez au clavier : préréglages de verdict, barre de lecture limitée au segment examiné, avance image par image, accélération temporaire, envoi en deux étapes et historique privé de vos verdicts. Le script prend en charge les deux formulaires VACNet actuels (le formulaire classique à quatre questions et la nouvelle tâche à une question) et se protège lorsque Valve modifie la page. Tout s’exécute localement dans votre navigateur.

## Fonctionnalités

| | |
|---|---|
| **Flux de révision** | 5 préréglages rapides sur `1`–`5` et 15 combinaisons étendues, randomiseur de verdict facultatif (désactivé par défaut) et envoi sécurisé en deux étapes : `Enter` arme le bouton, un second `Enter` envoie. `Esc` annule. |
| **Les deux types de tâche** | Détecte le formulaire classique (aide à la visée, wallhack, auto-bhop, bot) et la tâche à une question (« Is the Subject cheating beyond a reasonable doubt? »). Cette dernière utilise une disposition compacte, des verdicts étiquetés sur `1`–`3` et un indicateur verrouillé jusqu’à la fin du clip. |
| **Lecteur adapté au clip** | Barre de lecture et durée limitées au début et à la fin du clip, sauts de ±5 s, avance image par image de 1/64 s, accélération en maintenant `Shift` (0,5×–4×), raccourcis pour couper le son et passer en plein écran. |
| **Raccourcis personnalisables** | Réattribuez chacune des 18 actions dans une fenêtre dédiée. Les conflits sont expliqués avant tout remplacement (action, groupe et fonction), et tous les rappels de touches de la page suivent vos réglages. |
| **Animations** | Fenêtre avec aperçu en direct, six styles d’indicateur, trois vitesses et interrupteur. Respecte par défaut le réglage système « réduire les animations ». |
| **Verdicts compréhensibles** | Un « ? » près de chaque catégorie explique le verdict ; les expressions importantes sont mises en évidence afin que « not » ne passe pas inaperçu. |
| **Historique local privé** | Historique par clip et par partie dans `localStorage`, import et export JSON, rapports HTML et fusion de plusieurs sauvegardes dans un seul rapport. |
| **Page d’invitation** | Page `/vacnet/createinvite` repensée avec afficher/masquer, copie en un clic, résumé des exigences, bouton de fermeture et raccourcis `Enter` / `Esc`. |
| **29 langues** | Utilise d’abord votre choix, puis le paramètre Steam `?l=`, puis la langue du navigateur. Choisir une langue dans DemoScope change également le texte de VACNet. |
| **Effets sonores** | Signaux synthétisés avec Web Audio, réglage du volume, aperçu et interrupteur. |
| **Conçu pour résister aux refontes** | Les étapes de configuration sont isolées, les éléments clés disposent de méthodes de recherche alternatives et, si la page devient méconnaissable, DemoScope se désactive sans toucher à VACNet. Un clic copie un rapport de diagnostic pour signaler un problème. |

## Installation

1. Installez un gestionnaire de userscripts comme [Tampermonkey](https://www.tampermonkey.net/) ou [Violentmonkey](https://violentmonkey.github.io/). Le script utilise `GM_addStyle` et `unsafeWindow`.
2. [**Installer DemoScope**](https://raw.githubusercontent.com/ebayybe/DemoScope/main/DemoScope.user.js) puis confirmez l’installation dans le gestionnaire.
3. Connectez-vous à Steam et ouvrez [counter-strike.net/vacnet](https://www.counter-strike.net/vacnet/).
4. Ouvrez un clip à réviser. DemoScope se charge automatiquement (la page `/vacnet/join` est exclue).

Les mises à jour arrivent par votre gestionnaire de userscripts. DemoScope fonctionne dans les navigateurs basés sur Chromium et dans Firefox.

## Raccourcis clavier

Les raccourcis fonctionnent sur les pages de révision lorsque le focus n’est pas dans un champ modifiable ou un autre contrôle interactif. **Chaque touche ci-dessous peut être modifiée** dans **Settings → Hotkeys**.

| Touche | Action |
|---|---|
| `1` … `5` | Formulaire classique : appliquer un préréglage (1 bot + visée + wallhack ; 2 visée + wallhack ; 3 rage ; 4 joueur sans triche ; 5 incertain). |
| `1` `2` `3` | Tâche à une question : Cheating / Not sure / No cheats seen. |
| `Enter` | Confirmer. Formulaire classique : appuyer une fois pour armer le bouton, une seconde fois pour envoyer. |
| `Esc` | Annuler le verdict en attente de confirmation ou désarmer le premier `Enter`. |
| `Shift` (maintenir) | Accélération (0,5×–4×, 2× par défaut, réglable sur la page). |
| `←` `→` | Reculer / avancer de 5 secondes. |
| `,` `.` | Reculer / avancer d’une image (1/64 s). |
| `Space` | Lecture / pause. |
| `M` / `F` | Couper le son / plein écran (un double-clic sur la vidéo bascule aussi en plein écran). |
| `F2` | Ouvrir la fenêtre des paramètres. |
| `Enter` / `Esc` *(page d’invitation)* | Terminé / fermer. |

## Personnalisation

Ouvrez les paramètres avec `F2`. Les sections vont des plus utilisées aux moins utilisées :

- **Hotkeys** : fenêtre dédiée regroupant toutes les actions, avec classement par fonction, réinitialisation individuelle, « Reset all » et gestion des conflits via **Replace**, **Swap** ou **Cancel**. `Esc` peut être attribuée comme n’importe quelle autre touche.
- **Animations** : choisissez un style (pulse, breathe, ripple, heartbeat, orbit, blink), une vitesse ou désactivez les animations. Chaque carte montre un aperçu en direct.
- **Sound effects** : activation/désactivation, volume (également réglable avec la molette) et bouton de test.
- **Local history** : activer ou désactiver, limites (10/20/30/50 entrées par clé, 100/200/300/500 clés), heure au format 12/24 h, sauvegardes JSON et rapports HTML.
- **Footer** : masquer le lien de commentaires, le lien du rapport, la ligne de copyright ou tout le pied de page.
- **Diagnostics** : copier un rapport pour un signalement (voir [Signaler un problème](#signaler-un-problème)).
- **Reset** : un bouton rétablit les paramètres par défaut du son, des raccourcis et des animations. Votre historique est conservé.

## Langues

DemoScope prend en charge 29 langues : bulgare, chinois (simplifié et traditionnel), tchèque, danois, néerlandais, anglais, finnois, français, allemand, grec, hongrois, indonésien, italien, japonais, coréen, norvégien, polonais, portugais (Portugal et Brésil), roumain, russe, espagnol (Espagne et Amérique latine), suédois, thaï, turc, ukrainien et vietnamien. Vous pouvez changer de langue à tout moment avec le sélecteur de la page.

## Signaler un problème

Valve peut modifier les pages VACNet sans préavis. Si quelque chose ne fonctionne plus :

1. Appuyez sur `F2`, ouvrez **Diagnostics**, puis cliquez sur **Copy diagnostics**.
2. Collez le texte dans un nouveau [ticket](https://github.com/ebayybe/DemoScope/issues), avec une capture d’écran si possible.

Le rapport contient la version du script, l’heure, la langue et l’agent utilisateur du navigateur, les éléments de page trouvés, les étapes de configuration ayant échoué et la structure de la page (balises, identifiants et classes uniquement). Il ne contient ni texte de page, ni nom de compte, ni historique. Si la page n’est plus reconnaissable, DemoScope s’y désactive et vous l’indique ; VACNet continue de fonctionner normalement.

## FAQ

<details>
<summary><b>DemoScope indique qu’il s’est désactivé sur cette page. Que s’est-il passé ?</b></summary>

La page VACNet ne correspond plus à la structure attendue par DemoScope ; le script s’est donc retiré au lieu de laisser une interface incomplète. Copiez le diagnostic (voir ci-dessus) et ouvrez un ticket ; une mise à jour arrive généralement rapidement.
</details>

<details>
<summary><b>Le texte des verdicts VACNet est dans une autre langue que DemoScope.</b></summary>

Choisir une langue dans DemoScope demande à VACNet d’utiliser cette langue via le paramètre Steam `?l=`. Si VACNet ne dispose pas de cette traduction, elle utilise sa langue par défaut, tandis que les libellés propres à DemoScope restent dans la langue choisie.
</details>

<details>
<summary><b>DemoScope choisit-il les verdicts à ma place ?</b></summary>

Non. Les préréglages ne cliquent que sur les boutons de verdict que vous avez choisis et vous confirmez toujours l’envoi. Examinez chaque clip vous-même et respectez les règles du programme.
</details>

<details>
<summary><b>L’historique est-il enregistré pour la tâche à une question ?</b></summary>

Pas encore. Pour l’instant, l’historique local n’est enregistré que pour le formulaire classique à quatre questions.
</details>

<details>
<summary><b>Comment rétablir les touches par défaut ?</b></summary>

Utilisez l’icône de réinitialisation à côté d’une touche modifiée, **Reset all** dans la fenêtre Hotkeys ou **Reset** dans les paramètres ; cette dernière option réinitialise aussi le son et les animations.
</details>

## Architecture

DemoScope est une fonction auto-exécutée unique (`@run-at document-start`, `@noframes`). `init()` détermine le type de page, vérifie qu’elle est reconnaissable et initialise les modules ci-dessous. La référence complète des 217 fonctions de premier niveau, paramètres, valeurs de retour et clés de stockage se trouve dans [fr_FUNCTIONS.md](https://github.com/ebayybe/DemoScope/blob/main/docs/fr_FUNCTIONS.md).

<details>
<summary><b>Aperçu des modules</b></summary>

| Module | Rôle | Fonctions principales |
|---|---|---|
| `Localization` | Langue de l’interface, recherche de chaînes, drapeaux, sélecteur de langue, synchronisation de `?l=` avec VACNet | `getActiveLocale`, `tr`, `settingText`, `syncSelectedLanguage`, `installLanguageSelector` |
| `Segment & player` | Lit les limites du clip, adapte Video.js/HTML5 et désactive la boucle native des segments | `parseSegmentBounds`, `createPlayerAdapter`, `waitForPlayerAdapter`, `blockSegmentLoopGuard` |
| `Player enhancements` | Barre de lecture, rappels de touches, accélération, pas image par image, raccourcis | `installCustomControls`, `installPlayerEnhancements` |
| `Hotkeys` | Registre d’actions, associations, détection des conflits et fenêtre Hotkeys | `getBinding`, `findKeyConflict`, `getActionForEvent`, `ensureHotkeysDialog` |
| `Verdict presets` | Tableau des préréglages, état de sélection, application aléatoire | `applyPreset`, `detectActivePreset`, `buildEnhancementBar` |
| `Single-question task` | Libellés, indicateur de verrouillage et touches du nouveau formulaire | `isCheatingMode`, `selectCheatingVerdict`, `updateCheatingLock` |
| `Submit flow` | Confirmation en deux étapes, annulation, `verdict_labels[]`, contrôle same-origin, overlay de chargement | `invokeProceedAction`, `invokeCancelAction`, `submitVerdictForm`, `finishSubmitLoadingWhenReady` |
| `Local history` | Historique par clip et partie, sauvegardes et rapports | `appendReviewHistory`, `importLocalHistory`, `exportCombinedHistoryReports` |
| `Settings & animations` | Fenêtre de paramètres et sous-fenêtres, sons, animations des indicateurs | `ensureSettingsDialog`, `installExtraSettingsSections`, `ensureAnimationsDialog`, `playUiSound` |
| `Invite page` | Page repensée, bouton de fermeture, raccourcis | `installInvitePage`, `installInviteExtras` |
| `Resilience` | Étapes isolées, recherches alternatives, arrêt, diagnostic | `safeStep`, `disableDemoScope`, `buildDiagnosticsReport` |
| `Bootstrap` | Point d’entrée | `init`, `enhanceLayout` |

</details>

## Confidentialité

DemoScope n’envoie aucune télémétrie et ne téléverse ni vos paramètres ni votre historique. Lorsqu’un verdict est envoyé, VACNet le reçoit via le formulaire normal du site. Paramètres et historique restent dans votre navigateur : `localStorage` (clés commençant par `demoscope`) et `sessionStorage`. Utilisez **Settings → Local history → Clear history** pour supprimer l’historique. Le rapport de diagnostic est seulement copié dans le presse-papiers ; vous choisissez de le partager ou non.

## Avertissement

DemoScope est un projet communautaire non officiel, ni affilié à Valve Corporation ni approuvé par celle-ci. Il ne décide jamais d’un verdict à votre place. Examinez chaque clip vous-même et respectez les règles du programme. Utilisation à vos risques.

## Licence

Publié sous licence [GNU GPL v3.0](https://github.com/ebayybe/DemoScope/blob/main/LICENSE).

## Remerciements

- **Idée initiale et interface de base :** [*CS2 VACNet Review — Player & Layout Enhancements*](https://greasyfork.org/ru/scripts/591778-cs2-vacnet-review-player-layout-enhancements) de skinsales / goodvibes (MIT).
- **Concept associé et fork en russe :** [*VACLens RU — CS2 Review Assistant*](https://greasyfork.org/ru/scripts/592414-vaclens-ru-cs2-review-assistant) de authorless (MIT).
- **Refonte de l’architecture, framework réutilisable, prise en charge de 29 langues et préréglages de verdict personnalisés :** ebayybe.
