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

Start the server:

node server.js

Open browser at http://localhost:3000
