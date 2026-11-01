<div align="center">

[English](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/en_FUNCTIONS.md) · [Български](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/bg_FUNCTIONS.md) · [Magyar](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/hu_FUNCTIONS.md) · [Tiếng Việt](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/vi_FUNCTIONS.md) · [Ελληνικά](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/el_FUNCTIONS.md) · [Dansk](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/da_FUNCTIONS.md) · [Bahasa Indonesia](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/id_FUNCTIONS.md) · [Español (España)](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/es-ES_FUNCTIONS.md) · [Español (Latinoamérica)](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/es-419_FUNCTIONS.md) · [Italiano](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/it_FUNCTIONS.md) · [繁體中文](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/zh-TW_FUNCTIONS.md) · [简体中文](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/zh-CN_FUNCTIONS.md) · [한국어](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/ko_FUNCTIONS.md) · [Deutsch](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/de_FUNCTIONS.md) · [Nederlands](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/nl_FUNCTIONS.md) · [Norsk](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/no_FUNCTIONS.md) · [Polski](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/pl_FUNCTIONS.md) · [Português (Portugal)](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/pt-PT_FUNCTIONS.md) · [Português (Brasil)](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/pt-BR_FUNCTIONS.md) · [Română](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/ro_FUNCTIONS.md) · [Русский](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/ru_FUNCTIONS.md) · **ไทย** · [Türkçe](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/tr_FUNCTIONS.md) · [Українська](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/uk_FUNCTIONS.md) · [Suomi](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/fi_FUNCTIONS.md) · [Français](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/fr_FUNCTIONS.md) · [Čeština](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/cs_FUNCTIONS.md) · [Svenska](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/sv_FUNCTIONS.md) · [日本語](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/ja_FUNCTIONS.md)

</div>

# DemoScope — เอกสารอ้างอิงฟังก์ชัน

เอกสารอ้างอิงฉบับสมบูรณ์ของฟังก์ชันระดับบนสุดทั้ง 217 ฟังก์ชันใน `DemoScope.user.js` v1.4.0 (ชื่อ พารามิเตอร์ ค่าที่ส่งกลับ หน้าที่) กลับไปที่ [README](../README.md)

สัญลักษณ์: `—` หมายถึงไม่มีพารามิเตอร์ `void` หมายถึงฟังก์ชันถูกเรียกเพื่อผลข้างเคียง

## ภาพรวมการทำงานสำหรับผู้ใช้

| หัวข้อ | คำอธิบาย |
|---|---|
| หน้าที่รองรับ | เพิ่มความสามารถให้หน้าต้อนรับ VACNet (`/vacnet`), หน้าตรวจคลิป (`/vacnet/clips`), หน้าคำเชิญ (`/vacnet/createinvite`) และสถานะไม่มีคลิปในหน้าตรวจ โดยไม่เปลี่ยนหน้าอื่น |
| ประเภทงาน | ตรวจจับแบบฟอร์ม VACNet **แบบฟอร์มคลาสสิก** (aim assist, wallhack, auto-bhop, bot) มีชุดตัวเลือกและชุดผสมเพิ่มเติม **งานคำถามเดียว** ใช้หน้าจอกะทัดรัด มีคำตัดสินสามรายการบนปุ่ม `1`–`3` ตัวบอกการล็อกพร้อมเวลาคลิปที่เหลือ และไม่มีคำตัดสินด่วนหรือชุดผสม |
| ภาษา | รองรับ 29 ภาษาของ Steam โดยใช้ภาษาที่เลือกเองและบันทึกไว้ก่อน หากไม่มีจะใช้ `?l=` ของ Steam แล้วจึงใช้ภาษาของเบราว์เซอร์/หน้าเว็บ การเลือกภาษาใน DemoScope ส่ง `?l=` ที่ตรงกันไปยัง VACNet ด้วย โหมดอัตโนมัติซิงก์ภาษา Steam กับเบราว์เซอร์ |
| หน้าต้อนรับและหน้าคำเชิญ | ปรับหน้าตาทั้งสองหน้า เพิ่มตัวเลือกภาษาและปุ่มรูปตาเพื่อซ่อนชื่อบัญชี หน้าต้อนรับใช้ Enter/Space ไปต่อเมื่อไม่ได้โฟกัสตัวควบคุม หน้าคำเชิญซ่อน/แสดงและคัดลอกลิงก์ได้ พร้อมแจ้งเงื่อนไข; × ปิด, Enter ทำหน้าที่ “Done”, Esc ทำหน้าที่เหมือน × |
| การตรวจคลิป | เพิ่มชุดคำตัดสินและชุดผสม ตัวสุ่ม (ปิดเป็นค่าเริ่มต้น) ความเร็วเมื่อกด Shift ค้าง การเลื่อนในช่วงคลิป การเลื่อนทีละเฟรม และปุ่มลัดเล่น ปุ่ม “?” แสดงคำอธิบายหมวดที่แปลแล้ว และเน้นวลีหลักด้วยสี DemoScope |
| ปุ่มลัด | ปุ่มลัดทั้งหมดอยู่ในทะเบียนการทำงานร่วม แก้ได้ที่ **การตั้งค่า → ปุ่มลัด** ตรวจการชนแยกตามหน้าและแสดงการทำงาน/กลุ่ม/คำอธิบายที่ใช้ปุ่มนั้น เลือกแทนที่ สลับ หรือยกเลิกได้ แต่ละรายการรีเซ็ตได้ และคำแนะนำบนหน้าตามปุ่มที่กำหนด |
| การส่งคำตัดสิน | `Enter` หรือ `Numpad Enter` สั่ง “Continue” แบบฟอร์มคลาสสิกกดครั้งแรกเพื่อเตรียมและกดอีกครั้งเพื่อส่ง งานคำถามเดียวแสดงการยืนยัน VACNet หลังเลือกคำตัดสิน และยืนยันด้วย Enter `Esc` ยกเลิกการรอยืนยันหรือการกดครั้งแรก ส่วน Space ไม่ใช่ปุ่มส่ง |
| การตั้งค่า | `F2` เปิดหน้าต่างตั้งค่า (เปลี่ยนได้ในหน้าต่างปุ่มลัด) มีปุ่มลัด ภาพเคลื่อนไหว เอฟเฟกต์เสียง/ระดับเสียง ประวัติในเครื่องและขีดจำกัด รูปแบบเวลา 12/24 ชั่วโมง การสำรองข้อมูล ส่วนท้าย การวินิจฉัย และปุ่มรีเซ็ตชุดเดียว |
| ภาพเคลื่อนไหว | จุดข้าง “DemoScope” ใช้ได้หกรูปแบบ (pulse, breathe, ripple, heartbeat, orbit, blink) พร้อมตัวอย่างสด สามความเร็ว และสวิตช์ หากระบบลดการเคลื่อนไหวจะปิดไว้ตอนเริ่มต้น |
| ประวัติในเครื่อง | บันทึกสรุปคำตัดสินใน `localStorage` โดยไม่อัปโหลด นำเข้า/ส่งออก JSON หรือ HTML รวมไฟล์ JSON เป็นรายงาน HTML เดียว และลบหรือปิดได้ จำกัด 10/20/30/50 รายการต่อคีย์ และ 100/200/300/500 คีย์ทั้งหมด การปิดหยุดบันทึกใหม่แต่ไม่ลบของเดิม; บันทึกเฉพาะแบบฟอร์มคลาสสิก |
| คิวว่าง | แทนข้อความ VACNet ด้วยคำแนะนำที่แปลแล้ว เวลาที่พบครั้งแรกซึ่งเก็บในเบราว์เซอร์ และตัวเลือกภาษา ข้อมูล 250 เดโมต่อวันมาจากการสังเกต; DemoScope ไม่บังคับหรือเลี่ยงขีดจำกัด |
| ส่วนท้าย | ใช้ส่วนท้าย DemoScope ที่แปลแล้ว หน้าคลิปอาจแสดงลิงก์ข้อเสนอแนะ/รายงาน และซ่อนลิงก์แต่ละรายการ บรรทัดลิขสิทธิ์ หรือส่วนท้ายทั้งหมดได้ |
| ความทนทานต่อข้อผิดพลาด | แต่ละขั้นตั้งค่าแยกกันและมีวิธีค้นหาองค์ประกอบสำรอง หากจำแนกหน้าไม่ได้ DemoScope จะปิดตัวเองเฉพาะหน้านั้น คืนรูปแบบ VACNet และแจ้งสั้น ๆ **การตั้งค่า → การวินิจฉัย** คัดลอกรายงานที่มีเวอร์ชัน องค์ประกอบที่พบ ขั้นตอนผิดพลาด และโครงสร้างหน้า |

