import {notFound} from "next/navigation";
const ProductDetail = (data) => {
    // console.table(data);
    // by default, there is 2 props:
    // 1. params -> the folder, ex: [productId]
    // 2. searchParams -> the optional params after ?, ex: for
    // // https://localhost:3000/products/1?key=plate
    // // the {key: 'plate'} is in searchParams

    // when productId = 1000 then will show not found page in app scope
    if (data.params.productId === "1000") {
        notFound();
    }

    return (
        <div>
            <h1>Product Detail {data.params.productId}</h1>
        </div>
    );
};

export default ProductDetail;