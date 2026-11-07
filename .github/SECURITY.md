<div align="center">

**English** · [Български](https://github.com/ebayybe/DemoScope/blob/main/.github/SECURITY/bg_SECURITY.md) · [Čeština](https://github.com/ebayybe/DemoScope/blob/main/.github/SECURITY/cs_SECURITY.md) · [Dansk](https://github.com/ebayybe/DemoScope/blob/main/.github/SECURITY/da_SECURITY.md) · [Deutsch](https://github.com/ebayybe/DemoScope/blob/main/.github/SECURITY/de_SECURITY.md) · [Ελληνικά](https://github.com/ebayybe/DemoScope/blob/main/.github/SECURITY/el_SECURITY.md) · [Español (Latinoamérica)](https://github.com/ebayybe/DemoScope/blob/main/.github/SECURITY/es-419_SECURITY.md) · [Español (España)](https://github.com/ebayybe/DemoScope/blob/main/.github/SECURITY/es-ES_SECURITY.md) · [Suomi](https://github.com/ebayybe/DemoScope/blob/main/.github/SECURITY/fi_SECURITY.md) · [Français](https://github.com/ebayybe/DemoScope/blob/main/.github/SECURITY/fr_SECURITY.md) · [Magyar](https://github.com/ebayybe/DemoScope/blob/main/.github/SECURITY/hu_SECURITY.md) · [Bahasa Indonesia](https://github.com/ebayybe/DemoScope/blob/main/.github/SECURITY/id_SECURITY.md) · [Italiano](https://github.com/ebayybe/DemoScope/blob/main/.github/SECURITY/it_SECURITY.md) · [日本語](https://github.com/ebayybe/DemoScope/blob/main/.github/SECURITY/ja_SECURITY.md) · [한국어](https://github.com/ebayybe/DemoScope/blob/main/.github/SECURITY/ko_SECURITY.md) · [Nederlands](https://github.com/ebayybe/DemoScope/blob/main/.github/SECURITY/nl_SECURITY.md) · [Norsk](https://github.com/ebayybe/DemoScope/blob/main/.github/SECURITY/no_SECURITY.md) · [Polski](https://github.com/ebayybe/DemoScope/blob/main/.github/SECURITY/pl_SECURITY.md) · [Português (Brasil)](https://github.com/ebayybe/DemoScope/blob/main/.github/SECURITY/pt-BR_SECURITY.md) · [Português (Portugal)](https://github.com/ebayybe/DemoScope/blob/main/.github/SECURITY/pt-PT_SECURITY.md) · [Română](https://github.com/ebayybe/DemoScope/blob/main/.github/SECURITY/ro_SECURITY.md) · [Русский](https://github.com/ebayybe/DemoScope/blob/main/.github/SECURITY/ru_SECURITY.md) · [Svenska](https://github.com/ebayybe/DemoScope/blob/main/.github/SECURITY/sv_SECURITY.md) · [ไทย](https://github.com/ebayybe/DemoScope/blob/main/.github/SECURITY/th_SECURITY.md) · [Türkçe](https://github.com/ebayybe/DemoScope/blob/main/.github/SECURITY/tr_SECURITY.md) · [Українська](https://github.com/ebayybe/DemoScope/blob/main/.github/SECURITY/uk_SECURITY.md) · [Tiếng Việt](https://github.com/ebayybe/DemoScope/blob/main/.github/SECURITY/vi_SECURITY.md) · [简体中文](https://github.com/ebayybe/DemoScope/blob/main/.github/SECURITY/zh-CN_SECURITY.md) · [繁體中文](https://github.com/ebayybe/DemoScope/blob/main/.github/SECURITY/zh-TW_SECURITY.md)

</div>

# Security Policy

DemoScope is a userscript that adds review and quality-of-life features to the Counter-Strike 2 VACNet review interface. This policy explains which versions receive security fixes and how to report a suspected vulnerability.

## Supported versions

Security fixes are considered for the latest stable release only.

| Version | Supported |
| --- | --- |
| 1.2.0 (latest stable) | Yes |
| Older versions | No; please update before reporting |

## Reporting a vulnerability

Please do not disclose suspected vulnerabilities in public GitHub Issues, Discussions, pull requests, or comments.

If GitHub's **Report a vulnerability** option is available for this repository, open [Security Advisories](https://github.com/ebayybe/DemoScope/security/advisories) and use it to send a private report. If it is unavailable, use the GitHub Issues link below to ask only for a private reporting channel. Do not include vulnerability details in the issue.

Please include:

- The DemoScope version, browser, and userscript manager versions.
- A clear description of the potential impact.
- Reproduction steps and, if possible, a minimal proof of concept using synthetic data.

Do not include passwords, session cookies, access tokens, private VACNet links, personal information, or unredacted logs and screenshots. Please allow time for investigation and a fix before discussing the issue publicly. Reports are handled on a best-effort basis; no response or fix timeline is guaranteed.

## Scope and safe testing

This policy covers security issues caused by DemoScope itself, such as unintended script behavior, exposure of data stored by the script, or unsafe handling of imported or page-provided data.

Do not test against accounts, systems, or data you do not own or have permission to use. Do not probe or attack VACNet, Steam, Valve infrastructure, GitHub, browsers, or userscript managers. Vulnerabilities in those services or tools should be reported to their respective maintainers.

For ordinary bugs and feature requests, use [GitHub Issues](https://github.com/ebayybe/DemoScope/issues). If private vulnerability reporting is unavailable, use the same page only to request a private contact channel; do not post vulnerability details.
