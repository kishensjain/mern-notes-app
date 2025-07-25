# 📝 MERN Notes App

A minimal full-stack **Note-Making App** built using the **MERN stack** (MongoDB, Express, React, Node.js) with **Tailwind CSS** for styling and **dark/light mode** toggle using React Context.

---

## 🚀 Features

- ✅ Create, edit, and delete notes
- ✅ Light/Dark mode toggle
- ✅ Responsive UI using Tailwind CSS
- ✅ Backend API with Express + MongoDB
- ✅ Toast notifications via `react-hot-toast`

---

## 🛠️ Tech Stack

**Frontend:**
- React
- React Router
- Tailwind CSS
- React Hot Toast
- Context API (for theme toggle)

**Backend:**
- Node.js
- Express.js
- MongoDB (via Mongoose)
- CORS, dotenv

---

## 🌙 Theme Toggle

Implemented using Context API:

- Uses `localStorage` to persist user preference
- Toggles Tailwind's `dark` class on `<html>`
- Smooth transitions using Tailwind utility classes