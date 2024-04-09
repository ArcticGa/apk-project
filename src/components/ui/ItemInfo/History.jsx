const History = ({ data }) => {
  return (
    <div
      className="bg-elementsBlack border border-blueGray rounded-lg w-1/4 p-4 text-sm"
      style={{ height: '89.5vh' }}
    >
      <div className="text-base mb-4">История</div>

      {data.map((item) => (
        <div
          className="border-b border-blueGray mb-4 pb-4"
          key={item?.idHistory}
        >
          <div className="mb-1">
            <span className="mr-2 text-blue">{item?.nameDeveloper}</span>
            <span className="text-gray1">{item?.date}</span>
          </div>
          <div>
            {item?.title} <span className="text-blue">{item?.titleObj}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default History
