<div align="center">

[English](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/en_FUNCTIONS.md) · [Български](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/bg_FUNCTIONS.md) · [Magyar](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/hu_FUNCTIONS.md) · [Tiếng Việt](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/vi_FUNCTIONS.md) · [Ελληνικά](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/el_FUNCTIONS.md) · [Dansk](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/da_FUNCTIONS.md) · [Bahasa Indonesia](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/id_FUNCTIONS.md) · [Español (España)](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/es-ES_FUNCTIONS.md) · [Español (Latinoamérica)](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/es-419_FUNCTIONS.md) · [Italiano](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/it_FUNCTIONS.md) · [繁體中文](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/zh-TW_FUNCTIONS.md) · [简体中文](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/zh-CN_FUNCTIONS.md) · [한국어](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/ko_FUNCTIONS.md) · [Deutsch](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/de_FUNCTIONS.md) · [Nederlands](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/nl_FUNCTIONS.md) · [Norsk](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/no_FUNCTIONS.md) · [Polski](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/pl_FUNCTIONS.md) · [Português (Portugal)](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/pt-PT_FUNCTIONS.md) · [Português (Brasil)](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/pt-BR_FUNCTIONS.md) · [Română](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/ro_FUNCTIONS.md) · [Русский](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/ru_FUNCTIONS.md) · [ไทย](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/th_FUNCTIONS.md) · [Türkçe](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/tr_FUNCTIONS.md) · [Українська](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/uk_FUNCTIONS.md) · [Suomi](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/fi_FUNCTIONS.md) · **Français** · [Čeština](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/cs_FUNCTIONS.md) · [Svenska](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/sv_FUNCTIONS.md) · [日本語](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/ja_FUNCTIONS.md)

</div>

# DemoScope — Référence des fonctions

Référence complète des 217 fonctions de niveau supérieur de `DemoScope.user.js` v1.4.0 (nom, paramètres, valeur de retour, rôle). Retour au [README](../README.md).

Conventions : `—` signifie sans paramètres ; `void` signifie que la fonction est appelée pour ses effets de bord.

## Comportement côté utilisateur

| Domaine | Description |
|---|---|
| Pages prises en charge | Améliore la page d’accueil VACNet (/vacnet), les pages d’examen (/vacnet/clips), la page d’invitation (/vacnet/createinvite) et l’état sans clip sur la page d’examen. Les autres pages ne sont pas modifiées. |
| Types de tâche | Détecte le formulaire d’examen proposé par VACNet. Le formulaire classique (assistance à la visée, wallhack, auto-bunny hop, bot) reçoit des préréglages et des combinaisons étendues. La nouvelle tâche à question unique (« Le sujet triche-t-il sans aucun doute raisonnable ? ») utilise une présentation compacte : trois verdicts sur les touches 1 à 3, un indicateur de verrouillage avec le temps de clip restant, sans verdicts rapides ni combinaisons. |
| Langue | Prend en charge les 29 langues de Steam. Le choix manuel enregistré est prioritaire ; sinon, le script suit le paramètre Steam ?l=, puis la langue du navigateur ou de la page. Choisir une langue dans DemoScope transmet aussi le ?l= correspondant à VACNet afin que ses textes suivent ce choix. Le mode automatique synchronise le paramètre Steam avec la langue du navigateur. |
| Pages d’accueil et d’invitation | Repense les deux pages, ajoute le sélecteur de langue commun et permet de masquer le nom du compte avec une icône œil. Sur la page d’accueil, Entrée ou Espace continue si aucun contrôle interactif n’a le focus. Sur la page d’invitation, le lien peut être masqué, affiché et copié ; les conditions d’invitation sont expliquées. Le bouton × ferme la page ; Entrée correspond à « Terminé » et Échap à ×. |
| Examen des clips | Ajoute des préréglages et combinaisons de verdicts, un mode aléatoire désactivé par défaut, une vitesse réglable avec Maj, une navigation limitée au segment, le déplacement image par image et des raccourcis de lecture. Les catégories de verdict ont un bouton ? avec une explication localisée. Les expressions importantes des boutons sont mises en évidence avec les couleurs DemoScope. |
| Raccourcis clavier | Chaque raccourci est une action du registre commun et peut être réattribué dans Paramètres → Raccourcis. Les conflits sont détectés par page (invitation et examen sont indépendants) et indiquent l’action, le groupe et la description utilisant déjà la touche ; vous pouvez remplacer, échanger ou annuler. Chaque action possède un bouton de réinitialisation et les indications affichées suivent les attributions. |
| Envoi | Entrée ou Entrée du pavé numérique (par défaut) active « Continuer ». Dans le formulaire classique, le premier appui arme l’action et le suivant envoie les verdicts. Pour la tâche à question unique, le choix d’un verdict affiche la confirmation VACNet, à valider avec Entrée. Échap (par défaut) appuie sur « Annuler » lorsqu’un verdict attend confirmation, ou désarme le premier appui. Espace n’est pas un raccourci d’envoi. |
| Paramètres | F2 ouvre le dialogue des paramètres par défaut (modifiable dans la fenêtre Raccourcis). Sections : raccourcis, animations, effets sonores et volume, historique local (activation, limites, format 12/24 heures, sauvegardes), visibilité du pied de page, diagnostics et réinitialisation commune du son, des raccourcis et des animations. |
| Animations | Le point à côté de DemoScope peut être animé. Une fenêtre dédiée propose six styles (pulsation, respiration, ondulation, battement, orbite, clignotement), avec aperçu en direct, trois vitesses et un interrupteur. Si le système demande de réduire les animations, elles sont désactivées au démarrage. |
| Historique local | Enregistre les résumés de verdicts dans le stockage localStorage du navigateur ; DemoScope ne les téléverse pas. L’historique peut être désactivé, importé, exporté en JSON ou HTML, fusionné à partir de sauvegardes JSON en un rapport HTML, ou effacé. Limites : 10/20/30/50 entrées par clé et 100/200/300/500 clés au total. La désactivation empêche les nouvelles entrées sans effacer les données existantes. L’historique concerne uniquement le formulaire classique. |
| File d’attente vide | Remplace le message de file vide de VACNet par des indications localisées, la date et l’heure de première apparition enregistrées dans le navigateur, et un sélecteur de langue. La mention de 250 démos par jour est informative et fondée sur le comportement observé de VACNet ; DemoScope n’applique ni ne contourne cette limite. |
| Pied de page | Utilise un pied de page DemoScope localisé. Sur les pages de clips, il peut afficher les liens de retour et de signalement ; les paramètres permettent de masquer chaque lien, la ligne de copyright ou tout le pied de page. |
| Résilience | Chaque étape d’initialisation est isolée pour qu’un échec ne bloque pas les autres. Les éléments importants sont recherchés avec des solutions de repli. Si la page n’est plus reconnue, DemoScope se désactive pour cette page, restaure la mise en page VACNet et affiche un bref avis. Paramètres → Diagnostics permet de copier un rapport (version du script, éléments attendus trouvés, étapes en échec et structure de la page) pour signaler un problème. |

