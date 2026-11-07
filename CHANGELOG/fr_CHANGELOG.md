<div align="center">

[English](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/en_CHANGELOG.md) · [Български](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/bg_CHANGELOG.md) · [Magyar](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/hu_CHANGELOG.md) · [Tiếng Việt](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/vi_CHANGELOG.md) · [Ελληνικά](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/el_CHANGELOG.md) · [Dansk](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/da_CHANGELOG.md) · [Bahasa Indonesia](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/id_CHANGELOG.md) · [Español (España)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/es-ES_CHANGELOG.md) · [Español (Latinoamérica)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/es-419_CHANGELOG.md) · [Italiano](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/it_CHANGELOG.md) · [繁體中文](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/zh-TW_CHANGELOG.md) · [简体中文](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/zh-CN_CHANGELOG.md) · [한국어](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ko_CHANGELOG.md) · [Deutsch](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/de_CHANGELOG.md) · [Nederlands](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/nl_CHANGELOG.md) · [Norsk](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/no_CHANGELOG.md) · [Polski](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/pl_CHANGELOG.md) · [Português (Portugal)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/pt-PT_CHANGELOG.md) · [Português (Brasil)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/pt-BR_CHANGELOG.md) · [Română](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ro_CHANGELOG.md) · [Русский](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ru_CHANGELOG.md) · [ไทย](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/th_CHANGELOG.md) · [Türkçe](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/tr_CHANGELOG.md) · [Українська](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/uk_CHANGELOG.md) · [Suomi](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/fi_CHANGELOG.md) · **Français** · [Čeština](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/cs_CHANGELOG.md) · [Svenska](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/sv_CHANGELOG.md) · [日本語](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ja_CHANGELOG.md)

</div>

# DemoScope v1.2.0

Version d’autoprotection : DemoScope s’adapte désormais aux changements des pages VACNet au lieu de s’interrompre en cours de route, et indique à l’utilisateur comme au développeur ce qui s’est passé.

Paramètres, page d’invitation et améliorations du texte des verdicts.

Raccourcis, animations et correction du chargement.

Prise en charge de la tâche à question unique de VACNet.

Compatibilité avec la page de révision repensée de VACNet.

### Ajouté

- **Étapes d’initialisation isolées.** Chaque étape de mise en page et d’installation s’exécute séparément. En cas d’échec, celui-ci est consigné et les étapes suivantes continuent : un élément modifié ne laisse donc plus le panneau à moitié construit.
- **Méthodes de recherche de secours** pour le conteneur vidéo, le conteneur des verdicts et la zone d’envoi. Si VACNet renomme la classe du conteneur vidéo, DemoScope le retrouve via le lecteur au lieu d’abandonner.
- **Désactivation sans blocage.** Si la page contient la vidéo mais pas le formulaire de verdict (ou inversement), ou si au moins cinq étapes échouent, DemoScope annule ses modifications, restaure le pied de page VACNet, ne conserve que la fenêtre des paramètres et affiche un avis unique. La page de file vide reste reconnue comme avant et ne déclenche jamais ce comportement.
- **Rapport de diagnostic** (Paramètres → Diagnostic → Copier le diagnostic) : version du script, heure, langue et navigateur, page et type de tâche, vérifications de 22 éléments attendus (`ok` / `MISSING`), échecs consignés et structure de la page avant et après les modifications de DemoScope. La structure contient uniquement des balises, identifiants et classes, jamais le texte de la page. Si le presse-papiers est bloqué, le rapport apparaît dans une zone où le texte peut être sélectionné.
- Une courte attente (jusqu’à 2 s) avant d’évaluer une page encore partiellement affichée.

- **Bouton de fermeture de la page d’invitation.** Une croix × dans le coin de la carte revient aux clips, comme le bouton « Done ».
- **Raccourcis de la page d’invitation :** `Enter` exécute « Done » et `Esc` fait la même chose que ×. Ils sont ignorés si le focus est sur un bouton, un lien, un champ, une boîte de dialogue ou la liste des langues ; le bouton « Done » affiche désormais aussi sa touche. Les deux raccourcis sont reconfigurables dans la fenêtre Raccourcis (nouveau groupe « Page d’invitation »).
- **Conflits de touches limités à la page.** La page d’invitation n’ayant pas de lecteur, ses touches `Enter` / `Esc` n’entrent plus en conflit avec celles de la page de révision. La touche des paramètres reste en conflit avec toutes les actions.
- **Barres de défilement sombres et fines** dans la fenêtre des paramètres, les sous-fenêtres et la liste des verdicts, ainsi que `color-scheme: dark`. Brave, Chrome et Edge affichaient auparavant une barre claire par défaut.

