const Input = ({ type, placeholder, onChange }) => {
  return (
    <input
      className="rounded-full w-1/2 h-9 border-[1px] pl-5 border-black"
      type={type}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    ></input>
  );
};

export default Input;
