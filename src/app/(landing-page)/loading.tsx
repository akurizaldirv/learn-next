import React from 'react';

const Loading = () => {
    return (
        <div className={"w-full py-8 flex justify-center items-center"}>
            <div className={"size-8 border-2 border-black border-b-white animate-spin rounded-full"}></div>
        </div>
    );
};

export default Loading;