import React from 'react';
import {tss} from '../components/common/theme';
import StudyProvider from '../components/helper/study';
import Menu from '../components/menu';
import Study from './study';

const useStyles = tss.create(({theme}) => ({
    home: {
        width: "100%",
        height: "100%",
        display: "flex",
    }
}));

export default function Home({}) {
    

    const {classes} = useStyles({});
    return (
        <StudyProvider>
            <div className={classes.home}>
                <Study />
                <Menu />
            </div>
        </StudyProvider>
    );
}