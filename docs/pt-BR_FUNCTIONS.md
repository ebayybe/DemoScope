<div align="center">

[English](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/en_FUNCTIONS.md) · [Български](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/bg_FUNCTIONS.md) · [Magyar](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/hu_FUNCTIONS.md) · [Tiếng Việt](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/vi_FUNCTIONS.md) · [Ελληνικά](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/el_FUNCTIONS.md) · [Dansk](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/da_FUNCTIONS.md) · [Bahasa Indonesia](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/id_FUNCTIONS.md) · [Español (España)](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/es-ES_FUNCTIONS.md) · [Español (Latinoamérica)](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/es-419_FUNCTIONS.md) · [Italiano](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/it_FUNCTIONS.md) · [繁體中文](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/zh-TW_FUNCTIONS.md) · [简体中文](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/zh-CN_FUNCTIONS.md) · [한국어](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/ko_FUNCTIONS.md) · [Deutsch](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/de_FUNCTIONS.md) · [Nederlands](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/nl_FUNCTIONS.md) · [Norsk](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/no_FUNCTIONS.md) · [Polski](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/pl_FUNCTIONS.md) · [Português (Portugal)](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/pt-PT_FUNCTIONS.md) · **Português (Brasil)** · [Română](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/ro_FUNCTIONS.md) · [Русский](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/ru_FUNCTIONS.md) · [ไทย](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/th_FUNCTIONS.md) · [Türkçe](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/tr_FUNCTIONS.md) · [Українська](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/uk_FUNCTIONS.md) · [Suomi](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/fi_FUNCTIONS.md) · [Français](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/fr_FUNCTIONS.md) · [Čeština](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/cs_FUNCTIONS.md) · [Svenska](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/sv_FUNCTIONS.md) · [日本語](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/ja_FUNCTIONS.md)

</div>

# DemoScope — Referência de funções

Referência completa das 217 funções de nível superior de `DemoScope.user.js` v1.4.0 (nome, parâmetros, valor devolvido, responsabilidade). Voltar ao [README](../README.md).

Convenções: `—` significa sem parâmetros; `void` significa que a função é chamada pelos seus efeitos secundários.

## Visão geral do comportamento

| Área | Descrição |
|---|---|
| Páginas compatíveis | Aprimora a página de boas-vindas da VACNet, as páginas de revisão, a página de convite e o estado sem clipes. Não altera outras páginas. |
| Tipos de tarefa | Detecta o formulário de revisão. O formulário clássico oferece predefinições e combinações; a tarefa de uma pergunta mostra três vereditos nas teclas 1–3 e um indicador de bloqueio com o tempo restante. |
| Idioma | Suporta 29 idiomas Steam. A escolha manual salva tem prioridade; depois vêm o parâmetro ?l= da Steam e o idioma do navegador/página. A escolha do DemoScope também é aplicada à VACNet. O modo automático sincroniza o idioma da Steam com o navegador. |
| Boas-vindas e convite | Aplica estilo às páginas, seletor de idioma e controle para ocultar o nome da conta. Na página de convite é possível copiar o link e ver os requisitos; Enter equivale a Concluído e Esc fecha. |
| Revisão de clipes | Adiciona predefinições, combinações, ordem aleatória opcional, velocidade ao segurar Shift, busca dentro do segmento, avanço por quadros e atalhos do player. As categorias têm explicações localizadas. |
| Atalhos | Os atalhos podem ser redefinidos em Configurações → Atalhos. Conflitos são verificados por página e podem ser substituídos, trocados ou cancelados. |
| Envio | Enter ou Numpad Enter ativa Continuar. No formulário clássico, a primeira tecla prepara o envio e a segunda envia os vereditos. Esc cancela; Espaço não envia. |
| Configurações | F2 abre Configurações. Há atalhos, animações, efeitos de som, histórico local, formato de hora, visibilidade do rodapé, diagnóstico e redefinição. |
| Animações | O ponto ao lado de DemoScope pode ser animado. Há seis estilos, prévias, três velocidades e um controle. Se o sistema reduzir movimento, começam desativadas. |
| Histórico local | Salva resumos no armazenamento local do navegador e não os envia. É possível importar, exportar, combinar cópias, limpar e configurar limites. Desativar não apaga os dados. Só registra o formulário clássico. |
| Fila vazia | Quando não há clipes, mostra explicação localizada, horário da primeira ocorrência e seletor de idioma. A referência a 250 demos por dia é informativa; o DemoScope não impõe nem contorna o limite. |
| Rodapé | Mostra um rodapé localizado com links de feedback e denúncia. É possível ocultar links, copyright ou todo o rodapé. |
| Resiliência | Cada etapa executa isoladamente. Se a página não for reconhecida, o DemoScope se desativa, restaura a página da VACNet e mostra um aviso. Configurações → Diagnóstico copia um relatório. |

