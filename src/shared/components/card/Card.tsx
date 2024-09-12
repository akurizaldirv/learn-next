import React, {ReactNode} from 'react';

const CardComponent = ({children} : {children: ReactNode}) => {
    return (
        <div className={"flex-1 justify-center items-center border border-black w-full h-full p-4 rounded-xl"}>
            {children}
        </div>
    );
};

export default CardComponent;