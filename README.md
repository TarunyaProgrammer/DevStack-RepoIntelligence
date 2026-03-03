# DevStack — Repo Intelligence

**DevStack** is an AI-powered codebase intelligence platform that helps developers understand complex GitHub repositories in minutes, not days. Instead of manually tracing imports and reading files, you can simply ask the AI about the architecture, logic flows, or specific implementation details.

---

## 🚀 The Goal
To provide grounded, architecture-aware answers to code-related questions, complete with file citations and visual dependency maps.

## 🛠️ Tech Stack

### Frontend (User Interface)
- **Framework:** Angular 17+ (for a robust, scalable web app)
- **Styling:** Tailwind CSS & Angular Material (sleek, modern design)
- **Visuals:** RxJS (reactive state) & Interactive Graph Libraries (for dependency visualization)

### Backend (The Brain)
- **Framework:** NestJS (Node.js)
- **Language:** TypeScript
- **Task Queue:** BullMQ & Redis (to handle heavy repo indexing in the background)
- **Parser:** Tree-sitter (understands code structure: classes, functions, etc.)

### AI & Retrieval
- **LLM API:** (e.g., Gemini or OpenAI) for generating answers.
- **Embeddings:** Vector representations of code snippets.
- **Vector DB:** PostgreSQL with `pgvector` (stores the "meaning" of code for fast retrieval).

---

## 🏗️ How it Works (The Pipeline)
1. **Fetch:** User pastes a GitHub URL. The system downloads the repo.
2. **Filter:** It ignores junk (like `node_modules` or images) and focuses on code.
3. **Parse & Chunk:** Using *Tree-sitter*, it breaks the code into logical blocks (like a whole function) rather than just random lines.
4. **Index:** It builds a **Dependency Graph** (who imports what) and a **Module Map**.
5. **Embed & Store:** Every code chunk is converted into a vector and stored in the database.
6. **Query:** When you ask a question, the AI searches the vector DB and the dependency graph to find the most relevant context and answers you with citations.

---

## 📅 Roadmap
- **V1:** Repo Chat (Basic ingestion + Q&A).
- **V2:** Structural Awareness (Tree-sitter parsing + Architecture summaries).
- **V3:** Visual Intelligence (Interactive dependency graphs and UI panels).
