import { useParams } from 'react-router-dom'
import { findData } from '../../../utils/findData'
import Build from './Build'
import { useState } from 'react'
import PopupMain from '../Popup/PopupMain'
import CreateItem from './CreateItem'

const ItemInfo = () => {
  const [openPopup, setOpenPopup] = useState(false)

  const { companyId, itemId } = useParams()

  const companyData = findData(companyId)
  const itemData = findData(companyId, itemId)

  return (
    <>
      <div className="flex items-center justify-between font-anonymousPro mb-4 font-bold">
        <div className="">
          <div className="text-gray1 leading-4 mb-1">
            {companyData?.companyInfo?.companyName}
          </div>
          <div className="text-2xl leading-6">{itemData?.itemName}::Сборки</div>
        </div>
        <div
          className="px-4 py-2 bg-green rounded leading-4 cursor-pointer"
          onClick={() => setOpenPopup(true)}
        >
          Создать сборку
        </div>
      </div>

      {openPopup && (
        <PopupMain>
          <CreateItem setOpenPopup={setOpenPopup} data={itemData.itemCommits} />
        </PopupMain>
      )}

      <Build data={itemData} />
    </>
  )
}

export default ItemInfo
