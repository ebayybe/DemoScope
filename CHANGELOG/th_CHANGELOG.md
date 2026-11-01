<div align="center">

[English](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/en_CHANGELOG.md) · [Български](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/bg_CHANGELOG.md) · [Magyar](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/hu_CHANGELOG.md) · [Tiếng Việt](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/vi_CHANGELOG.md) · [Ελληνικά](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/el_CHANGELOG.md) · [Dansk](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/da_CHANGELOG.md) · [Bahasa Indonesia](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/id_CHANGELOG.md) · [Español (España)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/es-ES_CHANGELOG.md) · [Español (Latinoamérica)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/es-419_CHANGELOG.md) · [Italiano](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/it_CHANGELOG.md) · [繁體中文](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/zh-TW_CHANGELOG.md) · [简体中文](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/zh-CN_CHANGELOG.md) · [한국어](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ko_CHANGELOG.md) · [Deutsch](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/de_CHANGELOG.md) · [Nederlands](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/nl_CHANGELOG.md) · [Norsk](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/no_CHANGELOG.md) · [Polski](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/pl_CHANGELOG.md) · [Português (Portugal)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/pt-PT_CHANGELOG.md) · [Português (Brasil)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/pt-BR_CHANGELOG.md) · [Română](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ro_CHANGELOG.md) · [Русский](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ru_CHANGELOG.md) · **ไทย** · [Türkçe](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/tr_CHANGELOG.md) · [Українська](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/uk_CHANGELOG.md) · [Suomi](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/fi_CHANGELOG.md) · [Français](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/fr_CHANGELOG.md) · [Čeština](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/cs_CHANGELOG.md) · [Svenska](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/sv_CHANGELOG.md) · [日本語](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ja_CHANGELOG.md)

</div>
# DemoScope v1.4.0

รุ่นเพิ่มการป้องกันตัวเอง: DemoScope รองรับการเปลี่ยนแปลงหน้า VACNet ได้โดยไม่หยุดทำงานกลางคัน และแจ้งให้ผู้ใช้กับผู้พัฒนาทราบว่าเกิดอะไรขึ้น

### เพิ่มแล้ว
- **แยกขั้นตอนการตั้งค่าออกจากกัน** แต่ละขั้นตอนด้านเลย์เอาต์และการติดตั้งทำงานอย่างอิสระ หากขั้นตอนใดล้มเหลว ระบบจะบันทึกข้อผิดพลาดและทำขั้นตอนที่เหลือต่อ
- **วิธีค้นหาสำรอง** สำหรับคอนเทนเนอร์วิดีโอ คอนเทนเนอร์คำตัดสิน และบริเวณส่งข้อมูล หาก VACNet เปลี่ยนชื่อคลาสคอนเทนเนอร์วิดีโอ DemoScope จะค้นหาผ่านองค์ประกอบเครื่องเล่น
- **ปิดการทำงานอย่างปลอดภัย** หากไม่มีวิดีโอหรือแบบฟอร์มคำตัดสิน หรือขั้นตอนตั้งค่าล้มเหลวตั้งแต่ห้าขั้นตอนขึ้นไป DemoScope จะย้อนคืนการเปลี่ยนแปลงของตน คืนส่วนท้ายของ VACNet เหลือเพียงหน้าต่างการตั้งค่า และแสดงการแจ้งเตือนหนึ่งครั้ง หน้าคิวว่างยังตรวจพบตามเดิมและไม่ทำให้เกิดการปิดนี้
- **รายงานวินิจฉัย** (Settings → Diagnostics → Copy diagnostics): เวอร์ชัน เวลา ภาษา เบราว์เซอร์ ประเภทหน้าและงาน การตรวจองค์ประกอบ 22 รายการ (`ok` / `MISSING`) ข้อผิดพลาดของขั้นตอน และโครงสร้างหน้าก่อน/หลัง DemoScope เปลี่ยนแปลง โครงสร้างมีเฉพาะแท็ก ID และคลาส ไม่มีข้อความจากหน้า หากคลิปบอร์ดถูกบล็อก รายงานจะแสดงในช่องที่เลือกข้อความได้
- รอสูงสุด 2 วินาทีก่อนประเมินหน้าที่เพิ่งแสดงผลบางส่วน

### การแปลภาษา
- เพิ่มข้อความใหม่ 6 รายการเกี่ยวกับการวินิจฉัย ผลการคัดลอก และการแจ้งปิดใช้งาน ครบทั้ง 29 ภาษา

