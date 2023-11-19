import Accordion from "./Accordion"
import Map from "./Map"

function Dashboard({display, setDisplay}) {

    
  return (
    <div className={`w-full h-96  ${display ? 'flex' :'hidden' }`}>
        <Accordion />
        <Map />
    </div>

    
  )
}

export default Dashboard