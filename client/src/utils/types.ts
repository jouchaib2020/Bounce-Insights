
type Gini = {
    year: number,
    value: number,
}

export type CountryData = {
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
        gini: number
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