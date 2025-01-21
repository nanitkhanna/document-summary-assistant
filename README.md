# Document Summary Assistant

Live URL: https://summarizer.nanitkhanna.com

## Project Description
Document Summary Assistant is an application that generates smart summaries from uploaded PDFs or scanned image files. It simplifies the process of extracting key points and insights from lengthy documents.

## Features
- Upload PDF and image files for processing.
- Extract text using OCR (Tesseract.js) and PDF parsing.
- Generate summaries with customizable lengths: short, medium, or long.
- Intuitive and mobile-responsive user interface.

## Installation
1. Clone the repository:
   ```
   git clone https://github.com/nanitkhanna/document-summary-assistant.git
   ```

2. Navigate to the `server` directory:
   ```
   cd server
   ```

3. Install server dependencies:
   ```
   npm install
   ```

4. Navigate to the `client` directory:
   ```
   cd ../client
   ```

5. Install client dependencies:
   ```
   npm install
   ```

6. Create `.env` files:
   - In the `server` directory, create a `.env` file and configure it based on `.env.example`.
   - In the `client` directory, create a `.env` file and configure it based on `.env.example`.

7. Start the development servers:
   - In the `server` directory:
     ```
     npm run dev
     ```
   - In the `client` directory:
     ```
     npm run dev
     ```

## Deployment
The project is deployed using the following tools:
- **Cloud Provider**: AWS EC2
- **Web Server**: nginx
- **Process Management**: pm2
- **Static File Serving**: serve

## Tech Stack
### Backend
- Programming Language: JavaScript (Node.js)
- Framework: Express.js
- Optical Character Recognition (OCR): Tesseract.js
- PDF Parsing: PDF-Parse
- Middleware and Utilities: celebrate, multer, cors, dotenv, http-status

### Frontend
- Programming Language: JavaScript
- Library: React
- Routing: React-Router-DOM
- File Uploads: React-Dropzone
- Markdown Rendering: React-Markdown
- HTTP Requests: Axios
- Icons: Lucide-React

## Usage
1. Open the live URL or run the application locally.
2. Upload a PDF or image file.
3. Select the desired summary length (short, medium, or long).
4. View the generated summary.


## License
This project is licensed under the GNU General Public License.
