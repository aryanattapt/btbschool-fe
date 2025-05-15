import { extractYouTubeVideoId } from "../../../../utils/youtubeExractor";

const PengenalanPage = ({ data, language }) => {
  return (
    <>
      <div className="relative">
        <div className="mt-10 mb-5 pl-10 md:pl-32 text-[#00305E] sm:justify-center">
          <h1 className="md:text-[35px] text-[25px] font-semibold">
            {data[language]?.title}
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            {data?.image1?.type?.includes("image") ? (
              <img
                src={`${data?.image1?.url}`}
                alt="PAUD"
                className="h-full w-full object-cover"
              />
            ) : (
              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${extractYouTubeVideoId(
                  data?.image1?.url
                )}`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            )}
          </div>
          <div className="content-center bg-[#EF802B]">
            <div className="p-5 text-left xl:text-[25px] 2xl:text-[25px] text-[14px] md:text-[20px] text-[#000000] text-pretty">
              {data[language]?.desc}
            </div>
          </div>
        </div>
        <div>
          <div className="mt-10 mb-5 pl-10 md:pl-32 text-[#00305E] sm:justify-center">
            <h1 className="md:text-[35px] text-[25px] font-semibold">
              {data[language]?.profileLearnerTitle}
            </h1>
          </div>
          <div className="flex justify-center">
            <img
              src={data?.profileLearnerImage}
              className="h-full w-[100%] 2xl:w-[75%] object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PengenalanPage;
