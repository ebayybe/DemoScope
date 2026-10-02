<div align="center">

[English](../FUNCTIONS.md) · [Български](bg_FUNCTIONS.md) · [Magyar](hu_FUNCTIONS.md) · [Tiếng Việt](vi_FUNCTIONS.md) · [Ελληνικά](el_FUNCTIONS.md) · [Dansk](da_FUNCTIONS.md) · [Bahasa Indonesia](id_FUNCTIONS.md) · [Español (España)](es-ES_FUNCTIONS.md) · [Español (Latinoamérica)](es-419_FUNCTIONS.md) · [Italiano](it_FUNCTIONS.md) · [繁體中文](zh-TW_FUNCTIONS.md) · [简体中文](zh-CN_FUNCTIONS.md) · [한국어](ko_FUNCTIONS.md) · [Deutsch](de_FUNCTIONS.md) · [Nederlands](nl_FUNCTIONS.md) · [Norsk](no_FUNCTIONS.md) · [Polski](pl_FUNCTIONS.md) · [Português (Portugal)](pt-PT_FUNCTIONS.md) · [Português (Brasil)](pt-BR_FUNCTIONS.md) · [Română](ro_FUNCTIONS.md) · [Русский](ru_FUNCTIONS.md) · [ไทย](th_FUNCTIONS.md) · [Türkçe](tr_FUNCTIONS.md) · [Українська](uk_FUNCTIONS.md) · [Suomi](fi_FUNCTIONS.md) · **Français** · [Čeština](cs_FUNCTIONS.md) · [Svenska](sv_FUNCTIONS.md) · [日本語](ja_FUNCTIONS.md)

</div>

# DemoScope — Référence des fonctions

Référence complète des 128 fonctions de niveau supérieur de `DemoScope.user.js` v1.0.0 (nom, paramètres, valeur de retour, rôle). Retour au [README](../../README/fr_README.md).

Conventions : `—` signifie sans paramètres ; `void` signifie que la fonction est appelée pour ses effets de bord.

## Localisation

| Fonction | Paramètres | Retourne | Rôle |
|---|---|---|---|
| `getFlagSvg` | `locale: string` | `string` | Balisage SVG en ligne du drapeau d'une langue ; à défaut, renvoie une icône de globe. |
| `getSavedLocale` | — | `string \| null` | Lit la langue enregistrée par l'utilisateur (`demoscopeLanguage`) depuis `localStorage`. |
| `getActiveLocale` | — | `string` | Détermine la langue active : choix enregistré → Steam `?l=` → langue du navigateur/de la page → `en`. |
| `getLanguageBadge` | — | `string` | Nom d'affichage propre à la langue, p. ex. « English version », pour le badge du sélecteur de langue. |
| `tr` | `key: string` | `string` | Recherche une chaîne de l'interface pour la langue active (repli : anglais, puis la clé elle-même). |
| `inviteText` | `key: string` | `string` | La même recherche pour la table de chaînes de la page d'invitation. |
| `settingText` | `key: string` | `string` | La même recherche pour la table de chaînes de la boîte de dialogue des réglages. |
| `getPresetLabel` | `name: string` | `string` | Libellé localisé d'un préréglage ; compose des combinaisons comme « Bot + Aim ». |
| `buildLanguageOptions` | — | `string (HTML)` | Balisage des boutons de choix de langue, y compris l'entrée « auto ». |
| `installLanguageSelector` | `root: HTMLElement` | `void` | Relie le sélecteur de langue en popover, le positionne, enregistre le choix et recharge la page. |

## Effets sonores et boîte de dialogue des réglages

