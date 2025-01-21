import { FileUp } from "lucide-react";

const FileUpload = ({ getRootProps, getInputProps, isDragActive, file }) => {
  return (
    <div
      {...getRootProps()}
      className={`
            border-2 border-dashed rounded-lg p-8
            transition-colors duration-200 ease-in-out
            flex flex-col items-center justify-center
            min-h-[200px] cursor-pointer
            ${
              isDragActive
                ? "border-blue-400 bg-blue-50"
                : "border-gray-300 hover:border-gray-400"
            }
            ${file ? "bg-green-50 border-green-300" : ""}
        `}
    >
      <input {...getInputProps()} />
      <FileUp
        className={`w-12 h-12 mb-4 ${
          file ? "text-green-500" : "text-gray-400"
        }`}
      />

      {file ? (
        <div className="text-center">
          <p className="text-green-600 font-medium">
            File uploaded successfully!
          </p>
          <p className="text-sm text-gray-500 mt-1">{file.name}</p>
        </div>
      ) : (
        <div className="text-center">
          <p className="text-lg font-medium text-gray-700">
            {isDragActive
              ? "Drop your file here"
              : "Drag & drop your file here"}
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Supports PNG, JPEG, and PDF files
          </p>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
