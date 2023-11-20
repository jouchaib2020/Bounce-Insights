import AccordionItem from "./AccordionItem"




function Accordion({generalInfo, demograInfo, governmentAndSymbols}) {
  return (
    
<div className="w-5/12">
  
  <AccordionItem type={0} title="General infomations " data={generalInfo} />
  <AccordionItem type={1} title="demographics informations" data={demograInfo} />
  <AccordionItem type={2} title="Government And Symbols" data={governmentAndSymbols} />
  
</div>

  )
}

export default Accordion 