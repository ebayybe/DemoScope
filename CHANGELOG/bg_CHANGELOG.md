<div align="center">

[English](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/en_CHANGELOG.md) · **Български** · [Magyar](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/hu_CHANGELOG.md) · [Tiếng Việt](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/vi_CHANGELOG.md) · [Ελληνικά](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/el_CHANGELOG.md) · [Dansk](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/da_CHANGELOG.md) · [Bahasa Indonesia](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/id_CHANGELOG.md) · [Español (España)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/es-ES_CHANGELOG.md) · [Español (Latinoamérica)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/es-419_CHANGELOG.md) · [Italiano](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/it_CHANGELOG.md) · [繁體中文](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/zh-TW_CHANGELOG.md) · [简体中文](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/zh-CN_CHANGELOG.md) · [한국어](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ko_CHANGELOG.md) · [Deutsch](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/de_CHANGELOG.md) · [Nederlands](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/nl_CHANGELOG.md) · [Norsk](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/no_CHANGELOG.md) · [Polski](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/pl_CHANGELOG.md) · [Português (Portugal)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/pt-PT_CHANGELOG.md) · [Português (Brasil)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/pt-BR_CHANGELOG.md) · [Română](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ro_CHANGELOG.md) · [Русский](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ru_CHANGELOG.md) · [ไทย](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/th_CHANGELOG.md) · [Türkçe](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/tr_CHANGELOG.md) · [Українська](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/uk_CHANGELOG.md) · [Suomi](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/fi_CHANGELOG.md) · [Français](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/fr_CHANGELOG.md) · [Čeština](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/cs_CHANGELOG.md) · [Svenska](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/sv_CHANGELOG.md) · [日本語](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ja_CHANGELOG.md)

</div>
# DemoScope v1.4.0

Издание за самозащита: DemoScope вече се справя с промените по страницата на VACNet и съобщава какво се е случило, вместо да прекъсва по средата.

### Добавено
- **Изолирани стъпки за настройка.** Всяка стъпка за оформление и инсталиране работи самостоятелно. При неуспех грешката се записва, а останалите стъпки продължават.
- **Резервно откриване** на видео контейнера, контейнера за присъда и зоната за изпращане. При промяна на класа DemoScope намира видео контейнера чрез елемента на плейъра.
- **Безопасно изключване.** При липсващо видео или формуляр за присъда, или пет неуспешни стъпки, DemoScope отменя промените си, възстановява долния колонтитул на VACNet, оставя настройките и показва еднократно известие. Празната опашка се разпознава и не задейства това.
- **Диагностичен отчет** (Settings → Diagnostics → Copy diagnostics): версия, време, език, браузър, тип страница и задача, 22 проверки (`ok` / `MISSING`), грешки и структурата на страницата преди и след промяната. Структурата съдържа само тагове, идентификатори и класове. При блокиран клипборд отчетът се показва в поле за избиране.
- Изчакване до 2 s преди оценяване на частично визуализирана страница.

### Локализация
- 6 нови низа за диагностиката, копирането и известието на всички 29 езика.

# DemoScope v1.3.0

Подобрения в настройките, страницата с поканата и присъдите.

### Добавено
- **Затваряне на страницата с покана.** Бутон × връща към клиповете като „Done“.
- **Клавиши за страницата с поканата:** `Enter` изпълнява „Done“, `Esc` затваря страницата. Игнорират се при фокус върху бутон, връзка, поле, диалог или езиковия списък. Могат да се преназначават в Hotkeys, група „Invite page“.
- **Конфликти според страницата.** Клавишите `Enter` / `Esc` на страницата с поканата вече не пречат на същите клавиши в страницата за преглед. Клавишът за настройките остава глобален.
- **Тъмни тънки ленти за превъртане** в настройките, подпрозорците и списъка с присъди; зададен е и тъмен color-scheme.

### Променено
- **Преработени настройки.** Разделите са подредени по честота: Hotkeys, Animations, Sound effects, Local history, Footer, Diagnostics (от v1.4.0), Reset. Hotkeys и Animations показват обновявани обобщения.
- **Едно нулиране за всичко.** Възстановява звука, силата му, клавишите и анимациите; историята остава.
- Клавишът за настройките вече се редактира в Hotkeys.
- **Цифрата на клавиша е премахната от потвърждението на присъдата.** Така се избягват „2Not sure“ и „3No cheats seen“; значката вече се рисува с CSS.
- Опция 2 при задачата с един въпрос вече е „Not sure“ и използва първо лице като VACNet.

### Локализация
- 12 нови низа за обобщения, нулиране, поканата и „Not sure“ във всичките 29 езика.

CSS настройката: `color-scheme: dark`.

Бутонът „Done“ вече показва зададения клавиш.

# DemoScope v1.2.1

### Локализация
- Прозорците Hotkeys и Animations (по 77 низа на език) вече са преведени на останалите 27 езика; преди бяха само на английски и руски.

# DemoScope v1.2.0

Бързи клавиши, анимации и корекция при зареждането.

### Добавено
- **Прозорец Hotkeys** (Settings → Hotkeys): 18 клавиша могат да се преназначават, групирани са по действие и имат описания и нулиране. „Reset all“ изисква второ потвърждение.
  - **Конфликти.** Показват се действието, групата и описанието на заетия клавиш. Изберете Replace, Swap или Cancel.
  - `Esc` може да се зададе и не затваря прозореца при запис на клавиш. `Tab`, модификаторите, Caps Lock, `F5`, `F11` и `F12` се отхвърлят; `Shift` е позволен само за задържаното действие „Speed boost“.
  - Подсказките под видеото, значките и бутоните Continue/Cancel следват вашите настройки.
