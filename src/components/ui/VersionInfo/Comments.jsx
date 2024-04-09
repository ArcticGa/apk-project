import { useState } from 'react'
import { getDate } from '../../../utils/getDate'
import { v4 as uuidv4 } from 'uuid'

const Comments = ({ data }) => {
  const [value, setValue] = useState('')

  const handleAddComment = (e) => {
    if (e.key === 'Enter') {
      const newComment = {
        id: uuidv4(),
        nameCreator: 'medovarov',
        date: getDate(),
        text: value,
      }

      data.push(newComment)
      setValue('')
    }
  }

  return (
    <div className="bg-elementsBlack border border-blueGray rounded-lg p-4 text-sm w-full flex flex-1 flex-col">
      <div className="font-inter font-bold mb-4 text-base">Комментарии</div>

      <div className="flex-1">
        {data !== undefined && data.length !== 0 ? (
          data.map((comment) => (
            <div key={comment?.id} className="mb-4">
              <div className="mb-2">
                <span className="font-bold text-blue">
                  {comment?.nameCreator}
                </span>
                <span className="text-gray1 ml-2">{comment?.date}</span>
              </div>
              <div className="border-l border-blueGray pl-2">
                {comment?.text}
              </div>
            </div>
          ))
        ) : (
          <div className="text-gray1">Пусто</div>
        )}
      </div>

      <input
        className="py-2 px-4 bg-gray2 border border-elementsBlack rounded-lg outline-none text-white leading-4"
        type="text"
        id="comment"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleAddComment}
        placeholder="Написать комментарий"
      />
    </div>
  )
}

export default Comments
