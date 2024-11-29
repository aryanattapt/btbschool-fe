const BannerHelpCenter = ({helpData}) => {
    return <div className="relative md:h-[475px]">
        {
                helpData?.alurpendaftaranimageurl &&
                <img
                    src={helpData?.bannerimageurl}
                    alt="banneraboutus"
                    className="md:h-full md:w-full object-cover"
                />
        }
    </div>
}

export default BannerHelpCenter;