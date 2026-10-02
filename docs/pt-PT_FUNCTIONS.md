<div align="center">

[English](../FUNCTIONS.md) · [Български](bg_FUNCTIONS.md) · [Magyar](hu_FUNCTIONS.md) · [Tiếng Việt](vi_FUNCTIONS.md) · [Ελληνικά](el_FUNCTIONS.md) · [Dansk](da_FUNCTIONS.md) · [Bahasa Indonesia](id_FUNCTIONS.md) · [Español (España)](es-ES_FUNCTIONS.md) · [Español (Latinoamérica)](es-419_FUNCTIONS.md) · [Italiano](it_FUNCTIONS.md) · [繁體中文](zh-TW_FUNCTIONS.md) · [简体中文](zh-CN_FUNCTIONS.md) · [한국어](ko_FUNCTIONS.md) · [Deutsch](de_FUNCTIONS.md) · [Nederlands](nl_FUNCTIONS.md) · [Norsk](no_FUNCTIONS.md) · [Polski](pl_FUNCTIONS.md) · **Português (Portugal)** · [Português (Brasil)](pt-BR_FUNCTIONS.md) · [Română](ro_FUNCTIONS.md) · [Русский](ru_FUNCTIONS.md) · [ไทย](th_FUNCTIONS.md) · [Türkçe](tr_FUNCTIONS.md) · [Українська](uk_FUNCTIONS.md) · [Suomi](fi_FUNCTIONS.md) · [Français](fr_FUNCTIONS.md) · [Čeština](cs_FUNCTIONS.md) · [Svenska](sv_FUNCTIONS.md) · [日本語](ja_FUNCTIONS.md)

</div>

# DemoScope — Referência de funções

Referência completa das 128 funções de nível superior de `DemoScope.user.js` v1.0.0 (nome, parâmetros, valor devolvido, responsabilidade). Voltar ao [README](../../README/pt-PT_README.md).

Convenções: `—` significa sem parâmetros; `void` significa que a função é chamada pelos seus efeitos secundários.

## Localização

| Função | Parâmetros | Devolve | Responsabilidade |
|---|---|---|---|
| `getFlagSvg` | `locale: string` | `string` | Código SVG em linha da bandeira de um idioma; se não existir, devolve um ícone de globo. |
| `getSavedLocale` | — | `string \| null` | Lê o idioma guardado do utilizador (`demoscopeLanguage`) a partir de `localStorage`. |
| `getActiveLocale` | — | `string` | Determina o idioma ativo: escolha guardada → Steam `?l=` → idioma do navegador/página → `en`. |
| `getLanguageBadge` | — | `string` | Nome próprio do idioma, p. ex. «English version», para o distintivo do seletor de idioma. |
| `tr` | `key: string` | `string` | Procura uma cadeia da interface para o idioma ativo (alternativa: inglês e, depois, a própria chave). |
| `inviteText` | `key: string` | `string` | A mesma pesquisa para a tabela de cadeias da página de convites. |
| `settingText` | `key: string` | `string` | A mesma pesquisa para a tabela de cadeias da caixa de definições. |
| `getPresetLabel` | `name: string` | `string` | Etiqueta localizada de uma predefinição; compõe combinações como «Bot + Aim». |
| `buildLanguageOptions` | — | `string (HTML)` | HTML dos botões de escolha de idioma, incluindo a entrada «auto». |
| `installLanguageSelector` | `root: HTMLElement` | `void` | Liga o seletor de idioma em popover, posiciona-o, guarda a escolha e recarrega a página. |

## Efeitos sonoros e caixa de definições

