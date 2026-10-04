<div align="center">

[English](../README.md) · [Български](bg_README.md) · [Magyar](hu_README.md) · [Tiếng Việt](vi_README.md) · [Ελληνικά](el_README.md) · [Dansk](da_README.md) · [Bahasa Indonesia](id_README.md) · [Español (España)](es-ES_README.md) · **Español (Latinoamérica)** · [Italiano](it_README.md) · [繁體中文](zh-TW_README.md) · [简体中文](zh-CN_README.md) · [한국어](ko_README.md) · [Deutsch](de_README.md) · [Nederlands](nl_README.md) · [Norsk](no_README.md) · [Polski](pl_README.md) · [Português (Portugal)](pt-PT_README.md) · [Português (Brasil)](pt-BR_README.md) · [Română](ro_README.md) · [Русский](ru_README.md) · [ไทย](th_README.md) · [Türkçe](tr_README.md) · [Українська](uk_README.md) · [Suomi](fi_README.md) · [Français](fr_README.md) · [Čeština](cs_README.md) · [Svenska](sv_README.md) · [日本語](ja_README.md)

# DemoScope — CS2 Review Toolkit

![Version](https://img.shields.io/badge/version-1.0.0-blue) ![License](https://img.shields.io/badge/license-MIT-green) ![Userscript](https://img.shields.io/badge/Tampermonkey%20%7C%20Violentmonkey-userscript-orange)

**Kit de userscripts enfocado en el teclado para revisores de CS2 VACNet: veredictos predefinidos, reproductor de video con control de segmento, mejoras en la página de invitaciones, efectos de sonido e historial local privado — en 29 idiomas.**

</div>

## Descripción general

DemoScope mejora las páginas de revisión de Counter-Strike VACNet (`counter-strike.net/vacnet`). En lugar de hacer clic en cuatro grupos de veredicto (aim assist, wallhack, auto-bhop, bot) en cada clip corto, tienes un flujo de trabajo enfocado en el teclado: veredictos predefinidos, una barra de búsqueda limitada al segmento revisado, avance cuadro por cuadro, aceleración temporal, confirmación de envío en dos pasos y un historial privado de tus propios veredictos. Todo se ejecuta localmente en tu navegador.

## Características principales

- **Veredictos predefinidos** – 5 ajustes rápidos en las teclas `1`–`5` más 15 combinaciones ampliadas (aim, wallhack, bhop, bot y sus mezclas, incluidas las variantes «incierto»).
- **Reproductor con control de segmento** – barra de búsqueda, indicador de tiempo, saltos de ±5 s y avance de 1/64 s por cuadro limitados al inicio y fin del clip.
- **Aceleración al mantener presionado** – mantén `Shift` para reproducir a una velocidad configurable (0,5×–4×, predeterminada 2×).
- **Envío seguro en dos pasos** – `Enter` activa el botón y un segundo `Enter` envía los veredictos; se bloquean los destinos de formulario de otro origen.
- **Interfaz en 29 idiomas** – sigue el parámetro `?l=` de Steam, tu elección guardada o el idioma del navegador, con selector de idioma en la página.
- **Historial de revisiones local** – historial por clip y por partida en `localStorage`; exportación/importación JSON, informe HTML y combinación de varias copias de seguridad en un solo informe.
- **Mejoras en la página de invitaciones** – `/vacnet/createinvite` rediseñada con mostrar/ocultar y copiado con un clic del enlace de invitación, más un resumen de requisitos.
- **Efectos de sonido** – tonos sintetizados con Web Audio, con interruptor, volumen y vista previa.
- **Diálogo de configuración** – se abre con `F2` (reasignable): sonidos, atajo, límites del historial, copias de seguridad, restablecer valores.
- **Comodidades** – pantalla de carga tras el envío, avisos, botón para ocultar el nombre de la cuenta, diálogo de reglas de revisión y aleatorizador de veredictos opcional (desactivado de forma predeterminada).

## Instalación

1. Instala un administrador de userscripts como [Tampermonkey](https://www.tampermonkey.net/) o [Violentmonkey](https://violentmonkey.github.io/) (el script usa `GM_addStyle` y `unsafeWindow`).
2. [Instala DemoScope](https://raw.githubusercontent.com/ebayybe/DemoScope/main/DemoScope.user.js) y confirma la instalación en tu administrador.
3. Inicia sesión en Steam y abre <https://www.counter-strike.net/vacnet/>.
4. Abre un clip de revisión: DemoScope se carga automáticamente (la página `/vacnet/join` queda excluida).

## Uso

Los atajos funcionan en las páginas de revisión siempre que el foco no esté en un campo de entrada, botón, enlace o lista desplegable.

| Tecla | Acción |
|---|---|
| `1` … `5` | Aplicar un veredicto predefinido: 1 bot + aim + wallhack, 2 aim + wallhack, 3 rage, 4 jugador limpio, 5 incierto |
| `Shift` (hold) | Mantener para acelerar (0,5×–4×, predeterminada 2×, se elige en la página) |
| `←` `→` | Saltar 5 segundos atrás / adelante |
| `,` `.` | Un cuadro (1/64 s) atrás / adelante |
| `Space` | Reproducir / pausar |
| `M` / `F` | Silenciar / pantalla completa (doble clic en el video también alterna la pantalla completa) |
| `Enter` ×2 | Presiona una vez para activar el botón de envío y otra vez para enviar los veredictos |
| `F2` | Abrir el diálogo de configuración (reasignable) |

## Arquitectura y desglose de funciones

DemoScope es una única función autoinvocada (`@run-at document-start`, `@noframes`). `init()` elige entre la página de invitaciones y la de revisión y conecta los módulos siguientes. La referencia completa de las 143 funciones documentadas —nombre, responsabilidad, parámetros y valor devuelto— está en [es-419_FUNCTIONS.md](https://github.com/ebayybe/DemoScope/blob/main/docs/es-419_FUNCTIONS.md).

| Módulo | Responsabilidad | Funciones clave |
|---|---|---|
| `Localization` | Determina el idioma de la interfaz, busca textos, dibuja banderas y el selector de idioma | `getActiveLocale`, `tr`, `settingText`, `inviteText`, `getPresetLabel`, `installLanguageSelector` |
| `Segment & player` | Lee el inicio/fin del clip desde la página, envuelve la reproducción Video.js/HTML5, desactiva el temporizador de bucle de segmento del sitio | `parseSegmentBounds`, `createPlayerAdapter`, `waitForPlayerAdapter`, `blockSegmentLoopGuard` |
| `Player enhancements` | Barra de búsqueda propia, ayudas de teclas, aceleración con Shift, avance por cuadros, atajos de teclado | `installCustomControls`, `installPlayerEnhancements`, `isShortcutBlocked` |
| `Verdict presets` | Tabla de ajustes, estado de selección, aplicación de ajustes con orden y retardos aleatorios opcionales | `applyPreset`, `detectActivePreset`, `syncPresetButtons`, `applyDefaultVerdicts`, `buildEnhancementBar` |
| `Submit flow` | Enter en dos pasos, construye `verdict_labels[]`, verificación de mismo origen, pantalla de carga | `invokeProceedAction`, `prepareVerdictFormForSubmit`, `submitVerdictForm`, `isSafeSubmitTarget`, `finishSubmitLoadingWhenReady` |
| `Local history` | Guarda, poda y muestra el historial por clip y por partida en `localStorage` | `readClipHistoryStore`, `writeClipHistoryStore`, `appendReviewHistory`, `renderClipHistory` |
| `Backups & reports` | Exportación/importación JSON, informe HTML, informe combinado de varias copias | `exportLocalHistory`, `importLocalHistory`, `exportReadableHistory`, `exportCombinedHistoryReports` |
| `Settings & sound` | Diálogo de configuración, atajo reasignable, señales sonoras con Web Audio | `ensureSettingsDialog`, `openSettingsDialog`, `installSettingsUi`, `playUiSound` |
| `Invite page` | `/vacnet/createinvite` rediseñada: mostrar/ocultar y copiar el enlace, requisitos | `installInvitePage` |
| `Layout & UI helpers` | Avisos, ocultamiento del pie de página, observadores de diseño, interruptor del nombre de cuenta | `enhanceLayout`, `showToast`, `watchProceedFooter`, `installAccountNameControl` |
| `Bootstrap` | Punto de entrada: elige el tipo de página e inicia los módulos | `init` |

## Datos locales y privacidad

DemoScope no envía telemetría. La configuración y el historial permanecen en el `localStorage` del navegador (claves que empiezan con `demoscope`) y en `sessionStorage`. Usa la opción de borrar el historial del diálogo de configuración para eliminarlo.

## Aviso legal

DemoScope es un proyecto comunitario no oficial, sin afiliación ni respaldo de Valve Corporation. Nunca decide un veredicto por ti: revisa tú mismo cada clip y respeta las reglas del programa de revisión. Úsalo bajo tu propia responsabilidad.

## License

Publicado bajo la licencia [MIT](../LICENSE).