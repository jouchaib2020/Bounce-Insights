# Bounce-Insights App

Welcome to the Bounce-Insights App! This application allows users to input a country, fetch information about that country, and display it in a user-friendly manner. The application consists of a React frontend and a NodeJS backend running Express.

## Getting Started with app

### Visit the application online

- The application is hosted in vercel and can be accessed via the link : https://bounce-insights-ten.vercel.app .
- The application's backend server (API) is dockerized and hosted in digital ocean's platform and can be accessed via : https://stingray-app-pmx35.ondigitalocean.app/api
- The corresponding docker conteiner is : https://hub.docker.com/repository/docker/deadpoule22/bounce-insights/general

### Run the code locally

Follow these steps to get the project up and running on your local machine:

#### Clone the Repository:

Copy code
git clone <repository-url>
cd Bounce-Insights

#### Install Dependencies:

Copy code

- Install frontend dependencies :

  - `cd client`
  - `npm install`

- Install backend dependencies:

  - `cd ../server`
  - `npm install`

#### Run the Application:

- Start the backend server:

cd ../server
npm run dev
The application should now be accessible at http://localhost:3000/

- Start the React frontend:

Copy code
cd ../frontend
npm run dev
The application should now be accessible at http://127.0.0.1:5173/.

Project Structure

```java
Bounce-Insights
├── client/
│ ├── api/
│ ├── **tests**/
│ ├── public/
│ ├── src/
│ │ ├── assets/
│ ├── ├── components/
│ ├── ├── ├── Dashboard.tsx
│ ├── ├── ├── Map.tsx
│ ├── ├── ├── SearchForm.tsx
│ ├── ├── ├── ....
│ ├── ├── ├── Error.tsx
│ │ ├── App.ts
│ │ ├── Main.ts
│ │ ├── index.html
│ │ ├── ...
│ ├── public/
│ |── ...
│ └── tsconfig.js
├── server/
│ ├── src/
│ │ ├── controllers/
│ │ ├── routes/
│ │ ├── tests/
│ │ ├── app.ts
│ │ ├── server.ts
│ │ └── ...
│ └── package.json
├── .gitignore
├── README.md
└── ...
```

Note: The above directory structure is more complex than necessary for this project. It's designed to showcase what the structure might look like for a more complicated project. In reality, this project does not need separate directories for each file.

## Testing (Bonus)

Testing examples have been created for high-level components on the frontend using Cypress ( run command `npm run cypress:open`).

And unit tests have been added to the backend using Jest ( run command `npx jest`).

Please note that these tests are incomplete due to time constraints, but they can easily be expanded upon using the provided templates.

## License

This project is licensed under the MIT License.
