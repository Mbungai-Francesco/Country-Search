import Filterlist from "../filterList/Filterlist"
import Country from "../country/Country";
import { classer } from "../../utility/classer"
import { IContinent } from "../../types/IContinent";
import { countries } from "../../data/allData";
// className={classer('')}

function Home (){
    // console.log(countries);
    // for (const country of countries) {
    //     console.log(country.flag);
    // }
    
    function filterByContinent(continent: string) {}
    
    const continents: IContinent[] = [
        { id: 0, name: "All" },
        { id: 1, name: "Africa" },
        { id: 2, name: "Antarctica" },
        { id: 3, name: "Asia" },
        { id: 4, name: "Europe" },
        { id: 5, name: "North America" },
        { id: 6, name: "Oceania" },
        { id: 7, name: "South America" }
    ];
    return (
        <div className={classer('bg-myBlue-very_dark1 min-h-screen px-20 py-10')}> 
            <div className={classer('flex justify-between mb-8')}>
                <label htmlFor="" className={classer('flex py-2 px-4 items-start bg-myBlue-dark')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={classer("feather feather-search text-white")}><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    <input type="search" name="" placeholder="Search for a country..." id="" className={classer('ml-2 bg-transparent w-80 outline-none text-gray-400 text-xs')}/>
                </label>
                <div className={classer('relative text-white')}>
                    <div className={classer('flex py-2 px-4 items-start bg-myBlue-dark items-center')} >
                        <p className={classer('text-xs mr-8')}>Filter by Region</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={classer("feather feather-chevron-down")}><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </div>
                    <div className={classer('absolute w-full py-2 px-4 bg-myBlue-dark mt-2')}>
                        {continents.map((continent) => {
                            return <Filterlist
                            key={continent.id}
                            continent={continent.name}>
                            </Filterlist>
                        })}
                    </div>
                </div>
            </div>
            <div className={classer('grid gap-4 grid-cols-4')}>
                {
                    countries.map(country => {
                        return <Country {...country}></Country>
                    })
                }
            </div>
        </div> 
    ) 
}

export default Home