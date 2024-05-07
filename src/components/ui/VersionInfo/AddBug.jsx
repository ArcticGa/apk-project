import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { statusClass } from '../../../utils/statusClass'
import DeleteIcon from '../../../assets/icons/DeleteIcon.svg'
import PlusIcon from '../../../assets/icons/plusIcon.svg'

const AddBug = ({ setOpenAddBug, data }) => {
  const [valueTitle, setValueTitle] = useState('Заголовок')
  const [valueDesc, setValueDesc] = useState('Описание...')
  const [openStatus, setOpenStatus] = useState(false)
  const [selected, setSelected] = useState('')
  const [actions, setActions] = useState([])

  const statuses = ['alert', 'critical', 'error']

  const handleAddBug = (e) => {
    e.preventDefault()

    const newBug = {
      idBugFoundCommit: uuidv4(),
      statusBug: selected,
      titleBug: valueTitle,
      descriptionBug: valueDesc,
      orderOfActionsBug: actions,
      foundBy: '@medovarov',
    }

    data.unshift(newBug)
    setOpenAddBug(false)
  }

  const focusInputHandler = (e) => {
    e.target.style.color = '#E0E0E0'
  }

  const selectStatusHandler = (item) => {
    setSelected(item)
    setOpenStatus(false)
  }

  const addInputHandler = () => {
    const newArr = [...actions, ['Действие...']]
    setActions(newArr)
  }
  const changeInputHandler = (e, i) => {
    const inputData = [...actions]
    inputData[i] = e.target.value
    setActions(inputData)
  }

  const deleteActionHandler = (i) => {
    const deleteAction = [...actions]
    deleteAction.splice(i, 1)
    setActions(deleteAction)
  }

  return (
    <div className="p-4 rounded-lg border border-blueGray mb-2">
      <form onSubmit={(e) => handleAddBug(e)}>
        <div className="mb-4">
          <div className="select-none">
            <span
              className={`font-anonymousPro text-xs font-bold uppercase rounded mr-3 px-2 py-1 ${statusClass(
                selected
              )} cursor-pointer`}
              onClick={() => setOpenStatus(true)}
            >
              {selected || 'Выбрать уровень'}
            </span>

            {openStatus &&
              statuses.map((item) => (
                <span
                  key={item}
                  className={`font-anonymousPro text-xs font-bold uppercase rounded px-2 ml-3 cursor-pointer py-1 ${statusClass(
                    item
                  )}`}
                  onClick={() => selectStatusHandler(item)}
                >
                  {item}
                </span>
              ))}
          </div>

          <div className="flex flex-col mt-1 text-gray1">
            <input
              className="bg-elementsBlack outline-none font-bold text-base mb-1"
              onChange={(e) => setValueTitle(e.target.value)}
              onFocus={(e) => focusInputHandler(e)}
              value={valueTitle}
            />
            <input
              className="bg-elementsBlack outline-none"
              onChange={(e) => setValueDesc(e.target.value)}
              onFocus={(e) => focusInputHandler(e)}
              value={valueDesc}
            />
          </div>
        </div>

        <div className="mb-4 flex-1">
          <div className="mb-2 leading-3 text-gray1 flex items-center">
            <div className="mr-2">Порядок действий</div>
            <img
              className="cursor-pointer"
              src={PlusIcon}
              alt="PlusIcon"
              onClick={() => addInputHandler()}
            />
          </div>

          <ol className="text-gray1">
            {actions.map((data, i) => (
              <div key={i} className="flex justify-between items-center">
                <li className="list-decimal ml-6 mb-1">
                  <input
                    className="bg-elementsBlack outline-none text-gray1"
                    value={data}
                    onFocus={(e) => focusInputHandler(e)}
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
          </ol>
        </div>

        <div className="flex items-center">
          <button className="mr-4 py-2 px-6 bg-green rounded">Сохранить</button>
          <div
            className="py-2 px-6 border border-blueGray rounded cursor-pointer"
            onClick={() => setOpenAddBug(false)}
          >
            Отмена
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddBug
