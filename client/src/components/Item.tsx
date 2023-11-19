
function Item() {
  return (
    <div>
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5">
        <span className="flex items-center text-sm font-medium text-gray-900 dark:text-white me-3"><span className="flex w-2.5 h-2.5 bg-blue-600 rounded-full me-1.5 flex-shrink-0"></span>Visitors</span>
        <span className="flex items-center text-sm font-medium text-gray-900 dark:text-white me-3"><span className="flex w-2.5 h-2.5 bg-purple-500 rounded-full me-1.5 flex-shrink-0"></span>Sessions</span>
        <span className="flex items-center text-sm font-medium text-gray-900 dark:text-white me-3"><span className="flex w-2.5 h-2.5 bg-indigo-500 rounded-full me-1.5 flex-shrink-0"></span>Customers</span>
        <span className="flex items-center text-sm font-medium text-gray-900 dark:text-white me-3"><span className="flex w-2.5 h-2.5 bg-teal-500 rounded-full me-1.5 flex-shrink-0"></span>Revenue</span>
        </div>
        <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
    </div>
  )
}

export default Item