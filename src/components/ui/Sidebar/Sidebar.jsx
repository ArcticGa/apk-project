import PlusIcon from '../../../assets/icons/plusIcon.svg'
import LogoApp from '../../../assets/icons/LogoApp.svg'
import ArrowIcon from '../../../assets/icons/arrowIcon.svg'
import Company from './Company.jsx'
import { companiesData } from '../../../data/companiesData.js'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const [openTeams, setOpenTeams] = useState(true)

  return (
    <div className="flex flex-col justify-between h-full w-242 py-6 px-2 font-anonymousPro border-r border-blueGray">
      <div className="flex flex-col font-bold">
        <div className="flex items-center justify-between px-4 mb-8">
          <Link to={'/'} className="flex items-center font-jetBrainsMono">
            <img src={LogoApp} alt="Logo" />
            <div className="uppercase ml-4">Lunar: tracking</div>
          </Link>
          <div className="text-gray1 font-normal text-sm">v0.8.0</div>
        </div>

        <div className="flex justify-between items-center rounded text-gray1 mb-2 hover:bg-elementsBlack px-4 py-1 ">
          <button
            onClick={() => setOpenTeams((prev) => !prev)}
            className="flex items-center cursor-pointer"
          >
            <div className="mr-1">Команды</div>
            <div className="pb-1">
              <img className="w-4 h-4" src={ArrowIcon} alt="Arrow" />
            </div>
          </button>

          <img
            className="w-3 h-3 mr-0.5 cursor-pointer"
            src={PlusIcon}
            alt="PlusIcon"
          />
        </div>

        {openTeams && (
          <>
            {companiesData.map((company) => (
              <Company key={company.id} company={company} />
            ))}
          </>
        )}
      </div>

      <div>
        <div className="flex mx-4 p-2 w-190 items-center bg-elementsBlack rounded-lg border border-blueGray">
          <div className="w-8 h-8 bg-gray2 mr-2 rounded"></div>
          <div>
            <div className="font-bold">@medovarov</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