O script não altera os requisitos de convite da VACNet, o processamento de vereditos nem os limites do servidor. Histórico, idioma e preferências ficam no perfil do navegador.

## Localização

| Função | Parâmetros | Retorno | Descrição |
|---|---|---|---|
| `getFlagSvg` | `locale: string` | `string` | Código SVG inline da bandeira de um idioma; se não existir, devolve um ícone de globo. |
| `getSavedLocale` | — | `string \| null` | Lê o idioma salvo do usuário (`demoscopeLanguage`) a partir de `localStorage`. |
| `getActiveLocale` | — | `string` | Determina o idioma ativo: escolha salva → Steam `?l=` → idioma do navegador/página → `en`. |
| `getLanguageBadge` | — | `string` | Nome próprio do idioma, p. ex. «English version», para o selo do seletor de idioma. |
| `getBrowserLocale` | — | `string \| null` | Encontra o primeiro idioma compatível do navegador, incluindo variantes regionais. |
| `syncAutomaticLanguage` | — | `boolean` | No modo automático, sincroniza ?l= com o idioma do navegador e navega se forem diferentes. |
| `getRenderedSteamLanguage` | — | `string \| null` | Lê o idioma Steam em que a VACNet realmente carregou a página, pelo parâmetro l= nos URLs das folhas de estilo e scripts. |
| `syncSelectedLanguage` | — | `boolean` | Ao escolher um idioma manualmente, solicita a página uma vez com o ?l= correspondente para que a VACNet use esse idioma. Evita navegação desnecessária e ciclos de redirecionamento. Retorna true se navegou. |
| `tr` | `key: string` | `string` | Procura uma string da interface para o idioma ativo (alternativa: inglês e, depois, a própria chave). |
| `inviteText` | `key: string` | `string` | A mesma pesquisa para a tabela de strings da página de convites. |
| `settingText` | `key: string` | `string` | A mesma pesquisa para a tabela de strings da caixa de configurações. |
| `getPresetLabel` | `name: string` | `string` | Etiqueta localizada de uma predefinição; compõe combinações como «Bot + Aim». |
| `buildLanguageOptions` | `{ activeLocale = getActiveLocale(), selectedLocale = null } = {}` | `string (HTML)` | HTML dos botões de escolha de idioma, incluindo a entrada «auto». |
| `installLanguageSelector` | `root: HTMLElement, onLocaleSelect: Function \| null = null` | `void` | Conecta e posiciona o seletor de idioma, salva a escolha e recarrega a página; um callback opcional pode tratar a seleção em vez disso. |
| `queueNoticeText` | `key: string, locale = getQueueNoticeLocale()` | `string` | Busca o texto localizado da fila vazia ou do rodapé. |

## Efeitos sonoros e caixa de configurações

| Função | Parâmetros | Retorno | Descrição |
|---|---|---|---|
| `getSettingsHistorySummary` | — | `string` | Linha «N entradas · última entrada: …» apresentada na caixa de configurações. |
| `soundsEnabled` | — | `boolean` | Indica se os sons da interface estão ativados (`demoscopeSoundEffectsEnabled`, ativados por padrão). |
| `getSoundVolume` | — | `number (0–1)` | Volume de som salvo (`demoscopeSoundEffectsVolume`, 0,4 por padrão). |
| `playUiSound` | `kind = "click"` | `void` | Sintetiza uma curta sequência de tons com Web Audio (`click`, `select`, `toggle`, `copy`, `confirm`, `preview`, `tick`, `open`, `close`, `error`); nunca lança erros. |
| `readSettingsHotkey` | — | `string` | `KeyboardEvent.code` salvo que abre a caixa de configurações (`F2` por padrão). |
| `formatHotkey` | `code: string` | `string` | Nome legível de uma tecla (`KeyQ` → `Q`, `Numpad1` → `Num 1`). |
| `getSettingsHotkeyCode` | `event: KeyboardEvent` | `string` | Extrai o código da tecla física, remapeando os teclados não latinos para `KeyX`; `""` se não for utilizável. |
| `isReservedSettingsHotkey` | `code: string` | `boolean` | Verdadeiro para as teclas que o DemoScope ou o player já usam (Enter, espaço, setas, `M`, `F`, `1`–`5`, …). |
| `ensureSettingsDialog` | — | `HTMLDialogElement` | Cria e conecta as configurações: sons e volume, prévia, atalho, histórico local e limites, formato de hora, importar/exportar JSON, exportar/mesclar HTML, limpar histórico, visibilidade do rodapé e redefinir. |
| `openSettingsDialog` | `opener = null` | `void` | Abre a caixa com os valores atuais e memoriza o elemento a que devolver o foco. |
| `installSettingsUi` | — | `void` | Instala o ouvinte global de teclas em fase de captura (abrir/fechar a caixa, reatribuição) e os eventos de som. |
| `installUiSoundEvents` | — | `void` | Ouvinte de cliques delegado que reproduz sons de resposta para os controlos do DemoScope. |
| `ensureSettingsLayoutStyles` | — | `void` | Aplica estilos à janela de configurações: seções alinhadas à esquerda e linhas com resumos. |
| `refreshSettingsSummaries` | — | `void` | Atualiza os resumos de Atalhos e Animações. |
| `installExtraSettingsSections` | `settingsDialog: HTMLDialogElement` | `void` | Adiciona Atalhos, Animações, Diagnóstico e Redefinir; oculta a antiga configuração da tecla de ajustes, agora editada em Atalhos. |

