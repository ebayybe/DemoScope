<div align="center">

[English](../FUNCTIONS.md) · [Български](bg_FUNCTIONS.md) · [Magyar](hu_FUNCTIONS.md) · [Tiếng Việt](vi_FUNCTIONS.md) · [Ελληνικά](el_FUNCTIONS.md) · [Dansk](da_FUNCTIONS.md) · [Bahasa Indonesia](id_FUNCTIONS.md) · [Español (España)](es-ES_FUNCTIONS.md) · [Español (Latinoamérica)](es-419_FUNCTIONS.md) · [Italiano](it_FUNCTIONS.md) · [繁體中文](zh-TW_FUNCTIONS.md) · [简体中文](zh-CN_FUNCTIONS.md) · [한국어](ko_FUNCTIONS.md) · [Deutsch](de_FUNCTIONS.md) · [Nederlands](nl_FUNCTIONS.md) · [Norsk](no_FUNCTIONS.md) · [Polski](pl_FUNCTIONS.md) · [Português (Portugal)](pt-PT_FUNCTIONS.md) · [Português (Brasil)](pt-BR_FUNCTIONS.md) · [Română](ro_FUNCTIONS.md) · [Русский](ru_FUNCTIONS.md) · **ไทย** · [Türkçe](tr_FUNCTIONS.md) · [Українська](uk_FUNCTIONS.md) · [Suomi](fi_FUNCTIONS.md) · [Français](fr_FUNCTIONS.md) · [Čeština](cs_FUNCTIONS.md) · [Svenska](sv_FUNCTIONS.md) · [日本語](ja_FUNCTIONS.md)

</div>

# DemoScope — เอกสารอ้างอิงฟังก์ชัน

เอกสารอ้างอิงฉบับสมบูรณ์ของฟังก์ชันระดับบนสุดทั้ง 128 ฟังก์ชันใน `DemoScope.user.js` v1.0.0 (ชื่อ พารามิเตอร์ ค่าที่ส่งกลับ หน้าที่) กลับไปที่ [README](../../README/th_README.md)

สัญลักษณ์: `—` หมายถึงไม่มีพารามิเตอร์ `void` หมายถึงฟังก์ชันถูกเรียกเพื่อผลข้างเคียง

## การปรับภาษา

| ฟังก์ชัน | พารามิเตอร์ | ค่าที่ส่งกลับ | หน้าที่ |
|---|---|---|---|
| `getFlagSvg` | `locale: string` | `string` | มาร์กอัป SVG แบบอินไลน์ของธงสำหรับภาษาหนึ่ง ถ้าไม่มีจะใช้ไอคอนลูกโลก |
| `getSavedLocale` | — | `string \| null` | อ่านภาษาที่ผู้ใช้บันทึกไว้ (`demoscopeLanguage`) จาก `localStorage` |
| `getActiveLocale` | — | `string` | กำหนดภาษาที่ใช้งาน: ตัวเลือกที่บันทึกไว้ → Steam `?l=` → ภาษาของเบราว์เซอร์/หน้าเว็บ → `en` |
| `getLanguageBadge` | — | `string` | ชื่อที่แสดงของภาษานั้นเอง เช่น “English version” สำหรับป้ายในตัวเลือกภาษา |
| `tr` | `key: string` | `string` | ค้นหาข้อความอินเทอร์เฟซสำหรับภาษาที่ใช้งาน (สำรอง: อังกฤษ แล้วจึงใช้คีย์เอง) |
| `inviteText` | `key: string` | `string` | การค้นหาแบบเดียวกันสำหรับตารางข้อความของหน้าคำเชิญ |
| `settingText` | `key: string` | `string` | การค้นหาแบบเดียวกันสำหรับตารางข้อความของกล่องตั้งค่า |
| `getPresetLabel` | `name: string` | `string` | ป้ายชื่อที่แปลแล้วของพรีเซ็ต ประกอบชุดผสมเช่น “Bot + Aim” |
| `buildLanguageOptions` | — | `string (HTML)` | HTML ของปุ่มเลือกภาษา รวมถึงรายการ “auto” |
| `installLanguageSelector` | `root: HTMLElement` | `void` | ผูกตัวเลือกภาษาแบบป๊อปโอเวอร์ จัดตำแหน่ง บันทึกตัวเลือก และโหลดหน้าใหม่ |

