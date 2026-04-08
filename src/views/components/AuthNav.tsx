import clsx from 'clsx'

function Auth({ isLogin, loginHandler }: any) {

  return (
    <div
      className={clsx(isLogin ? "hidden" : "flex", "gap-2 items-center")}>
      <a
        className="text-(--primary-color-2) ransition hover:text-gray-500/75"
        href="#"
        onClick={loginHandler}>
        Login
      </a>

      <div
        className="w-px bg-gray-600 inline h-7"></div>

      <a
        className="rounded-md bg-(--primary-color-2) px-2 py-1.5 font-medium 
        text-(--primary-color-1)"
        href="#"
        onClick={loginHandler}>
        Sign Up
      </a>
    </div>
  )
}

export default Auth
