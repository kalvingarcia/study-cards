import React, {createContext, useContext, useState} from 'react';
import categoryList from '../../../public/words.json';

const StudyContext = createContext();

export function useStudy() {
    return useContext(StudyContext);
}

export default function StudyProvider({children}) {
    const allCategories = categoryList.map(({category}) => category);
    const [studyCategories, setStudyCategories] = useState([]);

    const toggleStudyCategory = (category) => {
        if(studyCategories.includes(category))
            setStudyCategories(studyCategories.filter(studyCategory => studyCategory != category));
        else
            setStudyCategories([...studyCategories, category]);
    };

    return (
        <StudyContext.Provider value={{studyCategories, toggleStudyCategory, allCategories}}>
            {children}
        </StudyContext.Provider>
    )
}
