import React from 'react';
import {tss} from './common/theme';
import {useStudy} from './helper/study';
import Chip from './common/chip';

const useStyles = tss.create(({theme}) => ({
    menu: {
        flex: "0 0 auto",
        width: "500px",
        height: "100%",
        padding: "40px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        overflowY: "auto",
        scrollbarGutter: "stable",
        backgroundColor: theme.neutral.container.hex(),

        "@media (max-width: 1100px)": {
            height: "400px",
            width: "100%"
        }
    },
    title: {
        fontSize: "1.5rem"
    },
    list: {
        width: "100%",
        heigth: "100%",
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
    }
}));

export default function Menu({}) {
    const {studyCategories, toggleStudyCategory, allCategories} = useStudy();
    const {classes} = useStyles({});
    return (
        <div className={classes.menu}>
            <span className={classes.title}>Categories to Study</span>
            <div className={classes.list}>
                {allCategories.filter(category => category !== "").map((category, index) => (
                    <Chip
                        key={index}
                        label={category}
                        active={studyCategories.includes(category)}
                        onToggle={() => toggleStudyCategory(category)}
                    />
                ))}
            </div>
        </div>
    );
}