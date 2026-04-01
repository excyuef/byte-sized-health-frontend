type Props = {
  children: React.ReactNode
}

function Button({ children }: Props) {
  return (
    <button
      className="px-3 py-2 bg-(--primary-color-1) rounded-md">
      {children}
    </button>
  )
}

export default Button
