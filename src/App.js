// src/App.js
import React from 'react';
import PDFViewer from './PDFViewer';
import pdfUrl from "./aciano-company-profile.pdf";

function App() {
  // const pdfUrl = 'https://example.com/your-pdf-file.pdf';
//deploy URL: https://aciano-policies.netlify.app/
  return (
    <div className="App">
      <PDFViewer pdfUrl={pdfUrl} />
    </div>
  );
}

export default App;
