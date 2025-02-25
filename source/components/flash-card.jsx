import React, {useState} from 'react';
import {tss} from './common/theme';

const useStyles = tss.create(({theme, flip}) => ({
    flashCard: {
        width: "400px",
        height: "250px",
        perspective: "1000px",
    },
    container: {
        position: "relative",
        width: "100%",
        height: "100%",
        transition: "transform 300ms ease-out",
        transformStyle: "preserve-3d",
        transform: flip? "rotateY(180deg)" : "none",
        borderRadius: "20px",
        boxShadow: `0px 5px 10px 0px ${theme.neutral.shadow.hex()}`
    },
    side: {
        position: "absolute",
        width: "100%",
        height: "100%",
        padding: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        WebkitBackfaceVisibility: "hidden", /* Safari */
        backfaceVisibility: "hidden",
        borderRadius: "20px",
        backgroundColor: theme.neutral.container.hex()
    },
    back: {
        backgroundColor: theme.neutral.containerHigh.hex(),
        transform: "rotateY(180deg)"
    },
    category: {
        position: "absolute",
        top: "15px",
        right: "15px",
        padding: "5px 10px",
        fontSize: "0.75rem",
        backgroundColor: theme.tertiary.container.hex(),
        color: theme.tertiary.onContainer.hex(),
        border: `1pt solid ${theme.tertiary.onContainer.alpha(0.5).hexa()}`,
        borderRadius: "2000px"
    }
}));

export default function FlashCard({icon, word, partOfSpeech, definition, category, language}) {
    const [flip, setFlip] = useState(false);

    const {cx, classes} = useStyles({flip});
    return (
        <div className={classes.flashCard} onClick={() => setFlip(!flip)}>
            <div className={classes.container}>
                <div className={classes.side}>
                    <span className={classes.category}>{category}</span>
                    <span>{word}</span>
                </div>
                <div className={cx(classes.side, classes.back)}>
                    <div className={classes.dictionary}>
                        <span>{partOfSpeech[language]}</span>
                        <ol className={classes.definitionList}>
                            {definition[language].map((definition, index) => (
                                <li key={index}>{definition}</li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}