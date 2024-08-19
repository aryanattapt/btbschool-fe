"use client";
import HTMLFlipBook from "react-pageflip";
import React, { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css"; // For PDF annotation styles
import "react-pdf/dist/esm/Page/TextLayer.css";
import "core-js/full/promise/with-resolvers";
import _ from "lodash";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const BulletinFlipBook = ({ url }) => {
	const [totalPages, setTotalPages] = useState(0);
	const [pageNumber, setPageNumber] = useState(1);
	const flipBookRef = React.useRef(null);
	const [deviceType, setDeviceType] = useState("desktop"); // Default to desktop
	const [size, setSize] = useState({
		width: 0,
		height: 0,
	});

	useEffect(() => {
		console.log("masuk sini ga");
		if (window) {
			const container = window;
			console.log({ container });
		}
	}, []);

	useEffect(() => {
		const handleResize = () => {
			const width = window.innerWidth;
			if (width < 768) {
				setSize({
					width: width - 80,
					height: (width - 80) * 1.414,
				});
				setDeviceType("mobile");
			} else if (width >= 768 && width < 1024) {
				setDeviceType("tablet");
			} else {
				setDeviceType("desktop");
			}
		};

		handleResize(); // Set initial device type
		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const onLoadSuccess = ({ numPages }) => {
		setTotalPages(numPages);
	};

	const onPage = (e) => {
		setPageNumber(e.data);
	};

	const getWidth = () => {
		// if (deviceType === "mobile") return 360;
		if (deviceType === "mobile") return size.width;
		else if (deviceType === "tablet") return 380;
		return 400;
	};

	const getHeight = () => {
		// if (deviceType === "mobile") return 160;
		if (deviceType === "mobile") return size.height;
		else if (deviceType === "tablet") return 180;
		return 200;
	};

	return (
		<Document file={url} onLoadSuccess={onLoadSuccess}>
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
				mobileScrollSupport={true}
				onFlip={onPage}
				ref={flipBookRef}
			>
				{_.times(totalPages, (i) => {
					return (
						<CustomPage
							key={i}
							pageNumber={i + 1}
							width={getWidth()}
							height={getHeight()}
						/>
					);
				})}
			</HTMLFlipBook>
		</Document>
	);
};

const CustomPage = React.forwardRef(({ pageNumber, width, height }, ref) => {
	return (
		<div ref={ref}>
			<Page pageNumber={pageNumber} width={width} height={height} />
		</div>
	);
});

export default BulletinFlipBook;
