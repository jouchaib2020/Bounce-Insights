
export type Gini = {
    year: number,
    value: number,
}

export type General = {
    name: string,
    flag: string,
    region: string,
    subregion: string,
    independent: boolean,
    status: string,
    unMember: boolean,
    cca2: string,
    ccn3: string,
    cca3: string,
    cioc: string,
    languages: string[],
}

export type Numeric = {
    population: number,
    area: number,
    gini: number
}

export type BooleanT = {
    landlocked: boolean,
    independent: boolean,
    unMember: boolean,
}

export type Demographic = {
    population: number,
    gini: Gini,
}

export type Government = {
    capital: string,
    startOfWeek: string,
    timeZones: string[],
    fifa: string,
    region: string,
    subregion: string,
    flag: string,
    currency: string,
}

export type CountryData = {
    general: General,
    numeric: Numeric ,
    boolean: BooleanT,
    demographic: Demographic,
    government: Government,
    latlng: [number, number],
}