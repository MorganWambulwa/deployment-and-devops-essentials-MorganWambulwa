# Bug Tracker MERN Application – Deployment and DevOps Guide

Welcome! This repository contains a full MERN stack Bug Tracker application. This README will guide you through how the project is deployed, how to run it locally, and how the CI/CD and monitoring setups work.

---

## Live Applications

- **Frontend:** [https://bugtracker-frontend-lgvnhdvl7-morgan-wambulwas-projects.vercel.app/](https://bugtracker-frontend-lgvnhdvl7-morgan-wambulwas-projects.vercel.app/)  
- **Backend API:** [https://bug-tracker-l1td.onrender.com/api/bugs](https://bug-tracker-l1td.onrender.com/api/bugs)

You can interact with the frontend directly in your browser. All bug data is served from the backend API.

---

## Project Overview

This project demonstrates:

1. Deploying a full MERN stack application to production
2. Configuring a CI/CD pipeline using GitHub Actions
3. Implementing linting, testing, and automated builds
4. Setting up frontend and backend environment variables
5. Implementing basic monitoring for runtime errors and API health

---

## Getting Started Locally

To run this project on your own machine:

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd <repo-folder>
2. Setup Backend
bash
Copy code
cd backend
npm install
Create a .env file in backend/:

env
Copy code
PORT=5000
MONGO_URI=<your-mongodb-atlas-uri>
Start the backend server:

bash
Copy code
npm run dev
Your backend will run at: http://localhost:5000/api/bugs

3. Setup Frontend
bash
Copy code
cd frontend
npm install
Create a .env file in frontend/:

env
Copy code
REACT_APP_API_URL=http://localhost:5000
Start the frontend server:

bash
Copy code
npm start
Your frontend will run at: http://localhost:3000

Project Structure
bash
Copy code
├── backend/           # Express.js API code
├── frontend/          # React.js frontend code
├── .github/workflows/ # GitHub Actions CI/CD workflows
├── REAME.md
└── Week7-Assignment.md# Assignment instructions
CI/CD Pipeline
GitHub Actions is used to automate testing, linting, building, and deployment:

Backend Workflow

Runs linting and backend tests

Automatically deploys to Render on successful builds

Frontend Workflow

Runs linting and frontend tests

Automatically builds and deploys to Vercel on successful builds

Branch Strategy

main branch deploys to production

staging branch can deploy to a staging environment (optional)

Screenshots of CI/CD Pipelines


Monitoring and Error Handling
Backend

API health checks at /api/health

Errors logged in the console (can be extended to LogDNA or similar services)

Frontend

React Error Boundaries handle runtime errors gracefully

User-friendly error messages and console logging

Future Enhancements

Integrate Sentry for real-time error reporting

Set up uptime monitoring with UptimeRobot or Pingdom

Deployment Platforms Used
Backend: Render (supports automatic deployments from GitHub)

Frontend: Vercel (optimized for React apps, automatic deployments)