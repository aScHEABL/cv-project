import { createContext, useContext, useReducer } from "react";

const cvContext = createContext();
const dispatcher = createContext();

const useCvContext = () => {
    return useContext(cvContext);
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'firstName':
            return {
                ...state,
                firstName: action.payload.firstName
            }
        case 'lastName':
            return {
                ...state,
                lastName: action.payload.lastName
            }
        case 'address':
            return {
                ...state,
                address: action.payload.address
            }
        case 'website':
            return {
                ...state,
                website: action.payload.website
            }
        case 'email':
            return {
                ...state,
                email: action.payload.email
            }
        case 'phone':
            return {
                ...state,
                phone: action.payload.phone
            }
        case 'intro':
            return {
                ...state,
                intro: action.payload.intro
            }
        case 'ADD_JOB':
            return {
                ...state,
                jobs: [
                    ...state.jobs,
                    {
                        id: action.id,
                        title: action.title,
                        employer: action.employer,
                        startDate: action.startDate,
                        endDate: action.endDate,
                        country: action.country
                    }
                ]
            }
            case 'CHANGE_JOB':
                return {
                    ...state,
                    jobs: state.jobs.map((job) => 
                             job.id === action.id ? { ...job, [action.key]: action.value } : job)
                }
        case 'ADD_SKILL':
            return {
                ...state,
                skills: [
                    ...state.skills,
                    action.payload.skills
                ]
            }
        default:
            return state;
    }
}

const CvContextProvider = ( { children }) => {
    const valueAndDispatcher = useReducer(reducer, {
        firstName: '',
        lastName: '',
        address: '',
        website: '',
        email: '',
        phone: '',
        intro: '',
        jobs: [],
        skills: [],
    })
    return (
        <cvContext.Provider value={valueAndDispatcher}>
            {children}
        </cvContext.Provider>
    )
}

export {useCvContext, CvContextProvider};