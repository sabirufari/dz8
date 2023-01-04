import { Route, Routes } from 'react-router-dom'
import './App.css'
import Dynamic from './components/dinamyc/Dynamic'
import PostList from './components/postList/PostList'

function App() {
 

  return (
    <div className="App">
      <Routes>
        <Route index element={<PostList/>}/>
        <Route path=':id' element={<Dynamic/>}/>
      </Routes>     
    </div>
  )
}

export default App
