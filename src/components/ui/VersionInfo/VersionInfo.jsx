import { useParams } from 'react-router-dom'
import { findData } from '../../../utils/findData'
import PlusIcon from '../../../assets/icons/plusIcon.svg'

import Info from './Info'
import Comments from './Comments'
import Apk from './Apk'
import Bugs from './Bugs'
import AddBug from './AddBug'
import { useState } from 'react'

const VersionInfo = () => {
  const [openAddBug, setOpenAddBug] = useState(false)

  const { companyId, itemId, versionId } = useParams()

  const companyData = findData(companyId)
  const itemData = findData(companyId, itemId)
  const versionData = findData(companyId, itemId, versionId)

  return (
    <>
      <div className="flex items-center justify-between font-anonymousPro mb-4 font-bold">
        <div>
          <div className="text-gray1 leading-4 mb-1">
            {companyData?.companyInfo?.companyName}
          </div>
          <div className="text-2xl leading-6">
            {itemData?.itemName}::Сборки::{versionData?.versionCommit}
          </div>
        </div>
        <div className="flex items-center">
          <div className="px-4 py-2 border-2 border-redOrange rounded text-redOrange leading-4 cursor-pointer">
            Удалить
          </div>
          <div className="px-4 py-2 ml-4 bg-green rounded leading-4 cursor-pointer">
            Редактировать
          </div>
        </div>
      </div>

      <div className="flex text-sm" style={{ height: '90vh' }}>
        <div className="flex flex-col w-1110 mr-4">
          <Info data={versionData} />
          <Comments data={versionData?.comments} />
        </div>
        <div className="flex flex-col w-520">
          <Apk data={versionData} />

          <div className="bg-elementsBlack border border-blueGray rounded-lg p-4 flex-1">
            <div className="flex items-center mb-4">
              <div className="text-base mr-3">Баги</div>
              <img
                src={PlusIcon}
                alt="PlusIcon"
                className="cursor-pointer w-3 h-3"
                onClick={() => setOpenAddBug(true)}
              />
            </div>

            {openAddBug && (
              <AddBug
                setOpenAddBug={setOpenAddBug}
                data={versionData?.bugsFoundCommit}
              />
            )}

            <Bugs data={versionData} />
          </div>
        </div>
      </div>
    </>
  )
}

export default VersionInfo
