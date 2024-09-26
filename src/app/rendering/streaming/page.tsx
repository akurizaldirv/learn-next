import React, {Suspense} from 'react';
import Loading2Sec from "@/shared/components/loading2Sec/Loading2Sec";
import Loading4Sec from "@/shared/components/loading4sec/Loading4Sec";

const Streaming = () => {
    return (
        <div>
            <h1>This page is rendered using Streaming</h1>
            <p>The page will rendered after all components rendered except the component inside &apos;Suspense&apos;</p>

            <Suspense fallback={<p>...</p>}>
                <Loading2Sec />
            </Suspense>

            <Suspense fallback={<p>...</p>}>
                <Loading4Sec />
            </Suspense>
        </div>
    );
};

export default Streaming