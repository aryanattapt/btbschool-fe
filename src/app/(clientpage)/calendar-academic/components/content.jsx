const Content = ({payload}) => {
    const formatDate = (dateString) => {
        const options = { day: '2-digit', month: 'long', year: 'numeric' };
        return new Intl.DateTimeFormat('en-GB', options).format(new Date(dateString));
    };

    return <>
        <div className="mx-10 md:mx-32 mt-10 mb-5 grid grid-cols-2 gap-2 md:gap-1">
            <div>
                <div className="py-2 px-5 text-[20px] text-white bg-[#00305E]">
                    Date
                </div>
                <div>
                    {
                        payload.map((val, idx) => (
                            <div
                                key={idx}
                                className={`py-2 px-5 border-b ${
                                    idx % 2 === 0 ? 'bg-slate-200' : 'bg-slate-400'
                                } hover:bg-slate-100 text-black`}
                            >
                                <p>{formatDate(val.date)}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div>
                <div className="py-2 px-5 text-[20px] text-white bg-[#00305E]">
                    Activity
                </div>
                <div>
                    {
                        payload.map((val, idx) => (
                            <div 
                                key={idx}
                                className={`py-2 px-5 border-b ${
                                    idx % 2 === 0 ? 'bg-slate-200' : 'bg-slate-400'
                                } hover:bg-slate-100 text-black`}
                            >
                                <p>{val.activity}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </>
}

export default Content;