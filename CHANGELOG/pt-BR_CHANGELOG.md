<div align="center">

[English](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/en_CHANGELOG.md) · [Български](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/bg_CHANGELOG.md) · [Magyar](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/hu_CHANGELOG.md) · [Tiếng Việt](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/vi_CHANGELOG.md) · [Ελληνικά](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/el_CHANGELOG.md) · [Dansk](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/da_CHANGELOG.md) · [Bahasa Indonesia](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/id_CHANGELOG.md) · [Español (España)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/es-ES_CHANGELOG.md) · [Español (Latinoamérica)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/es-419_CHANGELOG.md) · [Italiano](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/it_CHANGELOG.md) · [繁體中文](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/zh-TW_CHANGELOG.md) · [简体中文](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/zh-CN_CHANGELOG.md) · [한국어](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ko_CHANGELOG.md) · [Deutsch](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/de_CHANGELOG.md) · [Nederlands](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/nl_CHANGELOG.md) · [Norsk](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/no_CHANGELOG.md) · [Polski](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/pl_CHANGELOG.md) · [Português (Portugal)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/pt-PT_CHANGELOG.md) · **Português (Brasil)** · [Română](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ro_CHANGELOG.md) · [Русский](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ru_CHANGELOG.md) · [ไทย](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/th_CHANGELOG.md) · [Türkçe](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/tr_CHANGELOG.md) · [Українська](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/uk_CHANGELOG.md) · [Suomi](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/fi_CHANGELOG.md) · [Français](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/fr_CHANGELOG.md) · [Čeština](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/cs_CHANGELOG.md) · [Svenska](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/sv_CHANGELOG.md) · [日本語](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ja_CHANGELOG.md)

</div>
# DemoScope v1.4.0

Versão de autoproteção: o DemoScope adapta-se agora às alterações nas páginas VACNet em vez de falhar a meio e informa o utilizador e o programador sobre o que aconteceu.

### Adicionado
- **Passos de configuração isolados.** Cada passo de apresentação e instalação é executado de forma independente. Se algum falhar, o erro é registado e os passos seguintes continuam, evitando que uma alteração deixe o painel incompleto.
- **Pesquisas alternativas** para o contentor de vídeo, o contentor dos veredictos e a área de envio. Se a VACNet mudar a classe do contentor de vídeo, o DemoScope encontra-o através do elemento do leitor em vez de desistir.
- **Desativação controlada.** Se a página tiver o vídeo mas não o formulário de veredictos (ou vice-versa), ou se falharem cinco ou mais passos de configuração, o DemoScope reverte as suas alterações, repõe o rodapé da VACNet, mantém apenas a janela de definições e apresenta um aviso uma vez. A página de fila vazia continua a ser reconhecida como antes e nunca aciona este comportamento.
- **Relatório de diagnóstico** (Definições → Diagnóstico → Copiar diagnóstico): versão do script, hora, idioma e navegador, página e tipo de tarefa, verificações de 22 elementos esperados (`ok` / `MISSING`), falhas registadas e estrutura da página antes e depois das alterações do DemoScope. A estrutura contém apenas etiquetas, IDs e classes, nunca texto da página. Se a área de transferência estiver bloqueada, o relatório aparece numa caixa cujo texto pode ser selecionado.
- Uma breve espera (até 2 s) antes de avaliar uma página que ainda esteja parcialmente carregada.

### Localização
- 6 novas cadeias (secção de diagnóstico, resultado da cópia e aviso de desativação) nos 29 idiomas.

# DemoScope v1.3.0

Definições, página de convite e melhorias no texto dos veredictos.

### Adicionado
- **Botão para fechar a página de convite.** Um × no canto do cartão regressa aos clips, tal como “Done”.
- **Atalhos na página de convite:** `Enter` executa “Done” e `Esc` faz o mesmo que ×. São ignorados quando um botão, ligação, campo, diálogo ou lista de idiomas tem o foco; o botão “Done” também passou a mostrar a tecla. Ambos podem ser reatribuídos na janela Hotkeys (novo grupo “Invite page”).
- **Conflitos de teclas limitados à página.** A página de convite não tem leitor, por isso `Enter` / `Esc` já não entram em conflito com os mesmos atalhos da página de revisão. A tecla das definições continua a entrar em conflito com tudo.
- **Barras de deslocamento escuras e finas** na janela de definições, nas janelas secundárias e na lista de veredictos, além de `color-scheme: dark`. Brave, Chrome e Edge mostravam anteriormente uma barra clara predefinida.

