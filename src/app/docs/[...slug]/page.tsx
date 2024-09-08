import React from 'react';

const Docs = ({params}: {
    params: {
        slug: string[]
    }
}) => {
    console.table(params);

    return (
        <div>
            <div>
                {params.slug.map((doc: string, idx: number) => {
                    return (
                        <span key={idx}>{doc} {idx !== params.slug.length - 1 && (<span> &rarr; </span>)}</span>
                    );
                })}
            </div>

            <h1>Docs Example Page</h1>
        </div>
    );
};

export default Docs;