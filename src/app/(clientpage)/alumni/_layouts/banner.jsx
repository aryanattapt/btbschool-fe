const BannerLayouts = ({alumniPayload}) => {
  return (
    <>
      <div className="relative w-100% md:h-[475px]">
        {
          alumniPayload?.bannerimageurl && 
          <img
            src={alumniPayload?.bannerimageurl}
            alt="bannercontact"
            className="md:h-full md:w-screen object-cover xl:w-full xl:h-s"
          />
        }
      </div>
    </>
  );
};

export default BannerLayouts;
