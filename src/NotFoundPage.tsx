import { Link } from "react-router-dom"
export function NotFoundPage() {
    return (
       <>
         <div>
            <h1>404 page not found</h1>
            <Link to={'/'}>Home</Link>
        </div>
       </>
    )
}