import React from 'react';

const Loading4Sec = async () => {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    return (
        <div>
            Result of Loading 4 Seconds
        </div>
    );
};

export default Loading4Sec;