import React from 'react';

const Loading2Sec = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return (
        <div>
            Result of Loading 2 Seconds
        </div>
    );
};

export default Loading2Sec;