## เอฟเฟกต์เสียงและกล่องตั้งค่า

| ฟังก์ชัน | พารามิเตอร์ | ค่าที่ส่งกลับ | หน้าที่ |
|---|---|---|---|
| `getSettingsHistorySummary` | — | `string` | บรรทัด “N รายการ · รายการล่าสุด: …” ที่แสดงในกล่องตั้งค่า |
| `soundsEnabled` | — | `boolean` | ระบุว่าเสียงของอินเทอร์เฟซเปิดอยู่หรือไม่ (`demoscopeSoundEffectsEnabled` ค่าเริ่มต้นเปิด) |
| `getSoundVolume` | — | `number (0–1)` | ระดับเสียงที่บันทึกไว้ (`demoscopeSoundEffectsVolume` ค่าเริ่มต้น 0.4) |
| `playUiSound` | `kind = "click"` | `void` | สังเคราะห์ลำดับเสียงสั้น ๆ ด้วย Web Audio (`click`, `select`, `toggle`, `copy`, `confirm`, `preview`, `tick`, `open`, `close`, `error`) และไม่โยนข้อผิดพลาดเลย |
| `readSettingsHotkey` | — | `string` | `KeyboardEvent.code` ที่บันทึกไว้สำหรับเปิดกล่องตั้งค่า (ค่าเริ่มต้น `F2`) |
| `formatHotkey` | `code: string` | `string` | ชื่อปุ่มที่อ่านง่าย (`KeyQ` → `Q`, `Numpad1` → `Num 1`) |
| `getSettingsHotkeyCode` | `event: KeyboardEvent` | `string` | ดึงรหัสปุ่มจริง โดยแมปเลย์เอาต์ที่ไม่ใช่ละตินกลับเป็น `KeyX` ส่งกลับ `""` หากใช้ไม่ได้ |
| `isReservedSettingsHotkey` | `code: string` | `boolean` | เป็นจริงสำหรับปุ่มที่ DemoScope หรือเครื่องเล่นใช้อยู่แล้ว (Enter, Space, ปุ่มลูกศร, `M`, `F`, `1`–`5`, …) |
| `ensureSettingsDialog` | — | `HTMLDialogElement` | สร้าง (ครั้งเดียว) และเชื่อมกล่องตั้งค่า: เสียง ระดับเสียง การจับปุ่มลัด ขีดจำกัดประวัติ ส่งออก/นำเข้า/รายงาน/รวม/ล้าง รีเซ็ต |
| `openSettingsDialog` | `opener = null` | `void` | เปิดกล่องพร้อมค่าปัจจุบัน และจำองค์ประกอบที่ต้องคืนโฟกัสให้ |
| `installSettingsUi` | — | `void` | ติดตั้งตัวฟังปุ่มแบบโกลบอลในเฟส capture (เปิด/ปิดกล่อง การกำหนดปุ่มใหม่) และอีเวนต์เสียง |
| `installUiSoundEvents` | — | `void` | ตัวฟังการคลิกแบบมอบหมายที่เล่นเสียงตอบสนองสำหรับตัวควบคุมของ DemoScope |

## ไฟล์สำรอง รายงาน และขีดจำกัดประวัติ

