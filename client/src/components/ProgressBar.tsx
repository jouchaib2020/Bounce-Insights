import { HIGHEST_AREA, HIGHEST_GINI, HIGHEST_POPULATION } from "../utils/constants";

function ProgressBar({title, value}: {title: string, value: number}) {
    const width = title === "area" ? value * 100 / HIGHEST_AREA : 
    title === "population" ? value * 100 / HIGHEST_POPULATION : value !== 0 ? value * 100 / HIGHEST_GINI : 50;
  return (
    <dl>
        <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</dt>
        <dd className="flex items-center mb-3">
            <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 me-2">
                <div className="bg-blue-600 h-2.5 rounded dark:bg-yellow-500" style={{width: width+10}}></div>
            </div>
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{value}</span>
        </dd>
    </dl>
  )
}

export default ProgressBar  