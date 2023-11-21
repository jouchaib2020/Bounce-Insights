import { Country, CountryResponse } from "../types";

export function mapCountryToCountryResponse(country: Country): CountryResponse {
    console.log("mapCountryToCountryResponse : ", country);
    return {
      general: {
        name: country.name.common,
        flag: country.flag,
        region: country.region,
        subregion: country.subregion,
        independent: country.independent,
        status: country.status,
        unMember: country.unMember,
      },
      numeric: {
        population: country.population,
        area: country.area,
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
      },
      latlng: country.latlng,
    };
  }