## การปรับภาษา

| ฟังก์ชัน | พารามิเตอร์ | ค่าที่คืน | หน้าที่ |
|---|---|---|---|
| `getFlagSvg` | `locale: string` | `string` | มาร์กอัป SVG แบบอินไลน์ของธงสำหรับภาษาหนึ่ง ถ้าไม่มีจะใช้ไอคอนลูกโลก |
| `getSavedLocale` | — | `string \| null` | อ่านภาษาที่ผู้ใช้บันทึกไว้ (`demoscopeLanguage`) จาก `localStorage` |
| `getActiveLocale` | — | `string` | กำหนดภาษาที่ใช้งาน: ตัวเลือกที่บันทึกไว้ → Steam `?l=` → ภาษาของเบราว์เซอร์/หน้าเว็บ → `en` |
| `getLanguageBadge` | — | `string` | ชื่อที่แสดงของภาษานั้นเอง เช่น “English version” สำหรับป้ายในตัวเลือกภาษา |
| `getBrowserLocale` | — | `string \| null` | ค้นหาภาษาเบราว์เซอร์ที่รองรับรายการแรก รวมถึงรูปแบบภูมิภาค |
| `syncAutomaticLanguage` | — | `boolean` | โหมดอัตโนมัติจะซิงค์ ?l= กับภาษาเบราว์เซอร์และเปลี่ยนหน้าเมื่อไม่ตรงกัน |
| `getRenderedSteamLanguage` | — | `string \| null` | อ่านภาษาที่ VACNet ใช้แสดงหน้าเว็บจริงจากพารามิเตอร์ l= ใน URL ของ stylesheet และสคริปต์ของหน้าเว็บนั้น |
| `syncSelectedLanguage` | — | `boolean` | เมื่อเลือกภาษาเองใน DemoScope จะเรียกหน้าเว็บอีกครั้งหนึ่งพร้อม ?l= ที่ตรงกัน เพื่อให้ข้อความของ VACNet ใช้ภาษานั้น หากภาษาตรงกันอยู่แล้วจะข้าม และป้องกันการเปลี่ยนเส้นทางวนซ้ำ คืนค่า true เมื่อมีการนำทาง |
| `tr` | `key: string` | `string` | ค้นหาข้อความอินเทอร์เฟซสำหรับภาษาที่ใช้งาน (สำรอง: อังกฤษ แล้วจึงใช้คีย์เอง) |
| `inviteText` | `key: string` | `string` | การค้นหาแบบเดียวกันสำหรับตารางข้อความของหน้าคำเชิญ |
| `settingText` | `key: string` | `string` | การค้นหาแบบเดียวกันสำหรับตารางข้อความของกล่องตั้งค่า |
| `getPresetLabel` | `name: string` | `string` | ป้ายชื่อที่แปลแล้วของพรีเซ็ต ประกอบชุดผสมเช่น “Bot + Aim” |
| `buildLanguageOptions` | `{ activeLocale = getActiveLocale(), selectedLocale = null } = {}` | `string (HTML)` | HTML ของปุ่มเลือกภาษา รวมถึงรายการ “auto” |
| `installLanguageSelector` | `root: HTMLElement, onLocaleSelect: Function \| null = null` | `void` | เชื่อมต่อและจัดตำแหน่งตัวเลือกภาษา บันทึกตัวเลือกและโหลดหน้าใหม่; callback เสริมสามารถจัดการตัวเลือกแทนได้ |
| `queueNoticeText` | `key: string, locale = getQueueNoticeLocale()` | `string` | ค้นหาข้อความที่แปลแล้วสำหรับคิวว่างหรือส่วนท้าย |

## เอฟเฟกต์เสียงและกล่องตั้งค่า

