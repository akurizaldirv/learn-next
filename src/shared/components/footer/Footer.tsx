import React from 'react';

const FooterComponent = () => {
    return (
        <>
            <div className={"px-8"}>
                <div className="w-full h-[0.5px] bg-gray-300"></div>
            </div>
            <div className={"flex items-end px-8 pb-4 pt-32"}>
                <div className={"flex-1 text-8xl font-head"}>
                    Next
                </div>
                <div className={"flex-1 text-center"}>
                    &copy; {new Date().getFullYear()} by zaldev
                </div>
                <div className="flex-1 flex flex-col gap-2">
                    <div className={"flex flex-col gap-2 border border-black p-2 rounded-lg"}>
                        <h4 className={"text-2xl font-bold"}>Get the newsletter</h4>
                        <div className={"flex gap-2 items-center"}>
                            <div className="size-8 rounded bg-black text-white flex justify-center items-center">
                                &rarr;
                            </div>
                            <p className={"text-gray-600"}>zaldirvana@gmail.com</p>
                        </div>
                    </div>
                    <p className={"text-gray-600"}>
                        By sign in up, i agree with data protection of Next and Zaldev
                    </p>
                </div>
            </div>
        </>
    )
        ;
};

export default FooterComponent;