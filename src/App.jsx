import styles from './styles'
import { Navbar, Login, Shop } from './components'
import { useEffect } from 'react'

function App() {
  return (
    <div className="bg-primary w-full h-screen overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          <div id="content">
            <Login />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
