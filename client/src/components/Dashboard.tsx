import Skeleton from "./Skeleton"

function Dashboard({display, setDisplay}) {

    
  return (
    <div className={`w-full h-96  ${display ? 'flex' :'hidden' }`}>
        <Skeleton />
    </div>

    
  )
}

export default Dashboard