import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import BookForm from './BookForm'
import BookList from './Booklist'
import Navbar from './Navbar'

const UI = () => {
    const { isLightTheme, themes } = useContext( ThemeContext )
    const styles = isLightTheme? themes.light: themes.dark
    const themeStyle = { 
        background: styles.bg, 
        boxShadow: `0 0 1px  ${styles.text}`, 
        borderRight: `1px solid ${styles.bg}` 
    }
    
    return (
        <div className={ 'container'} style={{background: styles.body}} >
            <div className={'App'} style={ themeStyle } >
                <Navbar />
                <BookList />
                <BookForm />
            </div>
        </div>
        
    )
}

export default UI
