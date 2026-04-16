# 🔧 Car Service — Auto Repair Shop Web Application

A full-stack web application for a small auto repair / tire service business.  
Built as a portfolio project demonstrating modern fullstack development skills.

---

## 📋 About the Project

**Car Service** is a production-ready web app for managing an auto repair shop.  
It covers the full customer journey — from browsing services to booking appointments —  
as well as an admin panel for managing bookings, services, and schedules.

**UI language:** German 🇩🇪  
**Target audience:** Small auto repair / tire service businesses in Germany

---

## ✨ Features

### Customer Side
- 🏠 Landing page with services overview, pricing, and testimonials
- 📅 Online appointment booking (Termin buchen)
- 👤 Customer account: view and manage personal bookings
- 📞 Contact page with business information

### Admin Panel
- 📋 View, confirm, cancel, and complete appointments
- 🛠️ Manage services and pricing
- 🕐 Manage working hours and time slots
- 📊 Basic statistics dashboard

---

## 🛠️ Tech Stack

| Layer              | Technology                        |
|--------------------|-----------------------------------|
| Framework          | Next.js 16.2 (App Router)        |
| Language           | TypeScript 5                      |
| Styling            | Tailwind CSS 4                    |
| Database           | PostgreSQL (Neon)                 |
| ORM                | Prisma 7                          |
| Authentication     | NextAuth.js v5                    |
| Deployment         | Vercel                            |
| Database hosting   | Neon (dev + prod)                 |

---

## 🗺️ Pages & Routes

| Route                   | Description (DE)              |
|-------------------------|-------------------------------|
| `/`                     | Startseite (Home)             |
| `/services`             | Leistungen (Services)         |
| `/booking`              | Termin buchen (Booking)       |
| `/contact`              | Kontakt (Contact)             |
| `/auth/login`           | Anmelden (Login)              |
| `/auth/register`        | Registrieren (Register)       |
| `/dashboard`            | Kundenkonto (Customer Area)   |
| `/admin`                | Adminbereich (Admin Panel)    |
| `/admin/appointments`   | Terminverwaltung              |
| `/admin/services`       | Leistungsverwaltung           |
| `/admin/schedule`       | Zeitplanverwaltung            |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- npm
- [Neon](https://neon.tech) account (free tier is enough)

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/car-service.git
cd car-service

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Fill in your DATABASE_URL from Neon, NEXTAUTH_SECRET, etc.

# Run database migrations
npx prisma migrate dev

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🗄️ Database Schema (Overview)

```
User          → id, name, email, phone, role (CUSTOMER | ADMIN)
Service       → id, name, description, duration, price
Appointment   → id, userId, serviceId, date, timeSlot, status, vehicleInfo
WorkSchedule  → id, dayOfWeek, openTime, closeTime, isOpen
Review        → id, userId, rating, comment, createdAt
```

---

## 📦 Project Status

- [x] Project initialization
- [x] Prisma schema + Neon database setup
- [x] UI components (Header, Footer, Layout)
- [ ] Landing page
- [ ] Authentication (NextAuth.js)
- [ ] Booking system
- [ ] Customer dashboard
- [ ] Admin panel
- [ ] Deployment (Vercel + Neon)

---

## 👤 Author

**Leonid**  
Fullstack Developer  
Germany

---

## 📄 License

MIT License
