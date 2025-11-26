# Lucky Draw Website

A Node.js Lucky Draw Website powered by Gemini CLI and SQLite.

## Features
- Users submit Name, DOB, City, Email (3 entries max)
- Duplicate entries blocked automatically
- Random winner selection with "Pick Winner" button
- Winner page title: "Winner of Giveaway"
- Clean UI: Black background, white text

## Tech Stack
- Node.js (Express.js)
- SQLite
- HTML, CSS, JS
- Gemini CLI

## How to Run
1. Install dependencies:
   ```bash
   npm install

🟢 Node.js & Gemini CLI Installation and Setup Guide

Recently, I started exploring Google’s Gemini CLI and wanted to share the setup process for anyone getting started:

1️⃣ Node.js Setup

Current installed version: Node.js 25

Important: Gemini CLI works best with Node.js version 20

2️⃣ Gemini CLI Installation
npm install -g @google/gemini-cli


This installs Gemini CLI globally, so you can use it from any folder

-g = global installation

3️⃣ Verify Installation
gemini -v


Checks if Gemini CLI is installed and shows the version

4️⃣ Basic Gemini CLI Commands

Start Gemini CLI:

gemini


After this, you can interact with Gemini directly via prompts (like AI chat)

Select a specific model:

gemini --model gemini-2.5-flash


gemini-2.5-flash is a fast and latest model

Gemini CLI Prompt – Lucky Draw Website:

Task: Generate a complete Node.js Lucky Draw website project.

Requirements:
1. Website allows users to submit 3 entries with the following fields:
   - Name
   - Date of Birth
   - City
   - Email
2. Each entry must be unique. Duplicate submissions should show an error message.
3. Use SQLite database to store entries.
4. Include a button labeled "Pick Winner" which will:
   - Randomly select one winner from the database.
   - Display the winner’s name in a new page/section.
5. The title of the winner page/section should be "Winner of Giveaway".
6. Website style:
   - Background color: Black
   - Text color: White
   - Simple and responsive design
7. Use Node.js with Express.js for backend.
8. Frontend: HTML + CSS + basic JS (no framework required).
9. Generate all necessary files:
   - server.js
   - public/index.html
   - public/style.css
   - database setup (SQLite)
10. Include instructions to run:
    - npm install
    - node server.js

Output requirements:
- Provide **full project code** ready to run.
- Save all source files in folder: `C:/Users/<YourUsername>/Desktop/giveaway_website`
- Include SQLite database initialization script.
- Ensure random winner selection works correctly.
- Include proper error handling for duplicate entries.

Start the server:

node server.js

Open browser at http://localhost:3000
