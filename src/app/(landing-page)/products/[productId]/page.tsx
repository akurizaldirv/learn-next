import React from 'react';
import {Metadata} from "next";

type Props = {
    params: {
        productId: string;
    }
}

export const generateMetadata = ({params} : Props) : Metadata => {
    return {
        title: `${params.productId}`
    }
}

const ProductDetail = ({params} : Props) => {
    return (
        <div>
            Product {params.productId}
        </div>
    );
};

export default ProductDetail;