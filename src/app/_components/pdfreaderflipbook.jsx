'use client'
import HTMLFlipBook from 'react-pageflip';
import React, { useEffect, useRef, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'; // For PDF annotation styles
import "react-pdf/dist/esm/Page/TextLayer.css";
import 'core-js/full/promise/with-resolvers';
import _ from "lodash";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const CustomPage = React.forwardRef(({ pageNumber, width, height }, ref) => {
    return (
      <div ref={ref}>
        <Page pageNumber={pageNumber} width={width} height={height} />
      </div>
    );
});

const PdfViewer = ({ url, height, width }) => {
    const [docRef, setDocRef] = useState()
    const [totalPages, setTotalPages] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);
    const flipBookRef = React.useRef(null);

    const onLoadSuccess = ({ numPages }) => {
        setTotalPages(numPages);
    };

    const onPage = (e) => {
        setPageNumber(e.data)
    }

    return (
        <Document file={url} onLoadSuccess={onLoadSuccess} >
            <HTMLFlipBook
                width={width}
                height={height}
                size="stretch"
                maxShadowOpacity={0.5}
                showCover={true}
                showPageCorners={true}
                mobileScrollSupport={true}
                className="demo-book"
                onFlip={onPage}
                ref={flipBookRef}
            >
                {
                    _.times(totalPages, (i) => {
                        return <CustomPage key={i} pageNumber={i+1} width={400} height={200}/>
                    })
                }
            </HTMLFlipBook>
        </Document>
    );
};

export default PdfViewer;