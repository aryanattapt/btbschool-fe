import JustifiedContentText from "../../../_components/JustifiedContentText";

const TanganPenolong = ({ data, language }) => {
	return (
		<div id="tangan-penolong">
			<div className="flex flex-col items-start">
				<h2 className="text-[#00305E] text-[25px] md:text-[50px] font-semibold mx-5 my-5 md:mx-32 md:my-[35px] mb-5">
					{data[language]?.tanganpenolongsubtitle}
				</h2>
				<img
					src={`${data?.tanganpenolongimage1}`}
					alt="btb-peduli2"
					className="w-full xl:h-[290px] md:h-auto object-cover mb-4"
				/>
				<div className="mx-10 md:mx-32 mt-5 md:mt-20 mb-5">
					<p className="text-[#00305E] text-[14px] sm:text-center md:text-[30px] font-semibold md:mb-[25px] mb-[5px]">
						{data[language]?.text10}
					</p>
					<JustifiedContentText>{data[language]?.text11}</JustifiedContentText>
					<JustifiedContentText>{data[language]?.text12}</JustifiedContentText>
				</div>
				<img
					src={`${data?.tanganpenolongimage2}`}
					alt="btb-peduli7"
					// className="w-full xl:w-[1460.8px] xl:h-[308px] object-cover mb-5"
					className="w-full xl:h-[290px] md:h-auto object-cover mb-4"
				/>
				<div className="mx-10 md:mx-32 mt-5 md:mt-20 mb-5">
					<JustifiedContentText>{data[language]?.text13}</JustifiedContentText>
				</div>
			</div>
		</div>
	);
};

export default TanganPenolong;
