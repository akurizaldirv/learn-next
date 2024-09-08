import React from 'react';

const ReviewDetail = ({params}) => {
    console.log(params);
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