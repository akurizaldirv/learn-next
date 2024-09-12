"use client";
import React from 'react';

const Error = ({error} : {error: Error}) => {
    return (
        <div className={"text-center w-full py-20"}>
            * {error.message}
        </div>
    );
};

export default Error;