import './App.css'
import Header from './Components/Header/Header'
import About from './Components/About/About'
import Dolor from './Components/Dolor/Dolor'
import Products from './Components/Products/Products'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <>
      <div className='w-full'>
        <div className='hero'>
          <Header />
          <div className='content-hero'>
            <h1>Lorem , Ipsum , dolor , sit , amet</h1>
            <p>Lorem Ipsum</p>
          </div>
        </div>
        <About />
        <Dolor />
        <Products />
        <Footer />
      </div>  
    </>
  )
}

export default App
