const banner = ({calenderPayload}) => {
  return (
    <>
      <div className="relative md:h-[475px]">
        {
          calenderPayload?.bannerimageurl &&
          <img
            src={calenderPayload?.bannerimageurl}
            alt="bannercontact"
            className="md:h-full md:w-full object-cover"
          />
        }
      </div>
    </>
  );
};

export default banner;