| ฟังก์ชัน | พารามิเตอร์ | ค่าที่ส่งกลับ | หน้าที่ |
|---|---|---|---|
| `exportLocalHistory` | — | `void` | ดาวน์โหลดประวัติทั้งหมดเป็น `demoscope-history-YYYY-MM-DD.json` |
| `downloadHistoryFile` | `content: string, filename: string, mimeType: string` | `void` | เริ่มการดาวน์โหลดไฟล์ผ่าน Blob URL ชั่วคราว |
| `collectHistoryReportRows` | `store: object` | `Array<{vodId, ts, summary, segment}>` | คลี่และลบรายการซ้ำของประวัติ โดยเรียงรายการใหม่สุดก่อน |
| `exportReadableHistory` | — | `void` | ดาวน์โหลดรายงาน HTML ของประวัติที่แปลแล้วและเป็นอิสระในตัว |
| `buildReadableHistoryReport` | `rows: Array, reportTitle: string, summaryNote = ""` | `string (HTML document)` | สร้างมาร์กอัปรายงาน HTML ที่ผ่านการ escape แล้ว |
| `setMergeReportStatus` | `statusElement: HTMLElement, message: string, state: string` | `void` | อัปเดตบรรทัดสถานะของเครื่องมือรวมไฟล์ (`progress`, `success`, `warning`) |
| `exportCombinedHistoryReports` | `files: FileList \| File[], statusElement: HTMLElement, button: HTMLButtonElement` | `Promise<void>` | ตรวจสอบไฟล์สำรอง JSON จำนวนมาก (ไฟล์ละ ≤ 5 MB รวม ≤ 100 MB) ลบรายการซ้ำ และดาวน์โหลดรายงาน HTML รวมหนึ่งฉบับ |
| `isSafeHistoryKey` | `key: string` | `boolean` | ตรวจสอบด้วยรายการที่อนุญาตสำหรับคีย์ประวัติ (บล็อก `__proto__`, `constructor` และคีย์ที่รูปแบบผิด) |
| `importLocalHistory` | `file: File` | `Promise<void>` | ตรวจสอบไฟล์สำรอง JSON รวมเข้ากับประวัติในเครื่อง (ตามขีดจำกัด) และรีเฟรชอินเทอร์เฟซ |
| `readHistoryLimit` | `storageKey: string, allowedValues: number[], defaultValue: number` | `number` | อ่านขีดจำกัดตัวเลขจาก `localStorage` โดยรับเฉพาะค่าที่อนุญาต |
| `getHistoryPerKeyLimit` | — | `number` | จำนวนรายการที่เก็บไว้ต่อคีย์คลิป/เกม (10/20/30/50 ค่าเริ่มต้น 30) |
| `getHistoryTotalLimit` | — | `number` | จำนวนคีย์คลิป/เกมที่เก็บไว้ทั้งหมด (100/200/300/500 ค่าเริ่มต้น 300) |
| `readAdvancedPresetsOpen` | — | `boolean` | ระบุว่าลิ้นชักพรีเซ็ตขยายถูกปล่อยเปิดไว้หรือไม่ |

## ชื่อบัญชีและหน้าคำเชิญ

| ฟังก์ชัน | พารามิเตอร์ | ค่าที่ส่งกลับ | หน้าที่ |
|---|---|---|---|
| `accountNameIsHidden` | — | `boolean` | ระบุว่าชื่อบัญชี Steam ถูกซ่อนอยู่ในขณะนี้หรือไม่ |
| `installAccountNameControl` | — | `void` | เพิ่มสวิตช์รูปตาข้างลิงก์ออกจากระบบ และรักษาให้ซิงก์ผ่าน `MutationObserver` |
| `installInvitePage` | — | `boolean` | ออกแบบ `/vacnet/createinvite` ใหม่: เลย์เอาต์แบบการ์ด แสดง/ซ่อนและคัดลอกลิงก์ (Clipboard API สำรองด้วย `execCommand`) รายการข้อกำหนด ตัวเลือกภาษา ส่งกลับ `false` หากไม่พบองค์ประกอบที่ต้องการ |

## ช่วงคลิปและตัวปรับต่อเครื่องเล่น

