import { Loader2 } from "lucide-react";

const GenerateButton = ({ onClick, disabled, isLoading }) => {
  return (
    <div className="flex justify-center">
      <button
        onClick={onClick}
        disabled={disabled}
        type="button"
        className={`
            px-8 py-3 rounded-md font-medium text-white
            transition-all duration-200
            transform hover:scale-105 active:scale-95
            flex items-center gap-2
            ${
              disabled
                ? "bg-gray-300 cursor-not-allowed transform-none"
                : "bg-blue-500 hover:bg-blue-600 shadow-md hover:shadow-lg"
            }
            `}
      >
        {isLoading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Generating...
          </>
        ) : (
          "Generate Summary"
        )}
      </button>
    </div>
  );
};

export default GenerateButton;
