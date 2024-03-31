import { useState } from 'react'
import { statusClass } from '../../../utils/statusClass'
import PlusIcon from '../../../assets/icons/plusIcon.svg'
import ArrowIcon from '../../../assets/icons/arrowIcon.svg'

const nameClass = 'font-anonymousPro text-gray1 font-bold'

const Bugs = ({ data }) => {
  const [openBugs, setOpenBugs] = useState(false)

  return (
    <>
      <div className="flex items-center mb-2">
        <button
          onClick={() => setOpenBugs((prev) => !prev)}
          className="flex items-center font-anonymousPro text-gray1 text-sm font-bold "
        >
          <div className="mr-1 font-bold">Баги</div>
          {data && (
            <div className="mr-1 mb-1">
              <img className="w-4 h-4" src={ArrowIcon} alt="ArrowIcon" />
            </div>
          )}
        </button>
        <div className="p-1 rounded-sm bg-blueGray cursor-pointer">
          <img className="w-3 h-3" src={PlusIcon} alt="PlusIcon" />
        </div>
      </div>

      {data && (
        <>
          {openBugs && (
            <div className="grid grid-cols-3 gap-2">
              {data.map((bug) => (
                <div
                  className="p-4 rounded-lg border border-blueGray flex flex-col"
                  key={bug?.idBugFoundCommit}
                >
                  <div className="mb-4">
                    <span
                      className={`font-anonymousPro text-xs font-bold uppercase rounded px-2 py-1 ${statusClass(
                        bug?.statusBug
                      )}`}
                    >
                      {bug?.statusBug}
                    </span>
                    <div className="text-base font-bold mb-1 mt-2">
                      {bug?.titleBug}
                    </div>
                    <div>{bug?.descriptionBug}</div>
                  </div>

                  <div className="mb-1 flex-1">
                    <div className={`${nameClass} mb-1 leading-3`}>
                      Порядок действий
                    </div>
                    <ol>
                      {bug?.orderOfActionsBug.length > 0 ? (
                        <>
                          {bug?.orderOfActionsBug.map((order, i) => (
                            <li className="list-decimal ml-6 mb-1" key={i}>
                              {order}
                            </li>
                          ))}
                        </>
                      ) : (
                        <div className={`${nameClass} font-normal`}>Пусто</div>
                      )}
                    </ol>
                  </div>
                  <div className={`flex items-center ${nameClass}`}>
                    Найден
                    <a className="ml-2 text-blue font-bold hover:underline cursor-pointer">
                      {bug?.foundBy}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </>
  )
}

export default Bugs
