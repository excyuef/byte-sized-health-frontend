import { NavLink } from 'react-router'
import clsx from 'clsx'

function Auth({ isLogin, loginHandler }: any) {

  return (
    <div
      className={clsx(isLogin ? "hidden" : "flex", "gap-2 items-center")}>
      <NavLink
        className="text-(--primary-color-2) ransition hover:text-gray-500/75"
        onClick={loginHandler}
        to="auth?type=login"
        end>
        Login
      </NavLink>

      <div
        className="w-px bg-gray-600 inline h-7"></div>

      <NavLink
        className="rounded-md bg-(--primary-color-2) px-2 py-1.5 font-medium 
        text-(--primary-color-1)"
        onClick={loginHandler}
        to="auth?type=register"
        end>
        Sign Up
      </NavLink>
    </div>
  )
}

export default Auth
