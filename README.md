# 🌌 Akhil N - Premium Portfolio

A high-performance, visually striking personal portfolio website built to showcase elite software creation, robust architectures, and premium frontend experiences. Designed natively with a "Modern Luxury Aurora" aesthetic, this project embraces fluid motion, bento-grid layouts, and glassmorphic UI components.

## ✨ Features

- **Fluid Motion & Micro-interactions**: Smooth, scroll-triggered animations powered by **Framer Motion**, **GSAP**, and **Lenis**.
- **Modern Luxury Aesthetic**: Features an aurora-style dark mode, sleek 3D-inspired glassmorphism, and minimal but massive premium typography.
- **Bento-Grid Architecture**: Clean, modular layout handling projects, about section, and dynamic experience timeline.
- **Serverless Contact System**: A seamlessly integrated background contact form backed by `Formsubmit.io`, utilizing silent iframe rendering to never break the application's React UI flow.

## 🚀 Tech Stack

- **Framework**: React (Vite)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (with custom CSS tokens for the aurora aesthetic)
- **Animations**: Framer Motion, GSAP
- **Icons**: Lucide React
- **Development & Routing**: React Router DOM

## 💻 Running the Project Locally

To test and run the portfolio on your local machine:

1. **Clone the repository** (or download the source):
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Navigate to the frontend directory**:
   ```bash
   cd frontend
   ```

3. **Install the dependencies**:
   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. Visit `http://localhost:5173` in your browser to view the application.

## 📧 Contact Integration Setup

The contact form is configured to silently push submissions to `akhiln8137@gmail.com`. Since it uses a serverless approach with FormSubmit:
- The very first form submission must be verified. Simply submit the form locally, then check your inbox to click the **Activate** link sent by FormSubmit.
- All subsequent contacts from visitors will be delivered natively.

---
*Architected and developed by [Akhil N](mailto:akhiln8137@gmail.com).*
