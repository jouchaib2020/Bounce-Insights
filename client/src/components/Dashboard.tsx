import { CountryData } from "../utils/types";
import Accordion from "./Accordion";
import Insights from "./Insights";
import Map from "./Map";
import Skeleton from "./Skeleton";



function Dashboard({loading, countryData} : {loading: boolean, countryData: CountryData }) {
    
  return (
    <div className={'min-w-full h-full flex flex-col transition-opacity ease-in-out delay-150'}>
      {!loading ?
        <>
        <Insights data={countryData}/>
        <div className="flex flex-row gap-6 justify-center mt-6">
          <Accordion data={countryData} />
          <Map latlng={countryData.latlng} name={countryData.general.name} />
        </div>
        </> :
      <Skeleton />
    }
      </div>
  )
}

export default Dashboard