### Alterado
- **Janela de definições redesenhada.** As secções estão ordenadas pela frequência de utilização: Hotkeys, Animations, Sound effects, Local history, Footer, Diagnostics (adicionada na 1.4.0) e Reset. Tudo está alinhado à esquerda, como nas novas janelas secundárias. Hotkeys e Animations são linhas de acesso com uma etiqueta-resumo (“Changed: 2”, “Orbit · Fast”) que se atualiza quando os valores mudam.
- **Uma reposição para tudo.** O botão passou para uma secção própria e agora repõe o som, o volume, os atalhos e as animações (o texto de confirmação indica-o). O histórico é mantido.
- O antigo bloco “settings key” foi removido da janela: essa tecla é agora editada na janela Hotkeys como todas as outras.
- **O texto de confirmação do veredicto deixou de incluir o número da tecla.** A VACNet copia o texto da etiqueta selecionada para a linha de confirmação, o que produzia “2Not sure” e “3No cheats seen”. O emblema da tecla é agora desenhado com CSS e não faz parte do texto.
- A opção 2 da tarefa de pergunta única passou a dizer “Not sure” (em russo: “Не уверен(а)”), na mesma forma de primeira pessoa da frase da VACNet “I'm sure the subject is cheating…”.

### Localização
- 12 novas cadeias (resumos, secção de reposição, ações da página de convite e “Not sure”) nos 29 idiomas.

# DemoScope v1.2.1

### Localização
- As janelas Hotkeys e Animations (77 cadeias por idioma) estão agora traduzidas para os outros 27 idiomas. Anteriormente, só tinham sido redigidas em inglês e russo.

# DemoScope v1.2.0

Atalhos, animações e uma correção no carregamento.

### Adicionado
- **Janela Hotkeys** (Definições → Hotkeys). Os 18 atalhos estão num registo comum e podem ser reatribuídos. As ações estão agrupadas (Reprodução, Navegação, Veredictos, Envio, Página de convite, Interface), cada uma com descrição e botão para repor, além de “Reset all”, que exige um segundo clique de confirmação.
  - **Gestão de conflitos.** Ao premir uma tecla já utilizada, é indicada a ação que a possui, o grupo e a respetiva função. Pode escolher **Replace** (a outra ação perde a tecla), **Swap** (recebe a tecla anterior desta ação) ou **Cancel**.
  - `Esc` pode ser atribuída como qualquer outra tecla e não fecha a janela durante a captura de uma tecla. `Tab`, teclas modificadoras, Caps Lock, `F5`, `F11` e `F12` são rejeitadas; `Shift` só é aceite na ação que exige manter a tecla premida, “Speed boost”.
  - As sugestões sob o vídeo, os emblemas dos predefinidos e dos veredictos e os botões Continue/Cancel seguem as atribuições.
- **`Esc` cancela** um veredicto à espera de confirmação (premindo “Cancel” da VACNet) e desarma o primeiro `Enter` do envio em dois passos.
- **Janela Animations** (Definições → Animations): seis estilos de indicador (pulse, breathe, ripple, heartbeat, orbit, blink), pré-visualização em tempo real, três velocidades e um interruptor. Se o sistema pedir para reduzir o movimento, as animações começam desativadas.
- `Enter` e `Esc` também funcionam quando um botão de opção de veredicto tem o foco, como acontece depois de clicar num veredicto.

### Corrigido
- **Demora prolongada ao carregar o clip seguinte depois do envio** na tarefa de pergunta única. A verificação de disponibilidade aguardava o campo `aimassist` do formulário clássico, inexistente nesta tarefa; por isso, atingia sempre o limite de 30 segundos e mostrava um aviso de erro. Agora aceita qualquer formulário de veredicto e os metadados do suporte, começa antes de o leitor terminar de carregar e fecha silenciosamente a sobreposição após 3 segundos em páginas que não são de clips.
- Os atalhos da página (`Space`, `Enter`, …) já não atuam sobre a página por trás de um diálogo aberto.

### Localização
- As janelas Hotkeys e Animations foram inicialmente escritas em inglês e russo; os outros idiomas foram acrescentados na versão 1.2.1.

# DemoScope v1.1.0

Suporte à tarefa de pergunta única da VACNet.

### Adicionado
- **Suporte à tarefa de pergunta única.** Por vezes, a VACNet apresenta “Is the Subject cheating beyond a reasonable doubt?”, com as respostas Cheating / Uncertain / No cheats seen. O DemoScope deteta esta tarefa e muda para um esquema compacto, sem veredictos rápidos, combinações alargadas ou aleatorizador.
- Etiquetas de veredicto com o texto e o idioma próprios do DemoScope, emblemas `1`–`3` e os respetivos atalhos.
- **Indicador de bloqueio.** A VACNet só desbloqueia “Uncertain” e “No cheats seen” quando o clip termina. Um cartão explica-o e mostra o tempo restante com uma barra de progresso; as opções bloqueadas aparecem esbatidas e premir a respetiva tecla reproduz um som de erro e abana o cartão.
- As sugestões sob o vídeo mudam para `Enter` e `1–3`; os botões de veredicto ficam mais altos para preencher o painel.

