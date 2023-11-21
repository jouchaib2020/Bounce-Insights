import { CountryData } from "../utils/types"
import Badge from "./Badge"
import ProgressBar from "./ProgressBar"

function Insights({data}: {data: CountryData}) {
  return (
    <div className="flex flex-col gap-2 items-center">
    <div className="w-2/5 flex items-center justify-evenly">
        <div className="flex items-center">
            <img 
            className=" w-10 h-10 bg-blue-100 text-blue-800 text-sm font-semibold inline-flex items-center rounded-lg dark:bg-blue-200 dark:text-blue-800" 
            src={data.general.flag} />
            <p className="ms-2 font-medium text-gray-900 dark:text-white">{data.general.name}</p>
        </div>
        {Object.entries(data.boolean).map(([key, value]) => <Badge key={key} isTrue={value} text={key} /> )}


    </div>
    <div className="gap-8 sm:grid sm:grid-cols-3 w-3/5">
        {Object.entries(data.numeric).map(([key, value]) => <ProgressBar key={key} title={key} value={value} />)}
    </div>
    </div>
  )
}

export default Insights