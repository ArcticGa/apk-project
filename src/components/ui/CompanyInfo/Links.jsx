import PlusIcon from '../../../assets/icons/plusIcon.svg'
import LinkItem from './LinkItem'

const Links = ({ data, title }) => {
  return (
    <div className="mb-4 p-4 bg-elementsBlack border border-blueGray rounded-lg">
      <div className="flex items-center font-bold text-gray1 leading-4 mb-2">
        <div className="mr-3">{title}</div>
        <div>
          <img
            className="w-2 h-2 cursor-pointer"
            src={PlusIcon}
            alt="PlusIcon"
          />
        </div>
      </div>

      {data.map((obj, i) => (
        <LinkItem key={i} obj={obj} i={i} />
      ))}
    </div>
  )
}

export default Links
