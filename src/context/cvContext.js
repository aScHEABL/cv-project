import { createContext, useContext, useReducer } from "react";

const cvContext = createContext();
const dispatcher = createContext();

const useCvContext = () => {
    return useContext(cvContext);
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_PERSONAL_INFO':
            return {
                ...state,
                personalInfo: {
                        ...state.personalInfo,
                        [action.key]: action.value,
                    }
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
                        location: action.location
                    }
                ]
            }
        case 'UPDATE_JOB':
            return {
                ...state,
                jobs: state.jobs.map((job) => 
                            job.id === action.id ? { ...job, [action.key]: action.value } : job)
            }
        case 'UPDATE_EDUCATION':
            return {
                ...state,
                education: {
                    ...state.education,
                    [action.key]: action.value,
                }
            }
        case 'ADD_SKILL':
            return {
                ...state,
                skills: [
                    ...state.skills,
                    {
                        id: action.id,
                        skillName: action.skillName,
                    }
                ]
            }
        case 'UPDATE_SKILL':
            return {
                ...state,
                skills: state.skills.map((skill) => 
                skill.id === action.id ? {...skill, [action.key]: action.value } : skill)
            }
        case 'DELETE_SKILL':
            return {
                ...state,
                skills: state.skills.filter((skill) => skill.id !== action.id)
            }
        default:
            return state;
    }
}

const CvContextProvider = ( { children }) => {
    const valueAndDispatcher = useReducer(reducer, {
        personalInfo: {
            firstName: '',
            lastName: '',
            address: '',
            website: '',
            email: '',
            phone: '',
            intro: '',
        },
        jobs: [],
        education: {
            school: '',
            degree: '',
            startDate: '',
            endDate: '',
            city: '',
        },
        skills: [],
    })
    return (
        <cvContext.Provider value={valueAndDispatcher}>
            {children}
        </cvContext.Provider>
    )
}

export {useCvContext, CvContextProvider};