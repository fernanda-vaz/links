import './App.css'
import CardLink from './components/CardLink/CardLink'
import CardSquare from './components/CardSquare/CardSquare'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Social from './components/Social/Social'

function App() {
  return (
    <div className='container'>
      <div className='content'>
        <Header />
        <Social />
        <CardSquare />
        <CardLink />
        <Footer />
      </div>
    </div>
  )
}

export default App
