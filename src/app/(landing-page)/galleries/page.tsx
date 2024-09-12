import React, {ReactNode} from 'react';
import {Metadata} from "next";
import {galleries, GalleryImage} from "@/shared/data/galleries/galleries";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
    title: {
        absolute: "Gallery"
    }
}

const Gallery = () => {
    return (
        <div className={"px-8 py-8"}>
            <h1 className={"font-head text-8xl mb-8"}>Gallery</h1>
            <div className="grid grid-cols-4 gap-4">
                {galleries.map(({id, src, title}) => (
                    <Link href={`/galleries/${id}`} key={id}>
                        <Image src={src} alt={title} className={"w-full object-cover aspect-square"}/>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Gallery;