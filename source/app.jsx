import React from 'react';
import {createRoot} from 'react-dom/client';
import {HashRouter, Route, Routes} from 'react-router';
import {GlobalStyles} from 'tss-react';
import ThemeProvider from './components/common/theme';
import Layout from './components/layout';
import Test from './content/test';
import Home from './content/home';
import AtkinsonNormal from '../public/fonts/AtkinsonNormal.woff2';
import AtkinsonItalic from '../public/fonts/AtkinsonItalic.woff2';

function App() {
    return (
        <ThemeProvider>
            <GlobalStyles styles={{
                "@font": {
                    fontFamily: "AtkinsonNOormal",
                    src: `url(${AtkinsonNormal})`,
                    fontStyle: "normal",
                },
                "@font": {
                    fontFamily: "AtkinsonItalic",
                    src: `url(${AtkinsonItalic})`,
                    fontStyle: "italic",
                },
                "html, body": {
                    fontFamily: "AtkinsonNormal"
                }
            }} />
            <HashRouter>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<Test />} />
                    </Route>
                </Routes>
            </HashRouter>
        </ThemeProvider>
    );
}

createRoot(document.getElementById("root")).render(<App />);