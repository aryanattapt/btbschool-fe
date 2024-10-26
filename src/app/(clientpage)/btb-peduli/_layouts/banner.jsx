const BannerLayouts = ({btbPeduliData, language}) => {
  return (
    <>
      <div className="w-100% md:h-[475px]">
        <img
          src={`${btbPeduliData.bannerimage}`}
          alt="bannerbtbpeduli"
          className="md:h-full md:w-full object-cover"
        />
      </div>
    </>
  );
};

export default BannerLayouts;
