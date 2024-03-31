import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { getFocused, outFocused } from '../../../utils/focusFuncs'

import passCheckIcon from '../../../assets/icons/passCheck.svg'
import LogoApp from '../../../assets/icons/LogoApp.svg'

import Rules from './Rules'
import { getBtnClass } from '../../../utils/getBtnCLass'

const btnDisable = 'mt-2 bg-blueGray text-gray1 py-3 rounded-lg'
const btnEnable = 'mt-2 bg-green text-white py-3 rounded-lg'

const Reg = () => {
  const [checkPass, setCheckPass] = useState(false)
  const [valueLogin, setValueLogin] = useState('')
  const [valuePassword, setValuePassword] = useState('')
  const [valueUsername, setValueUsername] = useState('')

  const navigate = useNavigate()

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({ mode: 'onChange' })

  const onSubmit = (data) => {
    console.log(JSON.stringify(data))
    navigate('/')
  }

  const onBlur = (e, item) => {
    if (item === 'login') setValueLogin(e.target.value)
    if (item === 'password') setValuePassword(e.target.value)
    if (item === 'username') setValueUsername(e.target.value)

    outFocused(e)
  }

  return (
    <div className="font-anonymousPro font-bold flex bg-pageColor text-white flex-col justify-center items-center h-screen">
      <div className="max-w-xs w-full">
        <div className="flex flex-col items-center mb-8">
          <img className="mb-3" src={LogoApp} alt="Logo" />
          <div className="uppercase font-jetBrainsMono">pkg2box</div>
        </div>

        <form className="flex flex-col mb-2" onSubmit={handleSubmit(onSubmit)}>
          <div
            className={`${getBtnClass(
              errors?.login,
              valueLogin
            )} relative flex flex-col `}
          >
            <label className="absolute text-gray1 leading-3 mb-1 pointer-events-none">
              логин
            </label>
            <input
              {...register('login', {
                required: true,
                maxLength: 16,
                pattern: /^[a-zA-Z0-9]+$/,
              })}
              onBlur={(e) => onBlur(e, 'login')}
              onFocus={(e) => getFocused(e)}
              className="outline-none bg-elementsBlack leading-4"
            />
          </div>

          <div
            className={`${getBtnClass(
              errors?.password,
              valuePassword
            )} relative flex flex-col `}
          >
            <label className="absolute text-gray1 leading-3 mb-1 pointer-events-none">
              пароль
            </label>
            <input
              {...register('password', {
                required: true,
                minLength: 4,
                pattern:
                  /^(?=^.{4,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
              })}
              onBlur={(e) => onBlur(e, 'password')}
              onFocus={(e) => getFocused(e)}
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

          <div
            className={`${getBtnClass(
              errors?.username,
              valueUsername
            )} relative flex flex-col `}
          >
            <label className="absolute text-gray1 leading-3 mb-1 pointer-events-none">
              никнейм
            </label>
            <input
              {...register('username', {
                required: true,
                maxLength: 16,
                pattern: /^[a-zA-Z0-9]+$/,
              })}
              onFocus={(e) => getFocused(e)}
              onBlur={(e) => onBlur(e, 'username')}
              className="outline-none bg-elementsBlack leading-4"
            />
          </div>

          {Object.keys(errors).length !== 0 && <Rules />}

          <button
            disabled={!isValid}
            className={!isValid ? btnDisable : btnEnable}
          >
            Зарегистрироваться
          </button>
        </form>
        <Link
          to={'../auth/authorizate'}
          className="block bg-elementsBlack text-blue py-3 rounded-lg text-center"
        >
          Уже есть аккаунт
        </Link>
      </div>
    </div>
  )
}

export default Reg
