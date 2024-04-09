import { Link } from 'react-router-dom'

const CompanyMain = ({ company }) => {
  return (
    <div className="bg-elementsBlack border border-blueGray rounded-lg p-4 mb-2 text-gray1">
      <Link to={`/company/${company?.id}`} className="mb-2 text-blue block">
        {company?.companyInfo?.companyName}
      </Link>

      <div>Пакеты</div>

      {company?.companyItems.length === 0 ? (
        <div className="mt-2">Пусто</div>
      ) : (
        company?.companyItems.map((companyItem) => (
          <Link
            to={`/company/${company?.id}/${companyItem?.idItem}`}
            className="block mt-2 text-blue"
            key={companyItem?.idItem}
          >
            {companyItem?.itemName}
          </Link>
        ))
      )}
    </div>
  )
}

export default CompanyMain
