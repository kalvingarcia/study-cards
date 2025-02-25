import React from 'react';
import {createRoot} from 'react-dom/client';
import {HashRouter, HashRouter, Route, Routes} from 'react-router';
import ThemeProvider from './components/common/theme';
import Layout from './components/layout';
import Home from './content/home';
import Test from './content/test';

function App() {
    return (
        <ThemeProvider>
            <HashRouter>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/test" element={<Test />} />
                    </Route>
                </Routes>
            </HashRouter>
        </ThemeProvider>
    );
}

createRoot(document.getElementById("root")).render(<App />);