import React, {ReactNode} from 'react';

// template is like layout, but only share component and will re-render during route changing
// layout will re-use state and effect, but template doesn't

const AuthLayout = ({children}: { children: ReactNode }) => {
    return (
        <div className={"h-screen flex justify-center items-center text-center"}>
            <div className={"border-2 border-black rounded-2xl p-8"}>
                <h2 className={"italic flex justify-center items-center gap-2"}><div className={"w-10 h-0.5 bg-black"}></div>Authentication</h2>
                {children}
            </div>
        </div>
    );
};

export default AuthLayout;