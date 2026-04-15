type AccountButtonProps = {
  title: string
  img: string
}

function AccountButton({ title, img }: AccountButtonProps) {
  return (
    <button
      type="submit"
      className="bg-white flex items-center gap-2 px-18 py-2 rounded-4xl border border-white cursor-pointer justify-center"
    >
      <img src={img} alt={title} className="w-4.5 h-auto" />
      <span>{`${title} Account`}</span>
    </button>
  );
}

export default AccountButton;