| ฟังก์ชัน | พารามิเตอร์ | ค่าที่ส่งกลับ | หน้าที่ |
|---|---|---|---|
| `parseSegmentBounds` | — | `{startTime, endTime, duration} \| null` | ดึง `startTime`/`endTime` จากสคริปต์อินไลน์ของหน้าเว็บ |
| `formatSegmentTime` | `seconds: number` | `string` | จัดรูปแบบวินาทีเป็น `m:ss.cc` |
| `getVideoElement` | — | `HTMLVideoElement \| null` | ค้นหาองค์ประกอบ `<video>` ของการตรวจสอบ |
| `getVjsPlayer` | — | `Video.js player \| null` | ส่งกลับเครื่องเล่น Video.js ของหน้าเว็บ หากมีและยังไม่ถูกทำลาย |
| `createPlayerAdapter` | — | `adapter \| null` | API แบบรวมเหนือ Video.js / วิดีโอ HTML5: `currentTime`, `paused`, `pause`, `play`, `playbackRate(s)`, `muted`, `on`, `isFullscreen`, `requestFullscreen`, `exitFullscreen` |
| `waitForPlayerAdapter` | `timeoutMs = 20000` | `Promise<adapter>` | ตรวจสอบทุก 100 ms จนกว่าจะมีเครื่องเล่น และปฏิเสธเมื่อหมดเวลา |
| `clampSegment` | `time: number, bounds: object` | `number` | จำกัดเวลาให้อยู่ในขอบเขตของคลิป |
| `segmentProgress` | `time: number, bounds: object` | `number (0–1)` | ตำแหน่งสัมพัทธ์ภายในคลิป |
| `installCustomControls` | `player, bounds, refreshDisplay: {current: Function}` | `void` | เพิ่มแถบเลื่อน ตัวแสดงเวลา และคำแนะนำปุ่มลัดใต้วิดีโอ |
| `pauseLayoutMutations` | `run: Function` | `void` | รันคอลแบ็กขณะที่ตัวสังเกตการณ์เลย์เอาต์ถูกระงับ (ป้องกันลูปป้อนกลับ) |
| `isShortcutBlocked` | `target: EventTarget` | `boolean` | เป็นจริงเมื่อโฟกัสอยู่ในช่องกรอก textarea select ปุ่ม ลิงก์ หรือองค์ประกอบที่แก้ไขได้ |
| `formatShiftSpeedLabel` | `rate: number` | `string` | ป้ายชื่อของตัวเลือกความเร็ว |
| `buildShiftSpeedSelectOptions` | `selectedRate: number` | `string (HTML)` | รายการ `<option>` สำหรับตัวเลือกความเร็ว (0.5–4×) |
| `readStoredShiftSpeed` | — | `number` | ความเร็ว Shift ที่บันทึกไว้ (ค่าเริ่มต้น 2×) |
| `readStoredVerdictRandomizer` | — | `boolean` | สถานะที่บันทึกไว้ของตัวสุ่มคำตัดสิน (ค่าเริ่มต้นปิด) |
| `installPlayerEnhancements` | `player: adapter, bounds: object` | `void` | เชื่อมการจัดการความเร็วเล่น การจำกัด/หยุดช่วงคลิป ตัวช่วยเลื่อน/เดินทีละเฟรม/ปิดเสียง/เต็มหน้าจอ และปุ่มลัดแบบโกลบอล (`1`–`5`, ปุ่มลูกศร, `,` `.`, Space, `M`, `F`, Shift) โคลเชอร์ภายใน: `applyPlayerRate`, `setShiftSpeed`, `setShiftSpeedActive`, `seekBy`, `stepFrame`, `togglePlay`, `toggleMute`, `toggleFullscreen`, ตัวช่วยของลูปวาด |

## ชุดคำตัดสินสำเร็จรูป

| ฟังก์ชัน | พารามิเตอร์ | ค่าที่ส่งกลับ | หน้าที่ |
|---|---|---|---|
| `applyDefaultVerdicts` | `root = document` | `void` | เลือก “skip” ในทุกกลุ่มคำตัดสินที่ยังไม่ได้เลือก |
| `getSelectedVerdictState` | — | `object` | ค่าปัจจุบัน (`positive` / `negative` / `skip` / `null`) ของ `aimassist`, `wallhack`, `autobhop`, `bot` |
| `detectActivePreset` | — | `string \| null` | ชื่อพรีเซ็ตที่ตรงกับตัวเลือกปัจจุบัน |
| `syncPresetButtons` | — | `string \| null` | อัปเดต `aria-pressed` บนปุ่มพรีเซ็ตและป้ายของพรีเซ็ตขยาย |
| `applyPreset` | `name: string, { announce = false }` | `Promise<boolean>` | คลิกอินพุตวิทยุของพรีเซ็ต เมื่อเปิดตัวสุ่มจะสลับลำดับและรอ 200–600 ms ระหว่างการคลิก ปิดใช้งานปุ่มพรีเซ็ตขณะทำงาน |
| `normalizeVerdictLabels` | `root = document` | `void` | เอามาร์กอัปเน้นออกจากป้ายคำตัดสิน |
| `applyVerdictSectionTitles` | `root = document` | `void` | เพิ่มหัวข้อที่แปลแล้วเหนือแต่ละกลุ่มคำตัดสิน |

## การแจ้งเตือน ส่วนท้าย และการโหลดขณะส่ง

