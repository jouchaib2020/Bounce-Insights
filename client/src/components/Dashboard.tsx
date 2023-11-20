import Accordion from "./Accordion";
import Insights from "./Insights";
import Map from "./Map";

const generalInfo_mock = {
  "name": "Burkina Faso",
  "tld": [
    ".bf"],
  "cca2": "BF",
  "ccn3": "854",
  "cca3": "BFA",
  "cioc": "BUR",
  "independent": true,
  "status": "officially-assigned",
  "unMember": true
}

const demograInfo_mock = {
  population: 20903278,
  gini: {
      "2014": 35.3
  }
}

const governmentAndSymbols_mock = {
  "fifa": "BFA",
  "flag": "🇧🇫",
  "capitalInfo": "Ouagadougou",
  "startOfWeek": "monday",
  "timezones": "UTC"
}

const latlng = [-2, 13];

const numericData = {
  "area": 272967,
  "gini": 39.8,
  "population": 20903278
}
/*

*/


function Dashboard({display} : {display: boolean}) {
    
  return (
    <div className={` min-w-full h-full ${display ? 'flex' :'hidden' } flex-col`}>
      <Insights data={numericData} />
      <div className="flex flex-row gap-6 justify-center mt-6">
        <Accordion generalInfo={generalInfo_mock} demograInfo={demograInfo_mock} governmentAndSymbols={governmentAndSymbols_mock} />
        <Map latlng={latlng} name={generalInfo_mock.name} />
      </div>
    </div>

    
  )
}

export default Dashboard