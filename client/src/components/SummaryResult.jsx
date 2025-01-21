import ReactMarkdown from "react-markdown";

const SummaryResult = ({ summary }) => {
  if (!summary) return null;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Generated Summary
      </h2>
      <div className="text-gray-600 leading-relaxed">
        {/* Render Markdown content */}
        <ReactMarkdown>{summary}</ReactMarkdown>
      </div>
    </div>
  );
};

export default SummaryResult;
