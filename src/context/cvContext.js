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
        case 'jobTitle_first':
            return {
                ...state,
                jobTitle_first: action.payload.jobTitle_first
            }
        case 'jobTitle_second':
            return {
                ...state,
                jobTitle_second: action.payload.jobTitle_second
            }
        case 'employer_first':
            return {
                ...state,
                employer_first: action.payload.employer_first
            }
        case 'employer_second':
            return {
                ...state,
                employer_second: action.payload.employer_second
            }
        case 'startDate_first':
            return {
                ...state,
                startDate_first: action.payload.startDate_first
            }
        case 'startDate_second':
            return {
                ...state,
                startDate_second: action.payload.startDate_second
            }
        case 'endDate_first':
            return {
                ...state,
                endDate_first: action.payload.endDate_first
            }
        case 'endDate_second':
            return {
                ...state,
                endDate_second: action.payload.endDate_second
            }
        case 'city_first':
            return {
                ...state,
                city_first: action.payload.city_first
            }
        case 'city_second':
            return {
                ...state,
                city_second: action.payload.city_second
            }
        case 'jobDesc_first':
            return {
                ...state,
                jobDesc_first: action.payload.jobDesc_first
            }
        case 'jobDesc_second':
            return {
                ...state,
                jobDesc_second: action.payload.jobDesc_second
            }
        case 'school':
            return {
                ...state,
                school: action.payload.school
            }
        case 'degree':
            return {
                ...state,
                degree: action.payload.degree
            }
        case 'eduStartDate':
            return {
                ...state,
                eduStartDate: action.payload.eduStartDate
            }
        case 'eduEndDate':
            return {
                ...state,
                eduEndDate: action.payload.eduEndDate
            }
        case 'eduCity':
            return {
                ...state,
                eduCity: action.payload.eduCity
            }
        case 'skill_1':
            return {
                ...state,
                skill_1: action.payload.skill_1
            }
        case 'skill_2':
            return {
                ...state,
                skill_2: action.payload.skill_2
            }
        case 'skill_3':
            return {
                ...state,
                skill_3: action.payload.skill_3
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
        jobTitle_first: '',
        employer_first: '',
        startDate_first: '',
        endDate_first: '',
        city_first: '',
        jobDesc_first: '',
        jobTitle_second: '',
        employer_second: '',
        startDate_second: '',
        endDate_second: '',
        city_second: '',
        jobDesc_second: '',
        school: '',
        degree: '',
        eduStartDate: '',
        eduEndDate: '',
        eduCity: '',
        skill_1: '',
        skill_2: '',
        skill_3: ''
    })
    return (
        <cvContext.Provider value={valueAndDispatcher}>
            {children}
        </cvContext.Provider>
    )
}

export {useCvContext, CvContextProvider};