| Função | Parâmetros | Devolve | Responsabilidade |
|---|---|---|---|
| `getSettingsHistorySummary` | — | `string` | Linha «N entradas · última entrada: …» apresentada na caixa de definições. |
| `soundsEnabled` | — | `boolean` | Indica se os sons da interface estão ativados (`demoscopeSoundEffectsEnabled`, ativados por predefinição). |
| `getSoundVolume` | — | `number (0–1)` | Volume de som guardado (`demoscopeSoundEffectsVolume`, 0,4 por predefinição). |
| `playUiSound` | `kind = "click"` | `void` | Sintetiza uma curta sequência de tons com Web Audio (`click`, `select`, `toggle`, `copy`, `confirm`, `preview`, `tick`, `open`, `close`, `error`); nunca lança erros. |
| `readSettingsHotkey` | — | `string` | `KeyboardEvent.code` guardado que abre a caixa de definições (`F2` por predefinição). |
| `formatHotkey` | `code: string` | `string` | Nome legível de uma tecla (`KeyQ` → `Q`, `Numpad1` → `Num 1`). |
| `getSettingsHotkeyCode` | `event: KeyboardEvent` | `string` | Extrai o código da tecla física, remapeando os teclados não latinos para `KeyX`; `""` se não for utilizável. |
| `isReservedSettingsHotkey` | `code: string` | `boolean` | Verdadeiro para as teclas que o DemoScope ou o leitor já usam (Enter, espaço, setas, `M`, `F`, `1`–`5`, …). |
| `ensureSettingsDialog` | — | `HTMLDialogElement` | Cria (uma só vez) e liga a caixa de definições: som, volume, captura do atalho, limites do histórico, exportar/importar/relatório/fundir/limpar, repor. |
| `openSettingsDialog` | `opener = null` | `void` | Abre a caixa com os valores atuais e memoriza o elemento a que devolver o foco. |
| `installSettingsUi` | — | `void` | Instala o ouvinte global de teclas em fase de captura (abrir/fechar a caixa, reatribuição) e os eventos de som. |
| `installUiSoundEvents` | — | `void` | Ouvinte de cliques delegado que reproduz sons de resposta para os controlos do DemoScope. |

## Cópias de segurança, relatórios e limites do histórico

| Função | Parâmetros | Devolve | Responsabilidade |
|---|---|---|---|
| `exportLocalHistory` | — | `void` | Transfere todo o histórico como `demoscope-history-YYYY-MM-DD.json`. |
| `downloadHistoryFile` | `content: string, filename: string, mimeType: string` | `void` | Inicia a transferência de um ficheiro através de um URL Blob temporário. |
| `collectHistoryReportRows` | `store: object` | `Array<{vodId, ts, summary, segment}>` | Aplana e remove duplicados das entradas do histórico, as mais recentes primeiro. |
| `exportReadableHistory` | — | `void` | Transfere um relatório HTML autónomo e localizado do histórico. |
| `buildReadableHistoryReport` | `rows: Array, reportTitle: string, summaryNote = ""` | `string (HTML document)` | Constrói o HTML do relatório com os carateres escapados. |
| `setMergeReportStatus` | `statusElement: HTMLElement, message: string, state: string` | `void` | Atualiza a linha de estado da ferramenta de fusão (`progress`, `success`, `warning`). |
| `exportCombinedHistoryReports` | `files: FileList \| File[], statusElement: HTMLElement, button: HTMLButtonElement` | `Promise<void>` | Valida várias cópias JSON (≤ 5 MB cada, ≤ 100 MB no total), remove entradas duplicadas e transfere um único relatório HTML combinado. |
| `isSafeHistoryKey` | `key: string` | `boolean` | Verificação por lista de permissões das chaves do histórico (bloqueia `__proto__`, `constructor` e chaves mal formadas). |
| `importLocalHistory` | `file: File` | `Promise<void>` | Valida uma cópia JSON, funde-a com o histórico local (respeitando os limites) e atualiza a interface. |
| `readHistoryLimit` | `storageKey: string, allowedValues: number[], defaultValue: number` | `number` | Lê um limite numérico de `localStorage`, aceitando apenas valores permitidos. |
| `getHistoryPerKeyLimit` | — | `number` | Entradas mantidas por chave de clip/jogo (10/20/30/50, 30 por predefinição). |
| `getHistoryTotalLimit` | — | `number` | Número total de chaves de clip/jogo mantidas (100/200/300/500, 300 por predefinição). |
| `readAdvancedPresetsOpen` | — | `boolean` | Indica se a gaveta de predefinições alargadas ficou aberta. |

## Nome da conta e página de convites

| Função | Parâmetros | Devolve | Responsabilidade |
|---|---|---|---|
| `accountNameIsHidden` | — | `boolean` | Indica se o nome da conta Steam está oculto neste momento. |
| `installAccountNameControl` | — | `void` | Adiciona um interruptor em forma de olho junto à ligação de terminar sessão e mantém-no sincronizado através de um `MutationObserver`. |
| `installInvitePage` | — | `boolean` | Redesenha `/vacnet/createinvite`: esquema em cartão, mostrar/ocultar e copiar a ligação (Clipboard API com alternativa `execCommand`), lista de requisitos, seletor de idioma. Devolve `false` se faltarem os elementos esperados. |

## Segmento do clip e adaptador do leitor

