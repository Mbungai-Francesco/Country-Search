import { classer } from "../../utility/classer"
import {IAllDataItem} from "../../types/IAllDataItem"
// className={classer('')}

function Country(country : IAllDataItem){
  return (
    <div className={classer('mb-8 bg-myBlue-dark pb-6')}>
      <img src={country.flags.svg} alt="" className={classer('w-96 h-32')}/> 
      <div className={classer('text-sm p-4')}>
        <h3 className={classer('text-white mb-4')}>{country.name.common}</h3>
        <p className={classer('text-white')}>Population: <span className={classer('font-thin')}>{country.population}</span></p>
        <p className={classer('text-white')}>Region: <span className={classer('font-thin')}>{country.region}</span></p>
        <p className={classer('text-white')}>Capital: <span className={classer('font-thin')}>{country.capital[0]}</span></p>
      </div>
    </div>
  );
}

export default Country