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
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between"
    },
    stack: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
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
    const [current, setCurrent] = useState(0);
    useEffect(() => {
        setCurrent(0);
        const generatedWords = [];
        for(const {category, words} of categoryList)
            if(studyCategories.includes(category))
                for(const word of words)
                    generatedWords.push({...word, category});
        const randomizedWords = [];
        while(generatedWords.length > 0) {
            const randomIndex = Math.floor(Math.random() * generatedWords.length);
            randomizedWords.push(generatedWords[randomIndex]);
            generatedWords.splice(randomIndex, 1);
        }
        setWords(randomizedWords);
    }, [studyCategories]);


    const {classes} = useStyles({});
    return (
        <div className={classes.study}>
            <div className={classes.stack}>
                {words.map((word, index) => (
                    <FlashCard key={index} {...word} language="english" />
                ))[current]}
            </div>
            <div className={classes.buttons}>
                <Button appearance="tonal" onClick={() => setCurrent(current - 1 < 0? 0 : current - 1)}>
                    <i className='material-symbols-rounded'>chevron_left</i>
                </Button>
                <Button onClick={() => setCurrent(current + 1 >= words.length? words.length - 1 : current + 1)}>
                    <i className='material-symbols-rounded'>chevron_right</i>
                </Button>
            </div>
        </div>
    );
}