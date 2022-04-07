import Game from './component/Game'

function App() {
  return (
    <div className='App'>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossOrigin="anonymous"
      />
      <header className='App-header container'>
        Rock Paper Scissors
      </header>
      <Game />
    </div>
  )
}

export default App
