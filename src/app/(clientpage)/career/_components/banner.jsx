const BannerLayouts = ({payload}) => {
    return (
      <>
        <div className="relative w-100% xl:h-[475px]">
          {
            payload?.image &&
            <img
              src={payload?.image}
              alt="banneraboutus"
              className="md:h-full md:w-screen object-cover xl:w-full xl:h-s"
            />
          }
        </div>
      </>
    );
  };
  
  export default BannerLayouts;
  