import React from 'react';

const HeaderComponent = () => {
    return (
        <>
            <div className="py-4 px-8 flex justify-between">
                <div className="text-3xl font-bold font-head">Learn Next</div>
                <div className="flex justify-end items-center gap-4 ">
                    <div className="w-16 h-4 rounded-2xl bg-black hover:w-20 animation"></div>
                    <div className="w-16 h-4 rounded-2xl bg-black hover:w-20 animation"></div>
                    <div className="w-16 h-4 rounded-2xl bg-black hover:w-20 animation"></div>
                </div>
            </div>
            <div className={"px-8"}>
                <div className="w-full h-[0.5px] bg-gray-300"></div>
            </div>
        </>
    );
};

export default HeaderComponent;