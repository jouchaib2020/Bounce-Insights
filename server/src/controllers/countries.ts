// define a function getRandomCountry that returns a random country by calling https://restcountries.com/#endpoints-name
// and returning a random country from the response
// the function should be exported
// the function should be used in the GET /countries/random endpoint

// Path: server/src/controllers/countries.ts
import { Request, Response } from "express";
import { Country } from "../types";

// mod.cjs
const fetch = (...args: string[]) => import('node-fetch').then(({default: fetch}) => fetch(...args));

  

export const getCountryByName = async (req: Request, res: Response) => {
    try {
        // Fetch the countries from the API
        const { name } = req.params;
        const response = await fetch(`https://restcountries.com/v3.1//name/${name}`);
        console.log("fetch countries : ", response);
        if (response.ok) {
            // Parse the JSON response
            const countries: Country[] = await response.json();
            
            // Get a random country from the array
            const randomIndex = Math.floor(Math.random() * countries.length);
            const randomCountry = countries[randomIndex];
            
            // Send the random country in the response
            res.status(200).send(randomCountry);
          } else {
            // Handle non-successful response (e.g., 404 Not Found)
            res.status(response.status).send("Failed to fetch data from the API");
          }
    
      } catch (error) {
       throw error;
      }
};

