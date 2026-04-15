# 🚀 EBG - Engineering Workspace

Welcome to the central repository for EBGs technical architecture, software development, and systems engineering. This workspace spans multi-tenant operations, automated reporting, full-stack Next.js interfaces, and data transformation protocols.

---

## 📊 Workspace Storage Dashboard

This dashboard visualizes the raw physical footprint of each division locally on the physical machine. 

> **Important Setup Context:** While the local drive totals nearly **600 MB**, the actual push to GitHub is fractions of a megabyte. This is thanks to our aggressive `.gitignore` blocking the massive Dependency Trees in the Frontend folder and exclusively isolating critical PDF/Form assets.

| 📈 Rank | Division | Project Folder | Raw Local Size | Sync Status |
| :---: | :--- | :--- | :---: | :---: |
| **🥇 1** | **Frontend Engine** | `02) S-Swap now clone` | **565.08 MB** | 🟢 Fully Optimized |
| **🥈 2** | **Automations** | `05) M-AgeonDeck` | **21.48 MB** | 🟢 Strict Tracker |
| **🥉 3** | **Brand Audits** | `06) M-Website Audit` | **4.20 MB** | 🟢 Strict Tracker |
| **4** | **Data Architecture** | `01) D-Data Transformation` | **0.72 MB** | 🟢 Optimized |
| **5** | **SaaS Systems** | `03) M-Dashboard (Excel to FullApp)` | **0.14 MB** | 🟢 Only `.gform` files |
| **6** | **BI Research** | `04) S-Dashboard Tools` | **0.06 MB** | 🟢 Strict Tracker |
| **7** | **Desktop Tooling** | `03) Sample Tkinter App` | **0.01 MB** | 🟢 Tracked |

*Note: The **Swap now clone** dominates local size globally, but its Node modules are entirely untracked to keep the repository lightning-fast.*

---

## 📂 Project Scopes

### 🏎️ `02)` S-Swap Now Clone (The Heavyweight)
The active flagship Next.js 16 (App Router) project cloning the Swapnow food subscription ecosystem. Built using TypeScript and inline-injected Tailwind v4. Features complex dynamic image loading and modular architecture (`Hero`, `CategoryCards`).

### 📡 `03)` M-Dashboard Transition
The central nervous system for migrating EBG's raw sales data out of restrictive Excel templates into a hierarchical, multi-tenant application.

### 🤖 `05)` M-AgeonDeck Automation
Houses Python automations (`create_ageon_ppt.py`) allowing instant, programmatic generation of PowerPoint slide-decks directly from raw concept mapping.

### 🔐 `.gitignore` Security Architecture
The repository's backbone. It features a master rule-set blocking all `node_modules`, Python caches `__pycache__`, environment secrets, and forces strict file whitelisting inside operational project folders to prevent UI mockups and 22MB PDFs from lagging synchronization times.
