import { statusClass } from '../../../utils/statusClass'

const nameClass = 'font-anonymousPro text-gray1 font-bold'

const Bugs = ({ data }) => {
  return data?.bugsFoundCommit.map((bug) => (
    <div
      className="p-4 rounded-lg border border-blueGray flex flex-col mb-2"
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
        <div className="text-base font-bold mb-1 mt-2">{bug?.titleBug}</div>
        <div>{bug?.descriptionBug}</div>
      </div>

      <div className="mb-1 flex-1">
        <div className={`${nameClass} mb-1 leading-3`}>Порядок действий</div>
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
  ))
}

export default Bugs
