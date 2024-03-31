import apkIcon from '../../../assets/icons/apkIcon.svg'

const Apk = ({ name }) => {
  return (
    <div className="p-4 rounded-lg border border-blueGray">
      <div className="mb-2 text-base font-bold">Ресурсы</div>
      <div className="flex items-center text-blue">
        <img className="mr-2" src={apkIcon} alt="apkIcon" />
        <a className="hover:underline cursor-pointer">{name}</a>
      </div>
    </div>
  )
}

export default Apk
