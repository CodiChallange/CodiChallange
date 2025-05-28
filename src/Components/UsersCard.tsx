import CodiIcon from '../assests/CodiLogoAside.png'

type cardProps = {
  name: string
  role: string
}

export function UserCard({ name, role }: cardProps) {
  return (
    <div
      className={`w-[240px] h-[300px] rounded-2xl flex flex-col p-4 items-center border-2  gap-4 ${
        role === 'ADM'
          ? 'border-red-800'
          : role == 'FIN'
          ? 'border-green-800'
          : 'border-blue-800'
      } `}
    >
      <img
        src={CodiIcon}
        alt='Foto do usuario'
        className='w-[60px] h-[60px] '
      />
      <div className='flex flex-col items-center'>
        <h1>Nome:</h1>
        <p className='line-clamp-1 font-bold '>{name} </p>
      </div>
      <div className='flex flex-col items-center'>
        <span>Role:</span>
        <span
          className={`font-bold ${
            role === 'ADM'
              ? 'text-red-800'
              : role == 'FIN'
              ? 'text-green-800'
              : 'text-blue-800'
          }`}
        >
          {role}
        </span>
      </div>

      <div className='flex justify-between w-full gap-3'>
        <button className='bg-[#A243D2] w-2/4 rounded-lg font-medium px-4 hover:bg-[#8138a5] duration-[0.5s] text-white cursor-pointer'>
          Alterar
        </button>
        <button className='bg-red-700 w-2/4 h-[40px] rounded-lg font-medium  items-center hover:bg-red-800  duration-[0.5s] text-white cursor-pointer'>
          Remover
        </button>
      </div>
    </div>
  )
}
