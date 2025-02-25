import React, {useEffect, useState} from 'react';
import {tss} from '../components/common/theme';
import {useStudy} from '../components/helper/study';
import Button from '../components/common/button';
import FlashCard from '../components/flash-card';
import categoryList from '../../public/words.json';

const useStyles = tss.create(({theme}) => ({
    study: {
        flex: "1 1 auto",
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: '40px'
    },
    stack: {
        width: "100%",
        display: "flex",
        justifyContent: "center"
    },
    buttons: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        gap: "10px"
    }
}));

export default function Study({}) {
    const {studyCategories} = useStudy();
    const [words, setWords] = useState([]);
    useEffect(() => {
        const generatedWords = [];
        for(const {category, words} of categoryList)
            if(studyCategories.includes(category))
                for(const word of words)
                    generatedWords.push({...word, category});
        setWords(generatedWords);
    }, [studyCategories]);

    const [current, setCurrent] = useState(0);

    const {classes} = useStyles({});
    return (
        <div className={classes.study}>
            <div className={classes.stack}>
                {words.map((word, index) => (
                    <FlashCard key={index} {...word} language="english" />
                ))[current]}
            </div>
            <div className={classes.buttons}>
                <Button appearance="tonal" onClick={() => setCurrent(current - 1 < 0? 0 : current - 1)}>Previous</Button>
                <Button onClick={() => setCurrent(current + 1 >= words.length? words.length - 1 : current + 1)}>Next</Button>
            </div>
        </div>
    );
}