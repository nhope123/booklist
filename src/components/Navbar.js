import React, {useContext} from 'react'
import { BookContext } from '../context/BookContext'
import { ThemeContext } from '../context/ThemeContext'
import moon from '../resources/moon.png'
import sun from '../resources/sun.png'

export default function Navbar() {
    const { books } = useContext( BookContext )
    const { isLightTheme,toogleLightTheme, themes } = useContext( ThemeContext )
    const styles = isLightTheme? themes.light: themes.dark
    const image = !isLightTheme? {src: sun, alt: 'Sun with sunrays'} : { src: moon, alt: 'Moon with moon craters'}
    return (
        <div className={'navbar'} style={{ background: styles.ui, color: styles.text}}>
            <h1 >Ninja Reading</h1>
            <p >{`Currently you have ${books.length} books to get throught ...`} </p>
            <img src={ image.src } alt={ image.alt }  tabIndex={'0'} title={'Change color theme'}
                 onClick={ toogleLightTheme} />
        </div>
    )
}