Le script ne modifie pas les règles côté serveur concernant les invitations, le traitement des verdicts ou les limites de visionnage VACNet. L’historique local, la langue et les préférences d’interface restent dans le profil du navigateur.

## Localisation

| Fonction | Paramètres | Retour | Rôle |
|---|---|---|---|
| `getFlagSvg` | `locale: string` | `string` | Balisage SVG en ligne du drapeau d'une langue ; à défaut, renvoie une icône de globe. |
| `getSavedLocale` | — | `string \| null` | Lit la langue enregistrée par l'utilisateur (`demoscopeLanguage`) depuis `localStorage`. |
| `getActiveLocale` | — | `string` | Détermine la langue active : choix enregistré → Steam `?l=` → langue du navigateur/de la page → `en`. |
| `getLanguageBadge` | — | `string` | Nom d'affichage propre à la langue, p. ex. « English version », pour le badge du sélecteur de langue. |
| `getBrowserLocale` | — | `string \| null` | Détecte la première langue de navigateur prise en charge, y compris les variantes régionales. |
| `syncAutomaticLanguage` | — | `boolean` | En mode automatique, synchronise ?l= avec la langue du navigateur et navigue si elles diffèrent. |
| `getRenderedSteamLanguage` | — | `string \| null` | Lit la langue Steam réellement utilisée par VACNet, à partir du paramètre l= dans les URL des feuilles de style et scripts de la page. |
| `syncSelectedLanguage` | — | `boolean` | Après un choix manuel de langue dans DemoScope, recharge une fois la page avec le paramètre ?l= correspondant pour que VACNet affiche aussi ses textes dans cette langue. Évite les rechargements inutiles et les boucles de redirection. Renvoie true si la page a été rechargée. |
| `tr` | `key: string` | `string` | Recherche une chaîne de l'interface pour la langue active (repli : anglais, puis la clé elle-même). |
| `inviteText` | `key: string` | `string` | La même recherche pour la table de chaînes de la page d'invitation. |
| `settingText` | `key: string` | `string` | La même recherche pour la table de chaînes de la boîte de dialogue des réglages. |
| `getPresetLabel` | `name: string` | `string` | Libellé localisé d'un préréglage ; compose des combinaisons comme « Bot + Aim ». |
| `buildLanguageOptions` | `{ activeLocale = getActiveLocale(), selectedLocale = null } = {}` | `string (HTML)` | Balisage des boutons de choix de langue, y compris l'entrée « auto ». |
| `installLanguageSelector` | `root: HTMLElement, onLocaleSelect: Function \| null = null` | `void` | Relie et positionne le sélecteur de langue, enregistre le choix et recharge la page ; un callback facultatif peut gérer la sélection à la place. |
| `queueNoticeText` | `key: string, locale = getQueueNoticeLocale()` | `string` | Recherche un texte localisé pour la file vide ou le pied de page. |

## Effets sonores et boîte de dialogue des réglages

| Fonction | Paramètres | Retour | Rôle |
|---|---|---|---|
| `getSettingsHistorySummary` | — | `string` | Ligne « N entrées · dernière entrée : … » affichée dans la boîte de dialogue des réglages. |
| `soundsEnabled` | — | `boolean` | Indique si les sons de l'interface sont activés (`demoscopeSoundEffectsEnabled`, activés par défaut). |
| `getSoundVolume` | — | `number (0–1)` | Volume sonore enregistré (`demoscopeSoundEffectsVolume`, 0,4 par défaut). |
| `playUiSound` | `kind = "click"` | `void` | Synthétise une courte séquence de tons avec Web Audio (`click`, `select`, `toggle`, `copy`, `confirm`, `preview`, `tick`, `open`, `close`, `error`) ; ne lève jamais d'erreur. |
| `readSettingsHotkey` | — | `string` | `KeyboardEvent.code` enregistré qui ouvre la boîte de dialogue des réglages (`F2` par défaut). |
| `formatHotkey` | `code: string` | `string` | Nom lisible d'une touche (`KeyQ` → `Q`, `Numpad1` → `Num 1`). |
| `getSettingsHotkeyCode` | `event: KeyboardEvent` | `string` | Extrait le code de la touche physique, en ramenant les dispositions non latines à `KeyX` ; `""` si inutilisable. |
| `isReservedSettingsHotkey` | `code: string` | `boolean` | Vrai pour les touches déjà utilisées par DemoScope ou le lecteur (Entrée, Espace, flèches, `M`, `F`, `1`–`5`, …). |
| `ensureSettingsDialog` | — | `HTMLDialogElement` | Crée et relie les réglages : sons et volume, aperçu, raccourci, historique local et limites, format horaire, import/export JSON, export/fusion HTML, effacement de l’historique, visibilité du pied de page et réinitialisation. |
| `openSettingsDialog` | `opener = null` | `void` | Ouvre la boîte de dialogue avec les valeurs actuelles et mémorise l'élément auquel rendre le focus. |
| `installSettingsUi` | — | `void` | Installe l'écouteur de touches global en phase de capture (ouverture/fermeture de la boîte, réaffectation) et les événements sonores. |
| `installUiSoundEvents` | — | `void` | Écouteur de clics délégué qui joue des sons de retour pour les contrôles de DemoScope. |
| `ensureSettingsLayoutStyles` | — | `void` | Insère les styles de la fenêtre des paramètres : sections alignées à gauche et lignes avec pastilles récapitulatives. |
| `refreshSettingsSummaries` | — | `void` | Actualise les pastilles des raccourcis (« Modifiés : N » / « Par défaut ») et des animations (« Style · vitesse » / « Désactivées »). |
| `installExtraSettingsSections` | `settingsDialog: HTMLDialogElement` | `void` | Ajoute les sections Raccourcis et Animations en haut, puis Diagnostic et Réinitialisation en bas. Masque l’ancien réglage du raccourci des paramètres, désormais modifiable dans la fenêtre Raccourcis. |

