import React, {useContext} from 'react'
import { BookContext } from '../context/BookContext'
import BookDetail from './BookDetail'

const BookList = () => {
    const {books} = useContext(BookContext)
    return books.length? (
        <div className={ 'book-list'} >
            { books.map(book => {
                return (<BookDetail book={ book } key={ book.id } />)
            }) }
        </div>
    ): (<div className={'empty'}>{'No books to read'}</div> )
}

export default BookList