| Função | Parâmetros | Devolve | Responsabilidade |
|---|---|---|---|
| `parseSegmentBounds` | — | `{startTime, endTime, duration} \| null` | Extrai `startTime`/`endTime` dos scripts em linha da página. |
| `formatSegmentTime` | `seconds: number` | `string` | Formata os segundos como `m:ss.cc`. |
| `getVideoElement` | — | `HTMLVideoElement \| null` | Localiza o elemento `<video>` da revisão. |
| `getVjsPlayer` | — | `Video.js player \| null` | Devolve o leitor Video.js da página, se estiver disponível e não tiver sido destruído. |
| `createPlayerAdapter` | — | `adapter \| null` | API unificada sobre Video.js / vídeo HTML5: `currentTime`, `paused`, `pause`, `play`, `playbackRate(s)`, `muted`, `on`, `isFullscreen`, `requestFullscreen`, `exitFullscreen`. |
| `waitForPlayerAdapter` | `timeoutMs = 20000` | `Promise<adapter>` | Consulta a cada 100 ms até existir um leitor; rejeita ao esgotar o tempo. |
| `clampSegment` | `time: number, bounds: object` | `number` | Limita um instante aos limites do clip. |
| `segmentProgress` | `time: number, bounds: object` | `number (0–1)` | Posição relativa dentro do clip. |
| `installCustomControls` | `player, bounds, refreshDisplay: {current: Function}` | `void` | Adiciona a barra de procura, o indicador de tempo e as dicas de teclas por baixo do vídeo. |
| `pauseLayoutMutations` | `run: Function` | `void` | Executa uma função enquanto os observadores de esquema estão suspensos (evita ciclos de retroalimentação). |
| `isShortcutBlocked` | `target: EventTarget` | `boolean` | Verdadeiro quando o foco está num campo de entrada, textarea, select, botão, ligação ou elemento editável. |
| `formatShiftSpeedLabel` | `rate: number` | `string` | Etiqueta de uma opção de velocidade. |
| `buildShiftSpeedSelectOptions` | `selectedRate: number` | `string (HTML)` | Lista de `<option>` para o seletor de velocidade (0,5–4×). |
| `readStoredShiftSpeed` | — | `number` | Velocidade de Shift guardada (2× por predefinição). |
| `readStoredVerdictRandomizer` | — | `boolean` | Estado guardado do aleatorizador de vereditos (desativado por predefinição). |
| `installPlayerEnhancements` | `player: adapter, bounds: object` | `void` | Liga o tratamento da velocidade de reprodução, a limitação/pausa do segmento, os auxiliares de procura/avanço por fotogramas/silêncio/ecrã inteiro e os atalhos de teclado globais (`1`–`5`, setas, `,` `.`, espaço, `M`, `F`, Shift). Fechos internos: `applyPlayerRate`, `setShiftSpeed`, `setShiftSpeedActive`, `seekBy`, `stepFrame`, `togglePlay`, `toggleMute`, `toggleFullscreen`, auxiliares do ciclo de desenho. |

## Vereditos predefinidos

| Função | Parâmetros | Devolve | Responsabilidade |
|---|---|---|---|
| `applyDefaultVerdicts` | `root = document` | `void` | Seleciona «skip» em cada grupo de veredicto sem seleção. |
| `getSelectedVerdictState` | — | `object` | Valor atual (`positive` / `negative` / `skip` / `null`) de `aimassist`, `wallhack`, `autobhop`, `bot`. |
| `detectActivePreset` | — | `string \| null` | Nome da predefinição que corresponde à seleção atual. |
| `syncPresetButtons` | — | `string \| null` | Atualiza `aria-pressed` nos botões de predefinições e o distintivo da predefinição alargada. |
| `applyPreset` | `name: string, { announce = false }` | `Promise<boolean>` | Clica nos campos de opção de uma predefinição; com o aleatorizador ativado, mistura a ordem e espera 200–600 ms entre cliques. Desativa os botões de predefinições durante a execução. |
| `normalizeVerdictLabels` | `root = document` | `void` | Remove a marcação de realce das etiquetas de veredicto. |
| `applyVerdictSectionTitles` | `root = document` | `void` | Adiciona títulos localizados por cima de cada grupo de veredicto. |

## Avisos, rodapé e carregamento ao enviar

