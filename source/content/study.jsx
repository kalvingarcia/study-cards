import React, {useEffect, useState} from 'react';
import {tss} from '../components/common/theme';
import {useStudy} from '../components/helper/study';
import Button from '../components/common/button';
import FlashCard from '../components/flash-card';
import categoryList from '../../public/words.json';

const useStyles = tss.create(({theme}) => ({
    study: {
        flex: "1 1 auto",
        padding: "40px",
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    },
    stack: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
}));

export default function Study({}) {
    const {studyCategories} = useStudy();
    const [words, setWords] = useState([]);
    const [current, setCurrent] = useState(0);
    useEffect(() => {
        setCurrent(0);
        const generatedWords = [];
        for(const {category, words} of categoryList)
            if(studyCategories.includes(category))
                for(const word of words)
                    generatedWords.push({...word, category});
        setWords(generatedWords);
    }, [studyCategories]);


    const {classes} = useStyles({});
    return (
        <div className={classes.study}>
            <Button appearance="tonal" onClick={() => setCurrent(current - 1 < 0? 0 : current - 1)}>
                <i className='material-symbols-rounded'>chevron_left</i>
            </Button>
            <div className={classes.stack}>
                {words.map((word, index) => (
                    <FlashCard key={index} {...word} language="english" />
                ))[current]}
            </div>
            <Button onClick={() => setCurrent(current + 1 >= words.length? words.length - 1 : current + 1)}>
                <i className='material-symbols-rounded'>chevron_right</i>
            </Button>
        </div>
    );
}