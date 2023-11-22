
import { Request, Response } from "express";
import { Country } from "../utils/types";
import { isCountryCode, mapCountryToCountryResponse } from "../utils/utils";
// mod.cjs
const fetch = (...args: string[]) => import('node-fetch').then(({default: fetch}) => fetch(...args));

export const getCountryByName = async (req: Request, res: Response) => {
    try {
        // Fetch the countries from the API
        const { name } = req.params;
        const URL = isCountryCode(name) ?
          `https://restcountries.com/v3.1/alpha/${name}`:
          `https://restcountries.com/v3.1/name/${name}?fullText=true`;

        const response = await fetch(URL);

        if (response.ok) {
            // Parse the JSON response
            const country: Country[] = await response.json();
            // struct the response to what is expected from the client
            //console.log("fetch countries : ", country);
            const countryResponse = mapCountryToCountryResponse(country[0]);
            // Send the random country in the response
            res.status(200).send(countryResponse);
          } else {
            // Handle non-successful response (e.g., 404 Not Found)
            res.status(response.status).send("Failed to fetch data from the API: " + URL);
          }
    
      } catch (error) {
       throw error;
      }
};

