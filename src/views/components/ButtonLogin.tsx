type ButtonLoginProps = {
  loading: boolean;
  disabled: boolean;
  children: React.ReactNode
  handleOnClick?: () => void
}

function ButtonLogin({ loading, disabled, children, handleOnClick }: ButtonLoginProps) {
  return (
    <button
      onClick={handleOnClick}
      type="submit"
      disabled={disabled}
      className={`py-1.5 px-37 rounded-4xl border border-white text-white ${disabled ? "bg-gray-400 cursor-not-allowed" : "bg-[#025CEA] cursor-pointer"
        }`}>
      {loading ? "Loading..." : children}
    </button>
  );
}

export default ButtonLogin;