## Backups, relatórios e limites do histórico

| Função | Parâmetros | Retorno | Descrição |
|---|---|---|---|
| `exportLocalHistory` | — | `void` | Baixa todo o histórico como `demoscope-history-YYYY-MM-DD.json`. |
| `downloadHistoryFile` | `content: string, filename: string, mimeType: string` | `void` | Inicia a download de um arquivo através de um URL Blob temporário. |
| `collectHistoryReportRows` | `store: object` | `Array<{vodId, ts, summary, segment}>` | Aplana e remove duplicados das entradas do histórico, as mais recentes primeiro. |
| `exportReadableHistory` | — | `void` | Baixa um relatório HTML autónomo e localizado do histórico. |
| `buildReadableHistoryReport` | `rows: Array, reportTitle: string, summaryNote = ""` | `string (HTML document)` | Constrói o HTML do relatório com os caracteres escapados. |
| `setMergeReportStatus` | `statusElement: HTMLElement, message: string, state: string` | `void` | Atualiza a linha de estado da ferramenta de fusão (`progress`, `success`, `warning`). |
| `exportCombinedHistoryReports` | `files: FileList \| File[], statusElement: HTMLElement, button: HTMLButtonElement` | `Promise<void>` | Valida várias cópias JSON (≤ 5 MB cada, ≤ 100 MB no total), remove entradas duplicadas e baixa um único relatório HTML combinado. |
| `isSafeHistoryKey` | `key: string` | `boolean` | Verificação por lista de permissões das chaves do histórico (bloqueia `__proto__`, `constructor` e chaves mal formadas). |
| `importLocalHistory` | `file: File` | `Promise<void>` | Valida uma cópia JSON, funde-a com o histórico local (respeitando os limites) e atualiza a interface. |
| `readHistoryLimit` | `storageKey: string, allowedValues: number[], defaultValue: number` | `number` | Lê um limite numérico de `localStorage`, aceitando apenas valores permitidos. |
| `getHistoryPerKeyLimit` | — | `number` | Entradas mantidas por chave de clip/jogo (10/20/30/50, 30 por padrão). |
| `getHistoryTotalLimit` | — | `number` | Número total de chaves de clip/jogo mantidas (100/200/300/500, 300 por padrão). |

## Nome da conta e página de convites

| Função | Parâmetros | Retorno | Descrição |
|---|---|---|---|
| `accountNameIsHidden` | — | `boolean` | Indica se o nome da conta Steam está oculto neste momento. |
| `installAccountNameControl` | — | `void` | Adiciona um interruptor em forma de olho junto ao link de sair e mantém-no sincronizado através de um `MutationObserver`. |
| `installInvitePage` | — | `boolean` | Redesenha `/vacnet/createinvite`: layout em cartão, mostrar/ocultar e copiar o link (Clipboard API com alternativa `execCommand`), lista de requisitos, seletor de idioma. Devolve `false` se faltarem os elementos esperados. |
| `installInviteExtras` | `card: HTMLElement, doneLink: HTMLElement \| null` | `void` | Adiciona o botão × e os manipuladores inviteDone (Enter) e inviteClose (Esc). Ignora teclas quando o foco está em botão, link, campo, diálogo ou lista de idiomas. |
| `refreshInviteKeyLabels` | — | `void` | Atualiza o rótulo Concluído e a dica do botão × conforme as teclas atuais. |
| `installWelcomePage` | — | `boolean` | Reformula a página de boas-vindas, adiciona identidade e seletor de idioma; Enter/Space continua; retorna false se faltarem elementos. |

## Segmento do clip e adaptador do player

