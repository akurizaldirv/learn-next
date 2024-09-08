import React from 'react';
import {notFound} from "next/navigation";

const ReviewList = ({params}) => {
    if (params.productId === "1000") {
        notFound();
    }

    return (
        <div>
            Review List for {params.productId}
        </div>
    );
};

export default ReviewList;