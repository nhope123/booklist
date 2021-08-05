import React, { useState, useContext } from 'react'
import { BookContext } from '../context/BookContext'
import { ThemeContext } from '../context/ThemeContext'

const BookForm = () => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const { dispatch } = useContext(BookContext)
    const { isLightTheme, themes } = useContext( ThemeContext )
    const styles = isLightTheme? themes.light: themes.dark
    const textInputStyle = { background: styles.input, color: styles.inputText}
    const submitInputStyle = { background: styles.submit, color: styles.inputText}

    const handleSubmit = (e) =>{
        e.preventDefault()
       
        dispatch( {type: 'ADD_BOOK',book:{ title, author } } )
        setTitle('')
        setAuthor('')
              
    }
    return (
        <form onSubmit={ (e)=> handleSubmit(e)}>
            <input type={'text'} value={title} placeholder={'Book title'} style={ textInputStyle }
                   onChange={ e => setTitle(e.target.value)} tabIndex={'0'} required/>
            <input type={'text'} value={author} placeholder={'Author'} style={ textInputStyle }
            onChange={ e => setAuthor(e.target.value)} tabIndex={'0'} required/>
            <input type={'submit'} tabIndex={'0'} value={'Add book'} style={ submitInputStyle } />
        </form >
    )
}

export default BookForm
