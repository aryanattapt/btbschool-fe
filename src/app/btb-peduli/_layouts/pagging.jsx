"use client";
const PaggingLayouts = () => {
  return (
    <>
      <div className="grid grid-cols-2 font-sans text-[#00305E] md:py-10 md:mb-[30px] border-collapse	border border-slate-400">
        <div className="content-center">
          <h1 className="md:text-[35px] text-center font-medium	">BTB Peduli</h1>
        </div>
        <div className="grid grid-cols-2">
          <div>
            <h1 className="md:text-[25px] text-center">Peduli Lingkungan</h1>
          </div>
          <div>
            <h1 className="md:text-[25px] text-center">Sukarelawan</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaggingLayouts;
