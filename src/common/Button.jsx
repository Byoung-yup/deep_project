const Button = ({ children }) => {
  return (
    <button className="rounded-full bg-white border-red-500 border h-4/5 px-4 py-2 hover:bg-red-500 hover:text-white">
      {children}
    </button>
  );
};

export default Button;
