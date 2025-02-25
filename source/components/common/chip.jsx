import React from 'react';
import {tss} from './theme';

const useStyles = tss.create(({theme, active}) => ({
    chip: {
        userSelect: "none",
        position: "relative",
        width: "fit-contents",
        height: "fit-contents",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "10px 20px",
        backgroundColor: active? theme.primary.accent.hex() : theme.primary.container.hex(),
        color: active? theme.primary.onAccent.hex() : theme.primary.onContainer.hex(),
        borderRadius: "2000px",
        overflow: "hidden",
        clipPath: "inset(0 0 0 0 round 2000px)",

        "&::after": {
            content: "''",
            position: "absolute",
            width: "100%",
            height: "100%",
            inset: 0,
            backgroundColor: active? theme.primary.onAccent.hex() : theme.primary.onContainer.hex(),
            opacity: 0,
            transform: "opacity 300ms ease-in-out"
        },
        "&:hover::after": {
            opacity: 0.2
        }
    }
}));

export default function Chip({className, label, active, onToggle}) {
    // label = label.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

    const {cx, classes} = useStyles({active});
    return (
        <span className={cx(classes.chip, className)} onClick={onToggle}>{label}</span>
    )
}