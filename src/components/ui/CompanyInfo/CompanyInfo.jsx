import { useParams } from 'react-router-dom'
import Links from './Links'
import { findData } from '../../../utils/findData'
import LogoCompany1 from '../../../assets/icons/LogoCompany1.svg'

const CompanyInfo = () => {
  const { companyId } = useParams()

  const companyData = findData(companyId)
  const companyInfo = companyData?.companyInfo
  const { companyMembers, companyLinks } = companyInfo

  return (
    <div className="font-anonymousPro flex items-center justify-center mt-32">
      <div className="w-654">
        <div className="flex items-center mb-4">
          <img className="w-9 h-9" src={LogoCompany1} alt="LogoCompany" />
          <div className="ml-4 text-3xl">{companyInfo?.companyName}</div>
        </div>

        <Links data={companyMembers} title="Участники" />
        <Links data={companyLinks} title="Ссылки" />
        <Links data={companyData?.companyItems} title="Пакеты" />
      </div>
    </div>
  )
}

export default CompanyInfo
