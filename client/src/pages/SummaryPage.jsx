import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import {
  Header,
  FileUpload,
  ErrorMessage,
  LengthSelector,
  GenerateButton,
  SummaryResult,
} from "../components";
import { apiCall } from "../axios/register"; // Import the `apiCall` function
import { summaryRoute } from "../axios/endpoints"; // Import the summary route

const SummaryPage = () => {
  const [file, setFile] = useState(null);
  const [length, setLength] = useState(null);
  const [error, setError] = useState(null);
  const [summary, setSummary] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const onDrop = useCallback((acceptedFiles) => {
    setError(null);
    setSummary(null);
    setLength(null);

    const uploadedFile = acceptedFiles[0];

    if (uploadedFile) {
      const validTypes = ["image/png", "image/jpeg", "application/pdf"];
      if (validTypes.includes(uploadedFile.type)) {
        setFile(uploadedFile);
      } else {
        setError("Please upload only png, jpg, jpeg, or PDF files.");
        setFile(null);
      }
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpg", ".jpeg"],
      "application/pdf": [".pdf"],
    },
    multiple: false,
  });

  const handleGenerate = async () => {
    if (!file || !length) {
      setError("Please upload a file and select a length option.");
      return;
    }

    setIsLoading(true);
    setError(null);
    setSummary(null);

    const formData = new FormData();
    formData.append("file", file);

    try {
      // Dynamically build the route with the query parameter
      const routeWithQuery = `${summaryRoute}?length=${length.toUpperCase()}`;

      // Use `apiCall` with the constructed route
      const { status, message, data } = await apiCall(
        "post",
        routeWithQuery,
        formData
      );

      if (status !== 200) {
        throw new Error(message);
      }
      setSummary(data);
    } catch (err) {
      console.log(err);
      setError('Some server error occured while fetching summary.Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="space-y-6">
          <FileUpload
            getRootProps={getRootProps}
            getInputProps={getInputProps}
            isDragActive={isDragActive}
            file={file}
          />
          <ErrorMessage message={error || ""} />
          <LengthSelector selectedLength={length} onLengthSelect={setLength} />
          <GenerateButton
            onClick={handleGenerate}
            disabled={!file || !length || isLoading}
            isLoading={isLoading}
          />
          <SummaryResult summary={summary} />
        </div>
      </main>
    </div>
  );
};

export default SummaryPage;