### Localização
- 5 novas cadeias (etiquetas, título, explicação e mensagem de bloqueio) nos 29 idiomas.

# DemoScope v1.0.6

### Adicionado
- **Explicações próprias do DemoScope** para as quatro categorias de veredicto nos 29 idiomas. A VACNet recorre ao inglês em algumas línguas (por exemplo, ucraniano), pelo que as janelas “?” deixaram de depender do texto da VACNet.

# DemoScope v1.0.5

### Adicionado
- **Botão de ajuda “?”** junto de AIM ASSIST, WALL HACK, AUTO BHOP e BOT. Um clique abre uma pequena explicação da categoria; fecha ao clicar fora, clicar novamente ou premir `Esc`. O botão não recebe foco do teclado, para que `Enter` e `Space` mantenham a função durante a revisão.

### Corrigido
- O botão “Local history” era demasiado grande (herdava o tipo de letra da página) e quebrava em duas linhas em muitos idiomas. Agora corresponde aos emblemas vizinhos, não quebra linhas, trunca etiquetas muito longas e permite que a linha de emblemas quebre em vez de ficar comprimida.

# DemoScope v1.0.4

### Corrigido
- **O texto dos veredictos permanecia no idioma do navegador** depois de escolher outro idioma no DemoScope. A VACNet obtém o seu texto do parâmetro Steam `?l=`; o DemoScope só alterava as próprias etiquetas. Agora, escolher um idioma numa página de revisão navega com o `?l=` correspondente; uma página aberta sem esse parâmetro (por exemplo, o clip seguinte após Continue) é pedida novamente uma vez no idioma selecionado. O idioma realmente usado pela VACNet é lido do parâmetro `l=` nos URLs dos seus próprios estilos e scripts; uma proteção de uma tentativa evita ciclos de redirecionamento se a VACNet não disponibilizar esse idioma.

# DemoScope v1.0.3

### Alterado
- **O realce de frases-chave regressou** aos botões de veredicto, usando a paleta DemoScope: a frase em análise (“help with aiming”, “see through walls”, …) aparece em laranja de destaque e o “not” das respostas negativas em azul discreto, ambos a negrito. Os botões selecionados mantêm a tonalidade e continuam legíveis.
- `normalizeVerdictLabels` convertia todos os realces em texto simples. Agora remove apenas as etiquetas de ênfase `<b>`, preservando a marcação do realce.

# DemoScope v1.0.2

### Corrigido
- **`Space`, `M` e `F` pareciam não funcionar** porque a VACNet / Video.js também reagiam às mesmas teclas e alternavam novamente (pausa seguida imediatamente de reprodução). O DemoScope agora captura estas teclas, estejam ou não atribuídas.
- No Firefox, ao soltar `Space`, também era acionado o botão do leitor com foco. A libertação da tecla também é agora intercetada.
- Os atalhos do leitor continuam ativos quando um botão de opção de veredicto tem o foco.

# DemoScope v1.0.1

Compatibilidade com a página de revisão redesenhada da VACNet.

### Corrigido
- **Painel incompleto após o redesenho da VACNet.** A página ganhou um cabeçalho de portal, um cartão de instruções e uma grelha; deixou de envolver os blocos de veredicto em `.verdicts-container-inner` e moveu `#submitbuttons` para fora do contentor. O `insertBefore` do DemoScope falhava, impedindo os passos seguintes. O novo passo `ensureReviewStructure` normaliza a marcação e permite utilizar tanto o esquema antigo como o novo.

### Alterado
- O cabeçalho do portal e o cartão de instruções são ocultados para manter o aspeto anterior; o contador de clips também aparece no emblema do cabeçalho porque o redesenho oculta o original.
- O botão Continue fica fixo na parte inferior do painel e permanece visível mesmo quando traduções longas tornam a lista de veredictos mais alta do que a janela.

# DemoScope v1.0.0

Primeiro lançamento público do DemoScope, um conjunto de ferramentas userscript para páginas de revisão VACNet do CS2.

### Adicionado
- Interface em 29 idiomas, seleção automática do idioma, cinco predefinições de veredicto rápido e 15 combinações alargadas.
- Controlos de vídeo conscientes dos segmentos, avanço fotograma a fotograma, aceleração com `Shift`, reproduzir/pausar com `Space`, silenciar com `M`, ecrã inteiro com `F` e envio de veredictos em dois passos com `Enter`.
- Histórico local configurável, importação/exportação JSON, relatórios HTML e junção de várias cópias JSON num só relatório.
- Página de convite melhorada, definições de som, atalho de definições configurável, controlo da visibilidade do nome da conta, diálogo de regras e aleatorizador de veredictos opcional (desativado por predefinição).

### Privacidade
- Sem telemetria; as definições e o histórico locais não são carregados. Os veredictos enviados chegam à VACNet através do formulário normal do site.







