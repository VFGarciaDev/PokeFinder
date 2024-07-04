import './assets/styles/App.css'
import { PokemonProvider } from './contexts/pokemon-context'

import { Header } from './components/header/header'
import { Footer } from './components/footer/footer'

import { RouterProvider } from 'react-router-dom'
import { routes } from './pages/routes'

function App() {

  return (
    <PokemonProvider>
      <Header />

      <RouterProvider router={routes} />

      <Footer />
    </PokemonProvider>
  )
}

export default App