| ฟังก์ชัน | พารามิเตอร์ | ค่าที่คืน | หน้าที่ |
|---|---|---|---|
| `getSettingsHistorySummary` | — | `string` | บรรทัด “N รายการ · รายการล่าสุด: …” ที่แสดงในกล่องตั้งค่า |
| `soundsEnabled` | — | `boolean` | ระบุว่าเสียงของอินเทอร์เฟซเปิดอยู่หรือไม่ (`demoscopeSoundEffectsEnabled` ค่าเริ่มต้นเปิด) |
| `getSoundVolume` | — | `number (0–1)` | ระดับเสียงที่บันทึกไว้ (`demoscopeSoundEffectsVolume` ค่าเริ่มต้น 0.4) |
| `playUiSound` | `kind = "click"` | `void` | สังเคราะห์ลำดับเสียงสั้น ๆ ด้วย Web Audio (`click`, `select`, `toggle`, `copy`, `confirm`, `preview`, `tick`, `open`, `close`, `error`) และไม่โยนข้อผิดพลาดเลย |
| `readSettingsHotkey` | — | `string` | `KeyboardEvent.code` ที่บันทึกไว้สำหรับเปิดกล่องตั้งค่า (ค่าเริ่มต้น `F2`) |
| `formatHotkey` | `code: string` | `string` | ชื่อปุ่มที่อ่านง่าย (`KeyQ` → `Q`, `Numpad1` → `Num 1`) |
| `getSettingsHotkeyCode` | `event: KeyboardEvent` | `string` | ดึงรหัสปุ่มจริง โดยแมปเลย์เอาต์ที่ไม่ใช่ละตินกลับเป็น `KeyX` ส่งกลับ `""` หากใช้ไม่ได้ |
| `isReservedSettingsHotkey` | `code: string` | `boolean` | เป็นจริงสำหรับปุ่มที่ DemoScope หรือเครื่องเล่นใช้อยู่แล้ว (Enter, Space, ปุ่มลูกศร, `M`, `F`, `1`–`5`, …) |
| `ensureSettingsDialog` | — | `HTMLDialogElement` | สร้างและเชื่อมการตั้งค่า: เสียงและระดับเสียง ทดลองเสียง ปุ่มลัด ประวัติในเครื่องและขีดจำกัด รูปแบบเวลา นำเข้า/ส่งออก JSON ส่งออก/รวม HTML ล้างประวัติ การแสดงส่วนท้าย และรีเซ็ต |
| `openSettingsDialog` | `opener = null` | `void` | เปิดกล่องพร้อมค่าปัจจุบัน และจำองค์ประกอบที่ต้องคืนโฟกัสให้ |
| `installSettingsUi` | — | `void` | ติดตั้งตัวฟังปุ่มแบบโกลบอลในเฟส capture (เปิด/ปิดกล่อง การกำหนดปุ่มใหม่) และอีเวนต์เสียง |
| `installUiSoundEvents` | — | `void` | ตัวฟังการคลิกแบบมอบหมายที่เล่นเสียงตอบสนองสำหรับตัวควบคุมของ DemoScope |
| `ensureSettingsLayoutStyles` | — | `void` | เพิ่มสไตล์หน้าต่างการตั้งค่า จัดส่วนต่าง ๆ ชิดซ้ายและแสดงแถวรายการพร้อมป้ายสรุป |
| `refreshSettingsSummaries` | — | `void` | อัปเดตป้ายสรุปของรายการแป้นพิมพ์ลัดและภาพเคลื่อนไหว |
| `installExtraSettingsSections` | `settingsDialog: HTMLDialogElement` | `void` | เพิ่มส่วนแป้นพิมพ์ลัด ภาพเคลื่อนไหว การวินิจฉัย และรีเซ็ต พร้อมซ่อนส่วนปุ่มตั้งค่าแบบเดิม |

## ไฟล์สำรอง รายงาน และขีดจำกัดประวัติ

| ฟังก์ชัน | พารามิเตอร์ | ค่าที่คืน | หน้าที่ |
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

## ชื่อบัญชีและหน้าคำเชิญ

| ฟังก์ชัน | พารามิเตอร์ | ค่าที่คืน | หน้าที่ |
|---|---|---|---|
| `accountNameIsHidden` | — | `boolean` | ระบุว่าชื่อบัญชี Steam ถูกซ่อนอยู่ในขณะนี้หรือไม่ |
| `installAccountNameControl` | — | `void` | เพิ่มสวิตช์รูปตาข้างลิงก์ออกจากระบบ และรักษาให้ซิงก์ผ่าน `MutationObserver` |
| `installInvitePage` | — | `boolean` | ออกแบบ `/vacnet/createinvite` ใหม่: เลย์เอาต์แบบการ์ด แสดง/ซ่อนและคัดลอกลิงก์ (Clipboard API สำรองด้วย `execCommand`) รายการข้อกำหนด ตัวเลือกภาษา ส่งกลับ `false` หากไม่พบองค์ประกอบที่ต้องการ |
| `installInviteExtras` | `card: HTMLElement, doneLink: HTMLElement \| null` | `void` | เพิ่มปุ่มปิด (×) และตัวฟังเหตุการณ์ช่วง capture สำหรับ inviteDone และ inviteClose โดยไม่ทำงานเมื่อโฟกัสอยู่ที่ปุ่ม ลิงก์ ช่องกรอก หน้าต่างโมดัล หรือรายการภาษา |
| `refreshInviteKeyLabels` | — | `void` | แสดงป้าย “Done” และคำแนะนำของ × ใหม่ตามการกำหนดปุ่มปัจจุบัน |
| `installWelcomePage` | — | `boolean` | ปรับหน้าต้อนรับ เพิ่มแบรนด์และตัวเลือกภาษา; Enter/Space เพื่อดำเนินการต่อ; คืนค่า false หากไม่มีองค์ประกอบที่จำเป็น |

## ช่วงคลิปและตัวปรับต่อเครื่องเล่น

