import { useState } from 'react';
import { DemoraphicsInfo, GeneralInfo, GovernmentAndSymbols } from './Paragraphs';




function AccordionItem({type, title, data}: {type: number, title: string, data: any}) {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <>
        <h2>
            <button 
            type="button" 
            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3" 
            onClick={() => handleToggle(1)}
            >
            <span>{title}</span>
            <svg 
            className="w-3 h-3 rotate-180 shrink-0" 
            aria-hidden="true" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 10 6"
            >
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
            </svg>
            </button>
        </h2>
        <div 
        className={`${activeIndex ? 'hidden': ''}`} 
        >
            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
            
            {type === 0 && <GeneralInfo generalInfo={data} />}
            {type === 1 && <DemoraphicsInfo demograInfo={data} />}
            {type === 2 && <GovernmentAndSymbols governmentAndSymbols={data} />}
            </div>
        </div>
  </>
  )
}

export default AccordionItem