## Sauvegardes, rapports et limites de l'historique

| Fonction | Paramètres | Retour | Rôle |
|---|---|---|---|
| `exportLocalHistory` | — | `void` | Télécharge tout l'historique sous le nom `demoscope-history-YYYY-MM-DD.json`. |
| `downloadHistoryFile` | `content: string, filename: string, mimeType: string` | `void` | Déclenche le téléchargement d'un fichier via une URL Blob temporaire. |
| `collectHistoryReportRows` | `store: object` | `Array<{vodId, ts, summary, segment}>` | Aplatit et dédoublonne les entrées de l'historique, les plus récentes d'abord. |
| `exportReadableHistory` | — | `void` | Télécharge un rapport HTML autonome et localisé de l'historique. |
| `buildReadableHistoryReport` | `rows: Array, reportTitle: string, summaryNote = ""` | `string (HTML document)` | Construit le balisage HTML échappé du rapport. |
| `setMergeReportStatus` | `statusElement: HTMLElement, message: string, state: string` | `void` | Met à jour la ligne d'état de l'outil de fusion (`progress`, `success`, `warning`). |
| `exportCombinedHistoryReports` | `files: FileList \| File[], statusElement: HTMLElement, button: HTMLButtonElement` | `Promise<void>` | Valide de nombreuses sauvegardes JSON (≤ 5 Mo chacune, ≤ 100 Mo au total), dédoublonne les entrées et télécharge un seul rapport HTML combiné. |
| `isSafeHistoryKey` | `key: string` | `boolean` | Contrôle par liste d'autorisation des clés de l'historique (bloque `__proto__`, `constructor` et les clés mal formées). |
| `importLocalHistory` | `file: File` | `Promise<void>` | Valide une sauvegarde JSON, la fusionne dans l'historique local (en respectant les limites) et actualise l'interface. |
| `readHistoryLimit` | `storageKey: string, allowedValues: number[], defaultValue: number` | `number` | Lit une limite numérique depuis `localStorage`, en n'acceptant que les valeurs autorisées. |
| `getHistoryPerKeyLimit` | — | `number` | Entrées conservées par clé de clip/partie (10/20/30/50, 30 par défaut). |
| `getHistoryTotalLimit` | — | `number` | Nombre total de clés de clip/partie conservées (100/200/300/500, 300 par défaut). |

## Nom du compte et page d'invitation

| Fonction | Paramètres | Retour | Rôle |
|---|---|---|---|
| `accountNameIsHidden` | — | `boolean` | Indique si le nom du compte Steam est actuellement masqué. |
| `installAccountNameControl` | — | `void` | Ajoute un interrupteur en forme d'œil à côté du lien de déconnexion et le garde synchronisé via un `MutationObserver`. |
| `installInvitePage` | — | `boolean` | Refond `/vacnet/createinvite` : mise en page en carte, afficher/masquer et copier le lien (Clipboard API avec repli `execCommand`), liste des conditions, sélecteur de langue. Renvoie `false` si les éléments attendus sont absents. |
| `installInviteExtras` | `card: HTMLElement, doneLink: HTMLElement \| null` | `void` | Ajoute le bouton de fermeture (×) et un écouteur en phase de capture pour les actions inviteDone (par défaut Enter) et inviteClose (par défaut Esc). Ignore les touches si un bouton, lien, champ, dialogue ou la liste des langues a le focus. |
| `refreshInviteKeyLabels` | — | `void` | Actualise le libellé « Terminé » avec son badge de touche et l’infobulle du bouton × selon les raccourcis actuels. |
| `installWelcomePage` | — | `boolean` | Remanie l’accueil, ajoute l’identité visuelle et le sélecteur de langue ; Entrée/Espace continue ; renvoie false si des éléments manquent. |

## Segment du clip et adaptateur du lecteur