| ฟังก์ชัน | พารามิเตอร์ | ค่าที่คืน | หน้าที่ |
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
| `isShortcutBlocked` | `target: EventTarget` | `boolean` | คืนค่า true เมื่อโฟกัสอยู่ในช่องกรอกข้อมูล textarea select หรือข้อความที่แก้ไขได้ |
| `isPlayerShortcutBlocked` | `target: EventTarget` | `boolean` | ทำงานเหมือน isShortcutBlocked แต่อนุญาตให้ปุ่มตัวเลือกคำตัดสินผ่านได้ เพราะโฟกัสยังอยู่ที่ปุ่มหลังคลิก |
| `formatShiftSpeedLabel` | `rate: number` | `string` | ป้ายชื่อของตัวเลือกความเร็ว |
| `buildShiftSpeedSelectOptions` | `selectedRate: number` | `string (HTML)` | รายการ `<option>` สำหรับตัวเลือกความเร็ว (0.5–4×) |
| `readStoredShiftSpeed` | — | `number` | ความเร็ว Shift ที่บันทึกไว้ (ค่าเริ่มต้น 2×) |
| `readStoredVerdictRandomizer` | — | `boolean` | สถานะที่บันทึกไว้ของตัวสุ่มคำตัดสิน (ค่าเริ่มต้นปิด) |
| `installPlayerEnhancements` | `player: adapter, bounds: object` | `void` | เชื่อมการจัดการความเร็วเล่น การจำกัด/หยุดช่วงคลิป ตัวช่วยเลื่อน/เดินทีละเฟรม/ปิดเสียง/เต็มหน้าจอ และปุ่มลัดแบบโกลบอล (`1`–`5`, ปุ่มลูกศร, `,` `.`, Space, `M`, `F`, Shift) โคลเชอร์ภายใน: `applyPlayerRate`, `setShiftSpeed`, `setShiftSpeedActive`, `seekBy`, `stepFrame`, `togglePlay`, `toggleMute`, `toggleFullscreen`, ตัวช่วยของลูปวาด |

## ชุดคำตัดสินสำเร็จรูป

| ฟังก์ชัน | พารามิเตอร์ | ค่าที่คืน | หน้าที่ |
|---|---|---|---|
| `applyDefaultVerdicts` | `root = document` | `void` | เลือก “skip” ในทุกกลุ่มคำตัดสินที่ยังไม่ได้เลือก |
| `getSelectedVerdictState` | — | `object` | ค่าปัจจุบัน (`positive` / `negative` / `skip` / `null`) ของ `aimassist`, `wallhack`, `autobhop`, `bot` |
| `detectActivePreset` | — | `string \| null` | ชื่อพรีเซ็ตที่ตรงกับตัวเลือกปัจจุบัน |
| `syncPresetButtons` | — | `string \| null` | อัปเดต `aria-pressed` บนปุ่มพรีเซ็ตและป้ายของพรีเซ็ตขยาย |
| `applyPreset` | `name: string, { announce = false }` | `Promise<boolean>` | คลิกอินพุตวิทยุของพรีเซ็ต เมื่อเปิดตัวสุ่มจะสลับลำดับและรอ 200–600 ms ระหว่างการคลิก ปิดใช้งานปุ่มพรีเซ็ตขณะทำงาน |
| `readAdvancedPresetsOpen` | — | `boolean` | ระบุว่าลิ้นชักพรีเซ็ตขยายถูกปล่อยเปิดไว้หรือไม่ |
| `normalizeVerdictLabels` | `root = document` | `void` | เอามาร์กอัปเน้นออกจากป้ายคำตัดสิน |
| `applyVerdictSectionTitles` | `root = document` | `void` | เพิ่มหัวข้อที่แปลแล้วเหนือแต่ละกลุ่มคำตัดสิน |
| `ensureVerdictHelp` | `block: HTMLElement, titleEl: HTMLElement, title: string, field: string` | `void` | สร้างปุ่ม “?” และป๊อปโอเวอร์คำอธิบายสำหรับกลุ่มคำตัดสิน โดยใช้ข้อความที่แปลของ DemoScope |
| `closeVerdictHelp` | `except = null` | `void` | ปิดป๊อปโอเวอร์คำอธิบายที่เปิดอยู่ทั้งหมด ยกเว้นรายการที่ระบุ |
| `installVerdictHelpHandlers` | — | `void` | ติดตั้งตัวจัดการคลิกแบบมอบหมาย คลิกด้านนอก และ Esc สำหรับป๊อปโอเวอร์เพียงครั้งเดียว |

## การแจ้งเตือน ส่วนท้าย และการโหลดขณะส่ง

| ฟังก์ชัน | พารามิเตอร์ | ค่าที่คืน | หน้าที่ |
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

| ฟังก์ชัน | พารามิเตอร์ | ค่าที่คืน | หน้าที่ |
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
| `isLocalHistoryEnabled` | — | `boolean` | อ่านว่าประวัติในเครื่องเปิดใช้งานหรือไม่ โดยค่าเริ่มต้นเปิดอยู่ |
| `readTimeFormat` | — | `string` | อ่านรูปแบบเวลา: อัตโนมัติ 12 หรือ 24 ชั่วโมง |
| `formatQueueFirstSeen` | `timestamp: number, locale = getActiveLocale()` | `string` | จัดรูปแบบเวลาที่ตรวจพบครั้งแรกตามภาษาและรูปแบบเวลา |
| `getQueueNoticeLocale` | — | `string` | คืนค่าภาษาที่ใช้งานสำหรับการแจ้งเตือนคิวว่าง |
| `migrateEmptyQueueLanguage` | — | `boolean` | ย้ายตัวเลือกภาษาเดิมไปยังการตั้งค่าร่วมและซิงค์ URL |
| `updateEmptyQueueTimestamp` | — | `void` | อัปเดตเวลาที่ตรวจพบครั้งแรกบนหน้าจอ |

## ขั้นตอนการส่ง

