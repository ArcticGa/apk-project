import PoroSad from '../../../assets/icons/404.svg'

const NotFound = () => {
  return (
    <div
      className="flex items-center justify-center"
      style={{ height: '97vh' }}
    >
      <div className="flex items-center">
        <img src={PoroSad} alt="PoroSad" />
        <div className="font-anonymousPro font-bold text-3xl ml-4">
          Упс, страница не найдена
        </div>
      </div>
    </div>
  )
}

export default NotFound