- **Fenêtre Raccourcis** (Paramètres → Raccourcis). Les 18 raccourcis sont regroupés dans un registre et peuvent être réattribués. Les actions sont classées (Lecture, Navigation, Verdicts, Envoi, Page d’invitation, Interface), chacune avec une description et un bouton de réinitialisation, ainsi qu’une option « Reset all » demandant un second clic de confirmation.
  - **Gestion des conflits.** Lorsqu’une touche déjà utilisée est pressée, l’action qui la possède, son groupe et son rôle sont indiqués. Choix : **Replace** (l’autre action perd sa touche), **Swap** (elle reçoit l’ancienne touche de cette action) ou **Cancel**.
  - `Esc` peut être attribuée comme toute autre touche et ne ferme pas la fenêtre pendant la capture d’une touche. `Tab`, les modificateurs, Caps Lock, `F5`, `F11` et `F12` sont refusés ; `Shift` n’est accepté que pour l’action à maintenir « Speed boost ».
  - Les indications sous la vidéo, les pastilles des préréglages et des verdicts, ainsi que les boutons Continue/Cancel suivent vos attributions.
- **`Esc` annule** un verdict en attente de confirmation (en appuyant sur « Cancel » de VACNet) et désarme le premier `Enter` de l’envoi en deux temps.
- **Fenêtre Animations** (Paramètres → Animations) : six styles d’indicateur (pulse, breathe, ripple, heartbeat, orbit, blink), avec aperçu en direct, trois vitesses et interrupteur. Si le système demande de réduire les animations, elles démarrent désactivées.
- `Enter` et `Esc` fonctionnent aussi lorsqu’un bouton radio de verdict a le focus, ce qui arrive après avoir cliqué sur un verdict.

- **Prise en charge de la tâche à question unique.** VACNet peut présenter la question « Is the Subject cheating beyond a reasonable doubt? », avec les réponses Cheating / Uncertain / No cheats seen. DemoScope la détecte et adopte une disposition compacte, sans verdicts rapides, combinaisons étendues ni randomiseur.
- Libellés de verdicts dans le texte et la langue de DemoScope, pastilles `1`–`3` et raccourcis correspondants.
- **Indicateur de verrouillage.** VACNet ne déverrouille « Uncertain » et « No cheats seen » qu’à la fin du clip. Une carte l’explique et indique le temps restant avec une barre de progression ; les options verrouillées sont atténuées et leur touche déclenche un son d’erreur et fait trembler la carte.
- Les indications sous la vidéo passent à `Enter` et `1–3` ; les boutons de verdict sont plus hauts pour remplir le panneau.

- **Explications propres à DemoScope** pour les quatre catégories de verdict dans les 29 langues. VACNet utilise parfois l’anglais pour ses questions (par exemple en ukrainien) ; les bulles « ? » ne dépendent donc plus de son texte.

- **Bouton d’aide « ? »** à côté de AIM ASSIST, WALL HACK, AUTO BHOP et BOT. Un clic ouvre une petite explication de la catégorie ; elle se ferme par un clic à l’extérieur, un second clic ou `Esc`. Le bouton ne prend volontairement pas le focus clavier afin que `Enter` et `Space` gardent leur fonction pendant la révision.

### Modifié

- **Refonte de la fenêtre des paramètres.** Les sections sont classées selon leur fréquence d’utilisation : Raccourcis, Animations, Effets sonores, Historique local, Pied de page, Diagnostic (ajouté en 1.2.0), Réinitialisation. Tout est aligné à gauche comme dans les nouvelles sous-fenêtres. Raccourcis et Animations sont des lignes d’accès avec une pastille récapitulative (« Changed: 2 », « Orbit · Fast ») mise à jour lors des changements.
- **Une seule réinitialisation pour tout.** Le bouton a sa propre section et rétablit désormais le son, le volume, les raccourcis et les animations (le texte de confirmation le précise). L’historique est conservé.
- L’ancien bloc « settings key » a été supprimé de la fenêtre : cette touche se modifie maintenant dans la fenêtre Raccourcis comme toutes les autres.
- **Le texte de confirmation du verdict ne contient plus le chiffre de la touche.** VACNet copie le texte du libellé choisi dans la ligne de confirmation, ce qui produisait « 2Not sure » et « 3No cheats seen ». La pastille de touche est maintenant dessinée en CSS et ne fait pas partie du texte.
- L’option 2 de la tâche à question unique affiche maintenant « Not sure » (en russe : « Не уверен(а) »), à la première personne comme la phrase de VACNet « I'm sure the subject is cheating… ».

- **Le surlignage des expressions clés est rétabli** dans les boutons de verdict, avec la palette DemoScope : l’expression concernée (« help with aiming », « see through walls », etc.) en orange d’accent, et le « not » des réponses négatives en bleu discret ; les deux sont en gras. Les boutons sélectionnés conservent leur teinte et restent lisibles.
- `normalizeVerdictLabels` aplatissait auparavant tous les surlignages en texte brut. La fonction ne retire maintenant que les balises d’emphase `<b>`, ce qui préserve le balisage du surlignage.