| ฟังก์ชัน | พารามิเตอร์ | ค่าที่คืน | หน้าที่ |
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
| `submitVerdictForm` | `{ recordHistory = false } = {}` | `boolean` | ตรวจสอบความปลอดภัย แสดงเลเยอร์โหลด และส่งฟอร์ม |
| `submitVerdictsDirect` | — | `boolean` | เตรียมป้ายชื่อแล้วส่ง |
| `invokeProceedAction` | — | `boolean` | ตัวจัดการ Enter/คลิก: กดครั้งแรกเตรียมพร้อม ครั้งที่สองส่ง |
| `installProceedShortcut` | — | `void` | ตัวฟังในเฟส capture สำหรับ `Enter`/`NumpadEnter` |
| `invokeCancelAction` | — | `boolean` | ยกเลิกการเตรียมจากการกดครั้งแรกของการส่งแบบสองขั้น หรือคลิกปุ่ม “Cancel” ที่แสดงอยู่ คืนค่า false หากไม่มีสิ่งให้ยกเลิก |
| `refreshCancelButtonLabel` | — | `void` | เพิ่มหรืออัปเดตป้ายปุ่มลัดบน “Cancel” |
| `hookProceedButton` | — | `void` | แทนที่พฤติกรรมการคลิกของปุ่มส่งดั้งเดิม |
| `installVerdictChangeReset` | — | `void` | ปลดสถานะพร้อมของการส่งและซิงก์พรีเซ็ตใหม่เมื่อคำตัดสินเปลี่ยน |
| `scheduleProceedFooterFix` | — | `void` | เรียก `fixProceedFooter` แบบหน่วงเวลา (`requestAnimationFrame`) |
| `scheduleVerdictLabelsFix` | — | `void` | ปรับป้ายชื่อ/หัวข้อ/ค่าเริ่มต้นให้เป็นมาตรฐานใหม่แบบหน่วงเวลา |

## ทะเบียนและการกำหนดปุ่มลัดใหม่

| Action | Default | Group | คำอธิบาย |
|---|---|---|---|
| `playPause` | `Space` | Playback | หยุดชั่วคราวหรือเล่นคลิปต่อ |
| `mute` | `M` | Playback | ปิดหรือเปิดเสียง |
| `fullscreen` | `F` | Playback | เข้าหรือออกจากโหมดเต็มหน้าจอ |
| `seekBack` / `seekForward` | `←` / `→` | นำทาง | ย้อน/ข้ามไปข้างหน้า 5 วินาที |
| `frameBack` / `frameForward` | `,` / `.` | นำทาง | ย้อน/เดินหน้าทีละหนึ่งเฟรม |
| `speedBoost` | `Shift` | Navigation | เร่งการเล่นขณะกดปุ่มค้าง เป็นการทำงานเดียวที่ใช้ Shift ได้ |
| `quick1` … `quick5` | `1` … `5` | คำตัดสิน | แบบฟอร์มคลาสสิก: ชุดสำเร็จรูป 1–5 งานคำถามเดียว: Cheating / Not sure / No cheats seen (`1`–`3`) |
| `proceed` | `Enter` | Submission | ยืนยันคำตัดสิน หรือเตรียมและส่งแบบฟอร์มแบบคลาสสิก |
| `cancel` | `Esc` | Submission | กด “Cancel” หรือยกเลิกการกด Enter ครั้งแรก |
| `inviteDone` | `Enter` | Invite page | ออกจากหน้าคำเชิญเช่นเดียวกับปุ่ม “Done” |
| `inviteClose` | `Esc` | Invite page | ทำงานเหมือนปุ่ม × |
| `settings` | `F2` | Interface | เปิดหรือปิดกล่องโต้ตอบการตั้งค่า |

การกำหนดปุ่มจะบันทึกเป็นค่า `KeyboardEvent.code` ใน `demoscopeKeybindings` (บันทึกเฉพาะค่าที่เปลี่ยนจากค่าเริ่มต้น ส่วนปุ่มตั้งค่ามีรายการแยก) ปุ่ม modifier ซ้าย/ขวานับเป็นปุ่มเดียว และแป้นตัวเลขสอดคล้องกับแถวหลัก ปุ่มที่กำหนดไม่ได้: `Tab`, `Ctrl`, `Alt`, `Meta`, `Caps Lock`, `ContextMenu`, `F5`, `F11`, `F12` ขอบเขตแยกเป็น `review`, `invite` และ `global` สำหรับตั้งค่าซึ่งชนกับทุกการทำงาน

