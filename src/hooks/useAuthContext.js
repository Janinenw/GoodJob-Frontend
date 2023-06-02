import {AuthContext} from '../context/AuthContext'
import {useContext} from 'react'

export const useAuthContext = () => {
    const context = useContext(AuthContext)

    if(!context) {
        throw Error('useAuthContext has been taken out of context lol.  Needs to be inside AuthContextProvider')
    }
return context
}
