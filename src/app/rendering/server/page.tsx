import React from 'react';
import Loading2Sec from "@/shared/components/loading2Sec/Loading2Sec";
import Loading4Sec from "@/shared/components/loading4sec/Loading4Sec";

const Server = () => {
    return (
        <div>
            <h1>This page is rendering with RSC (React Server Component)</h1>
            <p>This page will render after waiting the whole page rendered</p>

            <Loading2Sec />
            <Loading4Sec />
        </div>
    );
};

export default Server;