# DemoScope v1.3.0

ปรับปรุงการตั้งค่า หน้าคำเชิญ และข้อความคำตัดสิน

### เพิ่มแล้ว
- **ปุ่มปิดหน้าคำเชิญ** เครื่องหมาย × ที่มุมการ์ดจะกลับไปยังคลิปเหมือน “Done”
- **ปุ่มลัดหน้าคำเชิญ:** `Enter` ทำงานเหมือน “Done” และ `Esc` ปิดหน้า ระบบจะไม่ทำงานเมื่อปุ่ม ลิงก์ ช่องกรอก กล่องโต้ตอบ หรือรายการภาษามีโฟกัส เปลี่ยนปุ่มลัดได้ใน Hotkeys กลุ่ม “Invite page”
- **แยกข้อขัดแย้งของปุ่มตามหน้า** หน้าคำเชิญไม่มีเครื่องเล่น ดังนั้น `Enter` / `Esc` ที่หน้านี้จึงไม่ขัดแย้งกับปุ่มเดียวกันในหน้าตรวจสอบ ปุ่มเปิดการตั้งค่ายังคงใช้ได้ทุกหน้า
- เพิ่มแถบเลื่อนสีเข้มแบบบางในหน้าตั้งค่า หน้าต่างย่อย และรายการคำตัดสิน พร้อมกำหนด color-scheme เป็นสีเข้ม

### เปลี่ยนแปลง
- **ออกแบบหน้าต่างการตั้งค่าใหม่** เรียงส่วนตามความถี่การใช้งาน: Hotkeys, Animations, Sound effects, Local history, Footer, Diagnostics (เพิ่มใน v1.4.0), Reset ส่วน Hotkeys และ Animations แสดงสรุปที่อัปเดตเมื่อมีการเปลี่ยนค่า
- **รีเซ็ตทุกอย่างในครั้งเดียว** คืนค่าเสียง ระดับเสียง ปุ่มลัด และแอนิเมชัน โดยเก็บประวัติไว้
- ย้ายการแก้ไขปุ่มเปิดหน้าต่างการตั้งค่าไปไว้ใน Hotkeys
- **นำตัวเลขปุ่มออกจากข้อความยืนยันคำตัดสิน** เพื่อไม่ให้เกิด “2Not sure” หรือ “3No cheats seen”; ใช้ CSS วาดป้ายหมายเลขแทน
- ตัวเลือกที่ 2 ของงานคำถามเดียวเปลี่ยนเป็น “Not sure” และใช้มุมมองบุรุษที่หนึ่งเช่นเดียวกับข้อความ VACNet

### การแปลภาษา
- เพิ่มข้อความใหม่ 12 รายการสำหรับสรุป รีเซ็ต การทำงานหน้าคำเชิญ และ “Not sure” ครบทั้ง 29 ภาษา

การตั้งค่า CSS: `color-scheme: dark`.

ปุ่ม “Done” แสดงปุ่มลัดที่กำหนดไว้ด้วย

# DemoScope v1.2.1

### การแปลภาษา
- แปลหน้าต่าง Hotkeys และ Animations (ภาษา ละ 77 ข้อความ) เพิ่มครบอีก 27 ภาษา ก่อนหน้านี้มีเฉพาะภาษาอังกฤษและรัสเซีย

# DemoScope v1.2.0

ปุ่มลัด แอนิเมชัน และการแก้ไขการโหลด

### เพิ่มแล้ว
- **หน้าต่าง Hotkeys** (Settings → Hotkeys): เปลี่ยนปุ่มลัดทั้ง 18 รายการได้ จัดกลุ่มตามการทำงาน พร้อมคำอธิบายและปุ่มรีเซ็ต “Reset all” ต้องยืนยันอีกครั้ง
  - **จัดการข้อขัดแย้ง** เมื่อเลือกปุ่มที่ถูกใช้แล้ว จะแสดงการทำงาน กลุ่ม และหน้าที่ของปุ่ม ให้เลือก Replace, Swap หรือ Cancel
  - กำหนด `Esc` ได้และจะไม่ปิดหน้าต่างขณะบันทึกปุ่ม ระบบไม่รับ `Tab` ปุ่มปรับค่า Caps Lock, `F5`, `F11` และ `F12`; อนุญาต `Shift` เฉพาะการกดค้าง “Speed boost”
  - คำแนะนำใต้คลิป ป้ายกำกับ และปุ่ม Continue/Cancel จะตรงกับปุ่มที่กำหนด
