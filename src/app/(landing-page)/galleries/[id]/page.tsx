import React from 'react';
import {galleries, GalleryImage} from "@/shared/data/galleries/galleries";
import Image from "next/image";
import Link from "next/link";
import {notFound} from "next/navigation";

const GalleryDetail = ({params}: {
    params: {
        id: string
    }
}) => {
    const data: GalleryImage | undefined = galleries.find((gallery: GalleryImage) => gallery.id === Number.parseInt(params.id));
    if (!data) notFound();

    return (
        <div className={"px-4 py-8 w-screen h-full flex flex-col gap-4"}>
            <h1 className={"font-head text-4xl font-bold text-center"}>{data.title}</h1>
            <div className={"w-[70%] mx-auto  flex flex-col gap-4"}>
                <Image src={data.src} alt={data.title} className={"w-full rounded-2xl"} />
                <Link href={"/galleries"} className={"self-end rounded-2xl bg-black text-white w-fit px-4 py-1"}>Back</Link>
            </div>
        </div>
    );
};

export default GalleryDetail;