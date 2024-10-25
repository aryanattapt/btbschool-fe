const BannerLayouts = ({contactUsData}) => {
  return (
    <>
      <div className="relative h-[475px] w-full">
        <img
          src = {`${contactUsData.bannerImage}`}
          alt="bannercontact"
          className="h-[475px] w-full object-cover"
        />
      </div>
    </>
  );
};

export default BannerLayouts;
