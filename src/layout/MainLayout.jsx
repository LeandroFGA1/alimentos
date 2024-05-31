import React from 'react'
import Header from '../components/Header'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        white: {
            main: '#ffffff',
        },
        bg: {
            main:"#ff9e3f",
        }
    },
});

function MainLayout({children}) {
    return (
        <>
            <ThemeProvider theme={theme}>
                <header className=' bg-green-500'><Header/></header>
                <main className='mt-20 md:mt-24'>{children}</main>
                <footer className='bg-bg1 h-5'></footer>
            </ThemeProvider>
            
        </>
    )
}

export default MainLayout