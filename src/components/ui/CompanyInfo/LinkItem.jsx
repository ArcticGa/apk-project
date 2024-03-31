import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import OptionsIcon from '../../../assets/icons/Options.svg'
import { findData } from '../../../utils/findData'

const LinkItem = ({ obj, i }) => {
  const [hover, setHover] = useState(false)
  const { companyId } = useParams()
  const companyData = findData(companyId)

  return (
    <div
      className="flex cursor-pointer mb-2 leading-4"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      key={i}
    >
      {Object.prototype.hasOwnProperty.call(obj, 'companyMemberRole') && (
        <div className="flex items-center">
          <a className={`mr-2 text-blue font-bold ${hover ? 'underline' : ''}`}>
            {obj?.companyMemberName}
          </a>

          <div className="text-gray1 mr-4">{obj?.companyMemberRole}</div>
        </div>
      )}

      {obj?.nameLink && (
        <a className={`mr-2 text-blue font-bold ${hover ? 'underline' : ''}`}>
          {obj?.nameLink}
        </a>
      )}

      {obj?.itemName && (
        <Link
          className={`mr-2 text-blue font-bold ${hover ? 'underline' : ''}`}
          to={`/company/${companyData?.id}/${obj?.idItem}`}
        >
          {obj?.itemName}
        </Link>
      )}

      {hover && (
        <div>
          <img className="w-4 h-4" src={OptionsIcon} alt="OptionsIcon" />
        </div>
      )}
    </div>
  )
}

export default LinkItem