| Função | Parâmetros | Devolve | Responsabilidade |
|---|---|---|---|
| `hideSiteFooter` | — | `void` | Oculta o rodapé do site. |
| `showToast` | `message: string, type = "info", duration = 1800` | `void` | Mostra um aviso não bloqueante com ARIA-live. |
| `markSubmitPending` | — | `void` | Guarda a data/hora do envio e o id do clip atual em `sessionStorage`. |
| `isSubmitPending` | — | `boolean` | Indica se um envio está à espera do clip seguinte. |
| `clearSubmitPending` | — | `void` | Limpa os marcadores de envio pendente. |
| `showSubmitLoadingOverlay` | `message = tr("nextClip")` | `void` | Mostra a camada de carregamento em ecrã inteiro. |
| `hideSubmitLoadingOverlay` | — | `void` | Oculta a camada e limpa o estado pendente. |
| `bootSubmitLoadingIfPending` | — | `void` | Volta a mostrar a camada ao carregar a página, se houver um envio pendente. |
| `isReviewPageReady` | `prevVod: string, startedAt: number` | `boolean` | Verdadeiro quando a interface e os conteúdos multimédia do clip seguinte estão prontos. |
| `finishSubmitLoadingWhenReady` | — | `Promise<void>` | Espera até 30 s pelo clip seguinte e depois oculta a camada (aviso de erro se o tempo esgotar). |

## Armazenamento do histórico local

| Função | Parâmetros | Devolve | Responsabilidade |
|---|---|---|---|
| `extractVodId` | — | `string` | Deduz o id do clip/jogo a partir do URL do vídeo. |
| `getGameKey` | — | `string` | Chave do histórico do jogo (`game::<id>`). |
| `getClipKey` | `bounds: object` | `string` | Chave do histórico de um segmento (`<id>:<start>:<end>`). |
| `normalizeHistoryEntry` | `entry: any` | `{ts, summary, segment} \| null` | Valida e depura uma entrada do histórico. |
| `readHistoryEntries` | `store: object, key: string` | `Array` | Entradas normalizadas de uma chave. |
| `getGameHistoryEntries` | `store: object` | `Array` | Entradas do jogo atual (suporta uma chave herdada). |
| `getClipHistoryEntries` | `store: object, bounds: object` | `Array` | Entradas do segmento atual. |
| `formatClipId` | `vodId: string` | `string` | Id numérico curto de apresentação (`#0000000`), obtido por hash do id do clip. |
| `formatRelativeTime` | `timestamp: number` | `string` | Tempo relativo localizado (`Intl.RelativeTimeFormat`). |
| `readClipHistoryStore` | — | `object` | Carrega o objeto do histórico de `localStorage` (`{}` em caso de erro). |
| `pruneHistoryStore` | `store: object` | `void` | Aplica os limites por chave e totais (as chaves mais antigas são descartadas primeiro). |
| `writeClipHistoryStore` | `store: object` | `boolean` | Poda e guarda; `false` em caso de erros de quota/armazenamento. |
| `summarizeCurrentVerdict` | — | `string` | Nome da predefinição da seleção atual, ou `mixed`. |
| `formatSummaryLabel` | `summary: string` | `string` | Etiqueta localizada de um resumo do histórico. |
| `formatClockTime` | `seconds: number` | `string` | Formato de relógio `m:ss` (ou `x.xs`). |
| `formatHumanSegment` | `bounds: object` | `string` | Intervalo de segmento legível. |
| `formatGameLabel` | — | `string` | Etiqueta localizada do jogo atual. |
| `historyEntryKey` | `entry: object` | `string` | Cadeia de identidade usada para remover duplicados. |
| `formatPriorStat` | `count: number, label: string` | `string` | Linha «etiqueta: N» do painel do histórico. |
| `buildHistoryListItems` | `clipEntries: Array, gameEntries: Array, currentSegment: string` | `Array` | Junta as entradas de clip/jogo em itens para apresentar. |
| `renderHistoryItem` | `item: object` | `string (HTML)` | HTML de uma linha do histórico. |
| `escapeHtml` | `value: any` | `string` | Escapa `& < > " '`. |
| `buildClipHistoryPanel` | `bounds, gameEntries, clipEntries` | `string (HTML)` | HTML do painel do histórico, incluindo o botão das regras de revisão. |
| `ensureClipHistoryPanel` | — | `void` | Cria o contentor do painel se faltar. |
| `ensureReviewRulesDialog` | — | `void` | Cria a caixa das regras de revisão e liga os seus botões de abrir/fechar. |
| `installLocalHistoryButton` | `panel: HTMLElement` | `void` | Liga o botão «histórico local» (desloca-se até à lista ou mostra um aviso se estiver vazio). |
| `positionClipHistoryPanel` | — | `void` | Mantém o painel como primeiro elemento em `.verdicts-container`. |
| `renderClipHistory` | `bounds: object \| null` | `void` | Volta a desenhar o painel do histórico para o clip atual. |
| `appendReviewHistory` | `bounds: object \| null` | `void` | Acrescenta o resumo do veredicto atual ao histórico do jogo e do clip. |

## Fluxo de envio

