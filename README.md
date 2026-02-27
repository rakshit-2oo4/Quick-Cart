# Quick-Cart 🛒

A full-stack eCommerce application built with Next.js 15, React 19, MongoDB, Clerk Authentication, Inngest, and Cloudinary.

Quick-Cart provides a modern online shopping experience with authentication, product management, image uploads, and background job processing.

---

## 🚀 Tech Stack

Frontend:
- Next.js 15 (App Router + Turbopack)
- React 19
- Tailwind CSS
- React Hot Toast

Backend:
- Next.js Server Actions / API Routes
- MongoDB with Mongoose
- Inngest (Background Jobs & Event Handling)
- Cloudinary (Image Upload & Storage)

Authentication:
- Clerk

---

## 📦 Features

- Secure user authentication
- Product creation and management
- Image uploads with Cloudinary
- Shopping cart functionality
- Background workflows using Inngest
- Responsive design with Tailwind CSS
- Toast notifications
- Optimized development with Turbopack

---

## 🛠️ Installation

1. Clone the repository

git clone https://github.com/your-username/Quick-Cart.git
cd Quick-Cart

2. Install dependencies

npm install

3. Create a `.env.local` file in the root directory and add:

MONGODB_URI=your_mongodb_connection_string

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key  
CLERK_SECRET_KEY=your_secret_key  

CLOUDINARY_CLOUD_NAME=your_cloud_name  
CLOUDINARY_API_KEY=your_api_key  
CLOUDINARY_API_SECRET=your_api_secret  

INNGEST_EVENT_KEY=your_event_key  
INNGEST_SIGNING_KEY=your_signing_key  

---

## ▶️ Running the Project

Development mode:

npm run dev

Production build:

npm run build  
npm start  

The application runs on:

http://localhost:3000

---

## 📜 Available Scripts

- npm run dev — Start development server
- npm run build — Build for production
- npm start — Start production server
- npm run lint — Run ESLint

---

## 🤝 Contributing

1. Fork the repository  
2. Create a feature branch  
3. Commit your changes  
4. Push and open a Pull Request  

---

## 📄 License

This project is licensed under the MIT License.

---

Built using modern full-stack technologies.
