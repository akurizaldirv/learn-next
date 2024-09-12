import React, {ReactNode} from 'react';

const ModalComponent = ({children}: { children: ReactNode }) => {
    return (
        <div
            className={"w-screen h-screen z-50 absolute left-0 top-0 bg-black bg-opacity-70 flex justify-center items-center"}>
            {children}
        </div>
    );
};

export default ModalComponent;