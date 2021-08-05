import React, { useContext } from 'react'
import { Github } from 'react-bootstrap-icons' 
import { ThemeContext } from '../context/ThemeContext'
import BookForm from './BookForm'
import BookList from './Booklist'
import Navbar from './Navbar'


const UI = () => {
    const { isLightTheme, themes } = useContext( ThemeContext )
    const styles = isLightTheme? themes.light: themes.dark
    const themeStyle = { 
        background: styles.bg, 
        /*boxShadow: `0 0 1px  ${styles.text}`, */
        borderRight: `1px solid ${styles.bg}` 
    }

    return (
        <div className={ 'container'} style={{background: styles.body}} >
            <div className={'App'} style={ themeStyle } >
                <Navbar />
                <BookList />
                <BookForm />
                <div className={ 'repo'}  >
                    <a href={'https://github.com/nhope123/booklist'} target={'_top'} tabIndex={'0'} title={ 'App Repo' } >
                        <Github  color={ styles.text } />
                    </a>                    
                </div>
            </div>
            <div className={'footer'}  >
                <a href={'https://github.com/nhope123'} tabIndex={'0'} target={'_top'} title={ 'Github Repo' } 
                   style={{ color: styles.text }} >
                    {'nhope'} &copy; {'2021'}
                </a>
            </div>
        </div>
        
    )
}

export default UI
