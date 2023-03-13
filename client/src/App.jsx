import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import { Home } from './pages/Home'
import { Auth } from './pages/Auth'
import { NewRecipe } from './pages/NewRecipe'
import { SavedRecipes } from './pages/SavedRecipies'

import { Navbar } from './components/navbar'

import './App.css'

const App = () => {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/auth" element={<Auth/>}/>
          <Route path="/new-recipe" element={<NewRecipe/>}/>
          <Route path="/saved-recipes" element={<SavedRecipes/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