| Fonction | Paramètres | Retourne | Rôle |
|---|---|---|---|
| `getSettingsHistorySummary` | — | `string` | Ligne « N entrées · dernière entrée : … » affichée dans la boîte de dialogue des réglages. |
| `soundsEnabled` | — | `boolean` | Indique si les sons de l'interface sont activés (`demoscopeSoundEffectsEnabled`, activés par défaut). |
| `getSoundVolume` | — | `number (0–1)` | Volume sonore enregistré (`demoscopeSoundEffectsVolume`, 0,4 par défaut). |
| `playUiSound` | `kind = "click"` | `void` | Synthétise une courte séquence de tons avec Web Audio (`click`, `select`, `toggle`, `copy`, `confirm`, `preview`, `tick`, `open`, `close`, `error`) ; ne lève jamais d'erreur. |
| `readSettingsHotkey` | — | `string` | `KeyboardEvent.code` enregistré qui ouvre la boîte de dialogue des réglages (`F2` par défaut). |
| `formatHotkey` | `code: string` | `string` | Nom lisible d'une touche (`KeyQ` → `Q`, `Numpad1` → `Num 1`). |
| `getSettingsHotkeyCode` | `event: KeyboardEvent` | `string` | Extrait le code de la touche physique, en ramenant les dispositions non latines à `KeyX` ; `""` si inutilisable. |
| `isReservedSettingsHotkey` | `code: string` | `boolean` | Vrai pour les touches déjà utilisées par DemoScope ou le lecteur (Entrée, Espace, flèches, `M`, `F`, `1`–`5`, …). |
| `ensureSettingsDialog` | — | `HTMLDialogElement` | Crée (une seule fois) et câble la boîte de dialogue des réglages : son, volume, capture du raccourci, limites de l'historique, export/import/rapport/fusion/effacement, réinitialisation. |
| `openSettingsDialog` | `opener = null` | `void` | Ouvre la boîte de dialogue avec les valeurs actuelles et mémorise l'élément auquel rendre le focus. |
| `installSettingsUi` | — | `void` | Installe l'écouteur de touches global en phase de capture (ouverture/fermeture de la boîte, réaffectation) et les événements sonores. |
| `installUiSoundEvents` | — | `void` | Écouteur de clics délégué qui joue des sons de retour pour les contrôles de DemoScope. |

## Sauvegardes, rapports et limites de l'historique

| Fonction | Paramètres | Retourne | Rôle |
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
| `readAdvancedPresetsOpen` | — | `boolean` | Indique si le tiroir des préréglages étendus a été laissé ouvert. |

## Nom du compte et page d'invitation

| Fonction | Paramètres | Retourne | Rôle |
|---|---|---|---|
| `accountNameIsHidden` | — | `boolean` | Indique si le nom du compte Steam est actuellement masqué. |
| `installAccountNameControl` | — | `void` | Ajoute un interrupteur en forme d'œil à côté du lien de déconnexion et le garde synchronisé via un `MutationObserver`. |
| `installInvitePage` | — | `boolean` | Refond `/vacnet/createinvite` : mise en page en carte, afficher/masquer et copier le lien (Clipboard API avec repli `execCommand`), liste des conditions, sélecteur de langue. Renvoie `false` si les éléments attendus sont absents. |

## Segment du clip et adaptateur du lecteur

| Fonction | Paramètres | Retourne | Rôle |
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
| `isShortcutBlocked` | `target: EventTarget` | `boolean` | Vrai quand le focus est dans un champ de saisie, une zone de texte, une liste de sélection, un bouton, un lien ou un élément modifiable. |
| `formatShiftSpeedLabel` | `rate: number` | `string` | Libellé d'une option de vitesse. |
| `buildShiftSpeedSelectOptions` | `selectedRate: number` | `string (HTML)` | Liste d'`<option>` pour le sélecteur de vitesse (0,5–4×). |
| `readStoredShiftSpeed` | — | `number` | Vitesse Shift enregistrée (2× par défaut). |
| `readStoredVerdictRandomizer` | — | `boolean` | État enregistré du randomiseur de verdicts (désactivé par défaut). |
| `installPlayerEnhancements` | `player: adapter, bounds: object` | `void` | Câble la gestion de la vitesse de lecture, le bornage/la pause du segment, les aides pour la recherche/l'avance image par image/la mise en sourdine/le plein écran et les raccourcis clavier globaux (`1`–`5`, flèches, `,` `.`, Espace, `M`, `F`, Shift). Fermetures internes : `applyPlayerRate`, `setShiftSpeed`, `setShiftSpeedActive`, `seekBy`, `stepFrame`, `togglePlay`, `toggleMute`, `toggleFullscreen`, aides de la boucle de dessin. |

## Verdicts prédéfinis

