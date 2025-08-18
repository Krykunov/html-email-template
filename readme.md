# HTML Email Development Workflow

This repository contains a **HTML email template** that renders consistently in **Gmail**, **Apple Mail**, and **Outlook**.

It includes a complete development workflow where:

1. You edit `email-source.html` (with CSS in `<style>` tags)
2. On save, it automatically converts to `email.html` with inlined CSS
3. Live preview updates instantly
4. Email is automatically sent for testing

---

## Quick Start

1. **Clone and install**:

```bash
git clone https://github.com/Krykunov/html-email-template
cd html-email-template
npm install
```

2. **Start development mode**:

```bash
npm run dev
```

3. **Edit your email**: Open `email-source.html` in VS Code and make changes. Every save will:
   - Generate `email.html` with inlined CSS
   - Update live preview in browser
   - Send test email (if configured)

---

## Available Scripts

- `npm run dev` - **Main development mode**: watches `email-source.html`, inlines CSS, updates preview
- `npm run watch` - Watch `email-source.html` and send emails on save
- `npm run inline` - Convert `email-source.html` to `email.html` once
- `npm run inline-send` - Inline CSS and send email once
- `npm run live` - Start live server for `email.html`
- `npm run maildev` - Start local mail server for testing
- `npm run send` - Send current `email.html` via email
