import { Routes, Route } from 'react-router-dom'
import CompanyInfo from '../components/ui/CompanyInfo/CompanyInfo'
import ItemInfo from '../components/ui/ItemInfo/ItemInfo'
import Home from '../components/ui/Home/Home'
import VersionInfo from '../components/ui/VersionInfo/VersionInfo'
import NotFound from '../components/ui/ErrPages/NotFound'
import Blocked from '../components/ui/ErrPages/Blocked'

const Info = () => {
  return (
    <div className="p-4">
      <div className="h-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company/:companyId" element={<CompanyInfo />} />
          <Route path="/company/:companyId/:itemId" element={<ItemInfo />} />
          <Route
            path="/company/:companyId/:itemId/:versionId"
            element={<VersionInfo />}
          />
          <Route path="/403" element={<Blocked />}/>
          <Route path="/*" element={<NotFound />}/>
        </Routes>
      </div>
    </div>
  )
}

export default Info
