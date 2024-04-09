import Block from '../../../assets/icons/403.svg'

const Blocked = () => {
  return (
    <div
      className="flex items-center justify-center"
      style={{ height: '97vh' }}
    >
      <div className="flex items-center">
        <img src={Block} alt="Block" />
        <div className="font-anonymousPro font-bold text-3xl ml-4">
          У вас нет доступа к этому ресурсу
        </div>
      </div>
    </div>
  )
}

export default Blocked
