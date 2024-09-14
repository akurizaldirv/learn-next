import {StaticImageData} from "next/image";
import photo1 from "../../../assets/gallery-photo/1.jpeg";
import photo2 from "../../../assets/gallery-photo/2.jpg";
import photo3 from "../../../assets/gallery-photo/3.jpg";
import photo4 from "../../../assets/gallery-photo/4.jpg";
import photo5 from "../../../assets/gallery-photo/5.jpeg";
import photo6 from "../../../assets/gallery-photo/6.png";
import photo7 from "../../../assets/gallery-photo/7.jpg";
import { GalleryImageType } from "@/type/gallery";

export const galleries: GalleryImageType[] = [
    {
        id: 1,
        src: photo1,
        title: 'Clean Breeze Air Purifier - Model 1'
    },
    {
        id: 2,
        src: photo2,
        title: 'PureFlow X300 - Advanced Air Filtration'
    },
    {
        id: 3,
        src: photo3,
        title: 'EcoFresh Air Purifier - Sustainable & Efficient'
    },
    {
        id: 4,
        src: photo4,
        title: 'SilentAir Pro - Whisper Quiet Purification'
    },
    {
        id: 5,
        src: photo5,
        title: 'FreshAir Elite - High Performance Model'
    },
    {
        id: 6,
        src: photo6,
        title: 'UltraClean HEPA Purifier - Next-Gen Technology'
    },
    {
        id: 7,
        src: photo7,
        title: 'BreezeGuard Air Purifier - Total Air Solution'
    }
];