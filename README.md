# Folio & Foundry

An independent design studio portfolio website built with modern web technologies, featuring a responsive, accessible, and highly polished user interface.
Live link: https://folio-foundry.vercel.app/
## 🚀 Tech Stack

This project is built using a modern React ecosystem:

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Library:** [React 19](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Primitives:** [Radix UI](https://www.radix-ui.com/) (Accessible, unstyled components)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Forms & Validation:** [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Data Fetching:** [TanStack React Query](https://tanstack.com/query/latest)
- **Additional Tools:** Embla Carousel (Sliders), Recharts (Data Visualization)

## ✨ Features & Assumptions

### Features
- **Responsive Design:** Fluid layouts and typography scale beautifully from mobile to desktop using modern Tailwind utilities.
- **Custom UI Components:** A bespoke design system built on top of Radix UI primitives ensuring both beautiful aesthetics and ARIA accessibility standards.
- **Form Validation:** The contact section includes robust client-side validation for emails, required fields, and consent checkboxes.
- **Dark Mode Support:** The layout adapts to themes seamlessly.

### Assumptions
- **Static vs Dynamic:** Some content (like the portfolio and services grid) is currently hardcoded in the components but structured in a way that makes it easy to migrate to a CMS or Supabase backend.
- **Contact Form Submission:** The contact form simulates a successful state upon valid submission. To make it fully functional, it should be wired to an API route, Supabase, or a service like Resend/Formspree.

## 🛠️ Setup Instructions

Follow these steps to get the project running locally on your machine.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v18 or higher is recommended).

### 1. Clone the repository

```bash
git clone <repository-url>
cd Folio-Foundry
```

### 2. Install dependencies

Using npm:
```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 4. Build for production

```bash
npm run build
npm run start
```