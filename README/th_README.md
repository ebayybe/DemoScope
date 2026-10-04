<div align="center">

[English](../README.md) · [Български](bg_README.md) · [Magyar](hu_README.md) · [Tiếng Việt](vi_README.md) · [Ελληνικά](el_README.md) · [Dansk](da_README.md) · [Bahasa Indonesia](id_README.md) · [Español (España)](es-ES_README.md) · [Español (Latinoamérica)](es-419_README.md) · [Italiano](it_README.md) · [繁體中文](zh-TW_README.md) · [简体中文](zh-CN_README.md) · [한국어](ko_README.md) · [Deutsch](de_README.md) · [Nederlands](nl_README.md) · [Norsk](no_README.md) · [Polski](pl_README.md) · [Português (Portugal)](pt-PT_README.md) · [Português (Brasil)](pt-BR_README.md) · [Română](ro_README.md) · [Русский](ru_README.md) · **ไทย** · [Türkçe](tr_README.md) · [Українська](uk_README.md) · [Suomi](fi_README.md) · [Français](fr_README.md) · [Čeština](cs_README.md) · [Svenska](sv_README.md) · [日本語](ja_README.md)

# DemoScope — CS2 Review Toolkit

![Version](https://img.shields.io/badge/version-1.0.0-blue) ![License](https://img.shields.io/badge/license-MIT-green) ![Userscript](https://img.shields.io/badge/Tampermonkey%20%7C%20Violentmonkey-userscript-orange)

**ชุดเครื่องมือ userscript เน้นคีย์บอร์ดสำหรับผู้ตรวจสอบ CS2 VACNet: ชุดคำตัดสินสำเร็จรูป เครื่องเล่นวิดีโอที่รู้จักช่วงคลิป การปรับปรุงหน้าคำเชิญ เอฟเฟกต์เสียง และประวัติส่วนตัวในเครื่อง — รองรับ 29 ภาษา**

</div>

## ภาพรวม

DemoScope ปรับปรุงหน้าตรวจสอบ Counter-Strike VACNet (`counter-strike.net/vacnet`) แทนที่จะต้องคลิกกลุ่มคำตัดสินทั้งสี่กลุ่ม (aim assist, wallhack, auto-bhop, bot) ในทุกคลิปสั้น ๆ คุณจะได้ขั้นตอนการทำงานที่เน้นคีย์บอร์ด ได้แก่ คำตัดสินที่ตั้งไว้ล่วงหน้า แถบเลื่อนที่จำกัดเฉพาะช่วงที่กำลังตรวจสอบ การเดินทีละเฟรม การเร่งความเร็วชั่วคราว การยืนยันการส่งสองขั้นตอน และประวัติส่วนตัวของคำตัดสินของคุณเอง ทุกอย่างทำงานในเบราว์เซอร์ของคุณเท่านั้น

## คุณสมบัติหลัก

- **ชุดคำตัดสินสำเร็จรูป** – พรีเซ็ตด่วน 5 แบบที่ปุ่ม `1`–`5` และชุดผสมขยายอีก 15 แบบ (aim, wallhack, bhop, bot และการผสมกัน รวมถึงแบบ “ไม่แน่ใจ”)
- **เครื่องเล่นที่รู้จักช่วงคลิป** – แถบเลื่อน ตัวแสดงเวลา การข้าม ±5 วินาที และการเดินทีละเฟรม 1/64 วินาที โดยจำกัดอยู่ในช่วงเริ่มต้น/สิ้นสุดของคลิป
- **กดค้างเพื่อเร่งความเร็ว** – กด `Shift` ค้างไว้เพื่อเล่นด้วยความเร็วที่ปรับได้ (0.5×–4×, ค่าเริ่มต้น 2×)
- **การส่งสองขั้นตอนที่ปลอดภัย** – `Enter` เตรียมปุ่ม กด `Enter` อีกครั้งเพื่อส่งคำตัดสิน และบล็อกปลายทางฟอร์มข้ามต้นทาง
- **อินเทอร์เฟซ 29 ภาษา** – ตามพารามิเตอร์ `?l=` ของ Steam ตัวเลือกที่บันทึกไว้ หรือภาษาของเบราว์เซอร์ พร้อมตัวเลือกภาษาบนหน้าเว็บ
- **ประวัติการตรวจสอบในเครื่อง** – ประวัติแยกตามคลิปและตามเกมใน `localStorage` ส่งออก/นำเข้า JSON รายงาน HTML และรวมไฟล์สำรองหลายไฟล์เป็นรายงานเดียว
- **ปรับปรุงหน้าคำเชิญ** – ออกแบบ `/vacnet/createinvite` ใหม่ แสดง/ซ่อนและคัดลอกลิงก์คำเชิญได้ในคลิกเดียว พร้อมสรุปข้อกำหนด
- **เอฟเฟกต์เสียง** – เสียงสังเคราะห์ด้วย Web Audio พร้อมตัวเปิด/ปิด ระดับเสียง และการฟังตัวอย่าง
- **กล่องตั้งค่า** – เปิดด้วย `F2` (เปลี่ยนปุ่มได้): เสียง ปุ่มลัด ขีดจำกัดประวัติ การสำรองข้อมูล การคืนค่าเริ่มต้น
- **ส่วนอำนวยความสะดวก** – หน้าจอโหลดหลังส่ง การแจ้งเตือน ปุ่มซ่อนชื่อบัญชี กล่องกฎการตรวจสอบ และตัวสุ่มลำดับคำตัดสินแบบเลือกได้ (ปิดไว้เป็นค่าเริ่มต้น)

## การติดตั้ง

1. ติดตั้งตัวจัดการ userscript เช่น [Tampermonkey](https://www.tampermonkey.net/) หรือ [Violentmonkey](https://violentmonkey.github.io/) (สคริปต์ใช้ `GM_addStyle` และ `unsafeWindow`)
2. [ติดตั้ง DemoScope](https://raw.githubusercontent.com/ebayybe/DemoScope/main/DemoScope.user.js) แล้วยืนยันการติดตั้งในตัวจัดการ
3. เข้าสู่ระบบ Steam แล้วเปิด <https://www.counter-strike.net/vacnet/>
4. เปิดคลิปที่ต้องตรวจสอบ — DemoScope จะโหลดอัตโนมัติ (ยกเว้นหน้า `/vacnet/join`)

## การใช้งาน

ปุ่มลัดใช้งานได้บนหน้าตรวจสอบตราบเท่าที่โฟกัสไม่ได้อยู่ในช่องกรอกข้อมูล ปุ่ม ลิงก์ หรือรายการเลือก

| ปุ่ม | การทำงาน |
|---|---|
| `1` … `5` | ใช้ชุดคำตัดสิน: 1 บอท + aim + wallhack, 2 aim + wallhack, 3 rage, 4 ผู้เล่นปกติ, 5 ไม่แน่ใจ |
| `Shift` (hold) | กดค้างเพื่อเร่งความเร็ว (0.5×–4×, ค่าเริ่มต้น 2×, เลือกได้บนหน้าเว็บ) |
| `←` `→` | ข้ามถอยหลัง / ไปข้างหน้า 5 วินาที |
| `,` `.` | ถอยหลัง / ไปข้างหน้าทีละเฟรม (1/64 วินาที) |
| `Space` | เล่น / หยุดชั่วคราว |
| `M` / `F` | ปิดเสียง / เต็มหน้าจอ (ดับเบิลคลิกวิดีโอก็สลับเต็มหน้าจอได้) |
| `Enter` ×2 | กดหนึ่งครั้งเพื่อเตรียมปุ่มส่ง กดอีกครั้งเพื่อส่งคำตัดสิน |
| `F2` | เปิดกล่องตั้งค่า (เปลี่ยนปุ่มได้) |

## สถาปัตยกรรมและรายละเอียดฟังก์ชัน

DemoScope เป็นฟังก์ชันที่เรียกตัวเองเพียงฟังก์ชันเดียว (`@run-at document-start`, `@noframes`) `init()` เลือกระหว่างหน้าคำเชิญกับหน้าตรวจสอบ แล้วเชื่อมต่อโมดูลด้านล่าง เอกสารอ้างอิงฉบับเต็มของทั้ง 143 ฟังก์ชัน — ชื่อ หน้าที่ พารามิเตอร์ และค่าที่ส่งกลับ — อยู่ที่ [th_FUNCTIONS.md](https://github.com/ebayybe/DemoScope/blob/main/docs/th_FUNCTIONS.md).

| โมดูล | หน้าที่ | ฟังก์ชันสำคัญ |
|---|---|---|
| `Localization` | กำหนดภาษาของอินเทอร์เฟซ ค้นหาข้อความ วาดธงและตัวเลือกภาษา | `getActiveLocale`, `tr`, `settingText`, `inviteText`, `getPresetLabel`, `installLanguageSelector` |
| `Segment & player` | อ่านจุดเริ่มต้น/สิ้นสุดของคลิปจากหน้าเว็บ ห่อหุ้มการเล่นของ Video.js/HTML5 ปิดตัวจับเวลาวนซ้ำช่วงคลิปดั้งเดิมของเว็บไซต์ | `parseSegmentBounds`, `createPlayerAdapter`, `waitForPlayerAdapter`, `blockSegmentLoopGuard` |
| `Player enhancements` | แถบเลื่อนแบบกำหนดเอง คำแนะนำปุ่ม การเร่งด้วย Shift การเดินทีละเฟรม ปุ่มลัดคีย์บอร์ด | `installCustomControls`, `installPlayerEnhancements`, `isShortcutBlocked` |
| `Verdict presets` | ตารางพรีเซ็ต สถานะการเลือก การใช้พรีเซ็ตพร้อมลำดับและการหน่วงแบบสุ่มที่เลือกได้ | `applyPreset`, `detectActivePreset`, `syncPresetButtons`, `applyDefaultVerdicts`, `buildEnhancementBar` |
| `Submit flow` | Enter สองขั้นตอน สร้าง `verdict_labels[]` ตรวจสอบต้นทางเดียวกัน หน้าจอโหลด | `invokeProceedAction`, `prepareVerdictFormForSubmit`, `submitVerdictForm`, `isSafeSubmitTarget`, `finishSubmitLoadingWhenReady` |
| `Local history` | จัดเก็บ ตัดแต่ง และแสดงประวัติตามคลิปและตามเกมใน `localStorage` | `readClipHistoryStore`, `writeClipHistoryStore`, `appendReviewHistory`, `renderClipHistory` |
| `Backups & reports` | ส่งออก/นำเข้า JSON รายงาน HTML รายงานรวมจากไฟล์สำรองหลายไฟล์ | `exportLocalHistory`, `importLocalHistory`, `exportReadableHistory`, `exportCombinedHistoryReports` |
| `Settings & sound` | กล่องตั้งค่า ปุ่มลัดที่เปลี่ยนได้ เสียงแจ้งเตือนด้วย Web Audio | `ensureSettingsDialog`, `openSettingsDialog`, `installSettingsUi`, `playUiSound` |
| `Invite page` | `/vacnet/createinvite` ที่ออกแบบใหม่: แสดง/ซ่อนและคัดลอกลิงก์ ข้อกำหนด | `installInvitePage` |
| `Layout & UI helpers` | การแจ้งเตือน การซ่อนส่วนท้าย ตัวสังเกตการณ์เลย์เอาต์ ปุ่มสลับชื่อบัญชี | `enhanceLayout`, `showToast`, `watchProceedFooter`, `installAccountNameControl` |
| `Bootstrap` | จุดเริ่มต้น: ตรวจชนิดหน้าและเริ่มโมดูลต่าง ๆ | `init` |

## ข้อมูลในเครื่องและความเป็นส่วนตัว

DemoScope ไม่ส่งข้อมูลเทเลเมตรี การตั้งค่าและประวัติอยู่ใน `localStorage` ของเบราว์เซอร์ (คีย์ที่ขึ้นต้นด้วย `demoscope`) และ `sessionStorage` หากต้องการลบประวัติ ให้ใช้ตัวเลือกล้างประวัติในกล่องตั้งค่า

## ข้อความปฏิเสธความรับผิดชอบ

DemoScope เป็นโปรเจกต์ชุมชนที่ไม่เป็นทางการ ไม่ได้เกี่ยวข้องหรือได้รับการรับรองจาก Valve Corporation และจะไม่ตัดสินแทนคุณ — โปรดตรวจสอบทุกคลิปด้วยตนเองและปฏิบัติตามกฎของโครงการตรวจสอบ ใช้ด้วยความเสี่ยงของคุณเอง

## License

เผยแพร่ภายใต้สัญญาอนุญาต [MIT](../LICENSE)