| Função | Parâmetros | Devolve | Responsabilidade |
|---|---|---|---|
| `isLabelingMode` | — | `boolean` | Verdadeiro nas páginas que mostram os quatro grupos de veredicto. |
| `getProceedButton` | — | `HTMLButtonElement \| null` | O botão de envio nativo, se estiver visível e ativado. |
| `recordProceedHistoryIfLabeling` | — | `void` | Regista o histórico uma vez por envio (protegido contra reentrada). |
| `resetProceedArmed` | — | `void` | Desarma o envio em dois passos. |
| `refreshProceedButtonLabel` | — | `void` | Atualiza a etiqueta do botão, a dica de `Enter` e o estilo do estado armado. |
| `verdictLabelForField` | `field: string, selected: string` | `string \| null` | Mapeia uma seleção para `guilty_*` / `innocent_*` / `skip_*`. |
| `prepareVerdictFormForSubmit` | — | `boolean` | Constrói os campos ocultos `verdict_labels[]`; mostra um aviso de erro e devolve `false` se algum grupo não tiver seleção. |
| `isSafeSubmitTarget` | `form: HTMLFormElement` | `boolean` | Só permite ações de formulário HTTPS da mesma origem. |
| `restoreSubmitUi` | — | `void` | Restaura os botões após um envio falhado. |
| `submitVerdictForm` | `{ recordHistory = false }` | `boolean` | Executa a verificação de segurança, mostra a camada de carregamento e envia o formulário. |
| `submitVerdictsDirect` | — | `boolean` | Prepara as etiquetas e envia. |
| `invokeProceedAction` | — | `boolean` | Tratador de Enter/clique: a primeira pressão arma, a segunda envia. |
| `installProceedShortcut` | — | `void` | Ouvinte em fase de captura para `Enter`/`NumpadEnter`. |
| `hookProceedButton` | — | `void` | Substitui o comportamento de clique do botão de envio nativo. |
| `installVerdictChangeReset` | — | `void` | Desarma o envio e volta a sincronizar as predefinições quando um veredicto muda. |
| `scheduleProceedFooterFix` | — | `void` | Chamada diferida (`requestAnimationFrame`) de `fixProceedFooter`. |
| `scheduleVerdictLabelsFix` | — | `void` | Renormalização diferida de etiquetas/títulos/valores predefinidos. |

## Esquema e arranque

| Função | Parâmetros | Devolve | Responsabilidade |
|---|---|---|---|
| `buildShiftSpeedBar` | — | `HTMLElement` | Constrói a barra do seletor de velocidade de Shift. |
| `buildPresetButtonMarkup` | `name: string, shortcut = "", labelOverride = ""` | `string (HTML)` | HTML de um botão de predefinição. |
| `buildAdvancedPresetGroupsMarkup` | — | `string (HTML)` | HTML dos grupos de predefinições alargadas. |
| `buildEnhancementBar` | — | `HTMLElement` | Constrói a barra de veredicto rápido: predefinições, interruptor do aleatorizador, gaveta alargada. |
| `positionShiftSpeedBar` | — | `void` | Mantém a barra de velocidade antes da lista de vereditos. |
| `positionEnhancementBar` | — | `void` | Mantém a barra de predefinições antes dos botões de envio. |
| `fixProceedFooter` | — | `void` | Reorganiza o rodapé, as barras e o botão de envio. |
| `enhanceLayout` | — | `void` | Aplica todas as alterações de esquema e instala a interface de definições. |
| `watchProceedFooter` | — | `void` | Observa `.verdicts-container` e agenda correções do rodapé. |
| `watchVerdictLabels` | — | `void` | Observa as etiquetas de veredicto e agenda a renormalização. |
| `init` | — | `Promise<void>` | Ponto de entrada: controlo do nome da conta → página de convites ou de revisão → esquema, observadores, atalhos, melhorias do leitor. |

### Não listado acima

* **`blockSegmentLoopGuard`** (IIFE, executada ao carregar): envolve `setInterval` na página para que o temporizador nativo de ciclo de segmento de 100 ms do site seja substituído por uma função vazia; os controlos próprios do DemoScope tratam do segmento.
* **Constantes e tabelas:** `SUPPORTED_LOCALES`, `FLAG_SVG`, `UI_TEXT_ROWS`, `INVITE_TEXT_ROWS`, `SETTINGS_TEXT_ROWS`, `PRESETS`, `PRESET_KEYS`, `PRESET_TONES`, `ADVANCED_PRESET_GROUPS`, `SHIFT_SPEEDS`, `FRAME_STEP`, `ARROW_JUMP_SEC` (`PRESETS`: 21 definições).
