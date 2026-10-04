<div align="center">

[English](../README.md) · [Български](bg_README.md) · [Magyar](hu_README.md) · [Tiếng Việt](vi_README.md) · [Ελληνικά](el_README.md) · [Dansk](da_README.md) · [Bahasa Indonesia](id_README.md) · [Español (España)](es-ES_README.md) · [Español (Latinoamérica)](es-419_README.md) · [Italiano](it_README.md) · [繁體中文](zh-TW_README.md) · [简体中文](zh-CN_README.md) · [한국어](ko_README.md) · [Deutsch](de_README.md) · [Nederlands](nl_README.md) · [Norsk](no_README.md) · [Polski](pl_README.md) · **Português (Portugal)** · [Português (Brasil)](pt-BR_README.md) · [Română](ro_README.md) · [Русский](ru_README.md) · [ไทย](th_README.md) · [Türkçe](tr_README.md) · [Українська](uk_README.md) · [Suomi](fi_README.md) · [Français](fr_README.md) · [Čeština](cs_README.md) · [Svenska](sv_README.md) · [日本語](ja_README.md)

# DemoScope — CS2 Review Toolkit

![Version](https://img.shields.io/badge/version-1.0.0-blue) ![License](https://img.shields.io/badge/license-MIT-green) ![Userscript](https://img.shields.io/badge/Tampermonkey%20%7C%20Violentmonkey-userscript-orange)

**Kit de userscripts centrado no teclado para revisores do CS2 VACNet: vereditos predefinidos, leitor de vídeo com controlo de segmento, melhorias na página de convites, efeitos sonoros e histórico local privado — em 29 idiomas.**

</div>

## Visão geral

O DemoScope melhora as páginas de revisão do Counter-Strike VACNet (`counter-strike.net/vacnet`). Em vez de clicar em quatro grupos de veredicto (aim assist, wallhack, auto-bhop, bot) em cada clip curto, tem um fluxo de trabalho centrado no teclado: vereditos predefinidos, uma barra de procura limitada ao segmento revisto, avanço fotograma a fotograma, aceleração temporária, confirmação de envio em dois passos e um histórico privado dos seus próprios vereditos. Tudo corre localmente no seu navegador.

## Principais funcionalidades

- **Vereditos predefinidos** – 5 predefinições rápidas nas teclas `1`–`5` mais 15 combinações alargadas (aim, wallhack, bhop, bot e as suas misturas, incluindo as variantes «incerto»).
- **Leitor com controlo de segmento** – barra de procura, indicador de tempo, saltos de ±5 s e avanço de 1/64 s por fotograma limitados ao início e ao fim do clip.
- **Aceleração ao manter premido** – mantenha `Shift` premido para reproduzir a uma velocidade configurável (0,5×–4×, predefinição 2×).
- **Envio seguro em dois passos** – `Enter` arma o botão e um segundo `Enter` envia os vereditos; os destinos de formulário de outra origem são bloqueados.
- **Interface em 29 idiomas** – segue o parâmetro `?l=` do Steam, a sua escolha guardada ou o idioma do navegador, com seletor de idioma na página.
- **Histórico de revisões local** – histórico por clip e por jogo em `localStorage`; exportação/importação JSON, relatório HTML e fusão de várias cópias de segurança num único relatório.
- **Melhorias na página de convites** – `/vacnet/createinvite` redesenhada com mostrar/ocultar e cópia com um clique da ligação de convite, mais um resumo dos requisitos.
- **Efeitos sonoros** – tons sintetizados com Web Audio, com interruptor, volume e pré-visualização.
- **Caixa de diálogo de definições** – abre-se com `F2` (reatribuível): sons, atalho, limites do histórico, cópias de segurança, repor predefinições.
- **Comodidades** – ecrã de carregamento após o envio, avisos, botão para ocultar o nome da conta, caixa com as regras de revisão e aleatorizador de vereditos opcional (desativado por predefinição).

## Instalação

1. Instale um gestor de userscripts como o [Tampermonkey](https://www.tampermonkey.net/) ou o [Violentmonkey](https://violentmonkey.github.io/) (o script usa `GM_addStyle` e `unsafeWindow`).
2. [Instale o DemoScope](https://raw.githubusercontent.com/ebayybe/DemoScope/main/DemoScope.user.js) e confirme a instalação no seu gestor.
3. Inicie sessão no Steam e abra <https://www.counter-strike.net/vacnet/>.
4. Abra um clip de revisão — o DemoScope carrega automaticamente (a página `/vacnet/join` está excluída).

## Utilização

Os atalhos funcionam nas páginas de revisão sempre que o foco não está num campo de entrada, botão, ligação ou lista de seleção.

| Tecla | Ação |
|---|---|
| `1` … `5` | Aplicar um veredicto predefinido: 1 bot + aim + wallhack, 2 aim + wallhack, 3 rage, 4 jogador limpo, 5 incerto |
| `Shift` (hold) | Manter premido para acelerar (0,5×–4×, predefinição 2×, selecionável na página) |
| `←` `→` | Saltar 5 segundos para trás / para a frente |
| `,` `.` | Um fotograma (1/64 s) para trás / para a frente |
| `Space` | Reproduzir / pausar |
| `M` / `F` | Silenciar / ecrã inteiro (duplo clique no vídeo também alterna o ecrã inteiro) |
| `Enter` ×2 | Prima uma vez para armar o botão de envio e novamente para enviar os vereditos |
| `F2` | Abrir a caixa de diálogo de definições (reatribuível) |

## Arquitetura e descrição das funções

O DemoScope é uma única função autoinvocada (`@run-at document-start`, `@noframes`). `init()` escolhe entre a página de convites e a página de revisão e liga os módulos abaixo. A referência completa das 143 funções — nome, responsabilidade, parâmetros e valor devolvido — está em [pt-PT_FUNCTIONS.md](https://github.com/ebayybe/DemoScope/blob/main/docs/pt-PT_FUNCTIONS.md).

| Módulo | Responsabilidade | Funções principais |
|---|---|---|
| `Localization` | Determina o idioma da interface, procura textos, desenha bandeiras e o seletor de idioma | `getActiveLocale`, `tr`, `settingText`, `inviteText`, `getPresetLabel`, `installLanguageSelector` |
| `Segment & player` | Lê o início/fim do clip a partir da página, envolve a reprodução Video.js/HTML5, desativa o temporizador nativo de ciclo de segmento do site | `parseSegmentBounds`, `createPlayerAdapter`, `waitForPlayerAdapter`, `blockSegmentLoopGuard` |
| `Player enhancements` | Barra de procura própria, dicas de teclas, aceleração com Shift, avanço por fotogramas, atalhos de teclado | `installCustomControls`, `installPlayerEnhancements`, `isShortcutBlocked` |
| `Verdict presets` | Tabela de predefinições, estado da seleção, aplicação de predefinições com ordem e atrasos aleatórios opcionais | `applyPreset`, `detectActivePreset`, `syncPresetButtons`, `applyDefaultVerdicts`, `buildEnhancementBar` |
| `Submit flow` | Enter em dois passos, constrói `verdict_labels[]`, verificação de mesma origem, ecrã de carregamento | `invokeProceedAction`, `prepareVerdictFormForSubmit`, `submitVerdictForm`, `isSafeSubmitTarget`, `finishSubmitLoadingWhenReady` |
| `Local history` | Guarda, limpa e mostra o histórico por clip e por jogo em `localStorage` | `readClipHistoryStore`, `writeClipHistoryStore`, `appendReviewHistory`, `renderClipHistory` |
| `Backups & reports` | Exportação/importação JSON, relatório HTML, relatório combinado de várias cópias | `exportLocalHistory`, `importLocalHistory`, `exportReadableHistory`, `exportCombinedHistoryReports` |
| `Settings & sound` | Caixa de definições, atalho reatribuível, sinais sonoros Web Audio | `ensureSettingsDialog`, `openSettingsDialog`, `installSettingsUi`, `playUiSound` |
| `Invite page` | `/vacnet/createinvite` redesenhada: mostrar/ocultar e copiar a ligação, requisitos | `installInvitePage` |
| `Layout & UI helpers` | Avisos, ocultação do rodapé, observadores de esquema, interruptor do nome da conta | `enhanceLayout`, `showToast`, `watchProceedFooter`, `installAccountNameControl` |
| `Bootstrap` | Ponto de entrada: escolhe o tipo de página e inicia os módulos | `init` |

## Dados locais e privacidade

O DemoScope não envia telemetria. As definições e o histórico ficam no `localStorage` do navegador (chaves iniciadas por `demoscope`) e no `sessionStorage`. Use a opção de limpar o histórico na caixa de definições para o remover.

## Aviso legal

O DemoScope é um projeto comunitário não oficial, sem qualquer afiliação ou aprovação da Valve Corporation. Nunca decide um veredicto por si — reveja cada clip pessoalmente e cumpra as regras do programa de revisão. Utilize por sua conta e risco.

## License

Publicado sob a licença [MIT](../LICENSE).