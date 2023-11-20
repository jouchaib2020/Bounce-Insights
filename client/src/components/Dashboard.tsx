import Accordion from "./Accordion";
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


function Dashboard({display, setDisplay}) {
    
  return (
    <div className={` min-w-full h-96 ${display ? 'flex' :'hidden' } flex-row gap-5 justify-center`}>
        <Accordion generalInfo={generalInfo_mock} demograInfo={demograInfo_mock} governmentAndSymbols={governmentAndSymbols_mock} />
        <Map latlng={latlng} name={generalInfo_mock.name} />
    </div>

    
  )
}

export default Dashboard