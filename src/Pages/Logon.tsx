import { FiLock, FiMail } from 'react-icons/fi'
import { Button } from '../Components/Button'
import { useForm } from 'react-hook-form'
import { Input } from '../Components/Inputs'

export function Logon() {
  const { register } = useForm()
  return (
    <>
      <div className='bg-gray-900 flex items-stretch h-screen'>
        <div className='flex-1/2 place-content-center justify-items-center w-full h-full'>
          <img src='' alt='BJJ TUTORS' />

          <form className='my-10 w-85  text-amber-100 text-center'>
            <h1 className='mb-6 font-medium'>Faça seu logon</h1>

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
        <div className='flex-1/2  bg-cover ' />
      </div>
    </>
  )
}
