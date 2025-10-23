import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './components/Header.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main>
        <a href="https://www.linkedin.com/in/alexanderkononov/" alt='linkedin_link'>
          <p> Linked In </p>
        </a>
        <a href="https://scholar.google.com/citations?user=41M_OCEAAAAJ&hl=en&oi=ao" alt='google_scholar_link'>
          <p> Google Scholer </p>
        </a>
      </main>
    </>
  )
}

export default App
