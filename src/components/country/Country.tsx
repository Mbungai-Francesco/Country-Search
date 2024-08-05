import { classer } from "../../utility/classer"
import {IAllDataItem} from "../../types/IAllDataItem"
// className={classer('')}

function Country(country : IAllDataItem){
  return (
    <div className={classer('mb-8 bg-white dark:bg-myBlue-dark pb-6 text-black dark:text-white')}>
      <img src={country.flags.svg} alt="" className={classer('w-full sm:w-96 h-32')}/> 
      <div className={classer('text-sm p-4')}>
        <h3 className={classer(' mb-4')}>{country.name.common}</h3>
        <p>Population: <span className={classer('font-thin')}>{country.population}</span></p>
        <p>Region: <span className={classer('font-thin')}>{country.region}</span></p>
        <p>Capital: <span className={classer('font-thin')}>{country.capital[0]}</span></p>
      </div>
    </div>
  );
}

export default Country