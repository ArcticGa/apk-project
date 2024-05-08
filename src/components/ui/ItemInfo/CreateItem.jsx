import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { getFullDate } from '../../../utils/getFullDate'
import PlusIcon from '../../../assets/icons/plusIcon.svg'
import AddInputBlock from './AddInputBlock'

const inputClass = 'border border-blueGray p-4 rounded-lg mt-2'
const btnEnable = 'mr-4 bg-green text-white rounded py-2 px-6'
const btnDisable = 'mr-4 bg-blueGray rounded py-2 px-6'

const options = [
  { value: 1, label: 'release' },
  { value: 2, label: 'testing' },
  { value: 3, label: 'tested' },
]

const CreateItem = ({ setOpenPopup, data }) => {
  const [versionValue, setVersionValue] = useState('')
  const [currentSelect, setCurrentSelect] = useState('release')
  const [bugsFixesArr, setBugFixesArr] = useState([])
  const [featuresCommits, setFeaturesCommits] = useState([])
  const [file, setFile] = useState()
  const [btnActive, setBtnActive] = useState(false)

  useEffect(() => {
    if (versionValue !== '') {
      setBtnActive(true)
    } else {
      setBtnActive(false)
    }
  }, [versionValue])

  const handleSubmit = (e) => {
    e.preventDefault()

    const newItem = {
      idCommit: uuidv4(),
      versionCommit: versionValue,
      statusCommit: currentSelect,
      dateCommit: getFullDate(),
      nameAdmin: '@medovarov',
      apkNameLink: file.name,
      bugFixesCommit: bugsFixesArr,
      bugsFoundCommit: [],
      featuresCommit: featuresCommits,
      comments: [],
    }

    data.unshift(newItem)
    setOpenPopup(false)
  }

  const handleSelect = (event) => {
    setCurrentSelect(event.target.value)
  }

  const handleFile = (event) => {
    setFile(event.target.files[0])
  }

  return (
    <div className="text-gray1 text-sm font-anonymousPro">
      <div className="text-base font-bold">Создание сборки пакета</div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="flex font-inter text-sm">
          <input
            className={`${inputClass} outline-none bg-elementsBlack text-white w-full mr-4`}
            type="text"
            placeholder="Версия"
            value={versionValue}
            onChange={(e) => setVersionValue(e.target.value)}
          />
          <select
            className={`${inputClass} outline-none bg-elementsBlack text-white w-full uppercase`}
            onChange={handleSelect}
          >
            {options.map((option) => (
              <option key={option.value} value={option.label}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <AddInputBlock
          title="Исправление"
          arr={bugsFixesArr}
          setArr={setBugFixesArr}
        />

        <AddInputBlock
          title="Изменения"
          arr={featuresCommits}
          setArr={setFeaturesCommits}
        />

        <div className={inputClass}>
          <div className="flex items-center mb-1">
            <span className="mr-2 font-bold">Ресурсы</span>
            <img className="cursor-pointer" src={PlusIcon} alt="PlusIcon" />
          </div>

          <input type="file" name="file" onChange={handleFile} />
        </div>

        <div className="flex items-center mt-8 font-bold">
          <button
            disabled={!btnActive}
            className={!btnActive ? btnDisable : btnEnable}
          >
            Создать
          </button>
          <div
            className="cursor-pointer text-white border border-blueGray py-2 px-6 rounded"
            onClick={() => setOpenPopup(false)}
          >
            Отмена
          </div>
        </div>
      </form>
    </div>
  )
}

export default CreateItem
