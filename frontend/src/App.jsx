import {Routes, Route} from 'react-router'
import HomePage from "./pages/HomePage"
import CreatePage from "./pages/CreatePage"
import EditPage from "./pages/EditPage"

function App() {

  return (
    <div className='min-h-screen bg-blue-200 text-gray-900'>
      <Routes>
        <Route path = "/" element = {<HomePage/>} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/edit/:id" element={<EditPage />} />

      </Routes>
    </div>
  )
}

export default App
