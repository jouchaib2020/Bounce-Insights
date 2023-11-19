import AccordionItem from "./AccordionItem"

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


function Accordion() {
  return (
    
<div id="accordion-color" data-accordion="collapse" data-active-classes="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white">
  
  <AccordionItem type={0} title="General infomations " data={generalInfo_mock} />
  <AccordionItem type={1} title="demographics informations" data={demograInfo_mock} />
  <AccordionItem type={2} title="Government And Symbols" data={governmentAndSymbols_mock} />
  
</div>

  )
}

export default Accordion 