- `Esc` ยกเลิกคำตัดสินที่กำลังรอการยืนยัน และยกเลิก `Enter` ขั้นแรกของการส่งสองขั้นตอน
- **หน้าต่าง Animations** (Settings → Animations): หกรูปแบบ ตัวอย่างสด สามระดับความเร็ว และสวิตช์เปิด/ปิด หากระบบตั้งค่าลดการเคลื่อนไหว แอนิเมชันจะเริ่มในสถานะปิด
- `Enter` และ `Esc` ใช้ได้เมื่อปุ่มตัวเลือกคำตัดสินมีโฟกัส

### แก้ไขแล้ว
- **“loading next clip” นานเกินไป** หลังส่งงานคำถามเดียว: การตรวจสอบไม่รอช่อง `aimassist` ที่ไม่มีอยู่แล้ว ยอมรับแบบฟอร์มคำตัดสินและข้อมูลสื่อ เริ่มตรวจเร็วขึ้น และปิดโอเวอร์เลย์อย่างเงียบ ๆ หลัง 3 วินาทีในหน้าที่ไม่มีคลิป
- ปุ่มลัดหน้า (`Space`, `Enter` ฯลฯ) จะไม่ทำงานกับหน้าด้านหลังกล่องโต้ตอบที่เปิดอยู่

### การแปลภาษา
- Hotkeys และ Animations เริ่มต้นมีภาษาอังกฤษและรัสเซีย ส่วนภาษาอื่นเพิ่มใน v1.2.1

รูปแบบทั้งหกแบบ ได้แก่ pulse, breathe, ripple, heartbeat, orbit และ blink

# DemoScope v1.1.0

รองรับงานคำถามเดียวของ VACNet

### เพิ่มแล้ว
- **งานคำถามเดียว** บางครั้ง VACNet ถาม “Is the Subject cheating beyond a reasonable doubt?” พร้อมคำตอบ Cheating / Uncertain / No cheats seen DemoScope ตรวจพบและเปลี่ยนเป็นเลย์เอาต์กะทัดรัด โดยไม่มีคำตัดสินด่วน ชุดผสมเพิ่มเติม หรือตัวสุ่ม
- ป้ายคำตัดสินเป็นภาษาของ DemoScope ป้ายปุ่ม `1–3` และปุ่มลัดที่ตรงกัน
- **ตัวบ่งชี้การล็อก** Uncertain และ No cheats seen ปลดล็อกเมื่อคลิปจบ การ์ดแสดงเวลาที่เหลือและแถบความคืบหน้า ตัวเลือกที่ล็อกจะแสดงจางลง และเมื่อกดปุ่มจะมีเสียงผิดพลาดพร้อมการสั่นของการ์ด
- เปลี่ยนคำแนะนำใต้คลิปเป็น `Enter` และ `1–3` และเพิ่มความสูงปุ่มคำตัดสิน

### การแปลภาษา
- เพิ่มข้อความใหม่ 5 รายการ (ป้าย ชื่อ คำอธิบาย และข้อความล็อก) ครบทั้ง 29 ภาษา

# DemoScope v1.0.6

### เพิ่มแล้ว
- **คำอธิบายของ DemoScope เอง** สำหรับคำตัดสินทั้งสี่ประเภทครบ 29 ภาษา หน้าต่าง “?” ไม่พึ่งข้อความคำถามภาษาอังกฤษของ VACNet ที่ปรากฏในบางภาษา เช่น ภาษายูเครน

# DemoScope v1.0.5

### เพิ่มแล้ว
- **ปุ่มช่วยเหลือ “?”** ข้าง AIM ASSIST, WALL HACK, AUTO BHOP และ BOT เปิดคำอธิบาย ปิดได้ด้วยการคลิกด้านนอก คลิกซ้ำ หรือกด `Esc` ปุ่มไม่รับโฟกัสแป้นพิมพ์เพื่อให้ `Enter` และ `Space` ยังคงใช้ตรวจสอบได้

### แก้ไขแล้ว
- ปุ่ม Local history มีขนาดเท่าป้ายข้างเคียง ไม่ตัดขึ้นบรรทัดใหม่ ย่อชื่อที่ยาว และให้แถวป้ายขึ้นบรรทัดใหม่แทนการบีบให้แคบ

# DemoScope v1.0.4

