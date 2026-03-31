interface MobileProps {
  toggle: () => void
}

function Mobile({ toggle }: MobileProps) {
  return (

    <button
      className="block rounded-md bg-(--primary-color-2) p-1.5 
              text-(--primary-color-1) 
              md:hidden"

      onClick={toggle}>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-4"
        fill="none"
        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  )
}

export default Mobile
