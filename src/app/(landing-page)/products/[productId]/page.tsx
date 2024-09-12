import React from 'react';
import {Metadata} from "next";
import {productData} from "@/shared/data/products/products";

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
    const data = productData.find(product => product.id === Number.parseInt(params.productId));
    if (!data) throw new Error("Product not found");

    return (
        <div>
            {data?.title}
        </div>
    );
};

export default ProductDetail;