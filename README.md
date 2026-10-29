# 🏆 SAMARTH CUET PG 2026 — Data Structures Interactive Quiz Platform

An interactive, responsive, high-performance exam preparation web application modeled directly on the **SAMARTH NTA CUET PG Testing Architecture** (matching `os-cuet-pg-quiz.netlify.app`).

Loaded with **220 verified high-yield multiple-choice questions** across all 12 syllabus units, featuring step-by-step **Hinglish conceptual explanations**, **Exam Trap alerts**, unbiased **Fisher–Yates double randomization**, and full exam performance analytics.

---

## 🚀 Key Improvements & Architecture

- **Clean, Streamlined UI**: Re-architected based on `os-cuet-pg-quiz.netlify.app` into 3 uncluttered screen views:
  1. **Screen 1 (`#screen-setup`)**: Modern Welcome Hero banner, 4 key stat pills, 2-column config grid (Topic Selector + Question Limit Selector), and prominent Start Quiz banner.
  2. **Screen 2 (`#screen-quiz`)**: Distraction-free exam arena with sticky stats topbar, single centered question card, comfortable option buttons, instant green/red feedback, step-by-step Hinglish solution, and **CUET PG Exam Trap** callouts.
  3. **Screen 3 (`#screen-results`)**: Circular score gauge (`180 / 220`), performance grade tier, 6 core metrics, section progress bars, and filterable review cards (`All`, `Mistakes Only`, `Skipped`, `Correct Only`).
- **Slide-Out Question Palette**: Accessible via header grid button on desktop & mobile with color-coded chips (Correct, Incorrect, Unanswered, Current, Bookmarked).
- **Audio Synthesizer**: Native Web Audio API chimes for correct/incorrect answers without any external audio files.
- **Auto-Save & Session Recovery**: Interrupted quizzes can be resumed anytime with the animated **"Resume My Quiz"** banner.
- **Keyboard Shortcuts**: `1-4` or `A-D` to select, `N` / `→` for Next, `P` / `←` for Prev, `S` to Skip, `F` to Bookmark.

---

## 📚 Syllabus & Unit Breakdown (220 Questions)

| Unit | Topic Name | Questions |
| :---: | :--- | :---: |
| **Unit 1** | Introduction to Data Structures & Algorithm Complexity | Q1 – Q18 (18) |
| **Unit 2** | Arrays & Memory Address Calculations (1D & 2D Row/Col Major) | Q19 – Q36 (18) |
| **Unit 3** | Stacks & Polish Notation Expressions (Infix, Postfix, Prefix) | Q37 – Q54 (18) |
| **Unit 4** | Queues & Circular Queues (Linear, Circular, Deque, Priority) | Q55 – Q72 (18) |
| **Unit 5** | Linked Lists (Singly, Doubly, Circular, Header) | Q73 – Q90 (18) |
| **Unit 6** | Recursion & Recurrence Relations (Master Theorem, Backtracking) | Q91 – Q105 (15) |
| **Unit 7** | Trees & Binary Tree Properties (Traversals, Strict, Complete) | Q106 – Q125 (20) |
| **Unit 8** | Binary Search Trees & AVL Trees (Rotations, BST Properties) | Q126 – Q145 (20) |
| **Unit 9** | B-Trees & B+ Trees (Order, Indexing, Disk Storage) | Q146 – Q163 (18) |
| **Unit 10** | Hashing & Collision Resolution (Linear/Quadratic Probing, Chaining) | Q164 – Q182 (19) |
| **Unit 11** | Graph Theory & Traversals (BFS, DFS, Dijkstra, Prim/Kruskal) | Q183 – Q202 (20) |
| **Unit 12** | Searching & Sorting Algorithms (Quick, Merge, Heap, Binary Search) | Q203 – Q220 (18) |
| **TOTAL** | **Comprehensive Full Syllabus Master Bank** | **220 MCQs** |

---

## 🛠️ Project Directory Structure

```text
quiz-app/
├── index.html        # Clean semantic markup with Screen 1 (Setup), Screen 2 (Quiz), Screen 3 (Results)
├── css/
│   └── style.css     # Complete SAMARTH modern design system, Light/Dark theme & responsive layout
├── js/
│   ├── audio.js      # Native Web Audio API synthesizer for chimes
│   ├── storage.js    # LocalStorage persistence & auto-save engine
│   ├── quiz-engine.js# Unbiased Fisher-Yates shuffling & scoring engine
│   └── app.js        # Main UI controller & keyboard navigation
├── data/
│   └── questions.js  # window.CUET_DS_DATA bundle (all 220 questions ready for zero-CORS offline browsing)
├── questions.json    # Standard JSON export
├── server.js         # Lightweight local dev server
├── netlify.toml      # Netlify deployment configuration
└── README.md         # Documentation & deployment guide
```

---

## 🌐 Deploy to Netlify & GitHub

### Deploy to Netlify in 30 Seconds (Drag & Drop)
1. Open [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag and drop the `quiz-app` folder directly onto the page.
3. Your quiz website is live instantly with free HTTPS and `.netlify.app` domain!

### Push to GitHub
```bash
git init
git add .
git commit -m "Deploy SAMARTH CUET PG Data Structures Quiz Platform"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/cuet-pg-ds-quiz.git
git push -u origin main
```
