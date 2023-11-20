import AccordionItem from "./AccordionItem"




// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Accordion({generalInfo, demograInfo, governmentAndSymbols} : {generalInfo: any, demograInfo: any, governmentAndSymbols: any}) {
  return (
    
<div className="w-5/12">
  
  <AccordionItem type={0} title="General infomations " data={generalInfo} />
  <AccordionItem type={1} title="demographics informations" data={demograInfo} />
  <AccordionItem type={2} title="Government And Symbols" data={governmentAndSymbols} />
  
</div>

  )
}

export default Accordion 