import React from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router';
import ThemeProvider from './components/common/theme';
import Layout from './components/layout';
import Home from './content/home';

function App() {
    return (
        <ThemeProvider>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<Home />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

createRoot(document.getElementById("root")).render(<App />);