### แก้ไขแล้ว
- **ข้อความคำตัดสินยังเป็นภาษาของเบราว์เซอร์** หลังเปลี่ยนภาษาใน DemoScope VACNet ใช้พารามิเตอร์ Steam `?l=` แต่ DemoScope เปลี่ยนเฉพาะป้ายของตัวเอง ตอนนี้หน้าตรวจสอบเปิดด้วย `?l=` ที่เลือก และจะเรียกหน้าใหม่หนึ่งครั้งหากไม่มีพารามิเตอร์ ภาษาที่ VACNet ใช้จริงอ่านจาก `l=` ใน URL ของ CSS และสคริปต์ จำกัดการลองหนึ่งครั้งเพื่อป้องกันการวนเปลี่ยนเส้นทางเมื่อไม่รองรับภาษา

# DemoScope v1.0.3

### เปลี่ยนแปลง
- **นำการเน้นวลีสำคัญกลับมา** ในปุ่มคำตัดสิน วลีที่ค้นหาเป็นตัวหนาสีส้ม ส่วน “not” ในคำตอบปฏิเสธเป็นสีน้ำเงินหม่น ปุ่มที่เลือกยังอ่านง่าย
- `normalizeVerdictLabels` ลบเฉพาะมาร์กอัป b เพื่อคงการเน้นไว้

องค์ประกอบ HTML: `<b>`.

# DemoScope v1.0.2

### แก้ไขแล้ว
- **`Space`, `M` และ `F` ดูเหมือนไม่ทำงาน** เพราะ VACNet / Video.js จัดการปุ่มเดิมซ้ำอีกครั้ง ตอนนี้ DemoScope ดักจับปุ่มเหล่านี้
- ใน Firefox การปล่อย `Space` จะไม่กดปุ่มเครื่องเล่นที่มีโฟกัสอีกต่อไป
- ปุ่มลัดเครื่องเล่นยังใช้ได้ขณะปุ่มตัวเลือกคำตัดสินมีโฟกัส

# DemoScope v1.0.1

รองรับหน้าตรวจสอบ VACNet ที่ออกแบบใหม่

### แก้ไขแล้ว
- **แผงสร้างได้เพียงบางส่วน** หลัง VACNet เปลี่ยนหน้า: ส่วนหัวพอร์ทัล การ์ดคำแนะนำ เลย์เอาต์กริด การนำ verdicts-container-inner ออก และการย้าย submitbuttons ทำให้ `insertBefore` เกิดข้อผิดพลาด ขั้นตอน `ensureReviewStructure` ปรับโครงสร้างมาร์กอัปเพื่อรองรับทั้งเลย์เอาต์เก่าและใหม่

### เปลี่ยนแปลง
- ซ่อนส่วนหัวพอร์ทัลและการ์ดคำแนะนำ พร้อมแสดงตัวนับคลิปในป้ายส่วนหัวด้วย
- ตรึง Continue ไว้ด้านล่างของแผงเพื่อให้มองเห็นแม้รายการยาวจากการแปล

ตัวเลือกทางเทคนิค: `.verdicts-container-inner`, `#submitbuttons`.

# DemoScope v1.0.0

รุ่นสาธารณะครั้งแรกของ userscript DemoScope สำหรับหน้าตรวจสอบ CS2 VACNet

### เพิ่มแล้ว
- ส่วนติดต่อ 29 ภาษา เลือกภาษาอัตโนมัติ คำตัดสินด่วนห้าแบบ และชุดผสมเพิ่มเติม 15 แบบ
- ควบคุมวิดีโอเป็นช่วง เลื่อนทีละเฟรม เร่งด้วย `Shift`, `Space` เล่น/หยุดชั่วคราว, `M` ปิดเสียง, `F` เต็มจอ และส่งคำตัดสินสองขั้นตอนด้วย `Enter`
- ประวัติตรวจสอบในเครื่องที่กำหนดค่าได้ นำเข้า/ส่งออก JSON รายงาน HTML และรวมไฟล์สำรอง JSON หลายไฟล์เป็นรายงานเดียว
- ปรับปรุงหน้าคำเชิญ ตั้งค่าเสียง ปุ่มลัดเปิดการตั้งค่า ซ่อนชื่อบัญชี กล่องกฎการตรวจสอบ และตัวสุ่มคำตัดสินที่เลือกใช้ได้ (ปิดไว้ตามค่าเริ่มต้น)

### ความเป็นส่วนตัว
- ไม่มี telemetry; ไม่อัปโหลดการตั้งค่าหรือประวัติในเครื่อง คำตัดสินที่ส่งจะไปยัง VACNet ผ่านแบบฟอร์มปกติของเว็บไซต์






