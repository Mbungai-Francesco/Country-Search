import { classer } from "../../utility/classer";

interface FilterlistProps{
    continent: string;
}
// className={classer('')}

function Filterlist({continent}: FilterlistProps){
    return (
        <p className={classer('text-xs mb-2')}>{continent}</p>
    )
}

export default Filterlist;