| Função | Parâmetros | Retorno | Descrição |
|---|---|---|---|
| `parseSegmentBounds` | — | `{startTime, endTime, duration} \| null` | Extrai `startTime`/`endTime` dos scripts inline da página. |
| `formatSegmentTime` | `seconds: number` | `string` | Formata os segundos como `m:ss.cc`. |
| `getVideoElement` | — | `HTMLVideoElement \| null` | Localiza o elemento `<video>` da revisão. |
| `getVjsPlayer` | — | `Video.js player \| null` | Devolve o player Video.js da página, se estiver disponível e não tiver sido destruído. |
| `createPlayerAdapter` | — | `adapter \| null` | API unificada sobre Video.js / vídeo HTML5: `currentTime`, `paused`, `pause`, `play`, `playbackRate(s)`, `muted`, `on`, `isFullscreen`, `requestFullscreen`, `exitFullscreen`. |
| `waitForPlayerAdapter` | `timeoutMs = 20000` | `Promise<adapter>` | Consulta a cada 100 ms até existir um player; rejeita ao esgotar o tempo. |
| `clampSegment` | `time: number, bounds: object` | `number` | Limita um instante aos limites do clip. |
| `segmentProgress` | `time: number, bounds: object` | `number (0–1)` | Posição relativa dentro do clip. |
| `installCustomControls` | `player, bounds, refreshDisplay: {current: Function}` | `void` | Adiciona a barra de busca, o indicador de tempo e as dicas de teclas por baixo do vídeo. |
| `pauseLayoutMutations` | `run: Function` | `void` | Executa uma função enquanto os observadores de layout estão suspensos (evita ciclos de retroalimentação). |
| `isShortcutBlocked` | `target: EventTarget` | `boolean` | Retorna true se o foco estiver em um campo, textarea, select ou texto editável. |
| `isPlayerShortcutBlocked` | `target: EventTarget` | `boolean` | Como isShortcutBlocked, mas permite atalhos quando o foco está em uma opção de veredito. |
| `formatShiftSpeedLabel` | `rate: number` | `string` | Etiqueta de uma opção de velocidade. |
| `buildShiftSpeedSelectOptions` | `selectedRate: number` | `string (HTML)` | Lista de `<option>` para o seletor de velocidade (0,5–4×). |
| `readStoredShiftSpeed` | — | `number` | Velocidade de Shift salva (2× por padrão). |
| `readStoredVerdictRandomizer` | — | `boolean` | Estado salvo do randomizador de vereditos (desativado por padrão). |
| `installPlayerEnhancements` | `player: adapter, bounds: object` | `void` | Conecta o tratamento da velocidade de reprodução, a limitação/pausa do segmento, os auxiliares de procura/avanço por quadros/silêncio/tela cheia e os atalhos de teclado globais (`1`–`5`, setas, `,` `.`, espaço, `M`, `F`, Shift). Closures internas: `applyPlayerRate`, `setShiftSpeed`, `setShiftSpeedActive`, `seekBy`, `stepFrame`, `togglePlay`, `toggleMute`, `toggleFullscreen`, auxiliares do ciclo de desenho. |

## Vereditos predefinidos

| Função | Parâmetros | Retorno | Descrição |
|---|---|---|---|
| `applyDefaultVerdicts` | `root = document` | `void` | Seleciona «skip» em cada grupo de veredicto sem seleção. |
| `getSelectedVerdictState` | — | `object` | Valor atual (`positive` / `negative` / `skip` / `null`) de `aimassist`, `wallhack`, `autobhop`, `bot`. |
| `detectActivePreset` | — | `string \| null` | Nome da predefinição que corresponde à seleção atual. |
| `syncPresetButtons` | — | `string \| null` | Atualiza `aria-pressed` nos botões de predefinições e o selo da predefinição ampliada. |
| `applyPreset` | `name: string, { announce = false }` | `Promise<boolean>` | Clica nos campos de opção de uma predefinição; com o randomizador ativado, mistura a ordem e espera 200–600 ms entre cliques. Desativa os botões de predefinições durante a execução. |
| `readAdvancedPresetsOpen` | — | `boolean` | Indica se a gaveta de predefinições ampliadas ficou aberta. |
| `normalizeVerdictLabels` | `root = document` | `void` | Remove a marcação de realce das etiquetas de veredicto. |
| `applyVerdictSectionTitles` | `root = document` | `void` | Adiciona títulos localizados por cima de cada grupo de veredicto. |
| `ensureVerdictHelp` | `block: HTMLElement, titleEl: HTMLElement, title: string, field: string` | `void` | Cria o botão de ajuda e a explicação localizada de um grupo de vereditos; o texto da VACNet é alternativa. |
| `closeVerdictHelp` | `except = null` | `void` | Fecha todas as explicações abertas, exceto a indicada. |
| `installVerdictHelpHandlers` | — | `void` | Instala uma vez os manipuladores de clique, clique externo e Esc das explicações. |

