const Rules = () => {
  return (
    <div className="bg-yellow p-4 border border-white rounded-xl font-inter my-2">
      <div className="mb-3">Требования</div>
      <ul className="list-disc font-normal leading-4">
        <li className="ml-6 mb-3">
          Максимальная длина логина и никнейма - 16 символов
        </li>
        <li className="ml-6">
          Пароль должен содержать не менее 4 символов, заглавной буквы и цифры.
        </li>
      </ul>
    </div>
  )
}

export default Rules
