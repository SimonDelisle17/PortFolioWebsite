import { useSelector } from 'react-redux'
import './App.css'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Blog from './components/Blog'
import Contact from './components/Contact'

function App() {
  const darkMode = useSelector((state) => state.theme.darkMode)

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Blog />
        <Contact />
      </main>
      <footer className="footer">
        <p>&copy; 2025 Simon Delisle. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