## Avisos, rodapé e carregamento ao enviar

| Função | Parâmetros | Retorno | Descrição |
|---|---|---|---|
| `hideSiteFooter` | — | `void` | Oculta o rodapé do site. |
| `showToast` | `message: string, type = "info", duration = 1800` | `void` | Mostra um aviso não bloqueante com ARIA-live. |
| `markSubmitPending` | — | `void` | Salva a data/hora do envio e o id do clip atual em `sessionStorage`. |
| `isSubmitPending` | — | `boolean` | Indica se um envio está à espera do clip seguinte. |
| `clearSubmitPending` | — | `void` | Limpa os marcadores de envio pendente. |
| `showSubmitLoadingOverlay` | `message = tr("nextClip")` | `void` | Mostra a camada de carregamento em tela cheia. |
| `hideSubmitLoadingOverlay` | — | `void` | Oculta a camada e limpa o estado pendente. |
| `bootSubmitLoadingIfPending` | — | `void` | Volta a mostrar a camada ao carregar a página, se houver um envio pendente. |
| `isReviewPageReady` | `prevVod: string, startedAt: number` | `boolean` | Verdadeiro quando a interface e os conteúdos multimédia do clip seguinte estão prontos. |
| `finishSubmitLoadingWhenReady` | — | `Promise<void>` | Espera até 30 s pelo clip seguinte e depois oculta a camada (aviso de erro se o tempo esgotar). |

## Armazenamento do histórico local

| Função | Parâmetros | Retorno | Descrição |
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
| `writeClipHistoryStore` | `store: object` | `boolean` | Poda e salva; `false` em caso de erros de quota/armazenamento. |
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
| `ensureReviewRulesDialog` | — | `void` | Cria a caixa das regras de revisão e conecta os seus botões de abrir/fechar. |
| `installLocalHistoryButton` | `panel: HTMLElement` | `void` | Conecta o botão «histórico local» (desloca-se até à lista ou mostra um aviso se estiver vazio). |
| `positionClipHistoryPanel` | — | `void` | Mantém o painel como primeiro elemento em `.verdicts-container`. |
| `renderClipHistory` | `bounds: object \| null` | `void` | Volta a desenhar o painel do histórico para o clip atual. |
| `appendReviewHistory` | `bounds: object \| null` | `void` | Acrescenta o resumo do veredicto atual ao histórico do jogo e do clip. |
| `isLocalHistoryEnabled` | — | `boolean` | Lê se o histórico local está ativado; fica ativado por padrão. |
| `readTimeFormat` | — | `string` | Lê o formato de hora: automático, 12 ou 24 horas. |
| `formatQueueFirstSeen` | `timestamp: number, locale = getActiveLocale()` | `string` | Formata a hora da primeira detecção conforme o idioma e o formato escolhido. |
| `getQueueNoticeLocale` | — | `string` | Retorna o idioma ativo do aviso de fila vazia. |
| `migrateEmptyQueueLanguage` | — | `boolean` | Migra a antiga preferência de idioma para a configuração compartilhada e sincroniza a URL. |
| `updateEmptyQueueTimestamp` | — | `void` | Atualiza a hora de primeira detecção exibida. |

## Fluxo de envio

| Função | Parâmetros | Retorno | Descrição |
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
| `submitVerdictForm` | `{ recordHistory = false } = {}` | `boolean` | Executa a verificação de segurança, mostra a camada de carregamento e envia o formulário. |
| `submitVerdictsDirect` | — | `boolean` | Prepara as etiquetas e envia. |
| `invokeProceedAction` | — | `boolean` | Manipulador de Enter/clique: a primeira pressão arma, a segunda envia. |
| `installProceedShortcut` | — | `void` | Ouvinte em fase de captura para `Enter`/`NumpadEnter`. |
| `invokeCancelAction` | — | `boolean` | Desarma a primeira etapa do envio ou clica em Cancelar; retorna false se não houver nada para cancelar. |
| `refreshCancelButtonLabel` | — | `void` | Adiciona ou atualiza a tecla atribuída ao botão Cancelar. |
| `hookProceedButton` | — | `void` | Substitui o comportamento de clique do botão de envio nativo. |
| `installVerdictChangeReset` | — | `void` | Desarma o envio e volta a sincronizar as predefinições quando um veredicto muda. |
| `scheduleProceedFooterFix` | — | `void` | Chamada diferida (`requestAnimationFrame`) de `fixProceedFooter`. |
| `scheduleVerdictLabelsFix` | — | `void` | Renormalização diferida de etiquetas/títulos/valores padrão. |

