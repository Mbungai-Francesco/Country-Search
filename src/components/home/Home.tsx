import { classer } from "../../utility/classer"
import Filterlist from "../filterList/Filterlist"
// className={classer('')}

function Home (){
    const continents = ['Africa','America','Asia','Europe','Oceania']
    return (
        <div className={classer('bg-myBlue-very_dark1 h-screen px-16 py-10')}>
            <div className={classer('flex justify-between')}>
            <label htmlFor="" className={classer('flex py-2 px-4 items-start bg-myBlue-dark')}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={classer("feather feather-search text-white")}><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                <input type="search" name="" id="" className={classer('ml-2 bg-transparent w-80 outline-none text-gray-400 text-sm')}/>
            </label>
            <div className={classer('relative text-white')}>
                <div className={classer('flex py-2 px-4 items-start bg-myBlue-dark items-center')} >
                    <p className={classer('text-xs mr-8')}>Filter by Region</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={classer("feather feather-chevron-down")}><polyline points="6 9 12 15 18 9"></polyline></svg>
                </div>
                <div className={classer('absolute w-full py-2 px-4 bg-myBlue-dark mt-2')}>
                    {continents.map((continent) => {
                        return <Filterlist continent={continent}></Filterlist>
                    })}
                </div>
            </div>
        </div>
        </div>
    )
}

export default Home