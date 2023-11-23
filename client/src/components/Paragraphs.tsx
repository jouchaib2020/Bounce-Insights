import { Demographic, General, Government } from "../utils/types"

export function GeneralInfo({generalInfo}: {generalInfo: General}) {
  return (
    <p className="mb-2 text-gray-500 dark:text-gray-400">
        {`
    The country is officially known by the ISO 3166-1 alpha-2 code "${generalInfo.cca2}" and has a numeric country code of "${generalInfo.ccn3}". 
    Internationally, it is recognized by the ISO 3166-1 alpha-3 code "${generalInfo.cca3}".
    The main language spoken in the country is "${generalInfo.languages[0]}".
    The country's unique International Olympic Committee code is "${generalInfo.cioc}". 
    It is currently assigned the independence status of "${generalInfo.status}". 
    ${generalInfo.name} is ${generalInfo.unMember ? '' : 'not'} a member of the United Nations
    `}
    </p>
  )
}



export function DemoraphicsInfo({demograInfo}: {demograInfo: Demographic}) {
    return (
      <p className="mb-2 text-gray-500 dark:text-gray-400">
          {`
      With a population of ${demograInfo.population.toLocaleString()}, the country exhibits a diverse demographic landscape. 
      The Gini coefficient, a measure of income inequality, is 
      ${demograInfo.gini && Object.keys(demograInfo.gini).length > 0 ?`${Object.values(demograInfo.gini)[0]} in ${Object.keys(demograInfo.gini)[0]} ` :'currently not available'}.
       Understanding the demographic composition and socioeconomic factors is crucial for a comprehensive analysis of the nation's dynamics.
      `}
      </p>
    )
  }

  export function GovernmentAndSymbols({governmentAndSymbols}: {governmentAndSymbols: Government}) {
    return (
      <p className="mb-2 text-gray-500 dark:text-gray-400">
          {`
        The country is associated with the FIFA code "${governmentAndSymbols.fifa}". The country's national currency is the "${governmentAndSymbols.currency}". 
        It belongs to the "${governmentAndSymbols.region}" region, and the "${governmentAndSymbols.subregion}" subregion.
        The capital city is ${governmentAndSymbols.capital} holds essential information, and the country observes a week starting from "${governmentAndSymbols.startOfWeek}". 
        The national flag is represented by the emoji "${governmentAndSymbols.flag}". 
        Various time zones are observed throughout the country, denoted by "${governmentAndSymbols.timeZones.slice(0,4)}". 
  

      `}
      </p>
    )
  }