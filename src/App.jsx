import Header from './components/Header.jsx'
import './index.css'
import './App.css'
import Slider from './components/Slider.jsx'
import ProductionCards from './components/ProductionCards.jsx'
import GenreMovieList from './components/GenreMovieList.jsx'

function App() {
  // const  [count, setCount] = useState(0);
  return (
    <div>
      <Header/>
      <Slider/>
      <ProductionCards/>
      <GenreMovieList/>

    </div>
  )
}

export default App
