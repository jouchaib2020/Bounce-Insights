import { CountryData } from "../utils/types"
import AccordionItem from "./AccordionItem"




// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Accordion({data} : {data : CountryData}) {
  return (
    
<div className="w-5/12">
  
  <AccordionItem type={0} title="General infomations " data={data.general} />
  <AccordionItem type={1} title="demographics informations" data={data.demographic} />
  <AccordionItem type={2} title="Government And Symbols" data={data.government} />
  
</div>

  )
}

export default Accordion 