import { createContext } from "react"
import { AuthContext } from "./AuthProvider"
import { Navigate} from 'react-router-dom'

const PublicRoute = ({ children }) => {
    const { isLoggedIn } = createContext(AuthContext)

    return !isLoggedIn ? (
        children
    ) : (
        < Naviate to = '/dashboard' />
    )
}

export default PublicRoute