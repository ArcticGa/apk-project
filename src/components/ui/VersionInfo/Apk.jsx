import PlusIcon from '../../../assets/icons/plusIcon.svg'
import apkIcon from '../../../assets/icons/apkIcon.svg'

const Apk = ({ data }) => {
  return (
    <div className="bg-elementsBlack border border-blueGray rounded-lg p-4 mb-4">
      <div className="flex justify-between items-center mb-4">
        <div className="text-base">Ресурсы</div>
        <img src={PlusIcon} alt="PlusIcon" className="cursor-pointer w-3 h-3" />
      </div>
      <div>
        <div className="flex items-center text-blue">
          <img className="mr-2" src={apkIcon} alt="apkIcon" />
          <a className="hover:underline cursor-pointer">{data?.apkNameLink}</a>
        </div>
      </div>
    </div>
  )
}

export default Apk
