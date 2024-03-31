import { Routes, Route } from 'react-router-dom'
import CompanyInfo from '../components/ui/CompanyInfo/CompanyInfo'
import ItemInfo from '../components/ui/ItemInfo/ItemInfo'

const Info = () => {
  return (
    <div className="p-4">
      <div className="h-full">
        <Routes>
          <Route path="/company/:companyId" element={<CompanyInfo />} />
          <Route path="/company/:companyId/:itemId" element={<ItemInfo />} />
        </Routes>
      </div>
    </div>
  )
}

export default Info
