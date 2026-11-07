// ==UserScript==
// @name         DemoScope — CS2 Review Toolkit
// @name:bg      DemoScope — инструменти за проверка на CS2
// @name:zh-CN   DemoScope — CS2 审查工具
// @name:zh-TW   DemoScope — CS2 審查工具
// @name:cs      DemoScope — nástroje pro kontrolu CS2
// @name:da      DemoScope — CS2-gennemgangsværktøj
// @name:nl      DemoScope — CS2-beoordelingstools
// @name:ru      DemoScope — инструменты проверки CS2
// @name:fi      DemoScope — CS2-tarkistustyökalut
// @name:fr      DemoScope — outils de révision CS2
// @name:de      DemoScope — CS2-Prüfwerkzeuge
// @name:el      DemoScope — εργαλεία ελέγχου CS2
// @name:hu      DemoScope — CS2-ellenőrző eszközök
// @name:id      DemoScope — alat tinjauan CS2
// @name:it      DemoScope — strumenti di revisione CS2
// @name:ja      DemoScope — CS2レビュー支援ツール
// @name:ko      DemoScope — CS2 검토 도구
// @name:no      DemoScope — CS2-gjennomgangsverktøy
// @name:pl      DemoScope — narzędzia do weryfikacji CS2
// @name:pt-PT   DemoScope — ferramentas de análise de CS2
// @name:pt-BR   DemoScope — ferramentas de análise de CS2
// @name:ro      DemoScope — instrumente de verificare CS2
// @name:es-ES   DemoScope — herramientas de revisión de CS2
// @name:es-419  DemoScope — herramientas de revisión de CS2
// @name:sv      DemoScope — granskningsverktyg för CS2
// @name:th      DemoScope — เครื่องมือตรวจสอบ CS2
// @name:tr      DemoScope — CS2 inceleme araçları
// @name:uk      DemoScope — інструменти перевірки CS2
// @name:vi      DemoScope — công cụ kiểm duyệt CS2
// @namespace    https://github.com/ebayybe/DemoScope
// @homepageURL  https://github.com/ebayybe/DemoScope
// @supportURL   https://github.com/ebayybe/DemoScope/issues
// @updateURL    https://raw.githubusercontent.com/ebayybe/DemoScope/main/DemoScope.user.js
// @downloadURL  https://raw.githubusercontent.com/ebayybe/DemoScope/main/DemoScope.user.js
// @version      1.2.0
// @description  DemoScope: 29-language CS2 VACNet review toolkit with verdict presets, invite page enhancements, sound settings and local history
// @description:bg Инструменти за преглед на CS2 VACNet на 29 езика: бързи присъди, клавишни комбинации, локална история, звукови настройки и подобрена страница за покани.
// @description:zh-CN 支持 29 种语言的 CS2 VACNet 审查工具：判定预设、快捷键、本地历史记录、音效设置及邀请页面增强。
// @description:zh-TW 支援 29 種語言的 CS2 VACNet 審查工具：判定預設、快速鍵、本機歷史記錄、音效設定及邀請頁面增強。
// @description:cs Nástroje pro kontrolu CS2 VACNet ve 29 jazycích: předvolby verdiktů, klávesové zkratky, místní historie, nastavení zvuku a vylepšená stránka pozvánek.
// @description:da CS2 VACNet-gennemgangsværktøj på 29 sprog: domsforudindstillinger, genveje, lokal historik, lydindstillinger og forbedret invitationsside.
// @description:nl CS2 VACNet-beoordelingstools in 29 talen: oordeelpresets, sneltoetsen, lokale geschiedenis, geluidsinstellingen en een verbeterde uitnodigingspagina.
// @description:fi CS2 VACNet -tarkistustyökalut 29 kielellä: tuomioesiasetukset, pikanäppäimet, paikallinen historia, ääniasetukset ja parannettu kutsusivu.
// @description:fr Outils de révision CS2 VACNet en 29 langues : verdicts prédéfinis, raccourcis, historique local, réglages sonores et page d’invitation améliorée.
// @description:de CS2-VACNet-Prüfwerkzeuge in 29 Sprachen: Urteilvorlagen, Tastenkürzel, lokaler Verlauf, Toneinstellungen und verbesserte Einladungsseite.
// @description:el Εργαλεία ελέγχου CS2 VACNet σε 29 γλώσσες: προεπιλογές κρίσεων, συντομεύσεις, τοπικό ιστορικό, ρυθμίσεις ήχου και βελτιωμένη σελίδα προσκλήσεων.
// @description:hu CS2 VACNet-ellenőrző eszközök 29 nyelven: ítéletsablonok, gyorsbillentyűk, helyi előzmények, hangbeállítások és továbbfejlesztett meghívóoldal.
// @description:id Alat tinjauan CS2 VACNet dalam 29 bahasa: preset vonis, pintasan tombol, riwayat lokal, pengaturan suara, dan halaman undangan yang disempurnakan.
// @description:it Strumenti di revisione CS2 VACNet in 29 lingue: verdetti predefiniti, scorciatoie, cronologia locale, impostazioni audio e pagina inviti migliorata.
// @description:ja 29言語対応のCS2 VACNetレビュー支援ツール。判定プリセット、ショートカット、ローカル履歴、サウンド設定、招待ページの改善機能を搭載。
// @description:ko 29개 언어를 지원하는 CS2 VACNet 검토 도구: 판정 프리셋, 바로 가기 키, 로컬 기록, 사운드 설정 및 개선된 초대 페이지.
// @description:no CS2 VACNet-gjennomgangsverktøy på 29 språk: vurderingsforvalg, snarveier, lokal historikk, lydinnstillinger og forbedret invitasjonsside.
// @description:pl Narzędzia do weryfikacji CS2 VACNet w 29 językach: presety werdyktów, skróty klawiszowe, historia lokalna, ustawienia dźwięku i ulepszona strona zaproszeń.
// @description:pt-PT Ferramentas de análise CS2 VACNet em 29 idiomas: vereditos predefinidos, atalhos, histórico local, definições de som e página de convites melhorada.
// @description:pt-BR Ferramentas de análise CS2 VACNet em 29 idiomas: vereditos predefinidos, atalhos, histórico local, configurações de som e página de convites aprimorada.
// @description:ro Instrumente de verificare CS2 VACNet în 29 de limbi: presetări de verdict, scurtături, istoric local, setări audio și pagină de invitații îmbunătățită.
// @description:ru Инструменты проверки демок CS2 VACNet на 29 языках: пресеты вердиктов, улучшенная страница приглашений, звуковые настройки и локальная история
// @description:es-ES Herramientas de revisión de CS2 VACNet en 29 idiomas: veredictos predefinidos, atajos, historial local, ajustes de sonido y página de invitaciones mejorada.
// @description:es-419 Herramientas de revisión de CS2 VACNet en 29 idiomas: veredictos predefinidos, atajos, historial local, configuración de sonido y página de invitaciones mejorada.
// @description:sv CS2 VACNet-granskningsverktyg på 29 språk: förinställda bedömningar, kortkommandon, lokal historik, ljudinställningar och förbättrad inbjudningssida.
// @description:th เครื่องมือตรวจสอบ CS2 VACNet รองรับ 29 ภาษา พร้อมชุดคำตัดสิน ปุ่มลัด ประวัติในเครื่อง การตั้งค่าเสียง และหน้าคำเชิญที่ปรับปรุงแล้ว
// @description:tr 29 dilde CS2 VACNet inceleme araçları: karar ön ayarları, kısayollar, yerel geçmiş, ses ayarları ve geliştirilmiş davet sayfası.
// @description:uk Інструменти перевірки CS2 VACNet 29 мовами: шаблони вердиктів, сполучення клавіш, локальна історія, налаштування звуку та покращена сторінка запрошень.
// @description:vi Công cụ kiểm duyệt CS2 VACNet hỗ trợ 29 ngôn ngữ: phán quyết mẫu, phím tắt, lịch sử cục bộ, cài đặt âm thanh và trang mời được cải tiến.
// @icon         https://i.postimg.cc/Pq08jWtz/0260927-185626227.png
// @author       ebayybe
// @license      GPL-3.0-only
// @match        https://www.counter-strike.net/vacnet
// @match        https://www.counter-strike.net/vacnet/*
// @exclude      https://www.counter-strike.net/vacnet/join*
// @grant        GM_addStyle
// @grant        unsafeWindow
// @grant        GM_info
// @run-at       document-start
// @noframes
// ==/UserScript==

/*
 * Credits:
 * Initial idea and base interface: skinsales / goodvibes, “CS2 VACNet Review — Player & Layout Enhancements” (MIT)
 * https://greasyfork.org/ru/scripts/591778-cs2-vacnet-review-player-layout-enhancements
 * Russian-language fork and related concept: authorless, “VACLens RU — CS2 Review Assistant” (MIT)
 * https://greasyfork.org/ru/scripts/592414-vaclens-ru-cs2-review-assistant
 * Architecture rewrite, reusable framework, 29-language support and custom presets: ebayybe.
 */

(function () {
  "use strict";

  const PAGE = typeof unsafeWindow !== "undefined" ? unsafeWindow : window;
  const IS_REVIEW_PAGE = /^\/vacnet\/clips(?:\/|$)/.test(location.pathname);
  const LOG_PREFIX = "[DemoScope]";
  const LANGUAGE_STORAGE_KEY = "demoscopeLanguage";
  const LANGUAGE_AUTO_STORAGE_KEY = "demoscopeLanguageAuto";
  const VACNET_LOGO_DATA_URI = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEzIiBoZWlnaHQ9IjI3IiB2aWV3Qm94PSIwIDAgMjEzIDI3IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMTIuMjQ0NCAxOC41TDguMjI0NDEgNS4xOEgxMS4xMDQ0TDEzLjY4NDQgMTQuMjRMMTYuMjY0NCA1LjE4SDE5LjE0NDRMMTUuMTI0NCAxOC41SDEyLjI0NDRaTTI4LjMwNjMgMTguNUwzMi44MDYzIDUuMThIMzUuMDI2M0wzOS41MjYzIDE4LjVIMzcuMTA2M0wzNi4xNDYzIDE1LjZIMzEuNjQ2M0wzMC43MjYzIDE4LjVIMjguMzA2M1pNMzIuMzY2MyAxMy40NkgzNS40NDYzTDMzLjkwNjMgOC4zOEwzMi4zNjYzIDEzLjQ2Wk00My4zNjIyIDE4LjVDNDIuMTQyMiAxOC41IDQxLjE4MjIgMTcuNTIgNDEuMTgyMiAxNi4zVjcuMzhDNDEuMTgyMiA2LjE2IDQyLjE0MjIgNS4xOCA0My4zNjIyIDUuMThINDcuODYyMkM0OS4wODIyIDUuMTggNTAuMDYyMiA2LjE2IDUwLjA2MjIgNy4zOFY5LjY4SDQ3LjY2MjJWNy45QzQ3LjY2MjIgNy42IDQ3LjQyMjIgNy4zOCA0Ny4xMjIyIDcuMzhINDQuMTIyMkM0My44MjIyIDcuMzggNDMuNTgyMiA3LjYgNDMuNTgyMiA3LjlWMTUuNzhDNDMuNTgyMiAxNi4wOCA0My44MjIyIDE2LjMgNDQuMTIyMiAxNi4zSDQ3LjEyMjJDNDcuNDIyMiAxNi4zIDQ3LjY2MjIgMTYuMDggNDcuNjYyMiAxNS43OFYxMy44OEg1MC4wNjIyVjE2LjNDNTAuMDYyMiAxNy41MiA0OS4wODIyIDE4LjUgNDcuODYyMiAxOC41SDQzLjM2MjJaTTUyLjg2NDMgMTguNVY1LjE4SDU1LjE4NDNMNjAuMjI0MyAxMy44NFY1LjE4SDYyLjU0NDNWMTguNUg2MC4yMjQzTDU1LjE4NDMgOS44OFYxOC41SDUyLjg2NDNaTTY3LjMyIDE4LjVDNjYuMTYgMTguNSA2NS4yNCAxNy41NiA2NS4yNCAxNi40VjExLjEyQzY1LjI0IDkuOTYgNjYuMTYgOS4wMiA2Ny4zMiA5LjAySDcwLjc4QzcxLjk0IDkuMDIgNzIuODYgOS45NiA3Mi44NiAxMS4xMlYxNC40SDY3LjU0VjE1Ljk2QzY3LjU0IDE2LjI2IDY3Ljc4IDE2LjQ4IDY4LjA4IDE2LjQ4SDcwLjA4QzcwLjM4IDE2LjQ4IDcwLjYyIDE2LjI2IDcwLjYyIDE1Ljk2VjE1LjUySDcyLjg0VjE2LjQ0QzcyLjg0IDE3LjYgNzEuOTQgMTguNSA3MC43NiAxOC41SDY3LjMyWk02Ny41NCAxMi41SDcwLjY0VjExLjU0QzcwLjY0IDExLjI0IDcwLjQgMTEuMDIgNzAuMSAxMS4wMkg2OC4wOEM2Ny43OCAxMS4wMiA2Ny41NCAxMS4yNCA2Ny41NCAxMS41NFYxMi41Wk03Ny43ODE5IDE4LjVDNzYuNjIxOSAxOC41IDc1LjcwMTkgMTcuNTYgNzUuNzAxOSAxNi40VjExLjAySDc0LjI2MTlWOS4wMkg3NS43MDE5VjYuNkg3OC4wMDE5VjkuMDJIODAuMTQxOVYxMS4wMkg3OC4wMDE5VjE1Ljk4Qzc4LjAwMTkgMTYuMjggNzguMjQxOSAxNi41IDc4LjU0MTkgMTYuNUg4MC4xNDE5VjE4LjVINzcuNzgxOVpNODYuNTk0NyAxOC41VjUuMThIODguOTk0N1YxNi4zSDk0LjQzNDdWMTguNUg4Ni41OTQ3Wk05OC40NTM4IDE4LjdDOTcuMDkzOCAxOC43IDk2LjMzMzggMTcuNzYgOTYuMzMzOCAxNi42VjE1Qzk2LjMzMzggMTMuODQgOTcuMDkzOCAxMi45IDk4LjQ1MzggMTIuOUM5OS40MzM4IDEyLjkgMTAwLjkxNCAxMy4wOCAxMDEuNzE0IDEzLjMyVjExLjU2QzEwMS43MTQgMTEuMjYgMTAxLjQ3NCAxMS4wNCAxMDEuMTc0IDExLjA0SDk5LjM5MzhDOTkuMDkzOCAxMS4wNCA5OC44NTM4IDExLjI2IDk4Ljg1MzggMTEuNTZWMTEuODhIOTYuNjMzOFYxMS4wOEM5Ni42MzM4IDkuOTIgOTcuNTMzOCA5LjAyIDk4LjcxMzggOS4wMkgxMDEuOTM0QzEwMy4wOTQgOS4wMiAxMDQuMDE0IDkuOTYgMTA0LjAxNCAxMS4xMlYxOC41SDEwMS43MTRWMTguMDRDMTAwLjczNCAxOC4zOCA5OS40MzM4IDE4LjcgOTguNDUzOCAxOC43Wk05OC41NzM4IDE2LjJDOTguNTczOCAxNi41IDk4Ljc3MzggMTYuNzIgOTkuMTEzOCAxNi43MkM5OS41OTM4IDE2LjcyIDEwMC42MTQgMTYuNDggMTAxLjE3NCAxNi4zQzEwMS41MzQgMTYuMTggMTAxLjcxNCAxNi4wNiAxMDEuNzE0IDE1LjgyVjE1LjQyQzEwMS43MTQgMTUuMTggMTAxLjU1NCAxNS4wNiAxMDEuMTc0IDE0Ljk4QzEwMC42NTQgMTQuODggOTkuNTkzOCAxNC44IDk5LjExMzggMTQuOEM5OC43NzM4IDE0LjggOTguNTczOCAxNS4wMiA5OC41NzM4IDE1LjMyVjE2LjJaTTExMi4zOSAxOC43QzExMS40MSAxOC43IDEwOS45MyAxOC4yIDEwOS4wMSAxNy44NlYxOC41SDEwNi43MVY1LjE4SDEwOS4wMVY5LjY2QzEwOS45MyA5LjMyIDExMS40MSA4LjgyIDExMi4zOSA4LjgyQzExMy43NSA4LjgyIDExNC41MSA5Ljc2IDExNC41MSAxMC45MlYxNi42QzExNC41MSAxNy43NiAxMTMuNzUgMTguNyAxMTIuMzkgMTguN1pNMTA5LjAxIDE1LjI2QzEwOS4wMSAxNS41NiAxMDkuMTcgMTUuNzggMTA5LjU1IDE1LjkyQzExMC4wMSAxNi4xIDExMS4xNyAxNi41MiAxMTEuNjcgMTYuNTJDMTEyLjAxIDE2LjUyIDExMi4yMSAxNi4zIDExMi4yMSAxNlYxMS41MkMxMTIuMjEgMTEuMjIgMTEyLjAxIDExIDExMS42NyAxMUMxMTEuMTcgMTEgMTEwLjAxIDExLjQyIDEwOS41NSAxMS42QzEwOS4xNyAxMS43NCAxMDkuMDEgMTEuOTYgMTA5LjAxIDEyLjI2VjE1LjI2Wk0xMTguOTggMTguNUMxMTcuODIgMTguNSAxMTYuOSAxNy41NiAxMTYuOSAxNi40VjExLjEyQzExNi45IDkuOTYgMTE3LjgyIDkuMDIgMTE4Ljk4IDkuMDJIMTIyLjQ0QzEyMy42IDkuMDIgMTI0LjUyIDkuOTYgMTI0LjUyIDExLjEyVjE0LjRIMTE5LjJWMTUuOTZDMTE5LjIgMTYuMjYgMTE5LjQ0IDE2LjQ4IDExOS43NCAxNi40OEgxMjEuNzRDMTIyLjA0IDE2LjQ4IDEyMi4yOCAxNi4yNiAxMjIuMjggMTUuOTZWMTUuNTJIMTI0LjVWMTYuNDRDMTI0LjUgMTcuNiAxMjMuNiAxOC41IDEyMi40MiAxOC41SDExOC45OFpNMTE5LjIgMTIuNUgxMjIuM1YxMS41NEMxMjIuMyAxMS4yNCAxMjIuMDYgMTEuMDIgMTIxLjc2IDExLjAySDExOS43NEMxMTkuNDQgMTEuMDIgMTE5LjIgMTEuMjQgMTE5LjIgMTEuNTRWMTIuNVpNMTI3LjAyMiAxOC41VjUuMThIMTI5LjMyMlYxOC41SDEyNy4wMjJaTTEzMi4xMiAxOC41VjkuMDJIMTM0LjQyVjE4LjVIMTMyLjEyWk0xMzIuMTIgNy42VjUuMDRIMTM0LjQyVjcuNkgxMzIuMTJaTTEzNy4yMTcgMTguNVY5LjAySDEzOS40MTdWOS43NEMxNDAuMjk3IDkuMzggMTQxLjkxNyA4LjgyIDE0Mi44OTcgOC44MkMxNDQuMjU3IDguODIgMTQ1LjAxNyA5Ljc2IDE0NS4wMTcgMTAuOTJWMTguNUgxNDIuNzE3VjExLjZDMTQyLjcxNyAxMS4zIDE0Mi41MTcgMTEuMDggMTQyLjE3NyAxMS4wOEMxNDEuNjc3IDExLjA4IDE0MC41MTcgMTEuNTIgMTQwLjA1NyAxMS42OEMxMzkuNjc3IDExLjgyIDEzOS41MTcgMTIuMTQgMTM5LjUxNyAxMi40OFYxOC41SDEzNy4yMTdaTTE0OC40NDUgMjIuM1YyMC4zNEgxNTIuNDg1QzE1Mi43ODUgMjAuMzQgMTUzLjAyNSAyMC4xMiAxNTMuMDI1IDE5LjgyVjE3LjRDMTUyLjEwNSAxNy43NCAxNTAuNjI1IDE4LjI0IDE0OS42NDUgMTguMjRDMTQ4LjI4NSAxOC4yNCAxNDcuNTI1IDE3LjMgMTQ3LjUyNSAxNi4xNFYxMC45MkMxNDcuNTI1IDkuNzYgMTQ4LjI4NSA4LjgyIDE0OS42NDUgOC44MkMxNTAuNjI1IDguODIgMTUyLjEwNSA5LjMyIDE1My4wMjUgOS42NlY5LjAySDE1NS4zMjVWMjAuMkMxNTUuMzI1IDIxLjM2IDE1NC40MDUgMjIuMyAxNTMuMjQ1IDIyLjNIMTQ4LjQ0NVpNMTQ5LjgyNSAxNS41NEMxNDkuODI1IDE1Ljg0IDE1MC4wMjUgMTYuMDYgMTUwLjM2NSAxNi4wNkMxNTAuODY1IDE2LjA2IDE1Mi4wMjUgMTUuNjQgMTUyLjQ4NSAxNS40NkMxNTIuODY1IDE1LjMyIDE1My4wMjUgMTUuMSAxNTMuMDI1IDE0LjhWMTIuMjZDMTUzLjAyNSAxMS45NiAxNTIuODY1IDExLjc0IDE1Mi40ODUgMTEuNkMxNTIuMDI1IDExLjQyIDE1MC44NjUgMTEgMTUwLjM2NSAxMUMxNTAuMDI1IDExIDE0OS44MjUgMTEuMjIgMTQ5LjgyNSAxMS41MlYxNS41NFpNMTYyLjQxNSAxOC41VjUuMThIMTY5LjE5NUMxNzAuNDE1IDUuMTggMTcxLjM5NSA2LjE2IDE3MS4zOTUgNy4zOFYxMS4xNkMxNzEuMzk1IDEyLjM4IDE3MC40MTUgMTMuMzYgMTY5LjE5NSAxMy4zNkgxNjQuODE1VjE4LjVIMTYyLjQxNVpNMTY0LjgxNSAxMS4xNkgxNjguNDU1QzE2OC43NTUgMTEuMTYgMTY4Ljk5NSAxMC45NCAxNjguOTk1IDEwLjY0VjcuOUMxNjguOTk1IDcuNiAxNjguNzU1IDcuMzggMTY4LjQ1NSA3LjM4SDE2NC44MTVWMTEuMTZaTTE3NS4yNjkgMTguNUMxNzQuMTA5IDE4LjUgMTczLjE4OSAxNy41NiAxNzMuMTg5IDE2LjRWMTEuMTJDMTczLjE4OSA5Ljk2IDE3NC4xMDkgOS4wMiAxNzUuMjY5IDkuMDJIMTc5LjA2OUMxODAuMjQ5IDkuMDIgMTgxLjE4OSA5Ljk2IDE4MS4xODkgMTEuMTJWMTYuNEMxODEuMTg5IDE3LjU2IDE4MC4yNDkgMTguNSAxNzkuMDY5IDE4LjVIMTc1LjI2OVpNMTc1LjQ4OSAxNS44OEMxNzUuNDg5IDE2LjE4IDE3NS43MjkgMTYuNCAxNzYuMDI5IDE2LjRIMTc4LjM0OUMxNzguNjQ5IDE2LjQgMTc4Ljg4OSAxNi4xOCAxNzguODg5IDE1Ljg4VjExLjY0QzE3OC44ODkgMTEuMzQgMTc4LjY0OSAxMS4xMiAxNzguMzQ5IDExLjEySDE3Ni4wMjlDMTc1LjcyOSAxMS4xMiAxNzUuNDg5IDExLjM0IDE3NS40ODkgMTEuNjRWMTUuODhaTTE4My43OCAxOC41VjkuMDJIMTg2LjA4VjEwLjA2QzE4Ni45NiA5LjY0IDE4Ny44MiA5LjIgMTg4LjgyIDguODJMMTg4Ljk2IDExLjA4QzE4OC4xNiAxMS40IDE4Ny4zIDExLjggMTg2LjYyIDEyLjE2QzE4Ni4yNCAxMi4zNiAxODYuMDggMTIuNjIgMTg2LjA4IDEyLjk2VjE4LjVIMTgzLjc4Wk0xOTMuNDY2IDE4LjVDMTkyLjMwNiAxOC41IDE5MS4zODYgMTcuNTYgMTkxLjM4NiAxNi40VjExLjAySDE4OS45NDZWOS4wMkgxOTEuMzg2VjYuNkgxOTMuNjg2VjkuMDJIMTk1LjgyNlYxMS4wMkgxOTMuNjg2VjE1Ljk4QzE5My42ODYgMTYuMjggMTkzLjkyNiAxNi41IDE5NC4yMjYgMTYuNUgxOTUuODI2VjE4LjVIMTkzLjQ2NlpNMTk5LjgwMSAxOC43QzE5OC40NDEgMTguNyAxOTcuNjgxIDE3Ljc2IDE5Ny42ODEgMTYuNlYxNUMxOTcuNjgxIDEzLjg0IDE5OC40NDEgMTIuOSAxOTkuODAxIDEyLjlDMjAwLjc4MSAxMi45IDIwMi4yNjEgMTMuMDggMjAzLjA2MSAxMy4zMlYxMS41NkMyMDMuMDYxIDExLjI2IDIwMi44MjEgMTEuMDQgMjAyLjUyMSAxMS4wNEgyMDAuNzQxQzIwMC40NDEgMTEuMDQgMjAwLjIwMSAxMS4yNiAyMDAuMjAxIDExLjU2VjExLjg4SDE5Ny45ODFWMTEuMDhDMTk3Ljk4MSA5LjkyIDE5OC44ODEgOS4wMiAyMDAuMDYxIDkuMDJIMjAzLjI4MUMyMDQuNDQxIDkuMDIgMjA1LjM2MSA5Ljk2IDIwNS4zNjEgMTEuMTJWMTguNUgyMDMuMDYxVjE4LjA0QzIwMi4wODEgMTguMzggMjAwLjc4MSAxOC43IDE5OS44MDEgMTguN1pNMTk5LjkyMSAxNi4yQzE5OS45MjEgMTYuNSAyMDAuMTIxIDE2LjcyIDIwMC40NjEgMTYuNzJDMjAwLjk0MSAxNi43MiAyMDEuOTYxIDE2LjQ4IDIwMi41MjEgMTYuM0MyMDIuODgxIDE2LjE4IDIwMy4wNjEgMTYuMDYgMjAzLjA2MSAxNS44MlYxNS40MkMyMDMuMDYxIDE1LjE4IDIwMi45MDEgMTUuMDYgMjAyLjUyMSAxNC45OEMyMDIuMDAxIDE0Ljg4IDIwMC45NDEgMTQuOCAyMDAuNDYxIDE0LjhDMjAwLjEyMSAxNC44IDE5OS45MjEgMTUuMDIgMTk5LjkyMSAxNS4zMlYxNi4yWk0yMDguMDU3IDE4LjVWNS4xOEgyMTAuMzU3VjE4LjVIMjA4LjA1N1oiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl83NF83NDQpIi8+CjxwYXRoIGQ9Ik0xLjg2MDkzIDguNTYyNzJMMS4yNDA3MiAzLjYwMTE1QzMuNzIxNTYgMy42MDEwNSA4LjA2MzAyIDAuNSAxMy42NDQ5IDAuNUMxOC44MDA0IDAuNSAyMy41NjgzIDMuNjAxMDUgMjYuMDQ5MSAzLjYwMTE1QzI1LjYzNTYgNS44NzUyNSAyNS40Mjg5IDExLjY2MzggMjEuNzA3NiAxNy4yNDU3TTE4LjYwNjYgMjIuMjA3M0MxOC42MDY2IDIyLjIwNzMgMTcuOTg2NCAyMy40NDc3IDEzLjY0NDkgMjUuOTI4NkMxMS4zNzA4IDI0LjQ4MTQgNi44MjI2IDIyLjIwNzQgMy43MjE1NiAxNC4xNDQ3IiBzdHJva2U9IiM1RkE4RDkiLz4KPGNpcmNsZSBjeD0iMi40ODA4NCIgY3k9IjEwLjQyMzUiIHI9IjEuOTgwODQiIGZpbGw9InVybCgjcGFpbnQxX2xpbmVhcl83NF83NDQpIiBzdHJva2U9IiM1RkE4RDkiLz4KPGNpcmNsZSBjeD0iMjEuMDg3MyIgY3k9IjE5LjEwNjMiIHI9IjEuOTgwODQiIGZpbGw9InVybCgjcGFpbnQyX2xpbmVhcl83NF83NDQpIiBzdHJva2U9IiM1RkE4RDkiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl83NF83NDQiIHgxPSI2OS4yMjQ0IiB5MT0iLTkiIHgyPSIxNDIuNzIzIiB5Mj0iNjkuMjg4OCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjNERDOEVCIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzkyNzZDQSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MV9saW5lYXJfNzRfNzQ0IiB4MT0iMi40ODA4NCIgeTE9IjcuOTQyNjMiIHgyPSIyLjQ4MDg0IiB5Mj0iMTIuOTA0MyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjNERDOEVCIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzc1NTVCNSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50Ml9saW5lYXJfNzRfNzQ0IiB4MT0iMjEuMDg3MyIgeTE9IjE2LjYyNTUiIHgyPSIyMS4wODczIiB5Mj0iMjEuNTg3MiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjNERDOEVCIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzc1NTVCNSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=";

  // Steam's 29 store languages. Prefer Steam's explicit ?l= setting, then
  // the page/browser locale. The badge uses the language's own display name.
  const SUPPORTED_LOCALES = {
    bulgarian: "bg", schinese: "zh-CN", tchinese: "zh-TW", czech: "cs",
    danish: "da", dutch: "nl", english: "en", finnish: "fi", french: "fr",
    german: "de", greek: "el", hungarian: "hu", indonesian: "id", italian: "it",
    japanese: "ja", korean: "ko", norwegian: "no", polish: "pl",
    portuguese: "pt-PT", brazilian: "pt-BR", romanian: "ro", russian: "ru",
    spanish: "es-ES", latam: "es-419", swedish: "sv", thai: "th",
    turkish: "tr", ukrainian: "uk", vietnamese: "vi",
  };
  const FLAG_SVG = {
    bg: '<rect width="36" height="8" fill="#fff"/><rect y="8" width="36" height="8" fill="#00966e"/><rect y="16" width="36" height="8" fill="#d62612"/>',
    "zh-CN": '<rect width="36" height="24" fill="#de2910"/><path d="M7 3l.8 2.2 2.3.1-1.8 1.4.6 2.2L7 7.7 5.1 9l.6-2.2L4 5.3l2.3-.1z" fill="#ffde00"/><circle cx="13" cy="4" r=".8" fill="#ffde00"/><circle cx="15" cy="7" r=".8" fill="#ffde00"/><circle cx="15" cy="11" r=".8" fill="#ffde00"/><circle cx="13" cy="14" r=".8" fill="#ffde00"/>',
    "zh-TW": '<rect width="36" height="24" fill="#fe0000"/><rect width="16" height="12" fill="#000095"/><circle cx="8" cy="6" r="3.2" fill="#fff"/><circle cx="8" cy="6" r="2" fill="#000095"/><path d="M8 1v10M3 6h10M4.5 2.5l7 7m0-7-7 7" stroke="#fff" stroke-width=".7"/>',
    cs: '<rect width="36" height="12" fill="#fff"/><rect y="12" width="36" height="12" fill="#d7141a"/><path d="M0 0v24L18 12z" fill="#11457e"/>',
    da: '<rect width="36" height="24" fill="#c8102e"/><path d="M11 0v24M0 12h36" stroke="#fff" stroke-width="4"/>',
    nl: '<rect width="36" height="8" fill="#ae1c28"/><rect y="8" width="36" height="8" fill="#fff"/><rect y="16" width="36" height="8" fill="#21468b"/>',
    en: '<rect width="36" height="24" fill="#012169"/><path d="M0 0l36 24M36 0L0 24" stroke="#fff" stroke-width="5"/><path d="M0 0l36 24M36 0L0 24" stroke="#c8102e" stroke-width="2"/><path d="M18 0v24M0 12h36" stroke="#fff" stroke-width="8"/><path d="M18 0v24M0 12h36" stroke="#c8102e" stroke-width="4"/>',
    fi: '<rect width="36" height="24" fill="#fff"/><path d="M10 0v24M0 12h36" stroke="#003580" stroke-width="4"/>',
    fr: '<rect width="12" height="24" fill="#0055a4"/><rect x="12" width="12" height="24" fill="#fff"/><rect x="24" width="12" height="24" fill="#ef4135"/>',
    de: '<rect width="36" height="8" fill="#000"/><rect y="8" width="36" height="8" fill="#dd0000"/><rect y="16" width="36" height="8" fill="#ffce00"/>',
    el: '<rect width="36" height="24" fill="#0d5eaf"/><path d="M0 5h36M0 10h36M0 15h36M0 20h36" stroke="#fff" stroke-width="2.5"/><path d="M8 0h10v10H8z" fill="#0d5eaf"/><path d="M13 0v10M8 5h10" stroke="#fff" stroke-width="2.5"/>',
    hu: '<rect width="36" height="8" fill="#ce2939"/><rect y="8" width="36" height="8" fill="#fff"/><rect y="16" width="36" height="8" fill="#477050"/>',
    id: '<rect width="36" height="12" fill="#ce1126"/><rect y="12" width="36" height="12" fill="#fff"/>',
    it: '<rect width="12" height="24" fill="#009246"/><rect x="12" width="12" height="24" fill="#fff"/><rect x="24" width="12" height="24" fill="#ce2b37"/>',
    ja: '<rect width="36" height="24" fill="#fff"/><circle cx="18" cy="12" r="6" fill="#bc002d"/>',
    ko: '<rect width="36" height="24" fill="#fff"/><path d="M18 6a6 6 0 0 1 0 12 3 3 0 0 0 0-6 3 3 0 0 1 0-6" fill="#cd2e3a"/><path d="M18 18a6 6 0 0 1 0-12 3 3 0 0 0 0 6 3 3 0 0 1 0 6" fill="#0047a0"/><path d="M5 5l5 5m-7-2 5 5m20 1 5 5m-7-2 5 5m-23-3 5-5m-7 2 5-5m20 11 5-5m-7 2 5-5" stroke="#111" stroke-width="1.4"/>',
    no: '<rect width="36" height="24" fill="#ba0c2f"/><path d="M10 0v24M0 12h36" stroke="#fff" stroke-width="6"/><path d="M10 0v24M0 12h36" stroke="#00205b" stroke-width="3"/>',
    pl: '<rect width="36" height="12" fill="#fff"/><rect y="12" width="36" height="12" fill="#dc143c"/>',
    "pt-PT": '<rect width="14" height="24" fill="#006600"/><rect x="14" width="22" height="24" fill="#ff0000"/><circle cx="14" cy="12" r="4" fill="#ffcc00"/>',
    "pt-BR": '<rect width="36" height="24" fill="#009739"/><path d="M18 3 33 12 18 21 3 12z" fill="#ffdf00"/><circle cx="18" cy="12" r="5.5" fill="#002776"/>',
    ro: '<rect width="12" height="24" fill="#002b7f"/><rect x="12" width="12" height="24" fill="#fcd116"/><rect x="24" width="12" height="24" fill="#ce1126"/>',
    ru: '<rect width="36" height="8" fill="#fff"/><rect y="8" width="36" height="8" fill="#0039a6"/><rect y="16" width="36" height="8" fill="#d52b1e"/>',
    "es-ES": '<rect width="36" height="6" fill="#aa151b"/><rect y="6" width="36" height="12" fill="#f1bf00"/><rect y="18" width="36" height="6" fill="#aa151b"/>',
    "es-419": '<circle cx="18" cy="12" r="10" fill="#1877a8"/><path d="M8 12h20M18 2a18 18 0 0 1 0 20M18 2a18 18 0 0 0 0 20" fill="none" stroke="#fff" stroke-width="1.5"/><path d="M10 7h16M10 17h16" stroke="#f2c94c" stroke-width="1"/>',
    sv: '<rect width="36" height="24" fill="#006aa7"/><path d="M11 0v24M0 12h36" stroke="#fecc00" stroke-width="4"/>',
    th: '<rect width="36" height="4" fill="#a51931"/><rect y="4" width="36" height="4" fill="#f4f5f8"/><rect y="8" width="36" height="8" fill="#2d2a4a"/><rect y="16" width="36" height="4" fill="#f4f5f8"/><rect y="20" width="36" height="4" fill="#a51931"/>',
    tr: '<rect width="36" height="24" fill="#e30a17"/><circle cx="14" cy="12" r="6" fill="#fff"/><circle cx="16" cy="12" r="4.8" fill="#e30a17"/><path d="m23 7 1.5 3.5 3.8.2-2.9 2.3 1 3.6-3.4-2.1-3.2 2.1 1-3.6-2.9-2.3 3.8-.2z" fill="#fff"/>',
    uk: '<rect width="36" height="12" fill="#0057b7"/><rect y="12" width="36" height="12" fill="#ffd700"/>',
    vi: '<rect width="36" height="24" fill="#da251d"/><path d="m18 4 2.1 5.5 5.9.2-4.6 3.5 1.7 5.6-5.1-3.3-5.1 3.3 1.7-5.6-4.6-3.5 5.9-.2z" fill="#ff0"/>',
  };
  function getFlagSvg(locale) {
    const art = FLAG_SVG[locale] || '<circle cx="18" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M8 12h20M18 2a18 18 0 0 1 0 20M18 2a18 18 0 0 0 0 20" fill="none" stroke="currentColor" stroke-width="1"/>';
    return `<svg class="vacnet-language-flag" viewBox="0 0 36 24" aria-hidden="true" focusable="false">${art}</svg>`;
  }
  function getSavedLocale() {
    try { return localStorage.getItem(LANGUAGE_STORAGE_KEY); }
    catch { return null; }
  }

  function getBrowserLocale() {
    const candidates = [navigator.language, ...(navigator.languages || [])];
    for (const candidate of candidates) {
      const base = String(candidate || "").toLowerCase();
      if (/^zh-(hant|tw|hk|mo)/.test(base)) return "zh-TW";
      if (/^zh-(hans|cn|sg)/.test(base)) return "zh-CN";
      if (/^es-(419|mx|ar|bo|br|cl|co|cr|cu|do|ec|gt|hn|ni|pa|pe|pr|py|sv|uy|ve)/.test(base)) return "es-419";
      const match = Object.values(SUPPORTED_LOCALES).find((locale) => locale.toLowerCase() === base)
        || Object.values(SUPPORTED_LOCALES).find((locale) => locale.split("-")[0].toLowerCase() === base.split("-")[0]);
      if (match) return match;
    }
    return null;
  }

  function getActiveLocale() {
    const savedLocale = getSavedLocale();
    if (savedLocale && Object.values(SUPPORTED_LOCALES).includes(savedLocale)) return savedLocale;
    const steamLanguage = new URLSearchParams(location.search).get("l")?.toLowerCase();
    if (steamLanguage && SUPPORTED_LOCALES[steamLanguage]) return SUPPORTED_LOCALES[steamLanguage];
    const browserLocale = getBrowserLocale();
    if (browserLocale) return browserLocale;
    const pageLocale = document.documentElement.lang;
    if (pageLocale) {
      const match = Object.values(SUPPORTED_LOCALES).find((locale) => locale.toLowerCase() === pageLocale.toLowerCase())
        || Object.values(SUPPORTED_LOCALES).find((locale) => locale.split("-")[0].toLowerCase() === pageLocale.split("-")[0].toLowerCase());
      if (match) return match;
    }
    return "en";
  }

  function syncAutomaticLanguage() {
    let automatic = false;
    try { automatic = localStorage.getItem(LANGUAGE_AUTO_STORAGE_KEY) === "true"; }
    catch { return false; }
    if (!automatic || !/^\/vacnet(?:\/|$)/.test(location.pathname)) return false;
    const browserLocale = getBrowserLocale() || "en";
    const targetSteamLanguage = Object.keys(SUPPORTED_LOCALES).find((key) => SUPPORTED_LOCALES[key] === browserLocale) || "english";
    const url = new URL(location.href);
    if (url.searchParams.get("l") === targetSteamLanguage) return false;
    url.searchParams.set("l", targetSteamLanguage);
    location.replace(url.href);
    return true;
  }
  // Valve renders the verdict questions/buttons in the language it picks from
  // the ?l= parameter (or the browser language when there is none). The page's
  // own stylesheet/script URLs carry that choice, so read it from there.
  function getRenderedSteamLanguage() {
    const nodes = document.querySelectorAll("link[href], script[src]");
    for (const node of nodes) {
      const raw = node.getAttribute("href") || node.getAttribute("src") || "";
      const match = raw.match(/[?&]l=([a-z]+)/i);
      if (match) return match[1].toLowerCase();
    }
    return null;
  }

  // When the user picked a language in DemoScope, make Valve's own text follow
  // it - also on pages reached without ?l= (e.g. the next clip after Continue).
  function syncSelectedLanguage() {
    if (!/^\/vacnet(?:\/|$)/.test(location.pathname)) return false;
    let saved = null;
    try {
      if (localStorage.getItem(LANGUAGE_AUTO_STORAGE_KEY) === "true") return false;
      saved = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    } catch { return false; }
    if (!saved || !Object.values(SUPPORTED_LOCALES).includes(saved)) return false;

    const target = Object.keys(SUPPORTED_LOCALES).find((key) => SUPPORTED_LOCALES[key] === saved);
    const rendered = getRenderedSteamLanguage();
    if (!target || !rendered) return false;

    const guardKey = "demoscopeLangSyncTried";
    if (rendered === target) {
      try { sessionStorage.removeItem(guardKey); } catch { /* ignore */ }
      return false;
    }
    // Valve may not offer this language: try once per page instead of looping.
    const attempt = `${target}|${location.pathname}`;
    try {
      if (sessionStorage.getItem(guardKey) === attempt) return false;
      sessionStorage.setItem(guardKey, attempt);
    } catch { return false; }

    recordEvent("language redirect", `page rendered in "${rendered}", wanted "${target}"`);
    const url = new URL(location.href);
    url.searchParams.set("l", target);
    location.replace(url.href);
    return true;
  }

  function getLanguageBadge() {
    const locale = getActiveLocale();
    const labels = {
      bg: "Българска версия", "zh-CN": "简体中文版", "zh-TW": "繁體中文版",
      cs: "Česká verze", da: "Dansk version", nl: "Nederlandse versie",
      en: "English version", fi: "Suomenkielinen versio", fr: "Version française",
      de: "Deutsche Version", el: "Ελληνική έκδοση", hu: "Magyar verzió",
      id: "Versi bahasa Indonesia", it: "Versione italiana", ja: "日本語版",
      ko: "한국어 버전", no: "Norsk versjon", pl: "Polska wersja",
      "pt-PT": "Versão em português", "pt-BR": "Versão em português do Brasil",
      ro: "Versiune în limba română", ru: "Русская версия",
      "es-ES": "Versión en español", "es-419": "Versión en español latinoamericano",
      sv: "Svensk version", th: "เวอร์ชันภาษาไทย", tr: "Türkçe sürüm",
      uk: "Українська версія", vi: "Phiên bản tiếng Việt",
    };
    if (labels[locale]) return labels[locale];
    try {
      const name = new Intl.DisplayNames([locale], { type: "language" }).of(locale);
      return `${name[0].toLocaleUpperCase(locale)}${name.slice(1)}`;
    } catch {
      return `${locale} version`;
    }
  }

  const LOCALE_INDEX = Object.keys(SUPPORTED_LOCALES).map((steamCode) => SUPPORTED_LOCALES[steamCode]);
  const UI_TEXT_ROWS = {
    language: ["Български", "简体中文", "繁體中文", "Čeština", "Dansk", "Nederlands", "English", "Suomi", "Français", "Deutsch", "Ελληνικά", "Magyar", "Bahasa Indonesia", "Italiano", "日本語", "한국어", "Norsk", "Polski", "Português", "Português (Brasil)", "Română", "Русский", "Español", "Español (Latinoamérica)", "Svenska", "ไทย", "Türkçe", "Українська", "Tiếng Việt"],
    quickVerdict: ["Бърза присъда", "快速判定", "快速判定", "Rychlý verdikt", "Hurtig afgørelse", "Snel oordeel", "Quick verdict", "Pikatuomio", "Verdict rapide", "Schnellurteil", "Γρήγορη ετυμηγορία", "Gyors ítélet", "Vonis cepat", "Verdetto rapido", "クイック判定", "빠른 판정", "Rask vurdering", "Szybki werdykt", "Veredito rápido", "Veredito rápido", "Verdict rapid", "Быстрый вердикт", "Veredicto rápido", "Veredicto rápido", "Snabb bedömning", "คำตัดสินด่วน", "Hızlı karar", "Швидкий вердикт", "Phán quyết nhanh"],
    preset: ["Пресет", "预设", "預設", "Předvolba", "Forvalg", "Preset", "Preset", "Esiasetus", "Préréglage", "Voreinstellung", "Προεπιλογή", "Előbeállítás", "Preset", "Preimpostazione", "プリセット", "프리셋", "Forhåndsinnstilling", "Preset", "Predefinição", "Predefinição", "Presetare", "Пресет", "Preajuste", "Preajuste", "Förinställning", "ค่าที่ตั้งไว้", "Ön ayar", "Пресет", "Cài đặt sẵn"],
    keys: ["Клавиши 1–5", "按键 1–5", "按鍵 1–5", "Klávesy 1–5", "Taster 1–5", "Toetsen 1–5", "Keys 1–5", "Näppäimet 1–5", "Touches 1–5", "Tasten 1–5", "Πλήκτρα 1–5", "1–5. gombok", "Tombol 1–5", "Tasti 1–5", "キー 1–5", "키 1–5", "Taster 1–5", "Klawisze 1–5", "Teclas 1–5", "Teclas 1–5", "Tastele 1–5", "Клавиши 1–5", "Teclas 1–5", "Teclas 1–5", "Tangenter 1–5", "ปุ่ม 1–5", "Tuşlar 1–5", "Клавіші 1–5", "Phím 1–5"],
    quickBotPreset: ["Бот", "机器人", "機器人", "Bot", "Bot", "Bot", "Bot", "Botti", "Bot", "Bot", "Bot", "Bot", "Bot", "Bot", "ボット", "봇", "Bot", "Bot", "Bot", "Bot", "Bot", "Бот", "Bot", "Bot", "Bot", "บอต", "Bot", "Бот", "Bot"],
    quickCheaterOne: ["Читер 1 (Aim + WH)", "作弊者 1（自瞄 + 透视）", "作弊者 1（自瞄 + 透視）", "Cheater 1 (Aim + WH)", "Snyder 1 (Aim + WH)", "Cheater 1 (Aim + WH)", "Cheater 1 (Aim + WH)", "Huijari 1 (Aim + WH)", "Tricheur 1 (Aim + WH)", "Cheater 1 (Aim + WH)", "Cheater 1 (Aim + WH)", "Csaló 1 (Aim + WH)", "Cheater 1 (Aim + WH)", "Cheater 1 (Aim + WH)", "チーター 1 (Aim + WH)", "치터 1 (Aim + WH)", "Jukser 1 (Aim + WH)", "Cheater 1 (Aim + WH)", "Trapaceiro 1 (Aim + WH)", "Trapaceiro 1 (Aim + WH)", "Trișor 1 (Aim + WH)", "Читер 1 (Aim + WH)", "Tramposo 1 (Aim + WH)", "Tramposo 1 (Aim + WH)", "Fuskare 1 (Aim + WH)", "คนโกง 1 (Aim + WH)", "Hileci 1 (Aim + WH)", "Читер 1 (Aim + WH)", "Kẻ gian lận 1 (Aim + WH)"],
    quickCheaterTwo: ["Читер 2 (Aim + WH + Bhop)", "作弊者 2（自瞄 + 透视 + 连跳）", "作弊者 2（自瞄 + 透視 + 連跳）", "Cheater 2 (Aim + WH + Bhop)", "Snyder 2 (Aim + WH + Bhop)", "Cheater 2 (Aim + WH + Bhop)", "Cheater 2 (Aim + WH + Bhop)", "Huijari 2 (Aim + WH + Bhop)", "Tricheur 2 (Aim + WH + Bhop)", "Cheater 2 (Aim + WH + Bhop)", "Cheater 2 (Aim + WH + Bhop)", "Csaló 2 (Aim + WH + Bhop)", "Cheater 2 (Aim + WH + Bhop)", "Cheater 2 (Aim + WH + Bhop)", "チーター 2 (Aim + WH + Bhop)", "치터 2 (Aim + WH + Bhop)", "Jukser 2 (Aim + WH + Bhop)", "Cheater 2 (Aim + WH + Bhop)", "Trapaceiro 2 (Aim + WH + Bhop)", "Trapaceiro 2 (Aim + WH + Bhop)", "Trișor 2 (Aim + WH + Bhop)", "Читер 2 (Aim + WH + Bhop)", "Tramposo 2 (Aim + WH + Bhop)", "Tramposo 2 (Aim + WH + Bhop)", "Fuskare 2 (Aim + WH + Bhop)", "คนโกง 2 (Aim + WH + Bhop)", "Hileci 2 (Aim + WH + Bhop)", "Читер 2 (Aim + WH + Bhop)", "Kẻ gian lận 2 (Aim + WH + Bhop)"],
    quickCleanPlayer: ["Чистый игрок", "清白玩家", "清白玩家", "Čistý hráč", "Ren spiller", "Schone speler", "Clean Player", "Puhdas pelaaja", "Joueur légitime", "Sauberer Spieler", "Καθαρός παίκτης", "Tiszta játékos", "Pemain bersih", "Giocatore pulito", "クリーンなプレイヤー", "깨끗한 플레이어", "Ren spiller", "Czysty gracz", "Jogador limpo", "Jogador limpo", "Jucător curat", "Чистый игрок", "Jugador limpio", "Jugador limpio", "Ren spelare", "ผู้เล่นสะอาด", "Temiz oyuncu", "Чистий гравець", "Người chơi trong sạch"],
    quickSkip: ["Неясно / Пропустить", "不确定 / 跳过", "不確定 / 跳過", "Nejisté / Přeskočit", "Usikker / Spring over", "Onzeker / Overslaan", "Uncertain / Skip", "Epävarma / Ohita", "Incertain / Ignorer", "Unsicher / Überspringen", "Αβέβαιο / Παράλειψη", "Bizonytalan / Kihagyás", "Tidak yakin / Lewati", "Incerto / Salta", "不明 / スキップ", "불확실 / 건너뛰기", "Usikker / Hopp over", "Niepewne / Pomiń", "Incerto / Ignorar", "Incerto / Ignorar", "Incert / Omite", "Неясно / Пропустить", "Incierto / Omitir", "Incierto / Omitir", "Osäker / Hoppa över", "ไม่แน่ใจ / ข้าม", "Belirsiz / Atla", "Невідомо / Пропустити", "Không chắc / Bỏ qua"],
    randomizer: ["Рандомайзер", "随机选择", "隨機選擇", "Náhodné pořadí", "Tilfældig rækkefølge", "Willekeurige volgorde", "Verdict randomizer", "Satunnaisjärjestys", "Ordre aléatoire", "Zufällige Reihenfolge", "Τυχαία σειρά", "Véletlenszerű sorrend", "Urutan acak", "Ordine casuale", "ランダム順", "무작위 순서", "Tilfeldig rekkefølge", "Losowa kolejność", "Ordem aleatória", "Ordem aleatória", "Ordine aleatorie", "Рандомайзер вердиктов", "Orden aleatorio", "Orden aleatorio", "Slumpmässig ordning", "สุ่มลำดับ", "Rastgele sıra", "Випадковий порядок", "Thứ tự ngẫu nhiên"],
    randomizerNote: ["Случайный порядок выбора с короткими паузами", "随机打乱选项顺序并加入短暂停顿", "隨機打亂選項順序並加入短暫停頓", "Náhodné pořadí výběru s krátkými prodlevami", "Tilfældig rækkefølge med korte pauser", "Willekeurige volgorde met korte tussenpozen", "Randomizes selection order with short delays", "Satunnaistaa valintajärjestyksen lyhyillä viiveillä", "Ordre de sélection aléatoire avec de courtes pauses", "Zufällige Auswahlreihenfolge mit kurzen Pausen", "Τυχαία σειρά επιλογής με μικρές καθυστερήσεις", "Véletlen sorrend rövid szünetekkel", "Mengacak urutan pilihan dengan jeda singkat", "Ordine di selezione casuale con brevi pause", "選択順をランダム化し短い間隔を追加", "선택 순서를 무작위로 바꾸고 짧게 지연", "Tilfeldig valgrekkefølge med korte pauser", "Losowa kolejność wyboru z krótkimi przerwami", "Ordem aleatória de seleção com pequenas pausas", "Ordem aleatória de seleção com pequenas pausas", "Ordine aleatorie cu pauze scurte", "Случайный порядок выбора с короткими паузами", "Orden aleatorio de selección con pausas breves", "Orden aleatorio de selección con pausas breves", "Slumpad valordning med korta pauser", "สุ่มลำดับการเลือกและหน่วงสั้น ๆ", "Kısa aralıklarla rastgele seçim sırası", "Випадковий порядок вибору з короткими паузами", "Ngẫu nhiên thứ tự chọn với khoảng dừng ngắn"],
    rulesOpen: ["Правила просмотра", "审核说明", "審核說明", "Pokyny k posuzování", "Retningslinjer for gennemgang", "Beoordelingsrichtlijnen", "Review guidelines", "Arviointiohjeet", "Consignes d’examen", "Prüfrichtlinien", "Οδηγίες αξιολόγησης", "Értékelési útmutató", "Panduan peninjauan", "Linee guida per la revisione", "審査ガイドライン", "검토 안내", "Retningslinjer for gjennomgang", "Wytyczne oceny", "Orientações de análise", "Orientações de análise", "Instrucțiuni de examinare", "Правила просмотра", "Guía de revisión", "Guía de revisión", "Riktlinjer för granskning", "แนวทางการตรวจสอบ", "İnceleme yönergeleri", "Правила перегляду", "Hướng dẫn xem xét"],
    rulesTitle: ["Преди прегледа", "开始审核前", "開始審核前", "Před kontrolou", "Før gennemgang", "Voor je begint", "Before you review", "Ennen tarkistusta", "Avant l’examen", "Vor der Prüfung", "Πριν από την αξιολόγηση", "Értékelés előtt", "Sebelum meninjau", "Prima della revisione", "確認の前に", "검토 전 안내", "Før gjennomgang", "Przed oceną", "Antes de analisar", "Antes de analisar", "Înainte de examinare", "Перед просмотром", "Antes de revisar", "Antes de revisar", "Innan granskningen", "ก่อนตรวจสอบ", "İncelemeden önce", "Перед переглядом", "Trước khi xem xét"],
    rulesIntro: ["Гледайте клиповете със звук и отговаряйте на въпросите.", "请开启声音观看视频并回答问题。", "請開啟聲音觀看影片並回答問題。", "Sledujte videa se zvukem a odpovídejte na otázky.", "Se videoerne med lyd, og besvar spørgsmålene.", "Bekijk video's met geluid en beantwoord de vragen.", "Please watch videos with sound and answer the questions.", "Katso videot äänen kanssa ja vastaa kysymyksiin.", "Regardez les vidéos avec le son et répondez aux questions.", "Sieh dir die Videos mit Ton an und beantworte die Fragen.", "Παρακολουθήστε τα βίντεο με ήχο και απαντήστε στις ερωτήσεις.", "Hanggal nézd a videókat, és válaszolj a kérdésekre.", "Tonton video dengan suara dan jawab pertanyaan.", "Guarda i video con l’audio e rispondi alle domande.", "音声をオンにして動画を見て、質問に回答してください。", "소리를 켜고 영상을 시청한 뒤 질문에 답하세요.", "Se videoene med lyd, og svar på spørsmålene.", "Oglądaj filmy z dźwiękiem i odpowiadaj na pytania.", "Assista aos vídeos com som e responda às perguntas.", "Assista aos vídeos com som e responda às perguntas.", "Urmăriți clipurile cu sunet și răspundeți la întrebări.", "Смотрите видео со звуком и отвечайте на вопросы.", "Mira los vídeos con sonido y responde a las preguntas.", "Mira los videos con sonido y responde a las preguntas.", "Titta på klippen med ljud och svara på frågorna.", "โปรดดูวิดีโอพร้อมเสียงและตอบคำถาม", "Videoları sesli izleyin ve soruları yanıtlayın.", "Дивіться відео зі звуком і відповідайте на запитання.", "Hãy xem video có âm thanh và trả lời câu hỏi."],
    rulesHighlight: ["Подсветката на играчите е активна.", "玩家透视高亮已启用。", "玩家透視高亮已啟用。", "Zvýraznění hráčů je aktivní.", "Spillerfremhævning er aktiv.", "Spelers worden gemarkeerd.", "Player highlighting is active.", "Pelaajien korostus on käytössä.", "La surbrillance des joueurs est active.", "Spieler werden hervorgehoben.", "Η επισήμανση παικτών είναι ενεργή.", "A játékosok kiemelése aktív.", "Penyorotan pemain aktif.", "L’evidenziazione dei giocatori è attiva.", "プレイヤーのハイライトが有効です。", "플레이어 강조 표시가 활성화되어 있습니다.", "Spillerfremheving er aktivert.", "Podświetlanie graczy jest aktywne.", "O destaque de jogadores está ativado.", "O destaque de jogadores está ativado.", "Evidențierea jucătorilor este activă.", "Подсветка игроков включена.", "El resaltado de jugadores está activado.", "El resaltado de jugadores está activado.", "Spelarhighlightning är aktiv.", "เปิดการไฮไลต์ผู้เล่นอยู่", "Oyuncu vurgulama açık.", "Підсвічування гравців увімкнено.", "Tính năng làm nổi bật người chơi đang bật."],
    rulesImpact: ["Присъдата ви не засяга директно играча, чиято игра гледате. Точните присъди може да се използват за обучение на бъдещи модели VACNet.", "你的判定不会直接影响你正在观看的玩家。准确判定可能用于训练未来的 VACNet 模型。", "你的判定不會直接影響你正在觀看的玩家。準確判定可能用於訓練未來的 VACNet 模型。", "Tvůj verdikt nemá přímý vliv na hráče, jehož hru sleduješ. Přesné verdikty mohou sloužit k trénování budoucích modelů VACNet.", "Din afgørelse påvirker ikke direkte spilleren, hvis spil du ser. Præcise afgørelser kan bruges til at træne fremtidige VACNet-modeller.", "Je oordeel heeft geen directe invloed op de speler die je bekijkt. Nauwkeurige oordelen kunnen worden gebruikt om toekomstige VACNet-modellen te trainen.", "Your verdict does not directly affect the player you are reviewing. Accurate verdicts may help train future VACNet models.", "Arviosi ei vaikuta suoraan tarkastelemaasi pelaajaan. Tarkkoja arvioita voidaan käyttää tulevien VACNet-mallien kouluttamiseen.", "Votre verdict n’affecte pas directement le joueur observé. Des verdicts précis peuvent servir à entraîner de futurs modèles VACNet.", "Dein Urteil wirkt sich nicht direkt auf den beobachteten Spieler aus. Genaue Urteile können zum Training zukünftiger VACNet-Modelle beitragen.", "Η ετυμηγορία σου δεν επηρεάζει άμεσα τον παίκτη που εξετάζεις. Οι ακριβείς ετυμηγορίες μπορεί να χρησιμοποιηθούν για την εκπαίδευση μελλοντικών μοντέλων VACNet.", "Az ítéleted nincs közvetlen hatással a megfigyelt játékosra. A pontos ítéletek a jövőbeli VACNet-modellek tanítását segíthetik.", "Vonismu tidak berdampak langsung pada pemain yang sedang kamu tinjau. Vonis akurat dapat digunakan untuk melatih model VACNet mendatang.", "Il tuo verdetto non influisce direttamente sul giocatore osservato. I verdetti accurati possono contribuire all’addestramento dei futuri modelli VACNet.", "判定が対象プレイヤーに直接影響することはありません。正確な判定は将来の VACNet モデルの学習に使われる場合があります。", "판정은 검토 중인 플레이어에게 직접 영향을 주지 않습니다. 정확한 판정은 향후 VACNet 모델 학습에 사용될 수 있습니다.", "Vurderingen din påvirker ikke spilleren direkte. Presise vurderinger kan brukes til å trene fremtidige VACNet-modeller.", "Twój werdykt nie wpływa bezpośrednio na obserwowanego gracza. Dokładne werdykty mogą pomóc w trenowaniu przyszłych modeli VACNet.", "Seu veredito não afeta diretamente o jogador analisado. Vereditos precisos podem ajudar a treinar futuros modelos do VACNet.", "Seu veredito não afeta diretamente o jogador analisado. Vereditos precisos podem ajudar a treinar futuros modelos do VACNet.", "Verdictul tău nu afectează direct jucătorul analizat. Verdicturile precise pot contribui la antrenarea viitoarelor modele VACNet.", "Ваш вердикт не влияет напрямую на игрока, чью игру вы смотрите. Точные вердикты могут использоваться для обучения будущих моделей VACNet.", "Tu veredicto no afecta directamente al jugador que estás revisando. Los veredictos precisos pueden ayudar a entrenar futuros modelos de VACNet.", "Tu veredicto no afecta directamente al jugador que estás revisando. Los veredictos precisos pueden ayudar a entrenar futuros modelos de VACNet.", "Ditt omdöme påverkar inte spelaren direkt. Exakta omdömen kan användas för att träna framtida VACNet-modeller.", "คำตัดสินของคุณไม่มีผลโดยตรงต่อผู้เล่นที่กำลังตรวจสอบ และคำตัดสินที่แม่นยำอาจใช้ฝึกโมเดล VACNet ในอนาคต", "Kararın incelediğin oyuncuyu doğrudan etkilemez. Doğru kararlar gelecekteki VACNet modellerini eğitmek için kullanılabilir.", "Ваш вердикт безпосередньо не впливає на гравця, чию гру ви переглядаєте. Точні вердикти можуть використовуватися для навчання майбутніх моделей VACNet.", "Phán quyết của bạn không ảnh hưởng trực tiếp đến người chơi đang được xem xét. Phán quyết chính xác có thể giúp huấn luyện các mô hình VACNet trong tương lai."],
    rulesUncertain: ["Нормално е често да избирате „Не съм сигурен“. Избирайте друг вердикт само ако сте напълно сигурни.", "经常选择“不确定”是正常的。只有在非常确定时才选择其他判定。", "經常選擇「不確定」是正常的。只有在非常確定時才選擇其他判定。", "Je normální často volit „Nejistý“. Jiný verdikt vyber pouze tehdy, když si jsi jistý.", "Det er helt normalt ofte at vælge »Usikker«. Vælg kun en anden afgørelse, hvis du er helt sikker.", "Het is normaal om vaak ‘Onzeker’ te kiezen. Kies alleen iets anders als je het zeker weet.", "It is normal to choose “Uncertain” often. Choose another verdict only when you are sure.", "On normaalia valita usein ”Epävarma”. Valitse muu arvio vain, jos olet varma.", "Il est normal de choisir souvent « Incertain ». Choisissez un autre verdict uniquement si vous êtes sûr.", "Es ist normal, oft „Unsicher“ zu wählen. Wähle ein anderes Urteil nur, wenn du dir sicher bist.", "Είναι φυσιολογικό να επιλέγεις συχνά «Αβέβαιος». Διάλεξε άλλη ετυμηγορία μόνο αν είσαι σίγουρος.", "Teljesen rendben van gyakran a „Bizonytalan” lehetőséget választani. Csak akkor válassz mást, ha biztos vagy benne.", "Wajar jika sering memilih “Tidak yakin”. Pilih vonis lain hanya jika kamu benar-benar yakin.", "È normale scegliere spesso «Incerto». Scegli un altro verdetto solo se sei sicuro.", "「不確か」を頻繁に選ぶのは問題ありません。確信がある場合のみ別の判定を選んでください。", "‘불확실’을 자주 선택해도 괜찮습니다. 확신이 있을 때만 다른 판정을 선택하세요.", "Det er helt normalt å velge «Usikker» ofte. Velg en annen vurdering bare hvis du er sikker.", "Częsty wybór „Niepewny” jest normalny. Inny werdykt wybierz tylko wtedy, gdy masz pewność.", "É normal escolher “Incerto” com frequência. Escolha outro veredito apenas se tiver certeza.", "É normal escolher “Incerto” com frequência. Escolha outro veredito apenas se tiver certeza.", "Este normal să alegi des „Incert”. Alege alt verdict doar dacă ești sigur.", "Часто выбирать «Не уверен» — это нормально. Выбирайте другой вердикт, только если полностью уверены.", "Es normal elegir «Incierto» a menudo. Elige otro veredicto solo si estás seguro.", "Es normal elegir «Incierto» a menudo. Elige otro veredicto solo si estás seguro.", "Det är normalt att ofta välja ”Osäker”. Välj ett annat omdöme endast om du är säker.", "เป็นเรื่องปกติที่จะเลือก “ไม่แน่ใจ” บ่อย ๆ เลือกคำตัดสินอื่นเมื่อมั่นใจเท่านั้น", "Sık sık “Belirsiz” seçmek normaldir. Başka bir karar için yalnızca eminsen seçim yap.", "Часто вибирати «Не впевнений» — це нормально. Обирайте інший вердикт, лише якщо цілком упевнені.", "Thường xuyên chọn “Không chắc chắn” là bình thường. Chỉ chọn phán quyết khác khi bạn chắc chắn."],
    rulesTypical: ["Клиповете не показват типичен игрови процес.", "这些视频不代表典型的游戏过程。", "這些影片不代表典型的遊戲過程。", "Videa nepředstavují typický průběh hry.", "Videoerne viser ikke typisk gameplay.", "De video's tonen geen representatieve gameplay.", "These videos do not represent typical gameplay.", "Videot eivät kuvaa tyypillistä pelaamista.", "Ces vidéos ne représentent pas un gameplay typique.", "Diese Videos zeigen kein typisches Gameplay.", "Τα βίντεο δεν παρουσιάζουν τυπικό τρόπο παιχνιδιού.", "A videók nem mutatnak tipikus játékmenetet.", "Video ini tidak menggambarkan permainan yang umum.", "Questi video non rappresentano una partita tipica.", "これらの動画は一般的なゲームプレイを示すものではありません。", "이 영상은 일반적인 게임 플레이를 보여주지 않습니다.", "Videoene viser ikke typisk spilling.", "Filmy nie przedstawiają typowej rozgrywki.", "Os vídeos não representam uma partida típica.", "Os vídeos não representam uma partida típica.", "Clipurile nu reprezintă un joc obișnuit.", "Видео не отражают типичный игровой процесс.", "Estos vídeos no representan una partida típica.", "Estos videos no representan una partida típica.", "Klippen visar inte typiskt spelupplägg.", "วิดีโอเหล่านี้ไม่แสดงรูปแบบการเล่นทั่วไป", "Bu videolar tipik oynanışı yansıtmaz.", "Ці відео не відображають типовий ігровий процес.", "Các video này không thể hiện lối chơi thông thường."],
    rulesClose: ["Затвори", "关闭", "關閉", "Zavřít", "Luk", "Sluiten", "Close", "Sulje", "Fermer", "Schließen", "Κλείσιμο", "Bezárás", "Tutup", "Chiudi", "閉じる", "닫기", "Lukk", "Zamknij", "Fechar", "Fechar", "Închide", "Закрыть", "Cerrar", "Cerrar", "Stäng", "ปิด", "Kapat", "Закрити", "Đóng"],
    extended: ["Разширени комбинации", "高级组合", "進階組合", "Rozšířené kombinace", "Udvidede kombinationer", "Uitgebreide combinaties", "Expanded combinations", "Laajennetut yhdistelmät", "Combinaisons avancées", "Erweiterte Kombinationen", "Προηγμένοι συνδυασμοί", "Bővített kombinációk", "Kombinasi lanjutan", "Combinazioni avanzate", "詳細な組み合わせ", "고급 조합", "Utvidede kombinasjoner", "Rozszerzone kombinacje", "Combinações avançadas", "Combinações avançadas", "Combinații extinse", "Расширенные комбинации", "Combinaciones avanzadas", "Combinaciones avanzadas", "Utökade kombinationer", "ชุดผสมขั้นสูง", "Gelişmiş kombinasyonlar", "Розширені комбінації", "Tổ hợp nâng cao"],
    uncertain: ["Не съм сигурен", "不确定", "不確定", "Nejistý", "Usikker", "Onzeker", "Uncertain", "Epävarma", "Incertain", "Unsicher", "Αβέβαιος", "Bizonytalan", "Tidak yakin", "Incerto", "不確か", "불확실", "Usikker", "Niepewny", "Incerto", "Incerto", "Incert", "Не уверен", "Incierto", "Incierto", "Osäker", "ไม่แน่ใจ", "Emin değilim", "Не впевнений", "Không chắc chắn"],
    clean: ["Чисто", "清白", "清白", "Čistý", "Ren", "Schoon", "Clean", "Puhdas", "Légitime", "Sauber", "Καθαρός", "Tiszta", "Bersih", "Pulito", "クリーン", "클린", "Ren", "Czysty", "Limpo", "Limpo", "Curat", "Чисто", "Limpio", "Limpio", "Ren", "ผู้เล่นสะอาด", "Temiz", "Чисто", "Trong sạch"],
    walls: ["Стени?", "透视？", "透視？", "Wallhack?", "Wallhack?", "Wallhack?", "Walls?", "Wallhack?", "Murs ?", "Wallhack?", "Wallhack;", "Fal?", "Wallhack?", "Wallhack?", "ウォール？", "월핵?", "Wallhack?", "Wallhack?", "Wallhack?", "Wallhack?", "Wallhack?", "Стены?", "¿Paredes?", "¿Paredes?", "Väggar?", "เห็นทะลุกำแพง?", "Duvar?", "Стіни?", "Wallhack?"],
    aimOnly: ["Само Aim", "仅瞄准", "僅瞄準", "Pouze Aim", "Kun Aim", "Alleen Aim", "Aim only", "Vain Aim", "Aim uniquement", "Nur Aim", "Μόνο Aim", "Csak Aim", "Aim saja", "Solo Aim", "Aimのみ", "Aim만", "Kun Aim", "Tylko Aim", "Só Aim", "Só Aim", "Doar Aim", "Только Aim", "Solo Aim", "Solo Aim", "Endast Aim", "Aim เท่านั้น", "Yalnızca Aim", "Лише Aim", "Chỉ Aim"],
    bhopOnly: ["Само Bhop", "仅连跳", "僅連跳", "Pouze Bhop", "Kun Bhop", "Alleen Bhop", "Bhop only", "Vain Bhop", "Bhop uniquement", "Nur Bhop", "Μόνο Bhop", "Csak Bhop", "Bhop saja", "Solo Bhop", "Bhopのみ", "Bhop만", "Kun Bhop", "Tylko Bhop", "Só Bhop", "Só Bhop", "Doar Bhop", "Только Bhop", "Solo Bhop", "Solo Bhop", "Endast Bhop", "Bhop เท่านั้น", "Yalnızca Bhop", "Лише Bhop", "Chỉ Bhop"],
    uncertainOne: ["Не сте сигурни само за един пункт", "仅对一项不确定", "僅對一項不確定", "Nejistota pouze u jedné položky", "Usikker på ét punkt", "Onzeker over één punt", "Uncertain about one item", "Epävarma yhdestä kohdasta", "Incertain sur un seul point", "Bei einem Punkt unsicher", "Αβέβαιος μόνο για ένα στοιχείο", "Csak egy pontban bizonytalan", "Ragu pada satu item", "Incerto su un solo punto", "1項目だけ不確か", "한 항목만 불확실", "Usikker på ett punkt", "Niepewność tylko przy jednym punkcie", "Dúvida em apenas um item", "Dúvida em apenas um item", "Incertitudine la un singur punct", "Не уверен только в одном пункте", "Duda en un solo punto", "Duda en un solo punto", "Osäker på en punkt", "ไม่แน่ใจเพียงข้อเดียว", "Yalnızca bir maddeden emin değil", "Не впевнені лише щодо одного пункту", "Chỉ không chắc ở một mục"],
    exactCombos: ["Точни комбинации на нарушения", "违规行为的精确组合", "違規行為的精確組合", "Přesné kombinace porušení", "Præcise overtrædelseskombinationer", "Exacte overtredingscombinaties", "Exact violation combinations", "Tarkat rikkomusyhdistelmät", "Combinaisons exactes d’infractions", "Genaue Regelverstoß-Kombinationen", "Ακριβείς συνδυασμοί παραβάσεων", "Pontos szabálysértési kombinációk", "Kombinasi pelanggaran yang tepat", "Combinazioni esatte di violazioni", "違反の正確な組み合わせ", "정확한 위반 조합", "Nøyaktige kombinasjoner av regelbrudd", "Dokładne kombinacje naruszeń", "Combinações exatas de infrações", "Combinações exatas de infrações", "Combinații exacte de încălcări", "Точные комбинации нарушений", "Combinaciones exactas de infracciones", "Combinaciones exactas de infracciones", "Exakta kombinationer av regelbrott", "ชุดการละเมิดที่ตรงกัน", "Kesin ihlal kombinasyonları", "Точні комбінації порушень", "Tổ hợp vi phạm chính xác"],
    history: ["История локално", "本地历史", "本機歷史", "Místní historie", "Lokal historik", "Lokale geschiedenis", "Local history", "Paikallinen historia", "Historique local", "Lokaler Verlauf", "Τοπικό ιστορικό", "Helyi előzmények", "Riwayat lokal", "Cronologia locale", "ローカル履歴", "로컬 기록", "Lokal historikk", "Historia lokalna", "Histórico local", "Histórico local", "Istoric local", "Локальная история", "Historial local", "Historial local", "Lokal historik", "ประวัติในเครื่อง", "Yerel geçmiş", "Локальна історія", "Lịch sử cục bộ"],
    historyEmpty: ["Историята ще се появи след изпращане на присъда.", "提交判定后，这里会显示历史记录。", "提交判定後，這裡會顯示歷史記錄。", "Historie se zobrazí po odeslání verdiktu.", "Historikken vises, når du har indsendt en afgørelse.", "De geschiedenis verschijnt nadat je een oordeel hebt verzonden.", "History will appear after you submit a verdict.", "Historia näkyy, kun olet lähettänyt arvion.", "L’historique apparaîtra après l’envoi d’un verdict.", "Der Verlauf wird nach dem Absenden eines Urteils angezeigt.", "Το ιστορικό θα εμφανιστεί μετά την υποβολή ετυμηγορίας.", "Az előzmények az ítélet beküldése után jelennek meg.", "Riwayat akan muncul setelah kamu mengirim vonis.", "La cronologia apparirà dopo l’invio di un verdetto.", "判定を送信すると履歴が表示されます。", "판정을 제출하면 기록이 표시됩니다.", "Historikken vises etter at du har sendt inn en vurdering.", "Historia pojawi się po wysłaniu werdyktu.", "O histórico aparecerá após o envio de um veredito.", "O histórico aparecerá após o envio de um veredito.", "Istoricul va apărea după trimiterea unui verdict.", "История появится после отправки вердикта.", "El historial aparecerá después de enviar un veredicto.", "El historial aparecerá después de enviar un veredicto.", "Historiken visas när du har skickat ett omdöme.", "ประวัติจะแสดงหลังจากส่งคำตัดสิน", "Kararı gönderdikten sonra geçmiş burada görünür.", "Історія з’явиться після надсилання вердикту.", "Lịch sử sẽ xuất hiện sau khi bạn gửi phán quyết."],
    scroll: ["Може да се превърта", "可滚动", "可捲動", "Lze posouvat", "Kan rulles", "Scrollen mogelijk", "Scrollable", "Vieritettävissä", "Défilable", "Bildlauf möglich", "Με δυνατότητα κύλισης", "Görgethető", "Dapat digulir", "Scorrevole", "スクロールできます", "스크롤 가능", "Kan rulles", "Można przewijać", "Pode deslocar", "Pode rolar", "Derulabil", "Можно прокручивать", "Desplazable", "Desplazable", "Rullningsbar", "เลื่อนได้", "Kaydırılabilir", "Можна прокручувати", "Có thể cuộn"],
    holdShift: ["Задръжте Shift по време на гледане", "观看时按住 Shift", "觀看時按住 Shift", "Při sledování podržte Shift", "Hold Shift under visning", "Houd Shift ingedrukt tijdens het bekijken", "Hold Shift while watching", "Pidä Shift painettuna katselun aikana", "Maintenez Shift pendant le visionnage", "Shift beim Ansehen gedrückt halten", "Κρατήστε πατημένο το Shift κατά την προβολή", "Lejátszás közben tartsa lenyomva a Shiftet", "Tahan Shift saat menonton", "Tieni premuto Shift durante la visione", "視聴中にShiftを長押し", "시청 중 Shift 키를 누르세요", "Hold Shift mens du ser", "Przytrzymaj Shift podczas oglądania", "Mantenha Shift pressionado durante a reprodução", "Segure Shift durante a reprodução", "Țineți apăsat Shift în timpul vizionării", "Удерживайте Shift во время просмотра", "Mantén Shift mientras ves el vídeo", "Mantén Shift mientras ves el video", "Håll Shift nedtryckt medan du tittar", "กด Shift ค้างไว้ขณะรับชม", "İzlerken Shift tuşunu basılı tutun", "Утримуйте Shift під час перегляду", "Giữ Shift khi xem"],
    speed: ["Скорост", "速度", "速度", "Rychlost", "Hastighed", "Snelheid", "Speed", "Nopeus", "Vitesse", "Geschwindigkeit", "Ταχύτητα", "Sebesség", "Kecepatan", "Velocità", "速度", "속도", "Hastighet", "Prędkość", "Velocidade", "Velocidade", "Viteză", "Скорость", "Velocidad", "Velocidad", "Hastighet", "ความเร็ว", "Hız", "Швидкість", "Tốc độ"],
    mixed: ["Смесен", "混合", "混合", "Smíšený", "Blandet", "Gemengd", "Mixed", "Sekoitettu", "Mixte", "Gemischt", "Μικτό", "Vegyes", "Campuran", "Misto", "混合", "혼합", "Blandet", "Mieszany", "Misto", "Misto", "Mixt", "Смешанный", "Mixto", "Mixto", "Blandad", "ผสม", "Karışık", "Змішаний", "Hỗn hợp"],
    aim: ["Прицелване", "瞄准", "瞄準", "Míření", "Sigte", "Richten", "Aim", "Tähtäys", "Visée", "Zielen", "Σκόπευση", "Célzás", "Bidikan", "Mira", "エイム", "에임", "Sikte", "Celowanie", "Mira", "Mira", "Țintire", "Aim", "Apuntado", "Apuntado", "Sikte", "เล็ง", "Nişan", "Прицілювання", "Ngắm"],
    bhop: ["Скокове", "连跳", "連跳", "Bhop", "Bhop", "Bhop", "Bhop", "Bhop", "Bhop", "Bhop", "Bhop", "Bhop", "Bhop", "Bhop", "バニホ", "버니합", "Bhop", "Bhop", "Bhop", "Bhop", "Bhop", "Bhop", "Bhop", "Bhop", "Bhop", "Bhop", "Bhop", "Bhop", "Bhop"],
    bot: ["Бот", "机器人", "機器人", "Bot", "Bot", "Bot", "Bot", "Botti", "Bot", "Bot", "Bot", "Bot", "Bot", "Bot", "ボット", "봇", "Bot", "Bot", "Bot", "Bot", "Bot", "Bot", "Bot", "Bot", "Bot", "บอต", "Bot", "Бот", "Bot"],
    titleAim: ["Помощ при прицелване", "瞄准辅助", "瞄準輔助", "Aim Assist", "Aim Assist", "Aim Assist", "Aim Assist", "Tähtäysapu", "Assistance à la visée", "Zielhilfe", "Υποβοήθηση σκόπευσης", "Célzássegítés", "Bantuan bidik", "Assistenza mira", "エイム補助", "에임 보조", "Aim Assist", "Wspomaganie celowania", "Assistência de mira", "Assistência de mira", "Asistență la țintire", "Aim Assist", "Asistencia de apuntado", "Asistencia de apuntado", "Sikteshjälp", "ตัวช่วยเล็ง", "Nişan yardımı", "Допомога прицілювання", "Hỗ trợ ngắm"],
    titleWalls: ["Стени", "透视", "透視", "Wall Hack", "Wall Hack", "Wall Hack", "Wall Hack", "Wallhack", "Wall Hack", "Wallhack", "Wall Hack", "Wall Hack", "Wallhack", "Wall Hack", "ウォールハック", "월핵", "Wall Hack", "Wallhack", "Wall Hack", "Wall Hack", "Wallhack", "Wall Hack", "Wallhack", "Wallhack", "Wallhack", "วอลแฮ็ก", "Duvar hilesi", "Воллхак", "Nhìn xuyên tường"],
    wallhack: ["Уолхак", "透视", "透視", "Wallhack", "Wallhack", "Wallhack", "Wallhack", "Wallhack", "Vision à travers les murs", "Wallhack", "Wallhack", "Falon átlátás", "Wallhack", "Wallhack", "ウォールハック", "월핵", "Wallhack", "Wallhack", "Wallhack", "Wallhack", "Wallhack", "Воллхак", "Wallhack", "Wallhack", "Wallhack", "วอลแฮ็ก", "Duvar hilesi", "Воллхак", "Nhìn xuyên tường"],
    rage: ["Рейдж", "暴怒", "暴怒", "Rage", "Rage", "Rage", "Rage", "Rage", "Rage", "Rage", "Rage", "Rage", "Rage", "Rage", "レイジ", "레이지", "Rage", "Rage", "Rage", "Rage", "Rage", "Рейдж", "Rage", "Rage", "Rage", "เรจ", "Öfke", "Рейдж", "Rage"],
    titleBhop: ["Автоматичен скок", "自动连跳", "自動連跳", "Automatický Bhop", "Auto Bhop", "Auto Bhop", "Auto Bhop", "Automaattinen Bhop", "Auto Bhop", "Auto-Bhop", "Αυτόματο Bhop", "Auto Bhop", "Auto Bhop", "Auto Bhop", "オートBhop", "자동 버니합", "Auto Bhop", "Auto Bhop", "Auto Bhop", "Auto Bhop", "Auto Bhop", "Auto Bhop", "Auto Bhop", "Auto Bhop", "Auto Bhop", "กระโดดอัตโนมัติ", "Otomatik Bhop", "Авто Bhop", "Tự động Bhop"],
    send: ["Изпрати присъда", "提交判定", "提交判定", "Odeslat verdikt", "Send afgørelse", "Oordeel verzenden", "Submit verdict", "Lähetä arvio", "Envoyer le verdict", "Bewertung absenden", "Υποβολή ετυμηγορίας", "Ítélet beküldése", "Kirim vonis", "Invia verdetto", "判定を送信", "판정 제출", "Send vurdering", "Wyślij werdykt", "Enviar veredito", "Enviar veredito", "Trimite verdictul", "Отправить вердикт", "Enviar veredicto", "Enviar veredicto", "Skicka bedömning", "ส่งคำตัดสิน", "Kararı gönder", "Надіслати вердикт", "Gửi phán quyết"],
    continue: ["Продължи", "继续", "繼續", "Pokračovat", "Fortsæt", "Doorgaan", "Continue", "Jatka", "Continuer", "Weiter", "Συνέχεια", "Folytatás", "Lanjutkan", "Continua", "続行", "계속", "Fortsett", "Kontynuuj", "Continuar", "Continuar", "Continuă", "Продолжить", "Continuar", "Continuar", "Fortsätt", "ดำเนินการต่อ", "Devam et", "Продовжити", "Tiếp tục"],
    confirm: ["Потвърди", "确认", "確認", "Potvrdit", "Bekræft", "Bevestigen", "Confirm", "Vahvista", "Confirmer", "Bestätigen", "Επιβεβαίωση", "Megerősítés", "Konfirmasi", "Conferma", "確認", "확인", "Bekreft", "Potwierdź", "Confirmar", "Confirmar", "Confirmă", "Подтвердить", "Confirmar", "Confirmar", "Bekräfta", "ยืนยัน", "Onayla", "Підтвердити", "Xác nhận"],
    allCategories: ["Изберете опция във всичките четири категории", "请为全部四个类别选择一个选项", "請為全部四個類別選擇一個選項", "Vyberte možnost ve všech čtyřech kategoriích", "Vælg en mulighed i alle fire kategorier", "Kies een optie in alle vier categorieën", "Choose an option in all four categories", "Valitse vaihtoehto kaikista neljästä kategoriasta", "Choisissez une option dans les quatre catégories", "Wählen Sie in allen vier Kategorien eine Option", "Επιλέξτε μια επιλογή και στις τέσσερις κατηγορίες", "Válasszon egy lehetőséget mind a négy kategóriában", "Pilih opsi di keempat kategori", "Seleziona un’opzione in tutte e quattro le categorie", "4つすべてのカテゴリで項目を選択してください", "네 가지 항목 모두에서 옵션을 선택하세요", "Velg et alternativ i alle fire kategoriene", "Wybierz opcję we wszystkich czterech kategoriach", "Escolha uma opção nas quatro categorias", "Escolha uma opção nas quatro categorias", "Alegeți o opțiune în toate cele patru categorii", "Выберите вариант во всех четырёх категориях", "Elige una opción en las cuatro categorías", "Elige una opción en las cuatro categorías", "Välj ett alternativ i alla fyra kategorier", "เลือกตัวเลือกในทั้งสี่หมวดหมู่", "Dört kategorinin tümünde bir seçenek belirleyin", "Виберіть варіант у всіх чотирьох категоріях", "Chọn một tùy chọn trong cả bốn mục"],
    nextClip: ["Зареждане на следващия клип…", "正在加载下一个片段…", "正在載入下一段片段…", "Načítání dalšího klipu…", "Indlæser næste klip…", "Volgende clip laden…", "Loading next clip…", "Ladataan seuraavaa leikettä…", "Chargement du clip suivant…", "Nächsten Clip laden…", "Φόρτωση επόμενου αποσπάσματος…", "Következő klip betöltése…", "Memuat klip berikutnya…", "Caricamento della clip successiva…", "次のクリップを読み込み中…", "다음 클립 불러오는 중…", "Laster inn neste klipp…", "Ładowanie następnego klipu…", "Carregando o próximo clipe…", "Carregando o próximo clipe…", "Se încarcă următorul clip…", "Загружаем следующий клип…", "Cargando el siguiente clip…", "Cargando el siguiente clip…", "Laddar nästa klipp…", "กำลังโหลดคลิปถัดไป…", "Sonraki klip yükleniyor…", "Завантаження наступного кліпу…", "Đang tải đoạn tiếp theo…"],
    sendFailed: ["Неуспешно изпращане на присъдата. Опитайте отново", "提交判定失败，请重试", "提交判定失敗，請再試一次", "Odeslání verdiktu se nezdařilo. Zkuste to znovu", "Afgørelsen kunne ikke sendes. Prøv igen", "Verzenden van oordeel mislukt. Probeer het opnieuw", "Could not submit verdict. Try again", "Arvion lähetys epäonnistui. Yritä uudelleen", "Échec de l’envoi du verdict. Réessayez", "Bewertung konnte nicht gesendet werden. Erneut versuchen", "Αποτυχία υποβολής ετυμηγορίας. Δοκιμάστε ξανά", "Az ítélet beküldése nem sikerült. Próbálja újra", "Gagal mengirim vonis. Coba lagi", "Invio del verdetto non riuscito. Riprova", "判定を送信できませんでした。もう一度お試しください", "판정을 제출하지 못했습니다. 다시 시도하세요", "Kunne ikke sende vurderingen. Prøv igjen", "Nie udało się wysłać werdyktu. Spróbuj ponownie", "Não foi possível enviar o veredito. Tente novamente", "Não foi possível enviar o veredito. Tente novamente", "Nu s-a putut trimite verdictul. Încercați din nou", "Не удалось отправить вердикт. Попробуйте ещё раз", "No se pudo enviar el veredicto. Inténtalo de nuevo", "No se pudo enviar el veredicto. Inténtalo de nuevo", "Det gick inte att skicka bedömningen. Försök igen", "ส่งคำตัดสินไม่สำเร็จ โปรดลองอีกครั้ง", "Karar gönderilemedi. Yeniden deneyin", "Не вдалося надіслати вердикт. Спробуйте ще раз", "Không thể gửi phán quyết. Hãy thử lại"],
    selectAll: ["Изберете опции във всички категории", "选择所有类别", "選取所有類別", "Vyberte všechny kategorie", "Vælg alle kategorier", "Selecteer alle categorieën", "Select all categories", "Valitse kaikki kategoriat", "Sélectionner toutes les catégories", "Alle Kategorien auswählen", "Επιλέξτε όλες τις κατηγορίες", "Válasszon minden kategóriát", "Pilih semua kategori", "Seleziona tutte le categorie", "すべてのカテゴリを選択", "모든 항목 선택", "Velg alle kategorier", "Wybierz wszystkie kategorie", "Selecione todas as categorias", "Selecione todas as categorias", "Selectați toate categoriile", "Выберите вариант во всех четырёх категориях", "Selecciona todas las categorías", "Selecciona todas las categorías", "Välj alla kategorier", "เลือกทุกหมวดหมู่", "Tüm kategorileri seçin", "Виберіть усі категорії", "Chọn tất cả danh mục"],
    unsafe: ["Изпращането е отменено: формулярът води извън counter-strike.net", "已取消提交：表单指向 counter-strike.net 以外", "已取消提交：表單指向 counter-strike.net 以外", "Odeslání zrušeno: formulář vede mimo counter-strike.net", "Afsendelse annulleret: formularen fører uden for counter-strike.net", "Verzenden geannuleerd: formulier verwijst buiten counter-strike.net", "Submission cancelled: form points outside counter-strike.net", "Lähetys peruutettu: lomake johtaa counter-strike.net-sivuston ulkopuolelle", "Envoi annulé : le formulaire mène hors de counter-strike.net", "Senden abgebrochen: Formular führt außerhalb von counter-strike.net", "Η υποβολή ακυρώθηκε: η φόρμα οδηγεί εκτός του counter-strike.net", "Beküldés megszakítva: az űrlap a counter-strike.net-en kívülre mutat", "Pengiriman dibatalkan: formulir mengarah ke luar counter-strike.net", "Invio annullato: il modulo rimanda fuori da counter-strike.net", "送信をキャンセルしました：フォームの送信先が counter-strike.net の外です", "제출 취소: 양식이 counter-strike.net 외부로 연결됩니다", "Sending avbrutt: skjemaet peker utenfor counter-strike.net", "Wysyłanie anulowane: formularz prowadzi poza counter-strike.net", "Envio cancelado: o formulário aponta para fora de counter-strike.net", "Envio cancelado: o formulário aponta para fora de counter-strike.net", "Trimitere anulată: formularul duce în afara counter-strike.net", "Отправка отменена: форма ведёт за пределы counter-strike.net", "Envío cancelado: el formulario apunta fuera de counter-strike.net", "Envío cancelado: el formulario apunta fuera de counter-strike.net", "Skickandet avbröts: formuläret leder utanför counter-strike.net", "ยกเลิกการส่ง: แบบฟอร์มชี้ไปนอก counter-strike.net", "Gönderim iptal edildi: form counter-strike.net dışına yönlendiriyor", "Надсилання скасовано: форма веде за межі counter-strike.net", "Đã hủy gửi: biểu mẫu dẫn ra ngoài counter-strike.net"],
    submitting: ["Изпращане…", "正在提交…", "正在提交…", "Odesílání…", "Sender…", "Verzenden…", "Submitting…", "Lähetetään…", "Envoi…", "Wird gesendet…", "Υποβολή…", "Beküldés…", "Mengirim…", "Invio…", "送信中…", "제출 중…", "Sender…", "Wysyłanie…", "Enviando…", "Enviando…", "Se trimite…", "Отправляем…", "Enviando…", "Enviando…", "Skickar…", "กำลังส่ง…", "Gönderiliyor…", "Надсилання…", "Đang gửi…"],
    applyVerdict: ["Прилагане на присъда:", "应用判定：", "套用判定：", "Použít verdikt:", "Anvend afgørelse:", "Oordeel toepassen:", "Apply verdict:", "Käytä arviota:", "Appliquer le verdict :", "Bewertung anwenden:", "Εφαρμογή ετυμηγορίας:", "Ítélet alkalmazása:", "Terapkan vonis:", "Applica verdetto:", "判定を適用：", "판정 적용:", "Bruk vurdering:", "Zastosuj werdykt:", "Aplicar veredito:", "Aplicar veredito:", "Aplică verdictul:", "Применить вердикт:", "Aplicar veredicto:", "Aplicar veredicto:", "Tillämpa bedömning:", "ใช้คำตัดสิน:", "Kararı uygula:", "Застосувати вердикт:", "Áp dụng phán quyết:"],
    language: ["Език", "语言", "語言", "Jazyk", "Sprog", "Taal", "Language", "Kieli", "Langue", "Sprache", "Γλώσσα", "Nyelv", "Bahasa", "Lingua", "言語", "언어", "Språk", "Język", "Idioma", "Idioma", "Limbă", "Язык", "Idioma", "Idioma", "Språk", "ภาษา", "Dil", "Мова", "Ngôn ngữ"],
    automatic: ["Автоматично (език на браузъра)", "自动（浏览器语言）", "自動（瀏覽器語言）", "Automaticky (jazyk prohlížeče)", "Automatisk (browserens sprog)", "Automatisch (browsertaal)", "Automatic (browser language)", "Automaattinen (selaimen kieli)", "Automatique (langue du navigateur)", "Automatisch (Browsersprache)", "Αυτόματα (γλώσσα προγράμματος περιήγησης)", "Automatikus (böngésző nyelve)", "Otomatis (bahasa browser)", "Automatico (lingua del browser)", "自動（ブラウザーの言語）", "자동 (브라우저 언어)", "Automatisk (nettleserspråk)", "Automatycznie (język przeglądarki)", "Automático (idioma do navegador)", "Automático (idioma do navegador)", "Automat (limba browserului)", "Автоматически (язык браузера)", "Automático (idioma del navegador)", "Automático (idioma del navegador)", "Automatiskt (webbläsarspråk)", "อัตโนมัติ (ภาษาของเบราว์เซอร์)", "Otomatik (tarayıcı dili)", "Автоматично (мова браузера)", "Tự động (ngôn ngữ trình duyệt)"],
    clipLabel: ["Клип", "片段", "片段", "Klip", "Klip", "Clip", "Clip", "Leike", "Clip", "Clip", "Απόσπασμα", "Klip", "Klip", "Clip", "クリップ", "클립", "Klipp", "Klip", "Clipe", "Clipe", "Clip", "Клип", "Clip", "Clip", "Klipp", "คลิป", "Klip", "Кліп", "Đoạn"],
    gameLabel: ["Игра", "比赛", "比賽", "Hra", "Spil", "Game", "Game", "Peli", "Partie", "Spiel", "Παιχνίδι", "Játék", "Game", "Partita", "ゲーム", "게임", "Spill", "Gra", "Partida", "Partida", "Joc", "Игра", "Partida", "Partida", "Match", "เกม", "Oyun", "Гра", "Trận đấu"],
    first: ["за първи път", "首次", "首次", "poprvé", "første gang", "voor het eerst", "first time", "ensimmäistä kertaa", "première fois", "zum ersten Mal", "πρώτη φορά", "először", "pertama kali", "prima volta", "初回", "처음", "første gang", "po raz pierwszy", "pela primeira vez", "pela primeira vez", "prima dată", "впервые", "por primera vez", "por primera vez", "första gången", "ครั้งแรก", "ilk kez", "вперше", "lần đầu"],
    justNow: ["току-що", "刚刚", "剛剛", "právě teď", "lige nu", "zojuist", "just now", "juuri nyt", "à l’instant", "gerade eben", "μόλις τώρα", "éppen most", "baru saja", "proprio ora", "たった今", "방금", "akkurat nå", "przed chwilą", "agora mesmo", "agora mesmo", "chiar acum", "только что", "justo ahora", "justo ahora", "nyss", "เมื่อครู่นี้", "şimdi", "щойно", "vừa xong"],
    minAgo: ["преди мин.", "分钟前", "分鐘前", "min. zpět", "min. siden", "min. geleden", "min ago", "min sitten", "min auparavant", "Min. zuvor", "λεπτά πριν", "perce", "mnt lalu", "min fa", "分前", "분 전", "min siden", "min temu", "min atrás", "min atrás", "min în urmă", "мин. назад", "min atrás", "min atrás", "min sedan", "นาทีที่แล้ว", "dk önce", "хв тому", "phút trước"],
    hoursAgo: ["ч. назад", "小时前", "小時前", "hod. zpět", "t. siden", "uur geleden", "h ago", "t sitten", "h auparavant", "Std. zuvor", "ώρες πριν", "ó. ezelőtt", "jam lalu", "ore fa", "時間前", "시간 전", "t siden", "godz. temu", "h atrás", "h atrás", "ore în urmă", "ч. назад", "h atrás", "h atrás", "tim sedan", "ชั่วโมงที่แล้ว", "sa önce", "год тому", "giờ trước"],
    daysAgo: ["дни назад", "天前", "天前", "dny zpět", "dage siden", "dagen geleden", "days ago", "pv sitten", "j auparavant", "Tage zuvor", "ημέρες πριν", "napja", "hari lalu", "giorni fa", "日前", "일 전", "dager siden", "dni temu", "dias atrás", "dias atrás", "zile în urmă", "дн. назад", "días atrás", "días atrás", "dagar sedan", "วันที่แล้ว", "gün önce", "дн. тому", "ngày trước"],
    weeksAgo: ["седмици назад", "周前", "週前", "týdny zpět", "uger siden", "weken geleden", "weeks ago", "vk sitten", "sem auparavant", "Wochen zuvor", "εβδομάδες πριν", "hete", "minggu lalu", "settimane fa", "週間前", "주 전", "uker siden", "tyg. temu", "semanas atrás", "semanas atrás", "săptămâni în urmă", "нед. назад", "semanas atrás", "semanas atrás", "veckor sedan", "สัปดาห์ที่แล้ว", "hafta önce", "тиж. тому", "tuần trước"],
    clipOnly: ["Този клип", "此片段", "此片段", "Tento klip", "Dette klip", "Deze clip", "This clip", "Tämä leike", "Ce clip", "Dieser Clip", "Αυτό το απόσπασμα", "Ez a klip", "Klip ini", "Questa clip", "このクリップ", "이 클립", "Dette klippet", "Ten klip", "Este clipe", "Este clipe", "Acest clip", "Этот клип", "Este clip", "Este clip", "Det här klippet", "คลิปนี้", "Bu klip", "Цей кліп", "Đoạn này"],
    gameOnly: ["Тази игра", "此比赛", "此比賽", "Tato hra", "Dette spil", "Deze game", "This game", "Tämä peli", "Cette partie", "Dieses Spiel", "Αυτό το παιχνίδι", "Ez a játék", "Game ini", "Questa partita", "このゲーム", "이 게임", "Dette spillet", "Ta gra", "Esta partida", "Esta partida", "Acest joc", "Эта игра", "Esta partida", "Esta partida", "Det här spelet", "เกมนี้", "Bu oyun", "Ця гра", "Trận đấu này"],
    clipAndGame: ["Този клип и играта", "此片段和比赛", "此片段和比賽", "Tento klip a hra", "Dette klip og spil", "Deze clip en game", "This clip and game", "Tämä leike ja peli", "Ce clip et cette partie", "Dieser Clip und das Spiel", "Αυτό το απόσπασμα και το παιχνίδι", "Ez a klip és a játék", "Klip dan game ini", "Questa clip e partita", "このクリップとゲーム", "이 클립 및 게임", "Dette klippet og spillet", "Ten klip i gra", "Este clipe e partida", "Este clipe e partida", "Acest clip și joc", "Этот клип и игра", "Este clip y partida", "Este clip y partida", "Det här klippet och spelet", "คลิปนี้และเกม", "Bu klip ve oyun", "Цей кліп та гра", "Đoạn này và trận đấu"],
    localTitle: ["Историята се съхранява само в този браузър", "历史记录仅保存在此浏览器中", "歷史記錄僅儲存在此瀏覽器", "Historie se ukládá pouze v tomto prohlížeči", "Historikken gemmes kun i denne browser", "Geschiedenis wordt alleen in deze browser opgeslagen", "History is stored only in this browser", "Historia tallennetaan vain tähän selaimeen", "L’historique est stocké uniquement dans ce navigateur", "Der Verlauf wird nur in diesem Browser gespeichert", "Το ιστορικό αποθηκεύεται μόνο σε αυτό το πρόγραμμα περιήγησης", "Az előzményeket csak ez a böngésző tárolja", "Riwayat hanya disimpan di browser ini", "La cronologia è salvata solo in questo browser", "履歴はこのブラウザーにのみ保存されます", "기록은 이 브라우저에만 저장됩니다", "Historikken lagres bare i denne nettleseren", "Historia jest przechowywana tylko w tej przeglądarce", "O histórico é armazenado apenas neste navegador", "O histórico é armazenado apenas neste navegador", "Istoricul este stocat doar în acest browser", "История хранится только в этом браузере", "El historial solo se guarda en este navegador", "El historial solo se guarda en este navegador", "Historiken sparas bara i den här webbläsaren", "ประวัติจะถูกเก็บไว้ในเบราว์เซอร์นี้เท่านั้น", "Geçmiş yalnızca bu tarayıcıda saklanır", "Історія зберігається лише в цьому браузері", "Lịch sử chỉ được lưu trong trình duyệt này"],
    historyCount: ["проверки", "次审查", "次審查", "kontrol", "gennemgange", "beoordelingen", "reviews", "tarkistusta", "examens", "Prüfungen", "έλεγχοι", "ellenőrzés", "ulasan", "revisioni", "件の確認", "회 검토", "gjennomganger", "weryfikacji", "análises", "análises", "verificări", "проверок", "revisiones", "revisiones", "granskningar", "ครั้ง", "inceleme", "перевірок", "lần xem xét"],
    apply: ["Прилагане на присъда:", "应用判定：", "套用判定：", "Použít verdikt:", "Anvend afgørelse:", "Oordeel toepassen:", "Apply verdict:", "Käytä arviota:", "Appliquer le verdict :", "Bewertung anwenden:", "Εφαρμογή ετυμηγορίας:", "Ítélet alkalmazása:", "Terapkan vonis:", "Applica verdetto:", "判定を適用：", "판정 적용:", "Bruk vurdering:", "Zastosuj werdykt:", "Aplicar veredito:", "Aplicar veredito:", "Aplică verdictul:", "Применить вердикт:", "Aplicar veredicto:", "Aplicar veredicto:", "Tillämpa bedömning:", "ใช้คำตัดสิน:", "Kararı uygula:", "Застосувати вердикт:", "Áp dụng phán quyết:"],
    hotkeys: ["Клавишни комбинации", "快捷键", "快速鍵", "Klávesové zkratky", "Genveje", "Sneltoetsen", "Keyboard shortcuts", "Pikanäppäimet", "Raccourcis clavier", "Tastenkürzel", "Συντομεύσεις πληκτρολογίου", "Billentyűparancsok", "Pintasan keyboard", "Scorciatoie", "キーボードショートカット", "키보드 단축키", "Hurtigtaster", "Skróty klawiszowe", "Atalhos de teclado", "Atalhos de teclado", "Comenzi rapide", "Горячие клавиши", "Atajos de teclado", "Atajos de teclado", "Kortkommandon", "แป้นพิมพ์ลัด", "Klavye kısayolları", "Гарячі клавіші", "Phím tắt"],
    submitHint: ["изпращане", "提交", "提交", "odeslat", "send", "verzenden", "submit", "lähetä", "envoyer", "senden", "υποβολή", "beküldés", "kirim", "invio", "送信", "제출", "send", "wyślij", "enviar", "enviar", "trimite", "отправить", "enviar", "enviar", "skicka", "ส่ง", "gönder", "надіслати", "gửi"],
    presetsHint: ["пресети", "预设", "預設", "předvolby", "forvalg", "presets", "presets", "esiasetukset", "préréglages", "Voreinstellungen", "προεπιλογές", "presetek", "preset", "preimpostazioni", "プリセット", "프리셋", "forvalg", "presety", "predefinições", "predefinições", "presetări", "пресеты", "preajustes", "preajustes", "förinställningar", "ค่าที่ตั้งไว้", "ön ayarlar", "пресети", "cài đặt sẵn"],
    accelerateHint: ["ускоряване", "加速", "加速", "zrychlení", "hurtigere", "versnellen", "speed up", "nopeutus", "accélérer", "beschleunigen", "επιτάχυνση", "gyorsítás", "percepat", "accelera", "速度変更", "속도 증가", "hastighet", "przyspieszenie", "acelerar", "acelerar", "accelerare", "ускорение", "acelerar", "acelerar", "snabba upp", "เร่งความเร็ว", "hızlandır", "прискорення", "tăng tốc"],
    seconds: ["сек.", "秒", "秒", "s", "sek.", "sec.", "sec.", "s", "s", "Sek.", "δευτ.", "mp", "dtk", "sec", "秒", "초", "sek.", "s", "s", "s", "sec.", "сек.", "s", "s", "sek.", "วิ", "sn", "с", "giây"],
    framesHint: ["по кадри", "逐帧", "逐格", "po snímcích", "billede for billede", "per frame", "frame step", "ruutu kerrallaan", "image par image", "einzelbildweise", "ανά καρέ", "képkockánként", "per bingkai", "fotogramma per fotogramma", "コマ送り", "프레임 이동", "bilde for bilde", "klatka po klatce", "quadro a quadro", "quadro a quadro", "cadru cu cadru", "по кадрам", "fotograma a fotograma", "fotograma a fotograma", "bildruta för bildruta", "ทีละเฟรม", "kare kare", "покадрово", "từng khung hình"],
    pauseHint: ["пауза", "暂停", "暫停", "pozastavit", "pause", "pauze", "pause", "tauko", "pause", "Pause", "παύση", "szünet", "jeda", "pausa", "一時停止", "일시 정지", "pause", "pauza", "pausar", "pausar", "pauză", "пауза", "pausa", "pausa", "pausa", "หยุดชั่วคราว", "duraklat", "пауза", "tạm dừng"],
    fullscreenHint: ["цял екран", "全屏", "全螢幕", "celá obrazovka", "fuld skærm", "volledig scherm", "fullscreen", "koko näyttö", "plein écran", "Vollbild", "πλήρης οθόνη", "teljes képernyő", "layar penuh", "schermo intero", "全画面", "전체 화면", "fullskjerm", "pełny ekran", "tela cheia", "tela cheia", "ecran complet", "весь экран", "pantalla completa", "pantalla completa", "helskärm", "เต็มหน้าจอ", "tam ekran", "повний екран", "toàn màn hình"],
    muteHint: ["звук", "静音", "靜音", "ztlumit zvuk", "slå lyden fra/til", "geluid dempen", "mute", "mykistys", "couper le son", "Stummschaltung", "σίγαση", "némítás", "bis dem", "disattiva audio", "ミュート", "음소거", "demp lyd", "wycisz dźwięk", "silenciar", "silenciar", "dezactivează sunetul", "звук", "silenciar", "silenciar", "ljud av/på", "ปิดเสียง", "sesi kapat", "вимкнути звук", "tắt tiếng"],
    of: ["от", "/", "/", "z", "af", "van", "of", "/", "sur", "von", "από", "/", "dari", "di", "/", "/", "av", "/", "de", "de", "din", "из", "de", "de", "av", "/", "/", "з", "/"],
    enterHint: ["Горещ клавиш: Enter", "快捷键：Enter", "快速鍵：Enter", "Klávesa Enter", "Genvejstast Enter", "Sneltoets Enter", "Keyboard shortcut: Enter", "Pikanäppäin Enter", "Raccourci : Entrée", "Tastenkürzel: Enter", "Συντόμευση: Enter", "Enter billentyűparancs", "Pintasan: Enter", "Scorciatoia: Invio", "ショートカット：Enter", "단축키: Enter", "Hurtigtast: Enter", "Skrót: Enter", "Atalho: Enter", "Atalho: Enter", "Scurtătură: Enter", "Горячая клавиша Enter", "Atajo: Enter", "Atajo: Enter", "Kortkommando: Enter", "ปุ่มลัด: Enter", "Kısayol: Enter", "Гаряча клавіша Enter", "Phím tắt: Enter"],
    segmentPosition: ["Позиция в сегмента", "片段位置", "片段位置", "Pozice v segmentu", "Segmentposition", "Segmentpositie", "Segment position", "Segmentin kohta", "Position dans le segment", "Segmentposition", "Θέση αποσπάσματος", "Szegmens pozíciója", "Posisi segmen", "Posizione segmento", "セグメント位置", "구간 위치", "Segmentposisjon", "Pozycja segmentu", "Posição no segmento", "Posição no segmento", "Poziția segmentului", "Позиция сегмента", "Posición del segmento", "Posición del segmento", "Segmentposition", "ตำแหน่งช่วง", "Bölüm konumu", "Позиція сегмента", "Vị trí phân đoạn"],
    previousVerdicts: ["Предишни присъди", "之前的判定", "先前的判定", "Předchozí verdikty", "Tidligere afgørelser", "Eerdere oordelen", "Previous verdicts", "Aiemmat arviot", "Verdicts précédents", "Vorherige Bewertungen", "Προηγούμενες ετυμηγορίες", "Korábbi ítéletek", "Vonis sebelumnya", "Verdetti precedenti", "以前の判定", "이전 판정", "Tidligere vurderinger", "Poprzednie werdykty", "Vereditos anteriores", "Vereditos anteriores", "Verdicte anterioare", "Предыдущие вердикты", "Veredictos anteriores", "Veredictos anteriores", "Tidigare bedömningar", "คำตัดสินก่อนหน้า", "Önceki kararlar", "Попередні вердикти", "Phán quyết trước đây"],
    languageAria: ["Избор на език", "选择语言", "選取語言", "Výběr jazyka", "Vælg sprog", "Taal kiezen", "Choose language", "Valitse kieli", "Choisir la langue", "Sprache auswählen", "Επιλογή γλώσσας", "Nyelv kiválasztása", "Pilih bahasa", "Seleziona lingua", "言語を選択", "언어 선택", "Velg språk", "Wybierz język", "Escolher idioma", "Escolher idioma", "Alegeți limba", "Выбрать язык", "Elegir idioma", "Elegir idioma", "Välj språk", "เลือกภาษา", "Dil seçin", "Вибрати мову", "Chọn ngôn ngữ"],
    queueEmptyTitle: ["Няма налични клипове", "当前没有可用片段", "目前沒有可用片段", "Momentálně nejsou k dispozici žádné klipy", "Der er ingen klip tilgængelige lige nu", "Er zijn momenteel geen clips beschikbaar", "No clips are available right now", "Leikkeitä ei ole juuri nyt saatavilla", "Aucun clip n’est disponible pour le moment", "Zurzeit sind keine Clips verfügbar", "Δεν υπάρχουν διαθέσιμα αποσπάσματα αυτήν τη στιγμή", "Jelenleg nem érhetők el klipek", "Tidak ada klip yang tersedia saat ini", "Al momento non ci sono clip disponibili", "現在、利用可能なクリップはありません", "현재 사용할 수 있는 클립이 없습니다", "Ingen klipp er tilgjengelige akkurat nå", "Obecnie nie ma dostępnych klipów", "Não há clipes disponíveis no momento", "Não há clipes disponíveis no momento", "Momentan nu sunt clipuri disponibile", "Сейчас нет доступных клипов", "Ahora mismo no hay clips disponibles", "Ahora mismo no hay clips disponibles", "Det finns inga klipp tillgängliga just nu", "ขณะนี้ไม่มีคลิปที่พร้อมให้ตรวจสอบ", "Şu anda kullanılabilir klip yok", "Зараз немає доступних кліпів", "Hiện không có clip nào"],
    queueEmptyMeaning: ["Порталът в момента не може да предостави клип за проверка. Това съобщение само по себе си не показва дали има проблем с изпращането на присъдата.", "门户当前无法提供可供审核的片段。仅凭此消息无法判断判定提交是否出现问题。", "入口網站目前無法提供可供審查的片段。單憑此訊息無法判斷判定是否提交失敗。", "Portál momentálně nemůže nabídnout klip ke kontrole. Tato zpráva sama o sobě neříká, zda se verdikt nepodařilo odeslat.", "Portalen kan ikke tilbyde et klip til gennemgang lige nu. Beskeden betyder ikke i sig selv, at din vurdering ikke blev sendt.", "De portal kan momenteel geen clip aanbieden om te beoordelen. Deze melding betekent op zichzelf niet dat je beoordeling niet is verzonden.", "The portal cannot provide a clip to review right now. This message alone does not mean your verdict failed to submit.", "Portaali ei voi juuri nyt tarjota tarkistettavaa klippiä. Tämä viesti ei yksin tarkoita, että arviosi lähettäminen epäonnistui.", "Le portail ne peut pas proposer de clip à examiner pour le moment. Ce message ne signifie pas à lui seul que votre verdict n’a pas été envoyé.", "Das Portal kann gerade keinen Clip zur Prüfung bereitstellen. Diese Meldung allein bedeutet nicht, dass dein Urteil nicht übermittelt wurde.", "Η πύλη δεν μπορεί να προσφέρει απόσπασμα για αξιολόγηση αυτήν τη στιγμή. Αυτό το μήνυμα από μόνο του δεν σημαίνει ότι η υποβολή της κρίσης σου απέτυχε.", "A portál jelenleg nem tud ellenőrizhető klipet biztosítani. Ez az üzenet önmagában nem jelenti azt, hogy az ítélet beküldése sikertelen volt.", "Portal saat ini tidak dapat menyediakan klip untuk ditinjau. Pesan ini saja tidak berarti vonis Anda gagal dikirim.", "Al momento il portale non può fornire clip da esaminare. Questo messaggio, da solo, non significa che il verdetto non sia stato inviato.", "ポータルで現在、確認できるクリップを用意できません。このメッセージだけでは、判定の送信に失敗したとは限りません。", "현재 포털에서 검토할 클립을 제공할 수 없습니다. 이 메시지만으로 판정 제출이 실패했다고 볼 수는 없습니다.", "Portalen kan ikke tilby et klipp for gjennomgang akkurat nå. Denne meldingen betyr ikke i seg selv at vurderingen din ikke ble sendt inn.", "Portal nie może teraz udostępnić klipu do oceny. Sam komunikat nie oznacza, że werdykt nie został wysłany.", "O portal não pode fornecer um clipe para análise neste momento. Esta mensagem, por si só, não significa que o veredito não foi enviado.", "O portal não pode fornecer um clipe para análise neste momento. Esta mensagem, por si só, não significa que o veredito não foi enviado.", "Portalul nu poate oferi momentan un clip pentru analiză. Acest mesaj, în sine, nu înseamnă că verdictul nu a fost trimis.", "Портал сейчас не может предоставить клип для проверки. Само по себе это сообщение не означает, что вердикт не отправился.", "El portal no puede ofrecer un clip para revisar en este momento. Este mensaje por sí solo no significa que el veredicto no se haya enviado.", "El portal no puede ofrecer un clip para revisar en este momento. Este mensaje por sí solo no significa que el veredicto no se haya enviado.", "Portalen kan inte tillhandahålla ett klipp att granska just nu. Meddelandet betyder inte i sig att din bedömning misslyckades med att skickas.", "ขณะนี้พอร์ทัลไม่สามารถแสดงคลิปให้ตรวจสอบได้ ข้อความนี้เพียงอย่างเดียวไม่ได้หมายความว่าส่งคำตัดสินไม่สำเร็จ", "Portal şu anda incelenecek bir klip sağlayamıyor. Bu mesaj tek başına kararınızın gönderilemediği anlamına gelmez.", "Портал наразі не може надати кліп для перевірки. Саме це повідомлення не означає, що вердикт не надіслано.", "Cổng hiện không thể cung cấp clip để xem xét. Riêng thông báo này không có nghĩa là phán quyết của bạn chưa được gửi."],
    queueEmptyLimit: ["Ако сте прегледали около 250 клипа през последните 24 часа, може да сте достигнали наблюдавания дневен лимит за акаунта. Ограничението се задава от VACNet, а DemoScope не може да го променя или премахва.", "如果你在过去 24 小时内已审核约 250 个片段，可能已达到该账号观察到的每日上限。此限制由 VACNet 设定，DemoScope 无法更改或绕过。", "如果你在過去 24 小時內已審查約 250 個片段，可能已達到該帳號觀察到的每日上限。此限制由 VACNet 設定，DemoScope 無法更改或繞過。", "Pokud jste za posledních 24 hodin zkontrolovali přibližně 250 klipů, možná jste dosáhli pozorovaného denního limitu účtu. Limit nastavuje VACNet a DemoScope jej nemůže změnit ani obejít.", "Hvis du har gennemgået omkring 250 klip inden for de seneste 24 timer, kan du have nået den observerede daglige grænse for kontoen. VACNet fastsætter grænsen, og DemoScope kan ikke ændre eller omgå den.", "Als je in de afgelopen 24 uur ongeveer 250 clips hebt beoordeeld, heb je mogelijk de waargenomen dagelijkse limiet voor dit account bereikt. VACNet bepaalt deze limiet; DemoScope kan die niet wijzigen of omzeilen.", "If you reviewed around 250 clips in the last 24 hours, you may have reached the observed daily limit for this account. VACNet sets that limit; DemoScope cannot change or bypass it.", "Jos olet tarkistanut noin 250 klippiä viimeisen 24 tunnin aikana, olet saattanut saavuttaa tilillä havaitun päiväkohtaisen rajan. VACNet määrittää rajan, eikä DemoScope voi muuttaa tai kiertää sitä.", "Si vous avez examiné environ 250 clips au cours des dernières 24 heures, vous avez peut-être atteint la limite quotidienne observée pour ce compte. VACNet fixe cette limite ; DemoScope ne peut ni la modifier ni la contourner.", "Wenn du in den letzten 24 Stunden etwa 250 Clips geprüft hast, hast du möglicherweise das beobachtete Tageslimit dieses Kontos erreicht. VACNet legt das Limit fest; DemoScope kann es weder ändern noch umgehen.", "Αν εξετάσατε περίπου 250 αποσπάσματα τις τελευταίες 24 ώρες, ενδέχεται να φτάσατε το ημερήσιο όριο που έχει παρατηρηθεί για αυτόν τον λογαριασμό. Το όριο ορίζεται από το VACNet και το DemoScope δεν μπορεί να το αλλάξει ή να το παρακάμψει.", "Ha az elmúlt 24 órában körülbelül 250 klipet ellenőriztél, elérhetted a fióknál megfigyelt napi korlátot. A korlátot a VACNet állítja be; a DemoScope nem tudja módosítani vagy megkerülni.", "Jika Anda meninjau sekitar 250 klip dalam 24 jam terakhir, Anda mungkin telah mencapai batas harian akun yang teramati. Batas ditetapkan oleh VACNet; DemoScope tidak dapat mengubah atau melewatinya.", "Se hai esaminato circa 250 clip nelle ultime 24 ore, potresti aver raggiunto il limite giornaliero osservato per questo account. Il limite è stabilito da VACNet e DemoScope non può modificarlo né aggirarlo.", "過去24時間に約250本のクリップを確認した場合、このアカウントで確認されている1日の上限に達した可能性があります。上限はVACNetが設定しており、DemoScopeで変更したり回避したりすることはできません。", "지난 24시간 동안 클립을 약 250개 검토했다면 이 계정에서 관찰된 일일 한도에 도달했을 수 있습니다. 한도는 VACNet이 정하며 DemoScope에서 변경하거나 우회할 수 없습니다.", "Hvis du har gjennomgått rundt 250 klipp de siste 24 timene, kan du ha nådd den observerte daglige grensen for kontoen. VACNet fastsetter grensen; DemoScope kan ikke endre eller omgå den.", "Jeśli w ciągu ostatnich 24 godzin oceniono około 250 klipów, możliwe, że konto osiągnęło zaobserwowany dzienny limit. Ustala go VACNet; DemoScope nie może go zmienić ani ominąć.", "Se você analisou cerca de 250 clipes nas últimas 24 horas, talvez tenha atingido o limite diário observado para esta conta. O limite é definido pelo VACNet; o DemoScope não pode alterá-lo nem contorná-lo.", "Se você analisou cerca de 250 clipes nas últimas 24 horas, talvez tenha atingido o limite diário observado para esta conta. O limite é definido pelo VACNet; o DemoScope não pode alterá-lo nem contorná-lo.", "Dacă ai analizat aproximativ 250 de clipuri în ultimele 24 de ore, este posibil să fi atins limita zilnică observată pentru acest cont. VACNet stabilește limita; DemoScope nu o poate modifica sau ocoli.", "Если за последние 24 часа вы проверили около 250 клипов, возможно, достигнут наблюдавшийся дневной лимит аккаунта. Ограничение задаёт VACNet; DemoScope не может его изменить или обойти.", "Si has revisado unos 250 clips en las últimas 24 horas, quizá hayas alcanzado el límite diario observado para esta cuenta. VACNet establece ese límite; DemoScope no puede cambiarlo ni eludirlo.", "Si has revisado unos 250 clips en las últimas 24 horas, quizá hayas alcanzado el límite diario observado para esta cuenta. VACNet establece ese límite; DemoScope no puede cambiarlo ni eludirlo.", "Om du har granskat omkring 250 klipp under de senaste 24 timmarna kan du ha nått den observerade dagliga gränsen för kontot. VACNet bestämmer gränsen; DemoScope kan inte ändra eller kringgå den.", "หากคุณตรวจสอบคลิปราว 250 คลิปในช่วง 24 ชั่วโมงที่ผ่านมา อาจถึงขีดจำกัดรายวันที่พบในบัญชีนี้แล้ว VACNet เป็นผู้กำหนดขีดจำกัด และ DemoScope ไม่สามารถเปลี่ยนหรือหลีกเลี่ยงได้", "Son 24 saat içinde yaklaşık 250 klip incelediyseniz bu hesap için gözlemlenen günlük sınıra ulaşmış olabilirsiniz. Sınırı VACNet belirler; DemoScope bunu değiştiremez veya aşamaz.", "Якщо за останні 24 години ви перевірили близько 250 кліпів, можливо, досягнуто поміченого денного ліміту акаунта. Обмеження встановлює VACNet; DemoScope не може змінити чи обійти його.", "Nếu bạn đã xem xét khoảng 250 clip trong 24 giờ qua, có thể bạn đã đạt giới hạn hằng ngày quan sát được của tài khoản. VACNet đặt giới hạn này; DemoScope không thể thay đổi hay vượt qua."],
    queueEmptyNext: ["Какво да направите: изчакайте дневният лимит да се обнови и опитайте отново по-късно. Ако сте прегледали значително по-малко клипове, опитайте отново след известно време — опашката може временно да е празна.", "建议操作：等待每日限额重置后再试。如果审核数量明显少于此数，请过一段时间再查看，队列可能暂时为空。", "建議操作：等待每日上限重設後再試。如果審查數量明顯少於此數，請稍後再查看，佇列可能暫時為空。", "Co dělat: počkejte na obnovení denního limitu a zkuste to později. Pokud jste zkontrolovali výrazně méně klipů, zkuste to znovu za nějakou dobu — fronta může být dočasně prázdná.", "Hvad skal du gøre: Vent på, at den daglige grænse nulstilles, og prøv igen senere. Hvis du har gennemgået væsentligt færre klip, så prøv igen senere — køen kan være midlertidigt tom.", "Wat kun je doen: wacht tot de dagelijkse limiet wordt vernieuwd en probeer het later opnieuw. Heb je duidelijk minder clips beoordeeld, kijk dan later nog eens — de wachtrij kan tijdelijk leeg zijn.", "What to do: wait for the daily limit to reset, then try again later. If you reviewed far fewer clips, check back after a while—the queue may be temporarily empty.", "Toimi näin: odota päiväkohtaisen rajan nollautumista ja yritä myöhemmin uudelleen. Jos tarkistit selvästi vähemmän klippejä, kokeile hetken kuluttua uudelleen — jono voi olla tilapäisesti tyhjä.", "Que faire : attendez le renouvellement de la limite quotidienne, puis réessayez plus tard. Si vous avez examiné nettement moins de clips, revenez dans quelque temps : la file d’attente est peut-être temporairement vide.", "Was du tun kannst: Warte, bis das Tageslimit zurückgesetzt wird, und versuche es später erneut. Wenn du deutlich weniger Clips geprüft hast, schau später noch einmal vorbei – die Warteschlange ist möglicherweise vorübergehend leer.", "Τι να κάνετε: περιμένετε να ανανεωθεί το ημερήσιο όριο και δοκιμάστε ξανά αργότερα. Αν εξετάσατε πολύ λιγότερα αποσπάσματα, ελέγξτε ξανά σε λίγο — η ουρά μπορεί να είναι προσωρινά άδεια.", "Teendő: várd meg a napi korlát megújulását, majd próbáld újra később. Ha jóval kevesebb klipet ellenőriztél, nézz vissza később — a várólista átmenetileg üres lehet.", "Yang dapat dilakukan: tunggu hingga batas harian diperbarui, lalu coba lagi nanti. Jika jumlah klip yang Anda tinjau jauh lebih sedikit, periksa kembali nanti—antrean mungkin kosong sementara.", "Cosa fare: attendi il ripristino del limite giornaliero e riprova più tardi. Se hai esaminato molti meno clip, ricontrolla tra un po’: la coda potrebbe essere temporaneamente vuota.", "対応方法：1日の上限がリセットされるまで待ってから、もう一度お試しください。確認したクリップ数が大幅に少ない場合は、しばらくしてから再確認してください。キューが一時的に空になっている可能性があります。", "해결 방법: 일일 한도가 초기화될 때까지 기다린 후 나중에 다시 시도하세요. 검토한 클립 수가 훨씬 적다면 잠시 후 다시 확인해 보세요. 대기열이 일시적으로 비어 있을 수 있습니다.", "Hva gjør du: Vent til den daglige grensen nullstilles, og prøv igjen senere. Hvis du har gjennomgått betydelig færre klipp, kan du sjekke igjen om en stund — køen kan være midlertidig tom.", "Co zrobić: poczekaj na odnowienie dziennego limitu i spróbuj ponownie później. Jeśli oceniono znacznie mniej klipów, sprawdź ponownie za jakiś czas — kolejka może być chwilowo pusta.", "O que fazer: aguarde a renovação do limite diário e tente novamente mais tarde. Se você analisou bem menos clipes, volte a verificar daqui a pouco — a fila pode estar temporariamente vazia.", "O que fazer: aguarde a renovação do limite diário e tente novamente mais tarde. Se você analisou bem menos clipes, volte a verificar daqui a pouco — a fila pode estar temporariamente vazia.", "Ce poți face: așteaptă reînnoirea limitei zilnice și încearcă din nou mai târziu. Dacă ai analizat mult mai puține clipuri, verifică din nou peste puțin timp — coada poate fi temporar goală.", "Что делать: дождитесь обновления дневного лимита и попробуйте позже. Если проверено заметно меньше клипов, зайдите снова через некоторое время — очередь может быть временно пуста.", "Qué hacer: espera a que se restablezca el límite diario y vuelve a intentarlo más tarde. Si revisaste bastantes menos clips, vuelve a comprobarlo dentro de un rato; la cola podría estar vacía temporalmente.", "Qué hacer: espera a que se restablezca el límite diario y vuelve a intentarlo más tarde. Si revisaste bastantes menos clips, vuelve a comprobarlo dentro de un rato; la cola podría estar vacía temporalmente.", "Gör så här: vänta tills den dagliga gränsen återställs och försök igen senare. Om du har granskat betydligt färre klipp kan du titta igen om en stund — kön kan vara tillfälligt tom.", "สิ่งที่ควรทำ: รอให้ขีดจำกัดรายวันรีเซ็ต แล้วลองอีกครั้งภายหลัง หากตรวจสอบคลิปน้อยกว่านั้นมาก ให้กลับมาตรวจสอบอีกครั้งในภายหลัง เพราะคิวอาจว่างชั่วคราว", "Ne yapmalı: günlük sınırın sıfırlanmasını bekleyip daha sonra tekrar deneyin. Çok daha az klip incelediyseniz bir süre sonra yeniden kontrol edin; sıra geçici olarak boş olabilir.", "Що робити: дочекайтеся оновлення денного ліміту й спробуйте пізніше. Якщо перевірено значно менше кліпів, зайдіть знову через деякий час — черга може бути тимчасово порожньою.", "Cách xử lý: hãy đợi giới hạn hằng ngày được đặt lại rồi thử lại sau. Nếu bạn đã xem xét ít clip hơn nhiều, hãy kiểm tra lại sau một lúc — hàng đợi có thể tạm thời trống."],
    queueLanguageLabel: ["Език на обяснението", "说明语言", "說明語言", "Jazyk vysvětlení", "Sprog til forklaring", "Taal van uitleg", "Explanation language", "Selityksen kieli", "Langue de l’explication", "Sprache der Erklärung", "Γλώσσα επεξήγησης", "A magyarázat nyelve", "Bahasa penjelasan", "Lingua della spiegazione", "説明の言語", "안내 언어", "Språk for forklaringen", "Język objaśnienia", "Idioma da explicação", "Idioma da explicação", "Limba explicației", "Язык объяснения", "Idioma de la explicación", "Idioma de la explicación", "Språk för förklaringen", "ภาษาคำอธิบาย", "Açıklama dili", "Мова пояснення", "Ngôn ngữ giải thích"],
    queueFirstSeen: ["Открито за първи път", "首次发现", "首次發現", "Poprvé zaznamenáno", "Først registreret", "Eerste waarneming", "First noticed", "Havaittu ensimmäisen kerran", "Détecté pour la première fois", "Erstmals bemerkt", "Πρώτη εντοπισμός", "Első észlelés", "Pertama kali terdeteksi", "Rilevato per la prima volta", "初回検出", "처음 감지됨", "Først oppdaget", "Wykryto po raz pierwszy", "Detetado pela primeira vez", "Detectado pela primeira vez", "Detectat prima dată", "Впервые замечено", "Detectado por primera vez", "Detectado por primera vez", "Upptäcktes första gången", "ตรวจพบครั้งแรก", "İlk fark edilme", "Вперше помічено", "Phát hiện lần đầu"],
    footerCopyright: ["Counter-Strike, Counter-Strike 2, CS:GO и съответните им лога са търговски марки или регистрирани търговски марки на Valve Corporation. © 2023 Valve Corporation. Всички права запазени.", "Counter-Strike、Counter-Strike 2、CS:GO 及其各自标识均为 Valve Corporation 的商标或注册商标。© 2023 Valve Corporation。保留所有权利。", "Counter-Strike、Counter-Strike 2、CS:GO 及其各自標誌均為 Valve Corporation 的商標或註冊商標。© 2023 Valve Corporation。保留所有權利。", "Counter-Strike, Counter-Strike 2, CS:GO a jejich loga jsou ochranné známky nebo registrované ochranné známky společnosti Valve Corporation. © 2023 Valve Corporation. Všechna práva vyhrazena.", "Counter-Strike, Counter-Strike 2, CS:GO og deres respektive logoer er varemærker eller registrerede varemærker tilhørende Valve Corporation. © 2023 Valve Corporation. Alle rettigheder forbeholdes.", "Counter-Strike, Counter-Strike 2, CS:GO en de bijbehorende logo's zijn handelsmerken of gedeponeerde handelsmerken van Valve Corporation. © 2023 Valve Corporation. Alle rechten voorbehouden.", "Counter-Strike, Counter-Strike 2, CS:GO, and their respective logos are trademarks and/or registered trademarks of Valve Corporation. © 2023 Valve Corporation, all rights reserved.", "Counter-Strike, Counter-Strike 2, CS:GO ja niiden logot ovat Valve Corporationin tavaramerkkejä tai rekisteröityjä tavaramerkkejä. © 2023 Valve Corporation. Kaikki oikeudet pidätetään.", "Counter-Strike, Counter-Strike 2, CS:GO et leurs logos respectifs sont des marques commerciales ou des marques déposées de Valve Corporation. © 2023 Valve Corporation. Tous droits réservés.", "Counter-Strike, Counter-Strike 2, CS:GO und die jeweiligen Logos sind Marken und/oder eingetragene Marken der Valve Corporation. © 2023 Valve Corporation. Alle Rechte vorbehalten.", "Τα Counter-Strike, Counter-Strike 2, CS:GO και τα αντίστοιχα λογότυπά τους είναι εμπορικά σήματα ή σήματα κατατεθέντα της Valve Corporation. © 2023 Valve Corporation. Με επιφύλαξη παντός δικαιώματος.", "A Counter-Strike, a Counter-Strike 2, a CS:GO és a hozzájuk tartozó logók a Valve Corporation védjegyei vagy bejegyzett védjegyei. © 2023 Valve Corporation. Minden jog fenntartva.", "Counter-Strike, Counter-Strike 2, CS:GO, dan logo masing-masing adalah merek dagang atau merek dagang terdaftar milik Valve Corporation. © 2023 Valve Corporation. Hak cipta dilindungi.", "Counter-Strike, Counter-Strike 2, CS:GO e i rispettivi loghi sono marchi o marchi registrati di Valve Corporation. © 2023 Valve Corporation. Tutti i diritti riservati.", "Counter-Strike、Counter-Strike 2、CS:GOおよび各ロゴは、Valve Corporationの商標または登録商標です。© 2023 Valve Corporation. All rights reserved.", "Counter-Strike, Counter-Strike 2, CS:GO 및 각 로고는 Valve Corporation의 상표 또는 등록 상표입니다. © 2023 Valve Corporation. 모든 권리 보유.", "Counter-Strike, Counter-Strike 2, CS:GO og de tilhørende logoene er varemerker eller registrerte varemerker som tilhører Valve Corporation. © 2023 Valve Corporation. Alle rettigheter forbeholdes.", "Counter-Strike, Counter-Strike 2, CS:GO i ich odpowiednie logotypy są znakami towarowymi lub zastrzeżonymi znakami towarowymi Valve Corporation. © 2023 Valve Corporation. Wszelkie prawa zastrzeżone.", "Counter-Strike, Counter-Strike 2, CS:GO e os respetivos logótipos são marcas comerciais ou marcas registadas da Valve Corporation. © 2023 Valve Corporation. Todos os direitos reservados.", "Counter-Strike, Counter-Strike 2, CS:GO e seus respectivos logotipos são marcas comerciais ou marcas registradas da Valve Corporation. © 2023 Valve Corporation. Todos os direitos reservados.", "Counter-Strike, Counter-Strike 2, CS:GO și siglele aferente sunt mărci comerciale sau mărci înregistrate ale Valve Corporation. © 2023 Valve Corporation. Toate drepturile rezervate.", "Counter-Strike, Counter-Strike 2, CS:GO и соответствующие логотипы являются товарными знаками и/или зарегистрированными товарными знаками Valve Corporation. © 2023 Valve Corporation. Все права защищены.", "Counter-Strike, Counter-Strike 2, CS:GO y sus respectivos logotipos son marcas comerciales o marcas registradas de Valve Corporation. © 2023 Valve Corporation. Todos los derechos reservados.", "Counter-Strike, Counter-Strike 2, CS:GO y sus respectivos logotipos son marcas comerciales o marcas registradas de Valve Corporation. © 2023 Valve Corporation. Todos los derechos reservados.", "Counter-Strike, Counter-Strike 2, CS:GO och deras respektive logotyper är varumärken eller registrerade varumärken som tillhör Valve Corporation. © 2023 Valve Corporation. Alla rättigheter förbehållna.", "Counter-Strike, Counter-Strike 2, CS:GO และโลโก้เป็นเครื่องหมายการค้าหรือเครื่องหมายการค้าจดทะเบียนของ Valve Corporation © 2023 Valve Corporation สงวนลิขสิทธิ์ทั้งหมด", "Counter-Strike, Counter-Strike 2, CS:GO ve ilgili logoları Valve Corporation'ın ticari markaları veya tescilli ticari markalarıdır. © 2023 Valve Corporation. Tüm hakları saklıdır.", "Counter-Strike, Counter-Strike 2, CS:GO та відповідні логотипи є торговельними марками та/або зареєстрованими торговельними марками Valve Corporation. © 2023 Valve Corporation. Усі права захищено.", "Counter-Strike, Counter-Strike 2, CS:GO và các biểu trưng tương ứng là nhãn hiệu hoặc nhãn hiệu đã đăng ký của Valve Corporation. © 2023 Valve Corporation. Bảo lưu mọi quyền."],
    footerFeedback: ["Изпрати отзив", "发送反馈", "傳送意見", "Odeslat zpětnou vazbu", "Send feedback", "Feedback versturen", "Send Feedback", "Lähetä palautetta", "Envoyer un commentaire", "Feedback senden", "Αποστολή σχολίων", "Visszajelzés küldése", "Kirim masukan", "Invia feedback", "フィードバックを送信", "의견 보내기", "Send tilbakemelding", "Wyślij opinię", "Enviar feedback", "Enviar feedback", "Trimite feedback", "Отправить отзыв", "Enviar comentarios", "Enviar comentarios", "Skicka feedback", "ส่งความคิดเห็น", "Geri bildirim gönder", "Надіслати відгук", "Gửi phản hồi"],
    footerReport: ["Съобщи за проблем с клипа", "举报片段问题", "回報片段問題", "Nahlásit problém s klipem", "Rapportér et problem med klippet", "Probleem met clip melden", "Report Bad Clip", "Ilmoita ongelmallisesta klipistä", "Signaler un problème avec le clip", "Problem mit Clip melden", "Αναφορά προβλήματος αποσπάσματος", "Probléma jelentése a klippel kapcsolatban", "Laporkan masalah klip", "Segnala un problema con la clip", "クリップの問題を報告", "클립 문제 신고", "Rapporter et problem med klippet", "Zgłoś problem z klipem", "Denunciar problema no clipe", "Denunciar problema no clipe", "Raportează o problemă cu clipul", "Сообщить о проблеме с роликом", "Informar de un problema con el clip", "Informar de un problema con el clip", "Rapportera problem med klippet", "รายงานปัญหาของคลิป", "Klip sorununu bildir", "Повідомити про проблему з кліпом", "Báo cáo vấn đề về clip"],
    queueTimeFormat: ["Формат времени", "时间格式", "時間格式", "Formát času", "Tidsformat", "Tijdnotatie", "Time format", "Ajan muoto", "Format de l’heure", "Zeitformat", "Μορφή ώρας", "Időformátum", "Format waktu", "Formato orario", "時刻形式", "시간 형식", "Tidsformat", "Format czasu", "Formato da hora", "Formato da hora", "Formatul orei", "Формат времени", "Formato de hora", "Formato de hora", "Tidsformat", "รูปแบบเวลา", "Saat biçimi", "Формат часу", "Định dạng giờ"],
    helpAim: ["Използва ли субектът чийтове, които откриват огън веднага щом противник попадне в прицела или мигновено насочват мерника към противниците?", "该对象是否使用了在敌人进入准星时自动开火、或瞬间锁定对手的作弊功能？", "該對象是否使用了在敵人進入準星時自動開火、或瞬間鎖定對手的作弊功能？", "Používá subjekt cheaty, které střílejí, jakmile se nepřítel ocitne v zaměřovači, nebo okamžitě zaměřují protivníky?", "Bruger spilleren snydeprogrammer, der skyder, så snart en fjende kommer ind i sigtekornet, eller som øjeblikkeligt låser sig fast på modstandere?", "Gebruikt de speler cheats die schieten zodra een vijand in het vizier komt, of die direct op tegenstanders richten?", "Is the subject using cheats that fire as soon as an enemy enters the crosshair, or snap onto opponents instantly?", "Käyttääkö kohde huijauksia, jotka laukaisevat aseen heti kun vihollinen osuu tähtäimeen tai tähtäävät vastustajiin välittömästi?", "Le sujet utilise-t-il des cheats qui tirent dès qu’un ennemi entre dans le viseur ou qui verrouillent instantanément la visée sur les adversaires ?", "Verwendet die Person Cheats, die feuern, sobald ein Gegner im Fadenkreuz erscheint, oder die sich sofort auf Gegner ausrichten?", "Χρησιμοποιεί το υποκείμενο cheats που πυροβολούν μόλις ένας εχθρός μπει στο στόχαστρο ή που στοχεύουν ακαριαία τους αντιπάλους;", "Használ-e a vizsgált játékos olyan csalást, amely tüzel, amint egy ellenfél a célkeresztbe kerül, vagy azonnal ráfordul az ellenfelekre?", "Apakah subjek menggunakan cheat yang menembak begitu musuh masuk ke crosshair, atau langsung membidik lawan secara instan?", "Il soggetto usa cheat che sparano non appena un nemico entra nel mirino o che si agganciano istantaneamente agli avversari?", "対象は、敵が照準に入った瞬間に発砲したり、敵に瞬時にエイムを合わせたりするチートを使っていますか？", "대상이 적이 조준선에 들어오는 즉시 발사하거나 적에게 즉시 조준을 고정하는 치트를 사용하고 있습니까?", "Bruker spilleren juksekoder som skyter så snart en fiende kommer i siktet, eller som umiddelbart låser seg på motstandere?", "Czy badany gracz używa cheatów, które strzelają, gdy tylko wróg znajdzie się w celowniku, albo natychmiast naprowadzają celownik na przeciwników?", "O sujeito usa cheats que disparam assim que um inimigo entra na mira ou que apontam instantaneamente aos adversários?", "O jogador usa cheats que disparam assim que um inimigo entra na mira ou que miram instantaneamente nos adversários?", "Folosește subiectul cheaturi care trag imediat ce un inamic intră în țintă sau care țintesc instantaneu adversarii?", "Использует ли субъект читы, позволяющие открывать огонь, как только враг попадёт в прицел, или мгновенно наводиться на противников?", "¿El sujeto usa trampas que disparan en cuanto un enemigo entra en la mira o que apuntan instantáneamente a los rivales?", "¿El sujeto usa trampas que disparan apenas un enemigo entra en la mira o que apuntan al instante a los rivales?", "Använder spelaren fusk som skjuter så snart en fiende kommer i siktet, eller som omedelbart låser sig på motståndare?", "ผู้เล่นที่ถูกตรวจสอบใช้โปรแกรมโกงที่ยิงทันทีเมื่อศัตรูเข้ามาอยู่ในศูนย์เล็ง หรือล็อกเป้าไปที่ศัตรูทันทีหรือไม่", "Oyuncu, düşman nişangâha girer girmez ateş eden veya rakiplere anında kilitlenen hileler kullanıyor mu?", "Чи використовує суб’єкт чити, що відкривають вогонь, щойно ворог потрапляє в приціл, або миттєво наводяться на супротивників?", "Đối tượng có dùng phần mềm gian lận tự động bắn ngay khi kẻ địch vào tâm ngắm hoặc ghim tâm vào đối thủ tức thì không?"],
    helpWalls: ["Използва ли субектът чийтове, които позволяват да вижда враговете през стени, подове, дим и други препятствия или докато е заслепен?", "该对象是否使用了能透过墙壁、地板、烟雾等障碍物看到敌人（或在被致盲时仍能看到敌人）的作弊功能？", "該對象是否使用了能透過牆壁、地板、煙霧等障礙物看到敵人（或在被致盲時仍能看到敵人）的作弊功能？", "Používá subjekt cheaty, které umožňují vidět nepřátele skrz zdi, podlahy, kouř a jiné překážky nebo i při oslepení?", "Bruger spilleren snydeprogrammer, der gør det muligt at se fjender gennem vægge, gulve, røg og andre forhindringer eller mens vedkommende er blændet?", "Gebruikt de speler cheats waarmee vijanden door muren, vloeren, rook en andere obstakels heen te zien zijn, of terwijl de speler verblind is?", "Is the subject using cheats that show enemies through walls, floors, smoke and other obstacles, or while blinded?", "Käyttääkö kohde huijauksia, joiden avulla vihollisia näkee seinien, lattioiden, savun ja muiden esteiden läpi tai sokaistuneena?", "Le sujet utilise-t-il des cheats permettant de voir les ennemis à travers les murs, les sols, la fumée et d’autres obstacles, ou en étant aveuglé ?", "Verwendet die Person Cheats, mit denen sich Gegner durch Wände, Böden, Rauch und andere Hindernisse oder im geblendeten Zustand sehen lassen?", "Χρησιμοποιεί το υποκείμενο cheats που επιτρέπουν να βλέπει τους εχθρούς μέσα από τοίχους, δάπεδα, καπνό και άλλα εμπόδια ή ενώ είναι τυφλωμένο;", "Használ-e a vizsgált játékos olyan csalást, amellyel falakon, padlókon, füstön és más akadályokon át vagy elvakítva is látja az ellenfeleket?", "Apakah subjek menggunakan cheat yang memungkinkan melihat musuh menembus dinding, lantai, asap, dan rintangan lain, atau saat sedang dibutakan?", "Il soggetto usa cheat che permettono di vedere i nemici attraverso muri, pavimenti, fumo e altri ostacoli, o mentre è accecato?", "対象は、壁・床・スモークなどの障害物越しや、視界を奪われた状態で敵を見られるチートを使っていますか？", "대상이 벽, 바닥, 연막 등 장애물 너머의 적이나 실명 상태에서도 적을 볼 수 있게 해 주는 치트를 사용하고 있습니까?", "Bruker spilleren juksekoder som gjør det mulig å se fiender gjennom vegger, gulv, røyk og andre hindringer, eller mens spilleren er blendet?", "Czy badany gracz używa cheatów pozwalających widzieć przeciwników przez ściany, podłogi, dym i inne przeszkody lub będąc oślepionym?", "O sujeito usa cheats que permitem ver inimigos através de paredes, pisos, fumo e outros obstáculos, ou enquanto está cego?", "O jogador usa cheats que permitem ver inimigos através de paredes, pisos, fumaça e outros obstáculos, ou enquanto está cego?", "Folosește subiectul cheaturi care permit să vadă inamicii prin pereți, podele, fum și alte obstacole sau în timp ce este orbit?", "Использует ли субъект читы, позволяющие видеть врагов сквозь стены, полы, дымы и другие препятствия или будучи ослеплённым?", "¿El sujeto usa trampas que permiten ver a los enemigos a través de paredes, suelos, humo y otros obstáculos, o estando cegado?", "¿El sujeto usa trampas que permiten ver a los enemigos a través de paredes, pisos, humo y otros obstáculos, o estando cegado?", "Använder spelaren fusk som gör det möjligt att se fiender genom väggar, golv, rök och andra hinder, eller när spelaren är bländad?", "ผู้เล่นที่ถูกตรวจสอบใช้โปรแกรมโกงที่ทำให้มองเห็นศัตรูทะลุกำแพง พื้น ควัน และสิ่งกีดขวางอื่น ๆ หรือขณะถูกแสงแฟลชทำให้ตาพร่าหรือไม่", "Oyuncu, düşmanları duvarların, zeminlerin, dumanın ve diğer engellerin ardından ya da kör olmuşken görmeyi sağlayan hileler kullanıyor mu?", "Чи використовує суб’єкт чити, що дають змогу бачити ворогів крізь стіни, підлогу, дим та інші перешкоди або будучи осліпленим?", "Đối tượng có dùng phần mềm gian lận cho phép nhìn thấy kẻ địch xuyên tường, sàn, khói và các vật cản khác, hoặc khi đang bị làm mù không?"],
    helpBhop: ["Използва ли субектът помощни инструменти, които скачат точно в момента на приземяване, за да увеличат скоростта му?", "该对象是否使用了在落地的瞬间精准起跳以提升速度的辅助工具？", "該對象是否使用了在落地的瞬間精準起跳以提升速度的輔助工具？", "Používá subjekt pomocné nástroje, které skáčou přesně v okamžiku dopadu, aby zvýšily jeho rychlost?", "Bruger spilleren hjælpeværktøjer, der hopper præcis i det øjeblik, man lander, for at øge farten?", "Gebruikt de speler hulpmiddelen die precies op het moment van landen springen om snelheid te winnen?", "Is the subject using helper tools that jump at the exact moment of landing to gain speed?", "Käyttääkö kohde apuvälineitä, jotka hyppäävät täsmälleen laskeutumishetkellä nopeuden kasvattamiseksi?", "Le sujet utilise-t-il des outils d’assistance qui sautent précisément au moment de l’atterrissage pour gagner en vitesse ?", "Verwendet die Person Hilfsmittel, die genau im Moment der Landung springen, um schneller zu werden?", "Χρησιμοποιεί το υποκείμενο βοηθητικά εργαλεία που πηδούν ακριβώς τη στιγμή της προσγείωσης για να αυξήσει την ταχύτητά του;", "Használ-e a vizsgált játékos olyan segédeszközt, amely pontosan a földetérés pillanatában ugrik, hogy növelje a sebességét?", "Apakah subjek menggunakan alat bantu yang melompat tepat saat mendarat untuk menambah kecepatan?", "Il soggetto usa strumenti di supporto che saltano esattamente al momento dell’atterraggio per aumentare la velocità?", "対象は、着地の瞬間に正確にジャンプして速度を稼ぐ補助ツールを使っていますか？", "대상이 착지하는 정확한 순간에 점프하여 속도를 높이는 보조 도구를 사용하고 있습니까?", "Bruker spilleren hjelpeverktøy som hopper nøyaktig i landingsøyeblikket for å øke farten?", "Czy badany gracz używa narzędzi pomocniczych, które skaczą dokładnie w momencie lądowania, aby zwiększyć prędkość?", "O sujeito usa ferramentas de apoio que saltam exatamente no momento da aterragem para ganhar velocidade?", "O jogador usa ferramentas de auxílio que pulam exatamente no momento do pouso para ganhar velocidade?", "Folosește subiectul instrumente de ajutor care sar exact în momentul aterizării pentru a câștiga viteză?", "Использует ли субъект вспомогательные инструменты, позволяющие подпрыгивать точно в момент приземления, чтобы увеличивать свою скорость?", "¿El sujeto usa herramientas de ayuda que saltan justo en el momento de aterrizar para ganar velocidad?", "¿El sujeto usa herramientas de ayuda que saltan justo en el momento de aterrizar para ganar velocidad?", "Använder spelaren hjälpmedel som hoppar exakt i landningsögonblicket för att öka farten?", "ผู้เล่นที่ถูกตรวจสอบใช้เครื่องมือช่วยที่กระโดดในจังหวะที่ลงสู่พื้นพอดีเพื่อเพิ่มความเร็วหรือไม่", "Oyuncu, hızını artırmak için tam iniş anında zıplayan yardımcı araçlar kullanıyor mu?", "Чи використовує суб’єкт допоміжні інструменти, що підстрибують точно в момент приземлення, щоб збільшити швидкість?", "Đối tượng có dùng công cụ hỗ trợ nhảy đúng khoảnh khắc tiếp đất để tăng tốc độ không?"],
    helpBot: ["Изглежда ли субектът напълно автоматизиран?", "该对象看起来是否完全由程序自动操控？", "該對象看起來是否完全由程式自動操控？", "Působí subjekt jako plně automatizovaný?", "Ser spilleren ud til at være fuldt automatiseret?", "Ziet de speler eruit als volledig geautomatiseerd?", "Does the subject look fully automated?", "Näyttääkö kohde täysin automatisoidulta?", "Le sujet semble-t-il entièrement automatisé ?", "Wirkt die Person vollständig automatisiert?", "Φαίνεται το υποκείμενο εντελώς αυτοματοποιημένο;", "Teljesen automatizáltnak tűnik a vizsgált játékos?", "Apakah subjek terlihat sepenuhnya otomatis?", "Il soggetto sembra completamente automatizzato?", "対象は完全に自動化されているように見えますか？", "대상이 완전히 자동화된 것처럼 보입니까?", "Ser spilleren ut til å være fullstendig automatisert?", "Czy badany gracz wygląda na w pełni zautomatyzowanego?", "O sujeito parece totalmente automatizado?", "O jogador parece totalmente automatizado?", "Pare subiectul complet automatizat?", "Выглядит ли субъект полностью автоматизированным?", "¿El sujeto parece totalmente automatizado?", "¿El sujeto parece totalmente automatizado?", "Ser spelaren ut att vara helt automatiserad?", "ผู้เล่นที่ถูกตรวจสอบดูเหมือนทำงานอัตโนมัติทั้งหมดหรือไม่", "Oyuncu tamamen otomatikleştirilmiş gibi görünüyor mu?", "Чи виглядає суб’єкт повністю автоматизованим?", "Đối tượng trông có hoàn toàn tự động không?"],
    titleCheating: ["Чийтове?", "作弊？", "作弊？", "Cheaty?", "Snyd?", "Cheats?", "Cheating?", "Huijaus?", "Triche ?", "Cheaten?", "Cheats;", "Csalás?", "Curang?", "Cheat?", "チート？", "치트?", "Juks?", "Cheaty?", "Batota?", "Cheats?", "Cheaturi?", "Читы?", "¿Trampas?", "¿Trampas?", "Fusk?", "โกงหรือไม่?", "Hile?", "Чити?", "Gian lận?"],
    cheatYes: ["Използва чийтове", "使用作弊", "使用作弊", "Používá cheaty", "Snyder", "Gebruikt cheats", "Cheating", "Huijaa", "Triche", "Cheatet", "Χρησιμοποιεί cheats", "Csal", "Curang", "Usa cheat", "チート使用", "치트 사용", "Jukser", "Używa cheatów", "Faz batota", "Usa cheats", "Folosește cheaturi", "Читы используются", "Usa trampas", "Usa trampas", "Fuskar", "ใช้โปรแกรมโกง", "Hile kullanıyor", "Чити використовуються", "Có gian lận"],
    cheatNo: ["Без чийтове", "未发现作弊", "未發現作弊", "Cheaty nezjištěny", "Ingen snyd set", "Geen cheats gezien", "No cheats seen", "Ei huijausta", "Aucune triche vue", "Keine Cheats erkannt", "Δεν εντοπίστηκαν cheats", "Nincs csalás", "Tidak ada cheat", "Nessun cheat visto", "チートなし", "치트 없음", "Ingen juks sett", "Brak cheatów", "Sem batota", "Sem cheats", "Fără cheaturi", "Читы не замечены", "Sin trampas", "Sin trampas", "Inget fusk sett", "ไม่พบการโกง", "Hile görülmedi", "Чити не помічено", "Không thấy gian lận"],
    cheatLocked: ["Другите два вердикта се отключват в края на клипа · остават {t}", "其余两个结论将在视频结束后解锁 · 剩余 {t}", "其餘兩個結論將在影片結束後解鎖 · 剩餘 {t}", "Další dva verdikty se odemknou po konci klipu · zbývá {t}", "De to øvrige vurderinger låses op, når klippet slutter · {t} tilbage", "De andere twee oordelen worden ontgrendeld als de clip eindigt · nog {t}", "The other two verdicts unlock when the clip ends · {t} left", "Kaksi muuta arviota avautuu klipin päätyttyä · jäljellä {t}", "Les deux autres verdicts se débloquent à la fin du clip · {t} restantes", "Die anderen beiden Urteile werden am Ende des Clips freigeschaltet · noch {t}", "Οι άλλες δύο κρίσεις ξεκλειδώνουν όταν τελειώσει το κλιπ · απομένουν {t}", "A másik két ítélet a klip végén nyílik meg · hátra van még {t}", "Dua vonis lainnya terbuka saat klip berakhir · sisa {t}", "Gli altri due verdetti si sbloccano al termine della clip · mancano {t}", "残り2つの判定はクリップ終了後に選べます · 残り {t}", "나머지 두 판정은 영상이 끝나면 선택할 수 있습니다 · {t} 남음", "De to andre vurderingene låses opp når klippet slutter · {t} igjen", "Pozostałe dwa werdykty odblokują się po zakończeniu klipu · zostało {t}", "Os outros dois veredictos desbloqueiam no fim do clipe · faltam {t}", "Os outros dois veredictos são liberados no fim do clipe · faltam {t}", "Celelalte două verdicte se deblochează la finalul clipului · mai sunt {t}", "Остальные два вердикта откроются после конца ролика · осталось {t}", "Los otros dos veredictos se desbloquean al terminar el clip · quedan {t}", "Los otros dos veredictos se desbloquean al terminar el clip · quedan {t}", "De två andra bedömningarna låses upp när klippet tar slut · {t} kvar", "คำตัดสินอีกสองแบบจะปลดล็อกเมื่อคลิปจบ · เหลือ {t}", "Diğer iki karar klip bitince açılır · {t} kaldı", "Решта двох вердиктів відкриються після кінця ролика · залишилось {t}", "Hai kết luận còn lại sẽ mở khi clip kết thúc · còn {t}"],
    helpCheating: ["Използва ли субектът чийтове извън всякакво основателно съмнение? Изберете първия вердикт веднага щом сте сигурни — моментът се записва.", "该对象是否毫无合理怀疑地在作弊？一旦确定，请立即选择第一个结论——该时刻会被记录。", "該對象是否毫無合理懷疑地在作弊？一旦確定，請立即選擇第一個結論——該時刻會被記錄。", "Podvádí subjekt bez rozumných pochyb? Jakmile si budete jistí, zvolte první verdikt – okamžik se zaznamená.", "Snyder spilleren hinsides enhver rimelig tvivl? Vælg den første vurdering, så snart du er sikker – øjeblikket registreres.", "Speelt de speler vals zonder redelijke twijfel? Kies het eerste oordeel zodra je zeker bent – dat moment wordt vastgelegd.", "Is the subject cheating beyond a reasonable doubt? Choose the first verdict as soon as you’re sure — that moment is recorded.", "Huijaako kohde kohtuullisen epäilyn ulkopuolella? Valitse ensimmäinen arvio heti, kun olet varma – hetki tallentuu.", "Le sujet triche-t-il au-delà de tout doute raisonnable ? Choisissez le premier verdict dès que vous en êtes sûr – ce moment est enregistré.", "Cheatet die Person zweifelsfrei? Wählen Sie das erste Urteil, sobald Sie sicher sind – dieser Zeitpunkt wird festgehalten.", "Κάνει το υποκείμενο cheating πέρα από κάθε εύλογη αμφιβολία; Επιλέξτε την πρώτη κρίση μόλις είστε σίγουροι – η στιγμή καταγράφεται.", "Csal-e a vizsgált játékos minden észszerű kétséget kizáróan? Válassza az első ítéletet, amint biztos benne – a pillanat rögzítésre kerül.", "Apakah subjek curang tanpa keraguan yang wajar? Pilih vonis pertama begitu Anda yakin — momen itu dicatat.", "Il soggetto bara oltre ogni ragionevole dubbio? Scegli il primo verdetto appena ne sei sicuro: quel momento viene registrato.", "対象は合理的な疑いの余地なくチートを使っていますか？確信した時点で最初の判定を選んでください。その瞬間が記録されます。", "대상이 합리적 의심의 여지 없이 치트를 쓰고 있습니까? 확신이 드는 즉시 첫 번째 판정을 선택하세요. 그 순간이 기록됩니다.", "Jukser spilleren hinsides rimelig tvil? Velg den første vurderingen så snart du er sikker – øyeblikket registreres.", "Czy badany gracz oszukuje ponad wszelką wątpliwość? Wybierz pierwszy werdykt, gdy tylko będziesz pewien – ten moment zostanie zapisany.", "O sujeito faz batota para além de qualquer dúvida razoável? Escolha o primeiro veredicto assim que tiver a certeza – esse momento fica registado.", "O jogador usa cheats além de qualquer dúvida razoável? Escolha o primeiro veredicto assim que tiver certeza – esse momento é registrado.", "Trișează subiectul dincolo de orice îndoială rezonabilă? Alegeți primul verdict imediat ce sunteți sigur – momentul este înregistrat.", "Использует ли субъект читы вне всякого сомнения? Выберите первый вердикт, как только будете уверены — этот момент фиксируется.", "¿El sujeto hace trampas más allá de toda duda razonable? Elige el primer veredicto en cuanto estés seguro: ese momento queda registrado.", "¿El sujeto hace trampa más allá de toda duda razonable? Elige el primer veredicto apenas estés seguro: ese momento queda registrado.", "Fuskar spelaren bortom rimligt tvivel? Välj den första bedömningen så snart du är säker – ögonblicket registreras.", "ผู้เล่นที่ถูกตรวจสอบโกงโดยปราศจากข้อสงสัยอันสมควรหรือไม่ เลือกคำตัดสินแรกทันทีที่มั่นใจ — ช่วงเวลานั้นจะถูกบันทึก", "Oyuncu makul şüphenin ötesinde hile yapıyor mu? Emin olur olmaz ilk kararı seçin; o an kaydedilir.", "Чи використовує суб’єкт чити поза розумним сумнівом? Оберіть перший вердикт, щойно будете впевнені — цей момент фіксується.", "Đối tượng có gian lận ngoài mọi nghi ngờ hợp lý không? Hãy chọn kết luận đầu tiên ngay khi bạn chắc chắn — thời điểm đó sẽ được ghi lại."],
  };

  const INVITE_TEXT_ROWS = {
    inviteHeading: ["Пригласить друга", "邀请好友", "邀請好友", "Pozvat přítele", "Invitér en ven", "Nodig een vriend uit", "Invite a friend", "Kutsu ystävä", "Inviter un ami", "Freund einladen", "Προσκαλέστε φίλο", "Barát meghívása", "Undang teman", "Invita un amico", "友達を招待", "친구 초대", "Inviter en venn", "Zaproś znajomego", "Convidar um amigo", "Convidar um amigo", "Invită un prieten", "Пригласить друга", "Invitar a un amigo", "Invitar a un amigo", "Bjud in en vän", "เชิญเพื่อน", "Arkadaş davet et", "Запросити друга", "Mời bạn bè"],
    inviteNav: ["Поканить проверяющих", "邀请审核员", "邀請審核員", "Pozvat recenzenty", "Invitér kontrollører", "Reviewers uitnodigen", "Invite reviewers", "Kutsu tarkastajia", "Inviter des évaluateurs", "Prüfer einladen", "Πρόσκληση αξιολογητών", "Ellenőrök meghívása", "Undang peninjau", "Invita revisori", "レビュアーを招待", "검토자 초대", "Inviter kontrollører", "Zaproś recenzentów", "Convidar revisores", "Convidar revisores", "Invită recenzori", "Пригласить проверяющих", "Invitar revisores", "Invitar revisores", "Bjud in granskare", "เชิญผู้ตรวจสอบ", "İncelemeci davet et", "Запросити перевіряльників", "Mời người đánh giá"],
    inviteIntro: ["Поделитесь ссылкой-приглашением с другом. Один аккаунт может активировать её только один раз.", "与朋友分享此邀请链接。每个账号只能激活一次。", "與朋友分享此邀請連結。每個帳號只能啟用一次。", "Sdílejte pozvánku s kamarádem. Každý účet ji může aktivovat pouze jednou.", "Del invitationslinket med en ven. Hver konto kan kun aktivere det én gang.", "Deel de uitnodigingslink met een vriend. Elk account kan deze één keer activeren.", "Share this invite link with a friend. Each account can activate it once.", "Jaa kutsulinkki ystävän kanssa. Kukin tili voi aktivoida sen kerran.", "Partagez ce lien avec un ami. Chaque compte ne peut l’activer qu’une fois.", "Teile diesen Einladungslink mit einem Freund. Jedes Konto kann ihn einmal aktivieren.", "Μοιραστείτε τον σύνδεσμο με έναν φίλο. Κάθε λογαριασμός μπορεί να τον ενεργοποιήσει μία φορά.", "Oszd meg a meghívólinket egy barátoddal. Minden fiók egyszer aktiválhatja.", "Bagikan tautan undangan ini kepada teman. Setiap akun hanya dapat mengaktifkannya sekali.", "Condividi il link con un amico. Ogni account può attivarlo una sola volta.", "招待リンクを友達と共有してください。各アカウントで一度だけ有効化できます。", "초대 링크를 친구와 공유하세요. 계정당 한 번만 활성화할 수 있습니다.", "Del invitasjonslenken med en venn. Hver konto kan aktivere den én gang.", "Udostępnij link znajomemu. Każde konto może go aktywować tylko raz.", "Compartilhe o link com um amigo. Cada conta pode ativá-lo uma vez.", "Compartilhe o link com um amigo. Cada conta pode ativá-lo uma vez.", "Trimite linkul unui prieten. Fiecare cont îl poate activa o singură dată.", "Поделитесь ссылкой-приглашением с другом. Один аккаунт может активировать её только один раз.", "Comparte el enlace con un amigo. Cada cuenta puede activarlo una vez.", "Comparte el enlace con un amigo. Cada cuenta puede activarlo una vez.", "Dela länken med en vän. Varje konto kan aktivera den en gång.", "แชร์ลิงก์เชิญนี้กับเพื่อน แต่ละบัญชีเปิดใช้งานได้ครั้งเดียว", "Davet bağlantısını bir arkadaşınızla paylaşın. Her hesap bunu bir kez etkinleştirebilir.", "Поділіться посиланням із другом. Кожен акаунт може активувати його лише раз.", "Chia sẻ liên kết mời này với bạn bè. Mỗi tài khoản chỉ có thể kích hoạt một lần."],
    invitePrivacyNote: ["Скрытие меняет только отображение — кнопка копирования продолжает работать.", "隐藏仅改变显示方式，复制按钮仍可使用。", "隱藏只會改變顯示方式，複製按鈕仍可使用。", "Skrytí mění pouze zobrazení — tlačítko kopírování stále funguje.", "Skjul ændrer kun visningen — kopieringsknappen virker stadig.", "Verbergen verandert alleen de weergave — kopiëren blijft werken.", "Hiding only changes what you see; the copy button still works.", "Piilottaminen muuttaa vain näkymää — kopiointipainike toimii silti.", "Le masquage ne change que l’affichage ; le bouton de copie reste actif.", "Das Ausblenden ändert nur die Anzeige; die Kopieren-Schaltfläche funktioniert weiterhin.", "Η απόκρυψη αλλάζει μόνο την εμφάνιση· η αντιγραφή εξακολουθεί να λειτουργεί.", "Az elrejtés csak a megjelenítést módosítja; a másolás továbbra is működik.", "Penyembunyian hanya mengubah tampilan; tombol salin tetap berfungsi.", "Nascondere cambia solo la visualizzazione: il pulsante di copia continua a funzionare.", "非表示にしても表示だけが変わり、コピー機能は引き続き使えます。", "숨김은 화면 표시만 바꾸며 복사 버튼은 계속 작동합니다.", "Skjuling endrer bare visningen — kopieringsknappen fungerer fortsatt.", "Ukrycie zmienia tylko widok — przycisk kopiowania nadal działa.", "Ocultar muda apenas a exibição; o botão de copiar continua funcionando.", "Ocultar muda apenas a exibição; o botão de copiar continua funcionando.", "Ascunderea schimbă doar afișarea; butonul de copiere funcționează în continuare.", "Скрытие меняет только отображение — кнопка копирования продолжает работать.", "Ocultar solo cambia lo que ves; el botón para copiar sigue funcionando.", "Ocultar solo cambia lo que ves; el botón para copiar sigue funcionando.", "Döljning ändrar bara visningen — kopieringsknappen fungerar ändå.", "การซ่อนเปลี่ยนเฉพาะสิ่งที่แสดง ปุ่มคัดลอกยังใช้งานได้", "Gizleme yalnızca görünümü değiştirir; kopyalama düğmesi çalışmaya devam eder.", "Приховування змінює лише відображення — кнопка копіювання продовжує працювати.", "Ẩn chỉ thay đổi phần hiển thị; nút sao chép vẫn hoạt động."],
    inviteDone: ["Готово", "完成", "完成", "Hotovo", "Færdig", "Klaar", "Done", "Valmis", "Terminé", "Fertig", "Τέλος", "Kész", "Selesai", "Fatto", "完了", "완료", "Ferdig", "Gotowe", "Concluído", "Concluído", "Gata", "Готово", "Listo", "Listo", "Klart", "เสร็จสิ้น", "Tamam", "Готово", "Xong"],
    inviteRulesTitle: ["Условия инвайта", "邀请条件", "邀請條件", "Podmínky pozvánky", "Invitationskrav", "Uitnodigingsvoorwaarden", "Invite requirements", "Kutsun ehdot", "Conditions d’invitation", "Einladungsvoraussetzungen", "Προϋποθέσεις πρόσκλησης", "Meghívási feltételek", "Syarat undangan", "Requisiti per l’invito", "招待の条件", "초대 조건", "Krav for invitasjon", "Warunki zaproszenia", "Requisitos do convite", "Requisitos do convite", "Condiții pentru invitație", "Условия инвайта", "Requisitos de invitación", "Requisitos de invitación", "Inbjudningsvillkor", "เงื่อนไขคำเชิญ", "Davet koşulları", "Умови запрошення", "Điều kiện lời mời"],
    inviteRuleOne: ["Вынесите 100 корректных вердиктов по клипам, чтобы получить 1 доступный инвайт.", "对片段作出 100 次有效判定，即可获得 1 个可用邀请名额。", "對片段作出 100 次有效判定，即可獲得 1 個可用邀請名額。", "Pro získání 1 pozvánky vydejte 100 správných verdiktů ke klipům.", "Afgiv 100 korrekte vurderinger for at få 1 invitation.", "Geef 100 correcte beoordelingen om 1 uitnodiging te krijgen.", "Submit 100 correct clip verdicts to unlock 1 invite.", "Anna 100 oikeaa tuomiota saadaksesi 1 kutsun.", "Rendez 100 verdicts corrects pour débloquer 1 invitation.", "Gib 100 korrekte Clip-Urteile ab, um 1 Einladung freizuschalten.", "Υποβάλετε 100 σωστές κρίσεις για να ξεκλειδώσετε 1 πρόσκληση.", "Adj le 100 helyes ítéletet 1 meghívó feloldásához.", "Berikan 100 vonis klip yang benar untuk membuka 1 undangan.", "Invia 100 verdetti corretti per sbloccare 1 invito.", "クリップに正しい判定を100回行うと、招待枠を1つ獲得できます。", "클립에 정확한 판정을 100회 제출하면 초대 1개가 열립니다.", "Send inn 100 riktige klippvurderinger for å låse opp 1 invitasjon.", "Wydaj 100 poprawnych werdyktów, aby odblokować 1 zaproszenie.", "Envie 100 vereditos corretos para desbloquear 1 convite.", "Envie 100 vereditos corretos para desbloquear 1 convite.", "Trimite 100 de verdicte corecte pentru a debloca 1 invitație.", "Вынесите 100 корректных вердиктов по клипам, чтобы получить 1 доступный инвайт.", "Envía 100 veredictos correctos para desbloquear 1 invitación.", "Envía 100 veredictos correctos para desbloquear 1 invitación.", "Skicka in 100 korrekta klippbedömningar för att låsa upp 1 inbjudan.", "ส่งคำตัดสินคลิปที่ถูกต้อง 100 ครั้งเพื่อปลดล็อกคำเชิญ 1 รายการ", "1 davet açmak için 100 doğru klip kararı verin.", "Винесіть 100 правильних вердиктів, щоб отримати 1 запрошення.", "Gửi 100 phán quyết clip chính xác để mở khóa 1 lời mời."],
    inviteRuleTwo: ["Одну ссылку могут активировать не более 5 человек.", "每个邀请链接最多可由 5 人激活。", "每個邀請連結最多可由 5 人啟用。", "Jeden odkaz může aktivovat nejvýše 5 lidí.", "Ét link kan aktiveres af højst 5 personer.", "Eén link kan door maximaal 5 personen worden geactiveerd.", "Each invite link can be activated by up to 5 people.", "Yhden kutsulinkin voi aktivoida enintään 5 henkilöä.", "Un lien peut être activé par 5 personnes au maximum.", "Jeder Einladungslink kann von höchstens 5 Personen aktiviert werden.", "Κάθε σύνδεσμος πρόσκλησης ενεργοποιείται από έως 5 άτομα.", "Egy meghívólinket legfeljebb 5 ember aktiválhat.", "Satu tautan undangan dapat diaktifkan oleh maksimal 5 orang.", "Un link può essere attivato da un massimo di 5 persone.", "招待リンクは最大5人まで有効化できます。", "초대 링크 하나는 최대 5명이 활성화할 수 있습니다.", "Hver invitasjonslenke kan aktiveres av opptil 5 personer.", "Jeden link może aktywować maksymalnie 5 osób.", "Cada link pode ser ativado por até 5 pessoas.", "Cada link pode ser ativado por até 5 pessoas.", "Fiecare link poate fi activat de cel mult 5 persoane.", "Одну ссылку могут активировать не более 5 человек.", "Cada enlace puede ser activado por hasta 5 personas.", "Cada enlace puede ser activado por hasta 5 personas.", "Varje länk kan aktiveras av högst 5 personer.", "ลิงก์เชิญหนึ่งลิงก์เปิดใช้งานได้สูงสุด 5 คน", "Bir davet bağlantısını en fazla 5 kişi etkinleştirebilir.", "Одне посилання можуть активувати не більше 5 людей.", "Mỗi liên kết có thể được kích hoạt bởi tối đa 5 người."],
    inviteRuleThree: ["Лимит просмотра — до 250 демок в сутки на одном аккаунте.", "每个账号每天最多可观看 250 场录像。", "每個帳號每天最多可觀看 250 場 Demo。", "Limit sledování je 250 dem denně na účet.", "Grænsen er 250 demoer om dagen pr. konto.", "De limiet is 250 demo's per dag per account.", "Viewing limit: up to 250 demos per day per account.", "Katseluraja on 250 demoa päivässä tiliä kohden.", "Limite : jusqu’à 250 démos par jour et par compte.", "Limit: bis zu 250 Demos pro Tag und Konto.", "Όριο: έως 250 demo την ημέρα ανά λογαριασμό.", "A limit fiókonként napi 250 demó.", "Batas: hingga 250 demo per hari untuk setiap akun.", "Limite: fino a 250 demo al giorno per account.", "視聴上限は1アカウントにつき1日250デモです。", "시청 한도는 계정당 하루 최대 250개 데모입니다.", "Grensen er opptil 250 demoer per dag per konto.", "Limit: do 250 dem dziennie na konto.", "Limite: até 250 demos por dia por conta.", "Limite: até 250 demos por dia por conta.", "Limita este de 250 de demo-uri pe zi pentru fiecare cont.", "Лимит просмотра — до 250 демок в сутки на одном аккаунте.", "Límite: hasta 250 demos al día por cuenta.", "Límite: hasta 250 demos al día por cuenta.", "Gränsen är upp till 250 demos per dag och konto.", "จำกัดการดูสูงสุด 250 เดโมต่อวันต่อบัญชี", "Hesap başına günlük en fazla 250 demo izlenebilir.", "Ліміт перегляду — до 250 демо на добу для одного акаунта.", "Giới hạn xem là tối đa 250 demo mỗi ngày cho mỗi tài khoản."],
    inviteHidePref: ["Скрывать ссылку при открытии страницы", "打开页面时隐藏链接", "開啟頁面時隱藏連結", "Při otevření stránky skrýt odkaz", "Skjul link ved sideåbning", "Link verbergen bij openen", "Hide link when the page opens", "Piilota linkki sivun avautuessa", "Masquer le lien à l’ouverture", "Link beim Öffnen verbergen", "Απόκρυψη συνδέσμου κατά το άνοιγμα", "Link elrejtése az oldal megnyitásakor", "Sembunyikan tautan saat halaman dibuka", "Nascondi il link all’apertura", "ページを開いたときにリンクを隠す", "페이지를 열 때 링크 숨기기", "Skjul lenken når siden åpnes", "Ukrywaj link po otwarciu strony", "Ocultar link ao abrir a página", "Ocultar link ao abrir a página", "Ascunde linkul la deschiderea paginii", "Скрывать ссылку при открытии страницы", "Ocultar el enlace al abrir la página", "Ocultar el enlace al abrir la página", "Dölj länken när sidan öppnas", "ซ่อนลิงก์เมื่อเปิดหน้า", "Sayfa açıldığında bağlantıyı gizle", "Приховувати посилання під час відкриття сторінки", "Ẩn liên kết khi mở trang"],
    inviteShow: ["Показать ссылку", "显示链接", "顯示連結", "Zobrazit odkaz", "Vis link", "Link tonen", "Show link", "Näytä linkki", "Afficher le lien", "Link anzeigen", "Εμφάνιση συνδέσμου", "Link megjelenítése", "Tampilkan tautan", "Mostra link", "リンクを表示", "링크 표시", "Vis lenke", "Pokaż link", "Mostrar link", "Mostrar link", "Afișează linkul", "Показать ссылку", "Mostrar enlace", "Mostrar enlace", "Visa länk", "แสดงลิงก์", "Bağlantıyı göster", "Показати посилання", "Hiện liên kết"],
    inviteHide: ["Скрыть ссылку", "隐藏链接", "隱藏連結", "Skrýt odkaz", "Skjul link", "Link verbergen", "Hide link", "Piilota linkki", "Masquer le lien", "Link verbergen", "Απόκρυψη συνδέσμου", "Link elrejtése", "Sembunyikan tautan", "Nascondi link", "リンクを隠す", "링크 숨기기", "Skjul lenke", "Ukryj link", "Ocultar link", "Ocultar link", "Ascunde linkul", "Скрыть ссылку", "Ocultar enlace", "Ocultar enlace", "Dölj länk", "ซ่อนลิงก์", "Bağlantıyı gizle", "Приховати посилання", "Ẩn liên kết"],
    inviteCopy: ["Копировать ссылку", "复制链接", "複製連結", "Kopírovat odkaz", "Kopiér link", "Link kopiëren", "Copy invite link", "Kopioi linkki", "Copier le lien", "Link kopieren", "Αντιγραφή συνδέσμου", "Link másolása", "Salin tautan", "Copia link", "リンクをコピー", "링크 복사", "Kopier lenke", "Kopiuj link", "Copiar link", "Copiar link", "Copiază linkul", "Копировать ссылку", "Copiar enlace", "Copiar enlace", "Kopiera länk", "คัดลอกลิงก์", "Bağlantıyı kopyala", "Копіювати посилання", "Sao chép liên kết"],
    inviteCopied: ["Скопировано", "已复制", "已複製", "Zkopírováno", "Kopieret", "Gekopieerd", "Copied", "Kopioitu", "Copié", "Kopiert", "Αντιγράφηκε", "Másolva", "Disalin", "Copiato", "コピーしました", "복사됨", "Kopiert", "Skopiowano", "Copiado", "Copiado", "Copiat", "Скопировано", "Copiado", "Copiado", "Kopierad", "คัดลอกแล้ว", "Kopyalandı", "Скопійовано", "Đã sao chép"],
  };

  function inviteText(key) {
    const row = INVITE_TEXT_ROWS[key];
    const index = LOCALE_INDEX.indexOf(getActiveLocale());
    return row?.[index] || row?.[LOCALE_INDEX.indexOf("en")] || key;
  }

  const SETTINGS_TEXT_ROWS = {
    settingsTitle: ["Настройки DemoScope", "DemoScope 设置", "DemoScope 設定", "Nastavení DemoScope", "DemoScope-indstillinger", "DemoScope-instellingen", "DemoScope settings", "DemoScope-asetukset", "Paramètres DemoScope", "DemoScope-Einstellungen", "Ρυθμίσεις DemoScope", "DemoScope beállítások", "Pengaturan DemoScope", "Impostazioni DemoScope", "DemoScope 設定", "DemoScope 설정", "DemoScope-innstillinger", "Ustawienia DemoScope", "Configurações do DemoScope", "Configurações do DemoScope", "Setări DemoScope", "Настройки DemoScope", "Ajustes de DemoScope", "Ajustes de DemoScope", "DemoScope-inställningar", "การตั้งค่า DemoScope", "DemoScope ayarları", "Налаштування DemoScope", "Cài đặt DemoScope"],
    settingsOpen: ["Настройки", "设置", "設定", "Nastavení", "Indstillinger", "Instellingen", "Settings", "Asetukset", "Paramètres", "Einstellungen", "Ρυθμίσεις", "Beállítások", "Pengaturan", "Impostazioni", "設定", "설정", "Innstillinger", "Ustawienia", "Configurações", "Configurações", "Setări", "Настройки", "Ajustes", "Ajustes", "Inställningar", "การตั้งค่า", "Ayarlar", "Налаштування", "Cài đặt"],
    settingsClose: ["Закрыть", "关闭", "關閉", "Zavřít", "Luk", "Sluiten", "Close", "Sulje", "Fermer", "Schließen", "Κλείσιμο", "Bezárás", "Tutup", "Chiudi", "閉じる", "닫기", "Lukk", "Zamknij", "Fechar", "Fechar", "Închide", "Закрыть", "Cerrar", "Cerrar", "Stäng", "ปิด", "Kapat", "Закрити", "Đóng"],
    settingsSound: ["Звуковые эффекты", "音效", "音效", "Zvukové efekty", "Lydeffekter", "Geluidseffecten", "Sound effects", "Äänitehosteet", "Effets sonores", "Soundeffekte", "Ηχητικά εφέ", "Hangeffektek", "Efek suara", "Effetti sonori", "効果音", "효과음", "Lydeffekter", "Efekty dźwiękowe", "Efeitos sonoros", "Efeitos sonoros", "Efecte sonore", "Звуковые эффекты", "Efectos de sonido", "Efectos de sonido", "Ljudeffekter", "เอฟเฟกต์เสียง", "Ses efektleri", "Звукові ефекти", "Hiệu ứng âm thanh"],
    settingsSoundEnabled: ["Включить звуки интерфейса", "启用界面音效", "啟用介面音效", "Zapnout zvuky rozhraní", "Aktivér lyde i grænsefladen", "Interfacegeluiden inschakelen", "Enable interface sounds", "Ota käyttöliittymän äänet käyttöön", "Activer les sons de l’interface", "Oberflächenklänge aktivieren", "Ενεργοποίηση ήχων διεπαφής", "Felületi hangok engedélyezése", "Aktifkan suara antarmuka", "Attiva i suoni dell’interfaccia", "インターフェース音を有効化", "인터페이스 소리 켜기", "Slå på grensesnittlyder", "Włącz dźwięki interfejsu", "Ativar sons da interface", "Ativar sons da interface", "Activează sunetele interfeței", "Включить звуки интерфейса", "Activar sonidos de la interfaz", "Activar sonidos de la interfaz", "Aktivera gränssnittsljud", "เปิดเสียงอินเทอร์เฟซ", "Arayüz seslerini etkinleştir", "Увімкнути звуки інтерфейсу", "Bật âm thanh giao diện"],
    settingsVolume: ["Громкость", "音量", "音量", "Hlasitost", "Lydstyrke", "Volume", "Volume", "Äänenvoimakkuus", "Volume", "Lautstärke", "Ένταση", "Hangerő", "Volume", "Volume", "音量", "음량", "Volum", "Głośność", "Volume", "Volume", "Volum", "Громкость", "Volumen", "Volumen", "Volym", "ระดับเสียง", "Ses düzeyi", "Гучність", "Âm lượng"],
    settingsVolumeHint: ["Колёсико мыши: ±5%. Shift + колёсико: ±10%.", "滚动鼠标滚轮：每次调整 5%。按住 Shift 滚动：每次调整 10%。", "捲動滑鼠滾輪：每次調整 5%。按住 Shift 捲動：每次調整 10%。", "Kolečko myši: změna o 5 %. Shift + kolečko: změna o 10 %.", "Musehjul: justér 5 %. Shift + musehjul: justér 10 %.", "Muiswiel: wijzig met 5%. Shift + muiswiel: wijzig met 10%.", "Mouse wheel: adjust by 5%. Shift + wheel: adjust by 10%.", "Hiiren rulla: säädä 5 %. Shift + rulla: säädä 10 %.", "Molette : ajustement de 5 %. Maj + molette : ajustement de 10 %.", "Mausrad: in 5-%-Schritten ändern. Umschalt + Mausrad: in 10-%-Schritten ändern.", "Τροχός ποντικιού: αλλαγή κατά 5%. Shift + τροχός: αλλαγή κατά 10%.", "Egérgörgő: 5%-os módosítás. Shift + görgő: 10%-os módosítás.", "Roda mouse: ubah 5%. Shift + roda: ubah 10%.", "Rotellina del mouse: varia del 5%. Maiusc + rotellina: varia del 10%.", "マウスホイール：5%ずつ変更。Shift＋ホイール：10%ずつ変更。", "마우스 휠: 5%씩 조절합니다. Shift + 휠: 10%씩 조절합니다.", "Musehjul: juster med 5 %. Shift + musehjul: juster med 10 %.", "Kółko myszy: zmiana o 5%. Shift + kółko: zmiana o 10%.", "Roda do rato: ajuste de 5%. Shift + roda: ajuste de 10%.", "Roda do mouse: ajuste de 5%. Shift + roda: ajuste de 10%.", "Rotița mouse-ului: modifică cu 5%. Shift + rotiță: modifică cu 10%.", "Колёсико мыши: ±5%. Shift + колёсико: ±10%.", "Rueda del ratón: cambia un 5%. Shift + rueda: cambia un 10%.", "Rueda del mouse: cambia un 5%. Shift + rueda: cambia un 10%.", "Mushjulet ändrar med 5 %. Skift + mushjul ändrar med 10 %.", "ล้อเมาส์: ปรับครั้งละ 5% กด Shift พร้อมหมุน: ปรับครั้งละ 10%", "Fare tekerleği: %5 değiştirir. Shift + tekerlek: %10 değiştirir.", "Коліщатко миші: змінює на 5%. Shift + коліщатко: змінює на 10%.", "Con lăn chuột: điều chỉnh 5%. Shift + con lăn: điều chỉnh 10%."],
    settingsPreview: ["Проверить звук", "试听音效", "試聽音效", "Vyzkoušet zvuk", "Afprøv lyd", "Geluid testen", "Preview sound", "Testaa ääni", "Tester le son", "Ton testen", "Δοκιμή ήχου", "Hangpróba", "Pratinjau suara", "Prova audio", "音を試す", "소리 미리 듣기", "Test lyd", "Odsłuchaj dźwięk", "Testar som", "Testar som", "Previzualizează sunetul", "Проверить звук", "Probar sonido", "Probar sonido", "Testa ljud", "ทดสอบเสียง", "Sesi dene", "Перевірити звук", "Nghe thử âm thanh"],
    settingsShortcut: ["Клавиша настроек", "设置快捷键", "設定快捷鍵", "Klávesa nastavení", "Genvej til indstillinger", "Sneltoets voor instellingen", "Settings shortcut", "Asetusten pikanäppäin", "Raccourci des paramètres", "Tastenkürzel für Einstellungen", "Συντόμευση ρυθμίσεων", "Beállítások gyorsbillentyűje", "Pintasan pengaturan", "Scorciatoia impostazioni", "設定用ショートカット", "설정 바로 가기", "Snarvei for innstillinger", "Skrót ustawień", "Atalho das configurações", "Atalho das configurações", "Scurtătură setări", "Клавиша настроек", "Atajo de ajustes", "Atajo de ajustes", "Inställningsgenväg", "ปุ่มลัดการตั้งค่า", "Ayarlar kısayolu", "Сполучення налаштувань", "Phím tắt cài đặt"],
    nicknameHide: ["Скрий псевдонима", "隐藏昵称", "隱藏暱稱", "Skrýt přezdívku", "Skjul brugernavn", "Gebruikersnaam verbergen", "Hide username", "Piilota käyttäjänimi", "Masquer le pseudo", "Benutzernamen verbergen", "Απόκρυψη ονόματος", "Felhasználónév elrejtése", "Sembunyikan nama pengguna", "Nascondi nome utente", "ユーザー名を隠す", "사용자 이름 숨기기", "Skjul brukernavn", "Ukryj nazwę użytkownika", "Ocultar nome de usuário", "Ocultar nome de usuário", "Ascunde numele de utilizator", "Скрыть ник", "Ocultar nombre de usuario", "Ocultar nombre de usuario", "Dölj användarnamn", "ซ่อนชื่อผู้ใช้", "Kullanıcı adını gizle", "Приховати нік", "Ẩn tên người dùng"],
    nicknameShow: ["Покажи псевдонима", "显示昵称", "顯示暱稱", "Zobrazit přezdívku", "Vis brugernavn", "Gebruikersnaam tonen", "Show username", "Näytä käyttäjänimi", "Afficher le pseudo", "Benutzernamen anzeigen", "Εμφάνιση ονόματος", "Felhasználónév megjelenítése", "Tampilkan nama pengguna", "Mostra nome utente", "ユーザー名を表示", "사용자 이름 표시", "Vis brukernavn", "Pokaż nazwę użytkownika", "Mostrar nome de usuário", "Mostrar nome de usuário", "Afișează numele de utilizator", "Показать ник", "Mostrar nombre de usuario", "Mostrar nombre de usuario", "Visa användarnamn", "แสดงชื่อผู้ใช้", "Kullanıcı adını göster", "Показати нік", "Hiện tên người dùng"],
    settingsChangeKey: ["Назначить клавишу", "更改按键", "變更按鍵", "Změnit klávesu", "Skift tast", "Toets wijzigen", "Change key", "Vaihda näppäin", "Changer la touche", "Taste ändern", "Αλλαγή πλήκτρου", "Billentyű módosítása", "Ubah tombol", "Cambia tasto", "キーを変更", "키 변경", "Endre tast", "Zmień klawisz", "Alterar tecla", "Alterar tecla", "Schimbă tasta", "Назначить клавишу", "Cambiar tecla", "Cambiar tecla", "Byt tangent", "เปลี่ยนปุ่ม", "Tuşu değiştir", "Змінити клавішу", "Đổi phím"],
    settingsPressKey: ["Нажмите новую клавишу. Esc — отмена.", "请按新按键。按 Esc 取消。", "請按新按鍵。按 Esc 取消。", "Stiskněte novou klávesu. Esc zruší akci.", "Tryk på en ny tast. Esc annullerer.", "Druk op een nieuwe toets. Esc annuleert.", "Press a new key. Esc cancels.", "Paina uutta näppäintä. Esc peruuttaa.", "Appuyez sur une touche. Échap annule.", "Drücke eine neue Taste. Esc bricht ab.", "Πάτησε νέο πλήκτρο. Το Esc ακυρώνει.", "Nyomj meg egy új billentyűt. Esc megszakítja.", "Tekan tombol baru. Esc membatalkan.", "Premi un nuovo tasto. Esc annulla.", "新しいキーを押してください。Esc でキャンセル。", "새 키를 누르세요. Esc를 누르면 취소됩니다.", "Trykk på en ny tast. Esc avbryter.", "Naciśnij nowy klawisz. Esc anuluje.", "Pressione uma nova tecla. Esc cancela.", "Pressione uma nova tecla. Esc cancela.", "Apasă o tastă nouă. Esc anulează.", "Нажмите новую клавишу. Esc — отмена.", "Pulsa una tecla nueva. Esc cancela.", "Pulsa una tecla nueva. Esc cancela.", "Tryck på en ny tangent. Esc avbryter.", "กดปุ่มใหม่ Esc เพื่อยกเลิก", "Yeni bir tuşa basın. Esc iptal eder.", "Натисніть нову клавішу. Esc скасовує.", "Nhấn phím mới. Esc để hủy."],
    settingsKeyReserved: ["Клавиша зарезервирована браузером или плеером. Выберите другую.", "此按键由浏览器或播放器保留，请选择其他按键。", "此按鍵由瀏覽器或播放器保留，請選擇其他按鍵。", "Klávesa je vyhrazena prohlížeči nebo přehrávači. Zvolte jinou.", "Tasten er reserveret af browseren eller afspilleren. Vælg en anden.", "Deze toets is gereserveerd door de browser of speler. Kies een andere.", "This key is reserved by the browser or player. Choose another.", "Selain tai soitin on varannut tämän näppäimen. Valitse toinen.", "Cette touche est réservée au navigateur ou au lecteur. Choisissez-en une autre.", "Diese Taste ist für Browser oder Player reserviert. Wähle eine andere.", "Αυτό το πλήκτρο είναι δεσμευμένο από το πρόγραμμα περιήγησης ή το πρόγραμμα αναπαραγωγής. Διάλεξε άλλο.", "Ezt a billentyűt a böngésző vagy a lejátszó használja. Válassz másikat.", "Tombol ini dicadangkan oleh browser atau pemutar. Pilih yang lain.", "Questo tasto è riservato al browser o al lettore. Scegline un altro.", "このキーはブラウザーまたはプレーヤー用に予約されています。別のキーを選んでください。", "이 키는 브라우저 또는 플레이어에서 사용합니다. 다른 키를 선택하세요.", "Denne tasten er reservert av nettleseren eller spilleren. Velg en annen.", "Ten klawisz jest zarezerwowany przez przeglądarkę lub odtwarzacz. Wybierz inny.", "Esta tecla está reservada pelo navegador ou reprodutor. Escolha outra.", "Esta tecla está reservada pelo navegador ou player. Escolha outra.", "Această tastă este rezervată de browser sau de player. Alege alta.", "Клавиша зарезервирована браузером или плеером. Выберите другую.", "Esta tecla está reservada para el navegador o el reproductor. Elige otra.", "Esta tecla está reservada para el navegador o el reproductor. Elige otra.", "Tangenten är reserverad av webbläsaren eller spelaren. Välj en annan.", "ปุ่มนี้สงวนไว้สำหรับเบราว์เซอร์หรือโปรแกรมเล่น โปรดเลือกปุ่มอื่น", "Bu tuş tarayıcı veya oynatıcı tarafından ayrılmış. Başka bir tuş seç.", "Цю клавішу зарезервовано браузером або плеєром. Виберіть іншу.", "Phím này được dành riêng cho trình duyệt hoặc trình phát. Hãy chọn phím khác."],
    settingsKeySaved: ["Клавиша сохранена.", "快捷键已保存。", "快捷鍵已儲存。", "Klávesa uložena.", "Tast gemt.", "Toets opgeslagen.", "Shortcut saved.", "Pikanäppäin tallennettu.", "Raccourci enregistré.", "Tastenkürzel gespeichert.", "Η συντόμευση αποθηκεύτηκε.", "Gyorsbillentyű mentve.", "Pintasan disimpan.", "Scorciatoia salvata.", "ショートカットを保存しました。", "바로 가기를 저장했습니다.", "Snarvei lagret.", "Zapisano skrót.", "Atalho salvo.", "Atalho salvo.", "Scurtătura a fost salvată.", "Клавиша сохранена.", "Atajo guardado.", "Atajo guardado.", "Genvägen har sparats.", "บันทึกปุ่มลัดแล้ว", "Kısayol kaydedildi.", "Сполучення збережено.", "Đã lưu phím tắt."],
    settingsHistory: ["Локальная история", "本地历史", "本機歷史", "Místní historie", "Lokal historik", "Lokale geschiedenis", "Local history", "Paikallinen historia", "Historique local", "Lokaler Verlauf", "Τοπικό ιστορικό", "Helyi előzmények", "Riwayat lokal", "Cronologia locale", "ローカル履歴", "로컬 기록", "Lokal historikk", "Historia lokalna", "Histórico local", "Histórico local", "Istoric local", "Локальная история", "Historial local", "Historial local", "Lokal historik", "ประวัติในเครื่อง", "Yerel geçmiş", "Локальна історія", "Lịch sử cục bộ"],
    settingsHistoryEnabled: ["Сохранять локальную историю", "保存本地历史", "儲存本機歷史", "Ukládat místní historii", "Gem lokal historik", "Lokale geschiedenis opslaan", "Save local history", "Tallenna paikallinen historia", "Enregistrer l’historique local", "Lokalen Verlauf speichern", "Αποθήκευση τοπικού ιστορικού", "Helyi előzmények mentése", "Simpan riwayat lokal", "Salva cronologia locale", "ローカル履歴を保存", "로컬 기록 저장", "Lagre lokal historikk", "Zapisuj historię lokalną", "Salvar histórico local", "Salvar histórico local", "Salvează istoricul local", "Сохранять локальную историю", "Guardar historial local", "Guardar historial local", "Spara lokal historik", "บันทึกประวัติในเครื่อง", "Yerel geçmişi kaydet", "Зберігати локальну історію", "Lưu lịch sử cục bộ"],
    settingsHistoryDisabledNote: ["Когато е изключено, новите присъди не се записват. Вече запазената история остава, докато не я изтриете.", "关闭后不会保存新的判定。已保存的历史记录会保留，直到你手动删除。", "關閉後不會儲存新的判定。已儲存的歷史記錄會保留，直到你手動刪除。", "Při vypnutí se nové verdikty neukládají. Již uložená historie zůstane, dokud ji nesmažete.", "Når funktionen er slået fra, gemmes nye vurderinger ikke. Allerede gemt historik bevares, indtil du sletter den.", "Als dit is uitgeschakeld, worden nieuwe beoordelingen niet opgeslagen. Bestaande geschiedenis blijft bewaard totdat je die verwijdert.", "When off, new verdicts are not saved. Existing history stays until you delete it.", "Kun asetus ei ole käytössä, uusia arvioita ei tallenneta. Aiempi historia säilyy, kunnes poistat sen.", "Désactivé, aucun nouveau verdict n’est enregistré. L’historique existant est conservé jusqu’à sa suppression.", "Wenn deaktiviert, werden neue Urteile nicht gespeichert. Vorhandene Einträge bleiben erhalten, bis du sie löschst.", "Όταν είναι απενεργοποιημένο, δεν αποθηκεύονται νέες ετυμηγορίες. Το υπάρχον ιστορικό παραμένει μέχρι να το διαγράψετε.", "Kikapcsolva az új ítéletek nem kerülnek mentésre. A meglévő előzmények megmaradnak, amíg nem törlöd őket.", "Saat nonaktif, vonis baru tidak disimpan. Riwayat yang sudah ada tetap tersimpan hingga Anda menghapusnya.", "Se disattivata, i nuovi verdetti non vengono salvati. La cronologia esistente resta finché non la elimini.", "オフにすると新しい判定は保存されません。既存の履歴は削除するまで保持されます。", "끄면 새 판정이 저장되지 않습니다. 기존 기록은 직접 삭제할 때까지 유지됩니다.", "Når den er av, lagres ikke nye vurderinger. Eksisterende historikk beholdes til du sletter den.", "Po wyłączeniu nowe werdykty nie są zapisywane. Dotychczasowa historia pozostaje do momentu jej usunięcia.", "Quando desativado, novos vereditos não são salvos. O histórico existente permanece até você excluí-lo.", "Quando desativado, novos vereditos não são salvos. O histórico existente permanece até você excluí-lo.", "Când este dezactivat, verdicturile noi nu sunt salvate. Istoricul existent rămâne până când îl ștergi.", "Если выключить, новые вердикты не сохраняются. Уже сохранённая история останется, пока вы не удалите её.", "Si se desactiva, no se guardarán nuevos veredictos. El historial existente se conservará hasta que lo elimines.", "Si se desactiva, no se guardarán nuevos veredictos. El historial existente se conservará hasta que lo elimines.", "När funktionen är av sparas inga nya bedömningar. Befintlig historik finns kvar tills du raderar den.", "เมื่อปิด จะไม่บันทึกคำตัดสินใหม่ ประวัติเดิมจะยังอยู่จนกว่าคุณจะลบ", "Kapalıyken yeni kararlar kaydedilmez. Mevcut geçmiş siz silene kadar saklanır.", "Якщо вимкнути, нові вердикти не зберігатимуться. Уже збережена історія залишиться, доки ви її не видалите.", "Khi tắt, phán quyết mới sẽ không được lưu. Lịch sử hiện có vẫn còn cho đến khi bạn xóa."],
    settingsLimitTimeFormat: ["Формат времени отметки", "限制时间格式", "限制時間格式", "Formát času zaznamenání", "Format for registreret tidspunkt", "Tijdnotatie van melding", "Limit notice time format", "Ilmoitusajan muoto", "Format de l’heure du signalement", "Zeitformat des Hinweises", "Μορφή ώρας ειδοποίησης", "Értesítés időformátuma", "Format waktu pemberitahuan", "Formato orario della notifica", "通知時刻の形式", "알림 시간 형식", "Tidsformat for varsling", "Format czasu wykrycia", "Formato da hora do aviso", "Formato da hora do aviso", "Formatul orei notificării", "Формат времени отметки", "Formato de hora del aviso", "Formato de hora del aviso", "Tidsformat för aviseringen", "รูปแบบเวลาที่แจ้ง", "Bildirim saat biçimi", "Формат часу сповіщення", "Định dạng giờ thông báo"],
    settingsTimeAuto: ["Автоматически", "自动", "自動", "Automaticky", "Automatisk", "Automatisch", "Automatic", "Automaattinen", "Automatique", "Automatisch", "Αυτόματα", "Automatikus", "Otomatis", "Automatico", "自動", "자동", "Automatisk", "Automatycznie", "Automático", "Automático", "Automat", "Автоматически", "Automático", "Automático", "Automatiskt", "อัตโนมัติ", "Otomatik", "Автоматично", "Tự động"],
    settingsTime12: ["12-часовой (AM/PM)", "12 小时制（AM/PM）", "12 小時制（AM/PM）", "12hodinový (AM/PM)", "12-timers (AM/PM)", "12-uurs (AM/PM)", "12-hour (AM/PM)", "12 tunnin (AM/PM)", "12 heures (AM/PM)", "12 Stunden (AM/PM)", "12ωρη (AM/PM)", "12 órás (AM/PM)", "12 jam (AM/PM)", "12 ore (AM/PM)", "12時間制（AM/PM）", "12시간제(AM/PM)", "12-timers (AM/PM)", "12-godzinny (AM/PM)", "12 horas (AM/PM)", "12 horas (AM/PM)", "12 ore (AM/PM)", "12-часовой (AM/PM)", "12 horas (AM/PM)", "12 horas (AM/PM)", "12 timmar (AM/PM)", "12 ชั่วโมง (AM/PM)", "12 saat (AM/PM)", "12-годинний (AM/PM)", "12 giờ (AM/PM)"],
    settingsTime24: ["24-часовой", "24 小时制", "24 小時制", "24hodinový", "24-timers", "24-uurs", "24-hour", "24 tunnin", "24 heures", "24 Stunden", "24ωρη", "24 órás", "24 jam", "24 ore", "24時間制", "24시간제", "24-timers", "24-godzinny", "24 horas", "24 horas", "24 ore", "24-часовой", "24 horas", "24 horas", "24 timmar", "24 ชั่วโมง", "24 saat", "24-годинний", "24 giờ"],
    settingsTimeHelp: ["Время хранится локально в этом браузере. Это момент, когда DemoScope впервые заметил пустую очередь, а не подтверждённое время блокировки VACNet.", "时间仅保存在此浏览器中。这是 DemoScope 首次发现队列为空的时间，并非 VACNet 确认的限制时间。", "時間僅儲存在此瀏覽器中。這是 DemoScope 首次發現佇列為空的時間，並非 VACNet 確認的限制時間。", "Čas se ukládá pouze v tomto prohlížeči. Jde o okamžik, kdy DemoScope poprvé zaznamenal prázdnou frontu, nikoli o potvrzený čas omezení VACNet.", "Tidspunktet gemmes kun i denne browser. Det er, da DemoScope først registrerede en tom kø — ikke et bekræftet tidspunkt for VACNet-begrænsningen.", "De tijd wordt alleen in deze browser opgeslagen. Dit is het moment waarop DemoScope de lege wachtrij voor het eerst zag, niet het bevestigde tijdstip van een VACNet-beperking.", "The time is stored only in this browser. It is when DemoScope first noticed the empty queue, not a confirmed VACNet restriction time.", "Aika tallennetaan vain tähän selaimeen. Se kertoo, milloin DemoScope havaitsi tyhjän jonon ensimmäisen kerran, ei vahvistettua VACNet-rajoituksen alkamisaikaa.", "L’heure est enregistrée uniquement dans ce navigateur. Elle indique quand DemoScope a détecté la file vide pour la première fois, et non l’heure confirmée d’une restriction VACNet.", "Die Zeit wird nur in diesem Browser gespeichert. Sie zeigt, wann DemoScope erstmals eine leere Warteschlange erkannt hat, nicht den bestätigten Beginn einer VACNet-Beschränkung.", "Η ώρα αποθηκεύεται μόνο σε αυτό το πρόγραμμα περιήγησης. Δείχνει πότε το DemoScope εντόπισε για πρώτη φορά κενή ουρά, όχι την επιβεβαιωμένη ώρα περιορισμού του VACNet.", "Az idő csak ebben a böngészőben tárolódik. Azt jelzi, mikor észlelte először a DemoScope az üres várólistát, nem a VACNet-korlátozás megerősített időpontját.", "Waktu hanya disimpan di browser ini. Ini adalah saat DemoScope pertama kali mendeteksi antrean kosong, bukan waktu pembatasan VACNet yang terkonfirmasi.", "L’ora viene salvata solo in questo browser. Indica quando DemoScope ha rilevato per la prima volta la coda vuota, non l’orario confermato di una restrizione VACNet.", "時刻はこのブラウザー内だけに保存されます。DemoScopeがキューの空状態を初めて検出した時刻であり、VACNetの制限開始時刻が確認されたものではありません。", "시간은 이 브라우저에만 저장됩니다. DemoScope가 대기열이 비어 있음을 처음 감지한 시각이며 VACNet 제한이 시작된 것으로 확인된 시각은 아닙니다.", "Tidspunktet lagres bare i denne nettleseren. Det viser når DemoScope først oppdaget en tom kø, ikke et bekreftet tidspunkt for en VACNet-begrensning.", "Czas jest przechowywany tylko w tej przeglądarce. To chwila, w której DemoScope po raz pierwszy wykrył pustą kolejkę, a nie potwierdzony czas ograniczenia VACNet.", "O horário é armazenado apenas neste navegador. Indica quando o DemoScope detectou a fila vazia pela primeira vez, não o horário confirmado de uma restrição do VACNet.", "O horário é armazenado apenas neste navegador. Indica quando o DemoScope detectou a fila vazia pela primeira vez, não o horário confirmado de uma restrição do VACNet.", "Ora este stocată doar în acest browser. Indică momentul în care DemoScope a detectat prima dată coada goală, nu momentul confirmat al unei restricții VACNet.", "Время хранится только в этом браузере. Это момент, когда DemoScope впервые заметил пустую очередь, а не подтверждённое время ограничения VACNet.", "La hora se guarda solo en este navegador. Indica cuándo DemoScope detectó la cola vacía por primera vez, no la hora confirmada de una restricción de VACNet.", "La hora se guarda solo en este navegador. Indica cuándo DemoScope detectó la cola vacía por primera vez, no la hora confirmada de una restricción de VACNet.", "Tiden sparas bara i den här webbläsaren. Den visar när DemoScope först upptäckte en tom kö, inte en bekräftad tidpunkt för en VACNet-begränsning.", "เวลาจะถูกเก็บไว้ในเบราว์เซอร์นี้เท่านั้น เป็นเวลาที่ DemoScope ตรวจพบว่าคิวว่างครั้งแรก ไม่ใช่เวลาที่ VACNet ยืนยันว่าเริ่มจำกัดการใช้งาน", "Saat yalnızca bu tarayıcıda saklanır. DemoScope'un kuyruğun boş olduğunu ilk fark ettiği zamanı gösterir; VACNet kısıtlamasının doğrulanmış başlangıç zamanı değildir.", "Час зберігається лише в цьому браузері. Це момент, коли DemoScope вперше помітив порожню чергу, а не підтверджений час обмеження VACNet.", "Thời gian chỉ được lưu trong trình duyệt này. Đây là lúc DemoScope lần đầu phát hiện hàng đợi trống, không phải thời điểm hạn chế VACNet đã được xác nhận."],
    settingsFooter: ["Нижняя часть страницы","页脚","頁尾","Zápatí","Sidefod","Voettekst","Footer","Alatunniste","Pied de page","Fußzeile","Υποσέλιδο","Lábléc","Footer","Piè di pagina","フッター","바닥글","Bunntekst","Stopka","Rodapé","Rodapé","Subsol","Нижняя часть страницы","Pie de página","Pie de página","Sidfot","ส่วนท้าย","Alt bilgi","Нижній колонтитул","Chân trang"],
    settingsFooterFeedback: ["Скрыть ссылку «Отправить отзыв»","隐藏“发送反馈”链接","隱藏「傳送意見回饋」連結","Skrýt odkaz „Odeslat zpětnou vazbu“","Skjul linket Send feedback","Link Feedback verzenden verbergen","Hide the Send Feedback link","Piilota Lähetä palautetta -linkki","Masquer le lien Envoyer un commentaire","Link Feedback senden ausblenden","Απόκρυψη συνδέσμου Αποστολή σχολίων","A Visszajelzés küldése hivatkozás elrejtése","Sembunyikan tautan Kirim masukan","Nascondi il link Invia feedback","フィードバックを送信リンクを非表示","피드백 보내기 링크 숨기기","Skjul lenken Send tilbakemelding","Ukryj link Wyślij opinię","Ocultar o link Enviar feedback","Ocultar o link Enviar feedback","Ascunde linkul Trimite feedback","Скрыть ссылку «Отправить отзыв»","Ocultar el enlace Enviar comentarios","Ocultar el enlace Enviar comentarios","Dölj länken Skicka feedback","ซ่อนลิงก์ส่งความคิดเห็น","Geri bildirim gönder bağlantısını gizle","Приховати посилання Надіслати відгук","Ẩn liên kết Gửi phản hồi"],
    settingsFooterReport: ["Скрыть ссылку «Сообщить о проблеме с роликом»","隐藏“举报片段问题”链接","隱藏「回報片段問題」連結","Skrýt odkaz „Nahlásit problém s klipem“","Skjul linket Rapportér problem med klip","Link Probleem met clip melden verbergen","Hide the Report Bad Clip link","Piilota Ilmoita ongelmallisesta klipistä -linkki","Masquer le lien Signaler un problème avec le clip","Link Problematischen Clip melden ausblenden","Απόκρυψη συνδέσμου Αναφορά προβλήματος κλιπ","A Hibás klip jelentése hivatkozás elrejtése","Sembunyikan tautan Laporkan klip bermasalah","Nascondi il link Segnala clip problematico","問題のあるクリップを報告リンクを非表示","문제 클립 신고 링크 숨기기","Skjul lenken Rapporter problem med klippet","Ukryj link Zgłoś problem z klipem","Ocultar o link Denunciar problema no clipe","Ocultar o link Denunciar problema no clipe","Ascunde linkul Raportează o problemă cu clipul","Скрыть ссылку «Сообщить о проблеме с роликом»","Ocultar el enlace Informar de un problema con el clip","Ocultar el enlace Informar de un problema con el clip","Dölj länken Rapportera problem med klippet","ซ่อนลิงก์รายงานปัญหาคลิป","Sorunlu klibi bildir bağlantısını gizle","Приховати посилання Повідомити про проблему з кліпом","Ẩn liên kết Báo cáo clip có vấn đề"],
    settingsFooterCopyright: ["Скрыть строку об авторских правах","隐藏版权声明","隱藏著作權聲明","Skrýt upozornění na autorská práva","Skjul ophavsretsmeddelelsen","Copyrightmelding verbergen","Hide the copyright notice","Piilota tekijänoikeusilmoitus","Masquer la mention de droits d’auteur","Urheberrechtshinweis ausblenden","Απόκρυψη ειδοποίησης πνευματικών δικαιωμάτων","Szerzői jogi közlemény elrejtése","Sembunyikan pemberitahuan hak cipta","Nascondi l’avviso sul copyright","著作権表示を非表示","저작권 표시 숨기기","Skjul opphavsrettsmerknaden","Ukryj informację o prawach autorskich","Ocultar o aviso de direitos autorais","Ocultar o aviso de direitos autorais","Ascunde notificarea privind drepturile de autor","Скрыть строку об авторских правах","Ocultar el aviso de derechos de autor","Ocultar el aviso de derechos de autor","Dölj upphovsrättsmeddelandet","ซ่อนประกาศลิขสิทธิ์","Telif hakkı bildirimini gizle","Приховати повідомлення про авторські права","Ẩn thông báo bản quyền"],
    settingsFooterHideAll: ["Скрыть всё содержимое нижней части страницы","隐藏页脚中的所有内容","隱藏頁尾中的所有內容","Skrýt veškerý obsah zápatí","Skjul alt indhold i sidefoden","Alle inhoud in de voettekst verbergen","Hide all footer content","Piilota kaikki alatunnisteen sisältö","Masquer tout le contenu du pied de page","Den gesamten Inhalt der Fußzeile ausblenden","Απόκρυψη όλου του περιεχομένου του υποσέλιδου","A lábléc teljes tartalmának elrejtése","Sembunyikan seluruh isi footer","Nascondi tutto il contenuto del piè di pagina","フッターの内容をすべて非表示","바닥글의 모든 내용 숨기기","Skjul alt innhold i bunnteksten","Ukryj całą zawartość stopki","Ocultar todo o conteúdo do rodapé","Ocultar todo o conteúdo do rodapé","Ascunde tot conținutul subsolului","Скрыть всё содержимое нижней части страницы","Ocultar todo el contenido del pie de página","Ocultar todo el contenido del pie de página","Dölj allt innehåll i sidfoten","ซ่อนเนื้อหาส่วนท้ายทั้งหมด","Alt bilgideki tüm içeriği gizle","Приховати весь вміст нижнього колонтитула","Ẩn toàn bộ nội dung chân trang"],
    settingsHistoryLast: ["Последняя запись", "最后记录", "最後記錄", "Poslední záznam", "Seneste post", "Laatste item", "Last entry", "Viimeisin merkintä", "Dernière entrée", "Letzter Eintrag", "Τελευταία εγγραφή", "Utolsó bejegyzés", "Entri terakhir", "Ultima voce", "最新の記録", "마지막 기록", "Siste oppføring", "Ostatni wpis", "Último registo", "Último registro", "Ultima înregistrare", "Последняя запись", "Último registro", "Último registro", "Senaste posten", "รายการล่าสุด", "Son kayıt", "Останній запис", "Bản ghi gần nhất"],
    settingsHistoryPrivacy: ["Хранится локально в этом браузере; не загружается на сервер. Очистка данных сайта удалит историю.", "仅保存在此浏览器中，不会上传到服务器。清除此网站的数据会删除历史记录。", "僅儲存在此瀏覽器中，不會上傳至伺服器。清除此網站資料會刪除歷史記錄。", "Ukládá se pouze v tomto prohlížeči a neodesílá se na server. Vymazáním dat webu historii odstraníte.", "Gemmes kun i denne browser og uploades ikke. Rydning af webstedsdata sletter historikken.", "Wordt alleen in deze browser bewaard en niet geüpload. Als je sitegegevens wist, verdwijnt de geschiedenis.", "Stored in this browser only; it is not uploaded. Clearing site data will delete it.", "Tallennetaan vain tähän selaimeen eikä ladata palvelimelle. Sivustotietojen tyhjennys poistaa historian.", "Stocké uniquement dans ce navigateur, sans envoi au serveur. Effacer les données du site supprimera l’historique.", "Wird nur in diesem Browser gespeichert und nicht hochgeladen. Beim Löschen der Websitedaten wird der Verlauf entfernt.", "Αποθηκεύεται μόνο σε αυτό το πρόγραμμα περιήγησης και δεν μεταφορτώνεται. Η εκκαθάριση δεδομένων ιστότοπου θα διαγράψει το ιστορικό.", "Csak ebben a böngészőben tárolódik, nem töltődik fel. A webhelyadatok törlése az előzményeket is törli.", "Hanya disimpan di browser ini dan tidak diunggah. Menghapus data situs akan menghapus riwayat.", "Salvata solo in questo browser e non caricata. Cancellando i dati del sito, la cronologia verrà eliminata.", "このブラウザー内だけに保存され、アップロードされません。サイトデータを消去すると履歴も削除されます。", "이 브라우저에만 저장되며 업로드되지 않습니다. 사이트 데이터를 지우면 기록도 삭제됩니다.", "Lagres bare i denne nettleseren og lastes ikke opp. Hvis du sletter nettstedsdata, slettes historikken.", "Historia jest przechowywana tylko w tej przeglądarce i nie jest wysyłana. Usunięcie danych witryny skasuje historię.", "Guardado apenas neste navegador e não enviado. Limpar os dados do site apagará o histórico.", "Guardado apenas neste navegador e não enviado. Limpar os dados do site apagará o histórico.", "Stocat doar în acest browser, fără a fi încărcat. Ștergerea datelor site-ului va șterge istoricul.", "Хранится только в этом браузере и не отправляется на сервер. Очистка данных сайта удалит историю.", "Solo se guarda en este navegador y no se sube al servidor. Si borras los datos del sitio, se eliminará el historial.", "Solo se guarda en este navegador y no se sube al servidor. Si borras los datos del sitio, se eliminará el historial.", "Sparas bara i den här webbläsaren och laddas inte upp. Om du rensar webbplatsdata raderas historiken.", "จัดเก็บไว้ในเบราว์เซอร์นี้เท่านั้นและไม่มีการอัปโหลด การล้างข้อมูลเว็บไซต์จะลบประวัติ", "Yalnızca bu tarayıcıda saklanır, sunucuya yüklenmez. Site verilerini temizlemek geçmişi siler.", "Зберігається лише в цьому браузері й не завантажується на сервер. Очищення даних сайту видалить історію.", "Chỉ lưu trong trình duyệt này, không tải lên máy chủ. Xóa dữ liệu trang web sẽ xóa lịch sử."],
    settingsHistoryLimit: ["Сейчас: до {perKey} вердиктов на игру/клип и {total} игр/клипов в истории. Можно увеличить до 50 и 500 соответственно.", "当前设置：每场比赛/片段最多 {perKey} 条判定，历史最多包含 {total} 场比赛/片段。可分别调高至 50 和 500。", "目前設定：每場比賽／片段最多 {perKey} 筆判定，歷史最多包含 {total} 場比賽／片段。可分別調高至 50 和 500。", "Aktuálně: až {perKey} verdiktů na hru/klip a {total} her/klipů v historii. Lze zvýšit až na 50 a 500.", "Nu: op til {perKey} afgørelser pr. spil/klip og {total} spil/klip i historikken. Kan øges til henholdsvis 50 og 500.", "Nu: maximaal {perKey} beoordelingen per game/clip en {total} games/clips in de geschiedenis. Verhoogbaar tot respectievelijk 50 en 500.", "Current: up to {perKey} verdicts per game/clip and {total} game/clip histories. You can increase these to 50 and 500.", "Nyt: enintään {perKey} arviota peliä/klippiä kohti ja {total} peli-/klippihistoriaa. Rajat voi nostaa arvoihin 50 ja 500.", "Actuellement : jusqu’à {perKey} verdicts par partie/clip et {total} historiques. Vous pouvez augmenter ces limites à 50 et 500.", "Aktuell: bis zu {perKey} Bewertungen pro Spiel/Clip und {total} Spiel-/Clip-Verläufe. Erhöhbar auf 50 bzw. 500.", "Τώρα: έως {perKey} κρίσεις ανά παιχνίδι/κλιπ και ιστορικό για {total} παιχνίδια/κλιπ. Μπορείτε να τα αυξήσετε σε 50 και 500.", "Jelenleg: legfeljebb {perKey} ítélet játékonként/klipenként és {total} játék/klip előzménye. A korlátok 50-re és 500-ra növelhetők.", "Saat ini: hingga {perKey} vonis per game/klip dan {total} riwayat game/klip. Batas dapat dinaikkan menjadi 50 dan 500.", "Attualmente: fino a {perKey} verdetti per partita/clip e {total} cronologie. Puoi aumentare i limiti rispettivamente a 50 e 500.", "現在の設定：ゲーム／クリップごとに最大{perKey}件、履歴は{total}件です。上限はそれぞれ50件、500件まで増やせます。", "현재 설정: 게임/클립당 최대 {perKey}개, 기록 {total}개입니다. 각각 50개와 500개까지 늘릴 수 있습니다.", "Nå: opptil {perKey} vurderinger per spill/klipp og {total} spill-/klipphistorikker. Grensene kan økes til henholdsvis 50 og 500.", "Obecnie: do {perKey} werdyktów na grę/klip i {total} historii gier/klipów. Limity można zwiększyć odpowiednio do 50 i 500.", "Agora: até {perKey} vereditos por partida/clipe e {total} históricos. É possível aumentar os limites para 50 e 500.", "Agora: até {perKey} vereditos por partida/clipe e {total} históricos. É possível aumentar os limites para 50 e 500.", "Acum: până la {perKey} verdicte per joc/clip și {total} istorice. Limitele pot fi mărite la 50 și 500.", "Сейчас: до {perKey} вердиктов на игру/клип и {total} игр/клипов в истории. Можно увеличить до 50 и 500 соответственно.", "Ahora: hasta {perKey} veredictos por partida/clip y {total} historiales. Puedes aumentar los límites a 50 y 500.", "Ahora: hasta {perKey} veredictos por partida/clip y {total} historiales. Puedes aumentar los límites a 50 y 500.", "Nu: upp till {perKey} bedömningar per match/klipp och {total} match-/klipphistoriker. Gränserna kan höjas till 50 respektive 500.", "ปัจจุบัน: สูงสุด {perKey} คำตัดสินต่อเกม/คลิป และประวัติ {total} รายการ เพิ่มได้สูงสุดเป็น 50 และ 500 ตามลำดับ", "Şu an: oyun/klip başına en fazla {perKey} karar ve {total} oyun/klip geçmişi. Sınırlar sırasıyla 50 ve 500'e çıkarılabilir.", "Зараз: до {perKey} вердиктів на гру/кліп і {total} ігор/кліпів в історії. Можна збільшити до 50 і 500 відповідно.", "Hiện tại: tối đa {perKey} phán quyết mỗi trận/clip và {total} lịch sử. Có thể tăng lần lượt lên 50 và 500."],
    settingsPerGameLimit: ["Лимит на игру/клип", "每场比赛/片段上限", "每場比賽／片段上限", "Limit hry/klipu", "Grænse pr. spil/klip", "Limiet per game/clip", "Per game/clip limit", "Peli-/klippikohtainen raja", "Limite par partie/clip", "Limit pro Spiel/Clip", "Όριο ανά παιχνίδι/κλιπ", "Játék-/klipkorlát", "Batas per game/klip", "Limite per partita/clip", "ゲーム／クリップごとの上限", "게임/클립별 한도", "Grense per spill/klipp", "Limit na grę/klip", "Limite por partida/clipe", "Limite por partida/clipe", "Limită per joc/clip", "Лимит на игру/клип", "Límite por partida/clip", "Límite por partida/clip", "Gräns per match/klipp", "ขีดจำกัดต่อเกม/คลิป", "Oyun/klip başına sınır", "Ліміт на гру/кліп", "Giới hạn mỗi trận/clip"],
    settingsTotalLimit: ["Лимит игр/клипов", "比赛/片段历史上限", "比賽／片段歷史上限", "Limit her/klipů", "Grænse for spil/klip", "Limiet games/clips", "Game/clip histories", "Peli-/klippihistorian raja", "Limite des parties/clips", "Spiel-/Clip-Verläufe", "Όριο παιχνιδιών/κλιπ", "Játék-/klipelőzmények", "Batas game/klip", "Limite partite/clip", "ゲーム／クリップ履歴の上限", "게임/클립 기록 한도", "Grense for spill/klipp", "Limit gier/klipów", "Limite de partidas/clipes", "Limite de partidas/clipes", "Limită jocuri/clipuri", "Лимит игр/клипов", "Límite de partidas/clips", "Límite de partidas/clips", "Gräns för match-/klipphistorik", "ขีดจำกัดประวัติเกม/คลิป", "Oyun/klip geçmişi sınırı", "Ліміт ігор/кліпів", "Giới hạn trận/clip"] ,
    settingsHistorySaveFailed: ["Не удалось сохранить лимиты истории в браузере.", "无法在浏览器中保存历史记录上限。", "無法在瀏覽器中儲存歷史記錄上限。", "Limity historie se nepodařilo uložit do prohlížeče.", "Historikgrænserne kunne ikke gemmes i browseren.", "De geschieden limieten konden niet in de browser worden opgeslagen.", "Could not save history limits in this browser.", "Historian rajoja ei voitu tallentaa selaimeen.", "Impossible d’enregistrer les limites de l’historique dans ce navigateur.", "Verlaufslimits konnten nicht im Browser gespeichert werden.", "Δεν ήταν δυνατή η αποθήκευση των ορίων ιστορικού σε αυτό το πρόγραμμα περιήγησης.", "Az előzménykorlátokat nem sikerült menteni a böngészőben.", "Batas riwayat tidak dapat disimpan di browser ini.", "Impossibile salvare i limiti della cronologia in questo browser.", "履歴の上限をこのブラウザーに保存できませんでした。", "이 브라우저에 기록 한도를 저장하지 못했습니다.", "Kunne ikke lagre historikkgrensene i nettleseren.", "Nie udało się zapisać limitów historii w tej przeglądarce.", "Não foi possível salvar os limites do histórico neste navegador.", "Não foi possível salvar os limites do histórico neste navegador.", "Nu s-au putut salva limitele istoricului în acest browser.", "Не удалось сохранить лимиты истории в этом браузере.", "No se pudieron guardar los límites del historial en este navegador.", "No se pudieron guardar los límites del historial en este navegador.", "Det gick inte att spara historikgränserna i webbläsaren.", "บันทึกขีดจำกัดประวัติในเบราว์เซอร์นี้ไม่สำเร็จ", "Geçmiş sınırları bu tarayıcıya kaydedilemedi.", "Не вдалося зберегти ліміти історії в цьому браузері.", "Không thể lưu giới hạn lịch sử trong trình duyệt này."],
    settingsResetDefaults: ["Сбросить настройки", "恢复默认设置", "恢復預設設定", "Obnovit výchozí nastavení", "Nulstil indstillinger", "Instellingen herstellen", "Reset settings", "Palauta oletukset", "Réinitialiser les paramètres", "Einstellungen zurücksetzen", "Επαναφορά ρυθμίσεων", "Beállítások visszaállítása", "Atur ulang pengaturan", "Ripristina impostazioni", "設定をリセット", "설정 초기화", "Tilbakestill innstillinger", "Przywróć ustawienia", "Repor configurações", "Redefinir configurações", "Resetează setările", "Сбросить настройки", "Restablecer ajustes", "Restablecer ajustes", "Återställ inställningar", "รีเซ็ตการตั้งค่า", "Ayarları sıfırla", "Скинути налаштування", "Đặt lại cài đặt"],
    settingsResetConfirm: ["Вернуть звуки, громкость и клавишу настроек к значениям по умолчанию? История не будет затронута.", "将音效、音量和设置快捷键恢复为默认值？不会影响历史记录。", "要將音效、音量和設定快捷鍵還原為預設值嗎？不會影響歷史記錄。", "Obnovit výchozí zvuky, hlasitost a klávesu nastavení? Historie zůstane zachována.", "Gendan standardlyde, lydstyrke og genvejstast? Historikken påvirkes ikke.", "Standaardgeluiden, volume en sneltoets herstellen? De geschiedenis blijft behouden.", "Restore default sounds, volume, and settings key? Your history will be kept.", "Palautetaanko oletusäänet, äänenvoimakkuus ja pikanäppäin? Historia säilyy.", "Rétablir les sons, le volume et le raccourci par défaut ? L’historique sera conservé.", "Standardsounds, Lautstärke und Einstellungstaste wiederherstellen? Der Verlauf bleibt erhalten.", "Επαναφορά προεπιλεγμένων ήχων, έντασης και πλήκτρου; Το ιστορικό θα διατηρηθεί.", "Visszaállítod az alapértelmezett hangokat, hangerőt és gyorsbillentyűt? Az előzmények megmaradnak.", "Pulihkan suara, volume, dan tombol pintasan bawaan? Riwayat tetap tersimpan.", "Ripristinare suoni, volume e scorciatoia predefiniti? La cronologia verrà mantenuta.", "効果音、音量、設定キーを初期値に戻しますか？履歴は保持されます。", "기본 소리, 음량, 설정 바로 가기로 되돌릴까요? 기록은 유지됩니다.", "Gjenopprette standardlyder, volum og snarvei? Historikken beholdes.", "Przywrócić domyślne dźwięki, głośność i skrót? Historia zostanie zachowana.", "Restaurar sons, volume e atalho padrão? O histórico será mantido.", "Restaurar sons, volume e atalho padrão? O histórico será mantido.", "Restabiliți sunetele, volumul și scurtătura implicite? Istoricul va fi păstrat.", "Вернуть звуки, громкость и клавишу настроек к значениям по умолчанию? История не будет затронута.", "¿Restablecer sonidos, volumen y atajo predeterminados? Se conservará el historial.", "¿Restablecer sonidos, volumen y atajo predeterminados? Se conservará el historial.", "Återställa standardljud, volym och genväg? Historiken behålls.", "คืนค่าเสียง ระดับเสียง และปุ่มลัดเริ่มต้นหรือไม่ ประวัติจะยังอยู่", "Varsayılan sesleri, düzeyi ve kısayolu geri yükle? Geçmiş korunur.", "Відновити типові звуки, гучність і клавішу? Історія залишиться.", "Khôi phục âm thanh, âm lượng và phím tắt mặc định? Lịch sử sẽ được giữ lại."],
    settingsResetDone: ["Настройки по умолчанию восстановлены.", "已恢复默认设置。", "已還原預設設定。", "Výchozí nastavení obnoveno.", "Standardindstillinger gendannet.", "Standaardinstellingen hersteld.", "Default settings restored.", "Oletusasetukset palautettu.", "Paramètres par défaut rétablis.", "Standardeinstellungen wiederhergestellt.", "Οι προεπιλεγμένες ρυθμίσεις αποκαταστάθηκαν.", "Alapértelmezett beállítások visszaállítva.", "Pengaturan bawaan dipulihkan.", "Impostazioni predefinite ripristinate.", "設定を初期値に戻しました。", "기본 설정을 복원했습니다.", "Standardinnstillinger gjenopprettet.", "Przywrócono ustawienia domyślne.", "Configurações padrão restauradas.", "Configurações padrão restauradas.", "Setările implicite au fost restabilite.", "Настройки по умолчанию восстановлены.", "Se restablecieron los ajustes predeterminados.", "Se restablecieron los ajustes predeterminados.", "Standardinställningar återställda.", "คืนค่าการตั้งค่าเริ่มต้นแล้ว", "Varsayılan ayarlar geri yüklendi.", "Типові налаштування відновлено.", "Đã khôi phục cài đặt mặc định."],
    settingsExport: ["Скачать JSON-копию", "导出 JSON 备份", "匯出 JSON 備份", "Exportovat zálohu JSON", "Eksportér JSON-sikkerhedskopi", "JSON-back-up exporteren", "Export JSON backup", "Vie JSON-varmuuskopio", "Exporter la sauvegarde JSON", "JSON-Sicherung exportieren", "Εξαγωγή αντιγράφου JSON", "JSON biztonsági mentés exportálása", "Ekspor cadangan JSON", "Esporta backup JSON", "JSONバックアップを出力", "JSON 백업 내보내기", "Eksporter JSON-sikkerhetskopi", "Eksportuj kopię JSON", "Exportar cópia JSON", "Exportar backup JSON", "Exportă copia JSON", "Скачать JSON-копию", "Exportar copia JSON", "Exportar copia JSON", "Exportera JSON-säkerhetskopia", "ส่งออกไฟล์สำรอง JSON", "JSON yedeğini dışa aktar", "Експортувати копію JSON", "Xuất bản sao JSON"],
    settingsExportReport: ["Скачать HTML-отчёт", "下载 HTML 报告", "下載 HTML 報告", "Stáhnout HTML report", "Download HTML-rapport", "HTML-rapport downloaden", "Download HTML report", "Lataa HTML-raportti", "Télécharger le rapport HTML", "HTML-Bericht herunterladen", "Λήψη αναφοράς HTML", "HTML-jelentés letöltése", "Unduh laporan HTML", "Scarica il rapporto HTML", "HTMLレポートをダウンロード", "HTML 보고서 다운로드", "Last ned HTML-rapport", "Pobierz raport HTML", "Baixar relatório HTML", "Baixar relatório HTML", "Descarcă raportul HTML", "Скачать HTML-отчёт", "Descargar informe HTML", "Descargar informe HTML", "Ladda ned HTML-rapport", "ดาวน์โหลดรายงาน HTML", "HTML raporunu indir", "Завантажити HTML-звіт", "Tải báo cáo HTML"],
    settingsMergeReport: ["Собрать HTML-отчёт из JSON-копий", "从 JSON 备份合并 HTML 报告", "從 JSON 備份合併 HTML 報告", "Sloučit JSON zálohy do HTML reportu", "Saml JSON-kopier til HTML-rapport", "JSON-back-ups samenvoegen tot HTML-rapport", "Combine JSON copies into an HTML report", "Yhdistä JSON-varmuuskopiot HTML-raportiksi", "Fusionner des copies JSON en rapport HTML", "JSON-Kopien zu einem HTML-Bericht zusammenführen", "Συνδυασμός αντιγράφων JSON σε αναφορά HTML", "JSON-másolatok egyesítése HTML-jelentésbe", "Gabungkan salinan JSON menjadi laporan HTML", "Unisci copie JSON in un report HTML", "JSONバックアップをまとめてHTMLレポートを作成", "JSON 백업을 하나의 HTML 보고서로 합치기", "Slå sammen JSON-kopier til en HTML-rapport", "Połącz kopie JSON w raport HTML", "Juntar cópias JSON em um relatório HTML", "Juntar cópias JSON em um relatório HTML", "Unește copiile JSON într-un raport HTML", "Собрать HTML-отчёт из JSON-копий", "Combinar copias JSON en un informe HTML", "Combinar copias JSON en un informe HTML", "Slå ihop JSON-kopior till en HTML-rapport", "รวมสำเนา JSON เป็นรายงาน HTML", "JSON kopyalarını tek bir HTML raporunda birleştir", "Об’єднати копії JSON у HTML-звіт", "Gộp các bản JSON thành báo cáo HTML"],
    settingsMergeReportDescription: ["Выберите JSON-копии истории: записи объединятся в один HTML-отчёт, дубликаты будут пропущены. Локальная история не изменится.", "选择历史记录 JSON 备份：记录将合并到一个 HTML 报告中，重复项会跳过。本地历史记录不会更改。", "選擇歷史記錄 JSON 備份：記錄會合併至一份 HTML 報告，重複項目會略過。本機歷史記錄不會變更。", "Vyberte JSON zálohy historie: záznamy se sloučí do jednoho HTML reportu a duplicity se přeskočí. Místní historie zůstane beze změny.", "Vælg JSON-sikkerhedskopier: poster samles i én HTML-rapport, og dubletter springes over. Den lokale historik ændres ikke.", "Selecteer JSON-back-ups: gegevens worden samengevoegd in één HTML-rapport en duplicaten worden overgeslagen. Je lokale geschiedenis blijft ongewijzigd.", "Select JSON history copies to combine them into one HTML report. Duplicates are skipped, and your local history stays unchanged.", "Valitse JSON-varmuuskopiot: tiedot yhdistetään yhdeksi HTML-raportiksi ja kaksoiskappaleet ohitetaan. Paikallinen historia ei muutu.", "Sélectionnez des copies JSON : les entrées seront réunies dans un rapport HTML et les doublons ignorés. L’historique local ne sera pas modifié.", "Wählen Sie JSON-Sicherungen aus: Einträge werden in einem HTML-Bericht zusammengeführt und Duplikate übersprungen. Ihr lokaler Verlauf bleibt unverändert.", "Επιλέξτε αντίγραφα JSON: οι εγγραφές θα συνδυαστούν σε μία αναφορά HTML και τα διπλότυπα θα παραλειφθούν. Το τοπικό ιστορικό δεν αλλάζει.", "Válassza ki a JSON-másolatokat: a bejegyzések egy HTML-jelentésbe kerülnek, az ismétlődések kimaradnak. A helyi előzmények nem változnak.", "Pilih salinan JSON: catatan akan digabungkan menjadi satu laporan HTML dan duplikat dilewati. Riwayat lokal tidak berubah.", "Seleziona le copie JSON: i record verranno uniti in un unico rapporto HTML e i duplicati ignorati. La cronologia locale non cambia.", "履歴のJSONコピーを選択すると、1つのHTMLレポートに統合されます。重複はスキップされ、ローカル履歴は変更されません。", "기록 JSON 사본을 선택하면 하나의 HTML 보고서로 합쳐집니다. 중복 항목은 건너뛰며 로컬 기록은 변경되지 않습니다.", "Velg JSON-kopier: oppføringene samles i én HTML-rapport, og duplikater hoppes over. Den lokale historikken endres ikke.", "Wybierz kopie JSON: wpisy zostaną połączone w jeden raport HTML, a duplikaty pominięte. Lokalna historia pozostanie bez zmian.", "Selecione cópias JSON: os registros serão reunidos em um relatório HTML e as duplicatas serão ignoradas. O histórico local não será alterado.", "Selecione cópias JSON: os registros serão reunidos em um relatório HTML e as duplicatas serão ignoradas. O histórico local não será alterado.", "Selectați copii JSON: înregistrările vor fi reunite într-un raport HTML, iar duplicatele vor fi omise. Istoricul local nu se modifică.", "Выберите JSON-копии истории: записи объединятся в один HTML-отчёт, дубликаты будут пропущены. Локальная история не изменится.", "Selecciona copias JSON: los registros se combinarán en un informe HTML y se omitirán los duplicados. El historial local no cambiará.", "Selecciona copias JSON: los registros se combinarán en un informe HTML y se omitirán los duplicados. El historial local no cambiará.", "Välj JSON-kopior: posterna slås ihop till en HTML-rapport och dubbletter hoppas över. Den lokala historiken ändras inte.", "เลือกสำเนา JSON: รายการจะถูกรวมเป็นรายงาน HTML เดียวและข้ามรายการซ้ำ โดยประวัติในเครื่องจะไม่เปลี่ยนแปลง", "JSON kopyalarını seçin: kayıtlar tek bir HTML raporunda birleştirilir ve yinelenenler atlanır. Yerel geçmişiniz değişmez.", "Виберіть JSON-копії: записи буде об’єднано в один HTML-звіт, а дублікати пропущено. Локальна історія не зміниться.", "Chọn các bản JSON: dữ liệu sẽ được gộp vào một báo cáo HTML và các mục trùng lặp sẽ bị bỏ qua. Lịch sử cục bộ không thay đổi."],
    settingsMergeProgress: ["Обработано файлов: {done}/{total}…", "正在处理文件：{done}/{total}…", "正在處理檔案：{done}/{total}…", "Zpracováno souborů: {done}/{total}…", "Behandlede filer: {done}/{total}…", "Bestanden verwerkt: {done}/{total}…", "Processing files: {done}/{total}…", "Käsiteltyjä tiedostoja: {done}/{total}…", "Fichiers traités : {done}/{total}…", "Dateien verarbeitet: {done}/{total}…", "Επεξεργασία αρχείων: {done}/{total}…", "Feldolgozott fájlok: {done}/{total}…", "File diproses: {done}/{total}…", "File elaborati: {done}/{total}…", "処理したファイル：{done}/{total}…", "처리한 파일: {done}/{total}…", "Behandlede filer: {done}/{total}…", "Przetworzone pliki: {done}/{total}…", "Arquivos processados: {done}/{total}…", "Arquivos processados: {done}/{total}…", "Fișiere procesate: {done}/{total}…", "Обработано файлов: {done}/{total}…", "Archivos procesados: {done}/{total}…", "Archivos procesados: {done}/{total}…", "Bearbetade filer: {done}/{total}…", "ประมวลผลไฟล์แล้ว: {done}/{total}…", "İşlenen dosyalar: {done}/{total}…", "Оброблено файлів: {done}/{total}…", "Đã xử lý tệp: {done}/{total}…"],
    settingsMergeComplete: ["Готово: файлов {files}, пропущено {skipped}; записей {records}, дублей {duplicates}.", "完成：文件 {files} 个，跳过 {skipped} 个；记录 {records} 条，重复 {duplicates} 条。", "完成：檔案 {files} 個，略過 {skipped} 個；記錄 {records} 筆，重複 {duplicates} 筆。", "Hotovo: souborů {files}, přeskočeno {skipped}; záznamů {records}, duplicit {duplicates}.", "Færdig: {files} filer, {skipped} sprunget over; {records} poster, {duplicates} dubletter.", "Klaar: {files} bestanden, {skipped} overgeslagen; {records} items, {duplicates} duplicaten.", "Done: {files} files, {skipped} skipped; {records} records, {duplicates} duplicates.", "Valmis: {files} tiedostoa, {skipped} ohitettu; {records} merkintää, {duplicates} kaksoiskappaletta.", "Terminé : {files} fichiers, {skipped} ignorés ; {records} entrées, {duplicates} doublons.", "Fertig: {files} Dateien, {skipped} übersprungen; {records} Einträge, {duplicates} Duplikate.", "Ολοκληρώθηκε: {files} αρχεία, {skipped} παραλείφθηκαν· {records} εγγραφές, {duplicates} διπλότυπα.", "Kész: {files} fájl, {skipped} kihagyva; {records} bejegyzés, {duplicates} ismétlődés.", "Selesai: {files} file, {skipped} dilewati; {records} entri, {duplicates} duplikat.", "Completato: {files} file, {skipped} ignorati; {records} voci, {duplicates} duplicati.", "完了：ファイル{files}件、スキップ{skipped}件。記録{records}件、重複{duplicates}件。", "완료: 파일 {files}개, 건너뜀 {skipped}개; 기록 {records}개, 중복 {duplicates}개.", "Ferdig: {files} filer, {skipped} hoppet over; {records} oppføringer, {duplicates} duplikater.", "Gotowe: plików {files}, pominięto {skipped}; wpisów {records}, duplikatów {duplicates}.", "Concluído: {files} arquivos, {skipped} ignorados; {records} registros, {duplicates} duplicados.", "Concluído: {files} arquivos, {skipped} ignorados; {records} registros, {duplicates} duplicados.", "Gata: {files} fișiere, {skipped} omise; {records} înregistrări, {duplicates} duplicate.", "Готово: файлов {files}, пропущено {skipped}; записей {records}, дублей {duplicates}.", "Listo: {files} archivos, {skipped} omitidos; {records} registros, {duplicates} duplicados.", "Listo: {files} archivos, {skipped} omitidos; {records} registros, {duplicates} duplicados.", "Klart: {files} filer, {skipped} överhoppade; {records} poster, {duplicates} dubbletter.", "เสร็จแล้ว: ไฟล์ {files} ไฟล์ ข้าม {skipped}; รายการ {records} รายการ ซ้ำ {duplicates}", "Tamamlandı: {files} dosya, {skipped} atlandı; {records} kayıt, {duplicates} kopya.", "Готово: файлів {files}, пропущено {skipped}; записів {records}, дублікатів {duplicates}.", "Hoàn tất: {files} tệp, bỏ qua {skipped}; {records} mục, {duplicates} mục trùng."],
    settingsMergeEmpty: ["Не найдено подходящих записей в выбранных JSON-файлах.", "所选 JSON 文件中没有可用记录。", "所選 JSON 檔案中沒有可用記錄。", "Ve vybraných souborech JSON nebyly nalezeny žádné záznamy.", "Ingen gyldige poster fundet i de valgte JSON-filer.", "Geen bruikbare items gevonden in de gekozen JSON-bestanden.", "No usable records found in the selected JSON files.", "Valituista JSON-tiedostoista ei löytynyt kelvollisia merkintöjä.", "Aucune entrée exploitable dans les fichiers JSON sélectionnés.", "Keine verwendbaren Einträge in den ausgewählten JSON-Dateien gefunden.", "Δεν βρέθηκαν έγκυρες εγγραφές στα επιλεγμένα αρχεία JSON.", "Nem találhatók használható bejegyzések a kiválasztott JSON-fájlokban.", "Tidak ada entri yang dapat digunakan dalam file JSON yang dipilih.", "Nessuna voce utilizzabile nei file JSON selezionati.", "選択したJSONファイルに利用可能な記録がありません。", "선택한 JSON 파일에서 사용할 수 있는 기록을 찾지 못했습니다.", "Fant ingen brukbare oppføringer i de valgte JSON-filene.", "Nie znaleziono wpisów w wybranych plikach JSON.", "Nenhum registro válido encontrado nos arquivos JSON selecionados.", "Nenhum registro válido encontrado nos arquivos JSON selecionados.", "Nu s-au găsit înregistrări valide în fișierele JSON selectate.", "В выбранных JSON-файлах не найдено подходящих записей.", "No se encontraron registros válidos en los archivos JSON seleccionados.", "No se encontraron registros válidos en los archivos JSON seleccionados.", "Inga användbara poster hittades i de valda JSON-filerna.", "ไม่พบรายการที่ใช้ได้ในไฟล์ JSON ที่เลือก", "Seçilen JSON dosyalarında kullanılabilir kayıt bulunamadı.", "У вибраних JSON-файлах не знайдено придатних записів.", "Không tìm thấy mục hợp lệ trong các tệp JSON đã chọn."],
    settingsMergeFailed: ["Не удалось создать объединённый HTML-отчёт.", "无法创建合并的 HTML 报告。", "無法建立合併的 HTML 報告。", "Nepodařilo se vytvořit sloučený HTML report.", "Kunne ikke oprette den samlede HTML-rapport.", "Het gecombineerde HTML-rapport kon niet worden gemaakt.", "Could not create the combined HTML report.", "Yhdistetyn HTML-raportin luominen epäonnistui.", "Impossible de créer le rapport HTML combiné.", "Der zusammengeführte HTML-Bericht konnte nicht erstellt werden.", "Δεν ήταν δυνατή η δημιουργία της ενοποιημένης αναφοράς HTML.", "Nem sikerült létrehozni az egyesített HTML-jelentést.", "Laporan HTML gabungan gagal dibuat.", "Impossibile creare il report HTML combinato.", "統合HTMLレポートを作成できませんでした。", "통합 HTML 보고서를 만들지 못했습니다.", "Kunne ikke opprette den sammenslåtte HTML-rapporten.", "Nie udało się utworzyć połączonego raportu HTML.", "Não foi possível criar o relatório HTML combinado.", "Não foi possível criar o relatório HTML combinado.", "Nu s-a putut crea raportul HTML combinat.", "Не удалось создать объединённый HTML-отчёт.", "No se pudo crear el informe HTML combinado.", "No se pudo crear el informe HTML combinado.", "Det gick inte att skapa den sammanslagna HTML-rapporten.", "สร้างรายงาน HTML ที่รวมแล้วไม่สำเร็จ", "Birleştirilmiş HTML raporu oluşturulamadı.", "Не вдалося створити об’єднаний HTML-звіт.", "Không thể tạo báo cáo HTML đã gộp."],
    settingsMergeTooLarge: ["Выбранные файлы слишком велики. Общий размер не должен превышать 100 МБ, одного файла — 5 МБ.", "所选文件过大。总大小不得超过 100 MB，单个文件不得超过 5 MB。", "所選檔案過大。總大小不得超過 100 MB，單一檔案不得超過 5 MB。", "Vybrané soubory jsou příliš velké. Celkem max. 100 MB, jeden soubor max. 5 MB.", "De valgte filer er for store. Højst 100 MB i alt og 5 MB pr. fil.", "De geselecteerde bestanden zijn te groot. Maximaal 100 MB totaal en 5 MB per bestand.", "The selected files are too large. Maximum 100 MB total and 5 MB per file.", "Valitut tiedostot ovat liian suuria. Enintään 100 Mt yhteensä ja 5 Mt tiedostoa kohti.", "Fichiers trop volumineux : 100 Mo au total et 5 Mo par fichier maximum.", "Die Dateien sind zu groß. Maximal 100 MB insgesamt und 5 MB pro Datei.", "Τα αρχεία είναι πολύ μεγάλα. Έως 100 MB συνολικά και 5 MB ανά αρχείο.", "A kiválasztott fájlok túl nagyok. Legfeljebb 100 MB összesen és 5 MB fájlonként.", "File terlalu besar. Maksimal 100 MB total dan 5 MB per file.", "I file sono troppo grandi. Massimo 100 MB totali e 5 MB per file.", "選択したファイルが大きすぎます。合計100 MB、各ファイル5 MBまでです。", "선택한 파일이 너무 큽니다. 전체 100MB, 파일당 5MB까지 가능합니다.", "De valgte filene er for store. Maks 100 MB totalt og 5 MB per fil.", "Wybrane pliki są za duże. Maksymalnie 100 MB łącznie i 5 MB na plik.", "Os arquivos são grandes demais. Máximo de 100 MB no total e 5 MB por arquivo.", "Os arquivos são grandes demais. Máximo de 100 MB no total e 5 MB por arquivo.", "Fișierele sunt prea mari. Maximum 100 MB în total și 5 MB per fișier.", "Выбранные файлы слишком велики. Общий размер не должен превышать 100 МБ, одного файла — 5 МБ.", "Los archivos son demasiado grandes. Máximo 100 MB en total y 5 MB por archivo.", "Los archivos son demasiado grandes. Máximo 100 MB en total y 5 MB por archivo.", "Filerna är för stora. Högst 100 MB totalt och 5 MB per fil.", "ไฟล์ใหญ่เกินไป จำกัดรวม 100 MB และไม่เกิน 5 MB ต่อไฟล์", "Dosyalar çok büyük. Toplam en fazla 100 MB, dosya başına 5 MB.", "Вибрані файли завеликі. Загалом не більше 100 МБ і 5 МБ на файл.", "Các tệp quá lớn. Tối đa 100 MB tổng cộng và 5 MB mỗi tệp."],
    settingsCombinedReport: ["Объединённый HTML-отчёт", "合并的 HTML 报告", "合併的 HTML 報告", "Sloučený HTML report", "Samlet HTML-rapport", "Gecombineerd HTML-rapport", "Combined HTML report", "Yhdistetty HTML-raportti", "Rapport HTML combiné", "Zusammengeführter HTML-Bericht", "Ενοποιημένη αναφορά HTML", "Egyesített HTML-jelentés", "Laporan HTML gabungan", "Report HTML unificato", "統合HTMLレポート", "통합 HTML 보고서", "Sammenslått HTML-rapport", "Połączony raport HTML", "Relatório HTML combinado", "Relatório HTML combinado", "Raport HTML combinat", "Объединённый HTML-отчёт", "Informe HTML combinado", "Informe HTML combinado", "Sammanslagen HTML-rapport", "รายงาน HTML ที่รวมแล้ว", "Birleştirilmiş HTML raporu", "Об’єднаний HTML-звіт", "Báo cáo HTML đã gộp"],
    settingsImport: ["Загрузить JSON-историю", "导入 JSON 历史记录", "匯入 JSON 歷史記錄", "Importovat historii JSON", "Importér JSON-historik", "JSON-geschiedenis importeren", "Import JSON history", "Tuo JSON-historia", "Importer l’historique JSON", "JSON-Verlauf importieren", "Εισαγωγή ιστορικού JSON", "JSON-előzmények importálása", "Impor riwayat JSON", "Importa cronologia JSON", "JSON履歴を読み込む", "JSON 기록 가져오기", "Importer JSON-historikk", "Importuj historię JSON", "Importar histórico JSON", "Importar histórico JSON", "Importă istoricul JSON", "Загрузить JSON-историю", "Importar historial JSON", "Importar historial JSON", "Importera JSON-historik", "นำเข้าประวัติ JSON", "JSON geçmişini içe aktar", "Імпортувати JSON-історію", "Nhập lịch sử JSON"],
    settingsImported: ["История объединена; повторы пропущены.", "历史记录已合并，重复项已跳过。", "歷史記錄已合併，重複項目已略過。", "Historie sloučena; duplicity byly přeskočeny.", "Historik flettet; dubletter blev sprunget over.", "Geschiedenis samengevoegd; duplicaten overgeslagen.", "History merged; duplicates were skipped.", "Historia yhdistetty; kaksoiskappaleet ohitettiin.", "Historique fusionné ; doublons ignorés.", "Verlauf zusammengeführt; Duplikate übersprungen.", "Το ιστορικό συγχωνεύτηκε· παραλείφθηκαν τα διπλότυπα.", "Előzmények egyesítve; az ismétlődések kihagyva.", "Riwayat digabung; duplikat dilewati.", "Cronologia unita; duplicati ignorati.", "履歴を統合し、重複項目はスキップしました。", "기록을 병합하고 중복 항목은 건너뛰었습니다.", "Historikken er slått sammen; duplikater ble hoppet over.", "Historia scalona; pominięto duplikaty.", "Histórico combinado; duplicados ignorados.", "Histórico combinado; duplicados ignorados.", "Istoric îmbinat; duplicatele au fost omise.", "История объединена; повторы пропущены.", "Historial combinado; se omitieron los duplicados.", "Historial combinado; se omitieron los duplicados.", "Historiken har slagits ihop; dubbletter hoppades över.", "รวมประวัติแล้ว โดยข้ามรายการซ้ำ", "Geçmiş birleştirildi; kopyalar atlandı.", "Історію об’єднано; дублікати пропущено.", "Đã gộp lịch sử; các mục trùng đã được bỏ qua."],
    settingsImportInvalid: ["Не удалось загрузить файл. Нужен корректный экспорт DemoScope JSON.", "无法导入文件。请使用有效的 DemoScope JSON 导出文件。", "無法匯入檔案。請使用有效的 DemoScope JSON 匯出檔案。", "Soubor nelze importovat. Vyberte platný export JSON z DemoScope.", "Filen kunne ikke importeres. Vælg en gyldig DemoScope JSON-eksport.", "Bestand importeren mislukt. Kies een geldige DemoScope JSON-export.", "Could not import file. Choose a valid DemoScope JSON export.", "Tiedoston tuonti epäonnistui. Valitse kelvollinen DemoScope JSON -vienti.", "Import impossible. Choisissez un export JSON DemoScope valide.", "Datei konnte nicht importiert werden. Wähle einen gültigen DemoScope-JSON-Export.", "Δεν ήταν δυνατή η εισαγωγή. Επιλέξτε έγκυρο αρχείο JSON του DemoScope.", "Nem sikerült importálni. Válassz érvényes DemoScope JSON-exportot.", "File gagal diimpor. Pilih ekspor JSON DemoScope yang valid.", "Impossibile importare il file. Scegli un export JSON DemoScope valido.", "読み込めません。有効なDemoScope JSONエクスポートを選択してください。", "파일을 가져오지 못했습니다. 올바른 DemoScope JSON 내보내기 파일을 선택하세요.", "Kunne ikke importere filen. Velg en gyldig DemoScope JSON-eksport.", "Nie udało się zaimportować pliku. Wybierz prawidłowy eksport JSON DemoScope.", "Não foi possível importar. Escolha um arquivo JSON válido do DemoScope.", "Não foi possível importar. Escolha um arquivo JSON válido do DemoScope.", "Importul a eșuat. Alege un export JSON DemoScope valid.", "Не удалось загрузить файл. Нужен корректный экспорт DemoScope JSON.", "No se pudo importar. Elige una exportación JSON válida de DemoScope.", "No se pudo importar. Elige una exportación JSON válida de DemoScope.", "Det gick inte att importera. Välj en giltig DemoScope JSON-export.", "นำเข้าไฟล์ไม่ได้ โปรดเลือกไฟล์ JSON ที่ส่งออกจาก DemoScope", "Dosya içe aktarılamadı. Geçerli bir DemoScope JSON dışa aktarımı seçin.", "Не вдалося імпортувати. Виберіть коректний експорт JSON DemoScope.", "Không thể nhập tệp. Hãy chọn bản xuất JSON DemoScope hợp lệ."],
    settingsClear: ["Очистить историю", "清除历史记录", "清除歷史記錄", "Smazat historii", "Ryd historik", "Geschiedenis wissen", "Clear history", "Tyhjennä historia", "Effacer l’historique", "Verlauf löschen", "Εκκαθάριση ιστορικού", "Előzmények törlése", "Hapus riwayat", "Cancella cronologia", "履歴を消去", "기록 삭제", "Tøm historikk", "Wyczyść historię", "Limpar histórico", "Limpar histórico", "Șterge istoricul", "Очистить историю", "Borrar historial", "Borrar historial", "Rensa historik", "ล้างประวัติ", "Geçmişi temizle", "Очистити історію", "Xóa lịch sử"],
    settingsClearConfirm: ["Удалить всю локальную историю? Это действие нельзя отменить.", "要删除全部本地历史记录吗？此操作无法撤销。", "要刪除所有本機歷史記錄嗎？此操作無法復原。", "Smazat celou místní historii? Tuto akci nelze vrátit.", "Slet al lokal historik? Dette kan ikke fortrydes.", "Alle lokale geschiedenis wissen? Dit kan niet ongedaan worden gemaakt.", "Delete all local history? This cannot be undone.", "Poistetaanko koko paikallinen historia? Tätä ei voi kumota.", "Supprimer tout l’historique local ? Cette action est irréversible.", "Den gesamten lokalen Verlauf löschen? Dies kann nicht rückgängig gemacht werden.", "Να διαγραφεί όλο το τοπικό ιστορικό; Δεν μπορεί να αναιρεθεί.", "Törlöd az összes helyi előzményt? Ez nem vonható vissza.", "Hapus semua riwayat lokal? Tindakan ini tidak dapat dibatalkan.", "Eliminare tutta la cronologia locale? L’operazione non può essere annullata.", "ローカル履歴をすべて削除しますか？この操作は元に戻せません。", "로컬 기록을 모두 삭제할까요? 이 작업은 되돌릴 수 없습니다.", "Slette all lokal historikk? Dette kan ikke angres.", "Usunąć całą lokalną historię? Tego nie można cofnąć.", "Apagar todo o histórico local? Esta ação não pode ser desfeita.", "Apagar todo o histórico local? Esta ação não pode ser desfeita.", "Ștergi tot istoricul local? Acțiunea nu poate fi anulată.", "Удалить всю локальную историю? Это действие нельзя отменить.", "¿Borrar todo el historial local? No se puede deshacer.", "¿Borrar todo el historial local? No se puede deshacer.", "Radera all lokal historik? Åtgärden kan inte ångras.", "ลบประวัติในเครื่องทั้งหมดหรือไม่ การดำเนินการนี้ย้อนกลับไม่ได้", "Tüm yerel geçmiş silinsin mi? Bu işlem geri alınamaz.", "Видалити всю локальну історію? Цю дію не можна скасувати.", "Xóa toàn bộ lịch sử cục bộ? Không thể hoàn tác thao tác này."],
    settingsCleared: ["Локальная история очищена.", "本地历史记录已清除。", "本機歷史記錄已清除。", "Místní historie byla smazána.", "Lokal historik er ryddet.", "Lokale geschiedenis gewist.", "Local history cleared.", "Paikallinen historia tyhjennetty.", "Historique local effacé.", "Lokaler Verlauf gelöscht.", "Το τοπικό ιστορικό διαγράφηκε.", "A helyi előzmények törölve.", "Riwayat lokal dihapus.", "Cronologia locale cancellata.", "ローカル履歴を消去しました。", "로컬 기록을 삭제했습니다.", "Lokal historikk tømt.", "Lokalna historia została wyczyszczona.", "Histórico local apagado.", "Histórico local apagado.", "Istoricul local a fost șters.", "Локальная история очищена.", "Historial local borrado.", "Historial local borrado.", "Lokal historik har rensats.", "ล้างประวัติในเครื่องแล้ว", "Yerel geçmiş temizlendi.", "Локальну історію очищено.", "Đã xóa lịch sử cục bộ."],
    settingsExported: ["История экспортирована.", "历史记录已导出。", "歷史記錄已匯出。", "Historie byla exportována.", "Historik eksporteret.", "Geschiedenis geëxporteerd.", "History exported.", "Historia viety.", "Historique exporté.", "Verlauf exportiert.", "Το ιστορικό εξήχθη.", "Előzmények exportálva.", "Riwayat diekspor.", "Cronologia esportata.", "履歴をエクスポートしました。", "기록을 내보냈습니다.", "Historikk eksportert.", "Historia wyeksportowana.", "Histórico exportado.", "Histórico exportado.", "Istoricul a fost exportat.", "История экспортирована.", "Historial exportado.", "Historial exportado.", "Historik exporterad.", "ส่งออกประวัติแล้ว", "Geçmiş dışa aktarıldı.", "Історію експортовано.", "Đã xuất lịch sử."],
    settingsTimeout: ["Следующий клип не загрузился. Проверьте соединение; вердикт не отправляется повторно автоматически.", "下一个片段未能加载。请检查连接；系统不会自动重复提交判定。", "下一段片段未能載入。請檢查連線；系統不會自動重複提交判定。", "Další klip se nenačetl. Zkontrolujte připojení; verdikt se automaticky znovu neodešle.", "Næste klip blev ikke indlæst. Tjek forbindelsen; afgørelsen sendes ikke igen automatisk.", "De volgende clip is niet geladen. Controleer je verbinding; het oordeel wordt niet automatisch opnieuw verzonden.", "The next clip did not load. Check your connection; the verdict will not be resubmitted automatically.", "Seuraava klippi ei latautunut. Tarkista yhteys; arviota ei lähetetä automaattisesti uudelleen.", "Le clip suivant n’a pas chargé. Vérifiez la connexion ; le verdict ne sera pas renvoyé automatiquement.", "Der nächste Clip wurde nicht geladen. Prüfe die Verbindung; das Urteil wird nicht automatisch erneut gesendet.", "Δεν φορτώθηκε το επόμενο κλιπ. Έλεγξε τη σύνδεση· η κρίση δεν θα υποβληθεί ξανά αυτόματα.", "A következő klip nem töltődött be. Ellenőrizd a kapcsolatot; az ítélet nem lesz automatikusan újraküldve.", "Klip berikutnya tidak dimuat. Periksa koneksi; vonis tidak akan dikirim ulang otomatis.", "La clip successiva non è stata caricata. Controlla la connessione; il verdetto non verrà reinviato automaticamente.", "次のクリップを読み込めませんでした。接続を確認してください。判定は自動で再送信されません。", "다음 클립을 불러오지 못했습니다. 연결을 확인하세요. 판정은 자동으로 다시 제출되지 않습니다.", "Neste klipp ble ikke lastet inn. Sjekk tilkoblingen; vurderingen sendes ikke inn på nytt automatisk.", "Nie udało się załadować kolejnego klipu. Sprawdź połączenie; werdykt nie zostanie wysłany ponownie automatycznie.", "O próximo clipe não carregou. Verifique a conexão; o veredito não será reenviado automaticamente.", "O próximo clipe não carregou. Verifique a conexão; o veredito não será reenviado automaticamente.", "Următorul clip nu s-a încărcat. Verifică conexiunea; verdictul nu va fi retrimis automat.", "Следующий клип не загрузился. Проверьте соединение; вердикт не отправляется повторно автоматически.", "No se cargó el siguiente clip. Comprueba la conexión; el veredicto no se enviará otra vez automáticamente.", "No se cargó el siguiente clip. Comprueba la conexión; el veredicto no se enviará otra vez automáticamente.", "Nästa klipp kunde inte laddas. Kontrollera anslutningen; bedömningen skickas inte automatiskt igen.", "โหลดคลิปถัดไปไม่สำเร็จ โปรดตรวจสอบการเชื่อมต่อ ระบบจะไม่ส่งคำตัดสินซ้ำโดยอัตโนมัติ", "Sonraki klip yüklenmedi. Bağlantını kontrol et; karar otomatik olarak yeniden gönderilmez.", "Наступний кліп не завантажився. Перевірте з’єднання; вердикт не буде надіслано повторно автоматично.", "Đoạn tiếp theo không tải được. Hãy kiểm tra kết nối; phán quyết sẽ không tự động gửi lại."],
  };

  function settingText(key) {
    const row = SETTINGS_TEXT_ROWS[key];
    const index = LOCALE_INDEX.indexOf(getActiveLocale());
    return row?.[index] || row?.[LOCALE_INDEX.indexOf("en")] || key;
  }

  function getSettingsHistorySummary() {
    const store = readClipHistoryStore();
    const entries = collectHistoryReportRows(store);
    const count = new Intl.NumberFormat(getActiveLocale()).format(entries.length);
    const latest = entries.reduce((max, entry) => Math.max(max, entry.ts), 0);
    return `${count} ${tr("historyCount")} · ${settingText("settingsHistoryLast")}: ${latest ? formatRelativeTime(latest) : "—"}`;
  }

  const SOUND_ENABLED_STORAGE_KEY = "demoscopeSoundEffectsEnabled";
  const SOUND_VOLUME_STORAGE_KEY = "demoscopeSoundEffectsVolume";
  const SETTINGS_HOTKEY_STORAGE_KEY = "demoscopeSettingsHotkey";
  const LOCAL_HISTORY_ENABLED_KEY = "demoscopeLocalHistoryEnabled";
  const TIME_FORMAT_KEY = "demoscopeLimitTimeFormat";
  const EMPTY_QUEUE_FIRST_SEEN_KEY = "demoscopeEmptyQueueFirstSeen";
  const EMPTY_QUEUE_LOCALE_KEY = "demoscopeEmptyQueueLocale";
  const FOOTER_HIDE_ALL_KEY = "demoscopeFooterHideAll";
  const FOOTER_HIDE_FEEDBACK_KEY = "demoscopeFooterHideFeedback";
  const FOOTER_HIDE_REPORT_KEY = "demoscopeFooterHideReport";
  const FOOTER_HIDE_COPYRIGHT_KEY = "demoscopeFooterHideCopyright";
  let settingsAudioContext = null;
  let isCapturingSettingsHotkey = false;
  let settingsReturnFocus = null;

  function soundsEnabled() {
    try { return localStorage.getItem(SOUND_ENABLED_STORAGE_KEY) !== "false"; }
    catch { return true; }
  }

  function getSoundVolume() {
    try {
      const stored = localStorage.getItem(SOUND_VOLUME_STORAGE_KEY);
      return stored === null ? 0.4 : Math.max(0, Math.min(100, Number(stored))) / 100;
    } catch { return 0.4; }
  }

  function playUiSound(kind = "click") {
    if (!soundsEnabled() || getSoundVolume() <= 0) return;
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    try {
      settingsAudioContext ||= new AudioContextClass();
      const context = settingsAudioContext;
      const notes = {
        click: [620], select: [520, 680], toggle: [440, 620],
        copy: [660, 880], confirm: [523, 659, 784], preview: [523, 659, 784], tick: [740],
        open: [523, 784], close: [784, 523], error: [392, 330],
      }[kind] || [620];
      const startAt = context.currentTime + 0.012;
      const volume = Math.max(0.0001, getSoundVolume() * 0.045);
      notes.forEach((frequency, index) => {
        const start = startAt + index * 0.075;
        const oscillator = context.createOscillator();
        const gain = context.createGain();
        oscillator.type = "sine";
        oscillator.frequency.setValueAtTime(frequency, start);
        oscillator.frequency.exponentialRampToValueAtTime(frequency * 1.025, start + 0.055);
        gain.gain.setValueAtTime(0.0001, start);
        gain.gain.exponentialRampToValueAtTime(volume, start + 0.012);
        gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.09);
        oscillator.connect(gain);
        gain.connect(context.destination);
        oscillator.start(start);
        oscillator.stop(start + 0.1);
      });
      if (context.state === "suspended") void context.resume();
    } catch { /* Audio is optional and must never block a review action. */ }
  }

  function readSettingsHotkey() {
    try {
      const stored = localStorage.getItem(SETTINGS_HOTKEY_STORAGE_KEY);
      if (stored === "none") return "";
      return stored && /^[A-Z][A-Za-z0-9]+$/.test(stored) ? stored : "F2";
    } catch { return "F2"; }
  }

  function formatHotkey(code) {
    if (code.startsWith("Key")) return code.slice(3);
    if (code.startsWith("Digit")) return code.slice(5);
    if (code.startsWith("Numpad")) return "Num " + code.slice(6);
    return code;
  }

  function getSettingsHotkeyCode(event) {
    if (event.code && event.code !== "Unidentified" && /^[A-Za-z][A-Za-z0-9]*$/.test(event.code)) {
      return event.code;
    }
    const key = String(event.key || "").toLocaleLowerCase();
    const layoutCodes = {
      "й": "KeyQ", "ц": "KeyW", "у": "KeyE", "к": "KeyR", "е": "KeyT", "н": "KeyY", "г": "KeyU", "ш": "KeyI", "щ": "KeyO", "з": "KeyP", "х": "BracketLeft", "ъ": "BracketRight",
      "ф": "KeyA", "ы": "KeyS", "в": "KeyD", "а": "KeyF", "п": "KeyG", "р": "KeyH", "о": "KeyJ", "л": "KeyK", "д": "KeyL", "ж": "Semicolon", "э": "Quote", "ё": "Backquote",
      "я": "KeyZ", "ч": "KeyX", "с": "KeyC", "м": "KeyV", "и": "KeyB", "т": "KeyN", "ь": "KeyM", "б": "Comma", "ю": "Period",
      "і": "KeyS", "ї": "BracketRight", "є": "Quote", "ґ": "Backquote",
    };
    if (layoutCodes[key]) return layoutCodes[key];
    if (/^[a-z]$/.test(key)) return `Key${key.toUpperCase()}`;
    if (/^[0-9]$/.test(key)) return `Digit${key}`;
    if (/^F(?:[1-9]|1[0-2])$/.test(key.toUpperCase())) return key.toUpperCase();
    return "";
  }

  function isReservedSettingsHotkey(code) {
    return Boolean(validateKeyForAction("settings", normalizeKeyCode(code)));
  }

  function exportLocalHistory() {
    const store = readClipHistoryStore();
    if (!Object.keys(store).length) {
      showToast(tr("historyEmpty"), "info", 2600);
      return;
    }
    const content = JSON.stringify({
      format: "DemoScope local review history",
      version: 1,
      exportedAt: new Date().toISOString(),
      history: store,
    }, null, 2);
    downloadHistoryFile(content, "demoscope-history-" + new Date().toISOString().slice(0, 10) + ".json", "application/json");
    showToast(settingText("settingsExported"), "success");
  }

  function downloadHistoryFile(content, filename, mimeType) {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = filename;
    anchor.hidden = true;
    document.body.append(anchor);
    anchor.click();
    anchor.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  function collectHistoryReportRows(store) {
    const rows = new Map();
    for (const [key, entries] of Object.entries(store)) {
      const vodId = key.startsWith(GAME_HISTORY_KEY_PREFIX)
        ? key.slice(GAME_HISTORY_KEY_PREFIX.length)
        : key.split(":")[0];
      if (!vodId) continue;
      for (const entry of readHistoryEntries(store, key)) {
        const identity = `${vodId}:${historyEntryKey(entry)}`;
        if (!rows.has(identity)) rows.set(identity, { vodId, ...entry });
      }
    }
    return [...rows.values()].sort((a, b) => b.ts - a.ts);
  }

  function exportReadableHistory() {
    const rows = collectHistoryReportRows(readClipHistoryStore());
    if (!rows.length) {
      showToast(tr("historyEmpty"), "info", 2600);
      return;
    }
    const title = settingText("settingsHistory");
    const report = buildReadableHistoryReport(rows, title);
    const languageCode = getActiveLocale().replace(/[^A-Za-z0-9-]/g, "") || "en";
    downloadHistoryFile(report, "demoscope-history-report-" + languageCode + "-" + new Date().toISOString().slice(0, 10) + ".html", "text/html;charset=utf-8");
    showToast(settingText("settingsExported"), "success");
  }

  function buildReadableHistoryReport(rows, reportTitle, summaryNote = "") {
    const dateFormatter = new Intl.DateTimeFormat(getActiveLocale(), { dateStyle: "medium", timeStyle: "short" });
    const cards = rows.map((entry) => `
      <article class="review">
        <time datetime="${new Date(entry.ts).toISOString()}">${escapeHtml(dateFormatter.format(new Date(entry.ts)))}</time>
        <strong>${escapeHtml(formatSummaryLabel(entry.summary))}</strong>
        <span>${escapeHtml(tr("gameLabel"))} ${escapeHtml(formatClipId(entry.vodId))}</span>
        <span>${escapeHtml(tr("clipLabel"))} · ${escapeHtml(entry.segment || "—")}</span>
      </article>`).join("");
    const title = escapeHtml(reportTitle);
    const privacyNote = escapeHtml(settingText("settingsHistoryPrivacy"));
    return `<!doctype html><html lang="${escapeHtml(getActiveLocale())}"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title} · DemoScope</title><style>
      :root{color-scheme:dark;font:16px/1.5 system-ui,-apple-system,"Segoe UI",sans-serif;background:#090d13;color:#e8edf5}*{box-sizing:border-box}body{max-width:900px;margin:0 auto;padding:clamp(18px,5vw,48px)}header{margin-bottom:24px;padding:24px;border:1px solid #29313d;border-radius:16px;background:linear-gradient(145deg,#151e2a,#0e131b)}h1{margin:0 0 6px;font-size:clamp(1.4rem,4vw,2rem)}header p{margin:0;color:#99a8ba}main{display:grid;gap:10px}.review{display:grid;grid-template-columns:minmax(150px,1fr) minmax(120px,1fr);gap:5px 14px;padding:15px 17px;border:1px solid #252e39;border-radius:12px;background:#10161f}.review time{color:#91a0b2;font-size:.85rem}.review strong{justify-self:end;color:#ffb654}.review span{color:#c8d1dc;font-size:.9rem}footer{margin-top:20px;color:#7f8da0;font-size:.82rem}@media(max-width:520px){.review{grid-template-columns:1fr}.review strong{justify-self:start}.review time{order:0}}@media print{body{max-width:none;padding:0;background:#fff;color:#111}:root{color-scheme:light}.review,header{break-inside:avoid;background:#fff;border-color:#bbb}.review strong,header p,footer,.review time,.review span{color:#333}}
      </style><body><header><h1>${title}</h1><p>${privacyNote}</p>${summaryNote ? `<p>${escapeHtml(summaryNote)}</p>` : ""}<p>${new Intl.NumberFormat(getActiveLocale()).format(rows.length)} ${escapeHtml(tr("historyCount"))}</p></header><main>${cards}</main><footer>DemoScope · ${escapeHtml(new Intl.DateTimeFormat(getActiveLocale(), { dateStyle: "medium", timeStyle: "short" }).format(new Date()))}</footer></body></html>`;
  }

  function setMergeReportStatus(statusElement, message, state) {
    statusElement.textContent = message;
    statusElement.dataset.state = state;
  }

  async function exportCombinedHistoryReports(files, statusElement, button) {
    const filesArray = Array.from(files || []);
    if (!filesArray.length) return;
    const totalBytes = filesArray.reduce((sum, file) => sum + file.size, 0);
    if (totalBytes > 100 * 1024 * 1024 || filesArray.some((file) => file.size > 5 * 1024 * 1024)) {
      setMergeReportStatus(statusElement, settingText("settingsMergeTooLarge"), "warning");
      return;
    }

    button.disabled = true;
    const entriesByIdentity = new Map();
    let importedFiles = 0;
    let skippedFiles = 0;
    let duplicateEntries = 0;
    const yieldToBrowser = () => new Promise((resolve) => window.setTimeout(resolve, 0));
    setMergeReportStatus(statusElement, settingText("settingsMergeProgress")
      .replace("{done}", "0")
      .replace("{total}", String(filesArray.length)), "progress");

    try {
      await yieldToBrowser();
      for (let index = 0; index < filesArray.length; index += 1) {
        const file = filesArray[index];
        try {
          if (file.size > 5 * 1024 * 1024) throw new Error("File is too large");
          const parsed = JSON.parse(await file.text());
          if (parsed?.format !== "DemoScope local review history" ||
              parsed?.version !== 1 || !parsed.history || typeof parsed.history !== "object" || Array.isArray(parsed.history)) {
            throw new Error("Unsupported history format");
          }
          let foundEntries = false;
          for (const [key, values] of Object.entries(parsed.history)) {
            if (!isSafeHistoryKey(key) || !Array.isArray(values)) continue;
            const vodId = key.startsWith(GAME_HISTORY_KEY_PREFIX)
              ? key.slice(GAME_HISTORY_KEY_PREFIX.length)
              : key.split(":")[0];
            if (!vodId) continue;
            for (const rawEntry of values) {
              const entry = normalizeHistoryEntry(rawEntry);
              if (!entry) continue;
              foundEntries = true;
              const identity = `${vodId}:${historyEntryKey(entry)}`;
              if (entriesByIdentity.has(identity)) duplicateEntries += 1;
              else entriesByIdentity.set(identity, { vodId, ...entry });
            }
          }
          if (foundEntries) importedFiles += 1;
          else skippedFiles += 1;
        } catch {
          skippedFiles += 1;
        }

        if ((index + 1) % 10 === 0 || index === filesArray.length - 1) {
          setMergeReportStatus(statusElement, settingText("settingsMergeProgress")
            .replace("{done}", String(index + 1))
            .replace("{total}", String(filesArray.length)), "progress");
          await yieldToBrowser();
        }
      }

      const rows = [...entriesByIdentity.values()].sort((a, b) => b.ts - a.ts);
      if (!rows.length) {
        setMergeReportStatus(statusElement, settingText("settingsMergeEmpty"), "warning");
        return;
      }
      const completedText = settingText("settingsMergeComplete")
        .replace("{files}", String(importedFiles))
        .replace("{skipped}", String(skippedFiles))
        .replace("{records}", String(rows.length))
        .replace("{duplicates}", String(duplicateEntries));
      const report = buildReadableHistoryReport(rows, settingText("settingsCombinedReport"), completedText);
      const languageCode = getActiveLocale().replace(/[^A-Za-z0-9-]/g, "") || "en";
      downloadHistoryFile(report, "demoscope-combined-report-" + languageCode + "-" + new Date().toISOString().slice(0, 10) + ".html", "text/html;charset=utf-8");
      setMergeReportStatus(statusElement, completedText, skippedFiles ? "warning" : "success");
      playUiSound("confirm");
    } finally {
      button.disabled = false;
    }
  }

  function isSafeHistoryKey(key) {
    return key !== "__proto__" && key !== "constructor" && key !== "prototype" &&
      /^(?:game::)?[A-Za-z0-9_-]{1,180}(?::[0-9]+(?:\.[0-9]+)?:[0-9]+(?:\.[0-9]+)?)?$/.test(key);
  }

  async function importLocalHistory(file) {
    try {
      if (!file || file.size > 5 * 1024 * 1024) throw new Error("Invalid file size");
      const parsed = JSON.parse(await file.text());
      if (parsed?.format !== "DemoScope local review history" || parsed?.version !== 1 ||
          !parsed.history || typeof parsed.history !== "object" || Array.isArray(parsed.history)) {
        throw new Error("Unsupported history format");
      }
      const incoming = {};
      for (const [key, values] of Object.entries(parsed.history)) {
        if (!isSafeHistoryKey(key) || !Array.isArray(values)) continue;
        const entries = values.map(normalizeHistoryEntry).filter(Boolean);
        if (entries.length) incoming[key] = entries;
      }
      if (!Object.keys(incoming).length) throw new Error("No valid entries");

      const merged = readClipHistoryStore();
      for (const [key, values] of Object.entries(incoming)) {
        const combined = [...readHistoryEntries(merged, key), ...values];
        const unique = new Map(combined.map((entry) => [historyEntryKey(entry), entry]));
        const limit = getHistoryPerKeyLimit();
        merged[key] = [...unique.values()].sort((a, b) => a.ts - b.ts).slice(-limit);
      }
      if (!writeClipHistoryStore(merged)) throw new Error("Could not save history");
      renderClipHistory(parseSegmentBounds());
      const dialog = document.getElementById("vacnet-settings-dialog");
      dialog?.querySelector("[data-history-stats]")?.replaceChildren(document.createTextNode(getSettingsHistorySummary()));
      showToast(settingText("settingsImported"), "success", 3600);
    } catch {
      showToast(settingText("settingsImportInvalid"), "error", 4200);
    }
  }

  function ensureSettingsDialog() {
    let dialog = document.getElementById("vacnet-settings-dialog");
    if (dialog instanceof HTMLDialogElement) return dialog;
    dialog = document.createElement("dialog");
    dialog.id = "vacnet-settings-dialog";
    dialog.setAttribute("aria-labelledby", "vacnet-settings-title");
    dialog.innerHTML = '<div class="demoscope-settings-shell">' +
      '<header class="demoscope-settings-head"><div><p class="demoscope-settings-kicker">DEMOSCOPE</p><h2 id="vacnet-settings-title"></h2></div><button class="demoscope-settings-close" type="button"></button></header>' +
      '<section class="demoscope-settings-section"><h3 data-label="sound"></h3><label class="demoscope-settings-toggle"><input id="demoscope-settings-sound-enabled" type="checkbox"><span></span></label><label class="demoscope-settings-range"><span></span><input id="demoscope-settings-volume" type="range" min="0" max="100" step="1"><input id="demoscope-settings-volume-number" type="number" min="0" max="100" step="1"><span aria-hidden="true">%</span></label><p class="demoscope-settings-help" data-volume-hint></p><button id="demoscope-settings-preview" class="demoscope-settings-secondary" type="button"></button></section>' +
      '<section class="demoscope-settings-section demoscope-settings-shortcut-section"><h3 data-label="shortcut"></h3><p class="demoscope-settings-current"><kbd id="demoscope-settings-current-key">F2</kbd></p><p id="demoscope-settings-key-status" class="demoscope-settings-help" role="status" aria-live="polite"></p><div class="demoscope-settings-actions"><button id="demoscope-settings-change-key" class="demoscope-settings-secondary" type="button"></button><button id="demoscope-settings-reset-defaults" class="demoscope-settings-secondary" type="button"></button></div></section>' +
      '<section class="demoscope-settings-section"><h3 data-label="history"></h3><label class="demoscope-settings-toggle"><input id="demoscope-settings-history-enabled" type="checkbox"><span data-history-enabled-label></span></label><p class="demoscope-settings-help" data-history-disabled-note></p><p class="demoscope-settings-help" data-history-note></p><label class="demoscope-settings-limit-controls demoscope-time-format"><span data-time-format-label></span><select id="demoscope-settings-time-format"></select></label><p class="demoscope-settings-help" data-time-format-help></p><p class="demoscope-settings-help" data-history-limit></p><div class="demoscope-settings-limit-controls"><label><span data-history-per-key-label></span><select id="demoscope-settings-per-game-limit"></select></label><label><span data-history-total-label></span><select id="demoscope-settings-total-limit"></select></label></div><p class="demoscope-settings-history-stats" data-history-stats></p><p class="demoscope-settings-help" data-merge-report-description></p><p class="demoscope-settings-help" data-merge-report-status role="status" aria-live="polite"></p><input id="demoscope-settings-import-file" type="file" accept=".json,application/json" hidden><input id="demoscope-settings-merge-report-files" type="file" accept=".json,application/json" multiple hidden><div class="demoscope-settings-actions"><button id="demoscope-settings-import" class="demoscope-settings-secondary" type="button"></button><button id="demoscope-settings-export" class="demoscope-settings-secondary" type="button"></button><button id="demoscope-settings-export-report" class="demoscope-settings-secondary" type="button"></button><button id="demoscope-settings-merge-report" class="demoscope-settings-secondary" type="button"></button><button id="demoscope-settings-clear" class="demoscope-settings-danger" type="button"></button></div></section>' +
      '<section class="demoscope-settings-section"><h3 data-label="footer"></h3><label class="demoscope-settings-toggle"><input id="demoscope-settings-footer-hide-feedback" type="checkbox"><span data-footer-feedback-label></span></label><label class="demoscope-settings-toggle"><input id="demoscope-settings-footer-hide-report" type="checkbox"><span data-footer-report-label></span></label><label class="demoscope-settings-toggle"><input id="demoscope-settings-footer-hide-copyright" type="checkbox"><span data-footer-copyright-label></span></label><label class="demoscope-settings-toggle"><input id="demoscope-settings-footer-hide-all" type="checkbox"><span data-footer-hide-all-label></span></label></section></div>';
    document.body.append(dialog);

    GM_addStyle(
      '#vacnet-settings-dialog{box-sizing:border-box;width:min(620px,calc(100vw - 20px));max-width:none;max-height:86vh;max-height:min(86vh,calc(100dvh - 20px));padding:0;overflow:auto;border:1px solid rgba(226,235,246,.16);border-radius:17px;background:#0e131b;color:#f4f7fb;box-shadow:0 28px 90px #000a;font:500 .9rem/1.5 system-ui,-apple-system,"Segoe UI",sans-serif}' +
      '#vacnet-settings-dialog::backdrop{background:rgba(2,4,8,.72);backdrop-filter:blur(8px)}' +
      '.demoscope-settings-shell{padding:clamp(18px,4vw,28px)}.demoscope-settings-head{display:flex;align-items:center;justify-content:space-between;gap:18px;margin-bottom:18px}' +
      '.demoscope-settings-kicker{margin:0 0 3px;color:#f2a33a;font-size:.68rem;font-weight:800;letter-spacing:.15em}.demoscope-settings-head h2{margin:0;font-size:1.35rem;line-height:1.2}' +
      '.demoscope-settings-close{display:grid;place-items:center;width:38px;height:38px;border:1px solid rgba(226,235,246,.15);border-radius:10px;background:#141b25;color:#d7e0ec;font-size:1.25rem;cursor:pointer}.demoscope-settings-close::before{content:"×"}' +
      '.demoscope-settings-section{margin-top:12px;padding:16px;border:1px solid rgba(226,235,246,.1);border-radius:12px;background:#0a0e14}.demoscope-settings-section h3{margin:0 0 12px;color:#f2a33a;font-size:.77rem;letter-spacing:.09em;text-transform:uppercase}' +
      '.demoscope-settings-toggle,.demoscope-settings-range{display:flex;align-items:center;gap:10px;color:#c4cedb}.demoscope-settings-toggle input{width:17px;height:17px;accent-color:#f2a33a}.demoscope-settings-range{margin-top:13px}.demoscope-settings-range input[type="range"]{flex:1;min-width:90px;accent-color:#f2a33a}.demoscope-settings-range input[type="number"]{box-sizing:border-box;width:66px;min-height:32px;padding:0 6px;border:1px solid rgba(226,235,246,.16);border-radius:7px;background:#141b25;color:#fff;font:600 .8rem ui-monospace,monospace}' +
      '.demoscope-settings-current{margin:0 0 8px}.demoscope-settings-current kbd{display:inline-block;min-width:48px;padding:5px 10px;border:1px solid rgba(226,235,246,.2);border-radius:7px;background:#18212d;color:#fff;text-align:center;font:700 .9rem ui-monospace,monospace}.demoscope-settings-help{margin:0 0 8px;color:#8795a8;font-size:.8rem}.demoscope-settings-limit-controls{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin:10px 0}.demoscope-settings-limit-controls label{display:grid;gap:5px;color:#c4cedb;font-size:.78rem}.demoscope-settings-limit-controls select{min-height:36px;padding:0 9px;border:1px solid rgba(226,235,246,.16);border-radius:8px;background:#141b25;color:#f4f7fb;font:600 .82rem system-ui,sans-serif}.demoscope-settings-history-stats{margin:0 0 13px;color:#c8d1dc;font-size:.8rem;font-variant-numeric:tabular-nums}#vacnet-settings-dialog [data-merge-report-status][data-state="progress"]{color:#82baff}#vacnet-settings-dialog [data-merge-report-status][data-state="success"]{color:#65d89a}#vacnet-settings-dialog [data-merge-report-status][data-state="warning"]{color:#f2bd68}.demoscope-settings-shortcut-section .demoscope-settings-current,.demoscope-settings-shortcut-section #demoscope-settings-key-status{text-align:center}.demoscope-settings-shortcut-section .demoscope-settings-actions{justify-content:center}' +
      '.demoscope-settings-actions{display:flex;flex-wrap:wrap;gap:9px}.demoscope-settings-secondary,.demoscope-settings-danger{min-height:39px;padding:0 13px;border:1px solid rgba(226,235,246,.16);border-radius:9px;background:#17202b;color:#e8edf5;font:650 .8rem system-ui,sans-serif;cursor:pointer}.demoscope-settings-danger{border-color:rgba(255,101,119,.34);color:#ff8794}' +
      '.demoscope-settings-secondary:hover,.demoscope-settings-close:hover{border-color:rgba(242,163,58,.6);color:#ffb654}.demoscope-settings-danger:hover{background:rgba(255,101,119,.12)}' +
      '.demoscope-settings-trigger{display:inline-flex;align-items:center;justify-content:center;gap:7px;min-height:34px;padding:0 10px;border:1px solid rgba(226,235,246,.15);border-radius:9px;background:#141b25;color:#dbe3ed;font:650 .76rem system-ui,sans-serif;cursor:pointer}.demoscope-settings-trigger:hover{border-color:rgba(242,163,58,.55);color:#ffb654}.demoscope-settings-trigger svg{width:16px;height:16px}' +
      '#vacnet-settings-dialog :is(button,input):focus-visible,.demoscope-settings-trigger:focus-visible{outline:2px solid #ffb654;outline-offset:3px}' +
      '@media(max-width:520px){.demoscope-settings-shell{padding:16px}.demoscope-settings-section{padding:13px}.demoscope-settings-actions{flex-direction:column}.demoscope-settings-actions button{width:100%}.demoscope-settings-range{flex-wrap:wrap}.demoscope-settings-range input[type="range"]{min-width:calc(100% - 70px);order:3;flex-basis:100%}.demoscope-settings-limit-controls{grid-template-columns:1fr}}@media(prefers-reduced-motion:reduce){#vacnet-settings-dialog *{scroll-behavior:auto!important;animation:none!important;transition:none!important}}',
    );

    installExtraSettingsSections(dialog);

    const enabledInput = dialog.querySelector("#demoscope-settings-sound-enabled");
    const volumeInput = dialog.querySelector("#demoscope-settings-volume");
    const volumeNumber = dialog.querySelector("#demoscope-settings-volume-number");
    let lastVolumePreviewAt = 0;
    const status = dialog.querySelector("#demoscope-settings-key-status");
    const changeKeyButton = dialog.querySelector("#demoscope-settings-change-key");
    const updateLabels = () => {
      dialog.querySelector("#vacnet-settings-title").textContent = settingText("settingsTitle");
      dialog.querySelector(".demoscope-settings-close").textContent = "";
      dialog.querySelector(".demoscope-settings-close").setAttribute("aria-label", settingText("settingsClose"));
      dialog.querySelector('[data-label="sound"]').textContent = settingText("settingsSound");
      dialog.querySelector(".demoscope-settings-toggle span").textContent = settingText("settingsSoundEnabled");
      dialog.querySelector(".demoscope-settings-range span").textContent = settingText("settingsVolume");
      dialog.querySelector("[data-volume-hint]").textContent = settingText("settingsVolumeHint");
      volumeNumber.setAttribute("aria-label", settingText("settingsVolume"));
      dialog.querySelector("#demoscope-settings-preview").textContent = settingText("settingsPreview");
      dialog.querySelector('[data-label="shortcut"]').textContent = settingText("settingsShortcut");
      changeKeyButton.textContent = settingText("settingsChangeKey");
      dialog.querySelector("#demoscope-settings-reset-defaults").textContent = settingText("settingsResetDefaults");
      dialog.querySelector('[data-label="history"]').textContent = settingText("settingsHistory");
      dialog.querySelector("[data-history-enabled-label]").textContent = settingText("settingsHistoryEnabled");
      dialog.querySelector("[data-history-disabled-note]").textContent = settingText("settingsHistoryDisabledNote");
      dialog.querySelector("[data-time-format-label]").textContent = settingText("settingsLimitTimeFormat");
      dialog.querySelector("[data-time-format-help]").textContent = settingText("settingsTimeHelp");
      dialog.querySelector("[data-label=footer]").textContent = settingText("settingsFooter");
      dialog.querySelector("[data-footer-feedback-label]").textContent = settingText("settingsFooterFeedback");
      dialog.querySelector("[data-footer-report-label]").textContent = settingText("settingsFooterReport");
      dialog.querySelector("[data-footer-copyright-label]").textContent = settingText("settingsFooterCopyright");
      dialog.querySelector("[data-footer-hide-all-label]").textContent = settingText("settingsFooterHideAll");
      dialog.querySelector("[data-history-note]").textContent = settingText("settingsHistoryPrivacy");
      dialog.querySelector("[data-history-limit]").textContent = settingText("settingsHistoryLimit").replace("{perKey}", String(getHistoryPerKeyLimit())).replace("{total}", String(getHistoryTotalLimit()));
      dialog.querySelector("[data-history-per-key-label]").textContent = settingText("settingsPerGameLimit");
      dialog.querySelector("[data-history-total-label]").textContent = settingText("settingsTotalLimit");
      dialog.querySelector("[data-history-stats]").textContent = getSettingsHistorySummary();
      dialog.querySelector("[data-merge-report-description]").textContent = settingText("settingsMergeReportDescription");
      dialog.querySelector("#demoscope-settings-import").textContent = settingText("settingsImport");
      dialog.querySelector("#demoscope-settings-export").textContent = settingText("settingsExport");
      dialog.querySelector("#demoscope-settings-export-report").textContent = settingText("settingsExportReport");
      dialog.querySelector("#demoscope-settings-merge-report").textContent = settingText("settingsMergeReport");
      dialog.querySelector("#demoscope-settings-clear").textContent = settingText("settingsClear");
    };
    const updateValues = () => {
      enabledInput.checked = soundsEnabled();
      volumeInput.value = String(Math.round(getSoundVolume() * 100));
      volumeNumber.value = volumeInput.value;
      dialog.querySelector("#demoscope-settings-current-key").textContent = formatHotkey(readSettingsHotkey());
      if (!isCapturingSettingsHotkey) status.textContent = "";
    };
    updateLabels();
    updateValues();
    const perGameLimitSelect = dialog.querySelector("#demoscope-settings-per-game-limit");
    const totalLimitSelect = dialog.querySelector("#demoscope-settings-total-limit");
    const historyEnabledInput = dialog.querySelector("#demoscope-settings-history-enabled");
    const timeFormatSelect = dialog.querySelector("#demoscope-settings-time-format");
    const timeFormatOptions = [["auto", "settingsTimeAuto"], ["12", "settingsTime12"], ["24", "settingsTime24"]];
    for (const [value, labelKey] of timeFormatOptions) timeFormatSelect.add(new Option(settingText(labelKey), value));
    timeFormatSelect.value = readTimeFormat();
    historyEnabledInput.checked = isLocalHistoryEnabled();
    const footerToggleSettings = [
      ["#demoscope-settings-footer-hide-feedback", FOOTER_HIDE_FEEDBACK_KEY],
      ["#demoscope-settings-footer-hide-report", FOOTER_HIDE_REPORT_KEY],
      ["#demoscope-settings-footer-hide-copyright", FOOTER_HIDE_COPYRIGHT_KEY],
    ];
    for (const [selector, storageKey] of footerToggleSettings) {
      const input = dialog.querySelector(selector);
      input.checked = readFooterPreference(storageKey);
      input.addEventListener("change", () => {
        saveFooterPreference(storageKey, input.checked);
        applyFooterPreferences();
        playUiSound("toggle");
      });
    }
    const hideAllFooterInput = dialog.querySelector("#demoscope-settings-footer-hide-all");
    hideAllFooterInput.checked = readFooterPreference(FOOTER_HIDE_ALL_KEY);
    hideAllFooterInput.addEventListener("change", () => {
      saveFooterPreference(FOOTER_HIDE_ALL_KEY, hideAllFooterInput.checked);
      applyFooterPreferences();
      playUiSound("toggle");
    });
    historyEnabledInput.addEventListener("change", () => {
      try { localStorage.setItem(LOCAL_HISTORY_ENABLED_KEY, String(historyEnabledInput.checked)); } catch { /* Current page preference still applies. */ }
      renderClipHistory(parseSegmentBounds());
      playUiSound("toggle");
    });
    timeFormatSelect.addEventListener("change", () => {
      try { localStorage.setItem(TIME_FORMAT_KEY, timeFormatSelect.value); } catch { /* Current page preference still applies. */ }
      updateEmptyQueueTimestamp();
      playUiSound("select");
    });
    for (const value of HISTORY_PER_KEY_OPTIONS) perGameLimitSelect.add(new Option(String(value), String(value)));
    for (const value of HISTORY_TOTAL_OPTIONS) totalLimitSelect.add(new Option(String(value), String(value)));
    perGameLimitSelect.value = String(getHistoryPerKeyLimit());
    totalLimitSelect.value = String(getHistoryTotalLimit());
    const saveHistoryLimits = () => {
      try {
        localStorage.setItem(HISTORY_PER_KEY_STORAGE_KEY, perGameLimitSelect.value);
        localStorage.setItem(HISTORY_TOTAL_STORAGE_KEY, totalLimitSelect.value);
      } catch { /* The current page can still apply limits without persistence. */ }
      const store = readClipHistoryStore();
      const saved = writeClipHistoryStore(store);
      dialog.querySelector("[data-history-limit]").textContent = settingText("settingsHistoryLimit").replace("{perKey}", String(getHistoryPerKeyLimit())).replace("{total}", String(getHistoryTotalLimit()));
      dialog.querySelector("[data-history-stats]").textContent = getSettingsHistorySummary();
      renderClipHistory(parseSegmentBounds());
      if (!saved) showToast(settingText("settingsHistorySaveFailed"), "error", 3600);
      else playUiSound("confirm");
    };
    perGameLimitSelect.addEventListener("change", saveHistoryLimits);
    totalLimitSelect.addEventListener("change", saveHistoryLimits);
    dialog.querySelector(".demoscope-settings-close").addEventListener("click", () => dialog.close());
    dialog.addEventListener("click", (event) => { if (event.target === dialog) dialog.close(); });
    dialog.addEventListener("close", () => {
      isCapturingSettingsHotkey = false;
      playUiSound("close");
      if (settingsReturnFocus instanceof HTMLElement && settingsReturnFocus.isConnected) settingsReturnFocus.focus();
    });
    enabledInput.addEventListener("change", () => {
      try { localStorage.setItem(SOUND_ENABLED_STORAGE_KEY, String(enabledInput.checked)); } catch { /* Retain in-page behavior without storage. */ }
      if (enabledInput.checked) playUiSound("toggle");
    });
    const saveVolume = (rawValue, preview = true) => {
      const parsed = Number(rawValue);
      if (!Number.isFinite(parsed)) return;
      const value = Math.round(Math.max(0, Math.min(100, parsed)));
      volumeInput.value = String(value);
      volumeNumber.value = String(value);
      try { localStorage.setItem(SOUND_VOLUME_STORAGE_KEY, String(value)); } catch { /* Ignore unavailable storage. */ }
      const now = Date.now();
      if (preview && now - lastVolumePreviewAt >= 90) {
        lastVolumePreviewAt = now;
        playUiSound("tick");
      }
    };
    volumeInput.addEventListener("input", () => saveVolume(volumeInput.value));
    volumeNumber.addEventListener("input", () => {
      if (volumeNumber.value === "") return;
      const value = Math.round(Math.max(0, Math.min(100, Number(volumeNumber.value))));
      volumeInput.value = String(value);
    });
    volumeNumber.addEventListener("change", () => {
      const value = volumeNumber.value === "" ? Math.round(getSoundVolume() * 100) : volumeNumber.value;
      saveVolume(value);
    });
    dialog.querySelector(".demoscope-settings-range").addEventListener("wheel", (event) => {
      if (!(event.target instanceof HTMLInputElement) || !event.target.matches("#demoscope-settings-volume, #demoscope-settings-volume-number") || event.ctrlKey || event.deltaY === 0) return;
      event.preventDefault();
      const step = event.shiftKey ? 10 : 5;
      const direction = event.deltaY < 0 ? 1 : -1;
      saveVolume(Number(volumeInput.value) + direction * step);
    }, { passive: false });
    dialog.querySelector("#demoscope-settings-preview").addEventListener("click", () => playUiSound("preview"));
    changeKeyButton.addEventListener("click", () => {
      playUiSound("click");
      isCapturingSettingsHotkey = true;
      status.textContent = settingText("settingsPressKey");
      changeKeyButton.textContent = settingText("settingsPressKey");
    });
    dialog.querySelector("#demoscope-settings-reset-defaults").addEventListener("click", () => {
      if (!window.confirm(settingText("settingsResetConfirmAll"))) return;
      try {
        localStorage.removeItem(SOUND_ENABLED_STORAGE_KEY);
        localStorage.removeItem(SOUND_VOLUME_STORAGE_KEY);
        localStorage.removeItem(SETTINGS_HOTKEY_STORAGE_KEY);
      } catch { /* Defaults still take effect for this page load. */ }
      resetAllBindings();
      [ANIM_ENABLED_KEY, ANIM_STYLE_KEY, ANIM_SPEED_KEY].forEach((key) => writeStorage(key, null));
      applyAnimationSettings();
      document.getElementById("vacnet-animations-dialog")?.demoscopeSync?.();
      refreshKeyLabels();
      enabledInput.checked = true;
      volumeInput.value = "40";
      volumeNumber.value = "40";
      dialog.querySelector("#demoscope-settings-current-key").textContent = "F2";
      status.textContent = settingText("settingsResetDone");
      changeKeyButton.textContent = settingText("settingsChangeKey");
      playUiSound("confirm");
    });
    dialog.querySelector("#demoscope-settings-import").addEventListener("click", () => dialog.querySelector("#demoscope-settings-import-file").click());
    dialog.querySelector("#demoscope-settings-import-file").addEventListener("change", (event) => {
      const file = event.currentTarget.files?.[0];
      if (file) void importLocalHistory(file);
      event.currentTarget.value = "";
    });
    dialog.querySelector("#demoscope-settings-export").addEventListener("click", exportLocalHistory);
    dialog.querySelector("#demoscope-settings-export-report").addEventListener("click", exportReadableHistory);
    const mergeReportInput = dialog.querySelector("#demoscope-settings-merge-report-files");
    const mergeReportButton = dialog.querySelector("#demoscope-settings-merge-report");
    const mergeReportStatus = dialog.querySelector("[data-merge-report-status]");
    mergeReportButton.addEventListener("click", () => mergeReportInput.click());
    mergeReportInput.addEventListener("change", () => {
      const files = Array.from(mergeReportInput.files || []);
      mergeReportInput.value = "";
      void exportCombinedHistoryReports(files, mergeReportStatus, mergeReportButton)
        .catch(() => setMergeReportStatus(mergeReportStatus, settingText("settingsMergeFailed"), "warning"));
    });
    dialog.querySelector("#demoscope-settings-clear").addEventListener("click", () => {
      if (!window.confirm(settingText("settingsClearConfirm"))) return;
      try { localStorage.removeItem(CLIP_HISTORY_STORAGE_KEY); } catch { /* Ignore unavailable storage. */ }
      renderClipHistory(parseSegmentBounds());
      dialog.querySelector("[data-history-stats]").textContent = getSettingsHistorySummary();
      showToast(settingText("settingsCleared"), "success");
    });
    return dialog;
  }

  // ---------------------------------------------------------------------------
  // Resilience: isolated steps, lookups with fallbacks, a graceful "switch off"
  // when the page is unrecognizable, and a diagnostics report for bug reports.
  // ---------------------------------------------------------------------------
  const SCRIPT_VERSION = "1.2.0";
  const diag = { failures: [], disabled: "", originalSkeleton: "", events: [] };

  // Notable runtime events for the diagnostics report (kept short and capped).
  function recordEvent(kind, detail = "") {
    diag.events.push({ at: Math.round(performance.now()), kind, detail: String(detail).slice(0, 180) });
    if (diag.events.length > 25) diag.events.shift();
  }

  // Uncaught errors on the page. They may come from VACNet's own scripts, not
  // from DemoScope, so the report labels them that way.
  function installErrorCapture() {
    if (diag.errorCaptureInstalled) return;
    diag.errorCaptureInstalled = true;
    window.addEventListener("error", (event) => {
      const where = String(event.filename || "").split("/").pop().split("?")[0] || "unknown file";
      recordEvent("page error", `${event.message || "error"} (${where}:${event.lineno || 0})`);
    });
    window.addEventListener("unhandledrejection", (event) => {
      const reason = event.reason;
      recordEvent("unhandled rejection", (reason && reason.message) || reason || "unknown");
    });
  }

  function recordFailure(step, error) {
    const message = String((error && error.message) || error).slice(0, 160);
    diag.failures.push({ step, message });
    if (diag.failures.length > 40) diag.failures.shift();
    console.warn(LOG_PREFIX, `step "${step}" failed:`, error);
  }

  // One broken step must not stop the ones after it.
  function safeStep(step, fn, fallback) {
    try { return fn(); } catch (error) { recordFailure(step, error); return fallback; }
  }

  function getVideoContainer() {
    const direct = document.querySelector(".videocontainer") || document.querySelector("[class*='videocontainer' i]");
    if (direct) return direct;
    const video = document.querySelector("video");
    if (!video) return null;
    return (video.closest(".video-js") || video).parentElement;
  }

  function getVerdictContainer() {
    const direct = document.querySelector(".verdicts-container");
    if (direct) return direct;
    const block = document.querySelector(".verdict-block, .verdictbuttons");
    if (!block) return null;
    const inner = block.closest(".verdicts-container-inner");
    return (inner || block).parentElement;
  }

  function getSubmitArea() {
    const direct = document.getElementById("submitbuttons") || document.querySelector(".submitbuttons");
    if (direct) return direct;
    return document.getElementById("submitVerdictButton")?.parentElement || null;
  }

  function hasVerdictForm() {
    return Boolean(document.querySelector('.verdictbuttons input[type="radio"]'));
  }

  function removeEnhancements() {
    document.body.classList.remove("vacnet-enhanced", "vacnet-cheating-task");
    ["vacnet-clip-history", "vacnet-shift-speed", "vacnet-enhance-bar", "vacnet-controls", "vacnet-submit-loading", "vacnet-review-rules"]
      .forEach((id) => document.getElementById(id)?.remove());
    document.querySelectorAll(".footer-container.vacnet-footer-hidden").forEach((el) => {
      el.classList.remove("vacnet-footer-hidden");
      el.style.removeProperty("display");
    });
    document.querySelectorAll(".demoscope-custom-footer").forEach((el) => el.remove());
  }

  // The page no longer looks like something DemoScope understands: leave Valve's
  // own page untouched, keep only the settings window (with diagnostics).
  function disableDemoScope(reason) {
    diag.disabled = reason;
    recordEvent("switched off", reason);
    safeStep("removeEnhancements", removeEnhancements);
    document.documentElement.dataset.dsDisabled = "1";
    safeStep("hideLoading", () => { if (isSubmitPending()) hideSubmitLoadingOverlay(); });
    safeStep("settingsUi", installSettingsUi);
    let alreadyShown = false;
    try {
      alreadyShown = sessionStorage.getItem("demoscopeDisabledNotice") === reason;
      sessionStorage.setItem("demoscopeDisabledNotice", reason);
    } catch { /* Show the notice anyway. */ }
    if (!alreadyShown) safeStep("notice", () => showToast(settingText("dsDisabledNotice"), "error", 9000));
  }

  function isOwnNode(el) {
    const id = el.id || "";
    const cls = typeof el.className === "string" ? el.className : "";
    return /^(vacnet|demoscope|ds-)/.test(id) || /(^|\s)(vacnet|demoscope|ds-)/.test(cls);
  }

  function elementSignature(el) {
    const tag = el.tagName.toLowerCase();
    const id = el.id && !/\d{4,}/.test(el.id) ? `#${el.id}` : "";
    const classes = Array.from(el.classList).filter((name) => !/^(vacnet|demoscope|ds-)/.test(name)).slice(0, 3).map((name) => `.${name}`).join("");
    const extra = [];
    if (el instanceof HTMLInputElement) extra.push(`[${el.type}${el.name ? ` name=${el.name}` : ""}${el.disabled ? " disabled" : ""}]`);
    if (el instanceof HTMLButtonElement || el instanceof HTMLAnchorElement) {
      const onclick = el.getAttribute("onclick");
      if (onclick) extra.push(`[onclick=${onclick.slice(0, 32)}]`);
      if (el instanceof HTMLAnchorElement && el.getAttribute("href")) extra.push(`[href=${el.getAttribute("href").split("?")[0].slice(0, 40)}]`);
    }
    if (el.hasAttribute("hidden")) extra.push("[hidden]");
    return `${tag}${id}${classes}${extra.join("")}`;
  }

  // Tags, ids and classes only - never text - so the report holds no personal data.
  function skeletonOf(root, maxDepth = 7, maxNodes = 170) {
    const lines = [];
    let count = 0;
    const skip = /^(SCRIPT|STYLE|LINK|META|SVG|PATH|NOSCRIPT|TEMPLATE)$/i;
    const walk = (el, depth) => {
      if (count >= maxNodes) return;
      const pad = "  ".repeat(depth);
      lines.push(pad + elementSignature(el));
      count += 1;
      if (el.classList.contains("video-js")) { lines[lines.length - 1] += " (player internals skipped)"; return; }
      const kids = Array.from(el.children).filter((kid) => !skip.test(kid.tagName) && !isOwnNode(kid));
      if (depth >= maxDepth) { if (kids.length) lines.push(`${pad}  … ${kids.length} children`); return; }
      let i = 0;
      while (i < kids.length && count < maxNodes) {
        const signature = elementSignature(kids[i]);
        let j = i;
        while (j + 1 < kids.length && elementSignature(kids[j + 1]) === signature) j += 1;
        if (j > i) { lines.push(`${pad}  ${signature} ×${j - i + 1}`); count += 1; } else walk(kids[i], depth + 1);
        i = j + 1;
      }
    };
    walk(root, 0);
    if (count >= maxNodes) lines.push("… (truncated)");
    return lines.join("\n");
  }

  function captureOriginalSkeleton() {
    const root = document.querySelector(".page-container") || document.querySelector("main") || document.body;
    diag.originalSkeleton = safeStep("skeleton", () => skeletonOf(root), "");
  }

  function buildDiagnosticsReport() {
    const lines = [];
    const add = (text = "") => lines.push(text);
    const pathKind = /\/vacnet\/createinvite/.test(location.pathname) ? "invite" : /\/vacnet\/?$/.test(location.pathname) ? "welcome" : "review";
    const language = new URLSearchParams(location.search).get("l");
    const task = isCheatingMode() ? "single question (cheating)" : document.querySelector('input[name="aimassist"]') ? "classic (four questions)" : "unknown";
    add("DemoScope diagnostics");
    add(`version: ${SCRIPT_VERSION}`);
    add(`time: ${new Date().toISOString()}`);
    add(`page: ${location.origin}${location.pathname}${language ? `?l=${language}` : ""}`);
    add(`locale: ${getActiveLocale()} | browser language: ${navigator.language} | agent: ${navigator.userAgent}`);
    add(`page kind: ${pathKind} | task: ${task}`);
    add(`switched off: ${diag.disabled || "no"}`);
    safeStep("reportEnvironment", () => {
      const manager = typeof GM_info !== "undefined" && GM_info ? `${GM_info.scriptHandler || "userscript manager"} ${GM_info.version || ""}`.trim() : "unknown (GM_info unavailable)";
      const media = (query) => (window.matchMedia ? window.matchMedia(query).matches : false);
      add(`userscript manager: ${manager}`);
      add(`viewport: ${window.innerWidth}x${window.innerHeight} @${window.devicePixelRatio}x | screen: ${screen.width}x${screen.height} | dark scheme: ${media("(prefers-color-scheme: dark)")} | reduced motion: ${media("(prefers-reduced-motion: reduce)")}`);
      add(`html: data-ds-anim=${document.documentElement.dataset.dsAnim || "-"} data-ds-disabled=${document.documentElement.dataset.dsDisabled || "-"} | body classes: ${Array.from(document.body.classList).join(" ") || "-"}`);
    });
    add();
    add("settings (non-sensitive):");
    safeStep("reportSettings", () => {
      const changedKeys = KEY_ACTIONS.filter((action) => getBinding(action.id) !== action.def).map((action) => `${action.id}=${getBinding(action.id) || "unassigned"}`);
      let soundEnabled = "default"; let soundVolume = "default"; let languageMode = "default";
      try {
        soundEnabled = localStorage.getItem(SOUND_ENABLED_STORAGE_KEY) ?? "default";
        soundVolume = localStorage.getItem(SOUND_VOLUME_STORAGE_KEY) ?? "default";
        languageMode = localStorage.getItem(LANGUAGE_AUTO_STORAGE_KEY) === "true" ? "automatic" : `manual (${localStorage.getItem(LANGUAGE_STORAGE_KEY) || "none saved"})`;
      } catch { /* storage unavailable */ }
      add(`  language: ${languageMode} | sound: ${soundEnabled}, volume ${soundVolume} | history: ${isLocalHistoryEnabled() ? "on" : "off"}`);
      add(`  animations: ${animEnabled() ? `on (${animStyle()}, ${animSpeedKey()})` : "off"}`);
      add(`  hotkeys changed from default: ${changedKeys.length ? changedKeys.join(", ") : "none"}`);
    });
    add();
    add("player:");
    safeStep("reportPlayer", () => {
      const videos = document.querySelectorAll("video");
      const video = videos[0];
      add(`  video elements: ${videos.length} | Video.js loaded: ${typeof PAGE.videojs === "function" ? "yes" : "no"} | player instance: ${getVjsPlayer() ? "yes" : "no"}`);
      if (video) {
        let source = "none";
        try { const u = new URL(video.currentSrc || video.src, location.href); source = `${u.hostname}${u.pathname.match(/\.[a-z0-9]{2,4}$/i)?.[0] || ""}`; } catch { /* no usable source */ }
        add(`  state: readyState ${video.readyState}, networkState ${video.networkState}, duration ${Number.isFinite(video.duration) ? video.duration.toFixed(1) : video.duration}s, time ${video.currentTime.toFixed(1)}s, paused ${video.paused}, muted ${video.muted}, rate ${video.playbackRate}x`);
        add(`  source: ${source}`);
      }
    });
    add();
    add("checks (what the script expects on the page):");
    const checks = [
      ["video container", () => getVideoContainer()], ["video element", () => document.querySelectorAll("video")],
      ["verdict column", () => document.querySelectorAll(".verdict-column")], ["verdicts container", () => document.querySelectorAll(".verdicts-container")],
      ["verdict blocks", () => document.querySelectorAll(".verdict-block")], ["verdict radios", () => document.querySelectorAll('.verdictbuttons input[type="radio"]')],
      ["submit area", () => getSubmitArea()], ["submit button", () => document.getElementById("submitVerdictButton"), () => (isCheatingMode() ? "appears after a verdict is chosen" : "")],
      ["back button", () => document.getElementById("backbutton"), () => (isCheatingMode() ? "appears after a verdict is chosen" : "")], ["submit hint", () => document.getElementById("submithint")],
      ["submit form", () => document.getElementById("submitverdictform")], ["page header", () => document.querySelector(".PageHeader")],
      ["clip counter", () => document.querySelector(".ClipCount")], ["panel header", () => document.querySelector(".panel-header")],
      ["task instructions", () => document.querySelector(".task-instructions")], ["review layout", () => document.querySelector(".review-layout")],
      ["single-question block", () => document.getElementById("verdictbuttons_cheating")], ["classic aim input", () => document.querySelector('input[name="aimassist"]'), () => (isCheatingMode() ? "not used by the single-question task" : "")],
      ["invite link", () => document.querySelector(".invite-link-p, .demoscope-invite-card"), () => (pathKind !== "invite" ? "invite page only" : "")],
      ["DemoScope panel", () => document.getElementById("vacnet-clip-history")], ["DemoScope controls", () => document.getElementById("vacnet-controls")],
      ["DemoScope quick verdicts", () => document.getElementById("vacnet-enhance-bar"), () => (isCheatingMode() ? "not used by the single-question task" : "")],
    ];
    for (const [name, probe, normalAbsence] of checks) {
      let result;
      try { result = probe(); } catch { result = null; }
      const count = result && typeof result.length === "number" ? result.length : result ? 1 : 0;
      if (!count && normalAbsence) {
        const note = normalAbsence();
        if (note) { add(`  absent  ${name} (${note})`); continue; }
      }
      add(`  ${count ? "ok     " : "MISSING"} ${name}${count > 1 ? ` (${count})` : ""}`);
    }
    add();
    add(`step failures: ${diag.failures.length}`);
    diag.failures.forEach((failure) => add(`  ${failure.step}: ${failure.message}`));
    add();
    add(`recent events and page errors (page errors may come from VACNet's own scripts): ${diag.events.length}`);
    diag.events.forEach((event) => add(`  +${event.at}ms ${event.kind}${event.detail ? `: ${event.detail}` : ""}`));
    add();
    add("page structure before DemoScope changed it:");
    add(diag.originalSkeleton || "  (not captured on this page)");
    add();
    add("page structure now:");
    add(safeStep("skeletonNow", () => skeletonOf(document.querySelector(".page-container") || document.body), "  (failed)"));
    return lines.join("\n");
  }

  function fallbackCopyText(text) {
    try {
      const area = document.createElement("textarea");
      area.value = text;
      area.style.cssText = "position:fixed;opacity:0;pointer-events:none;";
      document.body.append(area);
      area.select();
      const ok = document.execCommand("copy");
      area.remove();
      return ok;
    } catch { return false; }
  }

  async function copyDiagnostics(statusEl, textarea) { // resolves to true when the clipboard got the report
    const text = buildDiagnosticsReport();
    let copied = false;
    try { await navigator.clipboard.writeText(text); copied = true; } catch { copied = fallbackCopyText(text); }
    if (copied) {
      statusEl.textContent = fmt(settingText("diagCopied"), { n: text.split("\n").length });
      textarea.hidden = true;
      playUiSound("confirm");
    } else {
      statusEl.textContent = settingText("diagFailed");
      textarea.value = text;
      textarea.hidden = false;
      textarea.select();
    }
    return copied;
  }

  // ---------------------------------------------------------------------------
  // Configurable hotkeys: one registry for every action, user overrides stored
  // in localStorage, conflict detection shared by all editing UIs.
  // ---------------------------------------------------------------------------
  const KEYBINDINGS_STORAGE_KEY = "demoscopeKeybindings";
  const KEY_GROUPS = ["player", "navigation", "verdicts", "submit", "invite", "interface"];
  const KEY_ACTIONS = [
    { id: "playPause", group: "player", def: "Space" },
    { id: "mute", group: "player", def: "KeyM" },
    { id: "fullscreen", group: "player", def: "KeyF" },
    { id: "seekBack", group: "navigation", def: "ArrowLeft" },
    { id: "seekForward", group: "navigation", def: "ArrowRight" },
    { id: "frameBack", group: "navigation", def: "Comma" },
    { id: "frameForward", group: "navigation", def: "Period" },
    { id: "speedBoost", group: "navigation", def: "Shift" },
    { id: "quick1", group: "verdicts", def: "Digit1" },
    { id: "quick2", group: "verdicts", def: "Digit2" },
    { id: "quick3", group: "verdicts", def: "Digit3" },
    { id: "quick4", group: "verdicts", def: "Digit4" },
    { id: "quick5", group: "verdicts", def: "Digit5" },
    { id: "proceed", group: "submit", def: "Enter" },
    { id: "cancel", group: "submit", def: "Escape" },
    { id: "inviteDone", group: "invite", def: "Enter" },
    { id: "inviteClose", group: "invite", def: "Escape" },
    { id: "settings", group: "interface", def: "F2" },
  ];
  const KEY_ACTION_BY_ID = new Map(KEY_ACTIONS.map((action) => [action.id, action]));
  // Keys only clash inside one page: the invite page has no player, so Enter and
  // Esc can mean something else there. "global" actions clash with everything.
  const KEY_ACTION_SCOPE = { inviteDone: "invite", inviteClose: "invite", settings: "global" };
  function keyScopeOf(id) { return KEY_ACTION_SCOPE[id] || "review"; }
  function keyScopesOverlap(a, b) { return a === b || a === "global" || b === "global"; }
  function currentKeyScope() {
    return document.body && document.body.classList.contains("vacnet-invite-page") ? "invite" : "review";
  }
  const RESERVED_KEY_CODES = new Set([
    "Tab", "Control", "Alt", "Meta", "CapsLock", "ContextMenu",
    "F5", "F11", "F12", "Unidentified", "Dead",
  ]);
  let keyCaptureActive = false;
  let keybindingCache = null;

  function fmt(template, vars = {}) {
    return String(template).replace(/\{(\w+)\}/g, (match, name) =>
      Object.prototype.hasOwnProperty.call(vars, name) ? vars[name] : match);
  }

  function isModalOpen() {
    return Boolean(document.querySelector("dialog[open]"));
  }

  // Left/right modifiers count as one key; the numpad mirrors the main row.
  function normalizeKeyCode(code) {
    if (!code) return "";
    if (code === "ShiftLeft" || code === "ShiftRight") return "Shift";
    if (code === "ControlLeft" || code === "ControlRight") return "Control";
    if (code === "AltLeft" || code === "AltRight") return "Alt";
    if (code === "MetaLeft" || code === "MetaRight") return "Meta";
    if (code === "NumpadEnter") return "Enter";
    const numpad = code.match(/^Numpad([0-9])$/);
    if (numpad) return `Digit${numpad[1]}`;
    return code;
  }

  function formatKeyLabel(code) {
    if (!code) return "";
    const special = {
      Space: "Space", ArrowLeft: "←", ArrowRight: "→", ArrowUp: "↑", ArrowDown: "↓",
      Comma: ",", Period: ".", Slash: "/", Backslash: "\\", Semicolon: ";", Quote: "'",
      BracketLeft: "[", BracketRight: "]", Minus: "-", Equal: "=", Backquote: "`",
      Escape: "Esc", Backspace: "⌫", Enter: "Enter", Shift: "Shift",
      NumpadAdd: "Num +", NumpadSubtract: "Num -", NumpadMultiply: "Num *",
      NumpadDivide: "Num /", NumpadDecimal: "Num .",
    };
    if (special[code]) return special[code];
    if (/^Key[A-Z]$/.test(code)) return code.slice(3);
    if (/^Digit[0-9]$/.test(code)) return code.slice(5);
    if (/^Numpad/.test(code)) return `Num ${code.slice(6)}`;
    return code;
  }

  function loadKeyOverrides() {
    if (keybindingCache) return keybindingCache;
    const result = {};
    try {
      const parsed = JSON.parse(localStorage.getItem(KEYBINDINGS_STORAGE_KEY) || "{}");
      if (parsed && typeof parsed === "object") {
        for (const [id, value] of Object.entries(parsed)) {
          if (id === "settings" || !KEY_ACTION_BY_ID.has(id)) continue;
          if (typeof value === "string" && /^[A-Za-z0-9]*$/.test(value)) result[id] = value;
        }
      }
    } catch { /* Ignore broken or unavailable storage. */ }
    keybindingCache = result;
    return result;
  }

  function saveKeyOverrides(overrides) {
    keybindingCache = overrides;
    try {
      if (Object.keys(overrides).length) {
        localStorage.setItem(KEYBINDINGS_STORAGE_KEY, JSON.stringify(overrides));
      } else {
        localStorage.removeItem(KEYBINDINGS_STORAGE_KEY);
      }
    } catch { /* The new binding stays active until the page reloads. */ }
  }

  function getBinding(id) {
    const action = KEY_ACTION_BY_ID.get(id);
    if (!action) return "";
    if (id === "settings") return readSettingsHotkey();
    const overrides = loadKeyOverrides();
    return Object.prototype.hasOwnProperty.call(overrides, id) ? overrides[id] : action.def;
  }

  function setBinding(id, code) {
    const action = KEY_ACTION_BY_ID.get(id);
    if (!action) return;
    if (id === "settings") {
      try {
        if (code === action.def) localStorage.removeItem(SETTINGS_HOTKEY_STORAGE_KEY);
        else localStorage.setItem(SETTINGS_HOTKEY_STORAGE_KEY, code || "none");
      } catch { /* Keep going without storage. */ }
      return;
    }
    const overrides = { ...loadKeyOverrides() };
    if (code === action.def) delete overrides[id];
    else overrides[id] = code;
    saveKeyOverrides(overrides);
  }

  function resetAllBindings() {
    saveKeyOverrides({});
    try { localStorage.removeItem(SETTINGS_HOTKEY_STORAGE_KEY); } catch { /* ignore */ }
  }

  function findKeyConflict(id, code) {
    if (!code) return null;
    return KEY_ACTIONS.find((action) =>
      action.id !== id && getBinding(action.id) === code &&
      keyScopesOverlap(keyScopeOf(action.id), keyScopeOf(id))) || null;
  }

  function getActionForEvent(event, scope = currentKeyScope()) {
    const code = normalizeKeyCode(event.code);
    if (!code) return null;
    const action = KEY_ACTIONS.find((item) =>
      getBinding(item.id) === code && keyScopesOverlap(keyScopeOf(item.id), scope));
    return action ? action.id : null;
  }

  // "" when the key can be assigned, otherwise why not.
  function validateKeyForAction(id, code) {
    if (!code || RESERVED_KEY_CODES.has(code)) return "reserved";
    if (code === "Shift" && id !== "speedBoost") return "shift";
    return "";
  }

  function quickRangeLabel(count) {
    const codes = Array.from({ length: count }, (_, index) => getBinding(`quick${index + 1}`));
    if (codes.every((code, index) => code === `Digit${index + 1}`)) return `1–${count}`;
    return codes.filter(Boolean).map(formatKeyLabel).join(" ") || "–";
  }

  function buildHintsInnerMarkup() {
    const cheating = isCheatingMode();
    const label = (id) => escapeHtml(formatKeyLabel(getBinding(id)) || "–");
    const proceed = formatKeyLabel(getBinding("proceed")) || "–";
    return `
        <span><kbd>${escapeHtml(cheating ? proceed : `${proceed} ×2`)}</kbd> ${tr("submitHint")}</span>
        <span><kbd>${escapeHtml(quickRangeLabel(cheating ? 3 : 5))}</kbd> ${tr(cheating ? "quickVerdict" : "presetsHint")}</span>
        <span><kbd>${label("speedBoost")}</kbd> ${tr("accelerateHint")}</span>
        <span><kbd>${label("seekBack")} ${label("seekForward")}</kbd> ±5 ${tr("seconds")}</span>
        <span><kbd>${label("frameBack")} ${label("frameForward")}</kbd> ${tr("framesHint")}</span>
        <span><kbd>${label("playPause")}</kbd> ${tr("pauseHint")}</span>
        <span><kbd>${label("mute")}</kbd> ${tr("muteHint")}</span>
        <span><kbd>${label("fullscreen")}</kbd> ${tr("fullscreenHint")}</span>
      `;
  }

  // Everything on the page that shows a key name is refreshed from here.
  function refreshKeyLabels() {
    const hints = document.querySelector("#vacnet-controls .vacnet-hints");
    if (hints) hints.innerHTML = buildHintsInnerMarkup();

    const quickByPreset = { botaimwh: 1, aimwh: 2, rage: 3, legit: 4, uncertain: 5 };
    document.querySelectorAll("#vacnet-enhance-bar .vacnet-enhance-bar-presets button[data-preset]").forEach((button) => {
      const index = quickByPreset[button.dataset.preset];
      const kbd = button.querySelector("kbd");
      if (index && kbd) kbd.textContent = formatKeyLabel(getBinding(`quick${index}`)) || "–";
    });
    const barHint = document.querySelector("#vacnet-enhance-bar .vacnet-enhance-bar-hint");
    if (barHint) barHint.textContent = tr("keys").replace(/1\s*[–-]\s*5/, quickRangeLabel(5));

    localizeCheatingVerdicts();
    refreshProceedButtonLabel();
    refreshInviteKeyLabels();
    refreshSettingsSummaries();
  }

  function refreshCancelButtonLabel() {
    const back = document.getElementById("backbutton");
    if (!(back instanceof HTMLButtonElement)) return;
    const code = getBinding("cancel");
    let kbd = back.querySelector(".vacnet-cancel-kbd");
    if (!code) { kbd?.remove(); return; }
    const label = formatKeyLabel(code);
    if (!kbd) {
      kbd = document.createElement("kbd");
      kbd.className = "vacnet-cancel-kbd";
      back.append(document.createTextNode(" "), kbd);
    }
    if (kbd.textContent !== label) kbd.textContent = label;
  }

  function invokeCancelAction() {
    if (proceedArmed) {
      resetProceedArmed();
      playUiSound("click");
      return true;
    }
    const back = document.getElementById("backbutton");
    if (
      !(back instanceof HTMLButtonElement) || back.disabled || back.hidden ||
      back.style.display === "none" || back.offsetParent === null
    ) return false;
    playUiSound("click");
    back.click();
    return true;
  }

  window.addEventListener("storage", (event) => {
    if (event.key !== KEYBINDINGS_STORAGE_KEY && event.key !== SETTINGS_HOTKEY_STORAGE_KEY) return;
    keybindingCache = null;
    refreshKeyLabels();
  });

  // New settings strings. Only English and Russian are written out; every
  // other language falls back to English through settingText().
  (function addExtraSettingsText() {
    const enIndex = LOCALE_INDEX.indexOf("en");
    const ruIndex = LOCALE_INDEX.indexOf("ru");
    const add = (key, en, ru) => {
      const row = new Array(LOCALE_INDEX.length).fill("");
      row[enIndex] = en;
      row[ruIndex] = ru;
      SETTINGS_TEXT_ROWS[key] = row;
    };

    // Entry points in the settings window
    add("hkOpenNote", "Reassign any key. You are warned before a key that is already in use is replaced.", "Назначайте любые клавиши. Если клавиша уже занята, вас предупредят до замены.");
    add("hkOpenButton", "Customize hotkeys", "Настроить клавиши");
    add("anOpenNote", "Style, speed and on/off switch for the DemoScope indicator, with live previews.", "Стиль, скорость и включение индикатора DemoScope с живым предпросмотром.");
    add("anOpenButton", "Animation settings", "Настройки анимации");

    // Hotkeys window
    add("hkTitle", "Hotkeys", "Горячие клавиши");
    add("hkIntro", "Click a key to change it, then press the new key. If it is already used, you will see where before anything is replaced.", "Нажмите на клавишу, чтобы изменить её, затем нажмите новую. Если она уже занята, вы увидите, где именно, прежде чем что-то заменится.");
    add("hkChangeAria", "Change key: {action}", "Изменить клавишу: {action}");
    add("hkPress", "Press a key…", "Нажмите клавишу…");
    add("hkCancel", "Cancel", "Отмена");
    add("hkResetOne", "Reset to default ({key})", "Сбросить по умолчанию ({key})");
    add("hkResetAll", "Reset all", "Сбросить всё");
    add("hkResetAllConfirm", "Click again to reset all", "Нажмите ещё раз, чтобы сбросить всё");
    add("hkClose", "Close", "Закрыть");
    add("hkNotSet", "Not set", "Не назначено");
    add("hkChanged", "Changed", "Изменено");
    add("hkConflictTitle", "This key is already in use", "Эта клавиша уже занята");
    add("hkConflictBody", "{key} is assigned to “{action}” ({group}). {desc}", "{key} уже назначена на «{action}» ({group}). {desc}");
    add("hkConflictHelp", "Replace: “{other}” will have no key.", "Заменить: у «{other}» не останется клавиши.");
    add("hkConflictHelpSwap", "Replace: “{other}” will have no key. Swap: “{other}” gets {prev}.", "Заменить: у «{other}» не останется клавиши. Поменять: «{other}» получит {prev}.");
    add("hkReplace", "Replace", "Заменить");
    add("hkSwap", "Swap", "Поменять");
    add("hkReserved", "This key can’t be used: it is reserved by the browser or needed for navigation.", "Эту клавишу нельзя использовать: она зарезервирована браузером или нужна для навигации.");
    add("hkShiftOnly", "Shift can only be used for the hold action “Speed boost”.", "Shift можно использовать только для удерживаемого действия «Ускорение».");
    add("hkSaved", "{action}: {key}", "{action}: {key}");
    add("hkCleared", "“{action}” is now unassigned.", "У «{action}» больше нет клавиши.");
    add("hkResetDone", "All hotkeys are back to their defaults.", "Все клавиши возвращены к значениям по умолчанию.");
    add("hkUnchanged", "No change.", "Без изменений.");
    add("hkConflictShort", "“{key}” is already used for “{action}”. Change it in Hotkeys.", "«{key}» уже используется для «{action}». Измените это в «Горячих клавишах».");

    add("hkGroup_player", "Playback", "Воспроизведение");
    add("hkGroup_navigation", "Navigation", "Навигация");
    add("hkGroup_verdicts", "Verdicts", "Вердикты");
    add("hkGroup_submit", "Submission", "Отправка");
    add("hkGroup_interface", "Interface", "Интерфейс");

    add("hkName_playPause", "Play / pause", "Воспроизведение / пауза");
    add("hkDesc_playPause", "Pauses the clip or resumes playback.", "Ставит клип на паузу или продолжает воспроизведение.");
    add("hkName_mute", "Sound on / off", "Звук вкл. / выкл.");
    add("hkDesc_mute", "Mutes or unmutes the clip.", "Выключает или включает звук клипа.");
    add("hkName_fullscreen", "Fullscreen", "Полный экран");
    add("hkDesc_fullscreen", "Enters or leaves fullscreen mode.", "Включает или выключает полноэкранный режим.");
    add("hkName_seekBack", "Rewind", "Назад");
    add("hkDesc_seekBack", "Jumps 5 seconds back.", "Перематывает на 5 секунд назад.");
    add("hkName_seekForward", "Forward", "Вперёд");
    add("hkDesc_seekForward", "Jumps 5 seconds forward.", "Перематывает на 5 секунд вперёд.");
    add("hkName_frameBack", "Previous frame", "Предыдущий кадр");
    add("hkDesc_frameBack", "Steps back one frame.", "Шаг на один кадр назад.");
    add("hkName_frameForward", "Next frame", "Следующий кадр");
    add("hkDesc_frameForward", "Steps forward one frame.", "Шаг на один кадр вперёд.");
    add("hkName_speedBoost", "Speed boost (hold)", "Ускорение (удерживать)");
    add("hkDesc_speedBoost", "Plays faster while the key is held. The speed is chosen in the panel.", "Ускоряет воспроизведение, пока клавиша зажата. Скорость выбирается в панели.");
    for (let n = 1; n <= 5; n += 1) {
      add(`hkName_quick${n}`, `Quick verdict ${n}`, `Быстрый вердикт ${n}`);
    }
    add("hkDescQuick", "Classic form: {a}. Single-question task: {b}.", "Классическая форма: {a}. Задание с одним вопросом: {b}.");
    add("hkDescQuickClassicOnly", "Classic form: {a}. Not used in the single-question task.", "Классическая форма: {a}. В задании с одним вопросом не используется.");
    add("hkName_proceed", "Confirm / submit", "Подтвердить / отправить");
    add("hkDesc_proceed", "Confirms the verdict and moves on. In the classic form press it twice: first arm, then send.", "Подтверждает вердикт и переходит дальше. В классической форме нажимается дважды: сначала подготовка, затем отправка.");
    add("hkName_cancel", "Cancel verdict", "Отменить вердикт");
    add("hkDesc_cancel", "Presses “Cancel” while a verdict waits for confirmation, or disarms the first Enter press.", "Нажимает «Отмена», пока вердикт ждёт подтверждения, или снимает первое нажатие Enter.");
    add("hkName_settings", "DemoScope settings", "Настройки DemoScope");
    add("hkDesc_settings", "Opens or closes the settings window.", "Открывает или закрывает окно настроек.");

    // Animation window
    add("anTitle", "Animations", "Анимации");
    add("anIntro", "Choose how the DemoScope indicator looks. Previews play live.", "Выберите вид индикатора DemoScope. Предпросмотр проигрывается вживую.");
    add("anEnabled", "Enable animations", "Включить анимации");
    add("anSpeed", "Speed", "Скорость");
    add("anSlow", "Slow", "Медленно");
    add("anNormal", "Normal", "Обычно");
    add("anFast", "Fast", "Быстро");
    add("anStyle", "Style", "Стиль");
    add("anOffNote", "Animations are off. Previews still play so you can compare.", "Анимации выключены. Предпросмотр всё равно проигрывается, чтобы можно было сравнить.");
    add("anReset", "Reset", "Сбросить");
    add("anStyle_pulse", "Pulse", "Пульс");
    add("anStyleDesc_pulse", "A ring expands from the dot.", "От точки расходится кольцо.");
    add("anStyle_breathe", "Breathe", "Дыхание");
    add("anStyleDesc_breathe", "A soft glow that swells and fades.", "Мягкое свечение, которое нарастает и угасает.");
    add("anStyle_ripple", "Ripple", "Волны");
    add("anStyleDesc_ripple", "Two ripples, one after another.", "Две волны одна за другой.");
    add("anStyle_heartbeat", "Heartbeat", "Сердцебиение");
    add("anStyleDesc_heartbeat", "A quick double beat, then rest.", "Быстрый двойной удар и пауза.");
    add("anStyle_orbit", "Orbit", "Орбита");
    add("anStyleDesc_orbit", "A small spark circles the dot.", "Маленькая искра кружит вокруг точки.");
    add("anStyle_blink", "Blink", "Мигание");
    add("anStyleDesc_blink", "A simple fade in and out.", "Простое плавное угасание и возвращение.");

    // Translations for the 27 other languages, in the order of EXTRA_KEYS.
    const EXTRA_KEYS = ["hkOpenNote", "hkOpenButton", "anOpenNote", "anOpenButton", "hkTitle", "hkIntro", "hkChangeAria", "hkPress", "hkCancel", "hkResetOne", "hkResetAll", "hkResetAllConfirm", "hkClose", "hkNotSet", "hkConflictTitle", "hkConflictBody", "hkConflictHelp", "hkConflictHelpSwap", "hkReplace", "hkSwap", "hkReserved", "hkShiftOnly", "hkResetDone", "hkUnchanged", "hkConflictShort", "hkGroup_player", "hkGroup_navigation", "hkGroup_verdicts", "hkGroup_submit", "hkGroup_interface", "hkName_playPause", "hkDesc_playPause", "hkName_mute", "hkDesc_mute", "hkName_fullscreen", "hkDesc_fullscreen", "hkName_seekBack", "hkDesc_seekBack", "hkName_seekForward", "hkDesc_seekForward", "hkName_frameBack", "hkDesc_frameBack", "hkName_frameForward", "hkDesc_frameForward", "hkName_speedBoost", "hkDesc_speedBoost", "hkDescQuick", "hkDescQuickClassicOnly", "hkName_proceed", "hkDesc_proceed", "hkName_cancel", "hkDesc_cancel", "hkName_settings", "hkDesc_settings", "anTitle", "anIntro", "anEnabled", "anSpeed", "anSlow", "anNormal", "anFast", "anStyle", "anOffNote", "anReset", "anStyle_pulse", "anStyleDesc_pulse", "anStyle_breathe", "anStyleDesc_breathe", "anStyle_ripple", "anStyleDesc_ripple", "anStyle_heartbeat", "anStyleDesc_heartbeat", "anStyle_orbit", "anStyleDesc_orbit", "anStyle_blink", "anStyleDesc_blink", "hkName_quickN"];
    const EXTRA_TRANSLATIONS = {
      "bg": ["Назначавайте всеки клавиш. Ще получите предупреждение, преди да бъде заменен клавиш, който вече се използва.", "Настройка на клавишите", "Стил, скорост и включване/изключване на индикатора на DemoScope с предварителен преглед на живо.", "Настройки на анимацията", "Бързи клавиши", "Щракнете върху клавиш, за да го промените, после натиснете новия. Ако вече се използва, ще видите къде, преди нещо да бъде заменено.", "Промяна на клавиш: {action}", "Натиснете клавиш…", "Отказ", "Нулиране по подразбиране ({key})", "Нулирай всичко", "Щракнете отново за нулиране на всичко", "Затвори", "Не е зададен", "Този клавиш вече се използва", "{key} е зададен за „{action}“ ({group}). {desc}", "Замени: „{other}“ ще остане без клавиш.", "Замени: „{other}“ ще остане без клавиш. Размени: „{other}“ получава {prev}.", "Замени", "Размени", "Този клавиш не може да се използва: резервиран е от браузъра или е нужен за навигация.", "Shift може да се използва само за действието с задържане „Ускорение“.", "Всички клавиши са върнати към стойностите по подразбиране.", "Без промяна.", "„{key}“ вече се използва за „{action}“. Променете го в „Бързи клавиши“.", "Възпроизвеждане", "Навигация", "Вердикти", "Изпращане", "Интерфейс", "Пуск / пауза", "Спира клипа или продължава възпроизвеждането.", "Звук вкл. / изкл.", "Заглушава или включва звука на клипа.", "Цял екран", "Влиза в режим на цял екран или излиза от него.", "Назад", "Връща с 5 секунди назад.", "Напред", "Прескача с 5 секунди напред.", "Предишен кадър", "Връща с един кадър назад.", "Следващ кадър", "Преминава с един кадър напред.", "Ускорение (задържане)", "Възпроизвежда по-бързо, докато клавишът е натиснат. Скоростта се избира в панела.", "Класическа форма: {a}. Задача с един въпрос: {b}.", "Класическа форма: {a}. Не се използва в задачата с един въпрос.", "Потвърждаване / изпращане", "Потвърждава вердикта и продължава. В класическата форма се натиска два пъти: първо подготовка, после изпращане.", "Отмяна на вердикт", "Натиска „Отказ“, докато вердиктът чака потвърждение, или отменя първото натискане на Enter.", "Настройки на DemoScope", "Отваря или затваря прозореца с настройки.", "Анимации", "Изберете как изглежда индикаторът на DemoScope. Прегледите се възпроизвеждат на живо.", "Включи анимациите", "Скорост", "Бавно", "Нормално", "Бързо", "Стил", "Анимациите са изключени. Прегледите пак се възпроизвеждат, за да можете да сравнявате.", "Нулирай", "Пулс", "От точката се разпростира пръстен.", "Дишане", "Мека светлина, която нараства и угасва.", "Вълни", "Две вълни една след друга.", "Сърдечен ритъм", "Бърз двоен удар и пауза.", "Орбита", "Малка искра обикаля около точката.", "Мигане", "Просто плавно избледняване и връщане.", "Бърз вердикт {n}"],
      "cs": ["Přiřaďte libovolnou klávesu. Před nahrazením již používané klávesy budete upozorněni.", "Nastavit klávesové zkratky", "Styl, rychlost a zapnutí/vypnutí indikátoru DemoScope s živým náhledem.", "Nastavení animací", "Klávesové zkratky", "Klikněte na klávesu, kterou chcete změnit, a stiskněte novou. Pokud je již používána, uvidíte kde, než se cokoli nahradí.", "Změnit klávesu: {action}", "Stiskněte klávesu…", "Zrušit", "Obnovit výchozí ({key})", "Obnovit vše", "Kliknutím znovu obnovíte vše", "Zavřít", "Nepřiřazeno", "Tato klávesa je již používána", "{key} je přiřazena akci „{action}“ ({group}). {desc}", "Nahradit: „{other}“ zůstane bez klávesy.", "Nahradit: „{other}“ zůstane bez klávesy. Prohodit: „{other}“ dostane {prev}.", "Nahradit", "Prohodit", "Tuto klávesu nelze použít: je vyhrazena prohlížeči nebo potřebná pro navigaci.", "Shift lze použít jen pro přidržovanou akci „Zrychlení“.", "Všechny klávesy byly vráceny na výchozí hodnoty.", "Beze změny.", "„{key}“ se již používá pro „{action}“. Změňte to v části Klávesové zkratky.", "Přehrávání", "Navigace", "Verdikty", "Odeslání", "Rozhraní", "Přehrát / pozastavit", "Pozastaví klip nebo obnoví přehrávání.", "Zvuk zap. / vyp.", "Ztlumí nebo zapne zvuk klipu.", "Celá obrazovka", "Zapne nebo ukončí režim celé obrazovky.", "Zpět", "Přeskočí o 5 sekund zpět.", "Vpřed", "Přeskočí o 5 sekund vpřed.", "Předchozí snímek", "Posune o jeden snímek zpět.", "Další snímek", "Posune o jeden snímek vpřed.", "Zrychlení (přidržet)", "Přehrává rychleji, dokud je klávesa přidržena. Rychlost se volí v panelu.", "Klasický formulář: {a}. Úloha s jednou otázkou: {b}.", "Klasický formulář: {a}. V úloze s jednou otázkou se nepoužívá.", "Potvrdit / odeslat", "Potvrdí verdikt a pokračuje. V klasickém formuláři se stiskne dvakrát: nejdřív příprava, potom odeslání.", "Zrušit verdikt", "Stiskne „Zrušit“, zatímco verdikt čeká na potvrzení, nebo zruší první stisk Enter.", "Nastavení DemoScope", "Otevře nebo zavře okno nastavení.", "Animace", "Vyberte vzhled indikátoru DemoScope. Náhledy se přehrávají živě.", "Zapnout animace", "Rychlost", "Pomalu", "Normálně", "Rychle", "Styl", "Animace jsou vypnuty. Náhledy se přesto přehrávají, abyste mohli porovnávat.", "Obnovit", "Puls", "Z tečky se rozšiřuje kruh.", "Dýchání", "Jemná záře, která sílí a slábne.", "Vlny", "Dvě vlny za sebou.", "Tlukot srdce", "Rychlý dvojitý úder a pauza.", "Oběžná dráha", "Malá jiskra krouží kolem tečky.", "Blikání", "Prosté plynulé pohasnutí a návrat.", "Rychlý verdikt {n}"],
      "da": ["Tildel en vilkårlig tast. Du advares, før en tast, der allerede er i brug, erstattes.", "Tilpas genvejstaster", "Stil, hastighed og til/fra-kontakt til DemoScope-indikatoren med live-forhåndsvisning.", "Animationsindstillinger", "Genvejstaster", "Klik på en tast for at ændre den, og tryk derefter på den nye tast. Er den allerede i brug, kan du se hvor, før noget erstattes.", "Skift tast: {action}", "Tryk på en tast…", "Annuller", "Nulstil til standard ({key})", "Nulstil alle", "Klik igen for at nulstille alle", "Luk", "Ikke tildelt", "Denne tast er allerede i brug", "{key} er tildelt »{action}« ({group}). {desc}", "Erstat: »{other}« står uden tast.", "Erstat: »{other}« står uden tast. Byt: »{other}« får {prev}.", "Erstat", "Byt", "Denne tast kan ikke bruges: den er reserveret af browseren eller bruges til navigation.", "Shift kan kun bruges til holdehandlingen »Speedboost«.", "Alle genvejstaster er nulstillet til standard.", "Ingen ændring.", "»{key}« bruges allerede til »{action}«. Ændr det under Genvejstaster.", "Afspilning", "Navigation", "Vurderinger", "Indsendelse", "Grænseflade", "Afspil / pause", "Sætter klippet på pause eller genoptager afspilning.", "Lyd til / fra", "Slår lyden fra eller til.", "Fuld skærm", "Åbner eller forlader fuldskærmstilstand.", "Tilbage", "Hopper 5 sekunder tilbage.", "Frem", "Hopper 5 sekunder frem.", "Forrige billede", "Går ét billede tilbage.", "Næste billede", "Går ét billede frem.", "Speedboost (hold)", "Afspiller hurtigere, mens tasten holdes nede. Hastigheden vælges i panelet.", "Klassisk formular: {a}. Opgave med ét spørgsmål: {b}.", "Klassisk formular: {a}. Bruges ikke i opgaven med ét spørgsmål.", "Bekræft / send", "Bekræfter vurderingen og går videre. I den klassiske formular trykkes to gange: først klargør, derefter send.", "Fortryd vurdering", "Trykker på »Annuller«, mens en vurdering venter på bekræftelse, eller fortryder det første tryk på Enter.", "DemoScope-indstillinger", "Åbner eller lukker indstillingsvinduet.", "Animationer", "Vælg, hvordan DemoScope-indikatoren ser ud. Forhåndsvisninger afspilles live.", "Aktivér animationer", "Hastighed", "Langsom", "Normal", "Hurtig", "Stil", "Animationer er slået fra. Forhåndsvisningerne afspilles stadig, så du kan sammenligne.", "Nulstil", "Puls", "En ring udvider sig fra prikken.", "Åndedræt", "Et blødt skær, der svulmer op og toner ud.", "Bølger", "To bølger efter hinanden.", "Hjerteslag", "Et hurtigt dobbeltslag og så pause.", "Kredsløb", "En lille gnist kredser om prikken.", "Blink", "En enkel ind- og udtoning.", "Hurtig vurdering {n}"],
      "de": ["Belegen Sie jede beliebige Taste neu. Sie werden gewarnt, bevor eine bereits verwendete Taste ersetzt wird.", "Tastenkürzel anpassen", "Stil, Geschwindigkeit und Ein/Aus-Schalter für den DemoScope-Indikator, mit Live-Vorschau.", "Animationseinstellungen", "Tastenkürzel", "Klicken Sie auf eine Taste, um sie zu ändern, und drücken Sie dann die neue Taste. Ist sie bereits belegt, sehen Sie, wo, bevor etwas ersetzt wird.", "Taste ändern: {action}", "Taste drücken …", "Abbrechen", "Auf Standard zurücksetzen ({key})", "Alle zurücksetzen", "Erneut klicken, um alles zurückzusetzen", "Schließen", "Nicht belegt", "Diese Taste ist bereits belegt", "{key} ist „{action}“ ({group}) zugewiesen. {desc}", "Ersetzen: „{other}“ hat dann keine Taste.", "Ersetzen: „{other}“ hat dann keine Taste. Tauschen: „{other}“ erhält {prev}.", "Ersetzen", "Tauschen", "Diese Taste kann nicht verwendet werden: Sie ist vom Browser reserviert oder für die Navigation nötig.", "Umschalt kann nur für die Halte-Aktion „Beschleunigung“ verwendet werden.", "Alle Tastenkürzel wurden auf die Standardwerte zurückgesetzt.", "Keine Änderung.", "„{key}“ wird bereits für „{action}“ verwendet. Ändern Sie das unter Tastenkürzel.", "Wiedergabe", "Navigation", "Urteile", "Absenden", "Oberfläche", "Wiedergabe / Pause", "Hält den Clip an oder setzt die Wiedergabe fort.", "Ton ein / aus", "Schaltet den Ton des Clips stumm oder wieder ein.", "Vollbild", "Wechselt in den Vollbildmodus oder beendet ihn.", "Zurückspulen", "Springt 5 Sekunden zurück.", "Vorspulen", "Springt 5 Sekunden vor.", "Vorheriges Bild", "Geht ein Bild zurück.", "Nächstes Bild", "Geht ein Bild vor.", "Beschleunigung (halten)", "Spielt schneller ab, solange die Taste gehalten wird. Die Geschwindigkeit wird im Panel gewählt.", "Klassisches Formular: {a}. Aufgabe mit einer Frage: {b}.", "Klassisches Formular: {a}. In der Aufgabe mit einer Frage nicht verwendet.", "Bestätigen / absenden", "Bestätigt das Urteil und geht weiter. Im klassischen Formular zweimal drücken: erst vorbereiten, dann senden.", "Urteil abbrechen", "Drückt „Abbrechen“, während ein Urteil auf Bestätigung wartet, oder nimmt den ersten Enter-Druck zurück.", "DemoScope-Einstellungen", "Öffnet oder schließt das Einstellungsfenster.", "Animationen", "Wählen Sie, wie der DemoScope-Indikator aussieht. Vorschauen laufen live.", "Animationen aktivieren", "Geschwindigkeit", "Langsam", "Normal", "Schnell", "Stil", "Animationen sind aus. Die Vorschauen laufen trotzdem, damit Sie vergleichen können.", "Zurücksetzen", "Puls", "Ein Ring breitet sich vom Punkt aus.", "Atmen", "Ein sanftes Leuchten, das anschwillt und verblasst.", "Wellen", "Zwei Wellen nacheinander.", "Herzschlag", "Ein schneller Doppelschlag, dann Ruhe.", "Umlaufbahn", "Ein kleiner Funke umkreist den Punkt.", "Blinken", "Ein einfaches Ein- und Ausblenden.", "Schnelles Urteil {n}"],
      "el": ["Αντιστοιχίστε οποιοδήποτε πλήκτρο. Θα ειδοποιηθείτε πριν αντικατασταθεί ένα πλήκτρο που χρησιμοποιείται ήδη.", "Προσαρμογή συντομεύσεων", "Στυλ, ταχύτητα και διακόπτης ενεργοποίησης για τον δείκτη του DemoScope, με ζωντανές προεπισκοπήσεις.", "Ρυθμίσεις animation", "Συντομεύσεις πληκτρολογίου", "Κάντε κλικ σε ένα πλήκτρο για να το αλλάξετε και πατήστε το νέο πλήκτρο. Αν χρησιμοποιείται ήδη, θα δείτε πού πριν αντικατασταθεί οτιδήποτε.", "Αλλαγή πλήκτρου: {action}", "Πατήστε ένα πλήκτρο…", "Άκυρο", "Επαναφορά προεπιλογής ({key})", "Επαναφορά όλων", "Κάντε κλικ ξανά για επαναφορά όλων", "Κλείσιμο", "Δεν έχει οριστεί", "Αυτό το πλήκτρο χρησιμοποιείται ήδη", "Το {key} έχει αντιστοιχιστεί στο «{action}» ({group}). {desc}", "Αντικατάσταση: το «{other}» θα μείνει χωρίς πλήκτρο.", "Αντικατάσταση: το «{other}» θα μείνει χωρίς πλήκτρο. Ανταλλαγή: το «{other}» παίρνει το {prev}.", "Αντικατάσταση", "Ανταλλαγή", "Αυτό το πλήκτρο δεν μπορεί να χρησιμοποιηθεί: είναι δεσμευμένο από το πρόγραμμα περιήγησης ή απαραίτητο για την πλοήγηση.", "Το Shift μπορεί να χρησιμοποιηθεί μόνο για την ενέργεια παρατεταμένου πατήματος «Επιτάχυνση».", "Όλες οι συντομεύσεις επανήλθαν στις προεπιλογές.", "Καμία αλλαγή.", "Το «{key}» χρησιμοποιείται ήδη για το «{action}». Αλλάξτε το στις Συντομεύσεις πληκτρολογίου.", "Αναπαραγωγή", "Πλοήγηση", "Κρίσεις", "Υποβολή", "Διεπαφή", "Αναπαραγωγή / παύση", "Σταματά προσωρινά το κλιπ ή συνεχίζει την αναπαραγωγή.", "Ήχος ενεργός / σίγαση", "Σίγαση ή επαναφορά ήχου του κλιπ.", "Πλήρης οθόνη", "Μπαίνει ή βγαίνει από τη λειτουργία πλήρους οθόνης.", "Πίσω", "Πηγαίνει 5 δευτερόλεπτα πίσω.", "Μπροστά", "Πηγαίνει 5 δευτερόλεπτα μπροστά.", "Προηγούμενο καρέ", "Πηγαίνει ένα καρέ πίσω.", "Επόμενο καρέ", "Πηγαίνει ένα καρέ μπροστά.", "Επιτάχυνση (παρατεταμένο πάτημα)", "Παίζει πιο γρήγορα όσο κρατάτε πατημένο το πλήκτρο. Η ταχύτητα επιλέγεται στον πίνακα.", "Κλασική φόρμα: {a}. Εργασία με μία ερώτηση: {b}.", "Κλασική φόρμα: {a}. Δεν χρησιμοποιείται στην εργασία με μία ερώτηση.", "Επιβεβαίωση / αποστολή", "Επιβεβαιώνει την κρίση και προχωρά. Στην κλασική φόρμα πατιέται δύο φορές: πρώτα προετοιμασία, μετά αποστολή.", "Ακύρωση κρίσης", "Πατά «Άκυρο» όσο μια κρίση περιμένει επιβεβαίωση ή ακυρώνει το πρώτο πάτημα του Enter.", "Ρυθμίσεις DemoScope", "Ανοίγει ή κλείνει το παράθυρο ρυθμίσεων.", "Animations", "Επιλέξτε πώς φαίνεται ο δείκτης του DemoScope. Οι προεπισκοπήσεις παίζουν ζωντανά.", "Ενεργοποίηση animations", "Ταχύτητα", "Αργά", "Κανονικά", "Γρήγορα", "Στυλ", "Τα animations είναι απενεργοποιημένα. Οι προεπισκοπήσεις παίζουν ακόμη ώστε να μπορείτε να συγκρίνετε.", "Επαναφορά", "Παλμός", "Ένας δακτύλιος απλώνεται από την τελεία.", "Αναπνοή", "Μια απαλή λάμψη που φουσκώνει και σβήνει.", "Κύματα", "Δύο κύματα το ένα μετά το άλλο.", "Καρδιακός παλμός", "Ένας γρήγορος διπλός χτύπος και μετά παύση.", "Τροχιά", "Μια μικρή σπίθα κυκλώνει την τελεία.", "Αναλαμπή", "Μια απλή σταδιακή εμφάνιση και εξαφάνιση.", "Γρήγορη κρίση {n}"],
      "es-419": ["Asigna cualquier tecla. Se te avisará antes de reemplazar una tecla que ya está en uso.", "Personalizar atajos", "Estilo, velocidad e interruptor de activación del indicador de DemoScope, con vistas previas en vivo.", "Configuración de animaciones", "Atajos de teclado", "Haz clic en una tecla para cambiarla y luego presiona la nueva tecla. Si ya está en uso, verás dónde antes de que se reemplace algo.", "Cambiar tecla: {action}", "Presiona una tecla…", "Cancelar", "Restablecer a predeterminado ({key})", "Restablecer todo", "Haz clic de nuevo para restablecer todo", "Cerrar", "Sin asignar", "Esta tecla ya está en uso", "{key} está asignada a «{action}» ({group}). {desc}", "Reemplazar: «{other}» se quedará sin tecla.", "Reemplazar: «{other}» se quedará sin tecla. Intercambiar: «{other}» recibe {prev}.", "Reemplazar", "Intercambiar", "Esta tecla no se puede usar: está reservada por el navegador o es necesaria para la navegación.", "Shift solo se puede usar para la acción de mantener presionado «Aceleración».", "Todos los atajos volvieron a sus valores predeterminados.", "Sin cambios.", "«{key}» ya se usa para «{action}». Cámbialo en Atajos de teclado.", "Reproducción", "Navegación", "Veredictos", "Envío", "Interfaz", "Reproducir / pausar", "Pausa el clip o reanuda la reproducción.", "Sonido activado / desactivado", "Silencia o reactiva el sonido del clip.", "Pantalla completa", "Entra o sale del modo de pantalla completa.", "Retroceder", "Salta 5 segundos hacia atrás.", "Avanzar", "Salta 5 segundos hacia adelante.", "Cuadro anterior", "Retrocede un cuadro.", "Cuadro siguiente", "Avanza un cuadro.", "Aceleración (mantener presionado)", "Reproduce más rápido mientras mantengas la tecla presionada. La velocidad se elige en el panel.", "Formulario clásico: {a}. Tarea de una sola pregunta: {b}.", "Formulario clásico: {a}. No se usa en la tarea de una sola pregunta.", "Confirmar / enviar", "Confirma el veredicto y continúa. En el formulario clásico se presiona dos veces: primero preparar, luego enviar.", "Cancelar veredicto", "Presiona «Cancelar» mientras un veredicto espera confirmación, o deshace la primera pulsación de Enter.", "Configuración de DemoScope", "Abre o cierra la ventana de configuración.", "Animaciones", "Elige cómo se ve el indicador de DemoScope. Las vistas previas se reproducen en vivo.", "Activar animaciones", "Velocidad", "Lenta", "Normal", "Rápida", "Estilo", "Las animaciones están desactivadas. Las vistas previas se siguen reproduciendo para que puedas comparar.", "Restablecer", "Pulso", "Un anillo se expande desde el punto.", "Respiración", "Un brillo suave que crece y se desvanece.", "Ondas", "Dos ondas, una tras otra.", "Latido", "Un doble latido rápido y luego una pausa.", "Órbita", "Una pequeña chispa gira alrededor del punto.", "Parpadeo", "Un simple fundido de entrada y salida.", "Veredicto rápido {n}"],
      "es-ES": ["Asigna cualquier tecla. Se te avisará antes de sustituir una tecla que ya está en uso.", "Personalizar atajos", "Estilo, velocidad e interruptor de activación del indicador de DemoScope, con vistas previas en directo.", "Ajustes de animación", "Atajos de teclado", "Haz clic en una tecla para cambiarla y luego pulsa la nueva tecla. Si ya está en uso, verás dónde antes de que se sustituya nada.", "Cambiar tecla: {action}", "Pulsa una tecla…", "Cancelar", "Restablecer valor predeterminado ({key})", "Restablecer todo", "Haz clic de nuevo para restablecer todo", "Cerrar", "Sin asignar", "Esta tecla ya está en uso", "{key} está asignada a «{action}» ({group}). {desc}", "Sustituir: «{other}» se quedará sin tecla.", "Sustituir: «{other}» se quedará sin tecla. Intercambiar: «{other}» recibe {prev}.", "Sustituir", "Intercambiar", "Esta tecla no se puede usar: está reservada por el navegador o es necesaria para la navegación.", "Mayús solo se puede usar para la acción de mantener pulsado «Aceleración».", "Todos los atajos han vuelto a sus valores predeterminados.", "Sin cambios.", "«{key}» ya se usa para «{action}». Cámbialo en Atajos de teclado.", "Reproducción", "Navegación", "Veredictos", "Envío", "Interfaz", "Reproducir / pausa", "Pausa el clip o reanuda la reproducción.", "Sonido activado / desactivado", "Silencia o reactiva el sonido del clip.", "Pantalla completa", "Entra o sale del modo de pantalla completa.", "Retroceder", "Salta 5 segundos atrás.", "Avanzar", "Salta 5 segundos adelante.", "Fotograma anterior", "Retrocede un fotograma.", "Fotograma siguiente", "Avanza un fotograma.", "Aceleración (mantener pulsado)", "Reproduce más rápido mientras se mantiene la tecla. La velocidad se elige en el panel.", "Formulario clásico: {a}. Tarea de una sola pregunta: {b}.", "Formulario clásico: {a}. No se usa en la tarea de una sola pregunta.", "Confirmar / enviar", "Confirma el veredicto y continúa. En el formulario clásico se pulsa dos veces: primero preparar, después enviar.", "Cancelar veredicto", "Pulsa «Cancelar» mientras un veredicto espera confirmación, o deshace la primera pulsación de Intro.", "Ajustes de DemoScope", "Abre o cierra la ventana de ajustes.", "Animaciones", "Elige el aspecto del indicador de DemoScope. Las vistas previas se reproducen en directo.", "Activar animaciones", "Velocidad", "Lenta", "Normal", "Rápida", "Estilo", "Las animaciones están desactivadas. Las vistas previas se siguen reproduciendo para que puedas comparar.", "Restablecer", "Pulso", "Un anillo se expande desde el punto.", "Respiración", "Un brillo suave que crece y se desvanece.", "Ondas", "Dos ondas, una tras otra.", "Latido", "Un doble latido rápido y luego una pausa.", "Órbita", "Una pequeña chispa gira alrededor del punto.", "Parpadeo", "Un simple fundido de entrada y salida.", "Veredicto rápido {n}"],
      "fi": ["Määritä mikä tahansa näppäin. Sinua varoitetaan, ennen kuin jo käytössä oleva näppäin korvataan.", "Mukauta pikanäppäimet", "DemoScope-ilmaisimen tyyli, nopeus ja päälle/pois-kytkin reaaliaikaisilla esikatseluilla.", "Animaatioasetukset", "Pikanäppäimet", "Napsauta näppäintä muuttaaksesi sitä ja paina sitten uutta näppäintä. Jos se on jo käytössä, näet missä, ennen kuin mitään korvataan.", "Vaihda näppäin: {action}", "Paina näppäintä…", "Peruuta", "Palauta oletus ({key})", "Palauta kaikki", "Napsauta uudelleen palauttaaksesi kaiken", "Sulje", "Ei määritetty", "Tämä näppäin on jo käytössä", "{key} on määritetty toiminnolle ”{action}” ({group}). {desc}", "Korvaa: ”{other}” jää ilman näppäintä.", "Korvaa: ”{other}” jää ilman näppäintä. Vaihda: ”{other}” saa näppäimen {prev}.", "Korvaa", "Vaihda", "Tätä näppäintä ei voi käyttää: selain on varannut sen tai sitä tarvitaan navigointiin.", "Shiftiä voi käyttää vain pitämällä painettavaan toimintoon ”Nopeutus”.", "Kaikki pikanäppäimet on palautettu oletuksiin.", "Ei muutoksia.", "”{key}” on jo käytössä toiminnolle ”{action}”. Muuta se Pikanäppäimissä.", "Toisto", "Navigointi", "Arviot", "Lähetys", "Käyttöliittymä", "Toista / tauko", "Pysäyttää klipin tai jatkaa toistoa.", "Ääni päälle / pois", "Mykistää klipin tai palauttaa äänen.", "Koko näyttö", "Siirtyy koko näytön tilaan tai poistuu siitä.", "Taaksepäin", "Hyppää 5 sekuntia taaksepäin.", "Eteenpäin", "Hyppää 5 sekuntia eteenpäin.", "Edellinen ruutu", "Siirtyy yhden ruudun taaksepäin.", "Seuraava ruutu", "Siirtyy yhden ruudun eteenpäin.", "Nopeutus (pidä painettuna)", "Toistaa nopeammin, kun näppäintä pidetään painettuna. Nopeus valitaan paneelissa.", "Perinteinen lomake: {a}. Yhden kysymyksen tehtävä: {b}.", "Perinteinen lomake: {a}. Ei käytössä yhden kysymyksen tehtävässä.", "Vahvista / lähetä", "Vahvistaa arvion ja siirtyy eteenpäin. Perinteisessä lomakkeessa painetaan kahdesti: ensin valmistelu, sitten lähetys.", "Peruuta arvio", "Painaa ”Peruuta”, kun arvio odottaa vahvistusta, tai peruu ensimmäisen Enter-painalluksen.", "DemoScope-asetukset", "Avaa tai sulkee asetusikkunan.", "Animaatiot", "Valitse, miltä DemoScope-ilmaisin näyttää. Esikatselut toistuvat reaaliajassa.", "Ota animaatiot käyttöön", "Nopeus", "Hidas", "Normaali", "Nopea", "Tyyli", "Animaatiot ovat pois päältä. Esikatselut toistuvat silti, jotta voit vertailla.", "Palauta", "Pulssi", "Rengas laajenee pisteestä.", "Hengitys", "Pehmeä hehku, joka kasvaa ja himmenee.", "Aallot", "Kaksi aaltoa peräkkäin.", "Sydämenlyönti", "Nopea kaksoislyönti ja tauko.", "Kiertorata", "Pieni kipinä kiertää pistettä.", "Vilkunta", "Yksinkertainen häivytys sisään ja ulos.", "Pika-arvio {n}"],
      "fr": ["Réattribuez n’importe quelle touche. Vous êtes averti avant le remplacement d’une touche déjà utilisée.", "Personnaliser les raccourcis", "Style, vitesse et activation de l’indicateur DemoScope, avec aperçus en direct.", "Paramètres d’animation", "Raccourcis clavier", "Cliquez sur une touche pour la modifier, puis appuyez sur la nouvelle touche. Si elle est déjà utilisée, vous verrez où avant que quoi que ce soit soit remplacé.", "Modifier la touche : {action}", "Appuyez sur une touche…", "Annuler", "Rétablir par défaut ({key})", "Tout réinitialiser", "Cliquez à nouveau pour tout réinitialiser", "Fermer", "Non attribuée", "Cette touche est déjà utilisée", "{key} est attribuée à « {action} » ({group}). {desc}", "Remplacer : « {other} » n’aura plus de touche.", "Remplacer : « {other} » n’aura plus de touche. Échanger : « {other} » reçoit {prev}.", "Remplacer", "Échanger", "Cette touche ne peut pas être utilisée : elle est réservée par le navigateur ou nécessaire à la navigation.", "Maj ne peut servir qu’à l’action maintenue « Accélération ».", "Tous les raccourcis ont été rétablis par défaut.", "Aucun changement.", "« {key} » est déjà utilisée pour « {action} ». Modifiez-la dans Raccourcis clavier.", "Lecture", "Navigation", "Verdicts", "Envoi", "Interface", "Lecture / pause", "Met le clip en pause ou reprend la lecture.", "Son activé / coupé", "Coupe ou rétablit le son du clip.", "Plein écran", "Active ou quitte le mode plein écran.", "Reculer", "Recule de 5 secondes.", "Avancer", "Avance de 5 secondes.", "Image précédente", "Recule d’une image.", "Image suivante", "Avance d’une image.", "Accélération (maintenir)", "Lit plus vite tant que la touche est maintenue. La vitesse se choisit dans le panneau.", "Formulaire classique : {a}. Tâche à une seule question : {b}.", "Formulaire classique : {a}. Non utilisée dans la tâche à une seule question.", "Confirmer / envoyer", "Confirme le verdict et passe à la suite. Dans le formulaire classique, appuyez deux fois : d’abord armer, puis envoyer.", "Annuler le verdict", "Appuie sur « Annuler » pendant qu’un verdict attend sa confirmation, ou annule le premier appui sur Entrée.", "Paramètres de DemoScope", "Ouvre ou ferme la fenêtre des paramètres.", "Animations", "Choisissez l’apparence de l’indicateur DemoScope. Les aperçus se jouent en direct.", "Activer les animations", "Vitesse", "Lente", "Normale", "Rapide", "Style", "Les animations sont désactivées. Les aperçus continuent de se jouer pour que vous puissiez comparer.", "Réinitialiser", "Pulsation", "Un anneau s’étend à partir du point.", "Respiration", "Une douce lueur qui gonfle puis s’estompe.", "Ondes", "Deux ondes l’une après l’autre.", "Battement de cœur", "Un double battement rapide, puis une pause.", "Orbite", "Une petite étincelle tourne autour du point.", "Clignotement", "Un simple fondu entrant et sortant.", "Verdict rapide {n}"],
      "hu": ["Rendeljen hozzá bármilyen billentyűt. Figyelmeztetést kap, mielőtt egy már használt billentyű lecserélődne.", "Gyorsbillentyűk testreszabása", "A DemoScope jelző stílusa, sebessége és ki/be kapcsolója élő előnézettel.", "Animációbeállítások", "Gyorsbillentyűk", "Kattintson egy billentyűre a módosításhoz, majd nyomja meg az újat. Ha már használatban van, a csere előtt látni fogja, hol.", "Billentyű módosítása: {action}", "Nyomjon meg egy billentyűt…", "Mégse", "Alapértelmezés visszaállítása ({key})", "Összes visszaállítása", "Kattintson újra az összes visszaállításához", "Bezárás", "Nincs beállítva", "Ez a billentyű már használatban van", "A(z) {key} a(z) „{action}” ({group}) művelethez van rendelve. {desc}", "Csere: a(z) „{other}” billentyű nélkül marad.", "Csere: a(z) „{other}” billentyű nélkül marad. Felcserélés: a(z) „{other}” megkapja ezt: {prev}.", "Csere", "Felcserélés", "Ez a billentyű nem használható: a böngésző fenntartja, vagy a navigációhoz kell.", "A Shift csak a nyomva tartható „Gyorsítás” műveletre használható.", "Minden gyorsbillentyű visszaállt az alapértelmezettre.", "Nincs változás.", "A(z) „{key}” már használatban van ehhez: „{action}”. Módosítsa a Gyorsbillentyűk között.", "Lejátszás", "Navigáció", "Ítéletek", "Beküldés", "Felület", "Lejátszás / szünet", "Szünetelteti a klipet, vagy folytatja a lejátszást.", "Hang be / ki", "Elnémítja vagy visszakapcsolja a klip hangját.", "Teljes képernyő", "Belép a teljes képernyős módba, vagy kilép belőle.", "Visszatekerés", "5 másodpercet ugrik vissza.", "Előretekerés", "5 másodpercet ugrik előre.", "Előző képkocka", "Egy képkockát lép vissza.", "Következő képkocka", "Egy képkockát lép előre.", "Gyorsítás (nyomva tartva)", "Gyorsabban játszik le, amíg a billentyű le van nyomva. A sebességet a panelen lehet kiválasztani.", "Klasszikus űrlap: {a}. Egykérdéses feladat: {b}.", "Klasszikus űrlap: {a}. Az egykérdéses feladatban nem használatos.", "Megerősítés / beküldés", "Megerősíti az ítéletet, és továbblép. A klasszikus űrlapon kétszer kell megnyomni: először előkészít, aztán elküld.", "Ítélet visszavonása", "Megnyomja a „Mégse” gombot, amíg egy ítélet megerősítésre vár, vagy visszavonja az első Enter-lenyomást.", "DemoScope-beállítások", "Megnyitja vagy bezárja a beállítási ablakot.", "Animációk", "Válassza ki, milyen legyen a DemoScope jelző. Az előnézetek élőben játszódnak le.", "Animációk engedélyezése", "Sebesség", "Lassú", "Normál", "Gyors", "Stílus", "Az animációk ki vannak kapcsolva. Az előnézetek így is lejátszódnak, hogy összehasonlíthassa őket.", "Visszaállítás", "Pulzálás", "Egy gyűrű tágul a pontból.", "Lélegzés", "Lágy fény, amely erősödik, majd elhalványul.", "Hullámok", "Két hullám egymás után.", "Szívverés", "Gyors kettős dobbanás, majd szünet.", "Pálya", "Egy kis szikra kering a pont körül.", "Villogás", "Egyszerű be- és kihalványulás.", "Gyors ítélet {n}"],
      "id": ["Tetapkan tombol apa pun. Anda akan diperingatkan sebelum tombol yang sudah dipakai diganti.", "Atur pintasan", "Gaya, kecepatan, dan saklar aktif/nonaktif untuk indikator DemoScope, dengan pratinjau langsung.", "Pengaturan animasi", "Pintasan keyboard", "Klik sebuah tombol untuk mengubahnya, lalu tekan tombol baru. Jika sudah dipakai, Anda akan melihat di mana sebelum apa pun diganti.", "Ubah tombol: {action}", "Tekan sebuah tombol…", "Batal", "Atur ulang ke default ({key})", "Atur ulang semua", "Klik lagi untuk mengatur ulang semua", "Tutup", "Belum diatur", "Tombol ini sudah dipakai", "{key} ditetapkan untuk “{action}” ({group}). {desc}", "Ganti: “{other}” tidak akan punya tombol.", "Ganti: “{other}” tidak akan punya tombol. Tukar: “{other}” mendapat {prev}.", "Ganti", "Tukar", "Tombol ini tidak dapat dipakai: dicadangkan oleh browser atau diperlukan untuk navigasi.", "Shift hanya dapat dipakai untuk aksi tahan “Percepatan”.", "Semua pintasan dikembalikan ke default.", "Tidak ada perubahan.", "“{key}” sudah dipakai untuk “{action}”. Ubah di Pintasan keyboard.", "Pemutaran", "Navigasi", "Vonis", "Pengiriman", "Antarmuka", "Putar / jeda", "Menjeda klip atau melanjutkan pemutaran.", "Suara hidup / mati", "Membisukan atau menyalakan suara klip.", "Layar penuh", "Masuk atau keluar dari mode layar penuh.", "Mundur", "Melompat 5 detik ke belakang.", "Maju", "Melompat 5 detik ke depan.", "Frame sebelumnya", "Mundur satu frame.", "Frame berikutnya", "Maju satu frame.", "Percepatan (tahan)", "Memutar lebih cepat selama tombol ditahan. Kecepatan dipilih di panel.", "Formulir klasik: {a}. Tugas satu pertanyaan: {b}.", "Formulir klasik: {a}. Tidak dipakai pada tugas satu pertanyaan.", "Konfirmasi / kirim", "Mengonfirmasi vonis dan lanjut. Pada formulir klasik tekan dua kali: pertama siapkan, lalu kirim.", "Batalkan vonis", "Menekan “Batal” saat vonis menunggu konfirmasi, atau membatalkan penekanan Enter pertama.", "Pengaturan DemoScope", "Membuka atau menutup jendela pengaturan.", "Animasi", "Pilih tampilan indikator DemoScope. Pratinjau diputar langsung.", "Aktifkan animasi", "Kecepatan", "Lambat", "Normal", "Cepat", "Gaya", "Animasi nonaktif. Pratinjau tetap diputar agar Anda bisa membandingkan.", "Atur ulang", "Denyut", "Sebuah cincin melebar dari titik.", "Bernapas", "Cahaya lembut yang membesar lalu memudar.", "Riak", "Dua riak berurutan.", "Detak jantung", "Dua detak cepat, lalu jeda.", "Orbit", "Percikan kecil mengelilingi titik.", "Kedip", "Pudar masuk dan keluar sederhana.", "Vonis cepat {n}"],
      "it": ["Assegna qualsiasi tasto. Verrai avvisato prima che un tasto già in uso venga sostituito.", "Personalizza scorciatoie", "Stile, velocità e interruttore on/off dell’indicatore di DemoScope, con anteprime dal vivo.", "Impostazioni animazioni", "Scorciatoie da tastiera", "Clicca su un tasto per cambiarlo, poi premi il nuovo tasto. Se è già in uso, vedrai dove prima che venga sostituito qualcosa.", "Cambia tasto: {action}", "Premi un tasto…", "Annulla", "Ripristina predefinito ({key})", "Ripristina tutto", "Clicca di nuovo per ripristinare tutto", "Chiudi", "Non assegnato", "Questo tasto è già in uso", "{key} è assegnato a «{action}» ({group}). {desc}", "Sostituisci: «{other}» resterà senza tasto.", "Sostituisci: «{other}» resterà senza tasto. Scambia: «{other}» riceve {prev}.", "Sostituisci", "Scambia", "Questo tasto non può essere usato: è riservato dal browser o necessario per la navigazione.", "Maiusc può essere usato solo per l’azione a tasto premuto «Accelerazione».", "Tutte le scorciatoie sono tornate ai valori predefiniti.", "Nessuna modifica.", "«{key}» è già usato per «{action}». Modificalo in Scorciatoie da tastiera.", "Riproduzione", "Navigazione", "Verdetti", "Invio", "Interfaccia", "Riproduci / pausa", "Mette in pausa la clip o riprende la riproduzione.", "Audio attivo / disattivato", "Silenzia o riattiva l’audio della clip.", "Schermo intero", "Entra o esce dalla modalità schermo intero.", "Indietro", "Salta indietro di 5 secondi.", "Avanti", "Salta avanti di 5 secondi.", "Fotogramma precedente", "Torna indietro di un fotogramma.", "Fotogramma successivo", "Avanza di un fotogramma.", "Accelerazione (tieni premuto)", "Riproduce più velocemente finché il tasto è premuto. La velocità si sceglie nel pannello.", "Modulo classico: {a}. Compito a una domanda: {b}.", "Modulo classico: {a}. Non usato nel compito a una domanda.", "Conferma / invia", "Conferma il verdetto e prosegue. Nel modulo classico si preme due volte: prima prepara, poi invia.", "Annulla verdetto", "Preme «Annulla» mentre un verdetto attende conferma, oppure annulla la prima pressione di Invio.", "Impostazioni di DemoScope", "Apre o chiude la finestra delle impostazioni.", "Animazioni", "Scegli l’aspetto dell’indicatore di DemoScope. Le anteprime vengono riprodotte dal vivo.", "Attiva animazioni", "Velocità", "Lenta", "Normale", "Veloce", "Stile", "Le animazioni sono disattivate. Le anteprime vengono comunque riprodotte per poterle confrontare.", "Ripristina", "Impulso", "Un anello si espande dal punto.", "Respiro", "Un bagliore morbido che cresce e svanisce.", "Onde", "Due onde una dopo l’altra.", "Battito", "Un rapido doppio battito, poi pausa.", "Orbita", "Una piccola scintilla gira attorno al punto.", "Lampeggio", "Una semplice dissolvenza in entrata e in uscita.", "Verdetto rapido {n}"],
      "ja": ["任意のキーを割り当てできます。すでに使われているキーを置き換える前に警告が表示されます。", "ショートカットをカスタマイズ", "DemoScope インジケーターのスタイル・速度・オン/オフの切り替えです。ライブプレビュー付き。", "アニメーション設定", "ショートカットキー", "キーをクリックして変更し、新しいキーを押してください。すでに使われている場合は、置き換える前にその場所が表示されます。", "キーを変更：{action}", "キーを押してください…", "キャンセル", "デフォルトに戻す（{key}）", "すべてリセット", "もう一度クリックするとすべてリセットします", "閉じる", "未設定", "このキーはすでに使われています", "{key} は「{action}」（{group}）に割り当てられています。{desc}", "置き換え：「{other}」のキーはなくなります。", "置き換え：「{other}」のキーはなくなります。入れ替え：「{other}」に {prev} が割り当てられます。", "置き換え", "入れ替え", "このキーは使用できません。ブラウザで予約されているか、ナビゲーションに必要です。", "Shift は押し続ける操作「加速」にのみ使用できます。", "すべてのショートカットを初期設定に戻しました。", "変更はありません。", "「{key}」はすでに「{action}」に使われています。ショートカットキーで変更してください。", "再生", "ナビゲーション", "判定", "送信", "インターフェース", "再生 / 一時停止", "クリップを一時停止、または再生を再開します。", "音声オン / オフ", "クリップの音声をミュート、またはミュート解除します。", "全画面", "全画面表示に切り替え、または終了します。", "巻き戻し", "5 秒戻ります。", "早送り", "5 秒進みます。", "前のフレーム", "1 フレーム戻ります。", "次のフレーム", "1 フレーム進みます。", "加速（押し続ける）", "キーを押している間、速く再生します。速度はパネルで選択します。", "従来のフォーム：{a}。単一質問タスク：{b}。", "従来のフォーム：{a}。単一質問タスクでは使いません。", "確定 / 送信", "判定を確定して次へ進みます。従来のフォームでは 2 回押します（1 回目で準備、2 回目で送信）。", "判定を取り消す", "判定が確認待ちのときに「キャンセル」を押す、または 1 回目の Enter を取り消します。", "DemoScope 設定", "設定ウィンドウを開く、または閉じます。", "アニメーション", "DemoScope インジケーターの見た目を選びます。プレビューはライブで再生されます。", "アニメーションを有効にする", "速度", "遅い", "標準", "速い", "スタイル", "アニメーションはオフです。比較できるよう、プレビューは再生されます。", "リセット", "パルス", "点から輪が広がります。", "呼吸", "やわらかな光が膨らんで消えていきます。", "波紋", "2 つの波紋が順に広がります。", "鼓動", "素早い二拍のあと、休止します。", "軌道", "小さな火花が点の周りを回ります。", "点滅", "シンプルなフェードイン・フェードアウト。", "クイック判定 {n}"],
      "ko": ["원하는 키를 지정하세요. 이미 사용 중인 키를 바꾸기 전에 경고가 표시됩니다.", "단축키 설정", "DemoScope 표시기의 스타일, 속도, 켜기/끄기를 실시간 미리보기와 함께 설정합니다.", "애니메이션 설정", "단축키", "키를 클릭해 변경한 다음 새 키를 누르세요. 이미 사용 중이면 교체하기 전에 어디에 쓰이는지 표시됩니다.", "키 변경: {action}", "키를 누르세요…", "취소", "기본값으로 재설정 ({key})", "모두 재설정", "다시 클릭하면 모두 재설정됩니다", "닫기", "지정 안 됨", "이 키는 이미 사용 중입니다", "{key} 키는 “{action}”({group})에 지정되어 있습니다. {desc}", "교체: “{other}”에는 키가 없어집니다.", "교체: “{other}”에는 키가 없어집니다. 맞바꾸기: “{other}”가 {prev} 키를 받습니다.", "교체", "맞바꾸기", "이 키는 사용할 수 없습니다. 브라우저에서 예약되어 있거나 탐색에 필요합니다.", "Shift는 누르고 있는 동작인 “가속”에만 사용할 수 있습니다.", "모든 단축키가 기본값으로 돌아갔습니다.", "변경 없음.", "“{key}” 키는 이미 “{action}”에 사용 중입니다. 단축키에서 변경하세요.", "재생", "탐색", "판정", "제출", "인터페이스", "재생 / 일시정지", "클립을 일시정지하거나 재생을 이어갑니다.", "소리 켜기 / 끄기", "클립 소리를 음소거하거나 해제합니다.", "전체 화면", "전체 화면 모드로 들어가거나 나옵니다.", "뒤로 감기", "5초 뒤로 이동합니다.", "앞으로 감기", "5초 앞으로 이동합니다.", "이전 프레임", "한 프레임 뒤로 이동합니다.", "다음 프레임", "한 프레임 앞으로 이동합니다.", "가속 (누르고 있기)", "키를 누르고 있는 동안 더 빠르게 재생합니다. 속도는 패널에서 선택합니다.", "기존 양식: {a}. 단일 질문 작업: {b}.", "기존 양식: {a}. 단일 질문 작업에서는 사용하지 않습니다.", "확인 / 제출", "판정을 확인하고 다음으로 넘어갑니다. 기존 양식에서는 두 번 누릅니다. 먼저 준비하고 그다음 전송합니다.", "판정 취소", "판정이 확인을 기다리는 동안 “취소”를 누르거나 첫 번째 Enter 입력을 해제합니다.", "DemoScope 설정", "설정 창을 열거나 닫습니다.", "애니메이션", "DemoScope 표시기의 모양을 선택하세요. 미리보기는 실시간으로 재생됩니다.", "애니메이션 사용", "속도", "느리게", "보통", "빠르게", "스타일", "애니메이션이 꺼져 있습니다. 비교할 수 있도록 미리보기는 계속 재생됩니다.", "재설정", "펄스", "점에서 고리가 퍼져 나갑니다.", "숨쉬기", "부드러운 빛이 커졌다가 사라집니다.", "물결", "물결 두 개가 차례로 퍼집니다.", "심장박동", "빠른 두 번의 박동 뒤 잠시 쉽니다.", "궤도", "작은 불꽃이 점 주위를 돕니다.", "깜박임", "간단한 페이드 인·아웃.", "빠른 판정 {n}"],
      "nl": ["Wijs elke toets toe. U krijgt een waarschuwing voordat een toets die al in gebruik is wordt vervangen.", "Sneltoetsen aanpassen", "Stijl, snelheid en aan/uit-schakelaar voor de DemoScope-indicator, met live voorbeelden.", "Animatie-instellingen", "Sneltoetsen", "Klik op een toets om die te wijzigen en druk dan op de nieuwe toets. Als die al in gebruik is, ziet u waar voordat er iets wordt vervangen.", "Toets wijzigen: {action}", "Druk op een toets…", "Annuleren", "Standaard herstellen ({key})", "Alles herstellen", "Klik nogmaals om alles te herstellen", "Sluiten", "Niet ingesteld", "Deze toets is al in gebruik", "{key} is toegewezen aan ‘{action}’ ({group}). {desc}", "Vervangen: ‘{other}’ heeft dan geen toets.", "Vervangen: ‘{other}’ heeft dan geen toets. Omwisselen: ‘{other}’ krijgt {prev}.", "Vervangen", "Omwisselen", "Deze toets kan niet worden gebruikt: hij is gereserveerd door de browser of nodig voor navigatie.", "Shift kan alleen worden gebruikt voor de ingedrukt-houden-actie ‘Snelheidsboost’.", "Alle sneltoetsen zijn teruggezet naar de standaardwaarden.", "Geen wijziging.", "‘{key}’ wordt al gebruikt voor ‘{action}’. Wijzig dat bij Sneltoetsen.", "Afspelen", "Navigatie", "Oordelen", "Verzenden", "Interface", "Afspelen / pauzeren", "Pauzeert de clip of hervat het afspelen.", "Geluid aan / uit", "Dempt de clip of zet het geluid weer aan.", "Volledig scherm", "Gaat naar of verlaat de modus volledig scherm.", "Terugspoelen", "Springt 5 seconden terug.", "Vooruit", "Springt 5 seconden vooruit.", "Vorig frame", "Gaat één frame terug.", "Volgend frame", "Gaat één frame vooruit.", "Snelheidsboost (ingedrukt houden)", "Speelt sneller af zolang de toets ingedrukt is. De snelheid kies je in het paneel.", "Klassiek formulier: {a}. Taak met één vraag: {b}.", "Klassiek formulier: {a}. Niet gebruikt in de taak met één vraag.", "Bevestigen / verzenden", "Bevestigt het oordeel en gaat verder. In het klassieke formulier druk je twee keer: eerst voorbereiden, dan verzenden.", "Oordeel annuleren", "Drukt op ‘Annuleren’ terwijl een oordeel op bevestiging wacht, of maakt de eerste Enter-druk ongedaan.", "DemoScope-instellingen", "Opent of sluit het instellingenvenster.", "Animaties", "Kies hoe de DemoScope-indicator eruitziet. Voorbeelden worden live afgespeeld.", "Animaties inschakelen", "Snelheid", "Langzaam", "Normaal", "Snel", "Stijl", "Animaties staan uit. Voorbeelden worden nog steeds afgespeeld zodat u kunt vergelijken.", "Herstellen", "Puls", "Een ring breidt zich uit vanaf de stip.", "Ademen", "Een zachte gloed die aanzwelt en vervaagt.", "Rimpelingen", "Twee rimpelingen na elkaar.", "Hartslag", "Een snelle dubbele slag, dan rust.", "Baan", "Een vonkje draait rond de stip.", "Knipperen", "Een eenvoudige fade in en uit.", "Snel oordeel {n}"],
      "no": ["Tildel en hvilken som helst tast. Du blir varslet før en tast som allerede er i bruk erstattes.", "Tilpass hurtigtaster", "Stil, hastighet og av/på-bryter for DemoScope-indikatoren, med direkte forhåndsvisning.", "Animasjonsinnstillinger", "Hurtigtaster", "Klikk på en tast for å endre den, og trykk deretter på den nye tasten. Hvis den allerede er i bruk, ser du hvor før noe erstattes.", "Endre tast: {action}", "Trykk på en tast …", "Avbryt", "Tilbakestill til standard ({key})", "Tilbakestill alle", "Klikk igjen for å tilbakestille alle", "Lukk", "Ikke tildelt", "Denne tasten er allerede i bruk", "{key} er tildelt «{action}» ({group}). {desc}", "Erstatt: «{other}» står uten tast.", "Erstatt: «{other}» står uten tast. Bytt: «{other}» får {prev}.", "Erstatt", "Bytt", "Denne tasten kan ikke brukes: den er reservert av nettleseren eller trengs til navigasjon.", "Shift kan bare brukes til holdehandlingen «Fartsboost».", "Alle hurtigtaster er tilbakestilt til standard.", "Ingen endring.", "«{key}» brukes allerede til «{action}». Endre det under Hurtigtaster.", "Avspilling", "Navigasjon", "Vurderinger", "Innsending", "Grensesnitt", "Spill av / pause", "Setter klippet på pause eller fortsetter avspillingen.", "Lyd på / av", "Slår av eller på lyden til klippet.", "Fullskjerm", "Går til eller forlater fullskjermmodus.", "Spol tilbake", "Hopper 5 sekunder tilbake.", "Spol frem", "Hopper 5 sekunder frem.", "Forrige bilde", "Går ett bilde tilbake.", "Neste bilde", "Går ett bilde frem.", "Fartsboost (hold)", "Spiller av raskere mens tasten holdes nede. Hastigheten velges i panelet.", "Klassisk skjema: {a}. Oppgave med ett spørsmål: {b}.", "Klassisk skjema: {a}. Brukes ikke i oppgaven med ett spørsmål.", "Bekreft / send", "Bekrefter vurderingen og går videre. I det klassiske skjemaet trykker du to ganger: først klargjør, så send.", "Angre vurdering", "Trykker «Avbryt» mens en vurdering venter på bekreftelse, eller angrer det første trykket på Enter.", "DemoScope-innstillinger", "Åpner eller lukker innstillingsvinduet.", "Animasjoner", "Velg hvordan DemoScope-indikatoren ser ut. Forhåndsvisningene spilles av direkte.", "Slå på animasjoner", "Hastighet", "Sakte", "Normal", "Rask", "Stil", "Animasjoner er slått av. Forhåndsvisningene spilles fortsatt av, slik at du kan sammenligne.", "Tilbakestill", "Puls", "En ring utvider seg fra prikken.", "Pust", "Et mykt skjær som svulmer og tones ut.", "Bølger", "To bølger etter hverandre.", "Hjerteslag", "Et raskt dobbeltslag, så pause.", "Bane", "En liten gnist kretser rundt prikken.", "Blink", "En enkel inn- og uttoning.", "Rask vurdering {n}"],
      "pl": ["Przypisz dowolny klawisz. Przed zastąpieniem klawisza, który jest już używany, zobaczysz ostrzeżenie.", "Dostosuj skróty klawiszowe", "Styl, szybkość i włącznik wskaźnika DemoScope z podglądem na żywo.", "Ustawienia animacji", "Skróty klawiszowe", "Kliknij klawisz, aby go zmienić, a następnie naciśnij nowy. Jeśli jest już używany, zobaczysz gdzie, zanim cokolwiek zostanie zastąpione.", "Zmień klawisz: {action}", "Naciśnij klawisz…", "Anuluj", "Przywróć domyślny ({key})", "Resetuj wszystko", "Kliknij ponownie, aby zresetować wszystko", "Zamknij", "Nie przypisano", "Ten klawisz jest już używany", "Klawisz {key} jest przypisany do „{action}” ({group}). {desc}", "Zastąp: „{other}” zostanie bez klawisza.", "Zastąp: „{other}” zostanie bez klawisza. Zamień: „{other}” otrzyma {prev}.", "Zastąp", "Zamień", "Tego klawisza nie można użyć: jest zarezerwowany przez przeglądarkę lub potrzebny do nawigacji.", "Shift można użyć tylko do akcji z przytrzymaniem „Przyspieszenie”.", "Wszystkie skróty przywrócono do ustawień domyślnych.", "Bez zmian.", "„{key}” jest już używany dla „{action}”. Zmień to w Skrótach klawiszowych.", "Odtwarzanie", "Nawigacja", "Werdykty", "Wysyłanie", "Interfejs", "Odtwarzaj / pauza", "Wstrzymuje klip lub wznawia odtwarzanie.", "Dźwięk wł. / wył.", "Wycisza lub włącza dźwięk klipu.", "Pełny ekran", "Włącza lub opuszcza tryb pełnoekranowy.", "Do tyłu", "Przeskakuje o 5 sekund do tyłu.", "Do przodu", "Przeskakuje o 5 sekund do przodu.", "Poprzednia klatka", "Cofa o jedną klatkę.", "Następna klatka", "Przesuwa o jedną klatkę do przodu.", "Przyspieszenie (przytrzymaj)", "Odtwarza szybciej, dopóki klawisz jest przytrzymany. Szybkość wybiera się w panelu.", "Klasyczny formularz: {a}. Zadanie z jednym pytaniem: {b}.", "Klasyczny formularz: {a}. Nieużywane w zadaniu z jednym pytaniem.", "Potwierdź / wyślij", "Potwierdza werdykt i przechodzi dalej. W klasycznym formularzu naciska się dwa razy: najpierw przygotowanie, potem wysłanie.", "Anuluj werdykt", "Naciska „Anuluj”, gdy werdykt czeka na potwierdzenie, lub cofa pierwsze naciśnięcie Enter.", "Ustawienia DemoScope", "Otwiera lub zamyka okno ustawień.", "Animacje", "Wybierz wygląd wskaźnika DemoScope. Podglądy odtwarzane są na żywo.", "Włącz animacje", "Szybkość", "Wolno", "Normalnie", "Szybko", "Styl", "Animacje są wyłączone. Podglądy nadal się odtwarzają, abyś mógł je porównać.", "Resetuj", "Puls", "Z kropki rozchodzi się pierścień.", "Oddech", "Miękka poświata, która narasta i gaśnie.", "Fale", "Dwie fale jedna po drugiej.", "Bicie serca", "Szybkie podwójne uderzenie, potem przerwa.", "Orbita", "Mała iskra krąży wokół kropki.", "Mruganie", "Proste płynne pojawianie się i zanikanie.", "Szybki werdykt {n}"],
      "pt-BR": ["Atribua qualquer tecla. Você será avisado antes de uma tecla já em uso ser substituída.", "Personalizar atalhos", "Estilo, velocidade e chave liga/desliga do indicador do DemoScope, com pré-visualizações ao vivo.", "Configurações de animação", "Atalhos de teclado", "Clique em uma tecla para alterá-la e depois pressione a nova tecla. Se ela já estiver em uso, você verá onde antes de algo ser substituído.", "Alterar tecla: {action}", "Pressione uma tecla…", "Cancelar", "Restaurar padrão ({key})", "Restaurar tudo", "Clique novamente para restaurar tudo", "Fechar", "Não atribuída", "Esta tecla já está em uso", "{key} está atribuída a “{action}” ({group}). {desc}", "Substituir: “{other}” ficará sem tecla.", "Substituir: “{other}” ficará sem tecla. Trocar: “{other}” recebe {prev}.", "Substituir", "Trocar", "Esta tecla não pode ser usada: ela é reservada pelo navegador ou necessária para a navegação.", "Shift só pode ser usado para a ação de manter pressionado “Aceleração”.", "Todos os atalhos voltaram ao padrão.", "Sem alterações.", "“{key}” já é usada para “{action}”. Altere em Atalhos de teclado.", "Reprodução", "Navegação", "Veredictos", "Envio", "Interface", "Reproduzir / pausar", "Pausa o clipe ou retoma a reprodução.", "Som ligado / desligado", "Silencia ou reativa o som do clipe.", "Tela cheia", "Entra ou sai do modo de tela cheia.", "Voltar", "Volta 5 segundos.", "Avançar", "Avança 5 segundos.", "Quadro anterior", "Volta um quadro.", "Próximo quadro", "Avança um quadro.", "Aceleração (manter pressionado)", "Reproduz mais rápido enquanto a tecla estiver pressionada. A velocidade é escolhida no painel.", "Formulário clássico: {a}. Tarefa de uma pergunta: {b}.", "Formulário clássico: {a}. Não é usada na tarefa de uma pergunta.", "Confirmar / enviar", "Confirma o veredicto e avança. No formulário clássico, pressione duas vezes: primeiro preparar, depois enviar.", "Cancelar veredicto", "Pressiona “Cancelar” enquanto um veredicto aguarda confirmação, ou desfaz o primeiro toque em Enter.", "Configurações do DemoScope", "Abre ou fecha a janela de configurações.", "Animações", "Escolha a aparência do indicador do DemoScope. As pré-visualizações rodam ao vivo.", "Ativar animações", "Velocidade", "Lenta", "Normal", "Rápida", "Estilo", "As animações estão desativadas. As pré-visualizações continuam rodando para você comparar.", "Restaurar", "Pulso", "Um anel se expande a partir do ponto.", "Respiração", "Um brilho suave que cresce e se apaga.", "Ondas", "Duas ondas, uma após a outra.", "Batimento", "Uma batida dupla rápida, depois pausa.", "Órbita", "Uma pequena faísca gira em volta do ponto.", "Piscar", "Um simples esmaecer de entrada e saída.", "Veredicto rápido {n}"],
      "pt-PT": ["Atribua qualquer tecla. Será avisado antes de uma tecla já em uso ser substituída.", "Personalizar atalhos", "Estilo, velocidade e interruptor de ligar/desligar do indicador do DemoScope, com pré-visualizações em direto.", "Definições de animação", "Atalhos de teclado", "Clique numa tecla para a alterar e depois prima a nova tecla. Se já estiver em uso, verá onde antes de algo ser substituído.", "Alterar tecla: {action}", "Prima uma tecla…", "Cancelar", "Repor predefinição ({key})", "Repor tudo", "Clique novamente para repor tudo", "Fechar", "Não atribuída", "Esta tecla já está em uso", "{key} está atribuída a «{action}» ({group}). {desc}", "Substituir: «{other}» ficará sem tecla.", "Substituir: «{other}» ficará sem tecla. Trocar: «{other}» recebe {prev}.", "Substituir", "Trocar", "Não é possível usar esta tecla: está reservada pelo navegador ou é necessária para a navegação.", "Shift só pode ser usado para a ação de manter premido «Aceleração».", "Todos os atalhos foram repostos para os valores predefinidos.", "Sem alterações.", "«{key}» já é usada para «{action}». Altere-a em Atalhos de teclado.", "Reprodução", "Navegação", "Veredictos", "Envio", "Interface", "Reproduzir / pausa", "Pausa o clipe ou retoma a reprodução.", "Som ligado / desligado", "Silencia ou reativa o som do clipe.", "Ecrã inteiro", "Entra ou sai do modo de ecrã inteiro.", "Recuar", "Salta 5 segundos para trás.", "Avançar", "Salta 5 segundos para a frente.", "Fotograma anterior", "Recua um fotograma.", "Fotograma seguinte", "Avança um fotograma.", "Aceleração (manter premido)", "Reproduz mais depressa enquanto a tecla estiver premida. A velocidade escolhe-se no painel.", "Formulário clássico: {a}. Tarefa de uma só pergunta: {b}.", "Formulário clássico: {a}. Não é usada na tarefa de uma só pergunta.", "Confirmar / enviar", "Confirma o veredicto e avança. No formulário clássico prime-se duas vezes: primeiro preparar, depois enviar.", "Cancelar veredicto", "Prime «Cancelar» enquanto um veredicto aguarda confirmação, ou anula o primeiro toque em Enter.", "Definições do DemoScope", "Abre ou fecha a janela de definições.", "Animações", "Escolha o aspeto do indicador do DemoScope. As pré-visualizações são reproduzidas em direto.", "Ativar animações", "Velocidade", "Lenta", "Normal", "Rápida", "Estilo", "As animações estão desativadas. As pré-visualizações continuam a ser reproduzidas para poder comparar.", "Repor", "Pulso", "Um anel expande-se a partir do ponto.", "Respiração", "Um brilho suave que cresce e se desvanece.", "Ondas", "Duas ondas, uma a seguir à outra.", "Batimento", "Uma batida dupla rápida, depois pausa.", "Órbita", "Uma pequena faísca circula à volta do ponto.", "Piscar", "Um simples desvanecer de entrada e saída.", "Veredicto rápido {n}"],
      "ro": ["Atribuiți orice tastă. Veți fi avertizat înainte ca o tastă deja folosită să fie înlocuită.", "Personalizează comenzile rapide", "Stilul, viteza și comutatorul pornit/oprit pentru indicatorul DemoScope, cu previzualizări în direct.", "Setări de animație", "Comenzi rapide", "Faceți clic pe o tastă pentru a o schimba, apoi apăsați tasta nouă. Dacă este deja folosită, veți vedea unde, înainte să se înlocuiască ceva.", "Schimbă tasta: {action}", "Apăsați o tastă…", "Anulează", "Resetează la implicit ({key})", "Resetează tot", "Faceți clic din nou pentru a reseta tot", "Închide", "Neatribuită", "Această tastă este deja folosită", "{key} este atribuită pentru „{action}” ({group}). {desc}", "Înlocuiește: „{other}” va rămâne fără tastă.", "Înlocuiește: „{other}” va rămâne fără tastă. Schimbă între ele: „{other}” primește {prev}.", "Înlocuiește", "Schimbă între ele", "Această tastă nu poate fi folosită: este rezervată de browser sau necesară pentru navigare.", "Shift poate fi folosit doar pentru acțiunea cu tastă ținută „Accelerare”.", "Toate comenzile rapide au revenit la valorile implicite.", "Nicio modificare.", "„{key}” este deja folosită pentru „{action}”. Schimbați în Comenzi rapide.", "Redare", "Navigare", "Verdicte", "Trimitere", "Interfață", "Redare / pauză", "Pune clipul pe pauză sau reia redarea.", "Sunet pornit / oprit", "Oprește sau repornește sunetul clipului.", "Ecran complet", "Intră sau iese din modul ecran complet.", "Înapoi", "Sare 5 secunde înapoi.", "Înainte", "Sare 5 secunde înainte.", "Cadrul anterior", "Merge un cadru înapoi.", "Cadrul următor", "Merge un cadru înainte.", "Accelerare (ținută)", "Redă mai repede cât timp tasta este ținută apăsată. Viteza se alege în panou.", "Formular clasic: {a}. Sarcină cu o singură întrebare: {b}.", "Formular clasic: {a}. Nu se folosește în sarcina cu o singură întrebare.", "Confirmă / trimite", "Confirmă verdictul și merge mai departe. În formularul clasic se apasă de două ori: mai întâi pregătire, apoi trimitere.", "Anulează verdictul", "Apasă „Anulează” cât timp un verdict așteaptă confirmarea sau anulează prima apăsare pe Enter.", "Setări DemoScope", "Deschide sau închide fereastra de setări.", "Animații", "Alegeți cum arată indicatorul DemoScope. Previzualizările rulează în direct.", "Activează animațiile", "Viteză", "Lent", "Normal", "Rapid", "Stil", "Animațiile sunt dezactivate. Previzualizările rulează în continuare, ca să puteți compara.", "Resetează", "Puls", "Un inel se extinde din punct.", "Respirație", "O strălucire blândă care crește și se stinge.", "Valuri", "Două valuri, unul după altul.", "Bătaie de inimă", "O dublă bătaie rapidă, apoi pauză.", "Orbită", "O mică scânteie se rotește în jurul punctului.", "Clipire", "O simplă apariție și dispariție treptată.", "Verdict rapid {n}"],
      "sv": ["Tilldela vilken tangent som helst. Du varnas innan en tangent som redan används ersätts.", "Anpassa kortkommandon", "Stil, hastighet och av/på-reglage för DemoScope-indikatorn, med liveförhandsvisning.", "Animationsinställningar", "Kortkommandon", "Klicka på en tangent för att ändra den och tryck sedan på den nya tangenten. Om den redan används ser du var innan något ersätts.", "Ändra tangent: {action}", "Tryck på en tangent …", "Avbryt", "Återställ till standard ({key})", "Återställ alla", "Klicka igen för att återställa alla", "Stäng", "Inte tilldelad", "Den här tangenten används redan", "{key} är tilldelad ”{action}” ({group}). {desc}", "Ersätt: ”{other}” blir utan tangent.", "Ersätt: ”{other}” blir utan tangent. Byt: ”{other}” får {prev}.", "Ersätt", "Byt", "Den här tangenten kan inte användas: den är reserverad av webbläsaren eller behövs för navigering.", "Shift kan bara användas för hållåtgärden ”Snabbare uppspelning”.", "Alla kortkommandon har återställts till standard.", "Ingen ändring.", "”{key}” används redan för ”{action}”. Ändra det under Kortkommandon.", "Uppspelning", "Navigering", "Bedömningar", "Inskickning", "Gränssnitt", "Spela / pausa", "Pausar klippet eller återupptar uppspelningen.", "Ljud på / av", "Stänger av eller slår på klippets ljud.", "Helskärm", "Går in i eller lämnar helskärmsläget.", "Spola tillbaka", "Hoppar 5 sekunder bakåt.", "Spola framåt", "Hoppar 5 sekunder framåt.", "Föregående bildruta", "Går en bildruta bakåt.", "Nästa bildruta", "Går en bildruta framåt.", "Snabbare uppspelning (håll)", "Spelar upp snabbare medan tangenten hålls nedtryckt. Hastigheten väljs i panelen.", "Klassiskt formulär: {a}. Uppgift med en fråga: {b}.", "Klassiskt formulär: {a}. Används inte i uppgiften med en fråga.", "Bekräfta / skicka", "Bekräftar bedömningen och går vidare. I det klassiska formuläret trycker du två gånger: först förbered, sedan skicka.", "Ångra bedömning", "Trycker på ”Avbryt” medan en bedömning väntar på bekräftelse, eller ångrar det första trycket på Enter.", "DemoScope-inställningar", "Öppnar eller stänger inställningsfönstret.", "Animationer", "Välj hur DemoScope-indikatorn ser ut. Förhandsvisningarna spelas upp live.", "Aktivera animationer", "Hastighet", "Långsam", "Normal", "Snabb", "Stil", "Animationer är avstängda. Förhandsvisningarna spelas ändå upp så att du kan jämföra.", "Återställ", "Puls", "En ring expanderar från pricken.", "Andning", "Ett mjukt sken som sväller och tonar bort.", "Vågor", "Två vågor efter varandra.", "Hjärtslag", "Ett snabbt dubbelslag, sedan paus.", "Omloppsbana", "En liten gnista cirklar runt pricken.", "Blinkning", "En enkel in- och uttoning.", "Snabb bedömning {n}"],
      "th": ["กำหนดปุ่มใดก็ได้ ระบบจะเตือนก่อนที่จะแทนที่ปุ่มที่ถูกใช้งานอยู่แล้ว", "ปรับแต่งปุ่มลัด", "รูปแบบ ความเร็ว และสวิตช์เปิด/ปิดของตัวบ่งชี้ DemoScope พร้อมตัวอย่างแบบสด", "การตั้งค่าแอนิเมชัน", "ปุ่มลัด", "คลิกที่ปุ่มเพื่อเปลี่ยน แล้วกดปุ่มใหม่ หากปุ่มนั้นถูกใช้อยู่แล้ว คุณจะเห็นว่าใช้ที่ไหนก่อนที่จะมีการแทนที่", "เปลี่ยนปุ่ม: {action}", "กดปุ่มใดก็ได้…", "ยกเลิก", "รีเซ็ตเป็นค่าเริ่มต้น ({key})", "รีเซ็ตทั้งหมด", "คลิกอีกครั้งเพื่อรีเซ็ตทั้งหมด", "ปิด", "ยังไม่ได้กำหนด", "ปุ่มนี้ถูกใช้งานอยู่แล้ว", "{key} ถูกกำหนดให้ “{action}” ({group}) {desc}", "แทนที่: “{other}” จะไม่มีปุ่ม", "แทนที่: “{other}” จะไม่มีปุ่ม สลับ: “{other}” จะได้ {prev}", "แทนที่", "สลับ", "ไม่สามารถใช้ปุ่มนี้ได้: เบราว์เซอร์สงวนไว้หรือจำเป็นสำหรับการนำทาง", "Shift ใช้ได้เฉพาะการกระทำแบบกดค้าง “เร่งความเร็ว” เท่านั้น", "ปุ่มลัดทั้งหมดกลับเป็นค่าเริ่มต้นแล้ว", "ไม่มีการเปลี่ยนแปลง", "“{key}” ถูกใช้กับ “{action}” อยู่แล้ว โปรดเปลี่ยนที่ปุ่มลัด", "การเล่น", "การนำทาง", "คำตัดสิน", "การส่ง", "อินเทอร์เฟซ", "เล่น / หยุดชั่วคราว", "หยุดคลิปชั่วคราวหรือเล่นต่อ", "เปิด / ปิดเสียง", "ปิดหรือเปิดเสียงของคลิป", "เต็มหน้าจอ", "เข้าหรือออกจากโหมดเต็มหน้าจอ", "ย้อนกลับ", "ข้ามย้อนหลัง 5 วินาที", "ไปข้างหน้า", "ข้ามไปข้างหน้า 5 วินาที", "เฟรมก่อนหน้า", "ถอยหลังหนึ่งเฟรม", "เฟรมถัดไป", "เดินหน้าหนึ่งเฟรม", "เร่งความเร็ว (กดค้าง)", "เล่นเร็วขึ้นขณะกดปุ่มค้าง เลือกความเร็วได้ในแผง", "แบบฟอร์มคลาสสิก: {a} งานแบบคำถามเดียว: {b}", "แบบฟอร์มคลาสสิก: {a} ไม่ใช้ในงานแบบคำถามเดียว", "ยืนยัน / ส่ง", "ยืนยันคำตัดสินและไปต่อ ในแบบฟอร์มคลาสสิกต้องกดสองครั้ง: ครั้งแรกเตรียม แล้วจึงส่ง", "ยกเลิกคำตัดสิน", "กด “ยกเลิก” ขณะที่คำตัดสินรอการยืนยัน หรือยกเลิกการกด Enter ครั้งแรก", "การตั้งค่า DemoScope", "เปิดหรือปิดหน้าต่างการตั้งค่า", "แอนิเมชัน", "เลือกรูปลักษณ์ของตัวบ่งชี้ DemoScope ตัวอย่างจะเล่นแบบสด", "เปิดใช้แอนิเมชัน", "ความเร็ว", "ช้า", "ปกติ", "เร็ว", "รูปแบบ", "แอนิเมชันปิดอยู่ ตัวอย่างยังคงเล่นเพื่อให้คุณเปรียบเทียบได้", "รีเซ็ต", "พัลส์", "วงแหวนขยายออกจากจุด", "หายใจ", "แสงนุ่ม ๆ ที่สว่างขึ้นแล้วค่อย ๆ จางลง", "ระลอกคลื่น", "คลื่นสองระลอกต่อเนื่องกัน", "จังหวะหัวใจ", "เต้นสองครั้งรวดเร็ว แล้วหยุดพัก", "วงโคจร", "ประกายไฟเล็ก ๆ วนรอบจุด", "กะพริบ", "ค่อย ๆ ปรากฏและจางหายแบบเรียบง่าย", "คำตัดสินด่วน {n}"],
      "tr": ["İstediğiniz tuşu atayın. Zaten kullanılan bir tuş değiştirilmeden önce uyarılırsınız.", "Kısayolları özelleştir", "DemoScope göstergesinin stili, hızı ve açma/kapama düğmesi, canlı önizlemelerle.", "Animasyon ayarları", "Kısayol tuşları", "Değiştirmek için bir tuşa tıklayın, ardından yeni tuşa basın. Tuş zaten kullanılıyorsa, bir şey değiştirilmeden önce nerede kullanıldığını görürsünüz.", "Tuşu değiştir: {action}", "Bir tuşa basın…", "İptal", "Varsayılana sıfırla ({key})", "Tümünü sıfırla", "Tümünü sıfırlamak için tekrar tıklayın", "Kapat", "Atanmadı", "Bu tuş zaten kullanılıyor", "{key} tuşu “{action}” ({group}) işlevine atanmış. {desc}", "Değiştir: “{other}” tuşsuz kalır.", "Değiştir: “{other}” tuşsuz kalır. Takas et: “{other}” {prev} tuşunu alır.", "Değiştir", "Takas et", "Bu tuş kullanılamaz: tarayıcı tarafından ayrılmış veya gezinme için gerekli.", "Shift yalnızca basılı tutma eylemi olan “Hızlandırma” için kullanılabilir.", "Tüm kısayollar varsayılana döndürüldü.", "Değişiklik yok.", "“{key}” zaten “{action}” için kullanılıyor. Bunu Kısayol tuşları bölümünden değiştirin.", "Oynatma", "Gezinme", "Kararlar", "Gönderim", "Arayüz", "Oynat / duraklat", "Klibi duraklatır veya oynatmayı sürdürür.", "Ses açık / kapalı", "Klibin sesini kapatır veya açar.", "Tam ekran", "Tam ekran moduna girer veya çıkar.", "Geri sar", "5 saniye geri atlar.", "İleri sar", "5 saniye ileri atlar.", "Önceki kare", "Bir kare geri gider.", "Sonraki kare", "Bir kare ileri gider.", "Hızlandırma (basılı tut)", "Tuş basılı tutulurken daha hızlı oynatır. Hız panelden seçilir.", "Klasik form: {a}. Tek soruluk görev: {b}.", "Klasik form: {a}. Tek soruluk görevde kullanılmaz.", "Onayla / gönder", "Kararı onaylar ve devam eder. Klasik formda iki kez basılır: önce hazırla, sonra gönder.", "Kararı iptal et", "Bir karar onay beklerken “İptal”e basar veya ilk Enter basışını geri alır.", "DemoScope ayarları", "Ayarlar penceresini açar veya kapatır.", "Animasyonlar", "DemoScope göstergesinin görünümünü seçin. Önizlemeler canlı oynatılır.", "Animasyonları etkinleştir", "Hız", "Yavaş", "Normal", "Hızlı", "Stil", "Animasyonlar kapalı. Karşılaştırabilmeniz için önizlemeler yine de oynatılır.", "Sıfırla", "Nabız", "Noktadan bir halka yayılır.", "Nefes", "Büyüyüp sönen yumuşak bir parıltı.", "Dalgalar", "Art arda iki dalga.", "Kalp atışı", "Hızlı çift atış, sonra duraklama.", "Yörünge", "Küçük bir kıvılcım noktanın etrafında döner.", "Yanıp sönme", "Basit bir belirip kaybolma.", "Hızlı karar {n}"],
      "uk": ["Призначайте будь-яку клавішу. Вас попередять, перш ніж замінити клавішу, яка вже використовується.", "Налаштувати клавіші", "Стиль, швидкість і перемикач увімкнення індикатора DemoScope із живим попереднім переглядом.", "Налаштування анімації", "Гарячі клавіші", "Натисніть на клавішу, щоб змінити її, потім натисніть нову. Якщо вона вже зайнята, ви побачите, де саме, перш ніж щось замінюватиметься.", "Змінити клавішу: {action}", "Натисніть клавішу…", "Скасувати", "Скинути до типової ({key})", "Скинути все", "Натисніть ще раз, щоб скинути все", "Закрити", "Не призначено", "Ця клавіша вже зайнята", "{key} уже призначена для «{action}» ({group}). {desc}", "Замінити: у «{other}» не залишиться клавіші.", "Замінити: у «{other}» не залишиться клавіші. Поміняти місцями: «{other}» отримає {prev}.", "Замінити", "Поміняти", "Цю клавішу не можна використовувати: вона зарезервована браузером або потрібна для навігації.", "Shift можна використовувати лише для дії з утриманням «Прискорення».", "Усі клавіші повернуто до типових значень.", "Без змін.", "«{key}» уже використовується для «{action}». Змініть це в «Гарячих клавішах».", "Відтворення", "Навігація", "Вердикти", "Надсилання", "Інтерфейс", "Відтворення / пауза", "Ставить ролик на паузу або продовжує відтворення.", "Звук увімк. / вимк.", "Вимикає або вмикає звук ролика.", "Повноекранний режим", "Вмикає або вимикає повноекранний режим.", "Назад", "Перемотує на 5 секунд назад.", "Вперед", "Перемотує на 5 секунд уперед.", "Попередній кадр", "Крок на один кадр назад.", "Наступний кадр", "Крок на один кадр уперед.", "Прискорення (утримувати)", "Пришвидшує відтворення, поки клавішу утримують. Швидкість обирається на панелі.", "Класична форма: {a}. Завдання з одним питанням: {b}.", "Класична форма: {a}. У завданні з одним питанням не використовується.", "Підтвердити / надіслати", "Підтверджує вердикт і переходить далі. У класичній формі натискається двічі: спочатку підготовка, потім надсилання.", "Скасувати вердикт", "Натискає «Скасувати», поки вердикт чекає підтвердження, або скасовує перше натискання Enter.", "Налаштування DemoScope", "Відкриває або закриває вікно налаштувань.", "Анімації", "Оберіть вигляд індикатора DemoScope. Попередній перегляд відтворюється наживо.", "Увімкнути анімації", "Швидкість", "Повільно", "Звичайно", "Швидко", "Стиль", "Анімації вимкнено. Попередній перегляд усе одно відтворюється, щоб можна було порівняти.", "Скинути", "Пульс", "Від точки розходиться кільце.", "Дихання", "М’яке сяйво, що наростає і згасає.", "Хвилі", "Дві хвилі одна за одною.", "Серцебиття", "Швидкий подвійний удар і пауза.", "Орбіта", "Маленька іскра кружляє навколо точки.", "Блимання", "Просте плавне згасання і повернення.", "Швидкий вердикт {n}"],
      "vi": ["Gán bất kỳ phím nào. Bạn sẽ được cảnh báo trước khi một phím đang được dùng bị thay thế.", "Tùy chỉnh phím tắt", "Kiểu, tốc độ và công tắc bật/tắt của chỉ báo DemoScope, kèm bản xem trước trực tiếp.", "Cài đặt hoạt ảnh", "Phím tắt", "Nhấp vào một phím để đổi, rồi nhấn phím mới. Nếu phím đã được dùng, bạn sẽ thấy nó ở đâu trước khi có gì bị thay thế.", "Đổi phím: {action}", "Nhấn một phím…", "Hủy", "Đặt lại mặc định ({key})", "Đặt lại tất cả", "Nhấp lần nữa để đặt lại tất cả", "Đóng", "Chưa gán", "Phím này đã được sử dụng", "{key} đã được gán cho “{action}” ({group}). {desc}", "Thay thế: “{other}” sẽ không còn phím.", "Thay thế: “{other}” sẽ không còn phím. Hoán đổi: “{other}” nhận {prev}.", "Thay thế", "Hoán đổi", "Không thể dùng phím này: trình duyệt đã dành riêng hoặc cần cho việc điều hướng.", "Shift chỉ có thể dùng cho thao tác giữ phím “Tăng tốc”.", "Tất cả phím tắt đã trở về mặc định.", "Không có thay đổi.", "“{key}” đã được dùng cho “{action}”. Hãy đổi trong Phím tắt.", "Phát", "Điều hướng", "Kết luận", "Gửi", "Giao diện", "Phát / tạm dừng", "Tạm dừng clip hoặc tiếp tục phát.", "Bật / tắt âm thanh", "Tắt hoặc bật tiếng của clip.", "Toàn màn hình", "Vào hoặc thoát chế độ toàn màn hình.", "Tua lại", "Nhảy lùi 5 giây.", "Tua tới", "Nhảy tới 5 giây.", "Khung hình trước", "Lùi một khung hình.", "Khung hình sau", "Tiến một khung hình.", "Tăng tốc (giữ phím)", "Phát nhanh hơn khi đang giữ phím. Tốc độ được chọn trong bảng điều khiển.", "Biểu mẫu cổ điển: {a}. Nhiệm vụ một câu hỏi: {b}.", "Biểu mẫu cổ điển: {a}. Không dùng trong nhiệm vụ một câu hỏi.", "Xác nhận / gửi", "Xác nhận kết luận và tiếp tục. Ở biểu mẫu cổ điển, nhấn hai lần: lần đầu chuẩn bị, lần sau gửi.", "Hủy kết luận", "Nhấn “Hủy” khi kết luận đang chờ xác nhận, hoặc hoàn tác lần nhấn Enter đầu tiên.", "Cài đặt DemoScope", "Mở hoặc đóng cửa sổ cài đặt.", "Hoạt ảnh", "Chọn giao diện của chỉ báo DemoScope. Bản xem trước được phát trực tiếp.", "Bật hoạt ảnh", "Tốc độ", "Chậm", "Bình thường", "Nhanh", "Kiểu", "Hoạt ảnh đang tắt. Bản xem trước vẫn phát để bạn so sánh.", "Đặt lại", "Xung nhịp", "Một vòng tròn lan ra từ chấm.", "Hít thở", "Ánh sáng dịu sáng lên rồi mờ dần.", "Gợn sóng", "Hai gợn sóng nối tiếp nhau.", "Nhịp tim", "Hai nhịp nhanh, rồi nghỉ.", "Quỹ đạo", "Một tia lửa nhỏ quay quanh chấm.", "Nhấp nháy", "Hiện dần và mờ dần đơn giản.", "Kết luận nhanh {n}"],
      "zh-CN": ["可重新分配任意按键。若按键已被占用，替换前会先提醒您。", "自定义快捷键", "DemoScope 指示灯的样式、速度和开关，并提供实时预览。", "动画设置", "快捷键", "点击按键进行修改，然后按下新的按键。如果该按键已被占用，在替换前您会看到它的用途。", "更改按键：{action}", "请按下一个键…", "取消", "恢复默认（{key}）", "全部重置", "再次点击以全部重置", "关闭", "未设置", "该按键已被占用", "{key} 已分配给“{action}”（{group}）。{desc}", "替换：“{other}”将没有按键。", "替换：“{other}”将没有按键。交换：“{other}”将使用 {prev}。", "替换", "交换", "无法使用该按键：它被浏览器保留或用于导航。", "Shift 只能用于按住类操作“加速播放”。", "所有快捷键已恢复默认。", "未更改。", "“{key}”已用于“{action}”。请在“快捷键”中修改。", "播放", "导航", "结论", "提交", "界面", "播放 / 暂停", "暂停视频或继续播放。", "声音开 / 关", "静音或取消静音。", "全屏", "进入或退出全屏模式。", "后退", "后退 5 秒。", "前进", "前进 5 秒。", "上一帧", "后退一帧。", "下一帧", "前进一帧。", "加速（按住）", "按住按键时加速播放，速度在面板中选择。", "经典表单：{a}。单问题任务：{b}。", "经典表单：{a}。单问题任务中不使用。", "确认 / 提交", "确认结论并继续。在经典表单中需按两次：先准备，再发送。", "取消结论", "在结论等待确认时按下“取消”，或撤销第一次 Enter。", "DemoScope 设置", "打开或关闭设置窗口。", "动画", "选择 DemoScope 指示灯的外观，预览为实时播放。", "启用动画", "速度", "慢", "正常", "快", "样式", "动画已关闭。预览仍会播放，方便您比较。", "重置", "脉冲", "圆环从圆点向外扩散。", "呼吸", "柔和的光晕渐强渐弱。", "涟漪", "两道涟漪依次扩散。", "心跳", "快速双跳动后停顿。", "轨道", "一颗小火花绕着圆点旋转。", "闪烁", "简单的淡入淡出。", "快速结论 {n}"],
      "zh-TW": ["可重新指派任意按鍵。若按鍵已被占用，取代前會先提醒您。", "自訂快捷鍵", "DemoScope 指示燈的樣式、速度與開關，並提供即時預覽。", "動畫設定", "快捷鍵", "點擊按鍵進行修改，然後按下新的按鍵。若該按鍵已被占用，在取代前您會看到它的用途。", "變更按鍵：{action}", "請按下一個鍵…", "取消", "還原預設（{key}）", "全部重設", "再次點擊以全部重設", "關閉", "未設定", "此按鍵已被占用", "{key} 已指派給「{action}」（{group}）。{desc}", "取代：「{other}」將沒有按鍵。", "取代：「{other}」將沒有按鍵。交換：「{other}」將改用 {prev}。", "取代", "交換", "無法使用此按鍵：它由瀏覽器保留或用於導覽。", "Shift 只能用於按住類操作「加速播放」。", "所有快捷鍵已還原為預設值。", "未變更。", "「{key}」已用於「{action}」。請在「快捷鍵」中修改。", "播放", "導覽", "判定", "送出", "介面", "播放 / 暫停", "暫停影片或繼續播放。", "聲音開 / 關", "靜音或取消靜音。", "全螢幕", "進入或離開全螢幕模式。", "倒退", "倒退 5 秒。", "快轉", "快轉 5 秒。", "上一影格", "倒退一個影格。", "下一影格", "前進一個影格。", "加速（按住）", "按住按鍵時加速播放，速度在面板中選擇。", "經典表單：{a}。單一問題任務：{b}。", "經典表單：{a}。單一問題任務中不使用。", "確認 / 送出", "確認判定並繼續。在經典表單中需按兩次：先準備，再送出。", "取消判定", "在判定等待確認時按下「取消」，或撤銷第一次 Enter。", "DemoScope 設定", "開啟或關閉設定視窗。", "動畫", "選擇 DemoScope 指示燈的外觀，預覽為即時播放。", "啟用動畫", "速度", "慢", "正常", "快", "樣式", "動畫已關閉。預覽仍會播放，方便您比較。", "重設", "脈衝", "圓環從圓點向外擴散。", "呼吸", "柔和的光暈漸強漸弱。", "漣漪", "兩道漣漪依序擴散。", "心跳", "快速雙跳動後停頓。", "軌道", "一顆小火花繞著圓點旋轉。", "閃爍", "簡單的淡入淡出。", "快速判定 {n}"],
    };
    for (const [locale, values] of Object.entries(EXTRA_TRANSLATIONS)) {
      const index = LOCALE_INDEX.indexOf(locale);
      if (index < 0) continue;
      EXTRA_KEYS.forEach((key, position) => {
        const text = values[position];
        if (!text) return;
        if (key === "hkName_quickN") {
          for (let n = 1; n <= 5; n += 1) {
            if (SETTINGS_TEXT_ROWS[`hkName_quick${n}`]) SETTINGS_TEXT_ROWS[`hkName_quick${n}`][index] = text.replace("{n}", String(n));
          }
        } else if (SETTINGS_TEXT_ROWS[key]) {
          SETTINGS_TEXT_ROWS[key][index] = text;
        }
      });
    }

    add("cheatUnsure", "Not sure", "Не уверен(а)");
    add("hkSummaryDefault", "Defaults", "По умолчанию");
    add("hkSummaryChanged", "Changed: {n}", "Изменено: {n}");
    add("anSummaryOff", "Off", "Выключено");
    add("resetSectionTitle", "Reset", "Сброс");
    add("resetSectionNote", "Restores sound, hotkeys and animations to their defaults. Your clip history is kept.", "Возвращает звук, горячие клавиши и анимации к значениям по умолчанию. История клипов сохраняется.");
    add("settingsResetConfirmAll", "Reset sound, volume, hotkeys and animations to their defaults?", "Вернуть звуки, громкость, горячие клавиши и анимации к значениям по умолчанию?");
    add("hkGroup_invite", "Invite page", "Страница приглашения");
    add("hkName_inviteDone", "Done", "Готово");
    add("hkDesc_inviteDone", "Leaves the invite page and returns to the clips.", "Выходит со страницы приглашения и возвращает к роликам.");
    add("hkName_inviteClose", "Close (×)", "Закрыть (×)");
    add("hkDesc_inviteClose", "Same as the × button: returns to the clips.", "То же, что кнопка ×: возвращает к роликам.");
    const NEW_KEYS = ["cheatUnsure", "hkSummaryDefault", "hkSummaryChanged", "anSummaryOff", "resetSectionTitle", "resetSectionNote", "settingsResetConfirmAll", "hkGroup_invite", "hkName_inviteDone", "hkDesc_inviteDone", "hkName_inviteClose", "hkDesc_inviteClose"];
    const NEW_TRANSLATIONS = {
      "bg": ["Не съм сигурен(а)", "По подразбиране", "Променени: {n}", "Изключено", "Нулиране", "Връща звука, бързите клавиши и анимациите към стойностите по подразбиране. Историята на клиповете се запазва.", "Да се върнат ли звуците, силата на звука, бързите клавиши и анимациите към стойностите по подразбиране?", "Страница за покани", "Готово", "Напуска страницата за покани и се връща към клиповете.", "Затваряне (×)", "Същото като бутона ×: връща към клиповете."],
      "zh-CN": ["不确定", "默认", "已更改：{n}", "已关闭", "重置", "将声音、快捷键和动画恢复为默认值。剪辑历史会保留。", "要将声音、音量、快捷键和动画恢复为默认值吗？", "邀请页面", "完成", "离开邀请页面并返回剪辑。", "关闭（×）", "与 × 按钮相同：返回剪辑。"],
      "zh-TW": ["不確定", "預設", "已變更：{n}", "已關閉", "重設", "將聲音、快捷鍵與動畫還原為預設值。剪輯記錄會保留。", "要將聲音、音量、快捷鍵與動畫還原為預設值嗎？", "邀請頁面", "完成", "離開邀請頁面並返回剪輯。", "關閉（×）", "與 × 按鈕相同：返回剪輯。"],
      "cs": ["Nejsem si jistý(á)", "Výchozí", "Změněno: {n}", "Vypnuto", "Obnovení", "Vrátí zvuk, klávesové zkratky a animace na výchozí hodnoty. Historie klipů zůstane zachována.", "Vrátit zvuky, hlasitost, klávesové zkratky a animace na výchozí hodnoty?", "Stránka pozvánek", "Hotovo", "Opustí stránku pozvánek a vrátí se ke klipům.", "Zavřít (×)", "Totéž jako tlačítko ×: vrátí se ke klipům."],
      "da": ["Usikker", "Standard", "Ændret: {n}", "Fra", "Nulstilling", "Gendanner lyd, genvejstaster og animationer til standard. Din klip-historik bevares.", "Nulstille lyde, lydstyrke, genvejstaster og animationer til standard?", "Invitationsside", "Færdig", "Forlader invitationssiden og vender tilbage til klippene.", "Luk (×)", "Samme som ×-knappen: vender tilbage til klippene."],
      "nl": ["Niet zeker", "Standaard", "Gewijzigd: {n}", "Uit", "Herstellen", "Zet geluid, sneltoetsen en animaties terug naar de standaardwaarden. Uw cliphistorie blijft behouden.", "Geluiden, volume, sneltoetsen en animaties terugzetten naar de standaardwaarden?", "Uitnodigingspagina", "Klaar", "Verlaat de uitnodigingspagina en keert terug naar de clips.", "Sluiten (×)", "Hetzelfde als de ×-knop: keert terug naar de clips."],
      "fi": ["En ole varma", "Oletus", "Muutettu: {n}", "Pois", "Palautus", "Palauttaa äänen, pikanäppäimet ja animaatiot oletusarvoihin. Klippihistoria säilyy.", "Palautetaanko äänet, äänenvoimakkuus, pikanäppäimet ja animaatiot oletusarvoihin?", "Kutsusivu", "Valmis", "Poistuu kutsusivulta ja palaa klippeihin.", "Sulje (×)", "Sama kuin ×-painike: palaa klippeihin."],
      "fr": ["Pas sûr(e)", "Par défaut", "Modifiés : {n}", "Désactivées", "Réinitialisation", "Rétablit le son, les raccourcis et les animations par défaut. Votre historique de clips est conservé.", "Rétablir par défaut les sons, le volume, les raccourcis et les animations ?", "Page d’invitation", "Terminé", "Quitte la page d’invitation et revient aux clips.", "Fermer (×)", "Identique au bouton × : revient aux clips."],
      "de": ["Nicht sicher", "Standard", "Geändert: {n}", "Aus", "Zurücksetzen", "Stellt Ton, Tastenkürzel und Animationen auf die Standardwerte zurück. Ihr Clip-Verlauf bleibt erhalten.", "Töne, Lautstärke, Tastenkürzel und Animationen auf die Standardwerte zurücksetzen?", "Einladungsseite", "Fertig", "Verlässt die Einladungsseite und kehrt zu den Clips zurück.", "Schließen (×)", "Wie die ×-Schaltfläche: kehrt zu den Clips zurück."],
      "el": ["Δεν είμαι σίγουρος/η", "Προεπιλογές", "Άλλαξαν: {n}", "Ανενεργό", "Επαναφορά", "Επαναφέρει τον ήχο, τις συντομεύσεις και τα animations στις προεπιλογές. Το ιστορικό κλιπ διατηρείται.", "Να επανέλθουν οι ήχοι, η ένταση, οι συντομεύσεις και τα animations στις προεπιλογές;", "Σελίδα προσκλήσεων", "Τέλος", "Αποχωρεί από τη σελίδα προσκλήσεων και επιστρέφει στα κλιπ.", "Κλείσιμο (×)", "Το ίδιο με το κουμπί ×: επιστρέφει στα κλιπ."],
      "hu": ["Nem vagyok biztos benne", "Alapértelmezett", "Módosítva: {n}", "Ki", "Visszaállítás", "Visszaállítja a hangot, a gyorsbillentyűket és az animációkat az alapértelmezettre. A klipelőzmények megmaradnak.", "Visszaállítja a hangokat, a hangerőt, a gyorsbillentyűket és az animációkat az alapértelmezettre?", "Meghívó oldal", "Kész", "Elhagyja a meghívó oldalt, és visszatér a klipekhez.", "Bezárás (×)", "Ugyanaz, mint a × gomb: visszatér a klipekhez."],
      "id": ["Tidak yakin", "Default", "Diubah: {n}", "Mati", "Atur ulang", "Mengembalikan suara, pintasan, dan animasi ke default. Riwayat klip Anda tetap tersimpan.", "Atur ulang suara, volume, pintasan, dan animasi ke default?", "Halaman undangan", "Selesai", "Keluar dari halaman undangan dan kembali ke klip.", "Tutup (×)", "Sama seperti tombol ×: kembali ke klip."],
      "it": ["Non sono sicuro/a", "Predefinite", "Modificate: {n}", "Disattivate", "Ripristino", "Riporta suono, scorciatoie e animazioni ai valori predefiniti. La cronologia delle clip viene mantenuta.", "Ripristinare suoni, volume, scorciatoie e animazioni ai valori predefiniti?", "Pagina inviti", "Fine", "Esce dalla pagina inviti e torna alle clip.", "Chiudi (×)", "Come il pulsante ×: torna alle clip."],
      "ja": ["確信が持てない", "初期設定", "変更済み：{n}", "オフ", "リセット", "サウンド・ショートカット・アニメーションを初期設定に戻します。クリップ履歴は保持されます。", "サウンド、音量、ショートカット、アニメーションを初期設定に戻しますか？", "招待ページ", "完了", "招待ページを離れてクリップに戻ります。", "閉じる（×）", "× ボタンと同じ動作：クリップに戻ります。"],
      "ko": ["확실하지 않음", "기본값", "변경됨: {n}", "꺼짐", "초기화", "소리, 단축키, 애니메이션을 기본값으로 되돌립니다. 클립 기록은 유지됩니다.", "소리, 볼륨, 단축키, 애니메이션을 기본값으로 되돌리시겠습니까?", "초대 페이지", "완료", "초대 페이지를 나가 클립으로 돌아갑니다.", "닫기 (×)", "× 버튼과 같습니다: 클립으로 돌아갑니다."],
      "no": ["Usikker", "Standard", "Endret: {n}", "Av", "Tilbakestilling", "Gjenoppretter lyd, hurtigtaster og animasjoner til standard. Klipphistorikken beholdes.", "Tilbakestille lyder, volum, hurtigtaster og animasjoner til standard?", "Invitasjonsside", "Ferdig", "Forlater invitasjonssiden og går tilbake til klippene.", "Lukk (×)", "Samme som ×-knappen: går tilbake til klippene."],
      "pl": ["Nie jestem pewien/pewna", "Domyślne", "Zmieniono: {n}", "Wyłączone", "Resetowanie", "Przywraca dźwięk, skróty klawiszowe i animacje do ustawień domyślnych. Historia klipów zostaje zachowana.", "Przywrócić dźwięki, głośność, skróty klawiszowe i animacje do ustawień domyślnych?", "Strona zaproszeń", "Gotowe", "Opuszcza stronę zaproszeń i wraca do klipów.", "Zamknij (×)", "To samo co przycisk ×: wraca do klipów."],
      "pt-PT": ["Não tenho a certeza", "Predefinições", "Alterados: {n}", "Desativadas", "Repor", "Repõe o som, os atalhos e as animações para os valores predefinidos. O histórico de clipes é mantido.", "Repor os sons, o volume, os atalhos e as animações para os valores predefinidos?", "Página de convites", "Concluído", "Sai da página de convites e volta aos clipes.", "Fechar (×)", "O mesmo que o botão ×: volta aos clipes."],
      "pt-BR": ["Não tenho certeza", "Padrão", "Alterados: {n}", "Desativadas", "Restaurar", "Restaura o som, os atalhos e as animações para o padrão. O histórico de clipes é mantido.", "Restaurar sons, volume, atalhos e animações para o padrão?", "Página de convites", "Concluído", "Sai da página de convites e volta aos clipes.", "Fechar (×)", "O mesmo que o botão ×: volta aos clipes."],
      "ro": ["Nu sunt sigur(ă)", "Implicit", "Modificate: {n}", "Dezactivate", "Resetare", "Readuce sunetul, comenzile rapide și animațiile la valorile implicite. Istoricul clipurilor este păstrat.", "Resetați sunetele, volumul, comenzile rapide și animațiile la valorile implicite?", "Pagina de invitații", "Gata", "Părăsește pagina de invitații și revine la clipuri.", "Închide (×)", "La fel ca butonul ×: revine la clipuri."],
      "es-ES": ["No estoy seguro/a", "Predeterminados", "Cambiados: {n}", "Desactivadas", "Restablecer", "Restablece el sonido, los atajos y las animaciones a sus valores predeterminados. Se conserva tu historial de clips.", "¿Restablecer los sonidos, el volumen, los atajos y las animaciones a sus valores predeterminados?", "Página de invitaciones", "Hecho", "Sale de la página de invitaciones y vuelve a los clips.", "Cerrar (×)", "Igual que el botón ×: vuelve a los clips."],
      "es-419": ["No estoy seguro/a", "Predeterminados", "Cambiados: {n}", "Desactivadas", "Restablecer", "Restablece el sonido, los atajos y las animaciones a sus valores predeterminados. Se conserva tu historial de clips.", "¿Restablecer los sonidos, el volumen, los atajos y las animaciones a sus valores predeterminados?", "Página de invitaciones", "Listo", "Sale de la página de invitaciones y vuelve a los clips.", "Cerrar (×)", "Igual que el botón ×: vuelve a los clips."],
      "sv": ["Osäker", "Standard", "Ändrade: {n}", "Av", "Återställning", "Återställer ljud, kortkommandon och animationer till standard. Din klipphistorik behålls.", "Återställa ljud, volym, kortkommandon och animationer till standard?", "Inbjudningssida", "Klar", "Lämnar inbjudningssidan och återgår till klippen.", "Stäng (×)", "Samma som ×-knappen: återgår till klippen."],
      "th": ["ไม่แน่ใจ", "ค่าเริ่มต้น", "เปลี่ยนแล้ว: {n}", "ปิด", "รีเซ็ต", "คืนค่าเสียง ปุ่มลัด และแอนิเมชันเป็นค่าเริ่มต้น ประวัติคลิปจะยังคงอยู่", "รีเซ็ตเสียง ระดับเสียง ปุ่มลัด และแอนิเมชันเป็นค่าเริ่มต้นหรือไม่?", "หน้าเชิญ", "เสร็จสิ้น", "ออกจากหน้าเชิญและกลับไปที่คลิป", "ปิด (×)", "เหมือนปุ่ม ×: กลับไปที่คลิป"],
      "tr": ["Emin değilim", "Varsayılan", "Değiştirilen: {n}", "Kapalı", "Sıfırlama", "Sesi, kısayol tuşlarını ve animasyonları varsayılana döndürür. Klip geçmişiniz korunur.", "Sesler, ses düzeyi, kısayol tuşları ve animasyonlar varsayılana döndürülsün mü?", "Davet sayfası", "Tamam", "Davet sayfasından çıkar ve kliplere döner.", "Kapat (×)", "× düğmesiyle aynı: kliplere döner."],
      "uk": ["Не впевнений(а)", "Типові", "Змінено: {n}", "Вимкнено", "Скидання", "Повертає звук, гарячі клавіші та анімації до типових значень. Історія роликів зберігається.", "Повернути звуки, гучність, гарячі клавіші та анімації до типових значень?", "Сторінка запрошень", "Готово", "Виходить зі сторінки запрошень і повертає до роликів.", "Закрити (×)", "Те саме, що кнопка ×: повертає до роликів."],
      "vi": ["Không chắc chắn", "Mặc định", "Đã đổi: {n}", "Tắt", "Đặt lại", "Đưa âm thanh, phím tắt và hoạt ảnh về mặc định. Lịch sử clip được giữ lại.", "Đặt lại âm thanh, âm lượng, phím tắt và hoạt ảnh về mặc định?", "Trang lời mời", "Xong", "Rời trang lời mời và quay lại các clip.", "Đóng (×)", "Giống nút ×: quay lại các clip."],
    };
    for (const [locale, values] of Object.entries(NEW_TRANSLATIONS)) {
      const index = LOCALE_INDEX.indexOf(locale);
      if (index < 0) continue;
      NEW_KEYS.forEach((key, position) => {
        if (values[position] && SETTINGS_TEXT_ROWS[key]) SETTINGS_TEXT_ROWS[key][index] = values[position];
      });
    }

    add("diagTitle", "Diagnostics", "Диагностика");
    add("diagNote", "If the page changes and something stops working, copy this report and send it to the developer. It contains no page text, account name or history: only technical details about the page and your browser.", "Если страница изменится и что-то перестанет работать, скопируйте этот отчёт и отправьте разработчику. В нём нет текста страницы, имени аккаунта и истории: только технические сведения о странице и браузере.");
    add("diagButton", "Copy diagnostics", "Скопировать диагностику");
    add("diagCopied", "Copied: {n} lines. Paste it into your bug report.", "Скопировано: {n} строк. Вставьте в отчёт об ошибке.");
    add("diagFailed", "Could not copy automatically. Select the text below and copy it.", "Не удалось скопировать автоматически. Выделите текст ниже и скопируйте его.");
    add("dsDisabledNotice", "The Valve page changed, so DemoScope is switched off here. Open the settings and copy the diagnostics.", "Страница Valve изменилась, поэтому DemoScope на ней отключён. Откройте настройки и скопируйте диагностику.");
    add("diagReportButton", "Report on GitHub", "Сообщить на GitHub");
    add("diagReportNote", "Opens the public GitHub issues page in a new tab. Nothing is sent for you: you paste the report there yourself.", "Открывает публичную страницу обращений на GitHub в новой вкладке. Ничего не отправляется за вас: отчёт вы вставляете там сами.");
    const DIAG_KEYS = ["diagTitle", "diagNote", "diagButton", "diagCopied", "diagFailed", "dsDisabledNotice", "diagReportButton", "diagReportNote"];
    const DIAG_TRANSLATIONS = {
      "bg": ["Диагностика", "Ако страницата се промени и нещо спре да работи, копирайте този отчет и го изпратете на разработчика. Не съдържа текст на страницата, име на акаунт или история: само технически данни за страницата и браузъра.", "Копирай диагностиката", "Копирано: {n} реда. Поставете го в отчета си за грешка.", "Не успях да копирам автоматично. Маркирайте текста по-долу и го копирайте.", "Страницата на Valve се е променила, затова DemoScope е изключен тук. Отворете настройките и копирайте диагностиката.", "Докладвай в GitHub", "Отваря публичната страница с проблеми в GitHub в нов раздел. Нищо не се изпраща вместо вас: поставяте отчета там сами."],
      "zh-CN": ["诊断", "如果页面改版导致功能失效，请复制此报告并发送给开发者。报告不含页面文字、账号名或历史记录，只有关于页面和浏览器的技术信息。", "复制诊断信息", "已复制：{n} 行。请粘贴到您的问题报告中。", "无法自动复制。请选中下方文字后手动复制。", "Valve 页面已发生变化，因此 DemoScope 在此页面已停用。请打开设置并复制诊断信息。", "在 GitHub 上反馈", "在新标签页中打开 GitHub 公开的 Issues 页面。不会替您发送任何内容：请自行把报告粘贴到那里。"],
      "zh-TW": ["診斷", "如果頁面改版導致功能失效，請複製此報告並傳送給開發者。報告不含頁面文字、帳號名稱或歷史記錄，只有關於頁面和瀏覽器的技術資訊。", "複製診斷資訊", "已複製：{n} 行。請貼到您的問題回報中。", "無法自動複製。請選取下方文字後手動複製。", "Valve 頁面已變更，因此 DemoScope 在此頁面已停用。請開啟設定並複製診斷資訊。", "在 GitHub 上回報", "在新分頁中開啟 GitHub 公開的 Issues 頁面。不會替您傳送任何內容：請自行把報告貼到那裡。"],
      "cs": ["Diagnostika", "Pokud se stránka změní a něco přestane fungovat, zkopírujte tuto zprávu a pošlete ji vývojáři. Neobsahuje text stránky, jméno účtu ani historii: jen technické údaje o stránce a prohlížeči.", "Kopírovat diagnostiku", "Zkopírováno: {n} řádků. Vložte to do hlášení o chybě.", "Automatické kopírování se nepovedlo. Označte text níže a zkopírujte ho.", "Stránka Valve se změnila, proto je DemoScope zde vypnut. Otevřete nastavení a zkopírujte diagnostiku.", "Nahlásit na GitHubu", "Otevře veřejnou stránku problémů na GitHubu v nové záložce. Nic se neodesílá za vás: zprávu tam vložíte sami."],
      "da": ["Diagnostik", "Hvis siden ændrer sig, og noget holder op med at virke, kan du kopiere denne rapport og sende den til udvikleren. Den indeholder ingen sidetekst, kontonavn eller historik: kun tekniske oplysninger om siden og din browser.", "Kopiér diagnostik", "Kopieret: {n} linjer. Indsæt det i din fejlrapport.", "Kunne ikke kopiere automatisk. Markér teksten nedenfor og kopiér den.", "Valves side har ændret sig, så DemoScope er slået fra her. Åbn indstillingerne og kopiér diagnostikken.", "Rapportér på GitHub", "Åbner GitHubs offentlige side for fejl i et nyt faneblad. Intet sendes for dig: du indsætter selv rapporten der."],
      "nl": ["Diagnostiek", "Als de pagina verandert en iets niet meer werkt, kopieer dan dit rapport en stuur het naar de ontwikkelaar. Het bevat geen paginatekst, accountnaam of geschiedenis: alleen technische gegevens over de pagina en uw browser.", "Diagnostiek kopiëren", "Gekopieerd: {n} regels. Plak het in uw foutmelding.", "Automatisch kopiëren is mislukt. Selecteer de tekst hieronder en kopieer die.", "De pagina van Valve is veranderd, daarom is DemoScope hier uitgeschakeld. Open de instellingen en kopieer de diagnostiek.", "Melden op GitHub", "Opent de openbare GitHub-pagina met issues in een nieuw tabblad. Er wordt niets voor u verzonden: u plakt het rapport daar zelf."],
      "fi": ["Diagnostiikka", "Jos sivu muuttuu ja jokin lakkaa toimimasta, kopioi tämä raportti ja lähetä se kehittäjälle. Se ei sisällä sivun tekstiä, tilin nimeä eikä historiaa: vain teknisiä tietoja sivusta ja selaimestasi.", "Kopioi diagnostiikka", "Kopioitu: {n} riviä. Liitä se virheilmoitukseesi.", "Automaattinen kopiointi epäonnistui. Valitse alla oleva teksti ja kopioi se.", "Valven sivu on muuttunut, joten DemoScope on pois käytöstä tällä sivulla. Avaa asetukset ja kopioi diagnostiikka.", "Ilmoita GitHubissa", "Avaa GitHubin julkisen ongelmasivun uudessa välilehdessä. Mitään ei lähetetä puolestasi: liität raportin sinne itse."],
      "fr": ["Diagnostic", "Si la page change et que quelque chose cesse de fonctionner, copiez ce rapport et envoyez-le au développeur. Il ne contient ni texte de la page, ni nom de compte, ni historique : uniquement des informations techniques sur la page et votre navigateur.", "Copier le diagnostic", "Copié : {n} lignes. Collez-le dans votre rapport de bug.", "Copie automatique impossible. Sélectionnez le texte ci-dessous et copiez-le.", "La page de Valve a changé : DemoScope est donc désactivé ici. Ouvrez les paramètres et copiez le diagnostic.", "Signaler sur GitHub", "Ouvre la page publique des tickets de GitHub dans un nouvel onglet. Rien n’est envoyé à votre place : vous collez le rapport vous-même."],
      "de": ["Diagnose", "Wenn sich die Seite ändert und etwas nicht mehr funktioniert, kopieren Sie diesen Bericht und senden Sie ihn an den Entwickler. Er enthält weder Seitentext noch Kontonamen oder Verlauf: nur technische Angaben zur Seite und zu Ihrem Browser.", "Diagnose kopieren", "Kopiert: {n} Zeilen. Fügen Sie sie in Ihre Fehlermeldung ein.", "Automatisches Kopieren fehlgeschlagen. Markieren Sie den Text unten und kopieren Sie ihn.", "Die Valve-Seite hat sich geändert, deshalb ist DemoScope hier deaktiviert. Öffnen Sie die Einstellungen und kopieren Sie die Diagnose.", "Auf GitHub melden", "Öffnet die öffentliche GitHub-Seite für Issues in einem neuen Tab. Es wird nichts für Sie gesendet: Sie fügen den Bericht dort selbst ein."],
      "el": ["Διάγνωση", "Αν αλλάξει η σελίδα και κάτι σταματήσει να λειτουργεί, αντιγράψτε αυτήν την αναφορά και στείλτε την στον προγραμματιστή. Δεν περιέχει κείμενο της σελίδας, όνομα λογαριασμού ή ιστορικό: μόνο τεχνικές πληροφορίες για τη σελίδα και το πρόγραμμα περιήγησής σας.", "Αντιγραφή διάγνωσης", "Αντιγράφηκε: {n} γραμμές. Επικολλήστε το στην αναφορά σφάλματός σας.", "Η αυτόματη αντιγραφή απέτυχε. Επιλέξτε το κείμενο παρακάτω και αντιγράψτε το.", "Η σελίδα της Valve άλλαξε, γι’ αυτό το DemoScope είναι απενεργοποιημένο εδώ. Ανοίξτε τις ρυθμίσεις και αντιγράψτε τη διάγνωση.", "Αναφορά στο GitHub", "Ανοίγει τη δημόσια σελίδα issues του GitHub σε νέα καρτέλα. Τίποτα δεν στέλνεται για εσάς: επικολλάτε μόνοι σας την αναφορά εκεί."],
      "hu": ["Diagnosztika", "Ha az oldal megváltozik, és valami nem működik tovább, másolja ki ezt a jelentést, és küldje el a fejlesztőnek. Nem tartalmaz oldalszöveget, fióknevet vagy előzményeket: csak műszaki adatokat az oldalról és a böngészőjéről.", "Diagnosztika másolása", "Kimásolva: {n} sor. Illessze be a hibajelentésébe.", "Az automatikus másolás nem sikerült. Jelölje ki az alábbi szöveget, és másolja ki.", "A Valve oldala megváltozott, ezért a DemoScope itt ki van kapcsolva. Nyissa meg a beállításokat, és másolja ki a diagnosztikát.", "Jelentés a GitHubon", "Új lapon megnyitja a GitHub nyilvános hibajegyoldalát. Semmi sem megy el helyetted: a jelentést te illeszted be ott."],
      "id": ["Diagnostik", "Jika halaman berubah dan ada yang berhenti berfungsi, salin laporan ini dan kirim ke pengembang. Laporan ini tidak berisi teks halaman, nama akun, atau riwayat: hanya informasi teknis tentang halaman dan browser Anda.", "Salin diagnostik", "Disalin: {n} baris. Tempel ke laporan bug Anda.", "Gagal menyalin otomatis. Pilih teks di bawah lalu salin.", "Halaman Valve berubah, jadi DemoScope dinonaktifkan di sini. Buka pengaturan dan salin diagnostik.", "Laporkan di GitHub", "Membuka halaman issues publik GitHub di tab baru. Tidak ada yang dikirim untuk Anda: Anda menempel laporannya sendiri di sana."],
      "it": ["Diagnostica", "Se la pagina cambia e qualcosa smette di funzionare, copia questo rapporto e invialo allo sviluppatore. Non contiene testo della pagina, nome dell’account né cronologia: solo informazioni tecniche sulla pagina e sul tuo browser.", "Copia diagnostica", "Copiato: {n} righe. Incollalo nella tua segnalazione del bug.", "Copia automatica non riuscita. Seleziona il testo qui sotto e copialo.", "La pagina di Valve è cambiata, quindi DemoScope è disattivato qui. Apri le impostazioni e copia la diagnostica.", "Segnala su GitHub", "Apre la pagina pubblica delle issue di GitHub in una nuova scheda. Non viene inviato nulla al posto tuo: incolli tu stesso il rapporto lì."],
      "ja": ["診断", "ページが変更されて動作しなくなった場合は、このレポートをコピーして開発者に送ってください。ページの文章、アカウント名、履歴は含まれず、ページとブラウザーに関する技術情報のみです。", "診断をコピー", "コピーしました：{n} 行。不具合の報告に貼り付けてください。", "自動コピーに失敗しました。下のテキストを選択してコピーしてください。", "Valve のページが変更されたため、このページでは DemoScope を無効にしました。設定を開いて診断をコピーしてください。", "GitHub で報告", "GitHub の公開 Issues ページを新しいタブで開きます。自動で送信されることはありません。レポートはご自身で貼り付けてください。"],
      "ko": ["진단", "페이지가 바뀌어 기능이 작동하지 않으면 이 보고서를 복사해 개발자에게 보내 주세요. 페이지 텍스트, 계정 이름, 기록은 없고 페이지와 브라우저에 대한 기술 정보만 담겨 있습니다.", "진단 복사", "복사됨: {n}줄. 버그 신고에 붙여 넣으세요.", "자동 복사에 실패했습니다. 아래 텍스트를 선택해 복사하세요.", "Valve 페이지가 변경되어 이 페이지에서는 DemoScope가 꺼졌습니다. 설정을 열어 진단을 복사하세요.", "GitHub에 신고", "GitHub의 공개 Issues 페이지를 새 탭에서 엽니다. 자동으로 전송되는 것은 없으며, 보고서는 직접 붙여 넣으세요."],
      "no": ["Diagnostikk", "Hvis siden endres og noe slutter å fungere, kopier denne rapporten og send den til utvikleren. Den inneholder ingen sidetekst, kontonavn eller historikk: bare tekniske opplysninger om siden og nettleseren din.", "Kopier diagnostikk", "Kopiert: {n} linjer. Lim det inn i feilrapporten din.", "Kunne ikke kopiere automatisk. Marker teksten under og kopier den.", "Valve-siden har endret seg, så DemoScope er slått av her. Åpne innstillingene og kopier diagnostikken.", "Rapporter på GitHub", "Åpner GitHubs offentlige issues-side i en ny fane. Ingenting sendes for deg: du limer inn rapporten selv der."],
      "pl": ["Diagnostyka", "Jeśli strona się zmieni i coś przestanie działać, skopiuj ten raport i wyślij go twórcy. Nie zawiera tekstu strony, nazwy konta ani historii: tylko dane techniczne o stronie i Twojej przeglądarce.", "Kopiuj diagnostykę", "Skopiowano: {n} wierszy. Wklej to do zgłoszenia błędu.", "Nie udało się skopiować automatycznie. Zaznacz poniższy tekst i skopiuj go.", "Strona Valve uległa zmianie, więc DemoScope jest tu wyłączony. Otwórz ustawienia i skopiuj diagnostykę.", "Zgłoś na GitHubie", "Otwiera publiczną stronę zgłoszeń GitHuba w nowej karcie. Nic nie jest wysyłane za Ciebie: raport wklejasz tam sam."],
      "pt-PT": ["Diagnóstico", "Se a página mudar e algo deixar de funcionar, copie este relatório e envie-o ao programador. Não contém texto da página, nome da conta nem histórico: apenas dados técnicos sobre a página e o seu navegador.", "Copiar diagnóstico", "Copiado: {n} linhas. Cole-o no seu relatório de erro.", "Não foi possível copiar automaticamente. Selecione o texto abaixo e copie-o.", "A página da Valve mudou, por isso o DemoScope está desativado aqui. Abra as definições e copie o diagnóstico.", "Reportar no GitHub", "Abre a página pública de issues do GitHub num novo separador. Nada é enviado por si: cole lá o relatório."],
      "pt-BR": ["Diagnóstico", "Se a página mudar e algo parar de funcionar, copie este relatório e envie ao desenvolvedor. Ele não contém texto da página, nome da conta nem histórico: apenas dados técnicos sobre a página e o seu navegador.", "Copiar diagnóstico", "Copiado: {n} linhas. Cole no seu relatório de erro.", "Não foi possível copiar automaticamente. Selecione o texto abaixo e copie.", "A página da Valve mudou, por isso o DemoScope está desativado aqui. Abra as configurações e copie o diagnóstico.", "Reportar no GitHub", "Abre a página pública de issues do GitHub em uma nova aba. Nada é enviado por você: você mesmo cola o relatório lá."],
      "ro": ["Diagnostic", "Dacă pagina se schimbă și ceva nu mai funcționează, copiați acest raport și trimiteți-l dezvoltatorului. Nu conține text din pagină, numele contului sau istoric: doar informații tehnice despre pagină și browserul dvs.", "Copiază diagnosticul", "Copiat: {n} rânduri. Lipiți-l în raportul de eroare.", "Copierea automată a eșuat. Selectați textul de mai jos și copiați-l.", "Pagina Valve s-a schimbat, așa că DemoScope este dezactivat aici. Deschideți setările și copiați diagnosticul.", "Raportează pe GitHub", "Deschide pagina publică de probleme de pe GitHub într-o filă nouă. Nu se trimite nimic în locul dvs.: lipiți singur raportul acolo."],
      "es-ES": ["Diagnóstico", "Si la página cambia y algo deja de funcionar, copia este informe y envíaselo al desarrollador. No contiene texto de la página, nombre de cuenta ni historial: solo datos técnicos sobre la página y tu navegador.", "Copiar diagnóstico", "Copiado: {n} líneas. Pégalo en tu informe de error.", "No se pudo copiar automáticamente. Selecciona el texto de abajo y cópialo.", "La página de Valve ha cambiado, por eso DemoScope está desactivado aquí. Abre los ajustes y copia el diagnóstico.", "Informar en GitHub", "Abre la página pública de incidencias de GitHub en una pestaña nueva. No se envía nada por ti: pegas tú mismo el informe allí."],
      "es-419": ["Diagnóstico", "Si la página cambia y algo deja de funcionar, copia este informe y envíaselo al desarrollador. No contiene texto de la página, nombre de cuenta ni historial: solo datos técnicos sobre la página y tu navegador.", "Copiar diagnóstico", "Copiado: {n} líneas. Pégalo en tu reporte de error.", "No se pudo copiar automáticamente. Selecciona el texto de abajo y cópialo.", "La página de Valve cambió, por eso DemoScope está desactivado aquí. Abre la configuración y copia el diagnóstico.", "Reportar en GitHub", "Abre la página pública de issues de GitHub en una pestaña nueva. No se envía nada por ti: pegas el reporte tú mismo allí."],
      "sv": ["Diagnostik", "Om sidan ändras och något slutar fungera, kopiera den här rapporten och skicka den till utvecklaren. Den innehåller ingen sidtext, inget kontonamn och ingen historik: bara tekniska uppgifter om sidan och din webbläsare.", "Kopiera diagnostik", "Kopierat: {n} rader. Klistra in det i din felrapport.", "Det gick inte att kopiera automatiskt. Markera texten nedan och kopiera den.", "Valves sida har ändrats, så DemoScope är avstängt här. Öppna inställningarna och kopiera diagnostiken.", "Rapportera på GitHub", "Öppnar GitHubs publika ärendesida i en ny flik. Inget skickas åt dig: du klistrar in rapporten där själv."],
      "th": ["การวินิจฉัย", "หากหน้าเว็บเปลี่ยนแปลงและบางอย่างหยุดทำงาน ให้คัดลอกรายงานนี้แล้วส่งให้นักพัฒนา รายงานไม่มีข้อความในหน้า ชื่อบัญชี หรือประวัติ มีเพียงข้อมูลทางเทคนิคเกี่ยวกับหน้าเว็บและเบราว์เซอร์ของคุณ", "คัดลอกข้อมูลวินิจฉัย", "คัดลอกแล้ว: {n} บรรทัด วางลงในรายงานข้อบกพร่องของคุณ", "คัดลอกอัตโนมัติไม่สำเร็จ เลือกข้อความด้านล่างแล้วคัดลอก", "หน้าเว็บของ Valve เปลี่ยนไป DemoScope จึงถูกปิดในหน้านี้ เปิดการตั้งค่าแล้วคัดลอกข้อมูลวินิจฉัย", "รายงานบน GitHub", "เปิดหน้า Issues สาธารณะของ GitHub ในแท็บใหม่ ระบบจะไม่ส่งอะไรให้คุณ: คุณต้องวางรายงานที่นั่นเอง"],
      "tr": ["Tanılama", "Sayfa değişir ve bir şey çalışmayı bırakırsa, bu raporu kopyalayıp geliştiriciye gönderin. Sayfa metni, hesap adı veya geçmiş içermez: yalnızca sayfa ve tarayıcınız hakkında teknik bilgiler yer alır.", "Tanılamayı kopyala", "Kopyalandı: {n} satır. Hata raporunuza yapıştırın.", "Otomatik kopyalama başarısız oldu. Aşağıdaki metni seçip kopyalayın.", "Valve sayfası değişti, bu yüzden DemoScope burada devre dışı bırakıldı. Ayarları açıp tanılamayı kopyalayın.", "GitHub’da bildir", "GitHub’ın herkese açık sorunlar sayfasını yeni sekmede açar. Sizin yerinize hiçbir şey gönderilmez: raporu orada kendiniz yapıştırırsınız."],
      "uk": ["Діагностика", "Якщо сторінка зміниться і щось перестане працювати, скопіюйте цей звіт і надішліть розробнику. Він не містить тексту сторінки, імені облікового запису чи історії: лише технічні відомості про сторінку та ваш браузер.", "Скопіювати діагностику", "Скопійовано: {n} рядків. Вставте це у звіт про помилку.", "Не вдалося скопіювати автоматично. Виділіть текст нижче й скопіюйте його.", "Сторінка Valve змінилася, тому DemoScope тут вимкнено. Відкрийте налаштування й скопіюйте діагностику.", "Повідомити на GitHub", "Відкриває публічну сторінку issues на GitHub у новій вкладці. Нічого не надсилається за вас: звіт ви вставляєте там самі."],
      "vi": ["Chẩn đoán", "Nếu trang thay đổi và có gì đó ngừng hoạt động, hãy sao chép báo cáo này và gửi cho nhà phát triển. Báo cáo không chứa văn bản trang, tên tài khoản hay lịch sử: chỉ có thông tin kỹ thuật về trang và trình duyệt của bạn.", "Sao chép chẩn đoán", "Đã sao chép: {n} dòng. Hãy dán vào báo cáo lỗi của bạn.", "Không thể sao chép tự động. Hãy chọn văn bản bên dưới rồi sao chép.", "Trang của Valve đã thay đổi nên DemoScope bị tắt ở đây. Hãy mở cài đặt và sao chép chẩn đoán.", "Báo cáo trên GitHub", "Mở trang issues công khai của GitHub trong tab mới. Không có gì được gửi thay bạn: bạn tự dán báo cáo ở đó."],
    };
    for (const [locale, values] of Object.entries(DIAG_TRANSLATIONS)) {
      const index = LOCALE_INDEX.indexOf(locale);
      if (index < 0) continue;
      DIAG_KEYS.forEach((key, position) => {
        if (values[position] && SETTINGS_TEXT_ROWS[key]) SETTINGS_TEXT_ROWS[key][index] = values[position];
      });
    }
  })();

  // ---------------------------------------------------------------------------
  // Indicator animations (the dot next to "DemoScope")
  // ---------------------------------------------------------------------------
  const ANIM_ENABLED_KEY = "demoscopeAnimEnabled";
  const ANIM_STYLE_KEY = "demoscopeAnimStyle";
  const ANIM_SPEED_KEY = "demoscopeAnimSpeed";
  const ANIM_STYLES = ["pulse", "breathe", "ripple", "heartbeat", "orbit", "blink"];
  const ANIM_SPEEDS = { slow: 0.6, normal: 1, fast: 1.7 };

  function readStorage(key) {
    try { return localStorage.getItem(key); } catch { return null; }
  }

  function writeStorage(key, value) {
    try {
      if (value === null) localStorage.removeItem(key);
      else localStorage.setItem(key, value);
    } catch { /* Keep the choice for this page only. */ }
  }

  function animEnabled() {
    const stored = readStorage(ANIM_ENABLED_KEY);
    if (stored !== null) return stored === "true";
    return !(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }

  function animStyle() {
    const stored = readStorage(ANIM_STYLE_KEY);
    return ANIM_STYLES.includes(stored) ? stored : "pulse";
  }

  function animSpeedKey() {
    const stored = readStorage(ANIM_SPEED_KEY);
    return Object.prototype.hasOwnProperty.call(ANIM_SPEEDS, stored) ? stored : "normal";
  }

  function ensureAnimationStyles() {
    if (document.getElementById("demoscope-anim-style")) return;
    const live = (name, pseudo = "") =>
      `html[data-ds-anim="${name}"] #vacnet-clip-history .vacnet-review-dot${pseudo}`;
    const preview = (name, pseudo = "") => `.ds-anim-dot[data-anim="${name}"]${pseudo}`;
    const both = (name, pseudo = "") => `${live(name, pseudo)}, ${preview(name, pseudo)}`;
    const dur = (seconds) => `calc(${seconds}s / var(--ds-speed, 1))`;
    const accent = "var(--ss-accent, #f2a33a)";
    const style = document.createElement("style");
    style.id = "demoscope-anim-style";
    style.textContent = `
      .ds-anim-dot {
        position: relative;
        display: inline-block;
        flex: 0 0 auto;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: ${accent};
        box-shadow: 0 0 0 4px rgba(242, 163, 58, 0.11), 0 0 14px rgba(242, 163, 58, 0.35);
      }
      html[data-ds-anim]:not([data-ds-anim="off"]) #vacnet-clip-history .vacnet-review-dot { position: relative; }
      ${ANIM_STYLES.map((name) => `${both(name, "::before")}, ${both(name, "::after")}`).join(",\n")} {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: 50%;
        opacity: 0;
        pointer-events: none;
      }

      ${both("pulse", "::after")} { border: 1.5px solid ${accent}; animation: ds-pulse ${dur(1.9)} ease-out infinite; }
      @keyframes ds-pulse { 0% { transform: scale(1); opacity: 0.75; } 100% { transform: scale(3.2); opacity: 0; } }

      ${both("breathe")} { animation: ds-breathe ${dur(2.8)} ease-in-out infinite; }
      @keyframes ds-breathe {
        0%, 100% { transform: scale(0.88); opacity: 0.75; box-shadow: 0 0 0 3px rgba(242, 163, 58, 0.08), 0 0 8px rgba(242, 163, 58, 0.25); }
        50% { transform: scale(1.12); opacity: 1; box-shadow: 0 0 0 6px rgba(242, 163, 58, 0.16), 0 0 20px rgba(242, 163, 58, 0.6); }
      }

      ${both("ripple", "::before")}, ${both("ripple", "::after")} { border: 1.5px solid ${accent}; animation: ds-ripple ${dur(2.4)} cubic-bezier(0.2, 0.6, 0.3, 1) infinite; }
      ${both("ripple", "::after")} { animation-delay: ${dur(1.2)}; }
      @keyframes ds-ripple { 0% { transform: scale(0.8); opacity: 0.8; } 70%, 100% { transform: scale(3.6); opacity: 0; } }

      ${both("heartbeat")} { animation: ds-heartbeat ${dur(1.5)} ease-in-out infinite; }
      @keyframes ds-heartbeat { 0%, 40%, 100% { transform: scale(1); } 10% { transform: scale(1.4); } 20% { transform: scale(1); } 28% { transform: scale(1.28); } }
      ${both("heartbeat", "::after")} { border: 1.5px solid ${accent}; animation: ds-heartbeat-ring ${dur(1.5)} ease-out infinite; }
      @keyframes ds-heartbeat-ring { 0% { transform: scale(1); opacity: 0; } 10% { opacity: 0.7; } 45%, 100% { transform: scale(2.7); opacity: 0; } }

      ${both("orbit", "::before")} { inset: -6px; opacity: 1; border: 1px dashed rgba(242, 163, 58, 0.28); }
      ${both("orbit", "::after")} { inset: -6px; opacity: 1; background: radial-gradient(circle at 50% 0, ${accent} 0 1.7px, transparent 2.2px); animation: ds-orbit ${dur(1.8)} linear infinite; }
      @keyframes ds-orbit { to { transform: rotate(360deg); } }

      ${both("blink")} { animation: ds-blink ${dur(1.3)} ease-in-out infinite; }
      @keyframes ds-blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.2; } }
    `;
    (document.head || document.documentElement).append(style);
  }

  // Dark, thin scrollbars: Chromium browsers (Brave, Chrome, Edge) otherwise draw
  // a bright default bar inside the dark windows.
  function ensureUiPolishStyles() {
    if (document.getElementById("demoscope-polish-style")) return;
    const style = document.createElement("style");
    style.id = "demoscope-polish-style";
    const targets = "#vacnet-settings-dialog, .ds-dialog, .vacnet-enhanced .verdicts-container";
    style.textContent = `
      ${targets} { color-scheme: dark; scrollbar-width: thin; scrollbar-color: #2c3745 transparent; }
      #vacnet-settings-dialog::-webkit-scrollbar, .ds-dialog::-webkit-scrollbar,
      .vacnet-enhanced .verdicts-container::-webkit-scrollbar { width: 10px; height: 10px; }
      #vacnet-settings-dialog::-webkit-scrollbar-track, .ds-dialog::-webkit-scrollbar-track,
      .vacnet-enhanced .verdicts-container::-webkit-scrollbar-track { background: transparent; }
      #vacnet-settings-dialog::-webkit-scrollbar-thumb, .ds-dialog::-webkit-scrollbar-thumb,
      .vacnet-enhanced .verdicts-container::-webkit-scrollbar-thumb { background: #2c3745; border: 2px solid transparent; border-radius: 8px; background-clip: content-box; }
      #vacnet-settings-dialog::-webkit-scrollbar-thumb:hover, .ds-dialog::-webkit-scrollbar-thumb:hover,
      .vacnet-enhanced .verdicts-container::-webkit-scrollbar-thumb:hover { background: #3d4a5c; background-clip: content-box; }
    `;
    (document.head || document.documentElement).append(style);
  }

  function applyAnimationSettings() {
    ensureAnimationStyles();
    const root = document.documentElement;
    root.dataset.dsAnim = animEnabled() ? animStyle() : "off";
    root.style.setProperty("--ds-speed", String(ANIM_SPEEDS[animSpeedKey()]));
    refreshSettingsSummaries();
  }

  function ensureAnimationsDialog() {
    let dialog = document.getElementById("vacnet-animations-dialog");
    if (dialog instanceof HTMLDialogElement) return dialog;
    ensureDemoscopeDialogStyles();
    ensureAnimationStyles();

    dialog = document.createElement("dialog");
    dialog.id = "vacnet-animations-dialog";
    dialog.className = "ds-dialog";
    dialog.setAttribute("aria-labelledby", "vacnet-animations-title");
    dialog.innerHTML = `
      <div class="demoscope-settings-shell">
        <header class="demoscope-settings-head">
          <div><p class="demoscope-settings-kicker">DEMOSCOPE</p><h2 id="vacnet-animations-title"></h2></div>
          <button class="demoscope-settings-close" type="button" data-an-close></button>
        </header>
        <p class="demoscope-settings-help" data-an-intro></p>
        <section class="demoscope-settings-section">
          <label class="demoscope-settings-toggle"><input type="checkbox" data-an-enabled><span data-an-enabled-label></span></label>
          <div class="ds-an-speed" role="group">
            <span class="ds-an-speed-label" data-an-speed-label></span>
            <div class="ds-seg">${Object.keys(ANIM_SPEEDS).map((key) => `<button type="button" data-an-speed="${key}"></button>`).join("")}</div>
          </div>
          <p class="demoscope-settings-help ds-an-note" data-an-note hidden></p>
        </section>
        <section class="demoscope-settings-section">
          <h3 data-an-style-label></h3>
          <div class="ds-an-grid" role="radiogroup">${ANIM_STYLES.map((name) => `
            <button type="button" class="ds-an-card" role="radio" aria-checked="false" data-an-style="${name}">
              <span class="ds-an-preview"><span class="ds-anim-dot" data-anim="${name}"></span><span class="ds-an-word">DEMOSCOPE</span></span>
              <span class="ds-an-name"></span><span class="ds-an-desc"></span>
            </button>`).join("")}
          </div>
        </section>
        <div class="demoscope-settings-actions">
          <button type="button" class="demoscope-settings-secondary" data-an-reset></button>
          <button type="button" class="demoscope-settings-secondary" data-an-close-text></button>
        </div>
      </div>`;
    document.body.append(dialog);

    const $ = (selector) => dialog.querySelector(selector);
    const sync = () => {
      const enabled = animEnabled();
      const current = animStyle();
      const speed = animSpeedKey();
      $("[data-an-enabled]").checked = enabled;
      $("[data-an-note]").hidden = enabled;
      dialog.querySelectorAll("[data-an-style]").forEach((card) => {
        const selected = card.dataset.anStyle === current;
        card.setAttribute("aria-checked", String(selected));
        card.classList.toggle("is-selected", selected);
        card.classList.toggle("is-muted", !enabled);
      });
      dialog.querySelectorAll("[data-an-speed]").forEach((button) => {
        button.classList.toggle("is-selected", button.dataset.anSpeed === speed);
        button.setAttribute("aria-pressed", String(button.dataset.anSpeed === speed));
      });
    };

    $("#vacnet-animations-title").textContent = settingText("anTitle");
    $("[data-an-intro]").textContent = settingText("anIntro");
    $("[data-an-enabled-label]").textContent = settingText("anEnabled");
    $("[data-an-speed-label]").textContent = settingText("anSpeed");
    $("[data-an-style-label]").textContent = settingText("anStyle");
    $("[data-an-note]").textContent = settingText("anOffNote");
    $("[data-an-reset]").textContent = settingText("anReset");
    $("[data-an-close-text]").textContent = settingText("hkClose");
    $("[data-an-close]").setAttribute("aria-label", settingText("hkClose"));
    dialog.querySelector('[data-an-speed="slow"]').textContent = settingText("anSlow");
    dialog.querySelector('[data-an-speed="normal"]').textContent = settingText("anNormal");
    dialog.querySelector('[data-an-speed="fast"]').textContent = settingText("anFast");
    dialog.querySelectorAll("[data-an-style]").forEach((card) => {
      card.querySelector(".ds-an-name").textContent = settingText(`anStyle_${card.dataset.anStyle}`);
      card.querySelector(".ds-an-desc").textContent = settingText(`anStyleDesc_${card.dataset.anStyle}`);
    });

    dialog.addEventListener("click", (event) => {
      const target = event.target instanceof Element ? event.target : null;
      if (!target) return;
      if (target.closest("[data-an-close], [data-an-close-text]")) { dialog.close(); return; }
      const card = target.closest("[data-an-style]");
      if (card) {
        writeStorage(ANIM_STYLE_KEY, card.dataset.anStyle);
        applyAnimationSettings();
        sync();
        playUiSound("select");
        return;
      }
      const speed = target.closest("[data-an-speed]");
      if (speed) {
        writeStorage(ANIM_SPEED_KEY, speed.dataset.anSpeed);
        applyAnimationSettings();
        sync();
        playUiSound("click");
        return;
      }
      if (target.closest("[data-an-reset]")) {
        [ANIM_ENABLED_KEY, ANIM_STYLE_KEY, ANIM_SPEED_KEY].forEach((key) => writeStorage(key, null));
        applyAnimationSettings();
        sync();
        playUiSound("confirm");
      }
    });
    $("[data-an-enabled]").addEventListener("change", (event) => {
      writeStorage(ANIM_ENABLED_KEY, String(event.target.checked));
      applyAnimationSettings();
      sync();
      playUiSound("toggle");
    });
    dialog.addEventListener("close", () => playUiSound("close"));
    dialog.demoscopeSync = sync;
    sync();
    return dialog;
  }

  function openAnimationsDialog() {
    const dialog = ensureAnimationsDialog();
    if (dialog.open) return;
    dialog.demoscopeSync?.();
    dialog.showModal();
    playUiSound("open");
    dialog.querySelector(".ds-an-card.is-selected, .ds-an-card")?.focus();
  }

  // ---------------------------------------------------------------------------
  // Shared look of the DemoScope sub-windows (hotkeys, animations)
  // ---------------------------------------------------------------------------
  function ensureDemoscopeDialogStyles() {
    if (document.getElementById("demoscope-dialog-style")) return;
    const style = document.createElement("style");
    style.id = "demoscope-dialog-style";
    style.textContent = `
      .ds-dialog { text-align: left; box-sizing: border-box; width: min(700px, calc(100vw - 20px)); max-width: none; max-height: min(88vh, calc(100dvh - 20px)); padding: 0; overflow: auto; border: 1px solid rgba(226,235,246,.16); border-radius: 17px; background: #0e131b; color: #f4f7fb; box-shadow: 0 28px 90px #000a; font: 500 .9rem/1.5 system-ui, -apple-system, "Segoe UI", sans-serif; }
      .ds-dialog::backdrop { background: rgba(2,4,8,.72); backdrop-filter: blur(8px); }
      .ds-dialog .demoscope-settings-shell { padding: clamp(18px, 4vw, 28px); }
      .ds-dialog .demoscope-settings-head { display: flex; align-items: center; justify-content: space-between; gap: 18px; margin-bottom: 12px; }
      .ds-dialog .demoscope-settings-kicker { margin: 0 0 3px; color: #f2a33a; font-size: .68rem; font-weight: 800; letter-spacing: .15em; }
      .ds-dialog .demoscope-settings-head h2 { margin: 0; font-size: 1.35rem; line-height: 1.2; }
      .ds-dialog .demoscope-settings-close { display: grid; place-items: center; width: 38px; height: 38px; border: 1px solid rgba(226,235,246,.15); border-radius: 10px; background: #141b25; color: #d7e0ec; font-size: 1.25rem; cursor: pointer; }
      .ds-dialog .demoscope-settings-close::before { content: "×"; }
      .ds-dialog .demoscope-settings-close:hover, .ds-dialog .demoscope-settings-secondary:hover { border-color: rgba(242,163,58,.6); color: #ffb654; }
      .ds-dialog .demoscope-settings-section { margin-top: 12px; padding: 16px; border: 1px solid rgba(226,235,246,.1); border-radius: 12px; background: #0a0e14; }
      .ds-dialog .demoscope-settings-section h3 { margin: 0 0 8px; color: #f2a33a; font-size: .77rem; letter-spacing: .09em; text-transform: uppercase; }
      .ds-dialog .demoscope-settings-toggle { display: flex; align-items: center; gap: 10px; color: #c4cedb; }
      .ds-dialog .demoscope-settings-toggle input { width: 17px; height: 17px; accent-color: #f2a33a; }
      .ds-dialog .demoscope-settings-help { margin: 0 0 8px; color: #8795a8; font-size: .8rem; }
      .ds-dialog .demoscope-settings-actions { display: flex; flex-wrap: wrap; gap: 9px; margin-top: 14px; }
      .ds-dialog .demoscope-settings-secondary { min-height: 39px; padding: 0 14px; border: 1px solid rgba(226,235,246,.16); border-radius: 9px; background: #17202b; color: #e8edf5; font: 650 .8rem system-ui, sans-serif; cursor: pointer; }
      .ds-dialog :is(button, input):focus-visible { outline: 2px solid #ffb654; outline-offset: 3px; }

      .ds-seg { display: inline-flex; padding: 3px; gap: 3px; border: 1px solid rgba(226,235,246,.12); border-radius: 10px; background: #0e131b; }
      .ds-seg button { min-height: 30px; padding: 0 12px; border: 0; border-radius: 7px; background: transparent; color: #9aa8bb; font: 650 .76rem system-ui, sans-serif; cursor: pointer; }
      .ds-seg button.is-selected { background: rgba(242,163,58,.16); color: #ffb654; }
      .ds-an-speed { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-top: 14px; color: #c4cedb; }
      .ds-an-note { margin: 12px 0 0 !important; }
      .ds-an-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(190px, 1fr)); gap: 10px; }
      .ds-an-card { display: grid; gap: 4px; padding: 10px; text-align: left; border: 1px solid rgba(226,235,246,.12); border-radius: 12px; background: #0e131b; color: #e8edf5; font: inherit; cursor: pointer; transition: border-color 140ms ease, background 140ms ease, transform 140ms ease; }
      .ds-an-card:hover { border-color: rgba(242,163,58,.5); transform: translateY(-1px); }
      .ds-an-card.is-selected { border-color: #f2a33a; background: rgba(242,163,58,.07); box-shadow: 0 0 0 1px rgba(242,163,58,.35); }
      .ds-an-preview { display: flex; align-items: center; justify-content: center; gap: 10px; height: 64px; margin-bottom: 4px; border-radius: 9px; background: #0a0e14; overflow: hidden; color: #aab6c8; font: 750 .6875rem/1 system-ui, sans-serif; letter-spacing: .12em; }
      .ds-an-card.is-muted .ds-an-name::after { content: ""; }
      .ds-an-name { font-weight: 700; font-size: .86rem; }
      .ds-an-desc { color: #8795a8; font-size: .75rem; line-height: 1.35; }

      .ds-hk-group { padding-bottom: 6px !important; }
      .ds-hk-row { display: grid; grid-template-columns: minmax(0, 1fr) auto; align-items: center; gap: 6px 14px; padding: 11px 0; border-top: 1px solid rgba(226,235,246,.07); }
      .ds-hk-group h3 + .ds-hk-row { border-top: 0; }
      .ds-hk-name { font-weight: 650; color: #f1f5fa; }
      .ds-hk-desc { margin-top: 1px; color: #8795a8; font-size: .78rem; line-height: 1.4; }
      .ds-hk-controls { display: flex; align-items: center; gap: 7px; }
      .ds-hk-key { min-width: 84px; height: 36px; padding: 0 12px; border: 1px solid rgba(226,235,246,.2); border-radius: 9px; background: #18212d; color: #fff; font: 700 .85rem ui-monospace, SFMono-Regular, Menlo, monospace; cursor: pointer; transition: border-color 140ms ease, background 140ms ease; }
      .ds-hk-key:hover { border-color: rgba(242,163,58,.6); }
      .ds-hk-row.is-changed .ds-hk-key { border-color: rgba(242,163,58,.55); background: rgba(242,163,58,.1); }
      .ds-hk-row.is-unset .ds-hk-key { border-style: dashed; border-color: rgba(255,135,148,.5); color: #ff8794; font: 650 .78rem system-ui, sans-serif; background: transparent; }
      .ds-hk-row.is-capturing .ds-hk-key { border-color: #f2a33a; color: #ffb654; font: 650 .78rem system-ui, sans-serif; animation: ds-hk-wait 1s ease-in-out infinite; }
      @keyframes ds-hk-wait { 0%, 100% { box-shadow: 0 0 0 0 rgba(242,163,58,.45); } 50% { box-shadow: 0 0 0 5px rgba(242,163,58,0); } }
      .ds-hk-reset { display: grid; place-items: center; width: 36px; height: 36px; border: 1px solid rgba(226,235,246,.16); border-radius: 9px; background: #17202b; color: #c4cedb; cursor: pointer; }
      .ds-hk-reset:hover { border-color: rgba(242,163,58,.6); color: #ffb654; }
      .ds-hk-reset svg { width: 16px; height: 16px; }
      .ds-hk-conflict { grid-column: 1 / -1; padding: 11px 13px; border: 1px solid rgba(242,163,58,.3); border-left: 3px solid #f2a33a; border-radius: 9px; background: rgba(242,163,58,.08); color: #ecd7b3; font-size: .8rem; line-height: 1.45; }
      .ds-hk-conflict strong { display: block; margin-bottom: 3px; color: #ffc678; }
      .ds-hk-conflict p { margin: 0 0 6px; }
      .ds-hk-conflict .ds-hk-help { color: #b9a583; font-size: .75rem; }
      .ds-hk-conflict-actions { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 8px; }
      .ds-hk-conflict-actions button { min-height: 34px; padding: 0 13px; border: 1px solid rgba(226,235,246,.18); border-radius: 8px; background: #17202b; color: #f1f5fa; font: 650 .78rem system-ui, sans-serif; cursor: pointer; }
      .ds-hk-conflict-actions button:first-child { border-color: rgba(242,163,58,.6); background: rgba(242,163,58,.18); color: #ffd7a1; }
      .ds-hk-status { min-height: 1.4em; margin: 10px 2px 0; color: #9aa8bb; font-size: .8rem; }
      .ds-hk-status.is-warn { color: #ffb654; }
      .ds-hk-footer { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 9px; margin-top: 12px; }
      @media (max-width: 520px) { .ds-hk-row { grid-template-columns: 1fr; } .ds-hk-controls { justify-content: flex-start; } }
      @media (prefers-reduced-motion: reduce) { .ds-hk-row.is-capturing .ds-hk-key { animation: none; } }
    `;
    (document.head || document.documentElement).append(style);
  }

  // ---------------------------------------------------------------------------
  // Hotkeys window
  // ---------------------------------------------------------------------------
  const hkState = { capturing: null, conflict: null, resetAllArmed: false, message: "", warn: false };

  function hkActionName(id) { return settingText(`hkName_${id}`); }
  function hkGroupName(group) { return settingText(`hkGroup_${group}`); }

  function hkActionDescription(id) {
    const quick = id.match(/^quick([1-5])$/);
    if (quick) {
      const n = Number(quick[1]);
      const classic = [tr("quickBotPreset"), tr("quickCheaterOne"), tr("quickCheaterTwo"), tr("quickCleanPlayer"), tr("quickSkip")][n - 1];
      const single = n <= 3 ? [tr("cheatYes"), tr("uncertain"), tr("cheatNo")][n - 1] : "";
      return fmt(settingText(single ? "hkDescQuick" : "hkDescQuickClassicOnly"), { a: classic, b: single });
    }
    return settingText(`hkDesc_${id}`);
  }

  function hkSetMessage(text, warn = false) {
    hkState.message = text;
    hkState.warn = warn;
  }

  function hkCancelCapture() {
    hkState.capturing = null;
    keyCaptureActive = false;
  }

  function hkRowMarkup(action) {
    const code = getBinding(action.id);
    const changed = code !== action.def;
    const capturing = hkState.capturing === action.id;
    const classes = ["ds-hk-row", changed ? "is-changed" : "", !code ? "is-unset" : "", capturing ? "is-capturing" : ""].filter(Boolean).join(" ");
    const keyText = capturing ? settingText("hkPress") : !code ? settingText("hkNotSet") : formatKeyLabel(code);
    const name = hkActionName(action.id);
    const resetLabel = fmt(settingText("hkResetOne"), { key: formatKeyLabel(action.def) });

    let conflict = "";
    if (hkState.conflict && hkState.conflict.actionId === action.id) {
      const other = KEY_ACTION_BY_ID.get(hkState.conflict.otherId);
      const previous = getBinding(action.id);
      const body = fmt(settingText("hkConflictBody"), {
        key: `“${formatKeyLabel(hkState.conflict.code)}”`,
        action: hkActionName(other.id),
        group: hkGroupName(other.group),
        desc: hkActionDescription(other.id),
      });
      const help = previous
        ? fmt(settingText("hkConflictHelpSwap"), { other: hkActionName(other.id), prev: `“${formatKeyLabel(previous)}”` })
        : fmt(settingText("hkConflictHelp"), { other: hkActionName(other.id) });
      conflict = `
        <div class="ds-hk-conflict" role="alert">
          <strong>${escapeHtml(settingText("hkConflictTitle"))}</strong>
          <p>${escapeHtml(body)}</p>
          <p class="ds-hk-help">${escapeHtml(help)}</p>
          <div class="ds-hk-conflict-actions">
            <button type="button" data-hk-replace>${escapeHtml(settingText("hkReplace"))}</button>
            ${previous ? `<button type="button" data-hk-swap>${escapeHtml(settingText("hkSwap"))}</button>` : ""}
            <button type="button" data-hk-conflict-cancel>${escapeHtml(settingText("hkCancel"))}</button>
          </div>
        </div>`;
    }

    return `
      <div class="${classes}" data-hk-action="${action.id}">
        <div class="ds-hk-info">
          <div class="ds-hk-name">${escapeHtml(name)}</div>
          <div class="ds-hk-desc">${escapeHtml(hkActionDescription(action.id))}</div>
        </div>
        <div class="ds-hk-controls">
          <button type="button" class="ds-hk-key" data-hk-change aria-label="${escapeHtml(fmt(settingText("hkChangeAria"), { action: name }))}">${escapeHtml(keyText)}</button>
          ${changed ? `<button type="button" class="ds-hk-reset" data-hk-reset title="${escapeHtml(resetLabel)}" aria-label="${escapeHtml(resetLabel)}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v5h5"/></svg></button>` : ""}
        </div>
        ${conflict}
      </div>`;
  }

  function renderHotkeys() {
    const dialog = document.getElementById("vacnet-hotkeys-dialog");
    if (!dialog) return;
    const scrollTop = dialog.scrollTop;
    dialog.querySelector("[data-hk-list]").innerHTML = KEY_GROUPS.map((group) => `
      <section class="demoscope-settings-section ds-hk-group">
        <h3>${escapeHtml(hkGroupName(group))}</h3>
        ${KEY_ACTIONS.filter((action) => action.group === group).map(hkRowMarkup).join("")}
      </section>`).join("");
    const status = dialog.querySelector("[data-hk-status]");
    status.textContent = hkState.message;
    status.classList.toggle("is-warn", hkState.warn);
    dialog.querySelector("[data-hk-reset-all]").textContent = settingText(hkState.resetAllArmed ? "hkResetAllConfirm" : "hkResetAll");
    dialog.scrollTop = scrollTop;
  }

  function hkCommit(actionId, code, mode = "replace") {
    const previous = getBinding(actionId);
    const conflict = findKeyConflict(actionId, code);
    if (conflict) setBinding(conflict.id, mode === "swap" && previous ? previous : "");
    setBinding(actionId, code);
    hkCancelCapture();
    hkState.conflict = null;
    hkSetMessage(fmt(settingText("hkSaved"), { action: hkActionName(actionId), key: formatKeyLabel(code) }));
    refreshKeyLabels();
    playUiSound("confirm");
    renderHotkeys();
  }

  function hkRequestAssign(actionId, code) {
    if (code === getBinding(actionId)) {
      hkCancelCapture();
      hkState.conflict = null;
      hkSetMessage(settingText("hkUnchanged"));
      renderHotkeys();
      return;
    }
    const other = findKeyConflict(actionId, code);
    if (other) {
      hkCancelCapture();
      hkState.conflict = { actionId, code, otherId: other.id };
      hkSetMessage("");
      playUiSound("error");
      renderHotkeys();
      document.querySelector(`#vacnet-hotkeys-dialog [data-hk-action="${actionId}"] [data-hk-replace]`)?.focus();
      return;
    }
    hkCommit(actionId, code);
  }

  function ensureHotkeysDialog() {
    let dialog = document.getElementById("vacnet-hotkeys-dialog");
    if (dialog instanceof HTMLDialogElement) return dialog;
    ensureDemoscopeDialogStyles();

    dialog = document.createElement("dialog");
    dialog.id = "vacnet-hotkeys-dialog";
    dialog.className = "ds-dialog";
    dialog.setAttribute("aria-labelledby", "vacnet-hotkeys-title");
    dialog.innerHTML = `
      <div class="demoscope-settings-shell">
        <header class="demoscope-settings-head">
          <div><p class="demoscope-settings-kicker">DEMOSCOPE</p><h2 id="vacnet-hotkeys-title"></h2></div>
          <button class="demoscope-settings-close" type="button" data-hk-close></button>
        </header>
        <p class="demoscope-settings-help" data-hk-intro></p>
        <div data-hk-list></div>
        <p class="ds-hk-status" data-hk-status role="status" aria-live="polite"></p>
        <div class="ds-hk-footer">
          <button type="button" class="demoscope-settings-secondary" data-hk-reset-all></button>
          <button type="button" class="demoscope-settings-secondary" data-hk-close-text></button>
        </div>
      </div>`;
    document.body.append(dialog);

    dialog.querySelector("#vacnet-hotkeys-title").textContent = settingText("hkTitle");
    dialog.querySelector("[data-hk-intro]").textContent = settingText("hkIntro");
    dialog.querySelector("[data-hk-close]").setAttribute("aria-label", settingText("hkClose"));
    dialog.querySelector("[data-hk-close-text]").textContent = settingText("hkClose");

    dialog.addEventListener("click", (event) => {
      const target = event.target instanceof Element ? event.target : null;
      if (!target) return;
      if (target.closest("[data-hk-close], [data-hk-close-text]")) { dialog.close(); return; }

      const row = target.closest("[data-hk-action]");
      const actionId = row?.dataset.hkAction;

      if (target.closest("[data-hk-reset-all]")) {
        if (!hkState.resetAllArmed) {
          hkState.resetAllArmed = true;
          renderHotkeys();
          return;
        }
        hkState.resetAllArmed = false;
        hkCancelCapture();
        hkState.conflict = null;
        resetAllBindings();
        hkSetMessage(settingText("hkResetDone"));
        refreshKeyLabels();
        playUiSound("confirm");
        renderHotkeys();
        return;
      }
      if (hkState.resetAllArmed) { hkState.resetAllArmed = false; renderHotkeys(); }

      if (!actionId) return;
      if (target.closest("[data-hk-change]")) {
        const wasCapturing = hkState.capturing === actionId;
        hkCancelCapture();
        hkState.conflict = null;
        hkSetMessage("");
        if (!wasCapturing) {
          hkState.capturing = actionId;
          keyCaptureActive = true;
          playUiSound("click");
        }
        renderHotkeys();
        dialog.querySelector(`[data-hk-action="${actionId}"] [data-hk-change]`)?.focus();
        return;
      }
      if (target.closest("[data-hk-reset]")) {
        hkCancelCapture();
        hkRequestAssign(actionId, KEY_ACTION_BY_ID.get(actionId).def);
        return;
      }
      if (target.closest("[data-hk-replace]") && hkState.conflict) {
        hkCommit(actionId, hkState.conflict.code, "replace");
        return;
      }
      if (target.closest("[data-hk-swap]") && hkState.conflict) {
        hkCommit(actionId, hkState.conflict.code, "swap");
        return;
      }
      if (target.closest("[data-hk-conflict-cancel]")) {
        hkState.conflict = null;
        renderHotkeys();
        dialog.querySelector(`[data-hk-action="${actionId}"] [data-hk-change]`)?.focus();
      }
    });

    // Key capture: runs before every other DemoScope handler.
    window.addEventListener("keydown", (event) => {
      if (!keyCaptureActive || !hkState.capturing) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      if (event.repeat) return;
      const actionId = hkState.capturing;
      const code = normalizeKeyCode(event.code);
      if (event.ctrlKey || event.altKey || event.metaKey || !code) {
        hkSetMessage(settingText("hkReserved"), true);
        renderHotkeys();
        return;
      }
      const problem = validateKeyForAction(actionId, code);
      if (problem) {
        hkSetMessage(settingText(problem === "shift" ? "hkShiftOnly" : "hkReserved"), true);
        playUiSound("error");
        renderHotkeys();
        return;
      }
      hkRequestAssign(actionId, code);
    }, true);

    dialog.addEventListener("cancel", (event) => {
      if (hkState.capturing || hkState.conflict) {
        event.preventDefault();
        hkCancelCapture();
        hkState.conflict = null;
        renderHotkeys();
      }
    });
    dialog.addEventListener("close", () => {
      hkCancelCapture();
      hkState.conflict = null;
      hkState.resetAllArmed = false;
      playUiSound("close");
    });
    return dialog;
  }

  function openHotkeysDialog() {
    const dialog = ensureHotkeysDialog();
    if (dialog.open) return;
    hkState.message = "";
    hkState.warn = false;
    hkState.conflict = null;
    hkState.resetAllArmed = false;
    renderHotkeys();
    dialog.showModal();
    playUiSound("open");
    dialog.querySelector("[data-hk-change]")?.focus();
  }

  // ---------------------------------------------------------------------------
  // Main settings window: entries for the two sub-windows on top, one reset at
  // the bottom, everything left-aligned like the sub-windows.
  // ---------------------------------------------------------------------------
  function ensureSettingsLayoutStyles() {
    if (document.getElementById("demoscope-settings-layout-style")) return;
    const style = document.createElement("style");
    style.id = "demoscope-settings-layout-style";
    style.textContent = `
      #vacnet-settings-dialog { text-align: left; }
      #vacnet-settings-dialog .demoscope-settings-section h3,
      #vacnet-settings-dialog .demoscope-settings-help { text-align: left; }
      #vacnet-settings-dialog .demoscope-settings-actions { justify-content: flex-start; }
      .ds-settings-entry { display: grid; grid-template-columns: minmax(0, 1fr) auto; align-items: center; gap: 8px 16px; }
      .ds-settings-entry h3 { margin: 0 0 4px !important; }
      .ds-settings-entry .demoscope-settings-help { margin: 0 !important; }
      .ds-entry-summary { display: inline-block; margin: 9px 0 0; padding: 3px 10px; border: 1px solid rgba(226,235,246,.12); border-radius: 99px; background: #0e131b; color: #b4bfce; font: 650 .72rem system-ui, sans-serif; }
      .ds-reset-section .demoscope-settings-help { margin: 0 0 10px !important; }
      .ds-diag-section .demoscope-settings-help { margin: 0 0 10px !important; }
      .ds-diag-section [role="status"] { margin: 10px 0 0 !important; }
      .ds-diag-steps { display: grid; gap: 10px; margin: 0; padding: 0; list-style: none; }
      .ds-diag-step { display: grid; grid-template-columns: 28px minmax(0, 1fr); align-items: start; gap: 12px; padding: 12px; border: 1px solid rgba(226,235,246,.1); border-radius: 12px; background: #0e131b; transition: border-color 200ms ease, box-shadow 200ms ease; }
      .ds-diag-step.is-ready { border-color: rgba(242,163,58,.55); box-shadow: 0 0 0 3px rgba(242,163,58,.1); animation: ds-step-ready 1.1s ease-out 1; }
      @keyframes ds-step-ready { from { box-shadow: 0 0 0 0 rgba(242,163,58,.55); } to { box-shadow: 0 0 0 3px rgba(242,163,58,.1); } }
      .ds-step-no { display: grid; place-items: center; width: 28px; height: 28px; border-radius: 50%; background: rgba(242,163,58,.14); color: #ffb654; font: 800 .8rem system-ui, sans-serif; }
      .ds-step-body .demoscope-settings-help { margin: 8px 0 0 !important; }
      .ds-github-link { display: inline-flex; align-items: center; gap: 9px; min-height: 39px; padding: 0 14px; border: 1px solid rgba(226,235,246,.24); border-radius: 9px; background: #17202b; color: #f1f5fa; font: 650 .8rem system-ui, sans-serif; text-decoration: none; cursor: pointer; transition: border-color 140ms ease, color 140ms ease; }
      .ds-github-link:hover { border-color: rgba(242,163,58,.65); color: #ffb654; text-decoration: none; }
      .ds-github-link:focus-visible { outline: 2px solid #ffb654; outline-offset: 3px; }
      .ds-github-link svg { width: 16px; height: 16px; flex: 0 0 auto; }
      .ds-github-link .ds-ext { width: 12px; height: 12px; opacity: .7; }
      .ds-diag-url { display: block; margin-top: 9px; font: 500 .74rem/1.4 ui-monospace, SFMono-Regular, Menlo, monospace; color: #7d8ba0; word-break: break-all; }
      .ds-diag-url b { color: #e8edf5; font-weight: 700; }
      .ds-diag-text { box-sizing: border-box; width: 100%; margin-top: 10px; padding: 10px; border: 1px solid rgba(226,235,246,.16); border-radius: 9px; background: #0a0e14; color: #c4cedb; font: 500 .72rem/1.45 ui-monospace, SFMono-Regular, Menlo, monospace; resize: vertical; }
      @media (max-width: 520px) { .ds-settings-entry { grid-template-columns: 1fr; } .ds-settings-entry button { width: 100%; } }
    `;
    (document.head || document.documentElement).append(style);
  }

  const ANIM_SPEED_LABEL_KEYS = { slow: "anSlow", normal: "anNormal", fast: "anFast" };

  function refreshSettingsSummaries() {
    const dialog = document.getElementById("vacnet-settings-dialog");
    if (!dialog) return;
    const hotkeys = dialog.querySelector('[data-ds-summary="hotkeys"]');
    if (hotkeys) {
      const changed = KEY_ACTIONS.filter((action) => getBinding(action.id) !== action.def).length;
      hotkeys.textContent = changed ? fmt(settingText("hkSummaryChanged"), { n: changed }) : settingText("hkSummaryDefault");
    }
    const animations = dialog.querySelector('[data-ds-summary="animations"]');
    if (animations) {
      animations.textContent = animEnabled()
        ? `${settingText(`anStyle_${animStyle()}`)} · ${settingText(ANIM_SPEED_LABEL_KEYS[animSpeedKey()])}`
        : settingText("anSummaryOff");
    }
  }

  function installExtraSettingsSections(settingsDialog) {
    if (settingsDialog.querySelector("[data-ds-entry]")) return;
    ensureSettingsLayoutStyles();
    const shell = settingsDialog.querySelector(".demoscope-settings-shell");
    const head = shell.querySelector(".demoscope-settings-head");

    const entry = (id, titleKey, noteKey, buttonKey, handler) => {
      const section = document.createElement("section");
      section.className = "demoscope-settings-section ds-settings-entry";
      section.dataset.dsEntry = id;
      const text = document.createElement("div");
      const title = document.createElement("h3");
      title.textContent = settingText(titleKey);
      const note = document.createElement("p");
      note.className = "demoscope-settings-help";
      note.textContent = settingText(noteKey);
      const summary = document.createElement("span");
      summary.className = "ds-entry-summary";
      summary.dataset.dsSummary = id;
      text.append(title, note, summary);
      const button = document.createElement("button");
      button.type = "button";
      button.className = "demoscope-settings-secondary";
      button.textContent = settingText(buttonKey);
      button.addEventListener("click", handler);
      section.append(text, button);
      return section;
    };
    head.after(
      entry("hotkeys", "hkTitle", "hkOpenNote", "hkOpenButton", openHotkeysDialog),
      entry("animations", "anTitle", "anOpenNote", "anOpenButton", openAnimationsDialog),
    );

    // The old "settings key" block is replaced by the Hotkeys window; its reset
    // button and status line move into a dedicated reset section at the bottom.
    const REPORT_URL = "https://github.com/ebayybe/DemoScope/issues";
    const diagSection = document.createElement("section");
    diagSection.className = "demoscope-settings-section ds-diag-section";
    const diagTitle = document.createElement("h3");
    diagTitle.textContent = settingText("diagTitle");
    const diagNote = document.createElement("p");
    diagNote.className = "demoscope-settings-help";
    diagNote.textContent = settingText("diagNote");

    const steps = document.createElement("ol");
    steps.className = "ds-diag-steps";
    const makeStep = (number) => {
      const item = document.createElement("li");
      item.className = "ds-diag-step";
      const badge = document.createElement("span");
      badge.className = "ds-step-no";
      badge.setAttribute("aria-hidden", "true");
      badge.textContent = String(number);
      const body = document.createElement("div");
      body.className = "ds-step-body";
      item.append(badge, body);
      return { item, body };
    };

    // Step 1: copy the report.
    const stepCopy = makeStep(1);
    const diagButton = document.createElement("button");
    diagButton.type = "button";
    diagButton.className = "demoscope-settings-secondary";
    diagButton.textContent = settingText("diagButton");
    const diagStatus = document.createElement("p");
    diagStatus.className = "demoscope-settings-help";
    diagStatus.setAttribute("role", "status");
    const diagText = document.createElement("textarea");
    diagText.readOnly = true;
    diagText.hidden = true;
    diagText.rows = 8;
    diagText.className = "ds-diag-text";
    stepCopy.body.append(diagButton, diagStatus, diagText);

    // Step 2: a plain link to the public GitHub issues page. The address is
    // printed in full, opens in a new tab, and nothing is sent automatically.
    const stepReport = makeStep(2);
    const reportLink = document.createElement("a");
    reportLink.className = "ds-github-link";
    reportLink.href = REPORT_URL;
    reportLink.target = "_blank";
    reportLink.rel = "noopener noreferrer";
    reportLink.title = REPORT_URL;
    reportLink.innerHTML =
      '<svg viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>' +
      '<span></span>' +
      '<svg class="ds-ext" viewBox="0 0 16 16" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" d="M9 2h5v5M14 2 7.5 8.5M12 9.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3.5"/></svg>';
    reportLink.querySelector("span").textContent = settingText("diagReportButton");
    reportLink.setAttribute("aria-label", `${settingText("diagReportButton")} (github.com)`);
    const reportUrl = document.createElement("span");
    reportUrl.className = "ds-diag-url";
    reportUrl.innerHTML = "<span>https://</span><b>github.com</b><span>/ebayybe/DemoScope/issues</span>";
    const reportNote = document.createElement("p");
    reportNote.className = "demoscope-settings-help";
    reportNote.textContent = settingText("diagReportNote");
    stepReport.body.append(reportLink, reportUrl, reportNote);

    diagButton.addEventListener("click", async () => {
      if (await copyDiagnostics(diagStatus, diagText)) stepReport.item.classList.add("is-ready");
    });
    steps.append(stepCopy.item, stepReport.item);
    diagSection.append(diagTitle, diagNote, steps);
    shell.append(diagSection);

    const legacy = shell.querySelector(".demoscope-settings-shortcut-section");
    const resetButton = legacy?.querySelector("#demoscope-settings-reset-defaults");
    const status = legacy?.querySelector("#demoscope-settings-key-status");
    if (legacy && resetButton && status) {
      const reset = document.createElement("section");
      reset.className = "demoscope-settings-section ds-reset-section";
      const title = document.createElement("h3");
      title.textContent = settingText("resetSectionTitle");
      const note = document.createElement("p");
      note.className = "demoscope-settings-help";
      note.textContent = settingText("resetSectionNote");
      const actions = document.createElement("div");
      actions.className = "demoscope-settings-actions";
      resetButton.className = "demoscope-settings-danger";
      actions.append(resetButton);
      reset.append(title, note, status, actions);
      shell.append(reset);
      legacy.hidden = true;
    }
    refreshSettingsSummaries();
  }

  function openSettingsDialog(opener = null) {
    const dialog = ensureSettingsDialog();
    settingsReturnFocus = opener instanceof HTMLElement
      ? opener
      : document.activeElement instanceof HTMLElement && !dialog.contains(document.activeElement)
        ? document.activeElement
        : null;
    if (dialog.open) {
      dialog.querySelector("#demoscope-settings-sound-enabled").focus();
      return;
    }
    dialog.querySelector("#demoscope-settings-sound-enabled").checked = soundsEnabled();
    dialog.querySelector("#demoscope-settings-volume").value = String(Math.round(getSoundVolume() * 100));
    dialog.querySelector("#demoscope-settings-volume-number").value = dialog.querySelector("#demoscope-settings-volume").value;
    dialog.querySelector("#demoscope-settings-current-key").textContent = formatHotkey(readSettingsHotkey());
    dialog.querySelector("[data-history-stats]").textContent = getSettingsHistorySummary();
    dialog.querySelector("#demoscope-settings-change-key").textContent = settingText("settingsChangeKey");
    dialog.querySelector("#demoscope-settings-key-status").textContent = "";
    refreshSettingsSummaries();
    dialog.showModal();
    playUiSound("open");
    dialog.querySelector(".demoscope-settings-close").focus();
  }

  function installSettingsUi() {
    const dialog = ensureSettingsDialog();
    if (document.documentElement.dataset.demoscopeSettingsHotkeyBound !== "1") {
      document.documentElement.dataset.demoscopeSettingsHotkeyBound = "1";
      window.addEventListener("keydown", (event) => {
        if (keyCaptureActive) return;
        if (isCapturingSettingsHotkey) {
          event.preventDefault();
          event.stopImmediatePropagation();
          if (event.code === "Escape") {
            isCapturingSettingsHotkey = false;
            dialog.querySelector("#demoscope-settings-key-status").textContent = "";
            dialog.querySelector("#demoscope-settings-change-key").textContent = settingText("settingsChangeKey");
            return;
          }
          const hotkeyCode = getSettingsHotkeyCode(event);
          if (event.repeat || event.ctrlKey || event.altKey || event.metaKey || !hotkeyCode || isReservedSettingsHotkey(hotkeyCode)) {
            dialog.querySelector("#demoscope-settings-key-status").textContent = settingText("settingsKeyReserved");
            return;
          }
          const normalizedHotkey = normalizeKeyCode(hotkeyCode);
          const hotkeyConflict = findKeyConflict("settings", normalizedHotkey);
          if (hotkeyConflict) {
            dialog.querySelector("#demoscope-settings-key-status").textContent = fmt(settingText("hkConflictShort"), {
              key: formatKeyLabel(normalizedHotkey), action: hkActionName(hotkeyConflict.id),
            });
            return;
          }
          try { setBinding("settings", normalizedHotkey); } catch { /* This page retains the new setting until reload. */ }
          isCapturingSettingsHotkey = false;
          dialog.querySelector("#demoscope-settings-current-key").textContent = formatHotkey(normalizedHotkey);
          refreshKeyLabels();
          dialog.querySelector("#demoscope-settings-key-status").textContent = settingText("settingsKeySaved");
          dialog.querySelector("#demoscope-settings-change-key").textContent = settingText("settingsChangeKey");
          playUiSound("confirm");
          return;
        }
        const settingsCode = readSettingsHotkey();
        if (event.repeat || event.ctrlKey || event.altKey || event.metaKey || !settingsCode || normalizeKeyCode(event.code) !== settingsCode) return;
        if (document.querySelector(".ds-dialog[open]")) return;
        if (dialog.open) {
          event.preventDefault();
          event.stopImmediatePropagation();
          dialog.close();
          return;
        }
        if (isShortcutBlocked(event.target)) return;
        event.preventDefault();
        event.stopImmediatePropagation();
        openSettingsDialog();
      }, true);
    }
    installUiSoundEvents();
  }

  function installUiSoundEvents() {
    if (document.documentElement.dataset.demoscopeSoundsBound === "1") return;
    document.documentElement.dataset.demoscopeSoundsBound = "1";
    document.addEventListener("click", (event) => {
      if (!(event.target instanceof Element)) return;
      const target = event.target.closest(
        "#vacnet-enhance-bar button[data-preset], .demoscope-settings-trigger, #vacnet-local-history-open, " +
        "#vacnet-review-rules-open, .vacnet-rules-close, .vacnet-language-trigger, .vacnet-language-option, " +
        ".demoscope-invite-eye, .demoscope-invite-bottom .SecondaryButton, .PageHeader .invitebutton, .vacnet-advanced-presets > summary, " +
        "#demoscope-settings-import, #demoscope-settings-export, #demoscope-settings-export-report, #demoscope-settings-merge-report, #demoscope-settings-clear",
      );
      if (!target || (target instanceof HTMLButtonElement && target.disabled)) return;
      if (target.matches("#vacnet-enhance-bar button[data-preset]")) return;
      const kind = target.matches("#vacnet-review-rules-open, .vacnet-rules-close, .vacnet-language-option") ? "select" : "click";
      playUiSound(kind);
    }, true);
  }

  let accountNameHiddenFallback = false;

  function accountNameIsHidden() {
    try {
      const saved = localStorage.getItem(ACCOUNT_NAME_HIDDEN_STORAGE_KEY);
      return saved === null ? accountNameHiddenFallback : saved === "true";
    }
    catch { return accountNameHiddenFallback; }
  }

  function installAccountNameControl() {
    if (!document.getElementById("demoscope-account-name-style")) {
      const style = document.createElement("style");
      style.id = "demoscope-account-name-style";
      style.textContent = ".demoscope-account-name-hidden{display:none!important}.demoscope-account-name-toggle{display:inline-grid;place-items:center;vertical-align:middle;width:24px;height:24px;margin:0 5px;padding:0;border:1px solid rgba(226,235,246,.16);border-radius:6px;background:#141b25;color:inherit;cursor:pointer}.demoscope-account-name-toggle:hover{color:#ffb654;border-color:rgba(242,163,58,.55)}.demoscope-account-name-toggle svg{width:14px;height:14px}";
      (document.head || document.documentElement).append(style);
    }

    const updateAccountName = () => {
      const logout = document.querySelector('a[href*="/oauth/logout"]');
      if (!(logout instanceof HTMLAnchorElement)) return;
      let sibling = logout.previousSibling;
      while (sibling && ((sibling instanceof Text && !sibling.textContent.trim()) ||
        (sibling instanceof Element && sibling.matches(".demoscope-account-name-toggle")))) {
        sibling = sibling.previousSibling;
      }

      let nameElement = null;
      if (sibling instanceof Text && sibling.textContent.trim()) {
        nameElement = document.createElement("span");
        nameElement.textContent = sibling.textContent.trim();
        nameElement.className = "demoscope-account-name";
        sibling.replaceWith(nameElement);
      } else if (sibling instanceof HTMLElement && sibling.textContent.trim() &&
        !/^(log\s*out|logout)$/i.test(sibling.textContent.trim())) {
        nameElement = sibling;
        nameElement.classList.add("demoscope-account-name");
      }

      let toggle = logout.parentElement?.querySelector(":scope > .demoscope-account-name-toggle");
      if (!(toggle instanceof HTMLButtonElement)) {
        toggle = document.createElement("button");
        toggle.type = "button";
        toggle.className = "demoscope-account-name-toggle";
        toggle.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M2.5 12s3.3-6 9.5-6 9.5 6 9.5 6-3.3 6-9.5 6-9.5-6-9.5-6Z"/><circle cx="12" cy="12" r="2.7"/></svg>';
        (nameElement || logout).insertAdjacentElement(nameElement ? "afterend" : "beforebegin", toggle);
        toggle.addEventListener("click", () => {
          const hidden = toggle.getAttribute("aria-pressed") !== "true";
          accountNameHiddenFallback = hidden;
          try { localStorage.setItem(ACCOUNT_NAME_HIDDEN_STORAGE_KEY, String(hidden)); }
          catch { /* Keep the current page state even when storage is unavailable. */ }
          updateAccountName();
          playUiSound("toggle");
        });
      }

      const hidden = accountNameIsHidden();
      nameElement?.classList.toggle("demoscope-account-name-hidden", hidden);
      const actionLabel = settingText(hidden ? "nicknameShow" : "nicknameHide");
      toggle.setAttribute("aria-label", actionLabel);
      toggle.title = actionLabel;
      toggle.setAttribute("aria-pressed", String(hidden));
    };

    updateAccountName();
    if (document.body && document.body.dataset.demoscopeAccountNameObserver !== "1") {
      document.body.dataset.demoscopeAccountNameObserver = "1";
      const observer = new MutationObserver(updateAccountName);
      observer.observe(document.body, { childList: true, subtree: true });
    }
  }

  function installWelcomePage() {
    const intro = document.querySelector(".intro-text-container");
    const firstParagraph = intro?.querySelector(".intro-text-p");
    const continueLink = document.querySelector(".intro-page-button a.SecondaryButton");
    if (!(intro instanceof HTMLElement) || !(firstParagraph instanceof HTMLElement) || !(continueLink instanceof HTMLAnchorElement)) return false;
    if (document.body.dataset.demoscopeWelcomeReady === "1") return true;

    const selectedLocale = getSavedLocale();
    if (selectedLocale && Object.values(SUPPORTED_LOCALES).includes(selectedLocale)) {
      const steamLanguage = Object.keys(SUPPORTED_LOCALES).find((key) => SUPPORTED_LOCALES[key] === selectedLocale);
      const currentUrl = new URL(location.href);
      if (steamLanguage && currentUrl.searchParams.get("l") !== steamLanguage) {
        currentUrl.searchParams.set("l", steamLanguage);
        location.replace(currentUrl.href);
        return true;
      }
    }

    document.body.dataset.demoscopeWelcomeReady = "1";
    document.body.classList.add("vacnet-enhanced", "vacnet-welcome-page");

    const style = document.createElement("style");
    style.id = "demoscope-welcome-page-style";
    style.textContent = `
      body.vacnet-welcome-page { height:auto !important; max-height:none !important; min-height:100vh !important; overflow-x:hidden !important; overflow-y:auto !important; background:radial-gradient(ellipse at 50% 0%,#182331 0,#090c12 48rem,#07090d 100%) !important; }
      body.vacnet-welcome-page .PageContents { display:flex !important; flex:1 0 auto !important; flex-direction:column !important; align-items:center !important; justify-content:center !important; width:100% !important; max-width:none !important; min-height:calc(100vh - 58px) !important; min-height:calc(100dvh - 58px) !important; box-sizing:border-box !important; padding:clamp(24px,6vh,64px) 16px !important; }
      body.vacnet-welcome-page .vaclive-logo { display:none !important; }
      body.vacnet-welcome-page .intro-text-container { position:relative; width:min(720px,100%) !important; max-width:none !important; margin:0 auto !important; padding:clamp(24px,5vw,42px) !important; box-sizing:border-box !important; border:1px solid rgba(226,235,246,.14) !important; border-radius:18px !important; background:linear-gradient(145deg,rgba(20,27,37,.97),rgba(10,14,21,.97)) !important; box-shadow:0 28px 80px rgba(0,0,0,.42),inset 0 1px rgba(255,255,255,.035) !important; color:#f4f7fb !important; }
      body.vacnet-welcome-page .demoscope-welcome-toolbar { display:flex; align-items:center; justify-content:space-between; gap:16px; margin-bottom:24px; }
      body.vacnet-welcome-page .demoscope-welcome-identity { display:flex; align-items:center; gap:11px; min-width:0; }
      body.vacnet-welcome-page .demoscope-welcome-logo { display:block; width:min(213px,52vw); height:auto; }
      body.vacnet-welcome-page .demoscope-welcome-brand { color:#f2a33a; font-size:.68rem; font-weight:800; letter-spacing:.12em; }
      body.vacnet-welcome-page .demoscope-welcome-language { position:relative; flex:0 0 auto; }
      body.vacnet-welcome-page .demoscope-welcome-language .vacnet-language-trigger { display:flex; align-items:center; gap:8px; min-height:38px; padding:0 10px; border:1px solid rgba(226,235,246,.16); border-radius:999px; background:#141b25; color:#e7edf5; font:600 .78rem system-ui,sans-serif; cursor:pointer; }
      body.vacnet-welcome-page .demoscope-welcome-language .vacnet-language-trigger:hover,body.vacnet-welcome-page .demoscope-welcome-language .vacnet-language-trigger[aria-expanded="true"] { border-color:rgba(242,163,58,.55); color:#ffb654; }
      body.vacnet-welcome-page .demoscope-welcome-language .vacnet-language-flag { display:block !important; flex:0 0 20px !important; width:20px !important; height:14px !important; border-radius:2px; overflow:hidden; }
      body.vacnet-welcome-page .demoscope-welcome-language .vacnet-language-chevron { width:12px; height:12px; }
      body.vacnet-welcome-page .demoscope-welcome-language .vacnet-language-options { position:fixed; z-index:2147483646; max-height:55vh; overflow:auto; padding:5px; border:1px solid rgba(226,235,246,.18); border-radius:12px; background:#10151e; box-shadow:0 18px 48px #0009; }
      body.vacnet-welcome-page .demoscope-welcome-language .vacnet-language-option { display:flex; align-items:center; gap:10px; width:100%; min-height:36px; padding:6px 9px; border:0; border-radius:7px; background:transparent; color:#d6deea; text-align:left; font:500 .82rem system-ui,sans-serif; cursor:pointer; }
      body.vacnet-welcome-page .demoscope-welcome-language .vacnet-language-option:hover,body.vacnet-welcome-page .demoscope-welcome-language .vacnet-language-option[aria-selected="true"] { background:#222d3b; color:#ffb654; }
      body.vacnet-welcome-page .demoscope-welcome-heading { margin:0 0 14px !important; color:#f6f8fb !important; font-size:clamp(1.5rem,4vw,2rem) !important; line-height:1.2 !important; }
      body.vacnet-welcome-page .intro-text-p { margin:0 0 17px !important; color:#bac5d3 !important; font-size:clamp(.92rem,1.5vw,1rem) !important; line-height:1.65 !important; }
      body.vacnet-welcome-page .intro-text-p:first-child { margin-bottom:21px !important; padding-bottom:17px; border-bottom:1px solid rgba(226,235,246,.1); color:#f4f7fb !important; font-size:1.02rem !important; }
      body.vacnet-welcome-page .intro-text-p:last-of-type { margin-bottom:0 !important; }
      body.vacnet-welcome-page .intro-text-p b { color:#f4f7fb !important; }
      body.vacnet-welcome-page .intro-page-button { display:flex !important; width:min(720px,100%) !important; margin:16px auto 0 !important; }
      body.vacnet-welcome-page .intro-page-button .SecondaryButton { display:flex !important; align-items:center !important; justify-content:center !important; width:100% !important; min-height:50px !important; padding:0 20px !important; box-sizing:border-box !important; border:1px solid rgba(242,163,58,.55) !important; border-radius:11px !important; background:linear-gradient(135deg,#ffb64d,#e8952e) !important; color:#171009 !important; font-weight:750 !important; text-decoration:none !important; box-shadow:0 8px 24px rgba(242,163,58,.16) !important; transition:filter .16s ease,transform .16s ease !important; }
      body.vacnet-welcome-page .intro-page-button .SecondaryButton:hover { filter:brightness(1.08) !important; transform:translateY(-1px); }
      body.vacnet-welcome-page .intro-page-button .SecondaryButton:focus-visible { outline:2px solid #56b8ff !important; outline-offset:3px !important; }
      body.vacnet-welcome-page .intro-page-button .SecondaryButton { position:relative !important; }
      body.vacnet-welcome-page .demoscope-welcome-key-hints { position:absolute; right:clamp(10px,2vw,18px); display:inline-flex; align-items:center; gap:4px; pointer-events:none; }
      body.vacnet-welcome-page .demoscope-welcome-key-hints kbd { min-width:34px; padding:3px 5px; border:1px solid rgba(23,16,9,.34); border-radius:5px; background:rgba(23,16,9,.12); color:#171009; font:650 .66rem/1.2 system-ui,sans-serif; text-align:center; box-shadow:0 1px 0 rgba(23,16,9,.2); }
      body.vacnet-welcome-page .demoscope-account-name-toggle { border-color:rgba(226,235,246,.18); background:#141b25; }
      @media(max-width:520px) { body.vacnet-welcome-page .PageContents { justify-content:flex-start !important; padding:22px 12px !important; } body.vacnet-welcome-page .intro-text-container { padding:22px 18px !important; border-radius:15px !important; } body.vacnet-welcome-page .demoscope-welcome-toolbar { align-items:flex-start; gap:10px; margin-bottom:20px; } body.vacnet-welcome-page .demoscope-welcome-identity { align-items:flex-start; flex-direction:column; gap:5px; } body.vacnet-welcome-page .demoscope-welcome-logo { width:min(180px,44vw); } body.vacnet-welcome-page .demoscope-welcome-language .vacnet-language-trigger { min-height:35px; padding:0 8px; } body.vacnet-welcome-page .intro-text-p { margin-bottom:14px !important; } }
      @media(prefers-reduced-motion:reduce) { body.vacnet-welcome-page .intro-page-button .SecondaryButton { transition:none !important; } }
    `;
    (document.head || document.documentElement).append(style);

    const greetingNode = firstParagraph.firstChild;
    if (greetingNode?.nodeType === Node.TEXT_NODE && greetingNode.textContent.trim()) {
      const heading = document.createElement("h1");
      heading.className = "demoscope-welcome-heading";
      heading.textContent = greetingNode.textContent.trim();
      intro.insertBefore(heading, firstParagraph);
      greetingNode.remove();
      while (firstParagraph.firstChild &&
        ((firstParagraph.firstChild instanceof HTMLBRElement) ||
          (firstParagraph.firstChild.nodeType === Node.TEXT_NODE && !firstParagraph.firstChild.textContent.trim()))) {
        firstParagraph.firstChild.remove();
      }
    }

    const toolbar = document.createElement("div");
    toolbar.className = "demoscope-welcome-toolbar";
    toolbar.innerHTML = '<div class="demoscope-welcome-identity"><img class="demoscope-welcome-logo" alt="VACNet Labeling Portal"><span class="demoscope-welcome-brand">DEMOSCOPE</span></div><div class="vacnet-language-picker demoscope-welcome-language" title="' + escapeHtml(tr("language")) + '">' + buildLanguageOptions() + '</div>';
    toolbar.querySelector(".demoscope-welcome-logo").src = VACNET_LOGO_DATA_URI;
    intro.prepend(toolbar);
    const activeSteamLanguage = new URL(location.href).searchParams.get("l");
    if (activeSteamLanguage) {
      for (const pageLink of [continueLink, document.querySelector(".PageHeader .invitebutton")]) {
        if (!(pageLink instanceof HTMLAnchorElement)) continue;
        const pageUrl = new URL(pageLink.href, location.origin);
        if (pageUrl.origin === location.origin) {
          pageUrl.searchParams.set("l", activeSteamLanguage);
          pageLink.href = pageUrl.href;
        }
      }
    }
    installLanguageSelector(intro, (locale) => {
      const nextUrl = new URL(location.href);
      if (locale === "auto") {
        try {
          localStorage.removeItem(LANGUAGE_STORAGE_KEY);
          localStorage.removeItem(EMPTY_QUEUE_LOCALE_KEY);
          localStorage.setItem(LANGUAGE_AUTO_STORAGE_KEY, "true");
        } catch { /* Query parameter still applies the browser language. */ }
        const browserLocale = getBrowserLocale() || "en";
        const browserSteamLanguage = Object.keys(SUPPORTED_LOCALES).find((key) => SUPPORTED_LOCALES[key] === browserLocale) || "english";
        nextUrl.searchParams.set("l", browserSteamLanguage);
      } else if (locale && Object.values(SUPPORTED_LOCALES).includes(locale)) {
        try {
          localStorage.removeItem(LANGUAGE_AUTO_STORAGE_KEY);
          localStorage.removeItem(EMPTY_QUEUE_LOCALE_KEY);
          localStorage.setItem(LANGUAGE_STORAGE_KEY, locale);
        } catch { /* Query parameter still applies the selection. */ }
        const steamLanguage = Object.keys(SUPPORTED_LOCALES).find((key) => SUPPORTED_LOCALES[key] === locale);
        if (steamLanguage) nextUrl.searchParams.set("l", steamLanguage);
      } else return;
      location.assign(nextUrl.href);
    });

    const keyHints = document.createElement("span");
    keyHints.className = "demoscope-welcome-key-hints";
    keyHints.setAttribute("aria-hidden", "true");
    keyHints.title = "Enter / Space";
    keyHints.innerHTML = "<kbd>Enter</kbd><kbd>Space</kbd>";
    continueLink.append(keyHints);
    continueLink.setAttribute("aria-keyshortcuts", "Enter Space");
    document.addEventListener("keydown", (event) => {
      if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey || event.isComposing) return;
      const isEnter = event.key === "Enter";
      const isSpace = event.key === " " || event.code === "Space";
      if (!isEnter && !isSpace) return;

      const target = event.target;
      if (!(target instanceof Element)) return;
      if (target.closest("input, textarea, select, [contenteditable='true'], .vacnet-language-picker")) return;
      if (target.closest("button, [role='button']")) return;
      if (target.closest("a") && target.closest("a") !== continueLink) return;
      if (isEnter && target.closest("a") === continueLink) return;

      event.preventDefault();
      continueLink.click();
    });

    intro.after(continueLink.parentElement);
    return true;
  }

  function installInvitePage() {
    const intro = document.querySelector(".intro-text-p");
    const link = document.querySelector(".invite-link-p");
    const copyButton = document.getElementById("copyinvitebutton");
    if (!(intro instanceof HTMLElement) || !(link instanceof HTMLElement) || !(copyButton instanceof HTMLButtonElement)) return false;
    if (document.body.dataset.demoscopeInviteReady === "1") return true;
    document.body.dataset.demoscopeInviteReady = "1";
    document.body.classList.add("vacnet-enhanced", "vacnet-invite-page");
    hideSiteFooter();

    const style = document.createElement("style");
    style.textContent = `
      body.vacnet-invite-page { min-height:100vh; background:radial-gradient(ellipse at 50% 0%,#182331 0,#090c12 48rem,#07090d 100%) !important; color:#f4f7fb !important; font-family:system-ui,-apple-system,"Segoe UI",sans-serif !important; }
      body.vacnet-invite-page footer.footer-container { display:none !important; }
      body.vacnet-invite-page .invitebutton { text-decoration:none !important; }
      body.vacnet-invite-page .PageContents { display:flex !important; flex-direction:column !important; align-items:center !important; width:100% !important; max-width:none !important; min-height:calc(100vh - 58px) !important; box-sizing:border-box !important; }
      body.vacnet-invite-page .demoscope-custom-footer[hidden] { display:none !important; }
      body.vacnet-invite-page .demoscope-custom-footer { display:flex !important; flex-direction:column !important; align-items:center !important; gap:9px !important; width:100% !important; margin-top:auto !important; padding:15px 20px 12px !important; box-sizing:border-box !important; background:rgba(20,27,37,.94) !important; color:#8290a2 !important; text-align:center !important; }
      body.vacnet-invite-page .demoscope-custom-footer p.demoscope-footer-copyright { max-width:1100px !important; margin:0 !important; color:#8290a2 !important; font:400 .68rem/1.45 var(--ss-font,system-ui,-apple-system,"Segoe UI",sans-serif) !important; font-weight:400 !important; }
      body.vacnet-invite-page .vaclive-logo { display:none !important; }
      body.vacnet-invite-page .intro-text-container { width:min(680px,calc(100% - 32px)) !important; max-width:none !important; margin:clamp(28px,7vh,76px) auto 36px !important; padding:0 !important; border:0 !important; background:transparent !important; box-shadow:none !important; }
      .demoscope-invite-card { width:100%; margin:0 auto; padding:clamp(22px,4vw,38px); box-sizing:border-box; border:1px solid rgba(226,235,246,.14); border-radius:18px; background:linear-gradient(145deg,rgba(20,27,37,.97),rgba(10,14,21,.97)); box-shadow:0 28px 80px rgba(0,0,0,.42),inset 0 1px rgba(255,255,255,.035); }
      .demoscope-invite-card h1 { margin:0 0 8px; color:#f6f8fb; font-size:clamp(1.35rem,3vw,1.8rem); line-height:1.2; }
      .demoscope-invite-card .demoscope-invite-intro { margin:0 0 24px; color:#a7b2c1; line-height:1.6; }
      .demoscope-invite-linkrow { display:flex; align-items:center; gap:10px; min-width:0; padding:10px 10px 10px 15px; border:1px solid rgba(226,235,246,.14); border-radius:12px; background:#090c12; }
      .demoscope-invite-link { flex:1; min-width:0; margin:0; overflow:hidden; color:#e8edf5; font:500 .9rem/1.5 ui-monospace,SFMono-Regular,Consolas,monospace; overflow-wrap:anywhere; user-select:all; }
      .demoscope-invite-note { margin:9px 2px 0; color:#8290a2; font-size:.78rem; line-height:1.45; }
      .demoscope-invite-eye { flex:0 0 40px; width:40px; height:40px; display:grid; place-items:center; border:1px solid rgba(226,235,246,.14); border-radius:9px; background:#141b25; color:#c5cfdb; cursor:pointer; }
      .demoscope-invite-eye:hover { color:#ffb654; border-color:rgba(242,163,58,.55); }
      .demoscope-invite-tools { display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:12px; margin:14px 0 26px; }
      .demoscope-invite-pref { display:flex; align-items:center; gap:9px; color:#a7b2c1; font-size:.85rem; cursor:pointer; }
      .demoscope-invite-pref input { width:16px; height:16px; accent-color:#f2a33a; }
      .demoscope-invite-copy,#copyinvitebutton { min-height:42px; padding:0 16px; border:1px solid rgba(242,163,58,.5); border-radius:10px; background:linear-gradient(135deg,#f2a33a,#d88721); color:#171009; font:700 .9rem system-ui,sans-serif; cursor:pointer; }
      .demoscope-invite-copy:hover,#copyinvitebutton:hover { filter:brightness(1.08); }
      .demoscope-invite-rules { padding:18px; border:1px solid rgba(226,235,246,.1); border-radius:13px; background:rgba(7,10,15,.55); }
      .demoscope-invite-rules h2 { margin:0 0 14px; color:#f2a33a; font-size:.82rem; letter-spacing:.1em; text-transform:uppercase; }
      .demoscope-invite-rules ul { display:grid; gap:12px; margin:0; padding:0; list-style:none; }
      .demoscope-invite-rules li { display:flex; gap:12px; align-items:flex-start; color:#c5cfdb; line-height:1.5; font-size:.92rem; }
      .demoscope-invite-rules li::before { content:""; flex:0 0 7px; width:7px; height:7px; margin-top:.5em; border-radius:50%; background:#f2a33a; box-shadow:0 0 12px rgba(242,163,58,.5); }
      .demoscope-invite-bottom { display:flex; justify-content:space-between; align-items:center; gap:14px; margin-top:20px; }
      .demoscope-invite-bottom .vacnet-language-picker { position:relative; }
      .demoscope-invite-bottom .vacnet-language-trigger { display:flex; align-items:center; gap:8px; min-height:40px; padding:0 11px; border:1px solid rgba(226,235,246,.15); border-radius:999px; background:#141b25; color:#e7edf5; cursor:pointer; }
      .demoscope-invite-bottom .vacnet-language-flag { display:block !important; flex:0 0 20px !important; width:20px !important; height:14px !important; border-radius:2px; overflow:hidden; }
      .demoscope-invite-bottom .vacnet-language-options { position:fixed; z-index:2147483646; max-height:55vh; overflow:auto; padding:5px; border:1px solid rgba(226,235,246,.18); border-radius:12px; background:#10151e; box-shadow:0 18px 48px #0009; }
      .demoscope-invite-bottom .vacnet-language-option { display:flex; align-items:center; gap:10px; width:100%; min-height:36px; padding:6px 9px; border:0; border-radius:7px; background:transparent; color:#d6deea; text-align:left; cursor:pointer; }
      .demoscope-invite-bottom .vacnet-language-option:hover,.demoscope-invite-bottom .vacnet-language-option[aria-selected="true"] { background:#222d3b; color:#ffb654; }
      .demoscope-invite-bottom .SecondaryButton { display:inline-flex; align-items:center; justify-content:center; min-height:42px; padding:0 20px; border:1px solid rgba(226,235,246,.15); border-radius:10px; background:#18212d; color:#e7edf5 !important; text-decoration:none !important; font-weight:650; }
      .demoscope-invite-bottom .SecondaryButton:hover { border-color:rgba(242,163,58,.5); }
      @media(max-width:520px) { body.vacnet-invite-page .intro-text-container { width:calc(100% - 24px) !important; margin:20px auto !important; } .demoscope-invite-card { padding:20px 16px; } .demoscope-invite-tools { align-items:stretch; flex-direction:column; } .demoscope-invite-copy { width:100%; } .demoscope-invite-rules { padding:15px 13px; } }
      @media(prefers-reduced-motion:no-preference) { .demoscope-invite-card { animation:demoscope-invite-in .35s ease-out both; } @keyframes demoscope-invite-in { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:translateY(0); } } }
    `;
    document.head.append(style);

    const savedLink = link.textContent.trim();
    const card = document.createElement("main");
    card.className = "demoscope-invite-card";
    card.innerHTML = `<h1></h1><p class="demoscope-invite-intro"></p><div class="demoscope-invite-linkrow"><p class="demoscope-invite-link"></p><button class="demoscope-invite-eye" type="button"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M2.5 12s3.3-6 9.5-6 9.5 6 9.5 6-3.3 6-9.5 6-9.5-6-9.5-6Z"/><circle cx="12" cy="12" r="2.7"/></svg></button></div><div class="demoscope-invite-tools"><label class="demoscope-invite-pref"><input type="checkbox"><span></span></label><button class="demoscope-invite-copy" type="button"></button></div><section class="demoscope-invite-rules"><h2></h2><ul><li data-rule="one"></li><li data-rule="two"></li><li data-rule="three"></li></ul></section><div class="demoscope-invite-bottom"><div class="vacnet-language-picker" title="${tr("language")}">${buildLanguageOptions()}</div></div>`;
    const oldParent = intro.parentElement;
    intro.before(card);
    const privacyNote = document.createElement("p");
    privacyNote.className = "demoscope-invite-note";
    card.querySelector(".demoscope-invite-linkrow").after(privacyNote);
    card.querySelector(".demoscope-invite-link").replaceWith(link);
    card.querySelector(".demoscope-invite-copy").replaceWith(copyButton);
    const bottom = card.querySelector(".demoscope-invite-bottom");
    const doneLink = document.querySelector(".intro-page-button a.SecondaryButton");
    if (doneLink) {
      const doneParent = doneLink.parentElement;
      bottom.append(doneLink);
      if (doneParent?.classList.contains("intro-page-button")) doneParent.remove();
    }
    oldParent?.classList.add("demoscope-invite-original");
    intro.remove();
    if (oldParent && !oldParent.querySelector("*")) oldParent.remove();
    link.className = "demoscope-invite-link";
    copyButton.className = "demoscope-invite-copy";
    copyButton.type = "button";

    const checkbox = card.querySelector(".demoscope-invite-pref input");
    const eyeButton = card.querySelector(".demoscope-invite-eye");
    const displayedLink = link;
    const preferenceKey = "demoscopeInviteHideByDefault";
    let hideByDefault = true;
    try { hideByDefault = localStorage.getItem(preferenceKey) !== "false"; } catch { /* Use the privacy-first default. */ }
    let revealed = !hideByDefault;
    const updateVisibility = () => {
      displayedLink.textContent = revealed ? savedLink : "••••••••••••••••••••••••••••••••••••";
      eyeButton.setAttribute("aria-label", inviteText(revealed ? "inviteHide" : "inviteShow"));
      eyeButton.title = inviteText(revealed ? "inviteHide" : "inviteShow");
      checkbox.checked = hideByDefault;
    };
    const renderText = () => {
      card.querySelector("h1").textContent = inviteText("inviteHeading");
      card.querySelector(".demoscope-invite-intro").textContent = inviteText("inviteIntro");
      privacyNote.textContent = inviteText("invitePrivacyNote");
      card.querySelector(".demoscope-invite-rules h2").textContent = inviteText("inviteRulesTitle");
      card.querySelector('[data-rule="one"]').textContent = inviteText("inviteRuleOne");
      card.querySelector('[data-rule="two"]').textContent = inviteText("inviteRuleTwo");
      card.querySelector('[data-rule="three"]').textContent = inviteText("inviteRuleThree");
      card.querySelector(".demoscope-invite-pref span").textContent = inviteText("inviteHidePref");
      copyButton.textContent = inviteText("inviteCopy");
      if (doneLink) refreshInviteKeyLabels();
      const inviteNav = document.querySelector(".PageHeader .invitebutton");
      if (inviteNav) inviteNav.textContent = inviteText("inviteNav");
      updateVisibility();
    };
    eyeButton.addEventListener("click", () => {
      playUiSound("toggle");
      revealed = !revealed;
      updateVisibility();
    });
    checkbox.addEventListener("change", () => {
      playUiSound("toggle");
      hideByDefault = checkbox.checked;
      try { localStorage.setItem(preferenceKey, String(hideByDefault)); } catch { /* Keep the current page usable without storage. */ }
      revealed = !hideByDefault;
      updateVisibility();
    });
    copyButton.addEventListener("click", async (event) => {
      event.preventDefault();
      event.stopImmediatePropagation();
      try {
        if (navigator.clipboard?.writeText) await navigator.clipboard.writeText(savedLink);
        else {
          const textarea = document.createElement("textarea");
          textarea.value = savedLink;
          textarea.style.position = "fixed";
          textarea.style.opacity = "0";
          document.body.append(textarea);
          textarea.select();
          document.execCommand("copy");
          textarea.remove();
        }
        copyButton.textContent = inviteText("inviteCopied");
        playUiSound("copy");
        window.setTimeout(() => { if (copyButton.isConnected) copyButton.textContent = inviteText("inviteCopy"); }, 1700);
      } catch (error) {
        console.warn(LOG_PREFIX, "Could not copy invite link", error);
      }
    }, true);
    renderText();
    installInviteExtras(card, doneLink);
    installLanguageSelector(card);
    installDemoScopeFooter(false, getActiveLocale(), false);
    installSettingsUi();
    return true;
  }

  // "x" in the corner and Enter / Esc: both do what the "Done" link does.
  function installInviteExtras(card, doneLink) {
    if (card.querySelector(".demoscope-invite-close")) return;
    if (!document.getElementById("demoscope-invite-extra-style")) {
      const style = document.createElement("style");
      style.id = "demoscope-invite-extra-style";
      style.textContent = `
        .demoscope-invite-card { position: relative; }
        .demoscope-invite-card h1 { padding-right: 46px; }
        .demoscope-invite-close { position: absolute; top: 14px; right: 14px; display: grid; place-items: center; width: 36px; height: 36px; padding: 0; border: 1px solid rgba(226,235,246,.15); border-radius: 10px; background: #141b25; color: #d7e0ec; cursor: pointer; transition: border-color 140ms ease, color 140ms ease; }
        .demoscope-invite-close:hover { border-color: rgba(242,163,58,.6); color: #ffb654; }
        .demoscope-invite-close:focus-visible { outline: 2px solid #ffb654; outline-offset: 3px; }
        .demoscope-invite-close svg { width: 16px; height: 16px; }
        .demoscope-invite-kbd { display: inline-block; margin-left: 0.5em; padding: 0.05em 0.35em; border: 1px solid rgba(226,235,246,.22); border-radius: 4px; background: rgba(0,0,0,.28); font: 600 0.72em/1.3 ui-monospace, SFMono-Regular, Menlo, monospace; text-decoration: none; }
      `;
      document.head.append(style);
    }
    const close = document.createElement("button");
    close.type = "button";
    close.className = "demoscope-invite-close";
    close.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>';
    close.addEventListener("click", () => {
      playUiSound("click");
      if (doneLink instanceof HTMLElement) doneLink.click();
      else window.history.back();
    });
    card.prepend(close);

    window.addEventListener("keydown", (event) => {
      if (keyCaptureActive || isModalOpen() || event.repeat) return;
      if (event.ctrlKey || event.altKey || event.metaKey) return;
      const action = getActionForEvent(event, "invite");
      if (action !== "inviteDone" && action !== "inviteClose") return;
      const target = event.target instanceof Element ? event.target : null;
      // Let focused buttons, links, fields and the language list keep their own keys.
      if (target && (isShortcutBlocked(target) || target.closest("button, a, summary, [role='option'], [role='listbox']"))) return;
      const languageList = document.getElementById("vacnet-language-options");
      if (languageList && !languageList.hidden) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      if (action === "inviteClose") { close.click(); return; }
      playUiSound("click");
      if (doneLink instanceof HTMLElement) doneLink.click();
      else window.history.back();
    }, true);
    refreshInviteKeyLabels();
  }

  function refreshInviteKeyLabels() {
    const done = document.querySelector(".demoscope-invite-bottom .SecondaryButton");
    if (done) {
      done.textContent = inviteText("inviteDone");
      const code = getBinding("inviteDone");
      if (code) {
        const kbd = document.createElement("kbd");
        kbd.className = "demoscope-invite-kbd";
        kbd.textContent = formatKeyLabel(code);
        done.append(kbd);
      }
    }
    const close = document.querySelector(".demoscope-invite-close");
    if (close) {
      const name = settingText("hkClose");
      const code = getBinding("inviteClose");
      close.setAttribute("aria-label", name);
      close.title = code ? `${name} (${formatKeyLabel(code)})` : name;
    }
  }

  function tr(key) {
    const row = UI_TEXT_ROWS[key];
    if (!row) return key;
    const index = LOCALE_INDEX.indexOf(getActiveLocale());
    return row[index] || row[LOCALE_INDEX.indexOf("en")] || key;
  }

  function getPresetLabel(name) {
    const base = {
      uncertain: tr("uncertain"), legit: tr("clean"), wallsq: tr("walls"),
      wh: tr("wallhack"), rage: tr("rage"), bot: tr("bot"), mixed: tr("mixed"),
      aim: tr("aimOnly"), bhop: tr("bhopOnly"),
      aimq: `${tr("aim")}?`, bhopq: `${tr("bhop")}?`, botq: `${tr("bot")}?`,
    };
    if (base[name]) return base[name];
    const parts = {
      aimwh: [tr("aim"), tr("wallhack")], aimbhop: [tr("aim"), tr("bhop")],
      whbhop: [tr("wallhack"), tr("bhop")], botaim: [tr("bot"), tr("aim")],
      botwh: [tr("bot"), tr("wallhack")], botbhop: [tr("bot"), tr("bhop")],
      botaimwh: [tr("bot"), tr("aim"), tr("wallhack")],
      botaimbhop: [tr("bot"), tr("aim"), tr("bhop")],
      botwhbhop: [tr("bot"), tr("wallhack"), tr("bhop")],
      botrage: [tr("bot"), tr("rage")],
    };
    return parts[name]?.join(" + ") || name;
  }

  function buildLanguageOptions({ activeLocale = getActiveLocale(), selectedLocale = null } = {}) {
    const names = {
      bg: "Български", "zh-CN": "简体中文", "zh-TW": "繁體中文", cs: "Čeština",
      da: "Dansk", nl: "Nederlands", en: "English", fi: "Suomi", fr: "Français",
      de: "Deutsch", el: "Ελληνικά", hu: "Magyar", id: "Bahasa Indonesia",
      it: "Italiano", ja: "日本語", ko: "한국어", no: "Norsk", pl: "Polski",
      "pt-PT": "Português", "pt-BR": "Português (Brasil)", ro: "Română",
      ru: "Русский", "es-ES": "Español", "es-419": "Español (Latinoamérica)",
      sv: "Svenska", th: "ไทย", tr: "Türkçe", uk: "Українська", vi: "Tiếng Việt",
    };
    const savedLocale = getSavedLocale();
    const hasManualLocale = Object.values(SUPPORTED_LOCALES).includes(savedLocale);
    const selected = selectedLocale ?? (hasManualLocale ? savedLocale : "auto");
    const choices = [
      `<button class="vacnet-language-option" type="button" role="option" data-locale="auto" aria-selected="${selected === "auto"}">${getFlagSvg("auto")}<span>${tr("automatic")}</span></button>`,
      ...Object.values(SUPPORTED_LOCALES).map((locale) =>
        `<button class="vacnet-language-option" type="button" role="option" data-locale="${locale}" aria-selected="${locale === selected}">${getFlagSvg(locale)}<span>${names[locale]}</span></button>`,
      ),
    ].join("");
    return `
      <button id="vacnet-language-select" class="vacnet-language-trigger" type="button" aria-haspopup="listbox" aria-expanded="false" aria-controls="vacnet-language-options" aria-label="${tr("languageAria")}">
        ${getFlagSvg(activeLocale)}<span class="vacnet-language-current-label">${names[activeLocale] || names.en}</span>
        <svg class="vacnet-language-chevron" viewBox="0 0 12 12" aria-hidden="true"><path d="m2 4 4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>
      </button>
      <div id="vacnet-language-options" class="vacnet-language-options" popover="manual" role="listbox" aria-label="${tr("languageAria")}" hidden>${choices}</div>
    `;
  }

  function installLanguageSelector(root, onLocaleSelect = null) {
    const picker = root.querySelector(".vacnet-language-picker");
    const trigger = picker?.querySelector("#vacnet-language-select");
    const options = picker?.querySelector(".vacnet-language-options");
    if (!(trigger instanceof HTMLButtonElement) || !(options instanceof HTMLElement) || trigger.dataset.bound) return;
    trigger.dataset.bound = "1";
    const closePicker = () => {
      try { options.hidePopover?.(); } catch { /* Ignore when the popover API is unavailable or already closed. */ }
      options.hidden = true;
      trigger.setAttribute("aria-expanded", "false");
    };
    const setPickerLocale = (locale) => {
      const names = { bg: "Български", "zh-CN": "简体中文", "zh-TW": "繁體中文", cs: "Čeština", da: "Dansk", nl: "Nederlands", en: "English", fi: "Suomi", fr: "Français", de: "Deutsch", el: "Ελληνικά", hu: "Magyar", id: "Bahasa Indonesia", it: "Italiano", ja: "日本語", ko: "한국어", no: "Norsk", pl: "Polski", "pt-PT": "Português", "pt-BR": "Português (Brasil)", ro: "Română", ru: "Русский", "es-ES": "Español", "es-419": "Español (Latinoamérica)", sv: "Svenska", th: "ไทย", tr: "Türkçe", uk: "Українська", vi: "Tiếng Việt" };
      const current = locale === "auto" ? (getBrowserLocale() || "en") : locale;
      const flag = trigger.querySelector(".vacnet-language-flag");
      if (flag) flag.outerHTML = getFlagSvg(current);
      const label = trigger.querySelector(".vacnet-language-current-label");
      if (label) label.textContent = names[current] || names.en;
      for (const option of options.querySelectorAll("button[data-locale]")) option.setAttribute("aria-selected", String(option.dataset.locale === locale));
    };
    const positionPicker = () => {
      const rect = trigger.getBoundingClientRect();
      const viewportWidth = document.documentElement.clientWidth || window.innerWidth;
      const viewportHeight = document.documentElement.clientHeight || window.innerHeight;
      const width = Math.min(248, viewportWidth - 16);
      const heightLimit = Math.min(420, Math.floor(viewportHeight * 0.55));
      options.style.inset = "auto";
      options.style.margin = "0";
      options.style.maxHeight = `${heightLimit}px`;
      options.style.overflowY = "auto";
      const estimatedHeight = options.querySelectorAll("button[data-locale]").length * 36 + 10;
      const menuHeight = Math.min(heightLimit, Math.max(options.scrollHeight, estimatedHeight));
      const roomBelow = Math.max(0, viewportHeight - rect.bottom - 12);
      const roomAbove = Math.max(0, rect.top - 12);
      const openAbove = roomBelow < menuHeight && roomAbove > roomBelow;
      const availableRoom = openAbove ? roomAbove : roomBelow;
      const visibleHeight = Math.max(1, Math.min(menuHeight, availableRoom || heightLimit));
      let top = openAbove ? rect.top - visibleHeight - 6 : rect.bottom + 6;
      top = Math.max(8, Math.min(top, viewportHeight - visibleHeight - 8));
      let left = rect.left;
      if (left + width > viewportWidth - 8) left = rect.right - width;
      left = Math.max(8, Math.min(left, viewportWidth - width - 8));
      options.style.left = `${left}px`;
      options.style.top = `${top}px`;
      options.style.right = "auto";
      options.style.bottom = "auto";
      options.style.width = `${width}px`;
      options.style.maxHeight = `${visibleHeight}px`;
    };
    const openPicker = () => {
      options.hidden = false;
      if (typeof options.showPopover === "function") options.showPopover();
      trigger.setAttribute("aria-expanded", "true");
      positionPicker();
      options.querySelector('[aria-selected="true"]')?.focus();
    };
    trigger.addEventListener("click", () => {
      if (options.hidden) openPicker();
      else closePicker();
    });
    trigger.addEventListener("keydown", (event) => {
      if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        event.preventDefault();
        openPicker();
      }
    });
    window.addEventListener("resize", () => {
      if (!options.hidden) positionPicker();
    });
    window.addEventListener("scroll", () => {
      if (!options.hidden) positionPicker();
    }, true);
    options.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closePicker();
        trigger.focus();
        return;
      }
      const optionButtons = [...options.querySelectorAll("button[data-locale]")];
      const focusedIndex = optionButtons.indexOf(document.activeElement);
      let targetIndex = focusedIndex;
      if (event.key === "ArrowDown") targetIndex = (focusedIndex + 1 + optionButtons.length) % optionButtons.length;
      else if (event.key === "ArrowUp") targetIndex = (focusedIndex - 1 + optionButtons.length) % optionButtons.length;
      else if (event.key === "Home") targetIndex = 0;
      else if (event.key === "End") targetIndex = optionButtons.length - 1;
      else return;
      event.preventDefault();
      optionButtons[targetIndex]?.focus();
    });
    options.addEventListener("click", (event) => {
      const option = event.target instanceof Element
        ? event.target.closest("button[data-locale]")
        : null;
      if (!(option instanceof HTMLButtonElement)) return;
      const locale = option.dataset.locale;
      if (typeof onLocaleSelect === "function") {
        onLocaleSelect(locale, { close: closePicker, setSelection: setPickerLocale });
        return;
      }
      try {
        if (locale === "auto") {
          localStorage.removeItem(LANGUAGE_STORAGE_KEY);
          localStorage.removeItem(EMPTY_QUEUE_LOCALE_KEY);
          localStorage.setItem(LANGUAGE_AUTO_STORAGE_KEY, "true");
          const browserLocale = getBrowserLocale() || "en";
          const browserSteamLanguage = Object.keys(SUPPORTED_LOCALES).find((key) => SUPPORTED_LOCALES[key] === browserLocale) || "english";
          const nextUrl = new URL(location.href);
          nextUrl.searchParams.set("l", browserSteamLanguage);
          location.assign(nextUrl.href);
          return;
        }
        else if (locale && Object.values(SUPPORTED_LOCALES).includes(locale)) {
          localStorage.removeItem(LANGUAGE_AUTO_STORAGE_KEY);
          localStorage.removeItem(EMPTY_QUEUE_LOCALE_KEY);
          localStorage.setItem(LANGUAGE_STORAGE_KEY, locale);
          try { sessionStorage.removeItem("demoscopeLangSyncTried"); } catch { /* ignore */ }
          const steamLanguage = Object.keys(SUPPORTED_LOCALES).find((key) => SUPPORTED_LOCALES[key] === locale);
          if (steamLanguage) {
            // Tell Valve too, otherwise its verdict text stays in the browser language.
            const nextUrl = new URL(location.href);
            nextUrl.searchParams.set("l", steamLanguage);
            location.assign(nextUrl.href);
            return;
          }
        }
      } catch { /* Ignore unavailable storage. */ }
      location.reload();
    });
    if (!root.dataset.vacnetLanguageOutsideBound) {
      root.dataset.vacnetLanguageOutsideBound = "1";
      document.addEventListener("pointerdown", (event) => {
        const activePicker = root.querySelector(".vacnet-language-picker");
        if (!(event.target instanceof Node) || activePicker?.contains(event.target)) return;
        const activeOptions = activePicker?.querySelector(".vacnet-language-options");
        const activeTrigger = activePicker?.querySelector("#vacnet-language-select");
        if (activeOptions) {
          try { activeOptions.hidePopover?.(); } catch { /* Ignore when the popover API is unavailable or already closed. */ }
          activeOptions.hidden = true;
        }
        activeTrigger?.setAttribute("aria-expanded", "false");
      });
    }
  }

  (function blockSegmentLoopGuard() {
    const guardKey = "__demoscopeIntervalGuard";
    if (PAGE[guardKey]) return;

    const nativeSetInterval = PAGE.setInterval.bind(PAGE);
    const guardedSetInterval = (handler, delay, ...args) => {
      if (delay === 100 && typeof handler === "function") {
        const source = Function.prototype.toString.call(handler);
        const isNativeSegmentLoop =
          source.includes("curTime") &&
          source.includes("startTime") &&
          source.includes("endTime");

        if (isNativeSegmentLoop) {
          return nativeSetInterval(() => {}, delay);
        }
      }

      return nativeSetInterval(handler, delay, ...args);
    };

    try {
      Object.defineProperty(PAGE, guardKey, {
        value: true,
        configurable: false,
        enumerable: false,
      });
      PAGE.setInterval = guardedSetInterval;
    } catch (error) {
      console.warn(LOG_PREFIX, "Unable to install the segment guard", error);
    }
  })();

  const FRAME_STEP = 1 / 64;
  const ARROW_JUMP_SEC = 5;
  const BASE_PLAYBACK_SPEED = 1;
  const SHIFT_SPEEDS = [0.5, 0.75, 1, 1.25, 1.5, 2, 3, 4];
  const DEFAULT_SHIFT_SPEED = 2;
  const SHIFT_SPEED_STORAGE_KEY = "demoscopeShiftSpeed";
  const VERDICT_RANDOMIZER_STORAGE_KEY = "demoscopeVerdictRandomizer";
  const ADVANCED_PRESETS_OPEN_STORAGE_KEY = "demoscopeAdvancedPresetsOpen";
  const CLIP_HISTORY_STORAGE_KEY = "demoscopeClipHistory";
  const SUBMIT_PENDING_KEY = "demoscopeSubmitPending";
  const SUBMIT_PREV_VOD_KEY = "demoscopeSubmitPrevVod";
  const HISTORY_PER_KEY_DEFAULT = 30;
  const HISTORY_TOTAL_DEFAULT = 300;
  const HISTORY_PER_KEY_OPTIONS = [10, 20, 30, 50];
  const HISTORY_TOTAL_OPTIONS = [100, 200, 300, 500];
  const HISTORY_PER_KEY_STORAGE_KEY = "demoscopeHistoryPerKeyLimit";
  const HISTORY_TOTAL_STORAGE_KEY = "demoscopeHistoryTotalLimit";
  const ACCOUNT_NAME_HIDDEN_STORAGE_KEY = "demoscopeHideAccountName";
  const GAME_HISTORY_KEY_PREFIX = "game::";

  function readHistoryLimit(storageKey, allowedValues, defaultValue) {
    try {
      const value = Number(localStorage.getItem(storageKey));
      return allowedValues.includes(value) ? value : defaultValue;
    } catch {
      return defaultValue;
    }
  }

  function isLocalHistoryEnabled() {
    try { return localStorage.getItem(LOCAL_HISTORY_ENABLED_KEY) !== "false"; }
    catch { return true; }
  }

  function readTimeFormat() {
    try {
      const value = localStorage.getItem(TIME_FORMAT_KEY);
      return ["12", "24"].includes(value) ? value : "auto";
    } catch { return "auto"; }
  }

  function formatQueueFirstSeen(timestamp, locale = getActiveLocale()) {
    const options = { dateStyle: "medium", timeStyle: "short" };
    const format = readTimeFormat();
    if (format === "12") options.hour12 = true;
    else if (format === "24") options.hour12 = false;
    try { return new Intl.DateTimeFormat(locale, options).format(new Date(timestamp)); }
    catch { return new Intl.DateTimeFormat(undefined, options).format(new Date(timestamp)); }
  }

  function getQueueNoticeLocale() {
    return getActiveLocale();
  }

  function migrateEmptyQueueLanguage() {
    try {
      const saved = localStorage.getItem(EMPTY_QUEUE_LOCALE_KEY);
      if (!LOCALE_INDEX.includes(saved)) return false;
      localStorage.setItem(LANGUAGE_STORAGE_KEY, saved);
      localStorage.removeItem(LANGUAGE_AUTO_STORAGE_KEY);
      localStorage.removeItem(EMPTY_QUEUE_LOCALE_KEY);
      const steamLanguage = Object.keys(SUPPORTED_LOCALES).find((key) => SUPPORTED_LOCALES[key] === saved);
      if (!steamLanguage) return false;
      const url = new URL(location.href);
      if (url.searchParams.get("l") === steamLanguage) return false;
      url.searchParams.set("l", steamLanguage);
      location.replace(url.href);
      return true;
    } catch { return false; }
  }

  function queueNoticeText(key, locale = getQueueNoticeLocale()) {
    const row = UI_TEXT_ROWS[key];
    const index = LOCALE_INDEX.indexOf(locale);
    return row?.[index] || tr(key);
  }

  function updateEmptyQueueTimestamp() {
    const timestampEl = document.querySelector("[data-queue-first-seen]");
    if (!(timestampEl instanceof HTMLElement)) return;
    let timestamp = 0;
    try { timestamp = Number(localStorage.getItem(EMPTY_QUEUE_FIRST_SEEN_KEY)) || 0; } catch { /* Use current view only. */ }
    timestampEl.textContent = timestamp
      ? `${queueNoticeText("queueFirstSeen")}: ${formatQueueFirstSeen(timestamp)}`
      : "";
  }
  function getHistoryPerKeyLimit() {
    return readHistoryLimit(HISTORY_PER_KEY_STORAGE_KEY, HISTORY_PER_KEY_OPTIONS, HISTORY_PER_KEY_DEFAULT);
  }

  function getHistoryTotalLimit() {
    return readHistoryLimit(HISTORY_TOTAL_STORAGE_KEY, HISTORY_TOTAL_OPTIONS, HISTORY_TOTAL_DEFAULT);
  }

  function readAdvancedPresetsOpen() {
    try { return localStorage.getItem(ADVANCED_PRESETS_OPEN_STORAGE_KEY) === "true"; }
    catch { return false; }
  }

  const PRESETS = {
    uncertain: {
      aimassist: "skip",
      wallhack: "skip",
      autobhop: "skip",
      bot: "skip",
    },
    legit: {
      aimassist: "negative",
      wallhack: "negative",
      autobhop: "negative",
      bot: "negative",
    },
    wallsq: {
      aimassist: "negative",
      wallhack: "skip",
      autobhop: "negative",
      bot: "negative",
    },
    wh: {
      aimassist: "negative",
      wallhack: "positive",
      autobhop: "negative",
      bot: "negative",
    },
    rage: {
      aimassist: "positive",
      wallhack: "positive",
      autobhop: "positive",
      bot: "negative",
    },
    bot: {
      aimassist: "negative",
      wallhack: "negative",
      autobhop: "negative",
      bot: "positive",
    },
    aimq: {
      aimassist: "skip",
      wallhack: "negative",
      autobhop: "negative",
      bot: "negative",
    },
    bhopq: {
      aimassist: "negative",
      wallhack: "negative",
      autobhop: "skip",
      bot: "negative",
    },
    botq: {
      aimassist: "negative",
      wallhack: "negative",
      autobhop: "negative",
      bot: "skip",
    },
    aim: {
      aimassist: "positive",
      wallhack: "negative",
      autobhop: "negative",
      bot: "negative",
    },
    bhop: {
      aimassist: "negative",
      wallhack: "negative",
      autobhop: "positive",
      bot: "negative",
    },
    aimwh: {
      aimassist: "positive",
      wallhack: "positive",
      autobhop: "negative",
      bot: "negative",
    },
    aimbhop: {
      aimassist: "positive",
      wallhack: "negative",
      autobhop: "positive",
      bot: "negative",
    },
    whbhop: {
      aimassist: "negative",
      wallhack: "positive",
      autobhop: "positive",
      bot: "negative",
    },
    botaim: {
      aimassist: "positive",
      wallhack: "negative",
      autobhop: "negative",
      bot: "positive",
    },
    botwh: {
      aimassist: "negative",
      wallhack: "positive",
      autobhop: "negative",
      bot: "positive",
    },
    botbhop: {
      aimassist: "negative",
      wallhack: "negative",
      autobhop: "positive",
      bot: "positive",
    },
    botaimwh: {
      aimassist: "positive",
      wallhack: "positive",
      autobhop: "negative",
      bot: "positive",
    },
    botaimbhop: {
      aimassist: "positive",
      wallhack: "negative",
      autobhop: "positive",
      bot: "positive",
    },
    botwhbhop: {
      aimassist: "negative",
      wallhack: "positive",
      autobhop: "positive",
      bot: "positive",
    },
    botrage: {
      aimassist: "positive",
      wallhack: "positive",
      autobhop: "positive",
      bot: "positive",
    },
  };

  let verdictRandomizerEnabled = readStoredVerdictRandomizer();
  let presetApplicationInProgress = false;

  const PRESET_KEYS = {
    Digit1: "botaimwh",
    Digit2: "aimwh",
    Digit3: "rage",
    Digit4: "legit",
    Digit5: "uncertain",
  };

  const PRESET_TONES = {
    uncertain: "uncertain",
    wallsq: "uncertain",
    aimq: "uncertain",
    bhopq: "uncertain",
    botq: "uncertain",
    legit: "clean",
    wh: "warning",
    bhop: "warning",
    whbhop: "warning",
    aim: "danger",
    aimwh: "danger",
    aimbhop: "danger",
    rage: "danger",
    bot: "bot",
    botaim: "bot",
    botwh: "bot",
    botbhop: "bot",
    botaimwh: "bot",
    botaimbhop: "bot",
    botwhbhop: "bot",
    botrage: "bot",
  };

  const ADVANCED_PRESET_GROUPS = [
    {
      title: "uncertainOne",
      names: ["aimq", "bhopq", "botq"],
    },
    {
      title: "exactCombos",
      names: [
        "aim",
        "bhop",
        "aimwh",
        "aimbhop",
        "whbhop",
        "botaim",
        "botwh",
        "botbhop",
        "botaimwh",
        "botaimbhop",
        "botwhbhop",
        "botrage",
      ],
    },
  ];
  const ADVANCED_PRESET_NAMES = new Set(
    ADVANCED_PRESET_GROUPS.flatMap((group) => group.names),
  );

  const VERDICT_FIELDS = ["aimassist", "wallhack", "autobhop", "bot"];
  const VERDICT_SECTION_TITLES = {
    aimassist: "titleAim",
    wallhack: "titleWalls",
    autobhop: "titleBhop",
    bot: "bot",
    cheating: "titleCheating",
  };
  const VERDICT_SECTION_HELP = {
    cheating: "helpCheating",
    aimassist: "helpAim",
    wallhack: "helpWalls",
    autobhop: "helpBhop",
    bot: "helpBot",
  };
  const DEFAULT_VERDICT = "skip";
  const HISTORY_SUMMARIES = new Set([...Object.keys(PRESETS), "mixed"]);

  if (IS_REVIEW_PAGE) GM_addStyle(`
    .vacnet-enhanced {
      --ss-page: #07090d;
      --ss-page-edge: #020306;
      --ss-sunken: #090c12;
      --ss-default: #0e131b;
      --ss-raised: #141b25;
      --ss-raised-alt: #1a2430;
      --ss-border: rgba(226, 235, 246, 0.13);
      --ss-border-subtle: rgba(226, 235, 246, 0.07);
      --ss-text: #f4f7fb;
      --ss-text-secondary: #a7b2c1;
      --ss-text-tertiary: #687689;
      --ss-accent: #f2a33a;
      --ss-accent-hover: #ffb654;
      --ss-accent-secondary: #56b8ff;
      --ss-warn: #f6c945;
      --ss-danger: #ff6577;
      --ss-verdict-guilty: #ff6577;
      --ss-verdict-innocent: #5bd39b;
      --ss-verdict-uncertain: #7c899b;
      --ss-on-accent: #171009;
      --ss-radius-lg: 16px;
      --ss-radius-md: 10px;
      --ss-shadow: 0 24px 70px rgba(0, 0, 0, 0.36), 0 2px 10px rgba(0, 0, 0, 0.28);
      --ss-font: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      --ss-mono: ui-monospace, "SF Mono", Menlo, Consolas, monospace;

      height: 100dvh;
      max-height: 100dvh;
      overflow: hidden !important;
      display: flex;
      flex-direction: column;
      font-family: var(--ss-font) !important;
      color: var(--ss-text) !important;
      background-color: var(--ss-page) !important;
      background-image:
        radial-gradient(circle at 82% -24%, rgba(242, 163, 58, 0.16), transparent 42%),
        radial-gradient(circle at -12% 105%, rgba(86, 184, 255, 0.08), transparent 38%),
        linear-gradient(90deg, var(--ss-page-edge), var(--ss-page) 14%, var(--ss-page) 86%, var(--ss-page-edge)) !important;
    }

    .vacnet-enhanced .PageBackground { display: none !important; }

    .vacnet-enhanced .PageHeader {
      flex: 0 0 auto;
      display: flex !important;
      align-items: center !important;
      justify-content: space-between !important;
      gap: 20px !important;
      min-height: 3.5rem !important;
      padding: 12px clamp(16px, 2vw, 34px) !important;
      box-sizing: border-box !important;
      background: color-mix(in srgb, var(--ss-page) 76%, transparent) !important;
      border-bottom: 1px solid var(--ss-border) !important;
      box-shadow: 0 1px 0 rgba(255, 255, 255, 0.025), 0 8px 30px rgba(0, 0, 0, 0.16);
      backdrop-filter: blur(18px) saturate(1.16);
    }

    .vacnet-enhanced .PageHeader::before {
      content: "";
      position: fixed;
      inset: 0 0 auto;
      z-index: 1;
      height: 2px;
      pointer-events: none;
      background: linear-gradient(90deg, transparent 5%, var(--ss-accent) 48%, var(--ss-accent-secondary) 52%, transparent 95%);
      opacity: 0.78;
    }

    .vacnet-enhanced .PageHeader .CSLogo {
      flex: 0 0 auto !important;
      width: 72px !important;
      height: auto !important;
      margin: 0 !important;
    }

    .vacnet-enhanced .PageHeader a,
    .vacnet-enhanced .PageHeader .right p a { color: var(--ss-accent) !important; }

    .vacnet-enhanced .PageHeader .ClipCount {
      color: var(--ss-text-secondary) !important;
      height: auto !important;
      margin: 0 !important;
      padding: 0.45rem 0.85rem !important;
      border: 1px solid var(--ss-border-subtle) !important;
      border-radius: 999px !important;
      background: color-mix(in srgb, var(--ss-raised) 88%, transparent) !important;
      font-size: 0.8125rem !important;
      line-height: 1.25 !important;
      white-space: nowrap !important;
    }

    .vacnet-enhanced .PageHeader .ClipCount b {
      color: var(--ss-text) !important;
      font-weight: 600 !important;
      margin-right: 0.35em !important;
    }

    .vacnet-enhanced .PageHeader .right {
      display: flex !important;
      flex-wrap: wrap !important;
      align-items: center !important;
      justify-content: flex-end !important;
      gap: 12px 18px !important;
      margin-left: auto !important;
      min-width: 0 !important;
    }

    .vacnet-enhanced .PageHeader .right p {
      margin: 0 !important;
      line-height: 1.35 !important;
      font-size: 0.8125rem !important;
      color: var(--ss-text-secondary) !important;
      white-space: nowrap !important;
    }

    .vacnet-enhanced .invitebutton {
      display: inline-flex !important;
      align-items: center !important;
      justify-content: center !important;
      box-sizing: border-box !important;
      width: auto !important;
      max-width: none !important;
      min-width: 0 !important;
      min-height: 2.25rem !important;
      padding: 0.5rem 0.95rem !important;
      margin: 0 !important;
      border-radius: 999px !important;
      background: linear-gradient(135deg, color-mix(in srgb, var(--ss-accent) 28%, var(--ss-raised)), color-mix(in srgb, var(--ss-accent) 10%, var(--ss-raised))) !important;
      border: 1px solid color-mix(in srgb, var(--ss-accent) 52%, var(--ss-border)) !important;
      color: var(--ss-text) !important;
      font: 600 0.8125rem/1.25 var(--ss-font) !important;
      letter-spacing: 0.01em !important;
      white-space: nowrap !important;
      text-align: center !important;
      text-decoration: none !important;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08), 0 7px 20px rgba(242, 163, 58, 0.1);
      transition: border-color 150ms ease, background 150ms ease, transform 150ms ease;
    }

    .vacnet-enhanced .invitebutton:not(.disabled):hover {
      border-color: var(--ss-accent) !important;
      transform: translateY(-1px);
    }

    .vacnet-enhanced .invitebutton.disabled {
      opacity: 0.72 !important;
      cursor: not-allowed !important;
    }

    .vacnet-enhanced .page-container {
      flex: 1 1 auto;
      min-height: 0 !important;
      margin: 0 !important;
      padding: clamp(12px, 1.4vw, 22px) clamp(14px, 2vw, 34px) clamp(16px, 2vw, 30px) !important;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      width: 100%;
      max-width: 100vw;
    }

    .vacnet-enhanced .flex-row-wrap {
      flex: 1 1 auto;
      min-height: 0 !important;
      min-width: 0 !important;
      height: auto !important;
      max-height: none !important;
      max-width: 100% !important;
      flex-wrap: nowrap !important;
      align-items: stretch !important;
      gap: clamp(14px, 1.3vw, 24px) !important;
      margin: 0 !important;
      width: 100% !important;
      overflow: hidden;
    }

    .vacnet-enhanced .video-column {
      flex: 1 1 auto !important;
      min-width: 0 !important;
      max-width: none !important;
      height: auto !important;
      display: flex !important;
      flex-direction: column !important;
      min-height: 0 !important;
    }

    .vacnet-enhanced .video-column .top-section {
      display: none !important;
    }

    .vacnet-enhanced .videocontainer {
      flex: 1 1 auto !important;
      min-height: 0 !important;
      height: auto !important;
      width: 100% !important;
      margin: 0 !important;
      display: flex !important;
      flex-direction: column !important;
      background: linear-gradient(180deg, color-mix(in srgb, var(--ss-raised) 52%, var(--ss-default)), var(--ss-default)) !important;
      border-radius: var(--ss-radius-lg);
      border: 1px solid var(--ss-border) !important;
      box-shadow: var(--ss-shadow);
      overflow: hidden;
    }

    .vacnet-enhanced .videocontainer {
      --vacnet-vjs-bar-height: 3em;
    }

    .vacnet-enhanced .videocontainer .video-js,
    .vacnet-enhanced .videocontainer .video-js.video-dimensions,
    .vacnet-enhanced .videocontainer .video-js.vjs-fluid {
      flex: 1 1 auto !important;
      min-height: 0 !important;
      width: 100% !important;
      height: auto !important;
      padding-top: 0 !important;
      border-radius: 0 !important;
      background: var(--ss-sunken) !important;
      display: flex !important;
      flex-direction: column !important;
      position: relative !important;
    }

    .vacnet-enhanced .video-js .vjs-tech {
      flex: 1 1 auto !important;
      min-height: 0 !important;
      width: 100% !important;
      height: auto !important;
      position: relative !important;
      top: auto !important;
      left: auto !important;
      right: auto !important;
      bottom: auto !important;
      object-fit: contain !important;
      object-position: center center !important;
    }

    .vacnet-enhanced .video-js .vjs-current-time,
    .vacnet-enhanced .video-js .vjs-duration,
    .vacnet-enhanced .video-js .vjs-remaining-time,
    .vacnet-enhanced .video-js .vjs-time-divider,
    .vacnet-enhanced .video-js .vjs-progress-control,
    .vacnet-enhanced .video-js .vjs-load-progress { display: none !important; }

    .vacnet-enhanced .video-js .vjs-control-bar {
      position: relative !important;
      flex: 0 0 var(--vacnet-vjs-bar-height) !important;
      bottom: auto !important;
      top: auto !important;
      left: auto !important;
      width: 100% !important;
      height: var(--vacnet-vjs-bar-height) !important;
      border-radius: 0 !important;
      background: var(--ss-raised) !important;
      border-top: 1px solid var(--ss-border-subtle) !important;
    }

    .vacnet-enhanced .video-js .vjs-big-play-button,
    .vacnet-enhanced .video-js .vjs-text-track-display,
    .vacnet-enhanced .video-js .vjs-loading-spinner,
    .vacnet-enhanced .video-js .vjs-poster {
      bottom: var(--vacnet-vjs-bar-height) !important;
    }

    .vacnet-enhanced .video-js .vjs-big-play-button {
      top: calc((100% - var(--vacnet-vjs-bar-height)) / 2) !important;
    }

    .vacnet-enhanced .video-js .vjs-play-control,
    .vacnet-enhanced .video-js .vjs-mute-control,
    .vacnet-enhanced .video-js .vjs-fullscreen-control,
    .vacnet-enhanced .video-js .vjs-playback-rate { color: var(--ss-text-secondary) !important; }

    .vacnet-enhanced .video-js,
    .vacnet-enhanced .video-js .vjs-control,
    .vacnet-enhanced .video-js .vjs-control-bar button,
    .vacnet-enhanced .video-js .vjs-menu-button {
      outline: none;
      box-shadow: none;
    }

    .vacnet-enhanced .video-js .vjs-control:focus:not(:focus-visible),
    .vacnet-enhanced .video-js .vjs-control:focus:not(:focus-visible):before,
    .vacnet-enhanced .video-js .vjs-control:hover:before,
    .vacnet-enhanced .video-js .vjs-control-bar button:focus:not(:focus-visible),
    .vacnet-enhanced .video-js .vjs-control-bar button:hover {
      text-shadow: none !important;
      outline: none !important;
      box-shadow: none !important;
    }

    .vacnet-enhanced .video-js .vjs-control:focus .vjs-svg-icon,
    .vacnet-enhanced .video-js .vjs-control:hover .vjs-svg-icon {
      filter: none !important;
    }

    .vacnet-enhanced :is(button, select, input, a):focus-visible,
    .vacnet-enhanced .videocontainer #video:focus-visible,
    .vacnet-enhanced .videocontainer .video-js:focus-visible,
    .vacnet-enhanced .videocontainer video:focus-visible {
      outline: 2px solid color-mix(in srgb, var(--ss-accent-secondary) 78%, white) !important;
      outline-offset: 2px !important;
    }

    #vacnet-seek:focus,
    #vacnet-seek:focus-visible {
      outline: 2px solid color-mix(in srgb, var(--ss-accent-secondary) 78%, white) !important;
      outline-offset: 4px !important;
    }

    #vacnet-controls {
      flex: 0 0 auto;
      padding: 12px 16px 14px;
      background: linear-gradient(180deg, color-mix(in srgb, var(--ss-raised) 94%, black), var(--ss-raised));
      border-top: 1px solid var(--ss-border-subtle);
    }

    #vacnet-controls .vacnet-seek-wrap { display: flex; align-items: center; gap: 12px; }

    #vacnet-seek {
      flex: 1 1 auto;
      height: 5px;
      accent-color: var(--ss-accent);
      cursor: pointer;
      filter: drop-shadow(0 0 5px rgba(242, 163, 58, 0.22));
    }

    #vacnet-time {
      flex: 0 0 auto;
      font: 600 0.8125rem/1 var(--ss-mono);
      font-variant-numeric: tabular-nums;
      color: var(--ss-text);
      min-width: 8.5em;
      text-align: right;
    }

    #vacnet-controls .vacnet-hints {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 5px 12px;
      margin-top: 8px;
      font: 0.6875rem/1.35 var(--ss-font);
      letter-spacing: 0.02em;
      color: var(--ss-text-tertiary);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    #vacnet-controls .vacnet-hints span {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      white-space: nowrap;
    }

    #vacnet-controls .vacnet-hints kbd {
      padding: 0.12rem 0.34rem;
      border: 1px solid var(--ss-border);
      border-radius: 5px;
      background: var(--ss-sunken);
      color: var(--ss-text-secondary);
      font: 650 0.625rem/1.1 var(--ss-mono);
      box-shadow: inset 0 -1px 0 rgba(255, 255, 255, 0.04);
    }

    .vacnet-enhanced .verdict-column,
    .vacnet-enhanced .verdict-column.size-for-column {
      width: clamp(430px, 20vw, 500px) !important;
      max-width: 500px !important;
      min-width: 430px !important;
      flex: 0 0 clamp(430px, 20vw, 500px) !important;
      height: 100% !important;
      max-height: 100% !important;
      min-height: 0 !important;
      display: flex !important;
      flex-direction: column !important;
      overflow: hidden;
      box-sizing: border-box;
    }

    .vacnet-enhanced .verdict-column .top-section-logo.hide-on-wrap { display: none !important; }

    .vacnet-enhanced .verdict-column > .panel-header,
    .vacnet-enhanced .verdict-column > .task-instructions { display: none !important; }

    .vacnet-enhanced .PageHeader .ClipCount.demoscope-clipcount-visible { display: inline-block !important; }

    .vacnet-enhanced .verdicts-container {
      flex: 1 1 auto !important;
      min-height: 0 !important;
      display: flex !important;
      flex-direction: column !important;
      overflow-x: hidden !important;
      overflow-y: auto !important;
      scrollbar-width: thin;
      padding: 0 !important;
      background: linear-gradient(180deg, color-mix(in srgb, var(--ss-raised) 35%, var(--ss-default)), var(--ss-default)) !important;
      border: 1px solid var(--ss-border) !important;
      border-radius: var(--ss-radius-lg) !important;
      box-shadow: var(--ss-shadow);
    }

    .vacnet-enhanced .verdicts-container-inner {
      flex: 1 0 auto;
      min-height: min-content;
      min-width: 0;
      display: flex !important;
      flex-direction: column !important;
      justify-content: flex-start !important;
      overflow: visible;
      padding: 6px 12px 8px;
      box-sizing: border-box;
      background: transparent !important;
    }

    .vacnet-enhanced .verdicts-container-inner > .verdict-block:last-child {
      border-bottom: none !important;
    }

    #vacnet-shift-speed {
      flex: 0 0 auto;
      margin-top: auto;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 9px;
      padding: 10px 14px 9px;
      border-bottom: 1px solid var(--ss-border-subtle);
      background: color-mix(in srgb, var(--ss-sunken) 42%, transparent);
    }

    #vacnet-shift-speed .vacnet-bar-title {
      font: 600 0.6875rem/1 var(--ss-font);
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--ss-text-secondary);
      margin-right: 2px;
    }

    #vacnet-shift-speed .vacnet-bar-hint {
      margin-right: auto;
      font: 500 0.6875rem/1.2 var(--ss-font);
      color: var(--ss-text-tertiary);
    }

    #vacnet-enhance-bar {
      flex: 0 0 auto;
      display: flex;
      flex-direction: column;
      align-items: stretch;
      gap: 11px;
      padding: 13px 14px 14px;
      border-top: 1px solid var(--ss-border-subtle);
      background: color-mix(in srgb, var(--ss-raised) 22%, var(--ss-default));
    }

    #vacnet-enhance-bar .vacnet-enhance-bar-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 9px;
    }

    #vacnet-enhance-bar .vacnet-enhance-bar-title {
      font: 700 0.6875rem/1 var(--ss-font);
      letter-spacing: 0.09em;
      text-transform: uppercase;
      color: var(--ss-text-secondary);
    }

    #vacnet-enhance-bar .vacnet-enhance-bar-hint {
      font: 500 0.6875rem/1 var(--ss-font);
      color: var(--ss-text-tertiary);
      white-space: nowrap;
    }

    #vacnet-enhance-bar .vacnet-randomizer-control {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      color: var(--ss-text-tertiary);
      font: 550 0.625rem/1 var(--ss-font);
      white-space: nowrap;
      cursor: pointer;
    }

    #vacnet-enhance-bar .vacnet-randomizer-control input {
      appearance: none;
      position: relative;
      width: 26px;
      height: 15px;
      margin: 0;
      border: 1px solid var(--ss-border);
      border-radius: 999px;
      background: var(--ss-sunken);
      cursor: pointer;
      transition: background 140ms ease, border-color 140ms ease;
    }

    #vacnet-enhance-bar .vacnet-randomizer-control input::before {
      content: "";
      position: absolute;
      top: 2px;
      left: 2px;
      width: 9px;
      height: 9px;
      border-radius: 50%;
      background: var(--ss-text-tertiary);
      transition: transform 140ms ease, background 140ms ease;
    }

    #vacnet-enhance-bar .vacnet-randomizer-control input:checked {
      border-color: var(--ss-accent);
      background: color-mix(in srgb, var(--ss-accent) 32%, var(--ss-sunken));
    }

    #vacnet-enhance-bar .vacnet-randomizer-control input:checked::before {
      transform: translateX(11px);
      background: var(--ss-text);
    }

    #vacnet-enhance-bar .vacnet-randomizer-control input:focus-visible {
      outline: 2px solid var(--ss-accent);
      outline-offset: 2px;
    }

    #vacnet-enhance-bar .vacnet-enhance-bar-presets {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      width: 100%;
    }

    #vacnet-enhance-bar .vacnet-enhance-bar-presets button {
      flex: 1 1 calc((100% - 16px) / 3);
      box-sizing: border-box;
    }

    #vacnet-enhance-bar button {
      border: 1px solid var(--ss-border);
      background: var(--ss-raised);
      color: var(--ss-text);
      min-height: 38px;
      border-radius: var(--ss-radius-md);
      padding: 0.5rem 0.72rem;
      cursor: pointer;
      font: 650 0.78rem/1 var(--ss-font);
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.025);
      transition: background 140ms ease, border-color 140ms ease, transform 140ms ease, box-shadow 140ms ease;
    }

    #vacnet-enhance-bar button:hover {
      background: var(--ss-raised-alt);
      border-color: color-mix(in srgb, var(--ss-accent) 35%, var(--ss-border));
      transform: translateY(-1px);
    }

    #vacnet-enhance-bar button[aria-pressed="true"] {
      background: color-mix(in srgb, var(--ss-accent) 14%, var(--ss-sunken));
      border-color: var(--ss-accent);
      box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--ss-accent) 18%, transparent), 0 8px 18px rgba(0, 0, 0, 0.15);
    }

    #vacnet-enhance-bar button[data-tone="clean"][aria-pressed="true"] {
      background: color-mix(in srgb, var(--ss-verdict-innocent) 17%, var(--ss-sunken));
      border-color: var(--ss-verdict-innocent);
    }

    #vacnet-enhance-bar button[data-tone="uncertain"][aria-pressed="true"] {
      background: color-mix(in srgb, var(--ss-verdict-uncertain) 18%, var(--ss-sunken));
      border-color: var(--ss-verdict-uncertain);
    }

    #vacnet-enhance-bar button[data-tone="warning"][aria-pressed="true"] {
      background: color-mix(in srgb, var(--ss-warn) 17%, var(--ss-sunken));
      border-color: var(--ss-warn);
    }

    #vacnet-enhance-bar button[data-tone="danger"][aria-pressed="true"] {
      background: color-mix(in srgb, var(--ss-danger) 17%, var(--ss-sunken));
      border-color: var(--ss-danger);
    }

    #vacnet-enhance-bar button[data-tone="bot"][aria-pressed="true"] {
      background: color-mix(in srgb, var(--ss-accent-secondary) 17%, var(--ss-sunken));
      border-color: var(--ss-accent-secondary);
    }

    #vacnet-enhance-bar .vacnet-advanced-presets {
      overflow: hidden;
      border: 1px solid var(--ss-border-subtle);
      border-radius: var(--ss-radius-md);
      background: color-mix(in srgb, var(--ss-sunken) 66%, transparent);
    }

    #vacnet-enhance-bar .vacnet-advanced-presets summary {
      display: flex;
      align-items: center;
      gap: 8px;
      min-height: 36px;
      padding: 8px 10px;
      cursor: pointer;
      list-style: none;
      color: var(--ss-text-secondary);
      font: 650 0.75rem/1.2 var(--ss-font);
      user-select: none;
      transition: color 140ms ease, background 140ms ease;
    }

    #vacnet-enhance-bar .vacnet-advanced-presets summary::-webkit-details-marker {
      display: none;
    }

    #vacnet-enhance-bar .vacnet-advanced-presets summary:hover {
      color: var(--ss-text);
      background: color-mix(in srgb, var(--ss-raised) 55%, transparent);
    }

    #vacnet-enhance-bar .vacnet-advanced-presets summary::after {
      content: "";
      width: 7px;
      height: 7px;
      margin-left: 2px;
      border-right: 1.5px solid currentColor;
      border-bottom: 1.5px solid currentColor;
      transform: rotate(45deg) translateY(-2px);
      transition: transform 140ms ease;
    }

    #vacnet-enhance-bar .vacnet-advanced-presets[open] summary {
      border-bottom: 1px solid var(--ss-border-subtle);
      color: var(--ss-text);
    }

    #vacnet-enhance-bar .vacnet-advanced-presets[open] summary::after {
      transform: rotate(225deg) translate(-1px, -1px);
    }

    #vacnet-enhance-bar .vacnet-advanced-count {
      margin-left: auto;
      padding: 0.2rem 0.42rem;
      border: 1px solid var(--ss-border-subtle);
      border-radius: 999px;
      color: var(--ss-text-tertiary);
      background: var(--ss-raised);
      font: 600 0.625rem/1 var(--ss-mono);
    }

    #vacnet-enhance-bar .vacnet-advanced-current {
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: var(--ss-accent);
      font: 650 0.6875rem/1.1 var(--ss-font);
    }

    #vacnet-enhance-bar .vacnet-advanced-current[hidden] {
      display: none;
    }

    #vacnet-enhance-bar .vacnet-advanced-body {
      max-height: 222px;
      overflow-y: auto;
      padding: 10px;
      scrollbar-width: thin;
      scrollbar-color: var(--ss-text-tertiary) transparent;
    }

    #vacnet-enhance-bar .vacnet-advanced-group + .vacnet-advanced-group {
      margin-top: 12px;
    }

    #vacnet-enhance-bar .vacnet-advanced-group-title {
      margin: 0 0 7px 1px;
      color: var(--ss-text-tertiary);
      font: 650 0.625rem/1.2 var(--ss-font);
      letter-spacing: 0.055em;
      text-transform: uppercase;
    }

    #vacnet-enhance-bar .vacnet-advanced-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 7px;
    }

    #vacnet-enhance-bar .vacnet-advanced-grid button {
      min-width: 0;
      min-height: 36px;
      padding: 0.42rem 0.36rem;
      font-size: 0.6875rem;
      line-height: 1.15;
      overflow-wrap: anywhere;
    }

    #vacnet-enhance-bar button kbd {
      display: inline-block;
      min-width: 1.1em;
      margin-right: 0.25em;
      padding: 0.05em 0.3em;
      border-radius: 3px;
      font: 600 0.6875rem/1.2 var(--ss-mono);
      color: var(--ss-text-secondary);
      background: var(--ss-sunken);
      border: 1px solid var(--ss-border-subtle);
      box-shadow: inset 0 -1px 0 rgba(255, 255, 255, 0.025);
    }

    #vacnet-speed-select {
      border: 1px solid var(--ss-border);
      background: var(--ss-raised);
      color: var(--ss-text);
      border-radius: var(--ss-radius-md);
      padding: 0.48rem 0.7rem;
      cursor: pointer;
      font: 500 0.8125rem/1 var(--ss-font);
      min-width: 5rem;
      color-scheme: dark;
    }

    #vacnet-speed-select:hover,
    #vacnet-speed-select:focus {
      border-color: color-mix(in srgb, var(--ss-accent) 35%, var(--ss-border));
      outline: none;
    }

    .vacnet-enhanced .verdict-block {
      padding: 11px 0 !important;
      margin: 0 !important;
      border-bottom: 1px solid var(--ss-border-subtle) !important;
      background: transparent !important;
    }

    .vacnet-enhanced .verdict-block:last-child { border-bottom: none !important; }

    .vacnet-enhanced .verdict-block .verdict-desc {
      display: none !important;
    }

    .vacnet-enhanced .verdict-block { position: relative; }

    .vacnet-enhanced .verdict-block .vacnet-verdict-title {
      display: flex !important;
      align-items: center;
      gap: 7px;
      margin: 0 0 9px !important;
      font: 600 0.6875rem/1 var(--ss-font) !important;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--ss-text-secondary) !important;
      text-align: left !important;
    }

    .vacnet-enhanced .vacnet-verdict-help-btn {
      flex: 0 0 auto;
      display: inline-grid;
      place-items: center;
      width: 16px;
      height: 16px;
      padding: 0;
      border: 1px solid var(--ss-border);
      border-radius: 50%;
      background: transparent;
      color: var(--ss-text-tertiary);
      font: 700 0.625rem/1 var(--ss-font);
      letter-spacing: 0;
      text-transform: none;
      cursor: pointer;
      transition: color 140ms ease, border-color 140ms ease, background 140ms ease;
    }

    .vacnet-enhanced .vacnet-verdict-help-btn:hover,
    .vacnet-enhanced .vacnet-verdict-help-btn[aria-expanded="true"] {
      color: var(--ss-accent);
      border-color: color-mix(in srgb, var(--ss-accent) 55%, var(--ss-border));
      background: color-mix(in srgb, var(--ss-accent) 10%, transparent);
    }

    .vacnet-enhanced .vacnet-verdict-help {
      position: absolute;
      left: 0;
      right: 0;
      z-index: 30;
      margin-top: -3px;
      padding: 10px 12px;
      box-sizing: border-box;
      border: 1px solid color-mix(in srgb, var(--ss-accent) 38%, var(--ss-border));
      border-radius: var(--ss-radius-md);
      background: var(--ss-raised-alt);
      box-shadow: var(--ss-shadow);
      color: var(--ss-text);
      font: 450 0.78rem/1.5 var(--ss-font);
      letter-spacing: 0;
      text-align: left;
      text-transform: none;
    }

    .vacnet-enhanced .vacnet-verdict-help[hidden] { display: none !important; }


    /* ---- single-verdict ("cheating") task ---- */
    .vacnet-cheating-task .verdict-block .verdictbuttons { gap: 8px; }

    .vacnet-cheating-task .verdict-block .verdictbutton,
    .vacnet-cheating-task .verdict-block .verdictbutton label {
      min-height: 68px !important;
    }

    .vacnet-cheating-task .verdict-block .verdictbutton label {
      font-size: 0.86rem;
      line-height: 1.25;
    }

    .vacnet-enhanced .verdictbutton:has(input:disabled:not(:checked)) {
      opacity: 0.45;
      cursor: not-allowed;
    }

    .vacnet-enhanced .verdictbutton:has(input:disabled:not(:checked)) label { cursor: not-allowed; }

    .vacnet-cheating-task .verdictbutton label[data-ds-key]::before {
      content: attr(data-ds-key);
      display: inline-block;
      min-width: 1.1em;
      margin-right: 0.4em;
      padding: 0.05em 0.3em;
      border-radius: 3px;
      font: 600 0.6875rem/1.2 var(--ss-mono);
      text-align: center;
      color: var(--ss-text-secondary);
      background: var(--ss-sunken);
      border: 1px solid var(--ss-border-subtle);
    }

    .vacnet-enhanced .backbutton .vacnet-cancel-kbd {
      display: inline-block;
      min-width: 1.1em;
      margin-left: 0.35em;
      padding: 0.05em 0.3em;
      border-radius: 3px;
      font: 600 0.6875rem/1.2 var(--ss-mono);
      color: var(--ss-text-secondary);
      background: var(--ss-sunken);
      border: 1px solid var(--ss-border-subtle);
    }

    .vacnet-enhanced .vacnet-verdict-key {
      display: inline-block;
      min-width: 1.1em;
      margin-right: 0.4em;
      padding: 0.05em 0.3em;
      border-radius: 3px;
      font: 600 0.6875rem/1.2 var(--ss-mono);
      color: var(--ss-text-secondary);
      background: var(--ss-sunken);
      border: 1px solid var(--ss-border-subtle);
    }

    .vacnet-enhanced .verdict-block .verdict-lock-hint {
      display: flex !important;
      flex-direction: column;
      gap: 8px;
      margin: 12px 0 0 !important;
      padding: 9px 11px !important;
      border: 1px solid var(--ss-border);
      border-radius: var(--ss-radius-md);
      background: var(--ss-raised);
      color: var(--ss-text-secondary) !important;
      font: 500 0.72rem/1.4 var(--ss-font) !important;
      text-align: left !important;
    }

    .vacnet-enhanced .verdict-block .verdict-lock-hint.vacnet-lock-done { display: none !important; }

    .vacnet-enhanced .vacnet-lock-bar {
      display: block;
      height: 3px;
      overflow: hidden;
      border-radius: 99px;
      background: color-mix(in srgb, var(--ss-text) 10%, transparent);
    }

    .vacnet-enhanced .vacnet-lock-bar i {
      display: block;
      height: 100%;
      width: 0;
      background: var(--ss-accent);
      transition: width 250ms linear;
    }

    @keyframes vacnet-lock-shake {
      0%, 100% { transform: translateX(0); }
      25% { transform: translateX(-4px); }
      75% { transform: translateX(4px); }
    }

    .vacnet-enhanced .verdict-lock-hint.vacnet-lock-shake { animation: vacnet-lock-shake 260ms ease; }


    .vacnet-enhanced .verdict-column .verdictbuttons {
      display: grid !important;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 7px !important;
      width: 100% !important;
      margin: 0 !important;
    }

    .vacnet-enhanced .verdict-column .verdictbutton {
      width: auto !important;
      height: auto !important;
      min-height: 42px !important;
      margin: 0 !important;
      border-radius: var(--ss-radius-md) !important;
      background: var(--ss-raised) !important;
      border: 1px solid var(--ss-border) !important;
      box-shadow: none !important;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.025) !important;
      transition: background 140ms ease, border-color 140ms ease, transform 140ms ease, box-shadow 140ms ease;
    }

    .vacnet-enhanced .verdict-column .verdictbutton:not(:has(input:checked)):hover {
      background: var(--ss-raised-alt) !important;
      border-color: var(--ss-border) !important;
      transform: translateY(-1px);
    }

    .vacnet-enhanced .verdict-column .verdictbutton.positive:has(input:checked) {
      background: color-mix(in srgb, var(--ss-danger) 16%, var(--ss-sunken)) !important;
      border-color: color-mix(in srgb, var(--ss-danger) 55%, var(--ss-border)) !important;
    }

    .vacnet-enhanced .verdict-column .verdictbutton.skip:has(input:checked) {
      background: color-mix(in srgb, var(--ss-text-secondary) 14%, var(--ss-sunken)) !important;
      border-color: color-mix(in srgb, var(--ss-text-secondary) 45%, var(--ss-border)) !important;
    }

    .vacnet-enhanced .verdict-column .verdictbuttons:not(:has(input:checked)) .verdictbutton.skip {
      background: color-mix(in srgb, var(--ss-text-secondary) 14%, var(--ss-sunken)) !important;
      border-color: color-mix(in srgb, var(--ss-text-secondary) 45%, var(--ss-border)) !important;
    }

    .vacnet-enhanced .verdict-column .verdictbutton.negative:has(input:checked) {
      background: color-mix(in srgb, var(--ss-verdict-innocent) 16%, var(--ss-sunken)) !important;
      border-color: var(--ss-verdict-innocent) !important;
      box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--ss-verdict-innocent) 14%, transparent) !important;
    }

    .vacnet-enhanced .verdict-column .verdictbutton label {
      font: 500 0.75rem/1.25 var(--ss-font) !important;
      padding: 6px 4px !important;
      white-space: normal !important;
      color: var(--ss-text) !important;
    }

    .vacnet-enhanced .verdict-column .verdictbutton label b {
      color: inherit !important;
      font-weight: inherit !important;
    }

    /* Key phrase of each question (orange) and the "not" of negative answers (blue). */
    .vacnet-enhanced .verdict-column .highlight-text {
      color: var(--ss-accent) !important;
      font-weight: 650 !important;
    }

    .vacnet-enhanced .verdict-column .highlight-text-negative {
      color: color-mix(in srgb, var(--ss-accent-secondary) 85%, var(--ss-text)) !important;
      font-weight: 650 !important;
    }

    .vacnet-enhanced .verdicts-container > .submitbuttons {
      position: sticky !important;
      bottom: 0 !important;
      z-index: 6 !important;
      flex: 0 0 auto !important;
      display: block !important;
      box-sizing: border-box !important;
      width: 100% !important;
      max-width: 100% !important;
      margin: 0 !important;
      padding: 12px 12px 14px !important;
      border-top: 1px solid var(--ss-border-subtle) !important;
      background: var(--ss-default) !important;
      border-radius: 0 0 var(--ss-radius-lg) var(--ss-radius-lg) !important;
    }

    .vacnet-enhanced .verdicts-container-inner .submitbuttons {
      margin-top: 8px !important;
      padding: 14px 0 16px !important;
      border-top: 1px solid var(--ss-border-subtle) !important;
      background: transparent !important;
      border-radius: 0 !important;
    }

    #vacnet-clip-history {
      position: relative;
      z-index: 5;
      flex: 0 0 auto;
      box-sizing: border-box;
      width: 100%;
      padding: 14px;
      border-bottom: 1px solid var(--ss-border-subtle);
      background:
        linear-gradient(135deg, rgba(242, 163, 58, 0.07), transparent 42%),
        color-mix(in srgb, var(--ss-raised) 22%, var(--ss-default));
      border-radius: var(--ss-radius-lg) var(--ss-radius-lg) 0 0;
    }

    #vacnet-clip-history .vacnet-review-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 12px;
      margin-bottom: 12px;
    }

    #vacnet-clip-history .vacnet-review-kicker {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font: 750 0.6875rem/1 var(--ss-font);
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--ss-text-secondary);
    }

    #vacnet-clip-history .vacnet-review-dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: var(--ss-accent);
      box-shadow: 0 0 0 4px rgba(242, 163, 58, 0.11), 0 0 14px rgba(242, 163, 58, 0.35);
    }

    #vacnet-clip-history .vacnet-review-badges {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: flex-end;
      gap: 6px;
    }

    #vacnet-clip-history .vacnet-local-badge,
    #vacnet-clip-history .vacnet-ru-badge {
      white-space: nowrap;
      padding: 0.3rem 0.52rem;
      border: 1px solid var(--ss-border-subtle);
      border-radius: 999px;
      background: color-mix(in srgb, var(--ss-sunken) 72%, transparent);
      font: 600 0.625rem/1 var(--ss-font);
      color: var(--ss-text-tertiary);
    }

    #vacnet-clip-history button.vacnet-local-badge {
      font: 600 0.625rem/1 var(--ss-font);
      white-space: nowrap;
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      cursor: pointer;
      transition: color 140ms ease, border-color 140ms ease, background 140ms ease;
    }

    #vacnet-clip-history button.vacnet-local-badge:hover,
    #vacnet-clip-history button.vacnet-local-badge:focus-visible {
      color: var(--ss-text);
      border-color: color-mix(in srgb, var(--ss-accent) 50%, var(--ss-border));
      outline: none;
    }

    #vacnet-clip-history .vacnet-ru-badge {
      border-color: color-mix(in srgb, var(--ss-accent) 40%, var(--ss-border));
      background: color-mix(in srgb, var(--ss-accent) 12%, var(--ss-sunken));
      color: var(--ss-accent-hover);
    }

    #vacnet-clip-history .vacnet-clip-meta {
      display: flex;
      align-items: end;
      justify-content: space-between;
      gap: 14px;
    }

    #vacnet-clip-history .vacnet-clip-meta-game {
      font: 720 1rem/1.2 var(--ss-font);
      color: var(--ss-text);
      font-variant-numeric: tabular-nums;
    }

    #vacnet-clip-history .vacnet-clip-meta-segment {
      margin-top: 0;
      font: 600 0.75rem/1.35 var(--ss-mono);
      color: var(--ss-text-secondary);
      font-variant-numeric: tabular-nums;
    }

    #vacnet-clip-history .vacnet-clip-stats {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 7px;
      margin-top: 12px;
      font: 500 0.6875rem/1.3 var(--ss-font);
      color: var(--ss-text-tertiary);
    }

    #vacnet-clip-history .vacnet-clip-stats-sep {
      color: var(--ss-border);
    }

    #vacnet-clip-history .vacnet-clip-stats > span:not(.vacnet-clip-stats-sep) {
      padding: 0.3rem 0.5rem;
      border: 1px solid var(--ss-border-subtle);
      border-radius: 999px;
      background: color-mix(in srgb, var(--ss-sunken) 72%, transparent);
    }

    #vacnet-clip-history .vacnet-clip-prior-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      margin-top: 10px;
      padding: 0 2px 4px;
      font: 600 0.625rem/1.2 var(--ss-font);
      letter-spacing: 0.04em;
      text-transform: uppercase;
      color: var(--ss-text-tertiary);
    }

    #vacnet-clip-history .vacnet-clip-scroll-hint {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      font: 500 0.625rem/1.2 var(--ss-font);
      letter-spacing: normal;
      text-transform: none;
      color: var(--ss-text-secondary);
    }

    #vacnet-clip-history .vacnet-clip-scroll-hint::after {
      content: "";
      display: inline-block;
      width: 6px;
      height: 10px;
      border: 1.5px solid var(--ss-text-tertiary);
      border-radius: 3px;
      box-shadow: inset 0 -3px 0 var(--ss-text-tertiary);
    }

    #vacnet-clip-history .vacnet-clip-list-wrap {
      margin-top: 0;
      border: 1px solid var(--ss-border-subtle);
      border-radius: var(--ss-radius-md);
      background: color-mix(in srgb, var(--ss-sunken) 92%, black);
    }

    #vacnet-clip-history .vacnet-clip-list {
      list-style: none;
      margin: 0;
      padding: 4px 2px 4px 6px;
      display: flex;
      flex-direction: column;
      gap: 6px;
      max-height: 126px;
      overflow-y: scroll;
      overflow-x: hidden;
      scrollbar-gutter: stable;
      scrollbar-width: thin;
      scrollbar-color: var(--ss-text-tertiary) color-mix(in srgb, var(--ss-sunken) 88%, var(--ss-border));
    }

    #vacnet-clip-history .vacnet-clip-list::-webkit-scrollbar {
      width: 10px;
    }

    #vacnet-clip-history .vacnet-clip-list::-webkit-scrollbar-track {
      margin: 4px 0;
      border-radius: 5px;
      background: color-mix(in srgb, var(--ss-sunken) 88%, var(--ss-border));
      border-left: 1px solid var(--ss-border-subtle);
    }

    #vacnet-clip-history .vacnet-clip-list::-webkit-scrollbar-thumb {
      border-radius: 5px;
      background: var(--ss-text-tertiary);
      border: 2px solid color-mix(in srgb, var(--ss-sunken) 88%, var(--ss-border));
    }

    #vacnet-clip-history .vacnet-clip-list::-webkit-scrollbar-thumb:hover {
      background: var(--ss-text-secondary);
    }

    #vacnet-clip-history .vacnet-clip-item {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 8px 10px;
      border: 1px solid var(--ss-border-subtle);
      border-radius: var(--ss-radius-md);
      background: color-mix(in srgb, var(--ss-raised) 26%, var(--ss-sunken));
    }

    #vacnet-clip-history .vacnet-clip-item-main {
      flex: 1 1 auto;
      min-width: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
    }

    #vacnet-clip-history .vacnet-clip-item-scope {
      min-width: 0;
      font: 500 0.6875rem/1.25 var(--ss-font);
      color: var(--ss-text-secondary);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    #vacnet-clip-history .vacnet-language-picker { position: relative; }

    #vacnet-clip-history .vacnet-rules-open {
      display: inline-grid;
      place-items: center;
      width: 25px;
      height: 25px;
      padding: 0;
      border: 1px solid var(--ss-border);
      border-radius: 50%;
      color: var(--ss-text-secondary);
      background: var(--ss-raised);
      cursor: pointer;
      transition: color 140ms ease, border-color 140ms ease, background 140ms ease;
    }

    #vacnet-clip-history .vacnet-rules-open:hover,
    #vacnet-clip-history .vacnet-rules-open:focus-visible {
      color: var(--ss-accent);
      border-color: var(--ss-accent);
      outline: none;
    }

    #vacnet-clip-history .vacnet-rules-open svg {
      width: 14px;
      height: 14px;
    }

    #vacnet-review-rules {
      box-sizing: border-box;
      width: min(560px, calc(100vw - 32px));
      max-width: none;
      max-height: calc(100dvh - 32px);
      padding: 0;
      overflow: auto;
      border: 1px solid var(--ss-border);
      border-radius: var(--ss-radius-lg);
      color: var(--ss-text);
      background: color-mix(in srgb, var(--ss-raised) 96%, #07090d);
      box-shadow: 0 24px 90px rgba(0, 0, 0, 0.62), 0 0 0 1px rgba(255, 255, 255, 0.035);
      font: 500 0.875rem/1.55 var(--ss-font);
    }

    #vacnet-review-rules::backdrop {
      background: rgba(3, 5, 9, 0.56);
      backdrop-filter: blur(8px) saturate(0.78);
      -webkit-backdrop-filter: blur(8px) saturate(0.78);
    }

    #vacnet-review-rules .vacnet-rules-head {
      position: sticky;
      top: 0;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      padding: 16px 18px;
      border-bottom: 1px solid var(--ss-border-subtle);
      background: color-mix(in srgb, var(--ss-raised) 97%, #07090d);
    }

    #vacnet-review-rules .vacnet-rules-title {
      margin: 0;
      color: var(--ss-text);
      font: 720 1rem/1.25 var(--ss-font);
    }

    #vacnet-review-rules .vacnet-rules-close {
      flex: 0 0 auto;
      width: 30px;
      height: 30px;
      padding: 0;
      border: 1px solid var(--ss-border);
      border-radius: 8px;
      color: var(--ss-text-secondary);
      background: var(--ss-sunken);
      font: 400 1.25rem/1 var(--ss-font);
      cursor: pointer;
    }

    #vacnet-review-rules .vacnet-rules-close:hover {
      color: var(--ss-text);
      border-color: var(--ss-accent);
    }

    #vacnet-review-rules .vacnet-rules-content {
      padding: 16px 20px 20px;
    }

    #vacnet-review-rules .vacnet-rules-intro {
      margin: 0 0 12px;
      color: var(--ss-text);
      font-weight: 700;
    }

    #vacnet-review-rules .vacnet-rules-list {
      display: grid;
      gap: 10px;
      margin: 0;
      padding-left: 20px;
      color: var(--ss-text-secondary);
    }

    #vacnet-review-rules .vacnet-rules-list li::marker { color: var(--ss-accent); }

    #vacnet-clip-history .vacnet-language-trigger {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      max-width: 158px;
      min-height: 24px;
      padding: 3px 7px;
      border: 1px solid var(--ss-border);
      border-radius: 999px;
      color: var(--ss-text-secondary);
      background: var(--ss-raised);
      font: 600 0.625rem/1.1 var(--ss-font);
      cursor: pointer;
    }

    #vacnet-clip-history .vacnet-language-trigger:hover,
    #vacnet-clip-history .vacnet-language-trigger[aria-expanded="true"] {
      color: var(--ss-text);
      border-color: color-mix(in srgb, var(--ss-accent) 52%, var(--ss-border));
    }

    #vacnet-clip-history .vacnet-language-flag {
      display: block;
      flex: 0 0 auto;
      width: 22px;
      height: 15px;
      border: 1px solid rgba(255, 255, 255, 0.18);
      border-radius: 3px;
      overflow: hidden;
      box-sizing: border-box;
    }

    #vacnet-clip-history .vacnet-language-current-label {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    #vacnet-clip-history .vacnet-language-chevron {
      flex: 0 0 auto;
      width: 10px;
      height: 10px;
    }

    #vacnet-clip-history .vacnet-language-options {
      position: fixed;
      inset: auto;
      margin: 0;
      z-index: 2147483644;
      display: flex;
      flex-direction: column;
      gap: 2px;
      width: 248px;
      max-height: min(320px, 55vh);
      padding: 5px;
      overflow: auto;
      border: 1px solid var(--ss-border);
      border-radius: var(--ss-radius-md);
      background: #141b25 !important;
      opacity: 1 !important;
      isolation: isolate;
      box-shadow: var(--ss-shadow);
      scrollbar-width: thin;
    }

    #vacnet-clip-history .vacnet-language-options[hidden] { display: none; }

    #vacnet-clip-history .vacnet-language-option {
      display: flex;
      align-items: center;
      gap: 9px;
      width: 100%;
      min-height: 30px;
      padding: 5px 8px;
      border: 0;
      border-radius: 6px;
      color: var(--ss-text-secondary);
      background: transparent;
      font: 500 0.75rem/1.2 var(--ss-font);
      text-align: left;
      cursor: pointer;
    }

    #vacnet-clip-history .vacnet-language-option:hover,
    #vacnet-clip-history .vacnet-language-option[aria-selected="true"] {
      color: var(--ss-text);
      background: color-mix(in srgb, var(--ss-accent) 18%, var(--ss-raised-alt));
    }

    #vacnet-clip-history .vacnet-clip-item-when {
      flex: 0 0 auto;
      font: 500 0.6875rem/1.25 var(--ss-mono);
      color: var(--ss-text-tertiary);
      font-variant-numeric: tabular-nums;
      white-space: nowrap;
    }

    #vacnet-clip-history .vacnet-clip-history-tag {
      flex: 0 0 auto;
      display: inline-block;
      min-width: 3rem;
      padding: 0.2rem 0.45rem;
      border-radius: 4px;
      text-align: center;
      font: 700 0.625rem/1.2 var(--ss-font);
      letter-spacing: 0.03em;
      text-transform: none;
      color: var(--ss-on-accent);
      background: var(--ss-text-secondary);
      white-space: nowrap;
    }

    #vacnet-clip-history .vacnet-clip-history-tag.legit { background: var(--ss-verdict-innocent); }
    #vacnet-clip-history .vacnet-clip-history-tag.uncertain,
    #vacnet-clip-history .vacnet-clip-history-tag.wallsq,
    #vacnet-clip-history .vacnet-clip-history-tag.aimq,
    #vacnet-clip-history .vacnet-clip-history-tag.bhopq,
    #vacnet-clip-history .vacnet-clip-history-tag.botq,
    #vacnet-clip-history .vacnet-clip-history-tag.mixed {
      background: var(--ss-verdict-uncertain);
      color: var(--ss-text);
    }
    #vacnet-clip-history .vacnet-clip-history-tag.wh,
    #vacnet-clip-history .vacnet-clip-history-tag.bhop,
    #vacnet-clip-history .vacnet-clip-history-tag.whbhop {
      background: var(--ss-warn);
      color: #1a1400;
    }
    #vacnet-clip-history .vacnet-clip-history-tag.aim,
    #vacnet-clip-history .vacnet-clip-history-tag.aimwh,
    #vacnet-clip-history .vacnet-clip-history-tag.aimbhop,
    #vacnet-clip-history .vacnet-clip-history-tag.rage {
      background: var(--ss-danger);
    }
    #vacnet-clip-history .vacnet-clip-history-tag.bot,
    #vacnet-clip-history .vacnet-clip-history-tag.botaim,
    #vacnet-clip-history .vacnet-clip-history-tag.botwh,
    #vacnet-clip-history .vacnet-clip-history-tag.botbhop,
    #vacnet-clip-history .vacnet-clip-history-tag.botaimwh,
    #vacnet-clip-history .vacnet-clip-history-tag.botaimbhop,
    #vacnet-clip-history .vacnet-clip-history-tag.botwhbhop,
    #vacnet-clip-history .vacnet-clip-history-tag.botrage {
      background: color-mix(in srgb, var(--ss-accent-secondary) 72%, var(--ss-raised));
    }

    .vacnet-enhanced .submitverdictbutton {
      box-sizing: border-box !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      width: 100% !important;
      max-width: 100% !important;
      height: 48px !important;
      margin: 0 !important;
      padding: 0 12px !important;
      border-radius: 12px !important;
      font: 750 0.9375rem/1 var(--ss-font) !important;
      background: linear-gradient(135deg, var(--ss-accent-hover), var(--ss-accent)) !important;
      color: var(--ss-on-accent) !important;
      border: 1px solid color-mix(in srgb, var(--ss-accent-hover) 75%, white) !important;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.22), 0 10px 28px rgba(242, 163, 58, 0.18) !important;
      transition: filter 150ms ease, transform 150ms ease, box-shadow 150ms ease !important;
    }

    .vacnet-enhanced .submitverdictbutton:hover {
      filter: brightness(1.06);
      transform: translateY(-1px);
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 13px 32px rgba(242, 163, 58, 0.24) !important;
    }

    .vacnet-enhanced .submitverdictbutton.vacnet-proceed-armed {
      background: linear-gradient(135deg, color-mix(in srgb, var(--ss-danger) 82%, white), var(--ss-danger)) !important;
      border-color: color-mix(in srgb, var(--ss-danger) 70%, white) !important;
      color: #21080d !important;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.22), 0 0 0 3px rgba(255, 101, 119, 0.12), 0 12px 30px rgba(255, 101, 119, 0.19) !important;
    }

    .vacnet-enhanced .submitverdictbutton.vacnet-proceed-armed:hover {
      filter: brightness(1.06);
    }

    .vacnet-enhanced .submitverdictbutton .vacnet-proceed-kbd {
      display: inline-block;
      margin-left: 0.45em;
      padding: 0.1em 0.35em;
      border-radius: 3px;
      font: 600 0.6875rem/1.2 var(--ss-mono);
      color: color-mix(in srgb, var(--ss-on-accent) 72%, transparent);
      background: color-mix(in srgb, var(--ss-on-accent) 12%, transparent);
      border: 1px solid color-mix(in srgb, var(--ss-on-accent) 22%, transparent);
    }

    #vacnet-toast-stack {
      position: fixed;
      z-index: 2147483645;
      right: 22px;
      bottom: 22px;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 8px;
      pointer-events: none;
    }

    #vacnet-toast-stack .vacnet-toast {
      max-width: min(360px, calc(100vw - 32px));
      padding: 10px 13px;
      border: 1px solid var(--ss-border);
      border-left: 3px solid var(--ss-accent);
      border-radius: 10px;
      background: color-mix(in srgb, var(--ss-raised) 92%, transparent);
      box-shadow: 0 18px 42px rgba(0, 0, 0, 0.32);
      backdrop-filter: blur(14px);
      color: var(--ss-text);
      font: 600 0.78rem/1.35 var(--ss-font);
      animation: vacnet-toast-in 180ms ease-out both;
    }

    #vacnet-toast-stack .vacnet-toast.error { border-left-color: var(--ss-danger); }
    #vacnet-toast-stack .vacnet-toast.success { border-left-color: var(--ss-verdict-innocent); }
    #vacnet-toast-stack .vacnet-toast.is-leaving { animation: vacnet-toast-out 160ms ease-in both; }

    @keyframes vacnet-toast-in {
      from { opacity: 0; transform: translateY(8px) scale(0.98); }
      to { opacity: 1; transform: translateY(0) scale(1); }
    }

    @keyframes vacnet-toast-out {
      to { opacity: 0; transform: translateY(6px) scale(0.98); }
    }

    .vacnet-enhanced .backbutton {
      background: var(--ss-raised) !important;
      color: var(--ss-text) !important;
      border: 1px solid var(--ss-border) !important;
    }

    .vacnet-enhanced .footer-container,
    .vacnet-enhanced .vacnet-footer-hidden { display: none !important; }

    .vacnet-enhanced #statustext,
    .vacnet-enhanced .status-text-container { display: none !important; }

    html.vacnet-submit-loading-active,
    html.vacnet-submit-loading-active body {
      overflow: hidden !important;
    }

    #vacnet-submit-loading {
      position: fixed;
      inset: 0;
      z-index: 2147483646;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 14px;
      background: color-mix(in srgb, #07090d 86%, transparent);
      backdrop-filter: blur(10px) saturate(0.9);
      color: #f4f7fb;
      font: 500 0.9375rem/1.35 var(--ss-font, system-ui, sans-serif);
      pointer-events: all;
    }

    #vacnet-submit-loading[hidden] {
      display: none !important;
    }

    #vacnet-submit-loading .vacnet-submit-spinner {
      width: 42px;
      height: 42px;
      border: 3px solid rgba(154, 189, 174, 0.18);
      border-top-color: #f2a33a;
      border-radius: 50%;
      animation: vacnet-submit-spin 0.75s linear infinite;
    }

    #vacnet-submit-loading .vacnet-submit-loading-text {
      margin: 0;
      color: #a7b2c1;
      letter-spacing: 0.01em;
    }

    @keyframes vacnet-submit-spin {
      to { transform: rotate(360deg); }
    }

    @media (max-height: 820px) and (min-width: 1181px) {
      .vacnet-enhanced .PageHeader { padding-block: 8px !important; }
      .vacnet-enhanced .page-container { padding-block: 10px 12px !important; }
      #vacnet-clip-history { padding: 10px 12px; }
      #vacnet-clip-history .vacnet-review-head { margin-bottom: 8px; }
      #vacnet-clip-history .vacnet-clip-list { max-height: 76px; }
      .vacnet-enhanced .verdict-block { padding: 7px 0 !important; }
      #vacnet-enhance-bar { padding-block: 9px 10px; }
      #vacnet-enhance-bar .vacnet-advanced-body { max-height: 150px; }
      #vacnet-shift-speed { padding-block: 7px 6px; }
    }

    @media (max-width: 1180px) {
      .vacnet-enhanced {
        height: auto;
        min-height: 100dvh;
        max-height: none;
        overflow-y: auto !important;
      }
      .vacnet-enhanced .page-container { overflow: visible; }
      .vacnet-enhanced .flex-row-wrap { flex-wrap: wrap !important; overflow-y: auto; }
      .vacnet-enhanced .verdict-column,
      .vacnet-enhanced .verdict-column.size-for-column {
        width: 100% !important;
        max-width: 100% !important;
        min-width: 0 !important;
        flex: 1 1 100% !important;
      }
      .vacnet-enhanced .videocontainer { min-height: min(54dvh, 620px); }
      .vacnet-enhanced .verdicts-container { overflow: visible !important; }
      #vacnet-shift-speed { margin-top: 0; }
    }

    @media (max-width: 680px) {
      .vacnet-enhanced .PageHeader { gap: 10px !important; }
      .vacnet-enhanced .PageHeader .ClipCount { display: none !important; }
      .vacnet-enhanced .PageHeader .right p { display: none !important; }
      .vacnet-enhanced .page-container { padding-inline: 10px !important; }
      .vacnet-enhanced .flex-row-wrap { gap: 10px !important; }
      #vacnet-clip-history .vacnet-clip-meta { align-items: flex-start; flex-direction: column; gap: 4px; }
      #vacnet-enhance-bar .vacnet-enhance-bar-presets button { flex-basis: calc((100% - 8px) / 2); }
      #vacnet-enhance-bar .vacnet-advanced-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      #vacnet-controls .vacnet-hints { white-space: normal; }
      #vacnet-toast-stack { right: 12px; bottom: 12px; }
    }

    @media (prefers-reduced-motion: reduce) {
      .vacnet-enhanced *,
      #vacnet-submit-loading *,
      #vacnet-toast-stack * {
        scroll-behavior: auto !important;
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
    }
    body.demoscope-empty-queue { height:auto !important; min-height:100vh; overflow-x:hidden !important; overflow-y:auto !important; background:radial-gradient(ellipse at 50% 0%,#182331 0,#090c12 48rem,#07090d 100%) !important; }
    body.demoscope-empty-queue .PageContents { display:flex !important; align-items:center !important; justify-content:center !important; min-height:calc(100vh - 64px) !important; min-height:calc(100dvh - 64px) !important; padding:clamp(22px,5vw,64px) 16px !important; box-sizing:border-box !important; }
    .demoscope-queue-notice { width:min(760px,100%); margin:0 auto !important; padding:clamp(24px,5vw,42px) !important; box-sizing:border-box; border:1px solid var(--ss-border) !important; border-radius:18px; background:linear-gradient(145deg,rgba(20,27,37,.98),rgba(10,14,21,.98)) !important; color:var(--ss-text) !important; box-shadow:var(--ss-shadow); text-align:left !important; }
    .demoscope-queue-notice-kicker { margin:0 0 10px; color:var(--ss-accent); font:800 .7rem/1.4 var(--ss-font); letter-spacing:.14em; text-transform:uppercase; }
    .demoscope-queue-notice h1 { margin:0 0 14px; color:var(--ss-text); font:750 clamp(1.45rem,3vw,2rem)/1.2 var(--ss-font); }
    .demoscope-queue-notice p { margin:0; color:var(--ss-text-secondary); font:450 1rem/1.7 var(--ss-font); }
    .demoscope-queue-notice .demoscope-queue-limit { margin-top:18px; padding:15px 16px; border:1px solid rgba(242,163,58,.25); border-radius:11px; background:rgba(242,163,58,.07); color:var(--ss-text); }
    .demoscope-queue-notice .demoscope-queue-next { margin-top:16px; padding:15px 16px; border:1px solid var(--ss-border-subtle); border-radius:11px; background:rgba(9,12,18,.55); }
    @media(max-width:600px) { body.demoscope-empty-queue .PageContents { justify-content:flex-start !important; padding:22px 12px !important; } .demoscope-queue-notice { border-radius:14px; } .demoscope-queue-notice p { font-size:.94rem; } }
    .demoscope-custom-footer[hidden],.demoscope-custom-footer [hidden]{display:none!important}.demoscope-custom-footer { display:flex; flex-direction:column; align-items:center; gap:9px; width:100%; margin-top:auto; padding:15px 20px 12px; box-sizing:border-box; background:rgba(20,27,37,.94); color:var(--ss-text-tertiary); text-align:center; }
    .demoscope-custom-footer-links { display:flex; flex-wrap:wrap; justify-content:center; gap:18px; }
    .demoscope-custom-footer a { color:var(--ss-accent); font:500 .82rem/1.4 var(--ss-font); text-decoration:underline; text-underline-offset:3px; }
    .demoscope-custom-footer a:hover { color:var(--ss-accent-hover); }
    .demoscope-custom-footer p { max-width:1100px; margin:0; color:var(--ss-text-tertiary); font:400 .68rem/1.45 var(--ss-font); }
    .demoscope-queue-language { display:flex; align-items:center; justify-content:flex-end; gap:10px; margin:0 0 20px; color:var(--ss-text-secondary); font:600 .78rem var(--ss-font); }
    .demoscope-queue-language .vacnet-language-picker { position:relative; }
    .demoscope-queue-language .vacnet-language-trigger { display:flex; align-items:center; gap:8px; min-height:38px; padding:0 10px; border:1px solid var(--ss-border); border-radius:999px; background:var(--ss-raised); color:var(--ss-text); font:600 .78rem var(--ss-font); cursor:pointer; }
    .demoscope-queue-language .vacnet-language-flag { display:block; flex:0 0 20px; width:20px; height:14px; border-radius:2px; overflow:hidden; }
    .demoscope-queue-language .vacnet-language-options { position:fixed; z-index:2147483646; max-height:55vh; overflow:auto; padding:5px; border:1px solid var(--ss-border); border-radius:12px; background:var(--ss-raised); box-shadow:0 18px 48px #0009; }
    .demoscope-queue-language .vacnet-language-options[hidden] { display:none; }
    .demoscope-queue-language .vacnet-language-option { display:flex; align-items:center; gap:10px; width:100%; min-height:36px; padding:6px 9px; border:0; border-radius:7px; background:transparent; color:var(--ss-text); text-align:left; font:500 .82rem var(--ss-font); cursor:pointer; }
    .demoscope-queue-language .vacnet-language-option:hover,.demoscope-queue-language .vacnet-language-option[aria-selected="true"] { background:var(--ss-raised-hover); color:var(--ss-accent); }
    .demoscope-queue-first-seen { margin-top:13px !important; color:var(--ss-text-tertiary) !important; font:500 .78rem/1.5 var(--ss-mono) !important; }
    body.demoscope-empty-queue .PageContents { flex:1 0 auto; }
    @media(max-width:600px) { .demoscope-queue-language { align-items:stretch; flex-direction:column; } .demoscope-custom-footer { padding:14px 12px; } .demoscope-custom-footer-links { gap:12px; } }
  `);

  function parseSegmentBounds() {
    for (const script of document.scripts) {
      const text = script.textContent || "";
      const startMatch = text.match(
        /\b(?:const|let|var)\s+startTime\s*=\s*(-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?)/i,
      );
      if (!startMatch) continue;

      const startTime = parseFloat(startMatch[1]);
      let endTime = null;
      const endLiteral = text.match(
        /\b(?:const|let|var)\s+endTime\s*=\s*(-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?)/i,
      );
      const endDelta = text.match(
        /\b(?:const|let|var)\s+endTime\s*=\s*startTime\s*\+\s*((?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?)/i,
      );

      if (endLiteral) endTime = parseFloat(endLiteral[1]);
      else if (endDelta) endTime = startTime + parseFloat(endDelta[1]);

      if (
        Number.isFinite(startTime) &&
        Number.isFinite(endTime) &&
        endTime > startTime
      ) {
        return { startTime, endTime, duration: endTime - startTime };
      }
    }
    return null;
  }

  function formatSegmentTime(seconds) {
    const total = Math.max(0, seconds);
    const whole = Math.floor(total);
    const frac = Math.floor((total - whole) * 100);
    const minutes = Math.floor(whole / 60);
    const remainder = whole % 60;
    return `${minutes}:${String(remainder).padStart(2, "0")}.${String(frac).padStart(2, "0")}`;
  }

  function getVideoElement() {
    return (
      document.getElementById("video_html5_api") ||
      document.querySelector("#video video, .video-js video")
    );
  }

  function getVjsPlayer() {
    try {
      if (typeof PAGE.videojs === "function") {
        const player = PAGE.videojs.getPlayer("video");
        if (player && !player.isDisposed?.()) return player;
      }
    } catch {
      /* ignore */
    }
    return null;
  }

  function createPlayerAdapter() {
    const video = getVideoElement();
    const vjs = getVjsPlayer();
    if (!video && !vjs) return null;

    const rootEl = () =>
      vjs?.el?.() || video?.closest(".video-js") || video?.parentElement;

    return {
      video,
      vjs,
      el: rootEl,
      currentTime(time) {
        if (time !== undefined) {
          if (vjs) vjs.currentTime(time);
          else if (video) video.currentTime = time;
        }
        return vjs ? vjs.currentTime() : (video?.currentTime ?? 0);
      },
      paused() {
        return vjs ? vjs.paused() : Boolean(video?.paused);
      },
      pause() {
        if (vjs) vjs.pause();
        else video?.pause();
      },
      play() {
        if (vjs) return vjs.play();
        return video?.play();
      },
      playbackRate(rate) {
        if (rate !== undefined) {
          if (vjs) vjs.playbackRate(rate);
          else if (video) video.playbackRate = rate;
        }
        return vjs ? vjs.playbackRate() : (video?.playbackRate ?? 1);
      },
      playbackRates(rates) {
        vjs?.playbackRates?.(rates);
      },
      muted(value) {
        if (value !== undefined) {
          if (vjs) vjs.muted(value);
          else if (video) video.muted = value;
        }
        return vjs ? vjs.muted() : Boolean(video?.muted);
      },
      on(event, handler) {
        if (vjs) vjs.on(event, handler);
        else if (video) video.addEventListener(event, handler);
      },
      isFullscreen() {
        return vjs?.isFullscreen?.() ?? Boolean(document.fullscreenElement);
      },
      requestFullscreen() {
        if (vjs?.requestFullscreen) return vjs.requestFullscreen();
        return rootEl()?.requestFullscreen?.();
      },
      exitFullscreen() {
        if (vjs?.exitFullscreen) return vjs.exitFullscreen();
        return document.exitFullscreen?.();
      },
    };
  }

  function waitForPlayerAdapter(timeoutMs = 20000) {
    return new Promise((resolve, reject) => {
      const tryResolve = () => {
        const adapter = createPlayerAdapter();
        if (adapter) {
          resolve(adapter);
          return true;
        }
        return false;
      };

      if (tryResolve()) return;

      const started = Date.now();
      const timer = window.setInterval(() => {
        if (tryResolve()) window.clearInterval(timer);
        else if (Date.now() - started > timeoutMs) {
          window.clearInterval(timer);
          reject(new Error("VACNet video player not found"));
        }
      }, 100);
    });
  }

  function clampSegment(time, bounds) {
    return Math.min(bounds.endTime, Math.max(bounds.startTime, time));
  }

  function segmentProgress(time, bounds) {
    if (bounds.duration <= 0) return 0;
    return (clampSegment(time, bounds) - bounds.startTime) / bounds.duration;
  }

  function installCustomControls(player, bounds, refreshDisplay) {
    const container = getVideoContainer();
    if (!container || container.querySelector("#vacnet-controls")) return;

    const controls = document.createElement("div");
    controls.id = "vacnet-controls";
    controls.innerHTML = `
      <div class="vacnet-seek-wrap">
        <input type="range" id="vacnet-seek" min="0" max="1000" value="0" step="1" aria-label="${tr("segmentPosition")}">
        <span id="vacnet-time">0:00.00 / ${formatSegmentTime(bounds.duration)}</span>
      </div>
      <div class="vacnet-hints" aria-label="${tr("hotkeys")}">${buildHintsInnerMarkup()}
      </div>
    `;
    container.appendChild(controls);

    const seek = controls.querySelector("#vacnet-seek");
    const timeEl = controls.querySelector("#vacnet-time");
    let scrubbing = false;

    const render = () => {
      const rel = clampSegment(player.currentTime(), bounds) - bounds.startTime;
      const pct = segmentProgress(player.currentTime(), bounds);
      if (!scrubbing && seek instanceof HTMLInputElement) {
        seek.value = String(Math.round(pct * 1000));
      }
      if (seek instanceof HTMLInputElement) {
        seek.setAttribute(
          "aria-valuetext",
          `${formatSegmentTime(rel)} ${tr("of")} ${formatSegmentTime(bounds.duration)}`,
        );
      }
      if (timeEl) {
        timeEl.textContent = `${formatSegmentTime(rel)} / ${formatSegmentTime(bounds.duration)}`;
      }
    };

    refreshDisplay.current = render;
    render();

    if (seek instanceof HTMLInputElement) {
      seek.addEventListener("pointerdown", () => {
        scrubbing = true;
      });
      seek.addEventListener("input", () => {
        const ratio = Number(seek.value) / 1000;
        player.currentTime(bounds.startTime + ratio * bounds.duration);
        render();
      });
      const finishScrubbing = () => {
        scrubbing = false;
        render();
      };
      seek.addEventListener("pointerup", finishScrubbing);
      seek.addEventListener("pointercancel", finishScrubbing);
      seek.addEventListener("change", finishScrubbing);
      seek.addEventListener("blur", finishScrubbing);
    }
  }

  let setShiftSpeedRef = null;
  let playerEnhanceInstalled = false;
  let proceedShortcutInstalled = false;
  let layoutMutationPaused = false;
  let verdictLabelsFixScheduled = false;
  let proceedArmed = false;

  function pauseLayoutMutations(run) {
    layoutMutationPaused = true;
    try {
      run();
    } finally {
      layoutMutationPaused = false;
    }
  }

  // Player hotkeys (Space, M, F, arrows...) must keep working while a verdict
  // radio has focus - that is exactly where focus lands after clicking a
  // verdict. Text fields, selects and other inputs still block them.
  function isPlayerShortcutBlocked(target) {
    if (target instanceof HTMLInputElement && target.type === "radio") return false;
    return isShortcutBlocked(target);
  }

  function isShortcutBlocked(target) {
    if (!(target instanceof HTMLElement)) return false;
    return Boolean(
      target.closest(
        'input, textarea, select, [contenteditable="true"], [role="textbox"]',
      ),
    );
  }

  function formatShiftSpeedLabel(rate) {
    return `${rate}×`;
  }

  function buildShiftSpeedSelectOptions(selectedRate) {
    return SHIFT_SPEEDS.map(
      (rate) =>
        `<option value="${rate}"${rate === selectedRate ? " selected" : ""}>${formatShiftSpeedLabel(rate)}</option>`,
    ).join("");
  }

  function readStoredShiftSpeed() {
    const raw =
      localStorage.getItem(SHIFT_SPEED_STORAGE_KEY) ||
      localStorage.getItem("vacnetShiftBoostSpeed") ||
      "";
    const saved = parseFloat(raw);
    return SHIFT_SPEEDS.includes(saved) ? saved : DEFAULT_SHIFT_SPEED;
  }

  function readStoredVerdictRandomizer() {
    try {
      const stored = localStorage.getItem(VERDICT_RANDOMIZER_STORAGE_KEY);
      return stored === null ? false : stored === "true";
    } catch {
      return false;
    }
  }

  function installPlayerEnhancements(player, bounds) {
    if (playerEnhanceInstalled) return;
    playerEnhanceInstalled = true;

    const htmlVideo = player.video || getVideoElement();
    let pausedAtEnd = false;
    let userPaused = false;
    let segmentReady = false;
    const refreshDisplay = { current: () => {} };

    player.playbackRates([...new Set([BASE_PLAYBACK_SPEED, ...SHIFT_SPEEDS])]);
    installCustomControls(player, bounds, refreshDisplay);

    let shiftSpeedActive = false;
    let shiftSpeedRate = readStoredShiftSpeed();

    const applyPlayerRate = () => {
      player.playbackRate(
        shiftSpeedActive ? shiftSpeedRate : BASE_PLAYBACK_SPEED,
      );
    };

    const setShiftSpeed = (rate) => {
      if (!SHIFT_SPEEDS.includes(rate)) rate = DEFAULT_SHIFT_SPEED;
      shiftSpeedRate = rate;
      const select = document.getElementById("vacnet-speed-select");
      if (select instanceof HTMLSelectElement) select.value = String(rate);
      try {
        localStorage.setItem(SHIFT_SPEED_STORAGE_KEY, String(rate));
      } catch {
        /* ignore */
      }
      if (shiftSpeedActive) applyPlayerRate();
    };

    const setShiftSpeedActive = (active) => {
      if (shiftSpeedActive === active) return;
      shiftSpeedActive = active;
      applyPlayerRate();
    };

    setShiftSpeedRef = setShiftSpeed;

    let rafId = 0;

    const paintLoop = () => {
      refreshDisplay.current();
      if (!player.paused()) rafId = requestAnimationFrame(paintLoop);
    };

    const startPaint = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(paintLoop);
    };

    const stopPaint = () => {
      cancelAnimationFrame(rafId);
      refreshDisplay.current();
    };

    const armSegmentControl = () => {
      if (segmentReady) return;
      segmentReady = true;
      refreshDisplay.current();
    };

    let segmentInitDone = false;

    const finishSegmentInit = () => {
      if (segmentInitDone) return;
      segmentInitDone = true;
      armSegmentControl();
      setShiftSpeed(readStoredShiftSpeed());
      applyPlayerRate();
    };

    const playFromSegmentStart = () => {
      userPaused = false;
      pausedAtEnd = false;
      player.currentTime(bounds.startTime);
      refreshDisplay.current();
      player.play()?.catch?.(() => {});
    };

    const pinAtSegmentEnd = () => {
      userPaused = true;
      pausedAtEnd = true;
      player.pause();
      player.currentTime(bounds.endTime);
      refreshDisplay.current();
    };

    const handleSegmentBounds = () => {
      if (!segmentReady) return;

      const t = player.currentTime();
      if (!Number.isFinite(t)) return;

      if (t >= bounds.endTime - 0.04) {
        if (!player.paused()) {
          player.currentTime(bounds.startTime);
          refreshDisplay.current();
          return;
        }
        if (userPaused) {
          if (t < bounds.endTime - 0.02) player.currentTime(bounds.endTime);
          pausedAtEnd = true;
          refreshDisplay.current();
          return;
        }
        player.currentTime(bounds.startTime);
        refreshDisplay.current();
        player.play()?.catch?.(() => {});
        return;
      }

      if (t < bounds.startTime - 1 / 60) {
        player.currentTime(bounds.startTime);
        refreshDisplay.current();
        return;
      }

      pausedAtEnd = false;
    };

    player.on("playing", finishSegmentInit);
    player.on("loadeddata", () => {
      window.setTimeout(finishSegmentInit, 900);
    });
    if (!player.paused() && htmlVideo && htmlVideo.readyState >= 2) {
      finishSegmentInit();
    }

    player.on("play", () => {
      userPaused = false;
      pausedAtEnd = false;
      startPaint();
    });
    player.on("pause", stopPaint);
    player.on("timeupdate", handleSegmentBounds);
    player.on("seeked", () => {
      if (!segmentReady) return;
      const t = player.currentTime();
      if (!Number.isFinite(t)) return;
      if (t < bounds.startTime || t > bounds.endTime) {
        player.currentTime(clampSegment(t, bounds));
      }
      refreshDisplay.current();
    });

    const seekBy = (delta) => {
      const wasPaused = player.paused();
      player.currentTime(clampSegment(player.currentTime() + delta, bounds));
      refreshDisplay.current();
      if (!wasPaused) {
        userPaused = false;
        pausedAtEnd = false;
        player.play()?.catch?.(() => {});
      }
    };

    const stepFrame = (direction) => {
      userPaused = true;
      player.pause();
      player.currentTime(
        clampSegment(player.currentTime() + direction * FRAME_STEP, bounds),
      );
      refreshDisplay.current();
    };

    const togglePlay = () => {
      playUiSound("click");
      if (player.paused()) {
        if (pausedAtEnd || player.currentTime() >= bounds.endTime - 0.04) {
          playFromSegmentStart();
          return;
        }
        userPaused = false;
        player.play()?.catch?.(() => {});
      } else {
        userPaused = true;
        if (player.currentTime() >= bounds.endTime - 0.04) {
          pinAtSegmentEnd();
          return;
        }
        player.pause();
      }
    };

    const toggleFullscreen = () => {
      playUiSound("click");
      const result = player.isFullscreen()
        ? player.exitFullscreen()
        : player.requestFullscreen();
      result?.catch?.(() => {});
    };

    const toggleMute = () => {
      playUiSound("toggle");
      player.muted(!player.muted());
    };

    const hasChordModifier = (event) =>
      event.metaKey || event.ctrlKey || event.altKey;

    window.addEventListener(
      "keydown",
      (event) => {
        if (keyCaptureActive || isModalOpen()) return;
        if (isPlayerShortcutBlocked(event.target)) return;
        if (!getVideoContainer()) return;
        if (hasChordModifier(event)) return;

        const code = normalizeKeyCode(event.code);
        const action = getActionForEvent(event);
        const playerAction = Boolean(action) && !["settings", "proceed", "cancel"].includes(action);
        const siteKey = code === "Space" || code === "KeyF" || code === "KeyM";
        // The page / video.js also react to these keys, which made a toggle
        // fire twice (= no visible change). Claim them, bound or free.
        if (siteKey && (playerAction || !action)) event.stopImmediatePropagation();
        if (!playerAction) return;

        const isToggle = action === "playPause" || action === "mute" || action === "fullscreen";
        if (event.repeat && (isToggle || action.startsWith("quick"))) {
          if (isToggle) event.preventDefault();
          return;
        }

        switch (action) {
          case "seekBack":
            event.preventDefault();
            seekBy(-ARROW_JUMP_SEC);
            break;
          case "seekForward":
            event.preventDefault();
            seekBy(ARROW_JUMP_SEC);
            break;
          case "frameBack":
            event.preventDefault();
            stepFrame(-1);
            break;
          case "frameForward":
            event.preventDefault();
            stepFrame(1);
            break;
          case "playPause":
            event.preventDefault();
            togglePlay();
            break;
          case "fullscreen":
            event.preventDefault();
            toggleFullscreen();
            break;
          case "mute":
            event.preventDefault();
            toggleMute();
            break;
          case "speedBoost":
            setShiftSpeedActive(true);
            break;
          default: {
            const quick = action.match(/^quick([1-5])$/);
            if (!quick) break;
            const slot = `Digit${quick[1]}`;
            if (isCheatingMode()) {
              const kind = CHEATING_KEYS[slot];
              if (kind) {
                event.preventDefault();
                selectCheatingVerdict(kind);
              }
              break;
            }
            const preset = PRESET_KEYS[slot];
            if (preset) {
              event.preventDefault();
              applyPreset(preset, { announce: true });
            }
            break;
          }
        }
      },
      true,
    );

    window.addEventListener(
      "keyup",
      (event) => {
        if (keyCaptureActive || isModalOpen()) return;
        const code = normalizeKeyCode(event.code);
        if (
          code === "Space" &&
          !hasChordModifier(event) &&
          !isPlayerShortcutBlocked(event.target) &&
          getVideoContainer()
        ) {
          // Stop a focused button/radio from also "clicking" on Space release.
          event.preventDefault();
          event.stopImmediatePropagation();
        }
        const boostKey = getBinding("speedBoost");
        if (boostKey && code === boostKey) setShiftSpeedActive(false);
      },
      true,
    );

    PAGE.addEventListener("blur", () => setShiftSpeedActive(false));

    if (htmlVideo) {
      htmlVideo.addEventListener(
        "dblclick",
        (event) => {
          event.preventDefault();
          toggleFullscreen();
        },
        true,
      );
    }
  }

  function applyDefaultVerdicts(root = document) {
    for (const field of VERDICT_FIELDS) {
      const group = root.querySelectorAll(`input[name="${field}"]`);
      if (!group.length) continue;
      if ([...group].some((input) => input.checked)) continue;

      const uncertain = root.querySelector(`#${field}_${DEFAULT_VERDICT}`);
      if (uncertain instanceof HTMLInputElement) {
        uncertain.checked = true;
        uncertain.dispatchEvent(new Event("change", { bubbles: true }));
      }
    }
  }

  function getSelectedVerdictState() {
    return Object.fromEntries(
      VERDICT_FIELDS.map((field) => [
        field,
        document.querySelector(`input[name="${field}"]:checked`)?.value || null,
      ]),
    );
  }

  function detectActivePreset() {
    const state = getSelectedVerdictState();
    for (const [name, preset] of Object.entries(PRESETS)) {
      if (VERDICT_FIELDS.every((field) => state[field] === preset[field])) {
        return name;
      }
    }
    return null;
  }

  function syncPresetButtons() {
    const activePreset = detectActivePreset();
    document
      .querySelectorAll("#vacnet-enhance-bar button[data-preset]")
      .forEach((button) => {
        button.setAttribute(
          "aria-pressed",
          String(button.getAttribute("data-preset") === activePreset),
        );
      });

    const advancedCurrent = document.querySelector(
      "#vacnet-enhance-bar .vacnet-advanced-current",
    );
    if (advancedCurrent instanceof HTMLElement) {
      const hasAdvancedPreset = ADVANCED_PRESET_NAMES.has(activePreset);
      advancedCurrent.hidden = !hasAdvancedPreset;
      advancedCurrent.textContent = hasAdvancedPreset
        ? getPresetLabel(activePreset)
        : "";
    }

    return activePreset;
  }

  async function applyPreset(name, { announce = false } = {}) {
    const preset = PRESETS[name];
    if (!preset || presetApplicationInProgress) return false;
    playUiSound("select");
    presetApplicationInProgress = true;
    const randomize = verdictRandomizerEnabled;
    const entries = Object.entries(preset);
    const presetButtons = document.querySelectorAll("#vacnet-enhance-bar button[data-preset]");
    presetButtons.forEach((button) => { button.disabled = true; });

    try {
      if (randomize) {
        for (let i = entries.length - 1; i > 0; i -= 1) {
          const j = Math.floor(Math.random() * (i + 1));
          [entries[i], entries[j]] = [entries[j], entries[i]];
        }
      }

      for (const [field, value] of entries) {
        const input = document.getElementById(`${field}_${value}`);
        if (!(input instanceof HTMLInputElement) || input.checked) continue;
        input.click();
        if (randomize) {
          const delay = Math.floor(Math.random() * 401) + 200;
          await new Promise((resolve) => window.setTimeout(resolve, delay));
        }
      }
    } catch (error) {
      console.warn(LOG_PREFIX, "Could not apply verdict preset", error);
    } finally {
      presetButtons.forEach((button) => { button.disabled = false; });
      presetApplicationInProgress = false;
    }

    syncPresetButtons();
    resetProceedArmed();
    if (announce) showToast(`${tr("preset")}: ${getPresetLabel(name)}`, "success");
    return true;
  }

  function normalizeVerdictLabels(root = document) {
    root.querySelectorAll("label").forEach((label) => {
      if (!label.closest(".verdict-column")) return;
      label
        .querySelectorAll("b")
        .forEach((el) => {
          el.replaceWith(document.createTextNode(el.textContent || ""));
        });
    });
  }

  function applyVerdictSectionTitles(root = document) {
    root.querySelectorAll(".verdict-block").forEach((block) => {
      const buttons = block.querySelector(".verdictbuttons");
      const match = buttons?.id?.match(/^verdictbuttons_(.+)$/);
      if (!match) return;

      const title = tr(VERDICT_SECTION_TITLES[match[1]]);
      if (!title) return;

      let titleEl = block.querySelector(".vacnet-verdict-title");
      if (!titleEl) {
        titleEl = document.createElement("div");
        titleEl.className = "vacnet-verdict-title";
        titleEl.innerHTML = '<span class="vacnet-verdict-title-text"></span>';
        block.insertBefore(titleEl, buttons);
      }
      let textEl = titleEl.querySelector(".vacnet-verdict-title-text");
      if (!textEl) {
        titleEl.textContent = "";
        textEl = document.createElement("span");
        textEl.className = "vacnet-verdict-title-text";
        titleEl.append(textEl);
      }
      if (textEl.textContent !== title) textEl.textContent = title;
      ensureVerdictHelp(block, titleEl, title, match[1]);
    });
    localizeCheatingVerdicts();
  }

  // "?" next to each section title: shows what the category means.
  function ensureVerdictHelp(block, titleEl, title, field) {
    // DemoScope's own localized text first (Valve's page falls back to English
    // for some languages); the site's wording only if we have no row for it.
    const helpKey = VERDICT_SECTION_HELP[field];
    const own = helpKey ? tr(helpKey) : "";
    const description = (own && own !== helpKey ? own : "")
      || block.querySelector(".verdict-desc")?.textContent?.trim();
    if (!description) return;

    let button = titleEl.querySelector(".vacnet-verdict-help-btn");
    if (!button) {
      button = document.createElement("button");
      button.type = "button";
      button.className = "vacnet-verdict-help-btn";
      button.textContent = "?";
      button.tabIndex = -1; // keep Enter/Space for the review hotkeys
      button.setAttribute("aria-expanded", "false");
      titleEl.append(button);
    }
    button.setAttribute("aria-label", title);

    let panel = block.querySelector(".vacnet-verdict-help");
    if (!panel) {
      panel = document.createElement("div");
      panel.className = "vacnet-verdict-help";
      panel.setAttribute("role", "note");
      panel.hidden = true;
      titleEl.after(panel);
    }
    if (panel.textContent !== description) panel.textContent = description;
    installVerdictHelpHandlers();
  }

  let verdictHelpHandlersInstalled = false;

  function closeVerdictHelp(except = null) {
    document.querySelectorAll(".vacnet-verdict-help:not([hidden])").forEach((panel) => {
      if (panel === except) return;
      panel.hidden = true;
      panel.closest(".verdict-block")
        ?.querySelector(".vacnet-verdict-help-btn")
        ?.setAttribute("aria-expanded", "false");
    });
  }

  function installVerdictHelpHandlers() {
    if (verdictHelpHandlersInstalled) return;
    verdictHelpHandlersInstalled = true;

    document.addEventListener("click", (event) => {
      const target = event.target instanceof Element ? event.target : null;
      const button = target?.closest(".vacnet-verdict-help-btn");
      if (button) {
        event.preventDefault();
        const panel = button.closest(".verdict-block")?.querySelector(".vacnet-verdict-help");
        if (!panel) return;
        const open = panel.hidden;
        closeVerdictHelp(open ? panel : null);
        panel.hidden = !open;
        button.setAttribute("aria-expanded", String(open));
        playUiSound("click");
        button.blur(); // hand focus back so Space/M/arrows keep working
        return;
      }
      if (!target?.closest(".vacnet-verdict-help")) closeVerdictHelp();
    });

    document.addEventListener("keydown", (event) => {
      if (event.code === "Escape") closeVerdictHelp();
    });
  }

  function hideSiteFooter() {
    document.querySelectorAll(".footer-container").forEach((el) => {
      el.classList.add("vacnet-footer-hidden");
      el.style.setProperty("display", "none", "important");
    });
  }

  function showToast(message, type = "info", duration = 1800) {
    let stack = document.getElementById("vacnet-toast-stack");
    if (!stack) {
      stack = document.createElement("div");
      stack.id = "vacnet-toast-stack";
      (document.body || document.documentElement).appendChild(stack);
    }

    const toast = document.createElement("div");
    toast.className = `vacnet-toast ${type}`;
    toast.setAttribute("role", type === "error" ? "alert" : "status");
    toast.setAttribute("aria-live", type === "error" ? "assertive" : "polite");
    toast.textContent = message;
    stack.appendChild(toast);

    window.setTimeout(() => {
      toast.classList.add("is-leaving");
      window.setTimeout(() => toast.remove(), 180);
    }, duration);
  }

  function markSubmitPending() {
    try {
      sessionStorage.setItem(SUBMIT_PENDING_KEY, String(Date.now()));
      sessionStorage.setItem(SUBMIT_PREV_VOD_KEY, extractVodId());
    } catch {
      /* ignore */
    }
  }

  function isSubmitPending() {
    try {
      return Boolean(sessionStorage.getItem(SUBMIT_PENDING_KEY));
    } catch {
      return false;
    }
  }

  function clearSubmitPending() {
    try {
      sessionStorage.removeItem(SUBMIT_PENDING_KEY);
      sessionStorage.removeItem(SUBMIT_PREV_VOD_KEY);
    } catch {
      /* ignore */
    }
  }

  function showSubmitLoadingOverlay(message = tr("nextClip")) {
    let overlay = document.getElementById("vacnet-submit-loading");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.id = "vacnet-submit-loading";
      overlay.setAttribute("role", "status");
      overlay.setAttribute("aria-live", "polite");
      overlay.setAttribute("aria-busy", "true");
      overlay.innerHTML = `
        <div class="vacnet-submit-spinner" aria-hidden="true"></div>
        <p class="vacnet-submit-loading-text"></p>
      `;
      (document.body || document.documentElement).appendChild(overlay);
    }

    const text = overlay.querySelector(".vacnet-submit-loading-text");
    if (text) text.textContent = message;
    overlay.hidden = false;
    document.documentElement.classList.add("vacnet-submit-loading-active");
  }

  function hideSubmitLoadingOverlay() {
    clearSubmitPending();
    const overlay = document.getElementById("vacnet-submit-loading");
    if (overlay) overlay.hidden = true;
    document.documentElement.classList.remove("vacnet-submit-loading-active");
  }

  function bootSubmitLoadingIfPending() {
    if (!isSubmitPending()) return;
    showSubmitLoadingOverlay(tr("nextClip"));
  }

  function isReviewPageReady(prevVod, startedAt) {
    // Any verdict form counts: the classic four questions *and* the newer
    // single "cheating" question (there is no aimassist input in that one).
    const hasReviewUi = Boolean(
      getVideoContainer() &&
        document.querySelector('.verdictbuttons input[type="radio"]'),
    );
    if (!hasReviewUi) return false;

    const video = getVideoElement();
    const mediaReady =
      video instanceof HTMLVideoElement &&
      video.readyState >= 1 &&
      Boolean(video.currentSrc || video.src);
    if (!mediaReady) return false;

    const vod = extractVodId();
    if (vod && vod !== "unknown-vod" && prevVod && vod !== prevVod) {
      return true;
    }

    return Date.now() - startedAt > 2500;
  }

  async function finishSubmitLoadingWhenReady() {
    if (!isSubmitPending()) return;

    let prevVod = "";
    let startedAt = Date.now();
    try {
      prevVod = sessionStorage.getItem(SUBMIT_PREV_VOD_KEY) || "";
      startedAt = parseInt(sessionStorage.getItem(SUBMIT_PENDING_KEY) || "0", 10);
      if (!Number.isFinite(startedAt) || startedAt <= 0) startedAt = Date.now();
    } catch {
      /* ignore */
    }

    const deadline = Date.now() + 30000;
    const pageStartedAt = Date.now();
    while (Date.now() < deadline) {
      if (isReviewPageReady(prevVod, startedAt)) {
        hideSubmitLoadingOverlay();
        return;
      }
      // Not a clip page at all (empty queue, welcome page...): nothing to wait for.
      if (document.readyState === "complete" && !getVideoContainer() && Date.now() - pageStartedAt > 3000) {
        hideSubmitLoadingOverlay();
        return;
      }
      await new Promise((resolve) => window.setTimeout(resolve, 100));
    }

    hideSubmitLoadingOverlay();
    recordEvent("next clip did not load", "30 s timeout after submitting");
    playUiSound("error");
    showToast(settingText("settingsTimeout"), "error", 6200);
  }

  function extractVodId() {
    const video = getVideoElement();
    const src = video?.currentSrc || video?.src || "";
    const fileMatch = src.match(/\/([^/?#]+)\.webm/i);
    if (fileMatch) return fileMatch[1];
    const hashMatch = src.match(/csow_[a-f0-9]+/i);
    if (hashMatch) return hashMatch[0];
    return src.slice(-32) || "unknown-vod";
  }

  function getGameKey() {
    return `${GAME_HISTORY_KEY_PREFIX}${extractVodId()}`;
  }

  function getClipKey(bounds) {
    return `${extractVodId()}:${bounds.startTime.toFixed(3)}:${bounds.endTime.toFixed(3)}`;
  }

  function normalizeHistoryEntry(entry) {
    if (!entry || typeof entry !== "object") return null;
    const ts = Number(entry.ts);
    const summary = String(entry.summary || "");
    const segment = String(entry.segment || "").slice(0, 64);
    if (!Number.isFinite(ts) || ts <= 0 || !HISTORY_SUMMARIES.has(summary)) {
      return null;
    }
    return { ts, summary, segment };
  }

  function readHistoryEntries(store, key) {
    if (!Array.isArray(store[key])) return [];
    return store[key].map(normalizeHistoryEntry).filter(Boolean);
  }

  function getGameHistoryEntries(store) {
    const vodId = extractVodId();
    const prefixedKey = `${GAME_HISTORY_KEY_PREFIX}${vodId}`;
    const prefixed = readHistoryEntries(store, prefixedKey);
    if (prefixed.length) return prefixed;

    const legacyGame = readHistoryEntries(store, vodId);
    if (legacyGame.length) {
      store[prefixedKey] = legacyGame;
      delete store[vodId];
      writeClipHistoryStore(store);
      return legacyGame;
    }

    return [];
  }

  function getClipHistoryEntries(store, bounds) {
    return readHistoryEntries(store, getClipKey(bounds));
  }

  function formatClipId(vodId) {
    let hash = 0;
    for (let i = 0; i < vodId.length; i += 1) {
      hash = (hash * 31 + vodId.charCodeAt(i)) >>> 0;
    }
    return `#${String(hash % 10_000_000).padStart(7, "0")}`;
  }

  function formatRelativeTime(timestamp) {
    const deltaSec = Math.max(0, Math.floor((Date.now() - timestamp) / 1000));
    const formatter = new Intl.RelativeTimeFormat(getActiveLocale(), { numeric: "auto", style: "short" });
    if (deltaSec < 60) return formatter.format(0, "second");
    if (deltaSec < 3600) return formatter.format(-Math.floor(deltaSec / 60), "minute");
    if (deltaSec < 86400) return formatter.format(-Math.floor(deltaSec / 3600), "hour");
    if (deltaSec < 604800) return formatter.format(-Math.floor(deltaSec / 86400), "day");
    return formatter.format(-Math.floor(deltaSec / 604800), "week");
  }

  function readClipHistoryStore() {
    try {
      const parsed = JSON.parse(
        localStorage.getItem(CLIP_HISTORY_STORAGE_KEY) || "{}",
      );
      return parsed && typeof parsed === "object" && !Array.isArray(parsed)
        ? parsed
        : {};
    } catch {
      return {};
    }
  }

  function pruneHistoryStore(store) {
    const perKeyLimit = getHistoryPerKeyLimit();
    for (const key of Object.keys(store)) {
      if (!Array.isArray(store[key])) {
        delete store[key];
        continue;
      }
      store[key] = store[key]
        .map(normalizeHistoryEntry)
        .filter(Boolean)
        .slice(-perKeyLimit);
    }
    const candidates = Object.entries(store)
      .filter(([, entries]) => Array.isArray(entries))
      .map(([key, entries]) => ({
        key,
        latest: entries.reduce((max, entry) => {
          const ts = Number(entry?.ts);
          return Number.isFinite(ts) ? Math.max(max, ts) : max;
        }, 0),
      }))
      .sort((a, b) => b.latest - a.latest);

    for (const { key } of candidates.slice(getHistoryTotalLimit())) {
      delete store[key];
    }

  }

  function writeClipHistoryStore(store) {
    try {
      pruneHistoryStore(store);
      localStorage.setItem(CLIP_HISTORY_STORAGE_KEY, JSON.stringify(store));
      return true;
    } catch {
      /* ignore quota */
      return false;
    }
  }

  function summarizeCurrentVerdict() {
    return detectActivePreset() || "mixed";
  }

  function formatSummaryLabel(summary) {
    return getPresetLabel(summary);
  }

  function formatClockTime(seconds) {
    const total = Math.max(0, seconds);
    const mins = Math.floor(total / 60);
    const secs = total - mins * 60;
    if (mins > 0) {
      return `${mins}:${String(Math.floor(secs)).padStart(2, "0")}`;
    }
    return `${secs.toFixed(1)}s`;
  }

  function formatHumanSegment(bounds) {
    return `${formatClockTime(bounds.startTime)} → ${formatClockTime(bounds.endTime)}`;
  }

  function formatGameLabel() {
    return `${tr("gameLabel")} #${formatClipId(extractVodId()).slice(1)}`;
  }

  function historyEntryKey(entry) {
    return `${entry.ts}:${entry.summary}:${entry.segment || ""}`;
  }

  function formatPriorStat(count, label) {
    return `${label}: ${count ? `${new Intl.NumberFormat(getActiveLocale()).format(count)} ${tr("historyCount")}` : tr("first")}`;
  }

  function buildHistoryListItems(clipEntries, gameEntries, currentSegment) {
    const items = [];
    const clipSorted = clipEntries.slice().reverse().slice(0, 8);
    const gameSorted = gameEntries.slice().reverse().slice(0, 8);
    const clipKeys = new Set(clipSorted.map(historyEntryKey));

    for (const entry of clipSorted) {
      const onGameToo = gameSorted.some(
        (gameEntry) =>
          gameEntry.ts === entry.ts && gameEntry.summary === entry.summary,
      );
      items.push({
        entry,
        scopeLabel: onGameToo ? tr("clipAndGame") : tr("clipOnly"),
      });
    }

    for (const entry of gameSorted) {
      if (clipKeys.has(historyEntryKey(entry))) continue;

      let scopeLabel = tr("gameOnly");
      if (entry.segment && entry.segment !== currentSegment) {
        scopeLabel = `${tr("gameLabel")} · ${entry.segment}`;
      }

      items.push({ entry, scopeLabel });
    }

    return items;
  }

  function renderHistoryItem(item) {
    const { entry, scopeLabel } = item;
    return `
      <li class="vacnet-clip-item">
        <span class="vacnet-clip-history-tag ${entry.summary}">${escapeHtml(formatSummaryLabel(entry.summary))}</span>
        <div class="vacnet-clip-item-main">
          <span class="vacnet-clip-item-scope">${escapeHtml(scopeLabel)}</span>
          <span class="vacnet-clip-item-when">${escapeHtml(formatRelativeTime(entry.ts))}</span>
        </div>
      </li>
    `;
  }

  function escapeHtml(value) {
    return String(value).replace(
      /[&<>"']/g,
      (char) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#039;",
        })[char],
    );
  }

  function buildClipHistoryPanel(bounds, gameEntries, clipEntries) {
    const segmentLabel = formatHumanSegment(bounds);
    const items = buildHistoryListItems(
      clipEntries,
      gameEntries,
      segmentLabel,
    );
    const listHtml = items.length
      ? `<div class="vacnet-clip-prior-header">
          <span>${tr("previousVerdicts")}</span>
          <span class="vacnet-clip-scroll-hint">${tr("scroll")}</span>
        </div>
        <div class="vacnet-clip-list-wrap">
          <ul class="vacnet-clip-list">${items.map(renderHistoryItem).join("")}</ul>
        </div>`
      : "";

    return `
      <div class="vacnet-review-head">
          <span class="vacnet-review-kicker"><span class="vacnet-review-dot" aria-hidden="true"></span> DemoScope</span>
        <span class="vacnet-review-badges">
          <span class="vacnet-ru-badge">${escapeHtml(getLanguageBadge())}</span>
          <div class="vacnet-language-picker" title="${tr("language")}">${buildLanguageOptions()}</div>
          <button class="vacnet-local-badge" id="vacnet-local-history-open" type="button" title="${tr("localTitle")}">${tr("history")}</button>
          <button class="vacnet-rules-open" id="vacnet-review-rules-open" type="button" aria-label="${tr("rulesOpen")}" title="${tr("rulesOpen")}" aria-haspopup="dialog" aria-controls="vacnet-review-rules">
            <svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="6.2" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M6.7 6.1a1.4 1.4 0 1 1 2.1 1.2c-.7.4-.8.8-.8 1.5M8 11.2v.1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.4"/></svg>
          </button>
        </span>
      </div>
      <div class="vacnet-clip-meta">
        <div class="vacnet-clip-meta-game">${formatGameLabel()}</div>
        <div class="vacnet-clip-meta-segment">${segmentLabel}</div>
      </div>
      <div class="vacnet-clip-stats">
        <span>${formatPriorStat(clipEntries.length, tr("clipLabel"))}</span>
        <span class="vacnet-clip-stats-sep">·</span>
        <span>${formatPriorStat(gameEntries.length, tr("gameLabel"))}</span>
      </div>
      ${listHtml}
    `;
  }

  function ensureClipHistoryPanel() {
    const container = getVerdictContainer();
    if (!container || document.getElementById("vacnet-clip-history")) return;

    const panel = document.createElement("div");
    panel.id = "vacnet-clip-history";
    panel.className = "vacnet-clip-history";
    container.appendChild(panel);
  }

  function ensureReviewRulesDialog() {
    let dialog = document.getElementById("vacnet-review-rules");
    if (!(dialog instanceof HTMLDialogElement)) {
      dialog = document.createElement("dialog");
      dialog.id = "vacnet-review-rules";
      dialog.setAttribute("aria-labelledby", "vacnet-review-rules-title");
      dialog.innerHTML = `
        <div class="vacnet-rules-head">
          <h2 class="vacnet-rules-title" id="vacnet-review-rules-title">${tr("rulesTitle")}</h2>
          <button class="vacnet-rules-close" type="button" aria-label="${tr("rulesClose")}" title="${tr("rulesClose")}">×</button>
        </div>
        <div class="vacnet-rules-content">
          <p class="vacnet-rules-intro">${escapeHtml(tr("rulesIntro"))}</p>
          <ul class="vacnet-rules-list">
            <li>${escapeHtml(tr("rulesHighlight"))}</li>
            <li>${escapeHtml(tr("rulesImpact"))}</li>
            <li>${escapeHtml(tr("rulesUncertain"))}</li>
            <li>${escapeHtml(tr("rulesTypical"))}</li>
          </ul>
        </div>
      `;
      document.body.appendChild(dialog);
      dialog.querySelector(".vacnet-rules-close")?.addEventListener("click", () => dialog.close());
      dialog.addEventListener("click", (event) => {
        if (event.target === dialog) dialog.close();
      });
    }

    const openButton = document.getElementById("vacnet-review-rules-open");
    if (openButton instanceof HTMLButtonElement && !openButton.dataset.rulesBound) {
      openButton.dataset.rulesBound = "1";
      openButton.addEventListener("click", () => {
        if (!dialog.open) dialog.showModal();
      });
    }
  }

  function installLocalHistoryButton(panel) {
    const button = panel.querySelector("#vacnet-local-history-open");
    if (!(button instanceof HTMLButtonElement) || button.dataset.historyBound) return;
    button.dataset.historyBound = "1";
    button.addEventListener("click", () => {
      const historyList = panel.querySelector(".vacnet-clip-prior-header");
      if (!historyList) {
        showToast(tr("historyEmpty"), "info", 3000);
        return;
      }
      historyList.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  }

  function positionClipHistoryPanel() {
    const container = getVerdictContainer();
    const panel = document.getElementById("vacnet-clip-history");
    if (!container || !panel) return;
    if (container.firstElementChild !== panel) {
      container.insertBefore(panel, container.firstElementChild);
    }
  }

  function renderClipHistory(bounds) {
    if (!isLocalHistoryEnabled()) {
      document.getElementById("vacnet-clip-history")?.remove();
      return;
    }
    if (!bounds) return;

    ensureClipHistoryPanel();
    positionClipHistoryPanel();

    const panel = document.getElementById("vacnet-clip-history");
    if (!panel) return;

    const store = readClipHistoryStore();
    const gameEntries = getGameHistoryEntries(store);
    const clipEntries = getClipHistoryEntries(store, bounds);
    const html = buildClipHistoryPanel(bounds, gameEntries, clipEntries);

    if (panel.innerHTML === html) return;

    pauseLayoutMutations(() => {
      panel.className = "vacnet-clip-history";
      panel.innerHTML = html;
      installLanguageSelector(panel);
      ensureReviewRulesDialog();
      installLocalHistoryButton(panel);
    });
  }

  function appendReviewHistory(bounds) {
    if (!bounds || !isLocalHistoryEnabled()) return;

    const entry = {
      ts: Date.now(),
      summary: summarizeCurrentVerdict(),
      segment: formatHumanSegment(bounds),
    };
    const store = readClipHistoryStore();

    const gameKey = getGameKey();
    const gameEntries = readHistoryEntries(store, gameKey);
    gameEntries.push(entry);
    store[gameKey] = gameEntries.slice(-getHistoryPerKeyLimit());

    const clipKey = getClipKey(bounds);
    const clipEntries = readHistoryEntries(store, clipKey);
    clipEntries.push(entry);
    store[clipKey] = clipEntries.slice(-getHistoryPerKeyLimit());

    writeClipHistoryStore(store);
  }

  function isLabelingMode() {
    return Boolean(document.querySelector('input[name="aimassist"]'));
  }

  function getProceedButton() {
    const button = document.getElementById("submitVerdictButton");
    if (!(button instanceof HTMLButtonElement)) return null;
    if (button.hidden || button.disabled || button.style.display === "none") {
      return null;
    }
    return button;
  }

  let proceedHistoryRecording = false;

  function recordProceedHistoryIfLabeling() {
    if (proceedHistoryRecording || !isLabelingMode() || !isLocalHistoryEnabled()) return;
    proceedHistoryRecording = true;
    try {
      const bounds = parseSegmentBounds();
      appendReviewHistory(bounds);
      renderClipHistory(bounds);
    } finally {
      proceedHistoryRecording = false;
    }
  }

  function resetProceedArmed() {
    if (!proceedArmed) return;
    proceedArmed = false;
    refreshProceedButtonLabel();
  }

  function refreshProceedButtonLabel() {
    refreshCancelButtonLabel();
    const button = document.getElementById("submitVerdictButton");
    if (!(button instanceof HTMLButtonElement)) return;

    const proceedKey = formatKeyLabel(getBinding("proceed"));
    const labelingMode = isLabelingMode();
    let label = tr("confirm");
    if (labelingMode) {
      label = proceedArmed ? tr("send") : tr("continue");
    } else {
      proceedArmed = false;
    }

    const armed = proceedArmed && labelingMode;
    const stateKey = `${label}:${armed}`;
    button.classList.toggle("vacnet-proceed-armed", armed);
    button.setAttribute("aria-label", proceedKey ? `${label}. ${tr("enterHint").replace(/Enter/i, proceedKey)}` : label);

    const currentKbd = button.querySelector(".vacnet-proceed-kbd");
    if (
      button.dataset.vacnetLabelState === stateKey &&
      (currentKbd?.textContent || "") === proceedKey &&
      button.firstChild?.textContent === `${label} `
    ) {
      return;
    }

    button.dataset.vacnetLabelState = stateKey;
    const kbd = document.createElement("kbd");
    kbd.className = "vacnet-proceed-kbd";
    kbd.textContent = proceedKey;
    button.replaceChildren(document.createTextNode(`${label} `), ...(proceedKey ? [kbd] : []));
  }

  function verdictLabelForField(field, selected) {
    if (selected === "positive") return `guilty_${field}`;
    if (selected === "skip") return `skip_${field}`;
    if (selected === "negative") return `innocent_${field}`;
    return null;
  }

  function prepareVerdictFormForSubmit() {
    const form = document.getElementById("submitverdictform");
    if (!(form instanceof HTMLFormElement)) return false;

    const selections = [];

    for (const field of VERDICT_FIELDS) {
      const selected = document.querySelector(
        `input[name="${field}"]:checked`,
      )?.value;
      const label = verdictLabelForField(field, selected);
      if (!label) {
        showToast(tr("selectAll"), "error", 2600);
        return false;
      }

      selections.push({ field, selected, label });
    }

    form
      .querySelectorAll('input[name="verdict_labels[]"]')
      .forEach((input) => input.remove());

    const inputs = [];
    for (const { field, selected, label } of selections) {

      if (PAGE.buttonStates && typeof PAGE.buttonStates === "object") {
        PAGE.buttonStates[field] = selected;
      }

      const input = document.createElement("input");
      input.type = "hidden";
      input.name = "verdict_labels[]";
      input.value = label;
      inputs.push(input);
    }

    form.append(...inputs);

    return true;
  }

  function isSafeSubmitTarget(form) {
    try {
      const target = new URL(form.getAttribute("action") || location.href, location.href);
      return target.protocol === "https:" && target.origin === location.origin;
    } catch {
      return false;
    }
  }

  function restoreSubmitUi() {
    const submitBtn = document.getElementById("submitVerdictButton");
    const backBtn = document.getElementById("backbutton");
    if (backBtn instanceof HTMLElement) backBtn.style.removeProperty("display");
    if (submitBtn instanceof HTMLButtonElement) {
      submitBtn.disabled = false;
      delete submitBtn.dataset.vacnetLabelState;
      refreshProceedButtonLabel();
    }
  }

  function submitVerdictForm({ recordHistory = false } = {}) {
    const form = document.getElementById("submitverdictform");
    if (!(form instanceof HTMLFormElement)) return false;
    if (isSubmitPending()) return false;
    if (!isSafeSubmitTarget(form)) {
      playUiSound("error");
      showToast(tr("unsafe"), "error", 4200);
      console.error(LOG_PREFIX, "Blocked a cross-origin verdict form action");
      return false;
    }

    const submitBtn = document.getElementById("submitVerdictButton");
    const backBtn = document.getElementById("backbutton");

    if (backBtn instanceof HTMLElement) backBtn.style.display = "none";
    if (submitBtn instanceof HTMLButtonElement) {
      submitBtn.disabled = true;
      submitBtn.classList.remove("vacnet-proceed-armed");
      submitBtn.dataset.vacnetLabelState = "submitting";
      submitBtn.textContent = tr("submitting");
    }

    markSubmitPending();
    showSubmitLoadingOverlay(tr("send"));

    try {
      form.submit();
      if (recordHistory) recordProceedHistoryIfLabeling();
      playUiSound("confirm");
      return true;
    } catch (error) {
      clearSubmitPending();
      hideSubmitLoadingOverlay();
      restoreSubmitUi();
      showToast(tr("sendFailed"), "error", 3200);
      playUiSound("error");
      console.error(LOG_PREFIX, "Verdict form submission failed", error);
      return false;
    }
  }

  function submitVerdictsDirect() {
    const labelingMode = isLabelingMode();
    if (labelingMode && !prepareVerdictFormForSubmit()) {
      playUiSound("error");
      return false;
    }
    const submitted = submitVerdictForm({ recordHistory: labelingMode });
    if (submitted) proceedArmed = false;
    return submitted;
  }

  function invokeProceedAction() {
    if (presetApplicationInProgress) return true;
    const button = getProceedButton();
    if (!button) return false;

    if (isLabelingMode()) {
      if (!proceedArmed) {
        proceedArmed = true;
        playUiSound("toggle");
        refreshProceedButtonLabel();
        return true;
      }

      proceedArmed = false;
      if (!submitVerdictsDirect()) {
        proceedArmed = true;
        refreshProceedButtonLabel();
      }
      return true;
    }

    submitVerdictsDirect();
    return true;
  }

  function installProceedShortcut() {
    if (proceedShortcutInstalled) return;
    proceedShortcutInstalled = true;

    window.addEventListener(
      "keydown",
      (event) => {
        if (keyCaptureActive || isModalOpen()) return;
        if (event.repeat) return;
        if (event.metaKey || event.ctrlKey || event.altKey) return;
        const action = getActionForEvent(event);
        if (action !== "proceed" && action !== "cancel") return;
        if (isPlayerShortcutBlocked(event.target)) return;
        if (event.target instanceof HTMLSelectElement) return;
        if (!getVideoContainer()) return;

        if (action === "proceed" ? invokeProceedAction() : invokeCancelAction()) {
          event.preventDefault();
          event.stopImmediatePropagation();
        }
      },
      true,
    );
  }

  function hookProceedButton() {
    const button = document.getElementById("submitVerdictButton");
    if (!button || button.dataset.vacnetProceedHook === "1") return;

    if (button.type !== "button") button.type = "button";
    button.dataset.vacnetProceedHook = "1";
    button.removeAttribute("onclick");

    button.addEventListener(
      "click",
      (event) => {
        event.preventDefault();
        event.stopImmediatePropagation();
        invokeProceedAction();
      },
      true,
    );
  }

  function installVerdictChangeReset() {
    const inner = document.querySelector(".verdicts-container-inner");
    if (!inner || inner.dataset.vacnetProceedReset === "1") return;
    inner.dataset.vacnetProceedReset = "1";
    inner.addEventListener("change", () => {
      resetProceedArmed();
      syncPresetButtons();
      if (!presetApplicationInProgress) playUiSound("select");
    });
  }

  let proceedFooterFixScheduled = false;

  function scheduleProceedFooterFix() {
    if (proceedFooterFixScheduled || layoutMutationPaused) return;
    proceedFooterFixScheduled = true;
    requestAnimationFrame(() => {
      proceedFooterFixScheduled = false;
      if (layoutMutationPaused) return;
      fixProceedFooter();
    });
  }

  function scheduleVerdictLabelsFix() {
    if (verdictLabelsFixScheduled || layoutMutationPaused) return;
    verdictLabelsFixScheduled = true;
    requestAnimationFrame(() => {
      verdictLabelsFixScheduled = false;
      if (layoutMutationPaused) return;
      const inner = document.querySelector(".verdicts-container-inner");
      if (!inner) return;
      pauseLayoutMutations(() => {
        normalizeVerdictLabels(inner);
        applyVerdictSectionTitles(inner);
        applyDefaultVerdicts(inner);
        syncPresetButtons();
      });
    });
  }

  function buildShiftSpeedBar() {
    const initialSpeed = readStoredShiftSpeed();
    const bar = document.createElement("div");
    bar.id = "vacnet-shift-speed";
    bar.innerHTML = `
      <span class="vacnet-bar-hint">${tr("holdShift")}</span>
      <span class="vacnet-bar-title">${tr("speed")}</span>
      <select id="vacnet-speed-select" aria-label="${tr("holdShift")}">
        ${buildShiftSpeedSelectOptions(initialSpeed)}
      </select>
    `;

    const speedSelect = bar.querySelector("#vacnet-speed-select");
    if (speedSelect instanceof HTMLSelectElement) {
      speedSelect.addEventListener("change", () => {
        playUiSound("select");
        const rate = parseFloat(speedSelect.value);
        if (Number.isFinite(rate)) {
          setShiftSpeedRef?.(rate);
          showToast(`${tr("speed")}: ${formatShiftSpeedLabel(rate)}`);
        }
        speedSelect.blur();
      });
    }

    return bar;
  }

  function buildPresetButtonMarkup(name, shortcut = "", labelOverride = "") {
    const label = labelOverride || getPresetLabel(name);
    const tone = PRESET_TONES[name] || "uncertain";
    const shortcutMarkup = shortcut ? `<kbd>${escapeHtml(shortcut)}</kbd> ` : "";
    return [
      `<button type="button" data-preset="${escapeHtml(name)}"`,
      ` data-tone="${escapeHtml(tone)}" aria-pressed="false"`,
      ` aria-label="${tr("apply")}: ${escapeHtml(label)}">`,
      `${shortcutMarkup}${escapeHtml(label)}</button>`,
    ].join("");
  }

  function buildAdvancedPresetGroupsMarkup() {
    return ADVANCED_PRESET_GROUPS.map(
      (group) => `
        <section class="vacnet-advanced-group">
          <h3 class="vacnet-advanced-group-title">${escapeHtml(tr(group.title))}</h3>
          <div class="vacnet-advanced-grid">
            ${group.names.map((name) => buildPresetButtonMarkup(name)).join("")}
          </div>
        </section>
      `,
    ).join("");
  }

  function buildEnhancementBar() {
    const mainPresets = [
      ["botaimwh", "1", tr("quickBotPreset")],
      ["aimwh", "2", tr("quickCheaterOne")],
      ["rage", "3", tr("quickCheaterTwo")],
      ["legit", "4", tr("quickCleanPlayer")],
      ["uncertain", "5", tr("quickSkip")],
    ];
    const bar = document.createElement("div");
    bar.id = "vacnet-enhance-bar";
    bar.innerHTML = `
      <div class="vacnet-enhance-bar-head">
      <span class="vacnet-enhance-bar-title">${tr("quickVerdict")}</span>
      <label class="vacnet-randomizer-control" title="${tr("randomizerNote")}">
        <input id="vacnet-verdict-randomizer" type="checkbox" aria-label="${tr("randomizer")}"${verdictRandomizerEnabled ? " checked" : ""}>
        <span>${tr("randomizer")}</span>
      </label>
      <span class="vacnet-enhance-bar-hint">${tr("keys")}</span>
      </div>
      <div class="vacnet-enhance-bar-presets">
        ${mainPresets.map(([name, shortcut, label]) => buildPresetButtonMarkup(name, shortcut, label)).join("")}
      </div>
      <details class="vacnet-advanced-presets"${readAdvancedPresetsOpen() ? " open" : ""}>
        <summary>
          <span>${tr("extended")}</span>
          <span class="vacnet-advanced-current" hidden></span>
          <span class="vacnet-advanced-count">${ADVANCED_PRESET_NAMES.size}</span>
        </summary>
        <div class="vacnet-advanced-body">
          ${buildAdvancedPresetGroupsMarkup()}
        </div>
      </details>
    `;

    const advancedPresets = bar.querySelector(".vacnet-advanced-presets");
    advancedPresets?.addEventListener("toggle", () => {
      try { localStorage.setItem(ADVANCED_PRESETS_OPEN_STORAGE_KEY, String(advancedPresets.open)); }
      catch { /* Keep the disclosure usable for the current page. */ }
    });

    const randomizerToggle = bar.querySelector("#vacnet-verdict-randomizer");
    if (randomizerToggle instanceof HTMLInputElement) {
      randomizerToggle.addEventListener("change", () => {
        playUiSound("toggle");
        verdictRandomizerEnabled = randomizerToggle.checked;
        try {
          localStorage.setItem(VERDICT_RANDOMIZER_STORAGE_KEY, String(verdictRandomizerEnabled));
        } catch { /* Ignore unavailable storage. */ }
      });
    }

    bar.addEventListener("click", (event) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) return;

      const button = target.closest("button[data-preset]");
      const preset = button?.getAttribute("data-preset");
      if (preset) applyPreset(preset, { announce: true });
    });

    return bar;
  }

  function positionShiftSpeedBar() {
    const container = getVerdictContainer();
    const speedBar = document.getElementById("vacnet-shift-speed");
    const inner = document.querySelector(".verdicts-container-inner");
    if (!container || !speedBar || !inner) return;
    if (speedBar.nextElementSibling !== inner) {
      container.insertBefore(speedBar, inner);
    }
  }

  function positionEnhancementBar() {
    const container = getVerdictContainer();
    const bar = document.getElementById("vacnet-enhance-bar");
    const submit = getSubmitArea();
    if (!container || !bar || !submit) return;
    if (bar.nextElementSibling !== submit) {
      container.insertBefore(bar, submit);
    }
  }

  function fixProceedFooter() {
    const container = getVerdictContainer();
    const submit = getSubmitArea();
    if (!container || !submit) return;

    pauseLayoutMutations(() => {
      positionClipHistoryPanel();
      positionShiftSpeedBar();
      positionEnhancementBar();

      if (submit.parentElement !== container) {
        container.appendChild(submit);
      }

      hookProceedButton();
      refreshProceedButtonLabel();
    });
  }

  function readFooterPreference(storageKey) {
    try { return localStorage.getItem(storageKey) === "true"; }
    catch { return false; }
  }

  function saveFooterPreference(storageKey, hidden) {
    try { localStorage.setItem(storageKey, String(hidden)); }
    catch { /* Current page preference still applies. */ }
  }

  function applyFooterPreferences(footer = document.querySelector(".demoscope-custom-footer")) {
    if (!(footer instanceof HTMLElement)) return;
    const links = footer.querySelector(".demoscope-custom-footer-links");
    const feedback = footer.querySelector(".demoscope-footer-feedback");
    const report = footer.querySelector(".demoscope-footer-report");
    const copyright = footer.querySelector(".demoscope-footer-copyright");
    const hideAll = readFooterPreference(FOOTER_HIDE_ALL_KEY);
    if (feedback) feedback.hidden = readFooterPreference(FOOTER_HIDE_FEEDBACK_KEY);
    if (report) report.hidden = readFooterPreference(FOOTER_HIDE_REPORT_KEY);
    if (copyright) copyright.hidden = readFooterPreference(FOOTER_HIDE_COPYRIGHT_KEY);
    if (links) links.hidden = (!feedback || feedback.hidden) && (!report || report.hidden);
    footer.hidden = hideAll || (links.hidden && copyright.hidden);
  }
  function installDemoScopeFooter(withClipLinks, locale = getActiveLocale(), showFeedback = true) {
    let footer = document.querySelector(".demoscope-custom-footer");
    if (!footer) {
      footer = document.createElement("footer");
      footer.className = "demoscope-custom-footer";
      const links = document.createElement("nav");
      links.className = "demoscope-custom-footer-links";
      links.setAttribute("aria-label", "VACNet");
      const feedback = document.createElement("a");
      feedback.className = "demoscope-footer-feedback";
      feedback.href = "mailto:cs2team@valvesoftware.com?subject=Video%20Labeling%20Feedback";
      feedback.textContent = tr("footerFeedback");
      const report = document.createElement("a");
      report.className = "demoscope-footer-report";
      report.href = "#";
      report.textContent = tr("footerReport");
      report.addEventListener("click", (event) => {
        event.preventDefault();
        if (typeof PAGE.ReportBadClip === "function") PAGE.ReportBadClip();
      });
      const copyright = document.createElement("p");
      copyright.className = "demoscope-footer-copyright";
      copyright.textContent = tr("footerCopyright");
      footer.append(links, copyright);
      (document.body || document.documentElement).append(footer);
      footer._demoscopeLinks = { links, feedback, report };
    }
    const { links, feedback, report } = footer._demoscopeLinks || {};
    if (links && feedback && report) {
      links.replaceChildren();
      if (showFeedback) links.append(feedback);
      if (withClipLinks) links.append(report);
    }
    const currentFeedback = footer.querySelector(".demoscope-footer-feedback");
    const currentReport = footer.querySelector(".demoscope-footer-report");
    const copyright = footer.querySelector(".demoscope-footer-copyright");
    if (currentFeedback) currentFeedback.textContent = queueNoticeText("footerFeedback", locale);
    if (currentReport) currentReport.textContent = queueNoticeText("footerReport", locale);
    if (copyright) copyright.textContent = queueNoticeText("footerCopyright", locale);
    applyFooterPreferences(footer);
    return footer;
  }

  function installEmptyQueueNotice() {
    const notice = document.querySelector(".infomessage");
    if (!(notice instanceof HTMLElement) || getVideoContainer()) return false;
    const message = notice.textContent.replace(/\s+/g, " ").trim().toLowerCase();
    const submitted = new URLSearchParams(location.search).get("submit_success") === "1";
    if (!submitted && !message.includes("no tasks available")) return false;

    let firstSeen = 0;
    try {
      firstSeen = Number(localStorage.getItem(EMPTY_QUEUE_FIRST_SEEN_KEY)) || 0;
      if (!firstSeen) {
        firstSeen = Date.now();
        localStorage.setItem(EMPTY_QUEUE_FIRST_SEEN_KEY, String(firstSeen));
      }
    } catch { firstSeen = Date.now(); }

    document.body.classList.add("vacnet-enhanced", "demoscope-empty-queue");
    const panel = document.createElement("section");
    panel.className = "demoscope-queue-notice";
    panel.setAttribute("role", "status");
    panel.setAttribute("aria-labelledby", "demoscope-queue-title");

    const localeRow = document.createElement("div");
    localeRow.className = "demoscope-queue-language";
    const localeLabel = document.createElement("span");
    localeLabel.id = "demoscope-queue-language-label";
    localeLabel.textContent = tr("queueLanguageLabel");
    const initialLocale = getQueueNoticeLocale();
    const languagePicker = document.createElement("div");
    languagePicker.className = "vacnet-language-picker";
    languagePicker.setAttribute("aria-labelledby", localeLabel.id);
    languagePicker.innerHTML = buildLanguageOptions({ activeLocale: initialLocale });
    localeRow.append(localeLabel, languagePicker);
    const kicker = document.createElement("p");
    kicker.className = "demoscope-queue-notice-kicker";
    kicker.textContent = "DEMOSCOPE · VACNET";
    const heading = document.createElement("h1");
    heading.id = "demoscope-queue-title";
    heading.textContent = queueNoticeText("queueEmptyTitle");
    const meaning = document.createElement("p");
    meaning.textContent = queueNoticeText("queueEmptyMeaning");
    const limit = document.createElement("p");
    limit.className = "demoscope-queue-limit";
    limit.textContent = queueNoticeText("queueEmptyLimit");
    const next = document.createElement("p");
    next.className = "demoscope-queue-next";
    next.textContent = queueNoticeText("queueEmptyNext");
    const firstSeenLabel = document.createElement("p");
    firstSeenLabel.className = "demoscope-queue-first-seen";
    firstSeenLabel.setAttribute("data-queue-first-seen", "");
    firstSeenLabel.textContent = `${queueNoticeText("queueFirstSeen")}: ${formatQueueFirstSeen(firstSeen)}`;
    panel.append(localeRow, kicker, heading, meaning, limit, next, firstSeenLabel);
    notice.replaceWith(panel);
    installDemoScopeFooter(false, getQueueNoticeLocale(), false);
    installLanguageSelector(localeRow);
    installSettingsUi();
    return true;
  }
  // Valve's redesigned review page (panel-header / task-instructions /
  // .review-layout) no longer wraps the verdict blocks in
  // .verdicts-container-inner and keeps #submitbuttons *outside*
  // .verdicts-container. Normalise that back to the structure the rest of
  // DemoScope expects, so both the old and the new markup work.
  function ensureReviewStructure() {
    const container = getVerdictContainer();
    if (!container) return;

    if (!container.querySelector(":scope > .verdicts-container-inner")) {
      const blocks = Array.from(container.querySelectorAll(":scope > .verdict-block"));
      if (blocks.length) {
        const inner = document.createElement("div");
        inner.className = "verdicts-container-inner";
        container.insertBefore(inner, blocks[0]);
        for (const block of blocks) inner.appendChild(block);
      }
    }

    const submit = getSubmitArea();
    if (submit && submit.parentElement !== container) {
      container.appendChild(submit);
    }

    // The new layout hides the legacy header counter and shows it in the
    // verdict panel instead. Mirror the localized text into the header chip.
    const panelCount = document.querySelector(".verdict-column .panel-clipcount");
    const headerCount = document.querySelector(".PageHeader .ClipCount");
    if (panelCount && headerCount && headerCount.dataset.demoscopeSynced !== "1") {
      headerCount.innerHTML = panelCount.innerHTML;
      headerCount.dataset.demoscopeSynced = "1";
      headerCount.classList.add("demoscope-clipcount-visible");
    }
  }

  // ---- New "cheating" task: one verdict (Cheating / Uncertain / No cheats) ----
  // Valve now sometimes serves a single question instead of the four-category
  // form. Quick verdicts and combinations make no sense there, so DemoScope
  // switches to a compact layout with its own labels, 1-3 hotkeys and a lock
  // indicator for the verdicts that only unlock when the clip ends.
  const CHEATING_KEYS = {
    Digit1: "positive", Digit2: "skip", Digit3: "negative",
    Numpad1: "positive", Numpad2: "skip", Numpad3: "negative",
  };

  function isCheatingMode() {
    return Boolean(document.getElementById("verdictbuttons_cheating"));
  }

  function selectCheatingVerdict(kind) {
    const radio = document.getElementById(`cheating_${kind}`);
    if (!(radio instanceof HTMLInputElement) || radio.checked) return;
    if (radio.disabled) {
      playUiSound("error");
      const hint = document.querySelector(".verdict-lock-hint");
      if (hint) {
        hint.classList.remove("vacnet-lock-shake");
        void hint.offsetWidth;
        hint.classList.add("vacnet-lock-shake");
      }
      return;
    }
    radio.click();
  }

  function localizeCheatingVerdicts() {
    if (!isCheatingMode()) return;
    const locale = getActiveLocale();
    const defs = [
      ["positive", "cheatYes", "quick1", "highlight-text"],
      ["skip", "cheatUnsure", "quick2", ""],
      ["negative", "cheatNo", "quick3", "highlight-text-negative"],
    ];
    for (const [kind, key, quick, cls] of defs) {
      const label = document.querySelector(`label[for="cheating_${kind}"]`);
      if (!label) continue;
      const number = formatKeyLabel(getBinding(quick)) || "–";
      const stamp = `${locale}|${key}|${number}`;
      if (label.dataset.demoscopeLabel === stamp) continue;
      label.dataset.demoscopeLabel = stamp;
      // The key badge is drawn by CSS (data-ds-key): Valve copies the label text
      // into its confirmation line, so the digit must not be part of the DOM text.
      const caption = key === "cheatUnsure" ? settingText(key) : tr(key);
      let text;
      if (cls) {
        text = document.createElement("span");
        text.className = cls;
        text.textContent = caption;
      } else {
        text = document.createTextNode(caption);
      }
      label.dataset.dsKey = number;
      label.replaceChildren(text);
    }

    const hint = document.querySelector(".verdict-lock-hint");
    if (hint && !hint.querySelector(".vacnet-lock-text")) {
      const text = document.createElement("span");
      text.className = "vacnet-lock-text";
      const bar = document.createElement("span");
      bar.className = "vacnet-lock-bar";
      bar.appendChild(document.createElement("i"));
      hint.replaceChildren(text, bar);
    }
    updateCheatingLock();
  }

  function updateCheatingLock() {
    const hint = document.querySelector(".verdict-lock-hint");
    if (!hint) return;
    const skip = document.getElementById("cheating_skip");
    const negative = document.getElementById("cheating_negative");
    const locked = Boolean(skip?.disabled || negative?.disabled);
    const chosen = Boolean(document.querySelector('input[name="cheating"]:checked'));
    hint.classList.toggle("vacnet-lock-done", !locked || chosen);
    if (!locked || chosen) return;

    const video = getVideoElement();
    const duration = video && Number.isFinite(video.duration) ? video.duration : 0;
    const current = video ? video.currentTime || 0 : 0;
    const full = tr("cheatLocked");
    const next = duration > 0
      ? full.replace("{t}", formatClockTime(Math.max(0, duration - current)))
      : full.split(" · ")[0];
    const textEl = hint.querySelector(".vacnet-lock-text");
    if (textEl && textEl.textContent !== next) textEl.textContent = next;
    const fill = hint.querySelector(".vacnet-lock-bar i");
    if (fill && duration > 0) {
      fill.style.width = `${Math.min(100, (current / duration) * 100).toFixed(1)}%`;
    }
  }

  let cheatingLockTimer = 0;
  function startCheatingLockWatcher() {
    if (cheatingLockTimer || !isCheatingMode()) return;
    cheatingLockTimer = window.setInterval(updateCheatingLock, 250);
  }

  function enhanceLayout() {
    document.body.classList.add("vacnet-enhanced");
    safeStep("taskMode", () => document.body.classList.toggle("vacnet-cheating-task", isCheatingMode()));
    safeStep("reviewStructure", ensureReviewStructure);
    safeStep("siteFooter", hideSiteFooter);
    safeStep("customFooter", () => installDemoScopeFooter(Boolean(getVideoContainer())));
    safeStep("verdictLabels", () => { normalizeVerdictLabels(); applyVerdictSectionTitles(); });

    const verdictContainer = getVerdictContainer();
    safeStep("clipHistoryPanel", () => { ensureClipHistoryPanel(); positionClipHistoryPanel(); });

    safeStep("shiftSpeedBar", () => {
      if (verdictContainer && !document.getElementById("vacnet-shift-speed")) {
        const inner = document.querySelector(".verdicts-container-inner");
        const anchor = inner || verdictContainer.querySelector("#vacnet-enhance-bar");
        verdictContainer.insertBefore(buildShiftSpeedBar(), anchor || null);
      }
    });

    safeStep("quickVerdicts", () => {
      if (verdictContainer && !isCheatingMode() && !document.getElementById("vacnet-enhance-bar")) {
        const submit = getSubmitArea();
        verdictContainer.insertBefore(buildEnhancementBar(), submit && submit.parentElement === verdictContainer ? submit : null);
      }
    });

    safeStep("layoutOrder", () => {
      positionClipHistoryPanel();
      positionShiftSpeedBar();
      positionEnhancementBar();
    });
    safeStep("defaultVerdicts", () => {
      applyDefaultVerdicts();
      syncPresetButtons();
      installVerdictChangeReset();
    });
    safeStep("proceedFooter", fixProceedFooter);
    safeStep("clipHistory", () => renderClipHistory(parseSegmentBounds()));
    safeStep("settingsUi", installSettingsUi);
    safeStep("cheatingLock", startCheatingLockWatcher);
  }

  function watchProceedFooter() {
    const container = getVerdictContainer();
    if (!container) return;
    fixProceedFooter();
    const observer = new MutationObserver((mutations) => {
      if (layoutMutationPaused) return;
      const relevant = mutations.some((mutation) => {
        const target = mutation.target;
        if (!(target instanceof Element)) return true;
        if (target.id === "vacnet-clip-history") return false;
        if (target.closest("#vacnet-clip-history")) return false;
        return true;
      });
      if (relevant) scheduleProceedFooterFix();
    });
    observer.observe(container, { childList: true, subtree: true });
  }

  function watchVerdictLabels() {
    const inner = document.querySelector(".verdicts-container-inner");
    if (!inner) return;
    const observer = new MutationObserver(() => scheduleVerdictLabelsFix());
    observer.observe(inner, { childList: true, subtree: true });
  }

  async function init() {
    if (migrateEmptyQueueLanguage()) return;
    if (syncAutomaticLanguage()) return;
    if (syncSelectedLanguage()) return;
    safeStep("animations", applyAnimationSettings);
    safeStep("polishStyles", ensureUiPolishStyles);
    safeStep("errorCapture", installErrorCapture);
    captureOriginalSkeleton();
    if (/^\/vacnet\/?$/.test(location.pathname)) {
      safeStep("accountName", installAccountNameControl);
      safeStep("settingsUi", installSettingsUi);
      safeStep("welcomePage", installWelcomePage);
      return;
    }
    if (/\/vacnet\/createinvite\/?$/.test(location.pathname)) {
      safeStep("accountName", installAccountNameControl);
      safeStep("invitePage", installInvitePage);
      return;
    }
    if (!IS_REVIEW_PAGE) return;
    safeStep("accountName", installAccountNameControl);
    safeStep("bootLoading", bootSubmitLoadingIfPending);

    let hasVideo = Boolean(getVideoContainer());
    let hasForm = hasVerdictForm();
    if (hasVideo !== hasForm) {
      // Exactly one of the two is there: give a late-rendered page a moment.
      const waitUntil = Date.now() + 2000;
      while (Date.now() < waitUntil && hasVideo !== hasForm) {
        await new Promise((resolve) => window.setTimeout(resolve, 100));
        hasVideo = Boolean(getVideoContainer());
        hasForm = hasVerdictForm();
      }
    }
    if (!hasVideo && !hasForm) {
      if (isSubmitPending()) hideSubmitLoadingOverlay();
      installEmptyQueueNotice();
      return;
    }
    if (!hasVideo || !hasForm) {
      // Part of a clip page is there but not all: Valve changed the layout.
      disableDemoScope(hasVideo ? "verdictForm" : "videoContainer");
      return;
    }

    try { localStorage.removeItem(EMPTY_QUEUE_FIRST_SEEN_KEY); } catch { /* Ignore unavailable storage. */ }
    enhanceLayout();
    if (diag.failures.length >= 5) {
      // So many steps failed that the page is unrecognizable: back out cleanly.
      disableDemoScope("tooManyFailures");
      return;
    }
    safeStep("watchLabels", watchVerdictLabels);
    safeStep("watchFooter", watchProceedFooter);
    safeStep("proceedShortcut", installProceedShortcut);
    safeStep("keyLabels", refreshKeyLabels);
    if (isSubmitPending()) void finishSubmitLoadingWhenReady();

    const footerObserver = new MutationObserver(() => hideSiteFooter());
    footerObserver.observe(document.body, { childList: true, subtree: true });

    const bounds = safeStep("segmentBounds", parseSegmentBounds, null);
    if (!bounds) {
      if (isSubmitPending()) void finishSubmitLoadingWhenReady();
      return;
    }

    try {
      const player = await waitForPlayerAdapter();
      installPlayerEnhancements(player, bounds);
    } catch (error) {
      console.warn(LOG_PREFIX, error);
      window.setTimeout(() => {
        const player = createPlayerAdapter();
        if (player) installPlayerEnhancements(player, bounds);
      }, 1500);
    }

    void finishSubmitLoadingWhenReady();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
