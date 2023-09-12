import './App.css'
import NavBar from './Components/NavBar'
import ItemListContainer from './Components/ItemListContainer'
import ItemDetailConatiner from './Components/ItemDetailConatiner'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {



  return (
    <div className='App'>

      <BrowserRouter>
        <NavBar />


        <Routes>

        <Route  exact path='/' element={<ItemListContainer /> } />
        <Route  exact path='/category/:id' element={<ItemListContainer />} />  
        <Route  exact path='/itemDetail/:id' element={<ItemDetailConatiner />} /> 

        </Routes>



      </BrowserRouter>
    </div>  


  )}

export default App      