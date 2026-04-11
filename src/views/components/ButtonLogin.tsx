type ButtonLoginProps = {
    loading: boolean;
    disabled: boolean;
}

function ButtonLogin({ loading, disabled }: ButtonLoginProps) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={`py-1.5 px-37 rounded-4xl border border-white text-white ${disabled? "bg-gray-400 cursor-not-allowed": "bg-[#025CEA] cursor-pointer"
      }`}>
      {loading ? "Loading..." : "Login"}
    </button>
  );
}

export default ButtonLogin;