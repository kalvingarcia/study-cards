import React from 'react';
import {createRoot} from 'react-dom/client';
import {HashRouter, Route, Routes} from 'react-router';
import {GlobalStyles} from 'tss-react';
import ThemeProvider from './components/common/theme';
import Layout from './components/layout';
import Study from './content/study';

function App() {
    return (
        <ThemeProvider>
            <GlobalStyles styles={`
                @import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible+Next:ital,wght@0,200..800;1,200..800&display=swap');
                html, body {
                    font-family: "Atkinson Hyperlegible Next", serif;
                    font-style: normal;
                }
            `} />
            <HashRouter>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<Study />} />
                    </Route>
                </Routes>
            </HashRouter>
        </ThemeProvider>
    );
}

createRoot(document.getElementById("root")).render(<App />);