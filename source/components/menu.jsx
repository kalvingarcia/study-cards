import React, { useState } from 'react';
import {tss} from './common/theme';
import {useStudy} from './helper/study';
import Chip from './common/chip';
import Button from './common/button';

const useStyles = tss.create(({theme, open}) => ({
    menu: {
        flex: "0 0 auto",
        width: "500px",
        height: "100%",
        padding: "40px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        backgroundColor: theme.neutral.container.hex(),
        overflow: "hidden",

        "@media (max-width: 1100px)": {
            position: "absolute",
            inset: 0,
            height: open? "500px" : 0,
            width: "100%",
            transition: "height 300ms ease-in-out"
        }
    },
    header: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",

        "@media (max-width: 1100px)": {
            position: "relative",
            top: "-20px",
        }
    },
    title: {
        fontSize: "1.5rem"
    },
    button: {
        minHeight: "48px",
        maxHeight: "48px",
        minWidth: "48px",
        maxWidth: "48px",

        "@media (min-width: 1100px)": {
            display: "none"
        }
    },
    list: {
        width: "100%",
        heigth: "100%",
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        overflowY: "auto",
        scrollbarGutter: "stable",
    }
}));

export default function Menu({}) {
    const {studyCategories, toggleStudyCategory, allCategories} = useStudy();

    const [open, setOpen] = useState(false);
    const {classes} = useStyles({open});
    return (
        <div className={classes.menu}>
            <div className={classes.header}>
                <span className={classes.title}>Categories to Study</span>
                <Button className={classes.button} appearance={open? "filled" : "outlined"} onClick={() => setOpen(!open)}>
                    <i className='material-symbols-rounded'>{open? "close" : "menu"}</i>
                </Button>
            </div>
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