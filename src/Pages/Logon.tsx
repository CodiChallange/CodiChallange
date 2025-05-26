import { FiLock, FiMail } from 'react-icons/fi'
import { Button } from '../Components/Button'
import { useForm } from 'react-hook-form'
import { Input } from '../Components/Inputs'
import CodiLogo from '../assests/CodiLogo.png'

export function Logon() {
  const { register } = useForm()
  return (
    <div className='bg-linear-60 from-fuchia-500 to-purple-900 flex h-screen '>
      <div className='flex w-1/2 items-center flex-col justify-center  '>
        <img src='' alt='Logo Codi Cash' />

        <form className='my-10 w-85  text-amber-100 text-center '>
          <h1 className='mb-6  text-xl text-[#4b206d] font-bold '>
            Faça seu logon
          </h1>

          <Input
            icon={FiMail}
            type='text'
            placeholder='Email'
            {...register('email')}
          />
          <Input
            icon={FiLock}
            type='password'
            placeholder='Senha'
            {...register('password')}
          />
          <Button>Login</Button>
        </form>
      </div>
      <div className='flex  items-center w-1/2 justify-center '>
        <img src={CodiLogo} alt='' className='w-[600px] h-[600px] ' />
      </div>
    </div>
  )
}
