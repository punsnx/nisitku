const NisitCard = ({ isOpen, onClose }) => {
  return (
    <>
      <div
        className={`fixed bottom-0 left-0 w-full h-5/6 bg-white rounded-t-3xl shadow-top-md transform transition-transform ${
          isOpen ? "translate-y-0" : "translate-y-full"
        } transform-gpu`}
      >
        <div className="p-4">
          <label>NisitCard</label>
        </div>
        <button className="absolute top-2 right-2" onClick={onClose}>
          Close
        </button>
      </div>
    </>
  );
};
export default NisitCard;
