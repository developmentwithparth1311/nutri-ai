# 🧬 NutriAI - Neural Nutritional Intelligence

NutriAI is a futuristic, AI-driven nutrition tracking prototype designed for high-end user experiences and precise macro-nutrient optimization. The frontend is currently a fully functional React prototype featuring high-fidelity UI/UX, ready for backend integration.

## ✨ Core Features
- **Intelligent Dashboard:** Real-time visualization of daily calorie limits and macro-nutrient breakdown (Protein, Carbs, Fats).
- **AI Vision Scanner:** A simulated neural-network interface for meal identification via image uploads.
- **Onboarding Protocol:** A multi-step data collection flow to calculate BMR and personalized health goals.
- **NutriAI Chat:** A specialized chatbot interface for context-aware nutritional guidance.
- **Glassmorphism UI:** A high-performance dark theme built with Tailwind CSS.

## 🛠️ Tech Stack
- **Library:** React.js + Vite
- **Styling:** Tailwind CSS (Custom Theme)
- **Icons:** Lucide-React
- **Routing:** React Router v6

## 📂 Integration Guide for Backend Developers
The frontend is built to be modular. Below are the key areas for backend connection:

1.  **Authentication (`src/pages/Auth.jsx`):** - Replace the current form submission logic with Firebase Auth or a custom JWT-based API.
2.  **User Data Persistence (`src/pages/Onboarding.jsx`):** - Map the multi-step form data to a User Profile collection in your database (MongoDB/Firestore).
3.  **AI Vision Integration (`src/pages/Dashboard.jsx`):** - The `startFakeAnalysis` function should be replaced with an actual API call to a Vision model (like Gemini 1.5 Pro or Vision-LLM).
4.  **Chat Logic (`src/pages/Chat.jsx`):** - Integrate an LLM stream (OpenAI/Gemini) to replace the simulated bot responses.

## ⚙️ Local Development Setup

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/developmentwithparth1311/nutri-ai.git](https://github.com/developmentwithparth1311/nutri-ai.git)
    ```
2.  **Navigate to the Frontend Directory:**
    ```bash
    cd frontend
    ```
3.  **Install Dependencies:**
    ```bash
    npm install
    ```
4.  **Launch the Development Server:**
    ```bash
    npm run dev
    ```

## 📝 Important Notes
- **State Management:** Currently using React `useState`. For large-scale data handling, consider adding Redux or Context API.
- **Environment Variables:** All API keys should be placed in a `.env` file. A `.gitignore` is already configured to prevent sensitive keys from being pushed.

---
**Maintained by Parth Kumbhar & Aaryan Patil** | Computer Engineering '26