- `Esc` отменя присъда, чакаща потвърждение, и първата стъпка от двустъпково изпращане с `Enter`.
- **Прозорец Animations** (Settings → Animations): шест стила, преглед на живо, три скорости и превключвател. При предпочитание за намалено движение анимациите са изключени.
- `Enter` и `Esc` работят и при фокус върху радио бутон за присъда.

### Поправено
- **Дълго „loading next clip“** при задача с един въпрос: проверката вече не чака липсващото поле `aimassist`, приема формуляр за присъда и метаданни на медията и започва по-рано. Страници без клип затварят наслагването след 3 секунди.
- Клавишите `Space`, `Enter` и др. вече не действат върху страницата зад диалог.

### Локализация
- Hotkeys и Animations първоначално бяха на английски и руски; другите езици бяха добавени във v1.2.1.

Шестте стила са pulse, breathe, ripple, heartbeat, orbit и blink.

# DemoScope v1.1.0

Поддръжка на задачата на VACNet с един въпрос.

### Добавено
- **Задача с един въпрос.** VACNet пита „Is the Subject cheating beyond a reasonable doubt?“ с отговори Cheating / Uncertain / No cheats seen. DemoScope разпознава задачата и използва компактен изглед без бързите присъди, разширените комбинации и генератора на случайни отговори.
- Етикети на присъдите на езика на DemoScope, значки `1–3` и съответните клавиши.
- **Индикатор за заключване.** Uncertain и No cheats seen се отключват след края на клипа. Картата показва оставащото време; заключените опции са затъмнени, а натискането им пуска звук за грешка и разклаща картата.
- Подсказките вече показват `Enter` и `1–3`; бутоните за присъда са по-високи.

### Локализация
- 5 нови низа за етикетите, заглавието, обяснението и заключването на всички 29 езика.

# DemoScope v1.0.6

### Добавено
- **Обяснения на DemoScope** за четирите категории присъди на всичките 29 езика. Изскачащите „?“ вече не зависят от английския текст на VACNet, който се среща например на украински.

# DemoScope v1.0.5

### Добавено
- **Бутон „?“** до AIM ASSIST, WALL HACK, AUTO BHOP и BOT показва обяснение. Затваря се с клик отвън, повторен клик или `Esc`. Не получава клавиатурен фокус, за да не променя действието на `Enter` и `Space`.

### Поправено
- Бутонът Local history вече е със същия размер като съседните значки, не пренася текста, съкращава дълги етикети, а редът със значки се пренася вместо да се свива.

# DemoScope v1.0.4

### Поправено
- **Присъдите оставаха на езика на браузъра** след смяна на езика. VACNet използва параметъра Steam `?l=`, докато DemoScope сменяше само собствените си етикети. Страницата вече се отваря с избрания `?l=`; страница без него се заявява повторно веднъж. Езикът на VACNet се установява от `l=` в URL адресите на CSS и скриптовете; ограничението до един опит предотвратява цикъл при неподдържан език.

# DemoScope v1.0.3

### Променено
- **Върнато е цветното подчертаване на ключови фрази** в бутоните: търсената фраза е удебелена в оранжево, а „not“ в отрицателния отговор — в приглушено синьо. Избраните бутони остават четливи.
- `normalizeVerdictLabels` вече премахва само b акцента, така че маркирането се запазва.

HTML елементът: `<b>`.

# DemoScope v1.0.2

### Поправено
- **`Space`, `M` и `F` изглеждаха неработещи**, защото VACNet / Video.js обработваха клавиша втори път. DemoScope вече ги прихваща.
- Във Firefox отпускането на `Space` вече не натиска бутона на плейъра на фокус.
- Клавишите на плейъра работят и при фокус върху радио бутон.

# DemoScope v1.0.1

Съвместимост с преработената страница за преглед на VACNet.

### Поправено
- **Панелът се изграждаше частично** след промяната на VACNet: заглавка, карта с инструкции, мрежово оформление, премахнат контейнер verdicts-container-inner и преместен submitbuttons предизвикваха грешка в `insertBefore`. Стъпката `ensureReviewStructure` нормализира маркировката за старото и новото оформление.

### Променено
- Заглавката и инструкциите се скриват; броячът на клиповете се копира в значка.
- Continue остава фиксиран долу и видим при дълги преводи.

Технически селектори: `.verdicts-container-inner`, `#submitbuttons`.

# DemoScope v1.0.0

Първо публично издание на потребителския скрипт DemoScope за страниците за преглед на CS2 VACNet.

### Добавено
- Интерфейс на 29 езика, автоматичен избор, пет бързи присъди и 15 разширени комбинации.
- Видео контроли по сегменти, кадър по кадър, ускорение със `Shift`, `Space` за пускане/пауза, `M` за заглушаване, `F` за цял екран и изпращане на присъда в две стъпки с `Enter`.
- Локална история, JSON импорт/експорт, HTML отчети и обединяване на JSON архиви.
- Подобрена страница с покана, настройки на звука, бърз клавиш за настройки, скриване на името, правила за преглед и незадължителни случайни присъди (изключени по подразбиране).

### Поверителност
- Няма телеметрия; настройките и историята не се качват. Присъдите се изпращат към VACNet чрез стандартната форма на сайта.







