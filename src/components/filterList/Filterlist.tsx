import { FilterlistProps } from "../../types/FilterlistProps";
import { classer } from "../../utility/classer";
// className={classer('')}

function Filterlist({continent,onChooseContinent}: FilterlistProps){
    return (
        <p 
        className={classer('text-xs mb-2 hover:text-sm cursor-pointer')}
        onClick={() => onChooseContinent(continent)}
        >
            {continent}
        </p>
    ) 
}

export default Filterlist;