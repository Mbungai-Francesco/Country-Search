import { Link } from "react-router-dom"
import { classer } from "./utility/classer"
export function NotFoundPage() {
    return (
        <>
            <div>
                <Link to='/'>
                    <label htmlFor="" className={classer('text-black dark:text-white bg-white dark:bg-myBlue-dark py-1 px-5 flex w-fit text-xs items-center cursor-pointer mb-8')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-left opacity-50"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                        <input className={classer('ml-2 opacity-50')} type="button" value="Back" />
                    </label>
                </Link>
            </div>
            <div>
                <h1>404 page not found</h1>
            </div>
        </>
    )
}