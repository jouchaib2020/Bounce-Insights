"use strict";
// define a function getRandomCountry that returns a random country by calling https://restcountries.com/#endpoints-name
// and returning a random country from the response
// the function should be exported
// the function should be used in the GET /countries/random endpoint
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCountryByName = void 0;
// mod.cjs
const fetch = (...args) => Promise.resolve().then(() => __importStar(require('node-fetch'))).then(({ default: fetch }) => fetch(...args));
const getCountryByName = async (req, res) => {
    try {
        // Fetch the countries from the API
        const { name } = req.params;
        const response = await fetch(`https://restcountries.com/v3.1//name/${name}`);
        console.log("fetch countries : ", response);
        if (response.ok) {
            // Parse the JSON response
            const countries = await response.json();
            // Get a random country from the array
            const randomIndex = Math.floor(Math.random() * countries.length);
            const randomCountry = countries[randomIndex];
            // Send the random country in the response
            res.status(200).send(randomCountry);
        }
        else {
            // Handle non-successful response (e.g., 404 Not Found)
            res.status(response.status).send("Failed to fetch data from the API");
        }
    }
    catch (error) {
        throw error;
    }
};
exports.getCountryByName = getCountryByName;
