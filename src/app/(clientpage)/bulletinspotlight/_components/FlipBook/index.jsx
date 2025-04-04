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
		const handleResize = () => {
			const width = window.innerWidth;
			// if (width >= 1024) {
			// 	setDeviceType("lg");
			// } else if (width >= 768 && width < 1024) {
			// 	setDeviceType("md");
			// } else if (width >= 400 && width <= 768) {
			// 	setDeviceType("sm");
			// } else {
			// 	setDeviceType("xs");
			// }
			if (width >= 1024) {
				setDeviceType("lg");
			} else if (width >= 700 && width < 1024) {
				setDeviceType("md");
			} else if (width >= 500 && width < 700) {
				setDeviceType("sm");
			} else {
				setDeviceType("xs");
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
		if (deviceType == "lg") return 400;
		else if (deviceType === "md") return 350;
		else if (deviceType === "sm") return 440;
		else if (deviceType === "xs") return 300;
	};

	const getHeight = () => {
		if (deviceType == "lg") return 160;
		else if (deviceType === "md") return 200;
		else if (deviceType === "sm") return 300;
		else if (deviceType === "xs") return 160;
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
