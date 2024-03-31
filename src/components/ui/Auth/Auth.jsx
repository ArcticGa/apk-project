import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { getFocused, outFocused } from '../../../utils/focusFuncs'

import LogoApp from '../../../assets/icons/LogoApp.svg'
import passCheckIcon from '../../../assets/icons/passCheck.svg'

const inputClass =
  'bg-elementsBlack px-4 py-3 border border-elementsBlack rounded-lg mb-2 outline-none text-white w-full leading-4'

const btnEnable = 'mt-2 bg-green text-white py-3 rounded-lg'

const Auth = () => {
  const [checkPass, setCheckPass] = useState(false)

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: 'onSubmit' })

  const onSubmit = (data) => {
    console.log(JSON.stringify(data))
  }

  return (
    <div className="font-anonymousPro font-bold flex bg-pageColor text-white flex-col justify-center items-center h-screen">
      <div className="max-w-xs w-full">
        <div className="flex flex-col items-center mb-8">
          <img className="mb-3" src={LogoApp} alt="Logo" />
          <div className="uppercase font-jetBrainsMono">pkg2box</div>
        </div>

        <form className="flex flex-col mb-2" onSubmit={handleSubmit(onSubmit)}>
          <div className={`${inputClass} relative flex flex-col `}>
            <label className="absolute text-gray1 leading-3 mb-1 pointer-events-none">
              логин
            </label>
            <input
              {...register('login', {
                required: true,
              })}
              onFocus={(e) => getFocused(e)}
              onBlur={(e) => outFocused(e)}
              className="outline-none bg-elementsBlack leading-4"
            />
          </div>

          <div className={`${inputClass} relative flex flex-col `}>
            <label className="absolute text-gray1 leading-3 mb-1 pointer-events-none">
              пароль
            </label>
            <input
              {...register('password', {
                required: true,
              })}
              onFocus={(e) => getFocused(e)}
              onBlur={(e) => outFocused(e)}
              className="w-262 outline-none bg-elementsBlack leading-4"
              type={checkPass ? 'text' : 'password'}
            />
            <div
              className="absolute left-72 bottom-1/3 cursor-pointer"
              onClick={() => setCheckPass(!checkPass)}
            >
              <img src={passCheckIcon} alt="passCheckIcon" />
            </div>
          </div>

          {Object.keys(errors).length !== 0 && (
            <p className="text-redOrange my-2">Поля не заполнены</p>
          )}

          <button className={btnEnable}>Авторизоваться</button>
        </form>
        <Link
          to={'../auth/register'}
          className="block bg-elementsBlack text-blue py-3 rounded-lg text-center"
        >
          Нет аккаунта
        </Link>
      </div>
    </div>
  )
}

export default Auth
