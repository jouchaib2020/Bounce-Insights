"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCountryCode = exports.mapCountryToCountryResponse = void 0;
function mapCountryToCountryResponse(country) {
    console.log("mapCountryToCountryResponse : ", country.gini);
    return {
        general: {
            name: country.name.common,
            flag: country.flags.png,
            region: country.region,
            subregion: country.subregion,
            independent: country.independent,
            status: country.status,
            unMember: country.unMember,
            cca2: country.cca2,
            ccn3: country.ccn3,
            cca3: country.cca3,
            cioc: country.cioc,
            languages: Object.values(country.languages),
        },
        numeric: {
            population: country.population,
            area: country.area,
            gini: country.gini ? Object.values(country.gini)[0] : 'Unknown',
        },
        boolean: {
            landlocked: country.landlocked,
            independent: country.independent,
            unMember: country.unMember,
        },
        demographic: {
            population: country.population,
            gini: country.gini,
        },
        government: {
            capital: country.capital[0], // Assuming capital is an array and taking the first element
            startOfWeek: country.startOfWeek,
            timeZones: country.timezones,
            fifa: country.fifa,
            region: country.region,
            subregion: country.subregion,
            flag: country.flag,
            currency: Object.values(Object.values(country.currencies)[0])[0],
        },
        latlng: country.latlng,
    };
}
exports.mapCountryToCountryResponse = mapCountryToCountryResponse;
function isCountryCode(str) {
    // Convert to string and remove leading and trailing whitespaces
    const countryCodeString = String(str).trim();
    // Check if the string is a country code (cca2, ccn3, or cca3) by verifying its length
    if (countryCodeString.length <= 3) {
        return true; // It's a country code
    }
    else {
        return false;
    }
}
exports.isCountryCode = isCountryCode;
