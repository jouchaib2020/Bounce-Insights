import { CountryData } from "../utils/types";
import Accordion from "./Accordion";
import Insights from "./Insights";
import Map from "./Map";

// const generalInfo_mock = {
//   "name": "Burkina Faso",
//   "tld": [
//     ".bf"],
//   "cca2": "BF",
//   "ccn3": "854",
//   "cca3": "BFA",
//   "cioc": "BUR",
//   "independent": true,
//   "status": "officially-assigned",
//   "unMember": true
// }

// const demograInfo_mock = {
//   population: 20903278,
//   gini: {
//       "2014": 35.3
//   }
// }

// const governmentAndSymbols_mock = {
//   "fifa": "BFA",
//   "flag": "🇧🇫",
//   "capitalInfo": "Ouagadougou",
//   "startOfWeek": "monday",
//   "timezones": "UTC"
// }

// const latlng = [-2, 13];

// const numericData = {
//   area: 272967,
//   gini: 39.8,
//   population: 20903278,
// }

//   const booleanData = {
//     independent: true,
//     unMember: false,
//     landLocked: true,
// }



function Dashboard({display, data} : {display: boolean, data: CountryData}) {
    
  return (
    <div className={` min-w-full h-full ${display ? 'flex' :'hidden' } flex-col`}>
      <Insights data={data}/>
      <div className="flex flex-row gap-6 justify-center mt-6">
        <Accordion generalInfo={data.general} demograInfo={data.demographic} governmentAndSymbols={data.government} />
        <Map latlng={data.latlng} name={data.general.name} />
      </div>
    </div>

    
  )
}

export default Dashboard