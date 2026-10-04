<div align="center">

[English](../README.md) · [Български](bg_README.md) · [Magyar](hu_README.md) · [Tiếng Việt](vi_README.md) · [Ελληνικά](el_README.md) · [Dansk](da_README.md) · [Bahasa Indonesia](id_README.md) · [Español (España)](es-ES_README.md) · [Español (Latinoamérica)](es-419_README.md) · [Italiano](it_README.md) · [繁體中文](zh-TW_README.md) · [简体中文](zh-CN_README.md) · [한국어](ko_README.md) · [Deutsch](de_README.md) · [Nederlands](nl_README.md) · [Norsk](no_README.md) · [Polski](pl_README.md) · [Português (Portugal)](pt-PT_README.md) · **Português (Brasil)** · [Română](ro_README.md) · [Русский](ru_README.md) · [ไทย](th_README.md) · [Türkçe](tr_README.md) · [Українська](uk_README.md) · [Suomi](fi_README.md) · [Français](fr_README.md) · [Čeština](cs_README.md) · [Svenska](sv_README.md) · [日本語](ja_README.md)

# DemoScope — CS2 Review Toolkit

![Version](https://img.shields.io/badge/version-1.0.0-blue) ![License](https://img.shields.io/badge/license-MIT-green) ![Userscript](https://img.shields.io/badge/Tampermonkey%20%7C%20Violentmonkey-userscript-orange)

**Kit de userscripts focado no teclado para revisores do CS2 VACNet: vereditos predefinidos, player de vídeo com controle de segmento, melhorias na página de convites, efeitos sonoros e histórico local privado — em 29 idiomas.**

</div>

## Visão geral

O DemoScope melhora as páginas de revisão do Counter-Strike VACNet (`counter-strike.net/vacnet`). Em vez de clicar em quatro grupos de veredito (aim assist, wallhack, auto-bhop, bot) em cada clipe curto, você tem um fluxo de trabalho focado no teclado: vereditos predefinidos, uma barra de busca limitada ao segmento revisado, avanço quadro a quadro, aceleração temporária, confirmação de envio em duas etapas e um histórico privado dos seus próprios vereditos. Tudo roda localmente no seu navegador.

## Principais recursos

- **Vereditos predefinidos** – 5 predefinições rápidas nas teclas `1`–`5` mais 15 combinações estendidas (aim, wallhack, bhop, bot e suas misturas, incluindo as variantes “incerto”).
- **Player com controle de segmento** – barra de busca, indicador de tempo, saltos de ±5 s e avanço de 1/64 s por quadro limitados ao início e ao fim do clipe.
- **Aceleração ao manter pressionado** – mantenha `Shift` pressionado para reproduzir em velocidade configurável (0,5×–4×, padrão 2×).
- **Envio seguro em duas etapas** – `Enter` arma o botão e um segundo `Enter` envia os vereditos; destinos de formulário de outra origem são bloqueados.
- **Interface em 29 idiomas** – segue o parâmetro `?l=` da Steam, sua escolha salva ou o idioma do navegador, com seletor de idioma na página.
- **Histórico de revisões local** – histórico por clipe e por partida em `localStorage`; exportação/importação JSON, relatório HTML e mesclagem de vários backups em um único relatório.
- **Melhorias na página de convites** – `/vacnet/createinvite` redesenhada com mostrar/ocultar e cópia com um clique do link de convite, além de um resumo dos requisitos.
- **Efeitos sonoros** – tons sintetizados com Web Audio, com liga/desliga, volume e pré-escuta.
- **Caixa de configurações** – abre com `F2` (reatribuível): sons, atalho, limites do histórico, backups, restaurar padrões.
- **Conveniências** – tela de carregamento após o envio, avisos, botão para ocultar o nome da conta, caixa com as regras de revisão e randomizador de vereditos opcional (desativado por padrão).

## Instalação

1. Instale um gerenciador de userscripts como o [Tampermonkey](https://www.tampermonkey.net/) ou o [Violentmonkey](https://violentmonkey.github.io/) (o script usa `GM_addStyle` e `unsafeWindow`).
2. [Instale o DemoScope](https://raw.githubusercontent.com/ebayybe/DemoScope/main/DemoScope.user.js) e confirme a instalação no seu gerenciador.
3. Entre na Steam e abra <https://www.counter-strike.net/vacnet/>.
4. Abra um clipe de revisão — o DemoScope carrega automaticamente (a página `/vacnet/join` é excluída).

## Uso

Os atalhos funcionam nas páginas de revisão sempre que o foco não está em um campo de entrada, botão, link ou lista de seleção.

| Tecla | Ação |
|---|---|
| `1` … `5` | Aplicar um veredito predefinido: 1 bot + aim + wallhack, 2 aim + wallhack, 3 rage, 4 jogador limpo, 5 incerto |
| `Shift` (hold) | Manter pressionado para acelerar (0,5×–4×, padrão 2×, selecionável na página) |
| `←` `→` | Pular 5 segundos para trás / para a frente |
| `,` `.` | Um quadro (1/64 s) para trás / para a frente |
| `Space` | Reproduzir / pausar |
| `M` / `F` | Silenciar / tela cheia (clique duplo no vídeo também alterna a tela cheia) |
| `Enter` ×2 | Pressione uma vez para armar o botão de envio e novamente para enviar os vereditos |
| `F2` | Abrir a caixa de configurações (reatribuível) |

## Arquitetura e detalhamento das funções

O DemoScope é uma única função autoinvocada (`@run-at document-start`, `@noframes`). `init()` escolhe entre a página de convites e a página de revisão e conecta os módulos abaixo. A referência completa das 143 funções — nome, responsabilidade, parâmetros e valor retornado — está em [pt-BR_FUNCTIONS.md](https://github.com/ebayybe/DemoScope/blob/main/docs/pt-BR_FUNCTIONS.md).

| Módulo | Responsabilidade | Funções principais |
|---|---|---|
| `Localization` | Determina o idioma da interface, busca textos, desenha bandeiras e o seletor de idioma | `getActiveLocale`, `tr`, `settingText`, `inviteText`, `getPresetLabel`, `installLanguageSelector` |
| `Segment & player` | Lê o início/fim do clipe na página, encapsula a reprodução Video.js/HTML5, desativa o temporizador nativo de loop de segmento do site | `parseSegmentBounds`, `createPlayerAdapter`, `waitForPlayerAdapter`, `blockSegmentLoopGuard` |
| `Player enhancements` | Barra de busca própria, dicas de teclas, aceleração com Shift, avanço por quadros, atalhos de teclado | `installCustomControls`, `installPlayerEnhancements`, `isShortcutBlocked` |
| `Verdict presets` | Tabela de predefinições, estado da seleção, aplicação de predefinições com ordem e atrasos aleatórios opcionais | `applyPreset`, `detectActivePreset`, `syncPresetButtons`, `applyDefaultVerdicts`, `buildEnhancementBar` |
| `Submit flow` | Enter em duas etapas, monta `verdict_labels[]`, verificação de mesma origem, tela de carregamento | `invokeProceedAction`, `prepareVerdictFormForSubmit`, `submitVerdictForm`, `isSafeSubmitTarget`, `finishSubmitLoadingWhenReady` |
| `Local history` | Armazena, poda e exibe o histórico por clipe e por partida em `localStorage` | `readClipHistoryStore`, `writeClipHistoryStore`, `appendReviewHistory`, `renderClipHistory` |
| `Backups & reports` | Exportação/importação JSON, relatório HTML, relatório combinado de vários backups | `exportLocalHistory`, `importLocalHistory`, `exportReadableHistory`, `exportCombinedHistoryReports` |
| `Settings & sound` | Caixa de configurações, atalho reatribuível, sinais sonoros Web Audio | `ensureSettingsDialog`, `openSettingsDialog`, `installSettingsUi`, `playUiSound` |
| `Invite page` | `/vacnet/createinvite` redesenhada: mostrar/ocultar e copiar o link, requisitos | `installInvitePage` |
| `Layout & UI helpers` | Avisos, ocultação do rodapé, observadores de layout, alternador do nome da conta | `enhanceLayout`, `showToast`, `watchProceedFooter`, `installAccountNameControl` |
| `Bootstrap` | Ponto de entrada: escolhe o tipo de página e inicia os módulos | `init` |

## Dados locais e privacidade

O DemoScope não envia telemetria. As configurações e o histórico ficam no `localStorage` do navegador (chaves iniciadas por `demoscope`) e no `sessionStorage`. Use a opção de limpar o histórico na caixa de configurações para removê-lo.

## Aviso legal

O DemoScope é um projeto comunitário não oficial, sem afiliação ou endosso da Valve Corporation. Ele nunca decide um veredito por você — revise cada clipe pessoalmente e siga as regras do programa de revisão. Use por sua conta e risco.

## License

Publicado sob a licença [MIT](../LICENSE).