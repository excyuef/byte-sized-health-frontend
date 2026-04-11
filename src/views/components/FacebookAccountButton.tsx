import FacebookLogo from "../../assets/facebook-logo.png";

function FacebookAccountButton() {
  return (
    <div className="flex items-center justify-center mt-3">
      <button
        type="submit"
        className="bg-white flex items-center gap-2 px-18 py-2 rounded-4xl border border-white cursor-pointer"
      >
        <img src={FacebookLogo} alt="" className="w-4.5 h-auto" />
        <span>Facebook Account</span>
      </button>
    </div>
  );
}

export default FacebookAccountButton;
