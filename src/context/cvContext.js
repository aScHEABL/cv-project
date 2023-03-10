import { createContext, useContext, useReducer } from "react";

const cvContext = createContext();

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
                    action.payload,
                ]
            }
        case 'ADD_SKILL':
            return {
                ...state,
                skills: [
                    ...state.skills,
                    action.payload,
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