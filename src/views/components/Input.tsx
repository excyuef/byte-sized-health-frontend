type InputProps = {
  label: string;
  type: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input({ label, type, placeholder, value, onChange }: InputProps) {
  return (
    <>
      <label className="text-white">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="bg-white border border-white rounded-xl py-1 px-2 w-full"
      />
    </>
  );
}

export default Input;
