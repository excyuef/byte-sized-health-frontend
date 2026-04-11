import GoogleLogo from "../../assets/google-logo.png";

function GoogleAccountButton() {
  return (
    <div className="flex items-center justify-center mt-3">
      <button
        type="submit"
        className="bg-white flex items-center gap-2 px-20 py-2 rounded-4xl border border-white cursor-pointer"
      >
        <img src={GoogleLogo} alt="" className="w-5 h-auto" />
        <span>Google Account</span>
      </button>
    </div>
  );
}

export default GoogleAccountButton;