- L’en-tête du portail et la carte d’instructions sont masqués pour conserver l’apparence précédente ; le compteur de clips est dupliqué dans la pastille d’en-tête, car la refonte masque l’original.
- Le bouton Continue reste fixé en bas du panneau et demeure visible même lorsque de longues traductions rendent la liste des verdicts plus haute que la fenêtre.

### Corrigé

- **Chargement très long du clip suivant après l’envoi** dans la tâche à question unique. Le contrôle de disponibilité attendait le champ `aimassist` du formulaire classique, absent de cette tâche ; le délai de 30 secondes était donc toujours atteint avec un message d’erreur. Il accepte maintenant tout formulaire de verdict et les métadonnées du média, démarre avant la fin du chargement du lecteur, et ferme silencieusement la superposition après 3 secondes sur les pages qui ne sont pas des clips.
- Les raccourcis de page (`Space`, `Enter`, …) n’agissent plus sur la page derrière une boîte de dialogue ouverte.

- Le bouton « Local history » était trop grand (il héritait de la police de la page) et passait sur deux lignes dans de nombreuses langues. Il a maintenant la taille des pastilles voisines, ne revient pas à la ligne, tronque les libellés très longs et permet à la rangée de pastilles de revenir à la ligne au lieu de se comprimer.

- **Le texte des verdicts restait dans la langue du navigateur** après le changement de langue dans DemoScope. VACNet choisit ses textes avec le paramètre Steam `?l=` ; DemoScope ne modifiait que ses propres libellés. Le choix d’une langue sur la page de révision déclenche désormais une navigation avec le `?l=` correspondant ; une page ouverte sans ce paramètre (par exemple le clip suivant après Continue) est redemandée une fois dans la langue sélectionnée. La langue réellement utilisée par VACNet est lue depuis le paramètre `l=` des URL de ses propres feuilles de style et scripts ; une protection à une tentative évite les boucles de redirection si VACNet ne propose pas cette langue.

- **`Space`, `M` et `F` semblaient inactives** car VACNet / Video.js réagissaient aussi aux mêmes touches et basculaient une seconde fois (pause immédiatement suivie de lecture). DemoScope intercepte maintenant ces touches, qu’elles soient attribuées ou non.
- Dans Firefox, relâcher `Space` activait aussi le bouton du lecteur ayant le focus. Cette relâche est désormais interceptée elle aussi.
- Les raccourcis du lecteur restent actifs quand un bouton radio de verdict a le focus.

- **Panneau incomplet après la refonte de VACNet.** La page a ajouté un en-tête de portail, une carte d’instructions et une grille ; les blocs de verdict n’étaient plus enveloppés dans `.verdicts-container-inner` et `#submitbuttons` avait été déplacé hors du conteneur des verdicts. Le `insertBefore` de DemoScope échouait et les étapes suivantes étaient ignorées. L’étape `ensureReviewStructure` normalise désormais le balisage et permet les anciennes comme les nouvelles mises en page.

### Localisation

- 6 nouvelles chaînes (section de diagnostic, résultat de copie et avis de désactivation) dans les 29 langues.

- 12 nouvelles chaînes (résumés, section de réinitialisation, actions de la page d’invitation et « Not sure ») dans les 29 langues.

- Les fenêtres Raccourcis et Animations (77 chaînes par langue) sont désormais traduites dans les 27 autres langues. Auparavant, seul l’anglais et le russe étaient rédigés.

- Les fenêtres Raccourcis et Animations ont d’abord été écrites en anglais et en russe ; les autres langues ont suivi en 1.2.0.

- 5 nouvelles chaînes (libellés, titre, explication et message de verrouillage) dans les 29 langues.

# DemoScope v1.0.0

Première version publique de DemoScope, une boîte à outils userscript pour les pages de révision VACNet de CS2.

### Ajouté
- Interface en 29 langues, choix automatique de la langue, cinq préréglages de verdict rapide et 15 combinaisons étendues.
- Contrôles vidéo adaptés aux segments, déplacement image par image, accélération avec `Shift`, lecture/pause avec `Space`, sourdine avec `M`, plein écran avec `F` et envoi des verdicts en deux temps avec `Enter`.
- Historique local configurable, import/export JSON, rapports HTML et fusion de plusieurs sauvegardes JSON en un seul rapport.
- Page d’invitation améliorée, paramètres audio, raccourci de paramètres configurable, contrôle de visibilité du nom du compte, boîte de dialogue des règles et randomiseur de verdicts facultatif (désactivé par défaut).

### Confidentialité
- Aucune télémétrie ; les paramètres et l’historique locaux ne sont pas envoyés. Les verdicts sont transmis à VACNet via le formulaire normal du site.
