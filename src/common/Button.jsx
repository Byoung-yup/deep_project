const Button = ({ width, height, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      style={{
        width,
        height,
      }}
      className="rounded-full bg-white border-red-500 border px-4 py-2 hover:bg-red-500 hover:text-white"
    >
      {children}
    </button>
  );
};

export default Button;
