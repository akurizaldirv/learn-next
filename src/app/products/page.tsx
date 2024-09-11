"use client";
import {productData} from "@/shared/data/products/products";
import {useRouter} from "next/navigation";

const ProductList = () => {
    const router = useRouter();
    const handleOpenProduct = (id: number) => {
        router.push(`/products/${id}`);
    }
    return (
        <div className={"px-8 py-8"}>
            <h1 className={"text-8xl font-head"}>Our Products</h1>
            <div className={"products"}>
                <table className={"w-full mt-10"}>
                    <thead className={"text-xl border-b-[2px] border-gray-300"}>
                    <tr>
                        <th className={"text-start py-4"}>No.</th>
                        <th className={"text-start py-4"}>Title.</th>
                        <th className={"text-start py-4"}>Image.</th>
                    </tr>
                    </thead>
                    <tbody>
                    {productData.map((product, idx) => (
                        <tr
                            key={product.id}
                            onClick={() => handleOpenProduct(product.id)}
                            className={"border-b-[1px] border-gray-200 bg-white hover:bg-gray-100 rounded-2xl animation cursor-pointer"}>
                            <td className={"pb-6 ps-2"}>{idx + 1}.</td>
                            <td className={"py-4"}>
                                <h3 className={"font-bold"}>{product.title}</h3>
                                <p>{product.description.substring(0, 30)} ...</p>
                            </td>
                            <td className={"py-4"}>&rarr;</td>
                        </tr>
                    ))}
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default ProductList;