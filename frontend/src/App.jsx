import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './pages/Login'
import Protected from './Protected'

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/app" element={
          <Protected>
            <h1>Sistema</h1>
          </Protected>
        }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
