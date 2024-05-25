import React from 'react'
import Header from '../components/Header'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        white: {
            main: '#ffffff',
        },
    },
});

function MainLayout({children}) {
    return (
        <>
            <ThemeProvider theme={theme}>
                <header><Header/></header>
                <main className='mt-20 md:mt-24'>{children}</main>
                <footer>owo</footer>
            </ThemeProvider>
            
        </>
    )
}

export default MainLayout