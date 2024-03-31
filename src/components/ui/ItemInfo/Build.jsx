import List from './List'
import Apk from './Apk'
import Bugs from './Bugs'
import { statusClass } from '../../../utils/statusClass'

const Build = ({ dataCommits }) => {
  if (dataCommits === undefined) return

  return dataCommits.map((commit) => (
    <div
      key={commit.idCommit}
      className="p-4 rounded-lg border border-blueGray text-sm mb-4"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="flex items-center mb-2">
            <a className="text-base font-bold hover:text-blue hover:underline cursor-pointer mr-4">
              {commit?.versionCommit}
            </a>
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
            <div>Changelog</div>
          </div>

          {commit?.bugFixesCommit.length === 0 &&
          commit?.featuresCommit.length === 0 ? (
            <div className="font-anonymousPro text-gray1">Пусто</div>
          ) : (
            <>
              <div className="mb-2">
                <List data={commit?.bugFixesCommit} title="Исправления" />
              </div>

              <div>
                <List data={commit?.featuresCommit} title="Изменения" />
              </div>
            </>
          )}
        </div>

        <Apk name={commit?.apkNameLink} />
      </div>
      <div>{open && <Bugs data={commit?.bugsFoundCommit} />}</div>
    </div>
  ))
}

export default Build
