import { Country, CountryResponse } from '../utils/types';
import { isCountryCode, mapCountryToCountryResponse } from '../utils/utils';

describe('mapCountryToCountryResponse', () => {
  it('should map country to country response format', () => {
    const mockCountry: Country = {
        name: {
            common: 'Test Country',
            official: '',
            nativeName: {}
        },
        flags: {
            png: 'test-flag.png',
            svg: '',
            alt: ''
        },
        region: 'Africa',
        subregion: 'Test Subregion',
        independent: true,
        status: 'Test Status',
        unMember: true,
        population: 1000000,
        area: 5000,
        gini: { year: '2018', value: 30 },
        landlocked: true,
        capital: ['Test Capital'],
        startOfWeek: 'Monday',
        timezones: ['UTC+1'],
        latlng: [0, 0],
        tld: [],
        cca2: '',
        ccn3: '',
        cca3: '',
        cioc: '',
        continents: [],
        coatOfArms: [],
        currencies: {},
        idd: {},
        altSpellings: [],
        languages: {},
        translations: {},
        borders: [],
        demonyms: {},
        flag: '',
        maps: {},
        fifa: '',
        car: {},
        capitalInfo: {}
    };

    const expected: CountryResponse = {
      general: {
        name: 'Test Country',
        flag: 'test-flag.png',
        region: 'Test Region',
        subregion: 'Test Subregion',
        independent: true,
        status: 'Test Status',
        unMember: true,
      },
      numeric: {
        population: 1000000,
        area: 5000,
        gini: 30,
      },
      boolean: {
        landlocked: true,
        independent: true,
        unMember: true,
      },
      demographic: {
        population: 1000000,
        gini: { year: '2018', value: 30 },
      },
      government: {
        capital: 'Test Capital',
        startOfWeek: 'Monday',
        timeZones: ['UTC+1'],
      },
      latlng: [0, 0],
    };

    const result = mapCountryToCountryResponse(mockCountry);
    expect(result).toEqual(expected);
  });
});

describe('isCountryCode', () => {
  it('should return true for a valid country code', () => {
    const countryCode = 'US';
    const result = isCountryCode(countryCode);
    expect(result).toBe(true);
  });

  it('should return false for an invalid country code', () => {
    const invalidCountryCode = 'InvalidCode';
    const result = isCountryCode(invalidCountryCode);
    expect(result).toBe(false);
  });

  it('should return true for a valid numeric country code', () => {
    const numericCountryCode = 123;
    const result = isCountryCode(numericCountryCode);
    expect(result).toBe(true);
  });
});
