
type Gini = {
    year: number,
    value: number,
}

type Name = {
    common: string,
    official: string,
    nativeName: object,
 }

export type Country = {
    name: Name,
    tld: Array<string>,
    cca2: string,
    ccn3: string,
    cca3: string,
    cioc: string,
    independent: boolean,
    status: string,
    unMember: boolean,
    currencies: object,
    idd: object,
    capital: Array<string>,
    altSpellings: Array<string>,
    region: "Africa" | "Americas" | "Asia" | "Europe" | "Oceania",
    subregion: string,
    languages: object,
    translations: object,
    latlng: [number, number],
    landlocked: boolean,
    borders: Array<string>,
    area: number,
    demonyms: object,
    flag: string,
    maps: object,
    population: number,
    gini: Gini,
    fifa: string,
    car: object,
    timezones:  Array<string>,
    continents: Array<string>,
    flags: Array<string>,
    coatOfArms: Array<string>,
    startOfWeek: string,
    capitalInfo: object,
};

export type CountryResponse = {
    general:{
        name: string,
        flag: string,
        region: string,
        subregion: string,
        independent: boolean,
        status: string,
        unMember: boolean,
    },
    numeric: {
        population: number,
        area: number,
    },
    boolean: {
        landlocked: boolean,
        independent: boolean,
        unMember: boolean,
    },

    demographic: {
        population: number,
        gini: Gini,
    },
    government: {
        capital: string,
        startOfWeek: string,
        timeZones: string[],
    },
    latlng: [number, number],
}