## Registro e remapeamento de atalhos

| Ação | Padrão | Grupo | Descrição |
|---|---|---|---|
| `playPause` | `Space` | Reprodução | Pausa ou retoma o clipe. |
| `mute` | `M` | Reprodução | Ativa ou desativa o som. |
| `fullscreen` | `F` | Reprodução | Ativa ou desativa a tela cheia. |
| `seekBack` / `seekForward` | `←` / `→` | Navegação | Volta ou avança 5 segundos. |
| `frameBack` / `frameForward` | `,` / `.` | Navegação | Volta ou avança um quadro. |
| `speedBoost` | `Shift` | Navegação | Acelera enquanto a tecla estiver pressionada. |
| `quick1` … `quick5` | `1` … `5` | Vereditos | Formulário clássico: predefinições 1–5; tarefa de uma pergunta: três opções nas teclas 1–3. |
| `proceed` | `Enter` | Envio | Confirma o veredito ou prepara e envia o formulário clássico. |
| `cancel` | `Esc` | Envio | Clica em Cancelar ou desarma o primeiro Enter. |
| `inviteDone` | `Enter` | Convite | Sai da página de convite, como o botão Concluído. |
| `inviteClose` | `Esc` | Convite | Fecha a página de convite, como o botão ×. |
| `settings` | `F2` | Interface | Abre ou fecha Configurações. |

As teclas são salvas como códigos KeyboardEvent.code em demoscopeKeybindings. Só as alterações em relação ao padrão são guardadas; a tecla de Configurações fica separada. Modificadores esquerdo/direito contam como uma tecla; o teclado numérico equivale à fileira principal. Tab, Ctrl, Alt, Meta, Caps Lock, ContextMenu, F5, F11 e F12 não podem ser atribuídas. Conflitos são verificados entre revisão, convite e a tecla global de Configurações.

| Função | Parâmetros | Retorno | Descrição |
|---|---|---|---|
| `fmt` | `template: string, vars = {}` |  |  |
| `isModalOpen` | — |  |  |
| `normalizeKeyCode` | `code: string` |  |  |
| `formatKeyLabel` | `code: string` |  |  |
| `loadKeyOverrides` | — |  |  |
| `saveKeyOverrides` | `overrides: object` |  |  |
| `getBinding` | `id: string` |  |  |
| `setBinding` | `id: string, code: string` |  |  |
| `resetAllBindings` | — |  |  |
| `findKeyConflict` | `id: string, code: string` |  |  | Procura outra ação que já use a tecla em um escopo sobreposto. |
| `getActionForEvent` | `event: KeyboardEvent, scope = currentKeyScope()` |  |  | Resolve o evento de teclado para o identificador da ação no escopo atual. |
| `keyScopeOf` | `id: string` |  |  |
| `keyScopesOverlap` | `a: string, b: string` |  |  |
| `currentKeyScope` | — |  |  |
| `validateKeyForAction` | `id: string, code: string` |  |  |
| `quickRangeLabel` | `count: number` |  |  |
| `buildHintsInnerMarkup` | — |  |  |
| `refreshKeyLabels` | — |  |  |
| `ensureDemoscopeDialogStyles` | — |  |  |
| `hkActionName` | `id: string` |  |  |
| `hkGroupName` | `group: string` |  |  |
| `hkActionDescription` | `id: string` |  |  |
| `hkSetMessage` | `text: string, warn = false` |  |  |
| `hkCancelCapture` | — |  |  |
| `hkRowMarkup` | `action: object` |  |  |
| `renderHotkeys` | — |  |  |
| `hkCommit` | `actionId: string, code: string, mode = "replace"` |  |  |
| `hkRequestAssign` | `actionId: string, code: string` |  |  |
| `ensureHotkeysDialog` | — |  |  |
| `openHotkeysDialog` | — |  |  |

## Animações

Há seis estilos de indicador, três velocidades (0,6× / 1× / 1,7×) e um controle liga/desliga, salvos em demoscopeAnimStyle, demoscopeAnimSpeed e demoscopeAnimEnabled. data-ds-anim aplica o estilo ao ponto e às prévias.

