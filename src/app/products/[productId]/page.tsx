import React from 'react';

const ProductDetail = (data) => {
    // console.table(data);
    // by default, there is 2 props:
    // 1. params -> the folder, ex: [productId]
    // 2. searchParams -> the optional params after ?, ex: for
    // // https://localhost:3000/products/1?key=plate
    // // the {key: 'plate'} is in searchParams


    return (
        <div>
            <h1>Product Detail {data.params.productId}</h1>
        </div>
    );
};

export default ProductDetail;