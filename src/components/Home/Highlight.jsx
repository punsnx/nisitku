const MainHighlight = () => {
  const items = Array.from({ length: 5 }, (_, index) => `Item ${index + 1}`);
  return (
    <>
      <div className="relative overflow-x-auto w-[96%] h-[100%] left-[4%]  ">
        <ul className="absolute flex space-x-4 ">
          {items.map((item, index) => (
            <li
              key={index}
              className="p-8 bg-white rounded-3xl border border-black"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default MainHighlight;
