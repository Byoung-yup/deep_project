const Tag = ({ type }) => {
  return (
    <span className="rounded-full bg-white text-black font-semibold px-4 py-2 cursor-default">
      {type}
    </span>
  );
};

export default Tag;
