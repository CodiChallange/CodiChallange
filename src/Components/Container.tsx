interface ContainerProps {
  isFocused: boolean
  children: React.ReactNode
}
export function Container({ isFocused, children }: ContainerProps) {
  return (
    <div
      className={`flex justify-center items-center flex-1 p-4
              bg-[#232129] border-2 rounded-lg
              text-zinc-300 mt-2 h-14
              ${
                isFocused
                  ? 'border-violet-500 ring-2 ring-violet-600' // exemplo de estilo para foco
                  : 'border-[#232129]'
              }`}
    >
      {children}
    </div>
  )
}
