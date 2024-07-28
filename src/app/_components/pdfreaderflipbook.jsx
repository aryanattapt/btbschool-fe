'use client'
import HTMLFlipBook from 'react-pageflip';
import React, { useRef, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'; // For PDF annotation styles
import "react-pdf/dist/esm/Page/TextLayer.css";
import 'core-js/full/promise/with-resolvers';
import { Button } from 'flowbite-react';
import _ from "lodash";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const CustomPage = React.forwardRef(({ pageNumber, width }, ref) => {
    return (
      <div ref={ref}>
        <Page pageNumber={pageNumber} width={width} />
      </div>
    );
});

const PdfViewer = ({ url }) => {
    const [docRef, setDocRef] = useState()
    const [numPages, setNumPages] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);

    const onLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    const handlePageChange = (delta) => {
        setPageNumber((prevPageNumber) => Math.max(1, Math.min(prevPageNumber + delta, numPages)));
    };

    return (
        <div style={{ maxWidth: '100%' }}>
            <Document file={url} onLoadSuccess={onLoadSuccess} >
                <HTMLFlipBook
                    width={550}
                    height={733}
                    size="stretch"
                    minWidth={315}
                    maxWidth={1000}
                    minHeight={400}
                    maxHeight={1533}
                    maxShadowOpacity={0.5}
                    showCover={true}
                    showPageCorners={true}
                    mobileScrollSupport={true}
                    className="demo-book"
                >
                    {
                        _.times(numPages, (i) => {
                            return <CustomPage pageNumber={i+1} width={550}/>
                        })
                    }
                </HTMLFlipBook>
            </Document>
            <div className="flex flex-wrap gap-2" style={{ marginTop: '100px' }}>
                <Button color="blue" onClick={() => handlePageChange(-1)} disabled={pageNumber <= 1}>Previous</Button>
                <Button color="success" onClick={() => handlePageChange(1)} disabled={pageNumber >= numPages}>Next</Button>
            </div>
            <p className="text-gray-500 dark:text-gray-400">
                Page {pageNumber} of {numPages}
            </p>
        </div>
    );
};

export default PdfViewer;