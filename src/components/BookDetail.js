import React, { useContext } from 'react'
import { BookContext } from '../context/BookContext'
import { ThemeContext } from '../context/ThemeContext'


const BookDetail = ({ book }) => {
    const { dispatch } = useContext(BookContext)
    const { isLightTheme, themes } = useContext( ThemeContext )
    const styles = isLightTheme? themes.light: themes.dark
    return (
        <li onClick={()=> dispatch({type: 'REMOVE_BOOK', id: book.id })} 
            style={{ background: styles.ui, color: styles.text }} title={ 'Click to delete' }   >
            <div className={ 'title' } >{book.title} </div>
            <div className={ 'author' } >{book.author} </div>
        </li>
    )
}

export default BookDetail
