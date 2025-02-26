import React from 'react';
import {Outlet} from 'react-router';
import {tss} from './common/theme';
import StudyProvider from './helper/study';
import Menu from './menu';

const useStyles = tss.create(({theme}) => ({
    layout: {
        width: "100%",
        height: "100%",
        display: "flex",
    }
}));

export default function Layout({}) {
    

    const {classes} = useStyles({});
    return (
        <StudyProvider>
            <div className={classes.layout}>
                <Outlet />
                <Menu />
            </div>
        </StudyProvider>
    );
}