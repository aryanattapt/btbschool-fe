import React, { useState, useMemo } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import PropTypes from 'prop-types';

// Set the worker for pdfjs
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

const PDFThumbnail = ({ file, onClick  }) => {
  const [numPages, setNumPages] = useState(null);

  const onLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  // Memoize the options object
  const pdfOptions = useMemo(() => ({
    workerSrc: `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`
  }), []);

  return (
    <div className="pdf-thumbnail" onClick={() => onClick(file)}>
      <Document
        file={file}
        onLoadSuccess={onLoadSuccess}
        options={pdfOptions}
      >
        {numPages && (
          <Page
            pageNumber={1} // You can choose which page to render as a thumbnail
            width={150} // Thumbnail width
            renderMode="canvas" // Render mode
          />
        )}
      </Document>
    </div>
  );
};

PDFThumbnail.propTypes = {
  file: PropTypes.string.isRequired,
};

export default PDFThumbnail;