| ฟังก์ชัน | พารามิเตอร์ | ค่าที่ส่งกลับ | หน้าที่ |
|---|---|---|---|
| `hideSiteFooter` | — | `void` | ซ่อนส่วนท้ายของเว็บไซต์ |
| `showToast` | `message: string, type = "info", duration = 1800` | `void` | แสดงการแจ้งเตือนแบบไม่บล็อกด้วย ARIA-live |
| `markSubmitPending` | — | `void` | เก็บเวลาที่ส่งและ id ของคลิปปัจจุบันไว้ใน `sessionStorage` |
| `isSubmitPending` | — | `boolean` | ระบุว่ามีการส่งที่รอคลิปถัดไปอยู่หรือไม่ |
| `clearSubmitPending` | — | `void` | ล้างเครื่องหมายการส่งที่รอดำเนินการ |
| `showSubmitLoadingOverlay` | `message = tr("nextClip")` | `void` | แสดงเลเยอร์โหลดเต็มหน้า |
| `hideSubmitLoadingOverlay` | — | `void` | ซ่อนเลเยอร์และล้างสถานะที่รออยู่ |
| `bootSubmitLoadingIfPending` | — | `void` | แสดงเลเยอร์อีกครั้งเมื่อโหลดหน้า หากมีการส่งที่รออยู่ |
| `isReviewPageReady` | `prevVod: string, startedAt: number` | `boolean` | เป็นจริงเมื่ออินเทอร์เฟซและสื่อของคลิปถัดไปพร้อมแล้ว |
| `finishSubmitLoadingWhenReady` | — | `Promise<void>` | รอคลิปถัดไปสูงสุด 30 s แล้วซ่อนเลเยอร์ (แจ้งข้อผิดพลาดเมื่อหมดเวลา) |

## ที่เก็บประวัติในเครื่อง

| ฟังก์ชัน | พารามิเตอร์ | ค่าที่ส่งกลับ | หน้าที่ |
|---|---|---|---|
| `extractVodId` | — | `string` | หา id ของคลิป/เกมจาก URL ของวิดีโอ |
| `getGameKey` | — | `string` | คีย์ประวัติของเกม (`game::<id>`) |
| `getClipKey` | `bounds: object` | `string` | คีย์ประวัติของหนึ่งช่วงคลิป (`<id>:<start>:<end>`) |
| `normalizeHistoryEntry` | `entry: any` | `{ts, summary, segment} \| null` | ตรวจสอบและทำความสะอาดรายการประวัติหนึ่งรายการ |
| `readHistoryEntries` | `store: object, key: string` | `Array` | รายการที่ปรับให้เป็นมาตรฐานของคีย์หนึ่ง |
| `getGameHistoryEntries` | `store: object` | `Array` | รายการของเกมปัจจุบัน (รองรับคีย์รุ่นเก่า) |
| `getClipHistoryEntries` | `store: object, bounds: object` | `Array` | รายการของช่วงคลิปปัจจุบัน |
| `formatClipId` | `vodId: string` | `string` | id แสดงผลแบบตัวเลขสั้น ๆ (`#0000000`) ที่ได้จากการแฮช id ของคลิป |
| `formatRelativeTime` | `timestamp: number` | `string` | เวลาสัมพัทธ์ที่แปลแล้ว (`Intl.RelativeTimeFormat`) |
| `readClipHistoryStore` | — | `object` | โหลดอ็อบเจ็กต์ประวัติจาก `localStorage` (`{}` เมื่อเกิดข้อผิดพลาด) |
| `pruneHistoryStore` | `store: object` | `void` | ใช้ขีดจำกัดต่อคีย์และขีดจำกัดรวม (คีย์เก่าสุดถูกตัดก่อน) |
| `writeClipHistoryStore` | `store: object` | `boolean` | ตัดแต่งและบันทึก ส่งกลับ `false` เมื่อโควตา/ที่เก็บข้อมูลผิดพลาด |
| `summarizeCurrentVerdict` | — | `string` | ชื่อพรีเซ็ตของตัวเลือกปัจจุบัน หรือ `mixed` |
| `formatSummaryLabel` | `summary: string` | `string` | ป้ายชื่อที่แปลแล้วสำหรับสรุปประวัติ |
| `formatClockTime` | `seconds: number` | `string` | รูปแบบนาฬิกา `m:ss` (หรือ `x.xs`) |
| `formatHumanSegment` | `bounds: object` | `string` | ช่วงของช่วงคลิปที่อ่านง่าย |
| `formatGameLabel` | — | `string` | ป้ายชื่อที่แปลแล้วของเกมปัจจุบัน |
| `historyEntryKey` | `entry: object` | `string` | สตริงระบุตัวตนที่ใช้ลบรายการซ้ำ |
| `formatPriorStat` | `count: number, label: string` | `string` | บรรทัด “ป้าย: N” ในแผงประวัติ |
| `buildHistoryListItems` | `clipEntries: Array, gameEntries: Array, currentSegment: string` | `Array` | รวมรายการคลิป/เกมเป็นรายการที่จะแสดง |
| `renderHistoryItem` | `item: object` | `string (HTML)` | HTML ของหนึ่งแถวในประวัติ |
| `escapeHtml` | `value: any` | `string` | escape อักขระ `& < > " '` |
| `buildClipHistoryPanel` | `bounds, gameEntries, clipEntries` | `string (HTML)` | HTML ของแผงประวัติ รวมปุ่มกฎการตรวจสอบ |
| `ensureClipHistoryPanel` | — | `void` | สร้างคอนเทนเนอร์ของแผงหากยังไม่มี |
| `ensureReviewRulesDialog` | — | `void` | สร้างกล่องกฎการตรวจสอบและผูกปุ่มเปิด/ปิดของกล่อง |
| `installLocalHistoryButton` | `panel: HTMLElement` | `void` | ผูกปุ่ม “ประวัติในเครื่อง” (เลื่อนไปที่รายการ หรือแสดงการแจ้งเตือนเมื่อว่าง) |
| `positionClipHistoryPanel` | — | `void` | รักษาให้แผงอยู่เป็นอันดับแรกใน `.verdicts-container` |
| `renderClipHistory` | `bounds: object \| null` | `void` | เรนเดอร์แผงประวัติใหม่สำหรับคลิปปัจจุบัน |
| `appendReviewHistory` | `bounds: object \| null` | `void` | เพิ่มสรุปคำตัดสินปัจจุบันลงในประวัติของเกมและคลิป |

