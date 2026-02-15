# ⚛️ Mini React Projects

A collection of small **React.js mini projects** created for practice and learning purposes.  
Each project is organized in its own folder with:

- `package.json` & standard React setup  
- `src/` containing components, styles, and logic  
- `README.md` (optional project-specific details)  

The goal of this repository is to provide **hands-on practice with React**, improve **JavaScript skills**, and create a reference collection of mini projects that can grow over time.

---

## 📂 Current Projects
### 💱 Currency Converter
A **real-time currency converter** built with React that supports **all currencies provided by the API**, focusing on clean logic, custom hooks, and accurate UX decisions.

- Converts between multiple global currencies  
- Uses a **custom React hook** to fetch exchange rates  
- Auto-updates conversion on amount or currency change  
- Swap functionality between "From" and "To" currencies  
- Fully responsive UI using **Tailwind CSS**  
- Clean separation of UI components and data logic  

**Live Demo:** [Currency Converter](https://currency-converter-vidhi.netlify.app/)

**Note:** Full details are available in  
[`04-currency-converter/README.md`](./04-currency-converter)

### 🧩 Assembly: Endgame

A **word-guessing game** inspired by Hangman, built with React and a programming-themed twist.  
Each wrong guess eliminates a programming language — guess the word before **Assembly takes over**.

- Random word generation for each new game  
- On-screen keyboard with visual feedback for correct and incorrect guesses  
- Limited attempts based on the number of programming languages  
- Dynamic win and loss states  
- Confetti celebration on winning the game  
- Contextual messages for **both correct and wrong guesses**
- Fully responsive and optimized for mobile devices  
- Clean separation of game logic and UI state  

**Live Demo:** [Assembly Endgame](https://assembly-endgame-vidhi.netlify.app/)

**Note:** Full details are available in [`03-assembly-endgame/README.md`](./03-assembly-endgame)

---

### 🎲 Tenzies Game

A classic **Tenzies dice game** built using React, focusing on **state management, accessibility, and responsive UI design**.

- Roll dice until all values match  
- Click a die to **hold** its value between rolls  
- Tracks **time taken** and **number of rolls**  
- Fully **responsive** for mobile and desktop  
- Uses **ARIA attributes** for accessibility  
- Visual dice implemented using **SVG images**  

**Live Demo:** [Tenzies Game](https://tenzies-game-vidhi.netlify.app/)

**Note:** Full details are available in [`02-tenzies/README.md`](./02-tenzies)

---

### 😂 Meme Generator

A fun React app to **generate memes with custom text, upload images, and download them**.  

- Fetches popular meme templates from an API  
- Add top and bottom text  
- Upload your own images  
- Download memes as PNG  

**Live Demo:** [Meme Generator](https://meme-generator-vidhi.netlify.app/)  

**Note:** Full details are available in [`01-meme-generator/README.md`](./01-meme-generator)

---

## 🚀 Technologies Used

- **React.js** – for building interactive UI components  
- **JavaScript (ES6)** – logic and state management  
- **HTML5 & CSS3** – structure and styling  
- **React Hooks** – useState, useEffect, useRef  
- **CSS Grid & Media Queries** – responsive layouts  
- **ARIA Accessibility** – screen reader support  
- **html2canvas** – exporting components as images (used in Meme Generator)
- **TailwindCSS** - for Fully responsive UI

## 📌 Purpose

These projects are built for:
- Strengthening React fundamentals  
- Practicing clean component-based architecture  
- Improving UI/UX and accessibility awareness  
- Creating portfolio-ready projects  

More projects will be added over time 🚀