| ฟังก์ชัน | พารามิเตอร์ | ค่าที่คืน | หน้าที่ |
|---|---|---|---|
| `fmt` | `template: string, vars = {}` | `string` | แทนที่ตัวแทน {name} ในเทมเพลตที่แปลแล้ว |
| `isModalOpen` | — | `boolean` | คืนค่า true เมื่อมี <dialog> เปิดอยู่ และจะไม่ทำงานปุ่มลัดของหน้าในช่วงนั้น |
| `normalizeKeyCode` | `code: string` | `string` | รวมปุ่ม modifier ซ้าย/ขวาเป็นปุ่มเดียว และจับคู่ตัวเลขแป้นตัวเลขกับ NumpadEnter ให้เป็นปุ่มแถวหลัก |
| `formatKeyLabel` | `code: string` | `string` | ชื่อปุ่มที่ใช้แสดงผล (ArrowLeft → ←, KeyM → M, Escape → Esc) |
| `loadKeyOverrides` | — | `object` | อ่านและตรวจสอบการกำหนดปุ่มที่บันทึกไว้ (ใช้แคช; คืนค่า {} เมื่อผิดพลาด) |
| `saveKeyOverrides` | `overrides: object` | `void` | บันทึกการกำหนดปุ่ม หรือลบรายการเมื่อทุกปุ่มเป็นค่าเริ่มต้น |
| `getBinding` | `id: string` | `string` | คืนค่าปุ่มปัจจุบันของการทำงาน; คืนสตริงว่างเมื่อยังไม่ได้กำหนด |
| `setBinding` | `id: string, code: string` | `void` | บันทึกปุ่มให้การทำงาน; รหัสว่างจะยกเลิกการกำหนด และจะไม่บันทึกค่าเริ่มต้น |
| `resetAllBindings` | — | `void` | คืนค่าการกำหนดปุ่มทั้งหมด รวมถึงปุ่มตั้งค่า เป็นค่าเริ่มต้น |
| `findKeyConflict` | `id: string, code: string` | `object \| null` | ค้นหาการทำงานอื่นที่ใช้ปุ่มเดียวกันในขอบเขตที่ทับซ้อนกัน |
| `getActionForEvent` | `event: KeyboardEvent, scope = currentKeyScope()` | `string \| null` | แปลงเหตุการณ์แป้นพิมพ์เป็นรหัสการทำงานตามขอบเขตหน้าปัจจุบัน |
| `keyScopeOf` | `id: string` | `string` | ขอบเขตของการทำงาน: review, invite หรือ global |
| `keyScopesOverlap` | `a: string, b: string` | `boolean` | คืนค่า true หากขอบเขตสองรายการอาจชนกัน (เหมือนกันหรือรายการใดรายการหนึ่งเป็น global) |
| `currentKeyScope` | — | `string` | คืนค่า invite ในหน้าคำเชิญ และคืนค่า review ในหน้าอื่น |
| `validateKeyForAction` | `id: string, code: string` | `string` | คืนสตริงว่างเมื่อกำหนดปุ่มได้, reserved สำหรับปุ่มเบราว์เซอร์/นำทาง และ shift เมื่อใช้ Shift กับการทำงานที่ไม่ต้องกดค้าง |
| `quickRangeLabel` | `count: number` | `string` | ป้ายปุ่มคำตัดสินด่วน: 1–5 หากยังไม่เปลี่ยน มิฉะนั้นแสดงปุ่มที่กำหนดไว้ |
| `buildHintsInnerMarkup` | — | `string (HTML)` | สร้างคำแนะนำปุ่มใต้คลิปวิดีโอตามการกำหนดปัจจุบัน |
| `refreshKeyLabels` | — | `void` | อัปเดตป้ายปุ่มทั้งหมดบนหน้า รวมถึงคำแนะนำ ป้ายกำกับ ดำเนินการต่อ/ยกเลิก/คำเชิญ และสรุปการตั้งค่า |
| `ensureDemoscopeDialogStyles` | — | `void` | เพิ่มรูปลักษณ์ร่วมให้หน้าต่างแป้นพิมพ์ลัดและภาพเคลื่อนไหว |
| `hkActionName` | `id: string` | `string` | ชื่อการทำงานที่แปลแล้ว |
| `hkGroupName` | `group: string` | `string` | ชื่อกลุ่มที่แปลแล้ว |
| `hkActionDescription` | `id: string` | `string` | คำอธิบายการทำงานที่แปลแล้ว โดยอธิบายคำตัดสินด่วนสำหรับงานทั้งสองแบบ |
| `hkSetMessage` | `text: string, warn = false` | `void` | ตั้งค่าบรรทัดสถานะของหน้าต่างแป้นพิมพ์ลัด |
| `hkCancelCapture` | — | `void` | ออกจากโหมดบันทึกปุ่ม |
| `hkRowMarkup` | `action: object` | `string (HTML)` | มาร์กอัป HTML ของแถวการทำงานหนึ่งรายการ รวมถึงแผงแจ้งปุ่มชนกันหากมี |
| `renderHotkeys` | — | `void` | แสดงหน้าต่างทั้งหมดใหม่โดยคงตำแหน่งการเลื่อน |
| `hkCommit` | `actionId: string, code: string, mode = "replace"` | `void` | กำหนดปุ่ม; replace ยกเลิกปุ่มของการทำงานอื่น ส่วน swap สลับปุ่มกัน |
| `hkRequestAssign` | `actionId: string, code: string` | `void` | กำหนดปุ่มโดยตรง หรือเปิดแผงปุ่มชนกัน (Replace / Swap / Cancel) เมื่อมีการใช้ปุ่มแล้ว |
| `ensureHotkeysDialog` | — | `HTMLDialogElement` | สร้างหน้าต่างแป้นพิมพ์ลัดและตัวฟังปุ่มช่วง capture; สามารถกำหนด Esc ได้ และจะไม่ปิดหน้าต่างระหว่าง capture |
| `openHotkeysDialog` | — | `void` | เปิดหน้าต่างแป้นพิมพ์ลัด |

## ภาพเคลื่อนไหว

มีรูปแบบจุดสถานะหกแบบ (`pulse`, `breathe`, `ripple`, `heartbeat`, `orbit`, `blink`) ความเร็วสามระดับ (0.6× / 1× / 1.7×) และสวิตช์เปิด/ปิด บันทึกใน `demoscopeAnimStyle`, `demoscopeAnimSpeed`, `demoscopeAnimEnabled` รูปแบบที่ใช้ตั้งผ่าน `data-ds-anim` บน `<html>` (เป็น `off` เมื่อปิด) เพื่อให้ stylesheet ควบคุมทั้งจุดจริงและตัวอย่าง

| ฟังก์ชัน | พารามิเตอร์ | ค่าที่คืน | หน้าที่ |
|---|---|---|---|
| `readStorage` | `key: string` | `string \| null` | อ่าน localStorage อย่างปลอดภัย |
| `writeStorage` | `key: string, value: string \| null` | `void` | เขียน localStorage อย่างปลอดภัย; ค่า null จะลบคีย์ |
| `animEnabled` | — | `boolean` | สถานะภาพเคลื่อนไหวที่บันทึกไว้; ปิดเป็นค่าเริ่มต้นเมื่อระบบร้องขอให้ลดการเคลื่อนไหว |
| `animStyle` | — | `string` | รูปแบบที่บันทึกไว้ (ค่าเริ่มต้น pulse) |
| `animSpeedKey` | — | `string` | ความเร็วที่บันทึกไว้ (slow / normal / fast; ค่าเริ่มต้น normal) |
| `ensureAnimationStyles` | — | `void` | เพิ่ม keyframe และกฎร่วมสำหรับจุดสถานะและจุดตัวอย่าง |
| `applyAnimationSettings` | — | `void` | ใช้รูปแบบ ความเร็ว และสถานะเปิด/ปิดกับ <html> แล้วอัปเดตสรุปการตั้งค่า |
| `ensureAnimationsDialog` | — | `HTMLDialogElement` | สร้างหน้าต่างภาพเคลื่อนไหวพร้อมสวิตช์ ความเร็ว การ์ดรูปแบบที่แสดงตัวอย่างสด และปุ่มรีเซ็ต |
| `openAnimationsDialog` | — | `void` | เปิดหน้าต่างภาพเคลื่อนไหว |
| `ensureUiPolishStyles` | — | `void` | เพิ่มแถบเลื่อนสีเข้มแบบบางและ color-scheme: dark ให้หน้าต่างและรายการคำตัดสิน |

