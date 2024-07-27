import { useParams } from "react-router-dom"
import { IAllDataItem } from "../../types/IAllDataItem"
import { countries } from "../../data/allData"
import { classer } from "../../utility/classer"

function Details() {
    // const { countryId } = useParams<{ countryId: string }>() 
    // const country: IAllDataItem | undefined = countries.find(country => (country.idd.root + country.idd.suffixes) === countryId ? country : undefined)
    // if (!country) return <div>Country not found</div>
    // else {
    //     return (
    //         <div>
    //             <h1>{country.capital}</h1>
    //         </div>
    //     )
    // }
    const { id } = useParams<{ id: string }>()
    if (id === undefined) return <div className={classer('text-white')}>Country not found</div>
    else{
        return(
            <div className={classer('text-white')}>
                <h1>Details {id} moon</h1>
            </div>
        )
    }
}

export default Details