| Fonction | Paramètres | Retour | Rôle |
|---|---|---|---|
| `parseSegmentBounds` | — | `{startTime, endTime, duration} \| null` | Extrait `startTime`/`endTime` des scripts en ligne de la page. |
| `formatSegmentTime` | `seconds: number` | `string` | Formate les secondes sous la forme `m:ss.cc`. |
| `getVideoElement` | — | `HTMLVideoElement \| null` | Trouve l'élément `<video>` de la révision. |
| `getVjsPlayer` | — | `Video.js player \| null` | Renvoie le lecteur Video.js de la page s'il est disponible et n'a pas été détruit. |
| `createPlayerAdapter` | — | `adapter \| null` | API unifiée au-dessus de Video.js / vidéo HTML5 : `currentTime`, `paused`, `pause`, `play`, `playbackRate(s)`, `muted`, `on`, `isFullscreen`, `requestFullscreen`, `exitFullscreen`. |
| `waitForPlayerAdapter` | `timeoutMs = 20000` | `Promise<adapter>` | Interroge toutes les 100 ms jusqu'à ce qu'un lecteur existe ; rejette en cas de délai dépassé. |
| `clampSegment` | `time: number, bounds: object` | `number` | Borne un instant aux limites du clip. |
| `segmentProgress` | `time: number, bounds: object` | `number (0–1)` | Position relative à l'intérieur du clip. |
| `installCustomControls` | `player, bounds, refreshDisplay: {current: Function}` | `void` | Ajoute la barre de recherche, l'affichage du temps et l'aide aux touches sous la vidéo. |
| `pauseLayoutMutations` | `run: Function` | `void` | Exécute un rappel pendant que les observateurs de mise en page sont suspendus (évite les boucles de rétroaction). |
| `isShortcutBlocked` | `target: EventTarget` | `boolean` | Renvoie true si le focus se trouve dans un champ, une zone de texte, une liste ou du texte modifiable. |
| `isPlayerShortcutBlocked` | `target: EventTarget` | `boolean` | Comme isShortcutBlocked, mais autorise les boutons radio de verdict, car le focus reste sur l’un d’eux après un clic. |
| `formatShiftSpeedLabel` | `rate: number` | `string` | Libellé d'une option de vitesse. |
| `buildShiftSpeedSelectOptions` | `selectedRate: number` | `string (HTML)` | Liste d'`<option>` pour le sélecteur de vitesse (0,5–4×). |
| `readStoredShiftSpeed` | — | `number` | Vitesse Shift enregistrée (2× par défaut). |
| `readStoredVerdictRandomizer` | — | `boolean` | État enregistré du randomiseur de verdicts (désactivé par défaut). |
| `installPlayerEnhancements` | `player: adapter, bounds: object` | `void` | Câble la gestion de la vitesse de lecture, le bornage/la pause du segment, les aides pour la recherche/l'avance image par image/la mise en sourdine/le plein écran et les raccourcis clavier globaux (`1`–`5`, flèches, `,` `.`, Espace, `M`, `F`, Shift). Fermetures internes : `applyPlayerRate`, `setShiftSpeed`, `setShiftSpeedActive`, `seekBy`, `stepFrame`, `togglePlay`, `toggleMute`, `toggleFullscreen`, aides de la boucle de dessin. |

## Verdicts prédéfinis

| Fonction | Paramètres | Retour | Rôle |
|---|---|---|---|
| `applyDefaultVerdicts` | `root = document` | `void` | Sélectionne « skip » dans chaque groupe de verdict sans sélection. |
| `getSelectedVerdictState` | — | `object` | Valeur actuelle (`positive` / `negative` / `skip` / `null`) de `aimassist`, `wallhack`, `autobhop`, `bot`. |
| `detectActivePreset` | — | `string \| null` | Nom du préréglage correspondant à la sélection actuelle. |
| `syncPresetButtons` | — | `string \| null` | Met à jour `aria-pressed` sur les boutons de préréglage et le badge du préréglage étendu. |
| `applyPreset` | `name: string, { announce = false }` | `Promise<boolean>` | Clique sur les entrées radio d'un préréglage ; avec le randomiseur activé, mélange l'ordre et attend 200–600 ms entre les clics. Désactive les boutons de préréglage pendant l'exécution. |
| `readAdvancedPresetsOpen` | — | `boolean` | Indique si le tiroir des préréglages étendus a été laissé ouvert. |
| `normalizeVerdictLabels` | `root = document` | `void` | Retire le balisage de surbrillance des libellés de verdict. |
| `applyVerdictSectionTitles` | `root = document` | `void` | Ajoute des titres localisés au-dessus de chaque groupe de verdict. |
| `ensureVerdictHelp` | `block: HTMLElement, titleEl: HTMLElement, title: string, field: string` | `void` | Crée le bouton « ? » et l’infobulle d’explication d’un groupe de verdicts avec le texte localisé de DemoScope ; le texte de VACNet n’est qu’un recours. |
| `closeVerdictHelp` | `except = null` | `void` | Ferme toutes les infobulles ouvertes sauf celle indiquée. |
| `installVerdictHelpHandlers` | — | `void` | Installe une seule fois la gestion déléguée des clics, des clics à l’extérieur et de la touche Esc pour les infobulles. |

## Notifications, pied de page et chargement à l'envoi

| Fonction | Paramètres | Retour | Rôle |
|---|---|---|---|
| `hideSiteFooter` | — | `void` | Masque le pied de page du site. |
| `showToast` | `message: string, type = "info", duration = 1800` | `void` | Affiche une notification non bloquante ARIA-live. |
| `markSubmitPending` | — | `void` | Enregistre dans `sessionStorage` l'horodatage de l'envoi et l'id du clip actuel. |
| `isSubmitPending` | — | `boolean` | Indique si un envoi attend le clip suivant. |
| `clearSubmitPending` | — | `void` | Efface les marqueurs d'envoi en attente. |
| `showSubmitLoadingOverlay` | `message = tr("nextClip")` | `void` | Affiche la couche de chargement plein page. |
| `hideSubmitLoadingOverlay` | — | `void` | Masque la couche et efface l'état d'attente. |
| `bootSubmitLoadingIfPending` | — | `void` | Réaffiche la couche au chargement de la page si un envoi est en attente. |
| `isReviewPageReady` | `prevVod: string, startedAt: number` | `boolean` | Vrai quand l'interface et les médias du clip suivant sont prêts. |
| `finishSubmitLoadingWhenReady` | — | `Promise<void>` | Attend jusqu'à 30 s le clip suivant, puis masque la couche (notification d'erreur en cas de délai dépassé). |

## Stockage de l'historique local

