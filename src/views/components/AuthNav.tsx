function Auth() {
  return (
    <>
      <a
        className="text-(--primary-color-2) ransition hover:text-gray-500/75"
        href="#">
        Login
      </a>

      <div
        className="w-0.5 bg-gray-600 inline h-8"></div>

      <a
        className="rounded-md bg-(--primary-color-2) px-2 py-1.5 font-medium 
        text-(--primary-color-1)"
        href="#">
        Sign Up
      </a>
    </>
  )
}

export default Auth
