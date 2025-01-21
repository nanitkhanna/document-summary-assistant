import { AlertCircle } from "lucide-react";

const ErrorMessage = ({ message }) => {
  if (!message) return null;

  return (
    <div className="flex items-center gap-2 text-red-500 bg-red-50 p-4 rounded-md">
      <AlertCircle className="w-5 h-5" />
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
