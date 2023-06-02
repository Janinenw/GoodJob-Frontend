import {JobsContext} from '../context/JobsContext'
import {useContext} from 'react'

export const useJobsContext = () => {
    const context = useContext(JobsContext)

    if(!context) {
        throw Error('useJobsContext has been taken out of context lol.  Needs to be inside JobsContextProvider')
    }
return context
}
