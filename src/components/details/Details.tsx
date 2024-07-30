import { Link, useParams } from "react-router-dom"
import { IAllDataItem } from "../../types/IAllDataItem"
import { countries } from "../../data/allData"
import { classer } from "../../utility/classer"

function Details() {
    const { countryId } = useParams<{ countryId: string }>()
    const country: IAllDataItem | undefined = countries.find(country => (String(country.latlng[0]) + String(country.latlng[1])) === countryId?.split(':')[1] ? country : undefined)
    if (!country) return <div>Country not found {countryId?.split(':')[1]}</div>
    else {
        return (
            <>
                <div>
                    <Link to='/'>
                        <label htmlFor="" className={classer('text-black dark:text-white bg-white dark:bg-myBlue-dark py-1 px-5 flex w-fit text-xs items-center cursor-pointer')}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-left opacity-50"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                            <input className={classer('ml-2 opacity-50')} type="button" value="Back" />
                        </label>
                    </Link>
                </div>
                <div className={classer('text-white flex mt-8 justify-between')}>
                    <div className={classer('w-2/5')}>
                        <img className={classer('w-full')} src={country.flags.png} alt={country.name.common} />
                    </div>
                    <div className={classer('w-1/2 text-black dark:text-white')}>
                        <h1 className={classer('font-bold text-lg mb-4')}>{country.name.common}</h1>
                        <div className={classer('text-xs flex justify-between')}>
                            <div>
                                <p className={classer('mb-2')}><span className={classer('font-semibold')}>Native Name:</span>  <span className={classer('opacity-50')}>{Object.values(country.name.nativeName)[0].common}</span></p>
                                <p className={classer('mb-2')}><span className={classer('font-semibold')}>Population:</span>  <span className={classer('opacity-50')}>{country.population}</span></p>
                                <p className={classer('mb-2')}><span className={classer('font-semibold')}>Region:</span> <span className={classer('opacity-50')}>{country.region}</span></p>
                                <p className={classer('mb-2')}><span className={classer('font-semibold')}>Sub Region:</span> <span className={classer('opacity-50')}>{country.subregion}</span></p>
                                <p className={classer('mb-2')}><span className={classer('font-semibold')}>Capital:</span> <span className={classer('opacity-50')}>{country.capital[0]}</span></p>
                            </div>
                            <div>
                                <p className={classer('mb-2')}><span className={classer('font-semibold')}>Currencies:</span> <span className={classer('opacity-50')}>{Object.values(country.currencies)[0].name}</span></p>
                                <p className={classer('mb-2')}><span className={classer('font-semibold')}>Languages: </span>
                                    <span className={classer('opacity-50')}>{Object.values(country.languages).join(', ')}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

}

export default Details