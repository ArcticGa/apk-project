import { companiesData } from '../../../data/companiesData.js'

import HelloEmoji from '../../../assets/icons/HelloEmoji.svg'
import PlusIcon from '../../../assets/icons/plusIcon.svg'
import CompanyMain from './CompanyMain.jsx'

const Home = () => {
  return (
    <div className="font-anonymousPro flex items-center justify-center mt-32 font-bold">
      <div className="w-654">
        <div className="text-3xl flex items-center mb-4">
          <div className="mr-2">
            Добро пожаловать, <span className="text-green">medovarov</span>
          </div>
          <img src={HelloEmoji} alt="HelloEmoji" />
        </div>

        <div className="bg-elementsBlack border border-blueGray rounded-lg p-4 pb-2 text-gray1 leading-4">
          <div className="flex items-center mb-2">
            <div className="mr-3">Команды</div>
            <img
              className="w-3 h-3 cursor-pointer"
              src={PlusIcon}
              alt="PlusIcon"
            />
          </div>

          {companiesData.map((company) => (
            <CompanyMain key={company?.id} company={company} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
