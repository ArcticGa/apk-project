import DeleteIcon from '../../../assets/icons/DeleteIcon.svg'
import PlusIcon from '../../../assets/icons/plusIcon.svg'

const inputClass = 'border border-blueGray p-4 rounded-lg mt-2'

const AddInputBlock = ({ title, arr, setArr }) => {
  const addInputHandler = () => {
    const newArr = [...arr, ['']]
    setArr(newArr)
  }

  const changeInputHandler = (e, i) => {
    const inputData = [...arr]
    inputData[i] = e.target.value
    setArr(inputData)
  }

  const deleteActionHandler = (i) => {
    const deleteAction = [...arr]
    deleteAction.splice(i, 1)
    setArr(deleteAction)
  }

  return (
    <div className={inputClass}>
      <div className="flex items-center mb-1">
        <span className="mr-2 font-bold">{title}</span>
        <img
          className="cursor-pointer"
          src={PlusIcon}
          alt="PlusIcon"
          onClick={() => addInputHandler()}
        />
      </div>

      {arr.length !== 0 ? (
        <ul>
          {arr.map((fix, i) => (
            <div key={i} className="flex justify-between items-center">
              <li className="list-disc ml-6 mb-1 text-white">
                <input
                  className="bg-elementsBlack outline-none"
                  value={fix}
                  onChange={(e) => changeInputHandler(e, i)}
                />
              </li>

              <div
                className="cursor-pointer"
                onClick={() => deleteActionHandler(i)}
              >
                <img src={DeleteIcon} alt="DeleteIcon" />
              </div>
            </div>
          ))}
        </ul>
      ) : (
        <div>Пусто</div>
      )}
    </div>
  )
}

export default AddInputBlock
