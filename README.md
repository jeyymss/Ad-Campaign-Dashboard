This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# Technical Test — Ad Campaign Dashboard

A simple, responsive dashboard built as part of a technical hiring test, designed to fetch and display campaign data from a public API using modern frontend technologies.

## Objective

The goal of this task is to demonstrate the ability to:

1. Build a clean, responsive UI

2. Fetch and display API data efficiently

3. Implement searching, filtering, and loading states

4. Follow best practices in React/Next.js development

## Live Demo

[Ad Campaign Dashboard](https://ad-campaign-dashboard-project.vercel.app/)

## Tech Stack

| Category   | Technology                                                         |
| ---------- | ------------------------------------------------------------------ |
| Framework  | **Next.js 14 (React + TypeScript)**                                |
| Styling    | **Tailwind CSS** & **shadcn/ui**                                   |
| API Source | **JSONPlaceholder** (`https://jsonplaceholder.typicode.com/posts`) |
| Deployment | **Vercel**                                                         |

## Features Implemented

✅ Fetch data from the JSONPlaceholder API

✅ Display title, body, and userId in responsive cards

✅ Search posts by title, content, or post ID

✅ Loading state while fetching data

✅ No results message when no matches found

✅ Dialog modal showing full post details on click

✅ Responsive design for mobile, tablet, and desktop

## Installation & Setup

1. Clone this repository

```bash
git clone https://github.com/jeyymss/Ad-Campaign-Dashboard.git
cd Ad-Campaign-Dashboard
```

2. Install Dependencies

```bash
npm install
# or
yarn install
```

3. Run the development server

```bash
npm run dev
# or
yarn dev
```

Then open [http://localhost:3000](http://localhost:3000)

## Project Structure

```php
Ad-Campaign-Dashboard/
 ├── app/
 │   ├── page.tsx           # Main dashboard page
 │   └── layout.tsx         # Root layout and theme setup
 ├── components/
 │   ├── ui/                # shadcn/ui base components
 │   ├── PostsGrid.tsx      # Grid component displaying fetched posts
 │   ├── SearchBar.tsx      # Search input with icon
 │   └── LoadingSpinner.tsx # Loader for async states
 ├── lib/
 │   └── utils.ts           # Helper utilities
 └── public/                # Static assets
```

## Implementation Highlights
API Integration:
Uses fetch() to retrieve post data from [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts).

Search & Filter:
Controlled input filters posts by title, body, or ID using string matching.

UI Components:
Built using Card, Badge, and Dialog from shadcn/ui with Tailwind utility classes.

State Management:
Uses React’s useState and useEffect hooks — simple and effective.

Responsive Layout:
Tailwind’s grid utilities (grid-cols-1 md:grid-cols-2 lg:grid-cols-3) ensure smooth scaling.

## Evaluation Criteria Alignment
| Criteria                   | Implementation                                  |
| -------------------------- | ----------------------------------------------- |
| **API Fetching**           | Uses `fetch()` from `JSONPlaceholder`           |
| **UI Presentation**        | Responsive grid of cards with hover states      |
| **Search & Filter**        | Real-time search by title/body/ID               |
| **Loading & Empty States** | Displayed clearly while fetching or no matches  |
| **Clean Code**             | Modular, typed components with clear separation |
| **Deployment**             | Hosted on Vercel for production testing         |


## Build & Deploy
```bash
npm run build
npm start
```

## Author
Developed by: [@jeyymss](https://github.com/jeyymss)

Deployed on: [Vercel](https://vercel.com/)

Repository: [Ad-Campaign-Dashboard](https://github.com/jeyymss/Ad-Campaign-Dashboard/)
