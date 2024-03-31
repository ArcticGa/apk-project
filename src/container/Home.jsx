import Sidebar from '../components/ui/Sidebar/Sidebar'
import { Routes, Route } from 'react-router-dom'
import Info from './Info'

const Home = () => {
  return (
    <div className="flex bg-pageColor text-white md:flex-row flex-col h-screen transition-height duration-75 ease-out">
      <div className="h-screen flex-initial">
        <Sidebar />
      </div>

      <div className="pb-2 flex-1 h-screen overflow-y-scroll">
        <Routes>
          <Route path="/*" element={<Info />} />
        </Routes>
      </div>
    </div>
  )
}

export default Home
