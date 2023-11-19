const PopupShow = ({ title, message, onClose }) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50"
      style={{ zIndex: 999 }}
    >
      <div className="flex flex-col w-[70%] bg-white p-4 rounded-xl shadow-md">
        <div>
          <p className="text-lg font-bold">{title}</p>
        </div>
        <div>
          <p>{message}</p>
        </div>

        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mt-2 rounded focus:outline-none focus:shadow-outline-blue"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};
export default PopupShow;
