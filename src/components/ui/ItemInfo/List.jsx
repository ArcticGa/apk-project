const List = ({ data, title }) => {
  return (
    <>
      <div className="mb-1 leading-4">{title}</div>
      <ul className="ml-7">
        {data.map((item, i) => (
          <li className="list-disc mb-1" key={i}>
            {item}
          </li>
        ))}
      </ul>
    </>
  )
}

export default List
