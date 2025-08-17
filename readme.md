# HTML Email Development Workflow

This repository contains a **HTML email template** that renders consistently in **Gmail**, **Apple Mail**, and **Outlook**.

It includes a complete development workflow where:

1. You edit `email-source.html` (with CSS in `<style>` tags)
2. On save, it automatically converts to `email.html` with inlined CSS
3. Live preview updates instantly
4. Email is automatically sent for testing

---

## Features

- **Source-to-production workflow**: Edit `email-source.html` → auto-generate `email.html`
- **Automatic CSS inlining** for email client compatibility
- **Live browser preview** that updates when source changes
- **Automatic email sending** to Gmail for real-client testing
- **Gmail auto-forwarding** to Outlook and Apple Mail
- **Responsive and table-based** HTML structure

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

---

```bash
code .
```

4. Start Live Server

- Open `email.html` in VS Code
- Right-click → "Open with Live Server"
- Your email will be visible at: http://127.0.0.1:5500/email.html

Automatic email sending to Gmail

1. Create a small Node.js script (e.g., `send-email.js`) using `nodemailer` to send `email.html` to your Gmail address.
2. Use `nodemon` to watch `email.html` and run the send script on save:

```bash
npx nodemon --watch email.html --exec "node send-email.js"
```

Every time you save `email.html`, the updated version is sent to your Gmail inbox (if your script is set up that way).

Gmail auto-forwarding to Outlook & Apple Mail

1. In Gmail:
   - Go to Settings → See all settings → Forwarding and POP/IMAP
   - Click "Add a forwarding address"
   - Enter your Outlook email and confirm via the email sent to Outlook
2. (Optional) To also forward to Apple Mail: set Outlook to forward all incoming mail to your iCloud/Apple Mail address.
3. (Optional) Use Gmail Filters to forward only test emails:
   - Settings → Filters and Blocked Addresses → Create filter
   - Filter by From: or Subject: of your test emails
   - Choose Forward to: your forwarding address

CSS inlining for email compatibility

Most email clients (especially Gmail & Outlook) strip `<style>` blocks. To ensure styles are preserved, use CSS inlining:

```bash
npm install -g juice
juice email.html email-inlined.html
```

- `juice` takes your HTML email and moves all CSS into inline `style="..."` attributes.
- Send the inlined version (`email-inlined.html`) to your email clients for testing.

Testing

1. Save changes in VS Code.
2. Live Server updates browser preview instantly.
3. Nodemon sends updated email to Gmail (if configured).
4. Gmail forwards to Outlook & Apple Mail (if forwarding is set up).
5. Check the emails in:
   - Gmail web/app
   - Outlook desktop/web
   - Apple Mail app

Folder structure

```
.
├── email.html          # Main email template
├── email-inlined.html  # CSS-inlined version for sending
├── send-email.js       # Nodemailer send script
└── README.md           # Documentation
```

License

MIT License — feel free to use and adapt for your own projects.

---

If you want, I can add a working `send-email.js` script (using `nodemailer`) to the repo and include usage instructions in this README so the project is ready to run and send emails on save.
