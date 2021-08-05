import React from 'react'
import UI from './components/UI'
import BookContextProvider from './context/BookContext'
import ThemeContextProvider from './context/ThemeContext'

function App() {
  return (
    <div >
      <BookContextProvider >
        <ThemeContextProvider >
          <UI />          
        </ThemeContextProvider>
      </BookContextProvider>
    </div>
  );
}

export default App;
