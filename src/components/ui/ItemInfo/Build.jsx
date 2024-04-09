import { statusClass } from '../../../utils/statusClass'
import { Link } from 'react-router-dom'
import History from './History'

const Build = ({ data }) => {
  if (data?.itemCommits === undefined) return

  return (
    <div className="flex items-start">
      <div className="mr-4 w-3/4">
        {data?.itemCommits.map((commit) => (
          <div
            key={commit.idCommit}
            className="p-4 rounded-lg border bg-elementsBlack border-blueGray text-sm mb-4"
          >
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center mb-2">
                  <Link
                    to={commit?.versionCommit}
                    className="text-base font-bold hover:text-blue hover:underline cursor-pointer mr-4"
                  >
                    {commit?.versionCommit}
                  </Link>
                  <div
                    className={`font-anonymousPro text-xs font-bold uppercase rounded px-2 py-1 ${statusClass(
                      commit?.statusCommit
                    )}`}
                  >
                    {commit?.statusCommit}
                  </div>
                </div>

                <div className="font-anonymousPro text-gray1 text-sm font-bold mb-1 leading-4">
                  <div>{commit?.dateCommit}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {data?.history.length !== 0 && <History data={data?.history} />}
    </div>
  )
}

export default Build
