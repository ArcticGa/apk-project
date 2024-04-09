import ListChanges from './ListChanges'
import { statusClass } from '../../../utils/statusClass'

const Info = ({ data }) => {
  return (
    <div className="bg-elementsBlack border border-blueGray rounded-lg p-4 text-sm mb-4 w-full">
      <div className="flex items-center mb-2">
        <div className="text-base font-bold hover:text-blue hover:underline cursor-pointer mr-4">
          {data?.versionCommit}
        </div>
        <div
          className={`font-anonymousPro text-xs font-bold uppercase rounded px-2 py-1 ${statusClass(
            data?.statusCommit
          )}`}
        >
          {data?.statusCommit}
        </div>
      </div>

      <div className="font-anonymousPro text-gray1 text-sm font-bold mb-1 leading-4">
        <div>{data?.dateCommit}</div>
        <div>Changelog</div>
      </div>

      {data?.bugFixesCommit.length === 0 &&
      data?.featuresCommit.length === 0 ? (
        <div className="font-anonymousPro text-gray1">Пусто</div>
      ) : (
        <>
          <ListChanges data={data?.bugFixesCommit} title="Исправления" />

          <ListChanges data={data?.featuresCommit} title="Изменения" />
        </>
      )}
      <div className="text-blue">{data?.nameAdmin}</div>
    </div>
  )
}

export default Info
