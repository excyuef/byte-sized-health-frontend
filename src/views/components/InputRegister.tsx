type InputProps = {
    label: string;
    type: string;
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function InputRegister({ label, type, placeholder, value, onChange } : InputProps) {
    return (
    <>
      <label className="text-white">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="bg-gray-300 border border-white rounded-xl px-1"
      />
    </>
    )
}

export default InputRegister;