import { useState } from 'react'
import { Link } from 'react-router-dom'
import LogoCompany1 from '../../../assets/icons/LogoCompany1.svg'
import ArrowIcon from '../../../assets/icons/arrowIcon.svg'
import OptionsIcon from '../../../assets/icons/Options.svg'
import Icon from './Icon'
import Item from './Item'

const Company = ({ company }) => {
  const [infoCompany, setInfoCompany] = useState(false)

  return (
    <>
      <div className="flex justify-between items-center mb-2 hover:bg-elementsBlack px-4 py-1 rounded">
        <Link to={`/company/${company?.id}`}>
          <button
            className="flex items-center"
            onClick={() => setInfoCompany((prev) => !prev)}
          >
            <Icon img={ArrowIcon} pb="pb-1" rotate={infoCompany} />
            <Icon img={LogoCompany1} />

            <div className="text-gray1">
              {company?.companyInfo?.companyName}
            </div>
          </button>
        </Link>
        <div>
          <img
            className="min-w-4 min-h-4 cursor-pointer"
            src={OptionsIcon}
            alt="OptionsIcon"
          />
        </div>
      </div>

      {infoCompany && (
        <>
          {company.companyItems.map((item) => (
            <Item key={item?.idItem} dataTeam={company} dataItem={item} />
          ))}
        </>
      )}
    </>
  )
}

export default Company
