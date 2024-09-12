import React from "react";

const GalleryLayout = (params: { children: React.ReactNode}) => {
    return (
        <div>
            {params.children}
        </div>
    );
};

export default GalleryLayout;