import { Routes, Route } from 'react-router-dom'
import Main from './container/Main'
import Auth from './components/ui/Auth/Auth'
import Reg from './components/ui/Auth/Reg'

const App = () => {
  return (
    <Routes>
      <Route path="/*" element={<Main />} />
      <Route path="/auth/register" element={<Reg />} />
      <Route path="/auth/authorizate" element={<Auth />} />
    </Routes>
  )
}

export default App
