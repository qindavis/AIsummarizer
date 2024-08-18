# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


The AI Article Summarizer is a web application that uses OpenAI's GPT-4 model to automatically generate concise summaries of long articles. This tool is designed for users who want to quickly grasp the key points of lengthy texts, improving productivity and understanding.

Features
--------------------------------
Article Summarization: Enter any article URL to generate a concise summary using GPT-4, simplifying complex content into digestible information.
----
History Management: Automatically saves and displays a history of summarized articles, allowing users to revisit past summaries.
----
Responsive Design: Optimized for desktops, tablets, and mobile devices, ensuring a seamless experience across platforms.
----
Copy and Share: Quickly copy summaries to your clipboard or share them with others.


Technologies Used
--------------------------------------
Frontend: React, Tailwind CSS
State Management: Redux Toolkit
API Integration: RapidAPI for external article summarization service
Build Tool: Vite
Version Control: Git

#npm create vite@latest
Installation
Clone the repository:
git clone 

cd AISummarizer
Install dependencies:
npm install @reduxjs/toolkit
npm install -D tailwind plostcss autoprefixer
npx tailwindcss init -p



Environment setup:
Create a .env file in the root directory and add your RapidAPI key:

env
VITE_RAPID_API_ARTICLE_KEY=your-rapidapi-key

Run the application:

npm run dev

Access the app:
Open the app in your browser at http://localhost:3000.

Usage
----------------------------
Input Article URL: Enter the URL of the article you wish to summarize in the provided input field.
--------
Generate Summary: Click the "Enter" button. The app will fetch the content and display a concise summary.
----------
Manage History: View and revisit past summaries from the history section, which automatically saves your summarized articles.
----------
Copy and Share: Use the copy button to copy the summary to your clipboard, or share the summary with others directly.


Notes
-----------------
API Rate Limits: Be mindful of the rate limits imposed by the RapidAPI service. Exceeding the limit may result in temporary access restrictions.
-----------------
Article Length: The summarization model is optimized for articles of moderate length. Very long or very short articles may produce less accurate summaries.
----------------
Data Privacy: The URLs and generated summaries are stored locally in your browser’s local storage. No data is shared with third parties beyond the summarization request to the API.
--------------------
Error Handling: If the summarization fails, an error message will be displayed. Common issues include invalid URLs or exceeding the API rate limit.