| Fonction | Paramètres | Retour | Rôle |
|---|---|---|---|
| `extractVodId` | — | `string` | Déduit l'id du clip/de la partie à partir de l'URL de la vidéo. |
| `getGameKey` | — | `string` | Clé d'historique de la partie (`game::<id>`). |
| `getClipKey` | `bounds: object` | `string` | Clé d'historique d'un segment (`<id>:<start>:<end>`). |
| `normalizeHistoryEntry` | `entry: any` | `{ts, summary, segment} \| null` | Valide et nettoie une entrée de l'historique. |
| `readHistoryEntries` | `store: object, key: string` | `Array` | Entrées normalisées d'une clé. |
| `getGameHistoryEntries` | `store: object` | `Array` | Entrées de la partie actuelle (prend en charge une ancienne clé). |
| `getClipHistoryEntries` | `store: object, bounds: object` | `Array` | Entrées du segment actuel. |
| `formatClipId` | `vodId: string` | `string` | Id numérique court d'affichage (`#0000000`), obtenu par hachage de l'id du clip. |
| `formatRelativeTime` | `timestamp: number` | `string` | Temps relatif localisé (`Intl.RelativeTimeFormat`). |
| `readClipHistoryStore` | — | `object` | Charge l'objet d'historique depuis `localStorage` (`{}` en cas d'erreur). |
| `pruneHistoryStore` | `store: object` | `void` | Applique les limites par clé et globales (les clés les plus anciennes sont supprimées en premier). |
| `writeClipHistoryStore` | `store: object` | `boolean` | Élague et enregistre ; `false` en cas d'erreur de quota ou de stockage. |
| `summarizeCurrentVerdict` | — | `string` | Nom du préréglage de la sélection actuelle, ou `mixed`. |
| `formatSummaryLabel` | `summary: string` | `string` | Libellé localisé d'un résumé d'historique. |
| `formatClockTime` | `seconds: number` | `string` | Format d'horloge `m:ss` (ou `x.xs`). |
| `formatHumanSegment` | `bounds: object` | `string` | Plage de segment lisible. |
| `formatGameLabel` | — | `string` | Libellé localisé de la partie actuelle. |
| `historyEntryKey` | `entry: object` | `string` | Chaîne d'identité servant au dédoublonnage. |
| `formatPriorStat` | `count: number, label: string` | `string` | Ligne « libellé : N » du panneau d'historique. |
| `buildHistoryListItems` | `clipEntries: Array, gameEntries: Array, currentSegment: string` | `Array` | Fusionne les entrées de clip/partie en éléments à afficher. |
| `renderHistoryItem` | `item: object` | `string (HTML)` | Balisage d'une ligne d'historique. |
| `escapeHtml` | `value: any` | `string` | Échappe `& < > " '`. |
| `buildClipHistoryPanel` | `bounds, gameEntries, clipEntries` | `string (HTML)` | Balisage du panneau d'historique, y compris le bouton des règles de révision. |
| `ensureClipHistoryPanel` | — | `void` | Crée le conteneur du panneau s'il manque. |
| `ensureReviewRulesDialog` | — | `void` | Crée la boîte de dialogue des règles de révision et relie ses boutons d'ouverture/fermeture. |
| `installLocalHistoryButton` | `panel: HTMLElement` | `void` | Relie le bouton « historique local » (fait défiler jusqu'à la liste ou affiche une notification si vide). |
| `positionClipHistoryPanel` | — | `void` | Maintient le panneau en premier dans `.verdicts-container`. |
| `renderClipHistory` | `bounds: object \| null` | `void` | Redessine le panneau d'historique pour le clip actuel. |
| `appendReviewHistory` | `bounds: object \| null` | `void` | Ajoute le résumé du verdict actuel à l'historique de la partie et du clip. |
| `isLocalHistoryEnabled` | — | `boolean` | Lit si l’historique local est activé ; activé par défaut. |
| `readTimeFormat` | — | `string` | Lit le format horaire préféré : automatique, 12 ou 24 heures. |
| `formatQueueFirstSeen` | `timestamp: number, locale = getActiveLocale()` | `string` | Formate l’heure de première détection selon la langue et le format horaire. |
| `getQueueNoticeLocale` | — | `string` | Renvoie la langue active de l’avis de file vide. |
| `migrateEmptyQueueLanguage` | — | `boolean` | Transfère l’ancien choix de langue vers le réglage commun et synchronise l’URL. |
| `updateEmptyQueueTimestamp` | — | `void` | Actualise l’heure de première détection affichée. |

## Flux d'envoi

| Fonction | Paramètres | Retour | Rôle |
|---|---|---|---|
| `isLabelingMode` | — | `boolean` | Vrai sur les pages qui affichent les quatre groupes de verdict. |
| `getProceedButton` | — | `HTMLButtonElement \| null` | Le bouton d'envoi natif, s'il est visible et activé. |
| `recordProceedHistoryIfLabeling` | — | `void` | Enregistre l'historique une fois par envoi (protégé contre la réentrance). |
| `resetProceedArmed` | — | `void` | Désarme l'envoi en deux étapes. |
| `refreshProceedButtonLabel` | — | `void` | Met à jour le libellé du bouton, l'aide `Enter` et le style de l'état armé. |
| `verdictLabelForField` | `field: string, selected: string` | `string \| null` | Associe une sélection à `guilty_*` / `innocent_*` / `skip_*`. |
| `prepareVerdictFormForSubmit` | — | `boolean` | Construit les champs cachés `verdict_labels[]` ; affiche une notification d'erreur et renvoie `false` si un groupe n'a pas de sélection. |
| `isSafeSubmitTarget` | `form: HTMLFormElement` | `boolean` | N'autorise que les actions de formulaire HTTPS de même origine. |
| `restoreSubmitUi` | — | `void` | Restaure les boutons après un envoi échoué. |
| `submitVerdictForm` | `{ recordHistory = false } = {}` | `boolean` | Exécute le contrôle de sécurité, affiche la couche de chargement et envoie le formulaire. |
| `submitVerdictsDirect` | — | `boolean` | Prépare les libellés et envoie. |
| `invokeProceedAction` | — | `boolean` | Gestionnaire d'Entrée/clic : la première pression arme, la seconde envoie. |
| `installProceedShortcut` | — | `void` | Écouteur en phase de capture pour `Enter`/`NumpadEnter`. |
| `invokeCancelAction` | — | `boolean` | Désarme la première étape de l’envoi en deux temps ou clique sur le bouton « Annuler » visible ; renvoie false s’il n’y a rien à annuler. |
| `refreshCancelButtonLabel` | — | `void` | Ajoute ou actualise le badge de touche du bouton « Annuler ». |
| `hookProceedButton` | — | `void` | Remplace le comportement au clic du bouton d'envoi natif. |
| `installVerdictChangeReset` | — | `void` | Désarme l'envoi et resynchronise les préréglages lorsqu'un verdict change. |
| `scheduleProceedFooterFix` | — | `void` | Appel différé (`requestAnimationFrame`) de `fixProceedFooter`. |
| `scheduleVerdictLabelsFix` | — | `void` | Renormalisation différée des libellés/titres/valeurs par défaut. |

## Registre et attribution des raccourcis

| Action | Touche par défaut | Groupe | Fonction |
|---|---|---|---|
| `playPause` | `Space` | Lecture | Met le clip en pause ou reprend sa lecture. |
| `mute` | `M` | Lecture | Coupe ou réactive le son. |
| `fullscreen` | `F` | Lecture | Active ou quitte le mode plein écran. |
| `seekBack` / `seekForward` | `←` / `→` | Navigation | Recule ou avance de 5 secondes. |
| `frameBack` / `frameForward` | `,` / `.` | Navigation | Avance ou recule la lecture image par image. |
| `speedBoost` | `Shift` | Navigation | Accélère la lecture tant que la touche est maintenue ; seule action pouvant utiliser Shift. |
| `quick1` … `quick5` | `1` … `5` | Verdicts | Formulaire classique : préréglages 1 à 5. Tâche à question unique : Triche / Pas sûr / Aucune triche détectée (1 à 3). |
| `proceed` | `Enter` | Envoi | Confirme le verdict ou arme puis envoie le formulaire classique. |
| `cancel` | `Esc` | Envoi | Appuie sur « Annuler » ou désarme la première pression de Enter. |
| `inviteDone` | `Enter` | Invitation | Quitte la page d’invitation, comme l’action « Terminé ». |
| `inviteClose` | `Esc` | Invitation | A la même fonction que le bouton ×. |
| `settings` | `F2` | Interface | Ouvre ou ferme la fenêtre des paramètres. |

Les attributions sont stockées sous forme de valeurs KeyboardEvent.code dans demoscopeKeybindings (seules les modifications sont enregistrées ; la touche des paramètres a sa propre entrée). Les modificateurs gauche/droite comptent comme une touche et le pavé numérique reprend les touches principales. Touches non attribuables : Tab, Ctrl, Alt, Meta, Verr. Maj, Menu, F5, F11, F12. Les conflits sont limités aux périmètres review, invite et global (la touche globale des paramètres entre en conflit avec toutes les autres).

| Fonction | Paramètres | Retour | Rôle |
|---|---|---|---|
| `fmt` | `template: string, vars = {}` | `string` | Remplace les marqueurs {name} d’un modèle localisé. |
| `isModalOpen` | — | `boolean` | Vaut true tant qu’un élément dialog est ouvert ; les raccourcis de la page restent alors inactifs. |
| `normalizeKeyCode` | `code: string` | `string` | Regroupe les modificateurs gauche et droit sous une même touche et associe les chiffres du pavé numérique et NumpadEnter à leurs équivalents du clavier principal. |
| `formatKeyLabel` | `code: string` | `string` | Nom affiché d’une touche (ArrowLeft → ←, KeyM → M, Escape → Esc). |
| `loadKeyOverrides` | — | `object` | Lit et valide les raccourcis enregistrés (mis en cache ; renvoie un objet vide en cas d’erreur). |
| `saveKeyOverrides` | `overrides: object` | `void` | Enregistre les raccourcis ou supprime l’entrée lorsque toutes les valeurs sont celles par défaut. |
| `getBinding` | `id: string` | `string` | Touche actuellement attribuée à une action ; chaîne vide si elle n’est pas attribuée. |
| `setBinding` | `id: string, code: string` | `void` | Enregistre une touche pour une action (un code vide supprime son attribution) ; les valeurs par défaut ne sont pas enregistrées. |
| `resetAllBindings` | — | `void` | Rétablit toutes les attributions, y compris la touche des paramètres, à leur valeur par défaut. |
| `findKeyConflict` | `id: string, code: string` | `object \| null` | Recherche un conflit avec une touche déjà attribuée dans le périmètre concerné. |
| `getActionForEvent` | `event: KeyboardEvent, scope = currentKeyScope()` | `string \| null` | Détermine l’action associée à un événement clavier. |
| `keyScopeOf` | `id: string` | `string` | Périmètre d’une action : review, invite ou global. |
| `keyScopesOverlap` | `a: string, b: string` | `boolean` | Vaut true lorsque deux périmètres peuvent entrer en conflit (même périmètre ou présence de global). |
| `currentKeyScope` | — | `string` | invite sur la page d’invitation, review dans les autres cas. |
| `validateKeyForAction` | `id: string, code: string` | `string` | Renvoie une chaîne vide si la touche peut être attribuée, reserved pour une touche navigateur/navigation, ou shift si Shift est choisi pour une action qui ne fonctionne pas au maintien. |
| `quickRangeLabel` | `count: number` | `string` | Libellé des touches de verdict rapide (1–5 si elles sont inchangées, sinon les touches attribuées). |
| `buildHintsInnerMarkup` | — | `string (HTML)` | Construit les indications de raccourcis affichées sous la vidéo à partir des attributions actuelles. |
| `refreshKeyLabels` | — | `void` | Actualise tous les libellés de touches de la page : indications, badges de préréglage et verdict, Continuer/Annuler/invitation et résumés des paramètres. |
| `ensureDemoscopeDialogStyles` | — | `void` | Insère le style commun des fenêtres Raccourcis et Animations. |
| `hkActionName` | `id: string` | `string` | Nom localisé de l’action. |
| `hkGroupName` | `group: string` | `string` | Nom localisé du groupe. |
| `hkActionDescription` | `id: string` | `string` | Description localisée de l’action ; les verdicts rapides sont décrits pour les deux types de tâche. |
| `hkSetMessage` | `text: string, warn = false` | `void` | Définit la ligne d’état de la fenêtre Raccourcis. |
| `hkCancelCapture` | — | `void` | Quitte le mode de capture de touche. |
| `hkRowMarkup` | `action: object` | `string (HTML)` | Balisage d’une ligne d’action, avec le panneau de conflit lorsqu’il y en a un. |
| `renderHotkeys` | — | `void` | Redessine toute la fenêtre en conservant la position de défilement. |
| `hkCommit` | `actionId: string, code: string, mode = "replace"` | `void` | Attribue une touche ; replace libère l’autre action, swap échange les touches. |
| `hkRequestAssign` | `actionId: string, code: string` | `void` | Attribue une touche directement ou ouvre le panneau de conflit (Remplacer / Échanger / Annuler) si elle est déjà utilisée. |
| `ensureHotkeysDialog` | — | `HTMLDialogElement` | Crée la fenêtre Raccourcis et son écouteur clavier en phase de capture (Esc peut être attribuée ; elle ne ferme pas la fenêtre pendant la capture). |
| `openHotkeysDialog` | — | `void` | Ouvre la fenêtre Raccourcis. |

## Animations

Six styles du point indicateur (pulse, breathe, ripple, heartbeat, orbit, blink), trois vitesses (0,6× / 1× / 1,7×) et un interrupteur, enregistrés dans demoscopeAnimStyle, demoscopeAnimSpeed et demoscopeAnimEnabled. Le style actif est défini par data-ds-anim sur html ; la feuille de style anime le point réel et les aperçus.

| Fonction | Paramètres | Retour | Rôle |
|---|---|---|---|
| `readStorage` | `key: string` | `string \| null` | Lecture securisee `localStorage` read. |
| `writeStorage` | `key: string, value: string \| null` | `void` | Ecriture securisee `localStorage` write (`null` supprime la cle). |
| `animEnabled` | — | `boolean` | État activé/désactivé enregistré ; désactivé par défaut si le système demande de réduire les animations. |
| `animStyle` | — | `string` | Style enregistré (pulse par défaut). |
| `animSpeedKey` | — | `string` | Vitesse enregistrée (slow / normal / fast ; normal par défaut). |
| `ensureAnimationStyles` | — | `void` | Insère les images clés et règles communes au point animé et aux points d’aperçu. |
| `applyAnimationSettings` | — | `void` | Applique le style, la vitesse et l’état à l’élément html, puis actualise le résumé des paramètres. |
| `ensureAnimationsDialog` | — | `HTMLDialogElement` | Crée la fenêtre Animations : interrupteur, vitesse, cartes de styles avec aperçu en direct et réinitialisation. |
| `openAnimationsDialog` | — | `void` | Ouvre la fenêtre Animations. |
| `ensureUiPolishStyles` | — | `void` | Ajoute des barres de défilement sombres et fines et color-scheme: dark aux fenêtres et à la liste des verdicts (Chromium afficherait sinon une barre claire). |

## Tâche à question unique

| Fonction | Paramètres | Retour | Rôle |
|---|---|---|---|
| `isCheatingMode` | — | `boolean` | Vaut true lorsque la page présente le formulaire à question unique (#verdictbuttons_cheating). |
| `selectCheatingVerdict` | `kind: string` | `void` | Clique sur le bouton radio Triche / Pas sûr / Aucune triche détectée (positive / skip / negative). Si l’option est encore verrouillée, joue un son d’erreur et fait trembler la carte de verrouillage. |
| `localizeCheatingVerdicts` | — | `void` | Réécrit les trois libellés dans la langue de DemoScope et dessine les badges de touches en CSS afin que la confirmation VACNet n’affiche pas le chiffre du raccourci. Prépare aussi la carte de verrouillage. |
| `updateCheatingLock` | — | `void` | Actualise la carte de verrouillage (« les deux autres verdicts seront disponibles à la fin du clip · m:ss restantes ») et sa barre de progression. La masque lorsque les options sont débloquées ou qu’un verdict est choisi. |
| `startCheatingLockWatcher` | — | `void` | Démarre le minuteur de 250 ms qui appelle updateCheatingLock. |

## Résilience et diagnostics

| Fonction | Paramètres | Retour | Rôle |
|---|---|---|---|
| `recordFailure` | `step: string, error: any` | `void` | Consigne une étape en échec (dans une liste limitée) pour le rapport de diagnostic. |
| `safeStep` | `step: string, fn: Function, fallback?: any` | `any` | Exécute une étape de configuration ; en cas d’erreur, la consigne et renvoie la valeur de secours pour permettre aux étapes suivantes de continuer. |
| `getVideoContainer` | — | `HTMLElement \| null` | Trouve le conteneur vidéo ou, à défaut, le parent du lecteur ou de l’élément video. |
| `getVerdictContainer` | — | `HTMLElement \| null` | Trouve le conteneur des verdicts ou, à défaut, le parent du premier bloc de verdict. |
| `getSubmitArea` | — | `HTMLElement \| null` | Trouve la zone d’envoi/de confirmation (#submitbuttons, .submitbuttons ou le parent du bouton d’envoi). |
| `hasVerdictForm` | — | `boolean` | Vaut true lorsqu’au moins un bouton radio de verdict est présent. |
| `removeEnhancements` | — | `void` | Retire les panneaux, classes et modifications du pied de page de DemoScope, puis restaure le pied de page VACNet. |
| `disableDemoScope` | `reason: string` | `void` | Désactive DemoScope sur cette page : annule ses modifications, conserve uniquement la fenêtre des paramètres et affiche un avis une fois par motif et par session. |
| `isOwnNode` | `el: Element` | `boolean` | Vaut true pour les éléments créés par DemoScope (exclus du rapport de structure). |
| `elementSignature` | `el: Element` | `string` | Signature tag#id.class[…] utilisée dans le rapport de structure ; elle ne contient aucun texte. |
| `skeletonOf` | `root: Element, maxDepth = 7, maxNodes = 170` | `string` | Arborescence compacte et indentée des balises, identifiants et classes (les éléments frères identiques sont regroupés sous ×N). |
| `captureOriginalSkeleton` | — | `void` | Enregistre la structure de la page avant toute modification par DemoScope. |
| `buildDiagnosticsReport` | — | `string` | Génère le rapport : version, page, langue et navigateur, type de tâche, vérification de 22 éléments (ok / MISSING), étapes en échec et structure avant/après DemoScope. Aucun texte de page ni donnée de compte. |
| `fallbackCopyText` | `text: string` | `boolean` | Copie le texte dans une zone temporaire lorsque l’API Clipboard n’est pas disponible. |
| `copyDiagnostics` | `statusEl: HTMLElement, textarea: HTMLTextAreaElement` | `Promise<void>` | Copie le rapport ; en cas d’échec, affiche le texte dans une zone sélectionnable. |

## Mise en page et démarrage

| Fonction | Paramètres | Retour | Rôle |
|---|---|---|---|
| `buildShiftSpeedBar` | — | `HTMLElement` | Construit la barre du sélecteur de vitesse Shift. |
| `buildPresetButtonMarkup` | `name: string, shortcut = "", labelOverride = ""` | `string (HTML)` | Balisage d'un bouton de préréglage. |
| `buildAdvancedPresetGroupsMarkup` | — | `string (HTML)` | Balisage des groupes de préréglages étendus. |
| `buildEnhancementBar` | — | `HTMLElement` | Construit la barre de verdict rapide : préréglages, interrupteur du randomiseur, tiroir étendu. |
| `positionShiftSpeedBar` | — | `void` | Maintient la barre de vitesse avant la liste des verdicts. |
| `positionEnhancementBar` | — | `void` | Maintient la barre de préréglages avant les boutons d'envoi. |
| `fixProceedFooter` | — | `void` | Réorganise le pied de page, les barres et le bouton d'envoi. |
| `enhanceLayout` | — | `void` | Applique tous les changements de mise en page et installe l'interface des réglages. |
| `ensureReviewStructure` | — | `void` | Normalise le balisage VACNet : place les blocs de verdict dans .verdicts-container-inner, déplace #submitbuttons dans le conteneur et reporte le compteur de clips dans la pastille d’en-tête. Compatible avec l’ancien et le nouveau balisage. |
| `watchProceedFooter` | — | `void` | Observe `.verdicts-container` et planifie les corrections du pied de page. |
| `watchVerdictLabels` | — | `void` | Observe les libellés de verdict et planifie la renormalisation. |
| `readFooterPreference` | `storageKey: string` | `boolean` | Lit la préférence de visibilité du pied de page dans localStorage. |
| `saveFooterPreference` | `storageKey: string, hidden: boolean` | `void` | Enregistre la préférence de visibilité du pied de page. |
| `applyFooterPreferences` | `footer: HTMLElement \| null = document.querySelector(".demoscope-custom-footer")` | `void` | `void` |
| `installDemoScopeFooter` | `withClipLinks: boolean, locale = getActiveLocale(), showFeedback = true` | `HTMLElement` | Crée ou met à jour le pied localisé, avec liens facultatifs, puis applique les préférences. |
| `installEmptyQueueNotice` | — | `boolean` | Remplace le message de file vide par des explications localisées, l’heure, le sélecteur et le pied. |
| `init` | — | `Promise<void>` | Point d'entrée : contrôle du nom du compte → page d'invitation ou de révision → mise en page, observateurs, raccourcis, améliorations du lecteur. |

installWelcomePage et installInvitePage renvoient false si des éléments VACNet requis sont absents. installEmptyQueueNotice renvoie false si la page affiche autre chose qu’une file vide.

### Éléments non répertoriés ci-dessus

* **blockSegmentLoopGuard** (IIFE, exécutée au chargement) : remplace par une fonction inactive le minuteur natif de segment de 100 ms du site ; les commandes DemoScope gèrent le segment.
* **Constantes et tables :** SUPPORTED_LOCALES, FLAG_SVG, UI_TEXT_ROWS, INVITE_TEXT_ROWS, SETTINGS_TEXT_ROWS, PRESETS, PRESET_KEYS, PRESET_TONES, ADVANCED_PRESET_GROUPS, SHIFT_SPEEDS, FRAME_STEP et ARROW_JUMP_SEC (21 définitions PRESETS) ; depuis v1.0.0 : KEY_ACTIONS, KEY_GROUPS, KEY_ACTION_BY_ID, KEY_ACTION_SCOPE, RESERVED_KEY_CODES, CHEATING_KEYS, VERDICT_SECTION_TITLES, VERDICT_SECTION_HELP, ANIM_STYLES et ANIM_SPEEDS.
* **État du module :** diag (étapes en échec, motif de désactivation et structure initiale de la page), hkState (état de la fenêtre Raccourcis) et constante SCRIPT_VERSION utilisée dans le rapport de diagnostic.
* **Textes :** tous les textes visibles sont stockés dans les tables localisées ci-dessus ; les fenêtres ajoutées entre v1.2.0 et v1.4.0 sont traduites dans les 29 langues.

## Clés de stockage

| Clé | Stockage | Rôle |
|---|---|---|
| `demoscopeLanguage`, `demoscopeLanguageAuto` | `localStorage` | Langue choisie / mode automatique. |
| `demoscopeKeybindings` | `localStorage` | Raccourcis différents des valeurs par défaut (JSON). |
| `demoscopeSettingsHotkey` | `localStorage` | Touche qui ouvre la fenêtre des paramètres (`none` si supprimée). |
| `demoscopeAnimEnabled`, `demoscopeAnimStyle`, `demoscopeAnimSpeed` | `localStorage` | Paramètres des animations du point. |
| `demoscopeSoundEffectsEnabled`, `demoscopeSoundEffectsVolume` | `localStorage` | Paramètres sonores. |
| `demoscopeClipHistory` et les paramètres de limite et de format | `localStorage` | Historique local des examens et ses paramètres. |
| `demoscopeSubmitPending`, `demoscopeSubmitPrevVod`, `demoscopeLangSyncTried`, `demoscopeDisabledNotice` | `sessionStorage` | État de chargement après envoi, protection de la synchronisation des langues et avis de désactivation ponctuel. |