## ขั้นตอนการส่ง

| ฟังก์ชัน | พารามิเตอร์ | ค่าที่ส่งกลับ | หน้าที่ |
|---|---|---|---|
| `isLabelingMode` | — | `boolean` | เป็นจริงบนหน้าที่แสดงกลุ่มคำตัดสินทั้งสี่ |
| `getProceedButton` | — | `HTMLButtonElement \| null` | ปุ่มส่งดั้งเดิม หากมองเห็นและเปิดใช้งานอยู่ |
| `recordProceedHistoryIfLabeling` | — | `void` | บันทึกประวัติหนึ่งครั้งต่อการส่ง (มีการป้องกันการเข้าซ้ำ) |
| `resetProceedArmed` | — | `void` | ปลดสถานะพร้อมของการส่งสองขั้นตอน |
| `refreshProceedButtonLabel` | — | `void` | อัปเดตป้ายชื่อปุ่ม/คำแนะนำ `Enter` และสไตล์สถานะพร้อม |
| `verdictLabelForField` | `field: string, selected: string` | `string \| null` | แมปตัวเลือกเป็น `guilty_*` / `innocent_*` / `skip_*` |
| `prepareVerdictFormForSubmit` | — | `boolean` | สร้างอินพุตที่ซ่อน `verdict_labels[]` แสดงการแจ้งข้อผิดพลาดและส่งกลับ `false` หากมีกลุ่มใดยังไม่ได้เลือก |
| `isSafeSubmitTarget` | `form: HTMLFormElement` | `boolean` | อนุญาตเฉพาะ action ของฟอร์ม HTTPS ที่มาจากต้นทางเดียวกัน |
| `restoreSubmitUi` | — | `void` | คืนค่าปุ่มหลังการส่งล้มเหลว |
| `submitVerdictForm` | `{ recordHistory = false }` | `boolean` | ตรวจสอบความปลอดภัย แสดงเลเยอร์โหลด และส่งฟอร์ม |
| `submitVerdictsDirect` | — | `boolean` | เตรียมป้ายชื่อแล้วส่ง |
| `invokeProceedAction` | — | `boolean` | ตัวจัดการ Enter/คลิก: กดครั้งแรกเตรียมพร้อม ครั้งที่สองส่ง |
| `installProceedShortcut` | — | `void` | ตัวฟังในเฟส capture สำหรับ `Enter`/`NumpadEnter` |
| `hookProceedButton` | — | `void` | แทนที่พฤติกรรมการคลิกของปุ่มส่งดั้งเดิม |
| `installVerdictChangeReset` | — | `void` | ปลดสถานะพร้อมของการส่งและซิงก์พรีเซ็ตใหม่เมื่อคำตัดสินเปลี่ยน |
| `scheduleProceedFooterFix` | — | `void` | เรียก `fixProceedFooter` แบบหน่วงเวลา (`requestAnimationFrame`) |
| `scheduleVerdictLabelsFix` | — | `void` | ปรับป้ายชื่อ/หัวข้อ/ค่าเริ่มต้นให้เป็นมาตรฐานใหม่แบบหน่วงเวลา |

