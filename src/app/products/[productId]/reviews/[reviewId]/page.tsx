import React from 'react';
import {notFound} from "next/navigation";

const ReviewDetail = ({params}) => {
    console.log(params);

    // to display not found page on review scope
    if (params.productId === "1000") {
        notFound();
    }


    return (
        <div>
            <ul>
                <li>
                    Review ID: {params.reviewId}
                </li>
                <li>
                    Product ID: {params.productId}
                </li>
            </ul>
        </div>
    );
};

export default ReviewDetail;