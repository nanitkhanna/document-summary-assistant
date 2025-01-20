const {GoogleGenerativeAI} = require('@google/generative-ai');
const config = require('../config/config');

const genAI = new GoogleGenerativeAI(config.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({model: 'gemini-1.5-flash'});

//selecting prompt as per required length of summary based on user input
function promptGen({content, length}) {
  let prompt;

  switch (length) {
    case 'SHORT':
      prompt = `Please provide a concise summary of the following document in Markdown format with proper syntax, capturing the essential ideas in a brief, short form:\n\n${content}`;
      break;
    case 'MEDIUM':
      prompt = `Please summarize the following document in a medium-length format and in Markdown format with proper syntax, highlighting the key points and main ideas while keeping the summary informative but not too detailed:\n\n${content}`;
      break;
    case 'LONG':
      prompt = `Please provide a detailed summary of the following document in Markdown format with proper syntax, ensuring that all important points and main ideas are included in a comprehensive format. Capture enough context for a deeper understanding of the content:\n\n${content}`;
      break;
    default:
      throw new Error(
        'Invalid summary length. Please choose "SHORT", "MEDIUM", or "LONG".'
      );
  }

  return prompt;
}


//generates summary by calling gemini service 
// no need to handle error as handled by controller and then global handler
async function geminiSummary(content, length) {
  const prompt = promptGen({content, length});
  const result = await model.generateContent(prompt);
  return result.response.text();
}

module.exports = {
  geminiSummary
};
