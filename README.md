# PakIcons (پاک آئیکنز) 🇵🇰

> **Honoring the Legacy of Pakistan's Greatest Minds, Visionaries, and National Heroes.**

[![Live Demo](https://img.shields.io/badge/Live%20App-pak--icons.vercel.app-01411C?style=for-the-badge&logo=vercel&logoColor=white)](https://pak-icons.vercel.app/)
[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=flat-square&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?style=flat-square&logo=vite)](https://vitejs.dev)
[![Gemini AI](https://img.shields.io/badge/AI-Gemini%203.6%20Flash-8E7CC3?style=flat-square&logo=googlecloud)](https://ai.google.dev)

---

## 🌟 Overview & Problem Statement

### **What is PakIcons?**
**PakIcons** is an interactive national heritage, biography, and AI-powered educational platform. It curates detailed profiles of influential Pakistani figures across **Science & Technology, Military Heroes, Literature & Arts, Sports Legends, National Leaders, and Social Reformers**.

### **The Problem It Solves**
For students, educators, researchers, and the global Pakistani diaspora, historical data about national icons is often scattered, poorly formatted, or lacking in bilingual accuracy. Furthermore, traditional biography pages lack interactive learning tools. 

**PakIcons** solves this by offering:
- A unified, highly accessible hub with **bi-lingual English & Urdu typography** engineered to prevent text overlapping across all viewports (mobile, tablet, desktop).
- An **AI-powered Study Center** that provides instant biography summaries, exam study notes, simplified children's stories, and interactive 3-question quizzes.
- A **Side-by-Side Comparison Engine** to evaluate achievements, timelines, and impacts.

---

## 🌐 Live Application Deployment

🔗 **Working Live App:** [https://pak-icons.vercel.app/](https://pak-icons.vercel.app/)

---

## 📸 Screenshots in Action

<div align="center">

### 1. Hero Banner & Category Explorer
<a href="https://drive.google.com/file/d/1JAZndI0UKJ6h36ztK8-uGVD5r5lyq4w5/view?usp=drive_link" target="_blank">
  <img src="https://lh3.googleusercontent.com/d/1JAZndI0UKJ6h36ztK8-uGVD5r5lyq4w5" alt="PakIcons Home & Hero Banner" width="850" style="border-radius: 12px; border: 1px solid #1e293b; margin-bottom: 20px;" />
</a>

*Interactive Hero Banner featuring the deep green national flag (#01411C), predictive search bar, and category selection grid.*

---

### 2. Personality Details & Bi-Lingual Layout
<a href="https://drive.google.com/file/d/1lDrN6se3LDaa7nv9pJKDOamF0JlQsD_X/view?usp=drive_link" target="_blank">
  <img src="https://lh3.googleusercontent.com/d/1lDrN6se3LDaa7nv9pJKDOamF0JlQsD_X" alt="Personality Detail View" width="850" style="border-radius: 12px; border: 1px solid #1e293b; margin-bottom: 20px;" />
</a>

*Detailed view showcasing symbolic art canvases, lifespan, birthplace, achievements, key quotes, and responsive Urdu typography.*

---

### 3. AI Historian & Interactive Learning Modules
<a href="https://drive.google.com/file/d/1mL8k8iCfCdsAiphl15K4XYKgtmNzykq5/view?usp=drive_link" target="_blank">
  <img src="https://lh3.googleusercontent.com/d/1mL8k8iCfCdsAiphl15K4XYKgtmNzykq5" alt="AI Feature & Quiz Generator" width="850" style="border-radius: 12px; border: 1px solid #1e293b; margin-bottom: 20px;" />
</a>

*AI Historian powered by Gemini 3.6 Flash generating interactive quizzes, study notes, and concise Q&A responses.*

</div>

---

## ✨ Features Matrix

- 🇵🇰 **National Flag Hero & Motif Visualizer**: Custom wave animation with authentic dark green field (`#01411C`) and gold crescent star motifs.
- 🔍 **Predictive Bilingual Search**: Real-time auto-suggest search supporting English names, Urdu script (`اردو`), category filters, and tags.
- 📱 **Responsive & Overlap-Free Typography**: Optimized word wrapping (`[overflow-wrap:anywhere]`) ensuring Urdu and English text remain clean without clipping or overlapping on mobile devices.
- ⚖️ **Personality Comparison Matrix**: Compare two national figures side-by-side across category, era, primary contributions, and historical legacy.
- 🤖 **AI Study Center Integration**: Generates live AI biography summaries, structured exam study guides, children's bedtime stories, and dynamic multiple-choice quizzes.
- 🎨 **Symbolic Visual Canvas**: Non-face symbolic vector art for every icon representing their field (microchips for Arfa Karim, calligraphic art for Gulgee, military honors for Nishtar-e-Haider recipients).
- 📜 **Quaid & Iqbal Wisdom Carousel**: Curated quotes from Quaid-e-Azam Muhammad Ali Jinnah and Allama Muhammad Iqbal.

---

## 🤖 The AI Feature & System Prompt

PakIcons connects to **Google Gemini 3.6 Flash** via a server-side proxy route (`/api/ai/generate`) to prevent public exposure of API keys.

### **What the AI Feature Does**
1. **Live AI Biography Summary**: Generates detailed, inspiring biography summaries on demand focusing on major contributions and legacy.
2. **Exam Notes & Study Guides**: Provides bulleted overviews and key exam tips for students.
3. **Children's Story**: Adapts complex life stories into inspiring, easy-to-understand narratives with moral lessons for young learners.
4. **Dynamic Quiz Generator**: Constructs a 3-question multiple-choice quiz complete with explanations and correct answer tracking in structured JSON.

### **System Prompt / Instructions**
```text
You are an expert Pakistani historian, biographer, and educational scholar for the PakIcons web application. 
Provide accurate, verified, precise, historically grounded, and educational responses.

[Conditional Behavior]:
- For Biography Summary ("summary"):
  "Provide an accurate, inspiring, and well-structured biography summary focusing on 
   major achievements, national contributions, and lasting legacy."

- For Comparative Analysis ("comparison"):
  "Provide a clear, balanced, and structured comparative analysis highlighting key 
   contributions, fields of impact, and historical legacy."

- For Quizzes ("quiz"):
  "Output JSON format for a quiz with 3 multiple choice questions, each having 'question', 
   'options' (array of 4 strings), 'correctAnswer' (0-indexed integer), and 'explanation' (string)."
```

---

## 🛠️ Tech Stack & Tools

| Layer | Technology / Tool |
| :--- | :--- |
| **Frontend** | React 19, TypeScript, Vite 6 |
| **Styling & Motion** | Tailwind CSS v4, Motion (`motion/react`), Lucide React Icons |
| **Backend API** | Node.js, Express 4, `tsx` / `esbuild` |
| **AI Model & SDK** | Google Gemini 3.6 Flash (`gemini-3.6-flash`) via `@google/genai` |
| **Deployment** | Vercel (`https://pak-icons.vercel.app/`) |
| **Platform** | Google AI Studio Build |

---

## 🚀 How to Run the Project Locally

### **1. Prerequisites**
Ensure you have **Node.js** (v18 or higher) and `npm` installed.

### **2. Clone the Repository**
```bash
git clone https://github.com/your-username/pak-icons.git
cd pak-icons
```

### **3. Install Dependencies**
```bash
npm install
```

### **4. Configure Environment Variables**
Create a `.env` file in the root directory (refer to `.env.example`):
```env
GEMINI_API_KEY=your_google_gemini_api_key_here
NODE_ENV=development
```

### **5. Run Development Server**
```bash
npm run dev
```
The application will be live at `http://localhost:3000`.

### **6. Build for Production**
```bash
npm run build
npm start
```

---

<div align="center">

Made with 💚 for **Pakistan** 🇵🇰

</div>
