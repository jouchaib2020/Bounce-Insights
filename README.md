# Country Information App
Welcome to the Country Information App! This application allows users to input a country, fetch information about that country, and display it in a user-friendly manner. The application consists of a React frontend and a NodeJS backend running Express.

## Table of Contents
Challenge Overview
Mandatory Technologies
Marking Criteria
Getting Started
Project Structure
Deployment
Usage
Testing (Bonus)
Contributing
License

## Getting Started

### Visit the application online
- The application is hosted in  vercel and can be accessed via the link : https://bounce-insights-ten.vercel.app .
- The application's backend server (API) is dockerized and hosted in digital ocean's platform and can be accessed via : https://stingray-app-pmx35.ondigitalocean.app/api
- The corresponding docker conteiner is : https://hub.docker.com/repository/docker/deadpoule22/bounce-insights/general

### Run the code locally
Follow these steps to get the project up and running on your local machine:
#### Clone the Repository:

bash
Copy code
git clone <repository-url>
cd Bounce-Insights

#### Install Dependencies:

bash
Copy code
- Install frontend dependencies
cd client
npm install

- Install backend dependencies
cd ../server
npm install

#### Run the Application:

 - Start the backend server:

bash
cd ../server
npm run dev
The application should now be accessible at http://localhost:3000/

- Start the React frontend:

bash
Copy code
cd ../frontend
npm run dev
The application should now be accessible at  http://127.0.0.1:5173/.

Project Structure


Bounce-Insights
├── client/
│   ├── api/
│   ├── __tests__/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   ├── ├── components/
│   ├── ├── ├── Dashboard.tsx
│   ├── ├── ├── Map.tsx
│   ├── ├── ├── SearchForm.tsx
│   ├── ├── ├── ....
│   ├── ├── ├── Error.tsx
│   │   ├── App.ts
│   │   ├── Main.ts
│   │   ├── index.html
│   │   ├── ...
│   ├── public/
│   |── ...
│   └── tsconfig.js
├── server/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── tests/
│   │   ├── app.ts
│   │   ├── server.ts
│   │   └── ...
│   └── package.json
├── .gitignore
├── README.md
└── ...
Deployment
Describe how the application can be deployed, and provide information about the hosting platform used (e.g., Vercel, Render).

Usage
Provide instructions on how to use the application. Include details on inputting a country, fetching information, and any other relevant usage instructions.

Testing (Bonus)
If you have included tests for your applications (e.g., Cypress for frontend, Jest for backend), provide instructions on how to run these tests.

Contributing
If you'd like to contribute to this project, please follow the Contributing Guidelines.

License
This project is licensed under the MIT License.