## เลย์เอาต์และการเริ่มต้น

| ฟังก์ชัน | พารามิเตอร์ | ค่าที่ส่งกลับ | หน้าที่ |
|---|---|---|---|
| `buildShiftSpeedBar` | — | `HTMLElement` | สร้างแถบเลือกความเร็ว Shift |
| `buildPresetButtonMarkup` | `name: string, shortcut = "", labelOverride = ""` | `string (HTML)` | HTML ของปุ่มพรีเซ็ตหนึ่งปุ่ม |
| `buildAdvancedPresetGroupsMarkup` | — | `string (HTML)` | HTML ของกลุ่มพรีเซ็ตขยาย |
| `buildEnhancementBar` | — | `HTMLElement` | สร้างแถบคำตัดสินด่วน: พรีเซ็ต สวิตช์ตัวสุ่ม ลิ้นชักขยาย |
| `positionShiftSpeedBar` | — | `void` | รักษาให้แถบความเร็วอยู่ก่อนรายการคำตัดสิน |
| `positionEnhancementBar` | — | `void` | รักษาให้แถบพรีเซ็ตอยู่ก่อนปุ่มส่ง |
| `fixProceedFooter` | — | `void` | จัดเรียงส่วนท้าย แถบต่าง ๆ และปุ่มส่งใหม่ |
| `enhanceLayout` | — | `void` | ใช้การเปลี่ยนแปลงเลย์เอาต์ทั้งหมดและติดตั้งอินเทอร์เฟซการตั้งค่า |
| `watchProceedFooter` | — | `void` | สังเกต `.verdicts-container` และกำหนดเวลาแก้ไขส่วนท้าย |
| `watchVerdictLabels` | — | `void` | สังเกตป้ายคำตัดสินและกำหนดเวลาปรับให้เป็นมาตรฐานใหม่ |
| `init` | — | `Promise<void>` | จุดเริ่มต้น: ตัวควบคุมชื่อบัญชี → หน้าคำเชิญหรือหน้าตรวจสอบ → เลย์เอาต์ ตัวสังเกตการณ์ ปุ่มลัด การปรับปรุงเครื่องเล่น |

### ไม่ได้แสดงไว้ข้างต้น

* **`blockSegmentLoopGuard`** (IIFE ทำงานตอนโหลด): ห่อ `setInterval` บนหน้าเว็บ เพื่อให้ตัวจับเวลาวนซ้ำช่วงคลิปดั้งเดิม 100 ms ของเว็บไซต์ถูกแทนที่ด้วยฟังก์ชันว่าง โดยให้ตัวควบคุมของ DemoScope เองจัดการช่วงคลิปแทน
* **ค่าคงที่และตาราง:** `SUPPORTED_LOCALES`, `FLAG_SVG`, `UI_TEXT_ROWS`, `INVITE_TEXT_ROWS`, `SETTINGS_TEXT_ROWS`, `PRESETS`, `PRESET_KEYS`, `PRESET_TONES`, `ADVANCED_PRESET_GROUPS`, `SHIFT_SPEEDS`, `FRAME_STEP`, `ARROW_JUMP_SEC` (`PRESETS`: 21 รายการ)