## งานคำถามเดียว

| ฟังก์ชัน | พารามิเตอร์ | ค่าที่คืน | หน้าที่ |
|---|---|---|---|
| `isCheatingMode` | — | `boolean` | คืนค่า true เมื่อหน้าแสดงแบบฟอร์มคำถามเดียว (#verdictbuttons_cheating) |
| `selectCheatingVerdict` | `kind: string` | `void` | คลิกตัวเลือก Cheating / Not sure / No cheats seen; หากยังล็อกอยู่จะเล่นเสียงผิดพลาดและเขย่าการ์ดล็อก |
| `localizeCheatingVerdicts` | — | `void` | เปลี่ยนป้ายทั้งสามเป็นภาษาของ DemoScope และวาดป้ายปุ่มด้วย CSS เพื่อไม่ให้ตัวเลขปุ่มปรากฏในข้อความยืนยันของ VACNet พร้อมเตรียมการ์ดล็อก |
| `updateCheatingLock` | — | `void` | อัปเดตการ์ดล็อกและแถบความคืบหน้าด้วยเวลาที่เหลือก่อนปลดล็อกคำตัดสินอีกสองข้อ และซ่อนเมื่อปลดล็อกหรือเลือกคำตัดสินแล้ว |
| `startCheatingLockWatcher` | — | `void` | เริ่มตัวจับเวลาที่เรียก updateCheatingLock ทุก 250 มิลลิวินาที |

## ความทนทานและการวินิจฉัย

| ฟังก์ชัน | พารามิเตอร์ | ค่าที่คืน | หน้าที่ |
|---|---|---|---|
| `recordFailure` | `step: string, error: any` | `void` | บันทึกขั้นตอนที่ล้มเหลวสำหรับรายงานวินิจฉัย โดยจำกัดจำนวนรายการ |
| `safeStep` | `step: string, fn: Function, fallback?: any` | `any` | เรียกใช้ขั้นตอนตั้งค่า หากผิดพลาดจะบันทึกและคืนค่าสำรองเพื่อให้ขั้นตอนถัดไปทำงานต่อได้ |
| `getVideoContainer` | — | `HTMLElement \| null` | ค้นหาคอนเทนเนอร์วิดีโอ หากไม่พบจะใช้ตัวครอบของเครื่องเล่นหรือองค์ประกอบ <video> |
| `getVerdictContainer` | — | `HTMLElement \| null` | ค้นหาคอนเทนเนอร์คำตัดสิน หากไม่พบจะใช้ตัวครอบของบล็อกคำตัดสินแรก |
| `getSubmitArea` | — | `HTMLElement \| null` | ค้นหาพื้นที่ส่ง/ยืนยัน (#submitbuttons, .submitbuttons หรือตัวครอบของปุ่มส่ง) |
| `hasVerdictForm` | — | `boolean` | คืนค่า true เมื่อมีปุ่มตัวเลือกคำตัดสินอย่างน้อยหนึ่งปุ่ม |
| `removeEnhancements` | — | `void` | นำแผง คลาส และการแก้ไขท้ายหน้าของ DemoScope ออก แล้วคืนค่าท้ายหน้าของ VACNet |
| `disableDemoScope` | `reason: string` | `void` | ปิด DemoScope ในหน้านี้ ย้อนคืนการเปลี่ยนแปลง เหลือเฉพาะหน้าต่างตั้งค่า และแจ้งเตือนหนึ่งครั้งต่อสาเหตุในแต่ละเซสชัน |
| `isOwnNode` | `el: Element` | `boolean` | คืนค่า true สำหรับองค์ประกอบที่ DemoScope สร้างขึ้น และไม่นำไปรวมในรายงานโครงสร้าง |
| `elementSignature` | `el: Element` | `string` | ลายเซ็น tag#id.class[…] สำหรับรายงานโครงสร้าง ไม่มีข้อความ |
| `skeletonOf` | `root: Element, maxDepth = 7, maxNodes = 170` | `string` | สร้างโครงสร้างแบบย่อที่เยื้องระดับจากแท็ก ID และคลาส; องค์ประกอบพี่น้องที่เหมือนกันรวมเป็น ×N |
| `captureOriginalSkeleton` | — | `void` | บันทึกโครงสร้างหน้าก่อนที่ DemoScope จะเปลี่ยนแปลง |
| `buildDiagnosticsReport` | — | `string` | สร้างรายงานที่มีเวอร์ชัน หน้า ภาษา เบราว์เซอร์ ประเภทงาน การตรวจองค์ประกอบ 22 รายการ ขั้นตอนที่ล้มเหลว และโครงสร้างก่อน/หลัง โดยไม่มีข้อความหน้าเว็บหรือข้อมูลบัญชี |
| `fallbackCopyText` | `text: string` | `boolean` | คัดลอกข้อความผ่านช่องข้อความชั่วคราวเมื่อใช้ Clipboard API ไม่ได้ |
| `copyDiagnostics` | `statusEl: HTMLElement, textarea: HTMLTextAreaElement` | `Promise<void>` | คัดลอกรายงาน; หากล้มเหลวจะแสดงข้อความในช่องที่เลือกได้ |

## เลย์เอาต์และการเริ่มต้น

| ฟังก์ชัน | พารามิเตอร์ | ค่าที่คืน | หน้าที่ |
|---|---|---|---|
| `buildShiftSpeedBar` | — | `HTMLElement` | สร้างแถบเลือกความเร็ว Shift |
| `buildPresetButtonMarkup` | `name: string, shortcut = "", labelOverride = ""` | `string (HTML)` | HTML ของปุ่มพรีเซ็ตหนึ่งปุ่ม |
| `buildAdvancedPresetGroupsMarkup` | — | `string (HTML)` | HTML ของกลุ่มพรีเซ็ตขยาย |
| `buildEnhancementBar` | — | `HTMLElement` | สร้างแถบคำตัดสินด่วน: พรีเซ็ต สวิตช์ตัวสุ่ม ลิ้นชักขยาย |
| `positionShiftSpeedBar` | — | `void` | รักษาให้แถบความเร็วอยู่ก่อนรายการคำตัดสิน |
| `positionEnhancementBar` | — | `void` | รักษาให้แถบพรีเซ็ตอยู่ก่อนปุ่มส่ง |
| `fixProceedFooter` | — | `void` | จัดเรียงส่วนท้าย แถบต่าง ๆ และปุ่มส่งใหม่ |
| `enhanceLayout` | — | `void` | ใช้การเปลี่ยนแปลงเลย์เอาต์ทั้งหมดและติดตั้งอินเทอร์เฟซการตั้งค่า |
| `ensureReviewStructure` | — | `void` | ปรับโครงสร้างมาร์กอัปของ VACNet: ห่อบล็อกคำตัดสินด้วย .verdicts-container-inner ย้าย #submitbuttons ไปในคอนเทนเนอร์ และแสดงจำนวนคลิปบนป้ายส่วนหัว รองรับมาร์กอัปทั้งแบบเก่าและแบบปรับใหม่ |
| `watchProceedFooter` | — | `void` | สังเกต `.verdicts-container` และกำหนดเวลาแก้ไขส่วนท้าย |
| `watchVerdictLabels` | — | `void` | สังเกตป้ายคำตัดสินและกำหนดเวลาปรับให้เป็นมาตรฐานใหม่ |
| `readFooterPreference` | `storageKey: string` | `boolean` | อ่านการตั้งค่าการแสดงส่วนท้ายจาก localStorage |
| `saveFooterPreference` | `storageKey: string, hidden: boolean` | `void` | บันทึกการตั้งค่าการแสดงส่วนท้าย |
| `applyFooterPreferences` | `footer: HTMLElement \| null = document.querySelector(".demoscope-custom-footer")` | `void` | `void` |
| `installDemoScopeFooter` | `withClipLinks: boolean, locale = getActiveLocale(), showFeedback = true` | `HTMLElement` | สร้างหรืออัปเดตส่วนท้ายที่แปลแล้ว พร้อมลิงก์เสริมและใช้การตั้งค่าการแสดงผล |
| `installEmptyQueueNotice` | — | `boolean` | แทนที่ข้อความคิวว่างด้วยคำแนะนำ เวลา ตัวเลือกภาษา และส่วนท้ายที่แปลแล้ว |
| `init` | — | `Promise<void>` | จุดเริ่มต้น: ตัวควบคุมชื่อบัญชี → หน้าคำเชิญหรือหน้าตรวจสอบ → เลย์เอาต์ ตัวสังเกตการณ์ ปุ่มลัด การปรับปรุงเครื่องเล่น |

`installWelcomePage` และ `installInvitePage` คืนค่า `false` เมื่อไม่มีองค์ประกอบ VACNet ที่จำเป็น ส่วน `installEmptyQueueNotice` คืนค่า `false` เมื่อหน้าไม่ได้อยู่ในสถานะคิวว่าง

### รายการอื่น

* **`blockSegmentLoopGuard`** (IIFE ทำงานเมื่อโหลด): ครอบ `setInterval` ของหน้าเว็บและแทนที่ตัวจับเวลาวนช่วงคลิป 100 ms ของเว็บด้วยการทำงานว่าง จากนั้นตัวควบคุมของ DemoScope จะจัดการช่วงคลิปเอง
* **ค่าคงที่และตาราง:** `SUPPORTED_LOCALES`, `FLAG_SVG`, `UI_TEXT_ROWS`, `INVITE_TEXT_ROWS`, `SETTINGS_TEXT_ROWS`, `PRESETS`, `PRESET_KEYS`, `PRESET_TONES`, `ADVANCED_PRESET_GROUPS`, `SHIFT_SPEEDS`, `FRAME_STEP`, `ARROW_JUMP_SEC` (`PRESETS`: 21 definitions); added since v1.0.0: `KEY_ACTIONS`, `KEY_GROUPS`, `KEY_ACTION_BY_ID`, `KEY_ACTION_SCOPE`, `RESERVED_KEY_CODES`, `CHEATING_KEYS`, `VERDICT_SECTION_TITLES`, `VERDICT_SECTION_HELP`, `ANIM_STYLES`, `ANIM_SPEEDS`.
* **สถานะโมดูล:** `diag` (step failures, the switch-off reason and the original page structure), `hkState` (state of the Hotkeys window) and the `SCRIPT_VERSION` constant used by the diagnostics report.
* **ข้อความ:** ข้อความทั้งหมดที่ผู้ใช้เห็นอยู่ในตารางภาษาด้านบน หน้าต่างที่เพิ่มใน v1.2.0–v1.4.0 แปลครบทั้ง 29 ภาษา

## คีย์จัดเก็บข้อมูล

| คีย์ | ที่จัดเก็บ | หน้าที่ |
|---|---|---|
| `demoscopeLanguage`, `demoscopeLanguageAuto` | `localStorage` | ภาษาที่เลือก / โหมดอัตโนมัติ |
| `demoscopeKeybindings` | `localStorage` | แป้นพิมพ์ลัดที่ต่างจากค่าเริ่มต้น (JSON) |
| `demoscopeSettingsHotkey` | `localStorage` | ปุ่มเปิดกล่องโต้ตอบการตั้งค่า (เป็น none เมื่อลบออก) |
| `demoscopeAnimEnabled`, `demoscopeAnimStyle`, `demoscopeAnimSpeed` | `localStorage` | การตั้งค่าภาพเคลื่อนไหวของจุดสถานะ |
| `demoscopeSoundEffectsEnabled`, `demoscopeSoundEffectsVolume` | `localStorage` | การตั้งค่าเสียง |
| `demoscopeClipHistory` และคีย์ขีดจำกัด/รูปแบบประวัติ | `localStorage` | ประวัติการตรวจในเครื่องและการตั้งค่า |
| `demoscopeSubmitPending`, `demoscopeSubmitPrevVod`, `demoscopeLangSyncTried`, `demoscopeDisabledNotice` | `sessionStorage` | สถานะกำลังส่ง ตัวป้องกันการซิงก์ภาษา และการแจ้งปิดใช้งานครั้งเดียว |








