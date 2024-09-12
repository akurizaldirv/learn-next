"use client";
import React from 'react';

const Error = ({error} : {error: Error}) => {
    return (
        <div className={"bg-black text-white h-full flex justify-center items-center"}>
            <p className={"px-2 bg-white text-black"}>* Error: {error.message}</p>
        </div>
    );
};

export default Error;