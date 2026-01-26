# 💣 Assembly Endgame

A React word-guessing game inspired by **Hangman**, where each wrong guess eliminates a programming language — until only **Assembly** remains.

This project focuses on **React state management**, **game logic**, **conditional rendering**, and **responsive UI design**.

**Live Demo:** [Assembly Endgame](https://assembly-endgame-vidhi.netlify.app/)

---

## 🎯 How to Play

1. A random word is selected
2. Click letters from the on-screen keyboard to guess the word
3. Each **wrong guess removes a programming language**
4. Win by guessing the word before all languages are eliminated
5. Lose if only **Assembly** survives

---

## 🚀 Features

- ⌨️ On-screen interactive keyboard (A–Z)
- ✅ Feedback message for **correct guesses**
- ❌ Feedback message for **wrong guesses**
- 💀 Programming languages eliminated one by one on mistakes
- 🎉 Win celebration animation
- 😵 Game-over state when all attempts are used
- 🔄 New Game button to restart instantly
- 📱 Fully responsive for mobile and desktop

---

## 🛠 Technologies Used

- React.js
- JavaScript (ES6)
- React Hooks (`useState`)
- Conditional rendering
- CSS Flexbox
- Utility helper functions

---

## 💻 Running Project Locally

1. Clone this repo:

```bash
git clone https://github.com/vidhisonani/mini-react-projects.git
```

2. Go into the project folder:

```bash
cd 03-assembly-endgame
```

3. Install dependencies:

```bash
npm install
```

4. Run the app:

```bash
npm run dev
```