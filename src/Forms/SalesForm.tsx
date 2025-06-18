import { FiUser, FiMail, FiPhone } from 'react-icons/fi'
import { Button } from '../Components/Button'
import { Input } from '../Components/Inputs'
import { useForm } from 'react-hook-form'

export function SalesForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <>
      <div className='m-2 p-10 border-3  border-violet-500 rounded-2xl'>
        <h1 className='text-3xl text-center font-medium'>Cadastro de Vendas</h1>

        <div className='m-10 flex items-stretch h-screen border-3 border-violet-500 rounded-2xl'>
          <form className='my-10 mx-auto text-center'>
            <h1 className='mb-6 font-medium'>Modalidade do Curso</h1>

            <select
              {...register('modality', {
                validate: (value) => {
                  return value !== '0'
                },
              })}
            >
              <option value='0'>Selecione o curso desejado</option>
              <option value='option1'>FrontEnd (Presencial)</option>
              <option value='option2'>BackEnd (Presencial)</option>
              <option value='option3'>FullStack (Presencial)</option>
            </select>
            {errors?.modality?.type === 'validate' && (
              <p className='text-red-500 text-sm text-center'>
                Curso é obrigatório
              </p>
            )}

            <h1 className='mb-6 font-medium'>Dados do Cliente</h1>

            <Input
              icon={FiUser}
              type='text'
              placeholder='Nome Completo'
              {...register('name', { required: true })}
            />
            {errors?.name?.type === 'required' && (
              <p className='text-red-500 text-sm text-left'>
                Nome é obrigatório
              </p>
            )}

            <Input
              icon={FiMail}
              type='email'
              placeholder='E-mail'
              {...register('email', { required: true })}
            />
            {errors?.email?.type === 'required' && (
              <p className='text-red-500 text-sm text-left'>
                E-mail é obrigatório
              </p>
            )}

            <Input
              icon={FiPhone}
              type='number'
              placeholder='Telefone'
              {...register('phone', { required: true })}
            />
            {errors?.phone?.type === 'required' && (
              <p className='text-red-500 text-sm text-left'>
                Telefone é obrigatório
              </p>
            )}

            <h1 className='mb-6 font-medium'>Valor da Venda</h1>

            <div className='grid grid-cols-3 gap-4'>
              <div>
                <Input
                  type='number'
                  placeholder='Valor da Compra'
                  {...register('price', { required: true })}
                />
                {errors?.price?.type === 'required' && (
                  <p className='text-red-500 text-sm text-left'>
                    Preço é obrigatório
                  </p>
                )}
              </div>

              <div>
                <Input
                  type='number'
                  placeholder='Desconto'
                  {...register('discount', { required: true })}
                />
                {errors?.discount?.type === 'required' && (
                  <p className='text-red-500 text-sm text-left'>
                    Desconto é obrigatório
                  </p>
                )}
              </div>

              <div>
                <Input
                  type='number'
                  placeholder='Valor Bruto'
                  {...register('value', { required: true })}
                />
                {errors?.value?.type === 'required' && (
                  <p className='text-red-500 text-sm text-left'>
                    Valor Bruto é obrigatório
                  </p>
                )}
              </div>
            </div>

            <h1 className='mb-6 font-medium'>Dados da Venda</h1>

            <div className='grid grid-cols-3 gap-4'>
              <div>
                <Input
                  type='number'
                  placeholder='Comissão'
                  {...register('commission', { required: true })}
                />
                {errors?.commission?.type === 'required' && (
                  <p className='text-red-500 text-sm text-left'>
                    Comissão é obrigatório
                  </p>
                )}
              </div>

              <div>
                <Input
                  type='number'
                  placeholder='Imposto'
                  {...register('tax', { required: true })}
                />
                {errors?.tax?.type === 'required' && (
                  <p className='text-red-500 text-sm text-left'>
                    Imposto é obrigatório
                  </p>
                )}
              </div>

              <div>
                <Input
                  type='number'
                  placeholder='Taxa do Cartão'
                  {...register('cardTax', { required: true })}
                />
                {errors?.cardTax?.type === 'required' && (
                  <p className='text-red-500 text-sm text-left'>
                    Taxa do Cartão é obrigatório
                  </p>
                )}
              </div>
            </div>

            <Button onClick={handleSubmit(onSubmit)}>Casdastrar Venda</Button>
          </form>
        </div>
      </div>
    </>
  )
}
