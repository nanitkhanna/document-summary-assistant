const LengthSelector = ({ selectedLength, onLengthSelect }) => {
  return (
    <div className="flex justify-center gap-4">
      {["Short", "Medium", "Long"].map((option) => (
        <button
          key={option}
          onClick={() => onLengthSelect(option)}
          type="button"
          className={`
                        px-6 py-2 rounded-md font-medium transition-all
                        ${
                          selectedLength === option
                            ? "bg-blue-500 text-white shadow-md"
                            : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
                        }
                    `}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default LengthSelector;
