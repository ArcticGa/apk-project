import { useState } from 'react'
import { Link } from 'react-router-dom'
import IconCompanyItem from '../../../assets/icons/IconCompanyItem.svg'
import ArrowIcon from '../../../assets/icons/arrowIcon.svg'
import VersionIcon from '../../../assets/icons/VersionIcon.svg'

const Item = ({ dataTeam, dataItem }) => {
  const [openVersions, setOpenVersions] = useState(false)

  return (
    <>
      <Link
        onClick={() => setOpenVersions((prev) => !prev)}
        to={`/company/${dataTeam?.id}/${dataItem?.idItem}`}
        className="flex items-center rounded px-8 py-1 mb-2 text-gray1 hover:bg-elementsBlack transition-all"
        key={dataItem?.idItem}
      >
        <div className={openVersions ? 'pb-1 mr-1 rotate-180' : 'pb-1 mr-1'}>
          <img className="w-4 h-4" src={ArrowIcon} alt="ArrowIcon" />
        </div>
        <div className="mr-1">
          <img
            className="w-4 h-4"
            src={IconCompanyItem}
            alt="IconCompanyItem"
          />
        </div>

        {dataItem?.itemName}
      </Link>

      {openVersions && (
        <>
          {dataItem?.itemCommits.map((commit) => (
            <Link
              to={`/company/${dataTeam?.id}/${dataItem?.idItem}/${commit?.versionCommit}`}
              className="flex items-center pl-12 mb-2 py-1 rounded text-gray1 cursor-pointer hover:bg-elementsBlack"
              key={commit?.idCommit}
            >
              <img
                className="w-4 h-4 mr-1"
                src={VersionIcon}
                alt="VersionIcon"
              />
              <div>{commit?.versionCommit}</div>
            </Link>
          ))}
        </>
      )}
    </>
  )
}

export default Item
