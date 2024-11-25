const Content = ({ payload, content, language }) => {
    const formatDate = (dateString) => {
        const options = { day: '2-digit', month: 'long', year: 'numeric' };
        return new Intl.DateTimeFormat('en-GB', options).format(new Date(dateString));
    };

    return (
        <div className="mx-10 md:mx-32 mt-10 mb-5 grid grid-cols-2 gap-2 md:gap-1">
            {content.tableHeader.map((header, idxHeader) => (
                <div key={idxHeader} className="py-2 px-5 text-[20px] text-white bg-[#00305E]">
                    {header}
                </div>
            ))}

            {payload.map((val, idx) => (
                <>
                    {/* First column: Date */}
                    <div key={`date-${idx}`} className={`py-2 px-5 border-b ${idx % 2 === 0 ? 'bg-slate-200' : 'bg-slate-400'} hover:bg-slate-100 text-black`}>
                        <p>{formatDate(val?.date) || '-'}</p>
                    </div>

                    {/* Second column: Activity */}
                    <div key={`activity-${idx}`} className={`py-2 px-5 border-b ${idx % 2 === 0 ? 'bg-slate-200' : 'bg-slate-400'} hover:bg-slate-100 text-black`}>
                        <p>{val[language]?.activity || '-'}</p>
                    </div>
                </>
            ))}
        </div>
    );
};

export default Content;
