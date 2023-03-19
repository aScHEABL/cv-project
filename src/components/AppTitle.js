import React from "react";
import { useCvContext } from "../context/cvContext";

let jobID = 0;
let skillID = 0;
const AppTitle = () => {
    const [cvState, dispatch] = useCvContext();
    const handleClick = (action) => {
        switch (action) {
            case "AUTOFILL":
                console.log('Page is auto filled!');
                dispatch({ type: 'UPDATE_PERSONAL_INFO', key: 'firstName', value: 'NIKOLA' } );
                dispatch({ type: 'UPDATE_PERSONAL_INFO', key: 'lastName', value: 'TESLA' });
                dispatch({ type: 'UPDATE_PERSONAL_INFO', key: 'website', value: 'nikolatesla.com' });
                dispatch({ type: 'UPDATE_PERSONAL_INFO', key: 'email', value: 'nikolatesla@gmail.com' });
                dispatch({ type: 'UPDATE_PERSONAL_INFO', key: 'address', value: 'New York, US' });
                dispatch({ type: 'UPDATE_PERSONAL_INFO', key: 'phone', value: '555-555-5555' });
                dispatch({ type: 'UPDATE_PERSONAL_INFO', key: 'intro', value: 'Motivated and results-driven Senior Software \
                Engineer with 8+ years of experience in my field. I have continuously demonstrated experience in \
                improving software performance by implementing new ideas, updating, testing and coding.\
                  Experience in development tools which increase accuracy and performance of software\
                  , especially in React and with React Redux, are my specialization. In my free time, I go on\
                   a walk with the two of my dogs or spend time with friends. I also play chess and appreciate any competitive \
                   environment when pursuing sports.' });
                   dispatch({
                    type: 'ADD_JOB', 
                    id: jobID++,
                    title: '',
                    employer: '',
                    startDate: '',
                    endDate: '',
                    location: ''
                 })
                 dispatch({
                    type: 'ADD_JOB', 
                    id: jobID++,
                    title: '',
                    employer: '',
                    startDate: '',
                    endDate: '',
                    location: ''
                 })
                 dispatch({ type: 'UPDATE_JOB', id: 0, key: 'title', value: 'Network Engineer' });
                 dispatch({ type: 'UPDATE_JOB', id: 0, key: 'employer', value: 'Far Eastern Group' });
                 dispatch({ type: 'UPDATE_JOB', id: 0, key: 'startDate', value: '2022-10' });
                 dispatch({ type: 'UPDATE_JOB', id: 0, key: 'endDate', value: 'Present' });
                 dispatch({ type: 'UPDATE_JOB', id: 0, key: 'location', value: 'New Taipei, Taiwan' });
                 dispatch({ type: 'UPDATE_JOB', id: 0, key: 'desc', value: 'I provided technical leadership for complex projects. I used the latest technologies such as Cloud Service, Visual Studio 2019 and Azure DevOps. I gained experience with data technologies such as SQL Servers, NoSQL databases, full text search engines and caching. My daily work consisted mostly of maintaining full project life-cycle tasks including testing, debugging, technical analysis, design and coding.' });
                 dispatch({ type: 'UPDATE_JOB', id: 1, key: 'title', value: 'Lifeguard' });
                 dispatch({ type: 'UPDATE_JOB', id: 1, key: 'employer', value: '輝宇運動事業有限公司' });
                 dispatch({ type: 'UPDATE_JOB', id: 1, key: 'startDate', value: '2022-02' });
                 dispatch({ type: 'UPDATE_JOB', id: 1, key: 'endDate', value: '2022-10' });
                 dispatch({ type: 'UPDATE_JOB', id: 1, key: 'location', value: 'New Taipei, Taiwan' });
                 dispatch({ type: 'UPDATE_JOB', id: 1, key: 'desc', value: 'Experienced and certified lifeguard with a passion for water safety. Skilled in monitoring and maintaining safe swimming conditions, performing water rescues, and providing first aid. Able to maintain a high level of alertness, professionalism and focus while on duty.' });
                 
                 dispatch({ type: 'UPDATE_EDUCATION', key: 'school', value: 'University of Chicago' });
                 dispatch({ type: 'UPDATE_EDUCATION', key: 'degree', value: 'BSMIS' });
                 dispatch({ type: 'UPDATE_EDUCATION', key: 'startDate', value: '2022-09' });
                 dispatch({ type: 'UPDATE_EDUCATION', key: 'endDate', value: '2025-06' });
                 dispatch({ type: 'UPDATE_EDUCATION', key: 'city', value: 'New Taipei City' });

                 dispatch({ type: 'ADD_SKILL', id: skillID++, skillName: '' });
                 dispatch({ type: 'ADD_SKILL', id: skillID++, skillName: '' });
                 dispatch({ type: 'ADD_SKILL', id: skillID++, skillName: '' });
                 dispatch({ type: 'ADD_SKILL', id: skillID++, skillName: '' });
                 dispatch({ type: 'ADD_SKILL', id: skillID++, skillName: '' });
                 dispatch({ type: 'ADD_SKILL', id: skillID++, skillName: '' });

                 dispatch({ type: 'UPDATE_SKILL', id: 0, key: 'skillName', value: 'ReactJS' });
                 dispatch({ type: 'UPDATE_SKILL', id: 1, key: 'skillName', value: 'NodeJS' });
                 dispatch({ type: 'UPDATE_SKILL', id: 2, key: 'skillName', value: 'PostgreSQL' });
                 dispatch({ type: 'UPDATE_SKILL', id: 3, key: 'skillName', value: 'Tailwind CSS' });
                 dispatch({ type: 'UPDATE_SKILL', id: 4, key: 'skillName', value: 'ThreeJS' });
                 dispatch({ type: 'UPDATE_SKILL', id: 5, key: 'skillName', value: 'ExpressJS' });
                break;
            default:
                console.log('Nothing')
        }
    }
    
    return(
        <div className="py-4 px-8 flex items-center justify-between h-28 w-full bg-component-gray rounded-xl">
            <h1 className="text-white text-3xl h-fit ">CV Creator</h1>
            <div className="flex items-center justify-between gap-4">
                <button className="flex gap-2 bg-mint rounded-xl p-4 text-lg items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                Save
                </button>
                <button className="flex gap-2 bg-mint rounded-xl p-4 text-lg items-center"
                onClick={() => handleClick("AUTOFILL")}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>
                    Autofill
                </button>
            </div>
        </div>
    )
}
export default AppTitle;