const JenjangPendidikanPage = ({ data, language }) => {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5 p-5">
          {data[language]?.gradelists?.map((val, idx) => (
            <div className="m-5" key={idx}>
              <a href={`${val?.url}`} target="_blank" rel="noopener noreferrer">
                <div
                  className="xl:h-[346px] xl:w-[552px] md:h-[230px] md:w-[330px] h-[130px] w-[230px] lg:h-[230px] lg:w-[430px] sm:w-[130px] sm:h-[230px] bg-cover bg-center rounded-[50px]"
                  style={{ backgroundImage: `url(${val?.image})` }}
                >
                  <div className="h-full bg-black bg-opacity-50 hover:bg-[#243F6D] hover:opacity-80 rounded-[50px]">
                    <div className="flex items-end justify-start pl-10 pb-10 hover:pb-20 h-full text-white group">
                      <div>
                        <p className="md:text-[35px] text-justify font-bold text-[#FFFFFF]">
                          {val?.title}
                        </p>
                        <p className="underline">{val?.buttoncontent}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default JenjangPendidikanPage;
