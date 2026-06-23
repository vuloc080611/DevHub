<!-- markdownlint-disable MD033 MD041 -->
<p align="center">
  <img src="https://raw.githubusercontent.com/vuloc080611/devhub/main/apps/web/public/logo.svg" alt="DevHub logo" width="120" />
</p>

<h1 align="center">🧠 DevHub</h1>
<p align="center"><strong>The All‑in‑One Developer Workspace – Open Source & Self‑Hosted</strong></p>

<p align="center">
  <a href="https://github.com/your-username/devhub/stargazers"><img src="https://img.shields.io/github/stars/your-username/devhub?style=social" alt="GitHub stars"></a>
  <a href="https://github.com/your-username/devhub/blob/main/LICENSE"><img src="https://img.shields.io/github/license/your-username/devhub" alt="License MIT"></a>
  <a href="https://twitter.com/intent/tweet?text=DevHub%20-%20the%20open%20source%20all-in-one%20workspace%20for%20developers&url=https://github.com/your-username/devhub"><img src="https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2Fyour-username%2Fdevhub" alt="Tweet"></a>
</p>

<p align="center">
  <img src="demo.gif" alt="DevHub demo" width="800" />
</p>

---

## ✨ Why DevHub?

Developers juggle dozens of tools every day: GitHub, Notion, Trello, Clockify, Raindrop, Carbon…  
**DevHub replaces them all** with a single, privacy‑first workspace that you can self‑host in minutes.

- 🧩 **Code Snippets** – save, share, and screenshot beautiful code.
- 📝 **Notes** – full Markdown editor with real‑time preview.
- 📋 **Projects & Tasks** – drag‑and‑drop Kanban board with GitHub sync.
- ⏱️ **Time Tracking** – built‑in Pomodoro timer and timesheets.
- 🔗 **Bookmarks** – organize dev resources with tags.
- 🌐 **Public Profile** – your personal developer portfolio and bio page.
- 🔐 **GitHub / Google OAuth** – no new passwords, secure login.
- 🚀 **One‑click Deploy** – free on Vercel, database on Supabase.

All your data stays in your own PostgreSQL database – no vendor lock‑in.

---

## 🚀 Quick Start

### One‑click deploy to Vercel
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/devhub&env=DATABASE_URL,GITHUB_CLIENT_ID,GITHUB_CLIENT_SECRET,GOOGLE_CLIENT_ID,GOOGLE_CLIENT_SECRET,NEXTAUTH_SECRET,NEXTAUTH_URL)

### Run locally
```bash
git clone https://github.com/vuloc080611/devhub.git
cd devhub
npm install

# Set up environment variables
cp apps/web/.env.example apps/web/.env
# Fill in DATABASE_URL, OAuth keys, NEXTAUTH_SECRET...

# Push database schema
cd packages/db
npx prisma db push
cd ../..

# Start development
npm run dev
