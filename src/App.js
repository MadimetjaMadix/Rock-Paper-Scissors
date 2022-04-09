import Game from './component/Game'
import Header from './component/Header'
import Footer from './component/Footer'

function App () {
  return (
    <div className='App'>
      <link
        rel='stylesheet'
        href='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css'
        integrity='sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3'
        crossOrigin='anonymous'
      />
      <Header />
      <Game />
      <Footer />
    </div>
  )
}

export default App