| Função | Parâmetros | Retorno | Descrição |
|---|---|---|---|
| `readStorage` | `key: string` | `string \| null` | Lê o localStorage com segurança. |
| `writeStorage` | `key: string, value: string \| null` | `void` | Grava no localStorage; null remove a chave. |
| `animEnabled` | — | `boolean` | Lê o estado salvo; começa desativada se o sistema solicitar redução de movimento. |
| `animStyle` | — | `string` | Lê o estilo salvo (pulse por padrão). |
| `animSpeedKey` | — | `string` | Lê a velocidade salva (normal por padrão). |
| `ensureAnimationStyles` | — | `void` | Adiciona regras compartilhadas pelo indicador e pelas prévias. |
| `applyAnimationSettings` | — | `void` | Aplica estilo, velocidade e estado a html e atualiza o resumo. |
| `ensureAnimationsDialog` | — | `HTMLDialogElement` | Cria a janela de Animações com controle, velocidade, estilos, prévias e redefinição. |
| `openAnimationsDialog` | — | `void` | Abre a janela de Animações. |
| `ensureUiPolishStyles` | — | `void` | Aplica barras de rolagem escuras e finas e esquema escuro às janelas e aos vereditos. |

## Tarefa de uma pergunta

| Função | Parâmetros | Retorno | Descrição |
|---|---|---|---|
| `isCheatingMode` | — | `boolean` | Retorna true se a página mostrar a tarefa de uma pergunta. |
| `selectCheatingVerdict` | `kind: string` | `void` | Seleciona uma das três opções. Se estiver bloqueada, toca um som de erro e move o cartão. |
| `localizeCheatingVerdicts` | — | `void` | Traduz as três opções e adiciona as teclas com CSS para que não apareçam na confirmação da VACNet. Prepara o cartão de bloqueio. |
| `updateCheatingLock` | — | `void` | Atualiza o aviso de bloqueio e o tempo restante; oculta-o quando as opções são liberadas ou um veredito é escolhido. |
| `startCheatingLockWatcher` | — | `void` | Inicia o temporizador de 250 ms que atualiza o bloqueio. |

## Resiliência e diagnóstico

| Função | Parâmetros | Retorno | Descrição |
|---|---|---|---|
| `recordFailure` | `step: string, error: any` | `void` | Registra a falha de uma etapa em uma lista limitada para o relatório de diagnóstico. |
| `safeStep` | `step: string, fn: Function, fallback?: any` | `any` | Executa uma etapa; se falhar, registra o erro e retorna o valor alternativo. |
| `getVideoContainer` | — | `HTMLElement \| null` | Procura o contêiner de vídeo ou usa o elemento pai do player ou do vídeo. |
| `getVerdictContainer` | — | `HTMLElement \| null` | Procura o contêiner de vereditos ou o elemento pai do primeiro bloco. |
| `getSubmitArea` | — | `HTMLElement \| null` | Procura a área de envio ou confirmação. |
| `hasVerdictForm` | — | `boolean` | Retorna true se houver ao menos uma opção de veredito. |
| `removeEnhancements` | — | `void` | Remove painéis e classes do DemoScope e restaura o rodapé da VACNet. |
| `disableDemoScope` | `reason: string` | `void` | Desativa o DemoScope na página, reverte as alterações e mostra um aviso por sessão. |
| `isOwnNode` | `el: Element` | `boolean` | Verifica se o elemento foi criado pelo DemoScope; esses elementos ficam fora do relatório estrutural. |
| `elementSignature` | `el: Element` | `string` | Gera uma assinatura de tag, id e classes sem texto. |
| `skeletonOf` | `root: Element, maxDepth = 7, maxNodes = 170` | `string` | Cria uma árvore compacta de tags, ids e classes; agrupa elementos irmãos idênticos como ×N. |
| `captureOriginalSkeleton` | — | `void` | Salva a estrutura da página antes das alterações do DemoScope. |
| `buildDiagnosticsReport` | — | `string` | Gera um relatório com versão, página, idioma, navegador, tipo de tarefa, 22 verificações, falhas e estrutura antes/depois. Não inclui texto da página nem dados da conta. |
| `fallbackCopyText` | `text: string` | `boolean` | Copia o texto por uma área temporária se a Clipboard API não estiver disponível. |
| `copyDiagnostics` | `statusEl: HTMLElement, textarea: HTMLTextAreaElement` | `Promise<void>` | Copia o relatório; se falhar, mostra o texto em um campo selecionável. |

## Layout e inicialização

