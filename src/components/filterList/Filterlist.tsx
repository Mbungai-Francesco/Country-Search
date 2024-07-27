import { FilterlistProps } from "../../types/FilterlistProps";
import { classer } from "../../utility/classer";

// className={classer('')}

function Filterlist({continent}: FilterlistProps){
    return (
        <p className={classer('text-xs mb-2')}>{continent}</p>
    )
}

export default Filterlist;