| Fonction | Paramètres | Retourne | Rôle |
|---|---|---|---|
| `applyDefaultVerdicts` | `root = document` | `void` | Sélectionne « skip » dans chaque groupe de verdict sans sélection. |
| `getSelectedVerdictState` | — | `object` | Valeur actuelle (`positive` / `negative` / `skip` / `null`) de `aimassist`, `wallhack`, `autobhop`, `bot`. |
| `detectActivePreset` | — | `string \| null` | Nom du préréglage correspondant à la sélection actuelle. |
| `syncPresetButtons` | — | `string \| null` | Met à jour `aria-pressed` sur les boutons de préréglage et le badge du préréglage étendu. |
| `applyPreset` | `name: string, { announce = false }` | `Promise<boolean>` | Clique sur les entrées radio d'un préréglage ; avec le randomiseur activé, mélange l'ordre et attend 200–600 ms entre les clics. Désactive les boutons de préréglage pendant l'exécution. |
| `normalizeVerdictLabels` | `root = document` | `void` | Retire le balisage de surbrillance des libellés de verdict. |
| `applyVerdictSectionTitles` | `root = document` | `void` | Ajoute des titres localisés au-dessus de chaque groupe de verdict. |

## Notifications, pied de page et chargement à l'envoi

| Fonction | Paramètres | Retourne | Rôle |
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

| Fonction | Paramètres | Retourne | Rôle |
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

## Flux d'envoi

| Fonction | Paramètres | Retourne | Rôle |
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
| `submitVerdictForm` | `{ recordHistory = false }` | `boolean` | Exécute le contrôle de sécurité, affiche la couche de chargement et envoie le formulaire. |
| `submitVerdictsDirect` | — | `boolean` | Prépare les libellés et envoie. |
| `invokeProceedAction` | — | `boolean` | Gestionnaire d'Entrée/clic : la première pression arme, la seconde envoie. |
| `installProceedShortcut` | — | `void` | Écouteur en phase de capture pour `Enter`/`NumpadEnter`. |
| `hookProceedButton` | — | `void` | Remplace le comportement au clic du bouton d'envoi natif. |
| `installVerdictChangeReset` | — | `void` | Désarme l'envoi et resynchronise les préréglages lorsqu'un verdict change. |
| `scheduleProceedFooterFix` | — | `void` | Appel différé (`requestAnimationFrame`) de `fixProceedFooter`. |
| `scheduleVerdictLabelsFix` | — | `void` | Renormalisation différée des libellés/titres/valeurs par défaut. |

## Mise en page et démarrage

| Fonction | Paramètres | Retourne | Rôle |
|---|---|---|---|
| `buildShiftSpeedBar` | — | `HTMLElement` | Construit la barre du sélecteur de vitesse Shift. |
| `buildPresetButtonMarkup` | `name: string, shortcut = "", labelOverride = ""` | `string (HTML)` | Balisage d'un bouton de préréglage. |
| `buildAdvancedPresetGroupsMarkup` | — | `string (HTML)` | Balisage des groupes de préréglages étendus. |
| `buildEnhancementBar` | — | `HTMLElement` | Construit la barre de verdict rapide : préréglages, interrupteur du randomiseur, tiroir étendu. |
| `positionShiftSpeedBar` | — | `void` | Maintient la barre de vitesse avant la liste des verdicts. |
| `positionEnhancementBar` | — | `void` | Maintient la barre de préréglages avant les boutons d'envoi. |
| `fixProceedFooter` | — | `void` | Réorganise le pied de page, les barres et le bouton d'envoi. |
| `enhanceLayout` | — | `void` | Applique tous les changements de mise en page et installe l'interface des réglages. |
| `watchProceedFooter` | — | `void` | Observe `.verdicts-container` et planifie les corrections du pied de page. |
| `watchVerdictLabels` | — | `void` | Observe les libellés de verdict et planifie la renormalisation. |
| `init` | — | `Promise<void>` | Point d'entrée : contrôle du nom du compte → page d'invitation ou de révision → mise en page, observateurs, raccourcis, améliorations du lecteur. |

### Non listé ci-dessus

* **`blockSegmentLoopGuard`** (IIFE, exécutée au chargement) : enveloppe `setInterval` sur la page afin que le minuteur natif de boucle de segment de 100 ms du site soit remplacé par une fonction vide ; ce sont les contrôles propres à DemoScope qui gèrent le segment.
* **Constantes et tables :** `SUPPORTED_LOCALES`, `FLAG_SVG`, `UI_TEXT_ROWS`, `INVITE_TEXT_ROWS`, `SETTINGS_TEXT_ROWS`, `PRESETS`, `PRESET_KEYS`, `PRESET_TONES`, `ADVANCED_PRESET_GROUPS`, `SHIFT_SPEEDS`, `FRAME_STEP`, `ARROW_JUMP_SEC` (`PRESETS` : 21 définitions).