| Função | Parâmetros | Retorno | Descrição |
|---|---|---|---|
| `buildShiftSpeedBar` | — | `HTMLElement` | Constrói a barra do seletor de velocidade de Shift. |
| `buildPresetButtonMarkup` | `name: string, shortcut = "", labelOverride = ""` | `string (HTML)` | HTML de um botão de predefinição. |
| `buildAdvancedPresetGroupsMarkup` | — | `string (HTML)` | HTML dos grupos de predefinições ampliadas. |
| `buildEnhancementBar` | — | `HTMLElement` | Constrói a barra de veredicto rápido: predefinições, interruptor do randomizador, gaveta ampliada. |
| `positionShiftSpeedBar` | — | `void` | Mantém a barra de velocidade antes da lista de vereditos. |
| `positionEnhancementBar` | — | `void` | Mantém a barra de predefinições antes dos botões de envio. |
| `fixProceedFooter` | — | `void` | Reorganiza o rodapé, as barras e o botão de envio. |
| `enhanceLayout` | — | `void` | Aplica todas as alterações de layout e instala a interface de configurações. |
| `ensureReviewStructure` | — | `void` | Normaliza a estrutura da VACNet, reposiciona o botão de envio e mostra o contador no cabeçalho; aceita a estrutura antiga e a nova. |
| `watchProceedFooter` | — | `void` | Observa `.verdicts-container` e agenda correções do rodapé. |
| `watchVerdictLabels` | — | `void` | Observa as etiquetas de veredicto e agenda a renormalização. |
| `readFooterPreference` | `storageKey: string` | `boolean` | Lê do localStorage a preferência de visibilidade do rodapé. |
| `saveFooterPreference` | `storageKey: string, hidden: boolean` | `void` | Salva a preferência de visibilidade do rodapé. |
| `applyFooterPreferences` | `footer: HTMLElement \| null = document.querySelector(".demoscope-custom-footer")` | `void` | `void` |
| `installDemoScopeFooter` | `withClipLinks: boolean, locale = getActiveLocale(), showFeedback = true` | `HTMLElement` | Cria ou atualiza o rodapé localizado, com links opcionais, e aplica as preferências. |
| `installEmptyQueueNotice` | — | `boolean` | Substitui a mensagem de fila vazia por orientações localizadas, horário, seletor de idioma e rodapé. |
| `init` | — | `Promise<void>` | Ponto de entrada: controlo do nome da conta → página de convites ou de revisão → layout, observadores, atalhos, melhorias do player. |

installWelcomePage e installInvitePage retornam false se faltarem elementos necessários da VACNet. installEmptyQueueNotice retorna false se a fila não estiver vazia.

### Itens não listados acima

* **`blockSegmentLoopGuard`** (IIFE, executada ao carregar): substitui por uma função vazia o temporizador nativo de 100 ms do site para o ciclo do segmento; os controlos do DemoScope gerem esse limite.
* **Constantes e tabelas:** SUPPORTED_LOCALES, FLAG_SVG, UI_TEXT_ROWS, INVITE_TEXT_ROWS, SETTINGS_TEXT_ROWS, PRESETS, PRESET_KEYS, PRESET_TONES, ADVANCED_PRESET_GROUPS, SHIFT_SPEEDS, FRAME_STEP e ARROW_JUMP_SEC (21 definições PRESETS); adicionados desde v1.0.0: KEY_ACTIONS, KEY_GROUPS, KEY_ACTION_BY_ID, KEY_ACTION_SCOPE, RESERVED_KEY_CODES, CHEATING_KEYS, VERDICT_SECTION_TITLES, VERDICT_SECTION_HELP, ANIM_STYLES e ANIM_SPEEDS.
* **Estado do módulo:** diag (etapas com falha, motivo da desativação e estrutura original da página), hkState (estado da janela de atalhos) e a constante SCRIPT_VERSION usada no relatório de diagnóstico.
* **Textos:** todos os textos visíveis estão nas tabelas localizadas acima; as janelas adicionadas entre v1.2.0 e v1.4.0 estão traduzidas para os 29 idiomas.

## Chaves de armazenamento

| Chave | Armazenamento | Finalidade |
|---|---|---|
| `demoscopeLanguage`, `demoscopeLanguageAuto` | `localStorage` | Armazenamento local | Idioma e modo automático. 
| `demoscopeKeybindings` | `localStorage` | Armazenamento local | Atalhos diferentes do padrão (JSON). 
| `demoscopeSettingsHotkey` | `localStorage` | Armazenamento local | Tecla para abrir Configurações. 
| `demoscopeAnimEnabled`, `demoscopeAnimStyle`, `demoscopeAnimSpeed` | `localStorage` | Armazenamento local | Configurações de animação. 
| `demoscopeSoundEffectsEnabled`, `demoscopeSoundEffectsVolume` | `localStorage` | Armazenamento local | Configurações de som. 
| `demoscopeClipHistory` and the history limit/format keys | `localStorage` | Armazenamento local | Histórico local e suas opções. 
| `demoscopeSubmitPending`, `demoscopeSubmitPrevVod`, `demoscopeLangSyncTried`, `demoscopeDisabledNotice` | `sessionStorage` |Armazenamento da sessão| Estado do envio, sincronização de idioma e aviso de desativação. 


